/**
 * Clean up parks.json data:
 * - Generate visitor-friendly descriptions for parks with null or database-note descriptions
 * - Ensure every park has hours (default "Dawn to Dusk")
 * - Ensure every park has a non-empty amenities array
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "parks.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Patterns that indicate database/admin notes rather than visitor descriptions
const BAD_DESC_PATTERNS = /parcel|ROW area|ROW areas|leased from|Parcel data|built on a portion|Entrance is between|crosses numerous|Two parcels|Clouded Owner|Info from Parks|Town of James Island Park although|Multu-use sidewalk|maintained by Parks Dept|Renamed at|Property owned|Owned by|Part of original|Sidewalk area adjacent|Former .* property|Cemetery and many|City maintined|Building owned|Harborwalk from/i;

// Type-specific descriptors
const TYPE_LABELS = {
  park: "park",
  recreation: "recreation center",
};

// Area descriptors for flavor
const AREA_FLAVOR = {
  Peninsula: "in historic downtown Charleston",
  "West Ashley": "in the West Ashley area of Charleston",
  "James Island": "on James Island",
  "Johns Island": "on Johns Island",
  "Daniel Island": "on Daniel Island",
  Cainhoy: "in the Cainhoy area of Charleston",
};

// Name-based hints for better descriptions
function getNameHint(name) {
  const lower = name.toLowerCase();
  if (lower.includes("greenway") || lower.includes("bike path")) return "trail";
  if (lower.includes("playground")) return "playground";
  if (lower.includes("garden") || lower.includes("square") || lower.includes("mall")) return "garden";
  if (lower.includes("tennis")) return "tennis facility";
  if (lower.includes("soccer") || lower.includes("baseball") || lower.includes("softball")) return "sports complex";
  if (lower.includes("boat") || lower.includes("dock") || lower.includes("landing") || lower.includes("access")) return "water access point";
  if (lower.includes("memorial")) return "memorial park";
  if (lower.includes("lake")) return "lakeside park";
  if (lower.includes("riverwalk") || lower.includes("waterfront")) return "waterfront park";
  if (lower.includes("community")) return "community park";
  if (lower.includes("recreation") || lower.includes("complex")) return "recreation complex";
  return null;
}

// Default amenities by park type hints
function getDefaultAmenities(park) {
  const lower = park.name.toLowerCase();
  if (lower.includes("greenway") || lower.includes("bike path")) return ["Walking Path", "Cycling"];
  if (lower.includes("playground")) return ["Playground"];
  if (lower.includes("garden") || lower.includes("square")) return ["Walking Path", "Green Space"];
  if (lower.includes("tennis")) return ["Tennis"];
  if (lower.includes("soccer")) return ["Soccer"];
  if (lower.includes("baseball") || lower.includes("softball")) return ["Baseball"];
  if (lower.includes("boat") || lower.includes("dock") || lower.includes("landing") || lower.includes("access")) return ["Water Access"];
  if (lower.includes("lake")) return ["Green Space"];
  if (lower.includes("memorial")) return ["Green Space"];
  if (lower.includes("riverwalk") || lower.includes("waterfront")) return ["Walking Path", "Water Access"];
  return ["Green Space"];
}

function generateDescription(park) {
  const nameHint = getNameHint(park.name);
  const typeLabel = nameHint || TYPE_LABELS[park.type] || "green space";
  const areaPhrase = AREA_FLAVOR[park.neighborhood] || "in Charleston";

  let sentences = [];

  // Sentence 1: What it is and where
  if (nameHint === "trail" || nameHint === "cycling path") {
    sentences.push(`${park.name} is a popular multi-use path ${areaPhrase}, ideal for walking, jogging, and cycling.`);
  } else if (nameHint === "water access point") {
    sentences.push(`${park.name} is a public ${typeLabel} ${areaPhrase}, providing access to local waterways.`);
  } else if (nameHint === "memorial park") {
    sentences.push(`${park.name} is a peaceful memorial ${areaPhrase}, offering a place for quiet reflection and remembrance.`);
  } else if (nameHint === "waterfront park") {
    sentences.push(`${park.name} is a scenic waterfront space ${areaPhrase}, featuring views of the surrounding waterways.`);
  } else {
    sentences.push(`${park.name} is a neighborhood ${typeLabel} ${areaPhrase}.`);
  }

  // Sentence 2: Amenities
  if (park.amenities.length > 0) {
    const amenityList = park.amenities.slice(0, 4).map(a => a.toLowerCase()).join(", ");
    sentences.push(`Visitors can enjoy ${amenityList}.`);
  } else {
    // Generate amenity-less description based on type
    if (nameHint === "garden") {
      sentences.push("The park offers a quiet green space for relaxation and leisurely strolls.");
    } else if (nameHint === "playground") {
      sentences.push("A great spot for families with children to play and enjoy the outdoors.");
    } else {
      sentences.push("A welcoming green space for the local community to enjoy fresh air and outdoor time.");
    }
  }

  // Sentence 3: Size context (if we have area data) or general closer
  if (park.areaSqFt && park.areaSqFt > 100000) {
    const acres = (park.areaSqFt / 43560).toFixed(1);
    sentences.push(`The ${acres}-acre site provides ample room for outdoor recreation.`);
  } else if (park.areaSqFt && park.areaSqFt < 5000) {
    sentences.push("A charming pocket park perfect for a quick break or a peaceful moment outdoors.");
  }

  return sentences.join(" ");
}

let descFixed = 0;
let hoursFixed = 0;
let amenitiesFixed = 0;

for (const park of data.parks) {
  // Fix descriptions
  if (park.description === null || BAD_DESC_PATTERNS.test(park.description)) {
    park.description = generateDescription(park);
    descFixed++;
  }

  // Fix hours
  if (park.hours === null) {
    park.hours = "Dawn to Dusk";
    hoursFixed++;
  }

  // Fix empty amenities
  if (park.amenities.length === 0) {
    park.amenities = getDefaultAmenities(park);
    amenitiesFixed++;
  }
}

// Write cleaned data
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");

console.log(`Cleaned parks.json:`);
console.log(`  Descriptions fixed: ${descFixed}`);
console.log(`  Hours fixed: ${hoursFixed}`);
console.log(`  Amenities fixed: ${amenitiesFixed}`);
console.log(`  Total parks: ${data.parks.length}`);
