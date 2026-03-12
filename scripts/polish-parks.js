#!/usr/bin/env node
/**
 * polish-parks.js
 * Cleans data/parks.json: deduplicates, marks future parks, rewrites descriptions,
 * and adds categoryImage fields.
 */

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "data", "parks.json");

/* ─── 1D: Category Image Mapping ─── */
function getCategoryImage(amenities) {
  const a = amenities.map((x) => x.toLowerCase());
  if (a.includes("dog park")) return "dog-park";
  if (a.includes("fishing") || a.includes("boating") || a.includes("water access"))
    return "fishing";
  if (a.includes("walking path") || a.includes("cycling") || a.includes("trails"))
    return "trails";
  if (a.includes("playground")) return "playground";
  if (
    a.includes("baseball") ||
    a.includes("basketball") ||
    a.includes("soccer") ||
    a.includes("tennis") ||
    a.includes("multi-purpose field")
  )
    return "sports";
  if (a.includes("picnic area")) return "picnic";
  if (a.includes("restrooms")) return "recreation";
  return "green-space";
}

/* ─── 1C: Description Generation ─── */

// Templates for standard neighborhood parks (1-2 generic amenities)
const STANDARD_TEMPLATES = [
  (p) =>
    `A tree-shaded neighborhood park in ${p.neighborhood}, ideal for afternoon walks${p.amenities.includes("Playground") ? " and letting kids burn off energy on the playground" : " and a bit of fresh air"}.`,
  (p) =>
    `One of ${p.neighborhood}'s go-to green spaces for ${p.amenities.length > 0 ? p.amenities[0].toLowerCase() : "outdoor relaxation"} and casual recreation.`,
  (p) =>
    `A quiet pocket of green in ${p.neighborhood} where residents come to unwind under the live oaks.`,
  (p) =>
    `This ${p.neighborhood} park offers a shady retreat from the Charleston heat with open lawns and room to play.`,
  (p) =>
    `A well-loved community park in ${p.neighborhood}${p.amenities.length > 0 ? ` with ${p.amenities[0].toLowerCase()}` : ""} — a favorite stop for families in the neighborhood.`,
  (p) =>
    `Tucked into a ${p.neighborhood} residential block, this park provides a welcome green break from the surrounding streets.`,
  (p) =>
    `Residents of ${p.neighborhood} gather here for fresh air and easy access to a bit of nature without leaving the neighborhood.`,
  (p) =>
    `A small but cherished green space in ${p.neighborhood} that serves as the block's backyard for picnics and play.`,
  (p) =>
    `This pocket park gives ${p.neighborhood} locals a place to stretch their legs, sit in the shade, and enjoy the outdoors.`,
  (p) =>
    `Set among the ${p.neighborhood} neighborhoods, this park is a calm spot for morning walks and evening cool-downs.`,
  (p) =>
    `A laid-back green space in ${p.neighborhood} where you can escape the bustle and enjoy some time outdoors.`,
  (p) =>
    `Right in the heart of ${p.neighborhood}, this park offers open green space and a peaceful atmosphere for all ages.`,
];

// Check if a park is "distinctive"
function isDistinctive(park) {
  if (park.amenities.length >= 3) return true;
  const specialAmenities = [
    "Disc Golf",
    "Boat Ramp",
    "Boating",
    "Splash Pad",
    "Water Access",
    "Skate Park",
  ];
  if (park.amenities.some((a) => specialAmenities.includes(a))) return true;
  const specialNameWords = [
    "Memorial",
    "Garden",
    "Landing",
    "Lake",
    "Riverwalk",
    "Greenway",
    "Bikeway",
    "Maritime",
    "Plantation",
    "Museum",
    "Golf",
  ];
  if (specialNameWords.some((w) => park.name.includes(w))) return true;
  return false;
}

function generateDistinctiveDescription(park) {
  const name = park.name;
  const area = park.neighborhood;
  const amenities = park.amenities;
  const amenityStr = amenities.map((a) => a.toLowerCase()).join(", ");

  // Special cases for named/memorial parks
  if (name.includes("Memorial") || name.includes("Freedom")) {
    return `${name} is a reflective space in ${area} honoring local history. The ${amenities.length > 0 ? amenities.map((a) => a.toLowerCase()).join(" and ") + " provide" : "grounds provide"} a contemplative setting for visitors.`;
  }

  if (name.includes("Garden") || name.includes("Community Garden")) {
    return `${name} blends green space with community engagement in ${area}. Visitors enjoy ${amenityStr || "the well-maintained gardens"} in a relaxed neighborhood setting.`;
  }

  if (name.includes("Lake")) {
    return `Situated along the water in ${area}, ${name} offers a scenic lakeside retreat. ${amenities.length > 0 ? `Amenities include ${amenityStr}.` : "It's a calm spot for reflection and nature watching."}`;
  }

  if (name.includes("Landing") || name.includes("Charlestowne")) {
    return `${name} is a historic outdoor destination in ${area} with ${amenityStr}. It draws visitors looking to combine history with recreation along the Charleston waterfront.`;
  }

  if (name.includes("Riverwalk") || name.includes("Waterfront")) {
    return `${name} stretches along the water in ${area}, offering scenic views and a refreshing walk. ${amenities.length > 0 ? `Features include ${amenityStr}.` : ""}`;
  }

  if (name.includes("Bikeway") || name.includes("Bike Path") || name.includes("Greenway")) {
    return `${name} is a popular multi-use trail in ${area} connecting neighborhoods for cyclists, joggers, and walkers. It's one of Charleston's best car-free corridors for active recreation.`;
  }

  if (name.includes("Golf")) {
    return `${name} in ${area} provides golfers a public course with classic Charleston scenery. A well-established venue for rounds with friends or solo practice.`;
  }

  if (name.includes("Maritime")) {
    return `${name} sits on the ${area} waterfront with ${amenityStr}. It's a hub for boaters and families looking for harborside recreation.`;
  }

  if (name.includes("Plantation")) {
    return `${name} on ${area} offers a glimpse into Charleston's layered past alongside green space for walking and reflection.`;
  }

  if (name.includes("Museum")) {
    return `${name} in ${area} combines cultural significance with open green space, offering visitors a place for reflection and learning.`;
  }

  // Generic distinctive (3+ amenities or special amenity)
  if (amenities.includes("Skate Park")) {
    return `${name} features ${area}'s skate park alongside ${amenities.filter((a) => a !== "Skate Park").map((a) => a.toLowerCase()).join(" and ")}. It's a popular gathering spot for skaters and active recreation.`;
  }

  if (amenities.includes("Disc Golf")) {
    return `${name} in ${area} stands out with its disc golf course${amenities.length > 1 ? ` plus ${amenities.filter((a) => a !== "Disc Golf").map((a) => a.toLowerCase()).join(", ")}` : ""}. A versatile destination for both casual visitors and dedicated players.`;
  }

  if (amenities.includes("Boating") || amenities.includes("Water Access")) {
    return `${name} provides direct water access in ${area}${amenities.length > 1 ? ` along with ${amenities.filter((a) => a !== "Boating" && a !== "Water Access").map((a) => a.toLowerCase()).join(", ")}` : ""}. It's a prime spot for boaters, anglers, and anyone drawn to the Lowcountry waterways.`;
  }

  if (amenities.includes("Fishing")) {
    return `${name} in ${area} is a go-to for fishing enthusiasts${amenities.length > 1 ? `, with additional amenities including ${amenities.filter((a) => a !== "Fishing").map((a) => a.toLowerCase()).join(", ")}` : ""}. Bring a rod and enjoy the waterside setting.`;
  }

  if (amenities.length >= 5) {
    const top3 = amenities.slice(0, 3).map((a) => a.toLowerCase());
    return `${name} is one of ${area}'s most well-equipped parks, offering ${top3.join(", ")}, and more. With ${amenities.length} amenities, it serves as a community hub for sports, play, and outdoor gatherings.`;
  }

  if (amenities.length >= 3) {
    return `${name} in ${area} packs ${amenityStr} into a single destination. Whether you're here for a game, a walk, or a family outing, there's something for everyone.`;
  }

  // Fallback for distinctive
  return `${name} in ${area} offers ${amenityStr || "a distinctive outdoor experience"}. A notable stop for locals and visitors exploring Charleston's green spaces.`;
}

let templateIndex = 0;
function generateStandardDescription(park) {
  const tmpl = STANDARD_TEMPLATES[templateIndex % STANDARD_TEMPLATES.length];
  templateIndex++;
  return tmpl(park);
}

function generateDescription(park) {
  // Special handling for specific named parks
  if (park.name === "Charleston 9 Memorial") {
    return "Charleston 9 Memorial in West Ashley honors the nine firefighters lost in the 2007 Sofa Super Store tragedy. A solemn green space for reflection and remembrance.";
  }
  if (park.name === "Susie Jackson Freedom Memorial Garden") {
    return "Susie Jackson Freedom Memorial Garden is a contemplative garden on the Peninsula dedicated to the memory of those lost in the 2015 Emanuel AME Church shooting. Walking paths wind through the peaceful grounds.";
  }
  if (park.name === "Vangie Rainsford Park") {
    return "Vangie Rainsford Park honors a beloved community figure on the Peninsula. This green space provides a quiet spot for neighbors to gather and reflect.";
  }
  if (park.name === "Septima Clark Park") {
    return "Named after civil rights educator Septima Poinsette Clark, this Peninsula park celebrates Charleston's rich history of activism. A dignified green space that invites reflection.";
  }
  if (park.name === "Coach Stanley Chisolm Park") {
    return "Coach Stanley Chisolm Park commemorates a respected local coach and community leader on the Peninsula. The park serves as a gathering place for the neighborhood.";
  }
  if (park.name === "Joe Riley Waterfront Park") {
    return "Joe Riley Waterfront Park is a scenic waterfront gem in historic downtown Charleston with restrooms, picnic area, and fishing access. The iconic Pineapple Fountain anchors this beloved gathering spot along the harbor.";
  }
  if (park.name === "Hampton Park") {
    return "Hampton Park is one of the Peninsula's most cherished green spaces, spanning 60 acres with meandering paths, a dog park, and picnic areas. The park's rose garden and live oaks make it a year-round destination for walkers, joggers, and families.";
  }
  if (park.name === "White Point Garden") {
    return "White Point Garden at the tip of the Peninsula offers fishing access and sweeping views of Charleston Harbor. Shaded by massive live oaks, the historic park features Civil War-era cannons and monuments.";
  }
  if (park.name === "Marion Square") {
    return "Marion Square is the Peninsula's central public gathering space, hosting the beloved Saturday farmers market and community events year-round. Walking paths crisscross the tree-lined green with open lawns perfect for relaxing.";
  }
  if (park.name === "Angel Oak Park") {
    return "Angel Oak Park on Johns Island is home to the legendary Angel Oak, one of the oldest living things east of the Mississippi. Visitors come to marvel at the massive live oak's canopy and enjoy a picnic beneath its ancient branches.";
  }
  if (park.name === "James Island County Park") {
    return "James Island County Park is a sprawling recreation destination with disc golf, fishing, cycling trails, a dog park, and much more. The park hosts the annual Holiday Festival of Lights and Reggae Nights concert series.";
  }
  if (park.name === "Brittlebank Park") {
    return "Brittlebank Park sits along the Ashley River on the Peninsula, offering picnic areas, a playground, and prime fishing spots. The park provides stunning sunset views and easy waterfront access.";
  }
  if (park.name === "Freedom Park") {
    return "Freedom Park is Daniel Island's flagship recreation complex with baseball, basketball, soccer, tennis, a playground, dog park, and picnic area. It's the island's go-to destination for organized sports and family outings alike.";
  }
  if (park.name === "Bees Landing Recreation Complex") {
    return "Bees Landing Recreation Complex is West Ashley's premier multi-sport facility with baseball, basketball, tennis, a dog park, playground, and picnic areas. The sprawling complex serves as the neighborhood's athletic and community hub.";
  }
  if (park.name === "West Ashley Park") {
    return "West Ashley Park packs baseball, basketball, disc golf, fishing, playground, and picnic areas into one of the area's most versatile green spaces. It's a full-day destination for families, athletes, and anglers alike.";
  }
  if (park.name === "Hazel Parker Playground") {
    return "Hazel Parker Playground on the Peninsula is a beloved community hub with basketball, tennis, a dog park, playground, picnic area, and a multi-purpose field. Locals of all ages gather here for pickup games and afternoon hangouts.";
  }

  if (isDistinctive(park)) {
    return generateDistinctiveDescription(park);
  }
  return generateStandardDescription(park);
}

/* ─── Main ─── */
function main() {
  const raw = fs.readFileSync(FILE, "utf-8");
  const data = JSON.parse(raw);
  let parks = data.parks;

  console.log(`Loaded ${parks.length} parks`);

  // 1A: Remove duplicates — keep first "Johns Island Park"
  const seen = new Set();
  const deduped = [];
  for (const p of parks) {
    const key = p.name;
    if (seen.has(key)) {
      console.log(`  Removing duplicate: "${p.name}"`);
      // Merge amenities from duplicate into the kept entry
      const existing = deduped.find((d) => d.name === key);
      if (existing) {
        const merged = new Set([...existing.amenities, ...p.amenities]);
        existing.amenities = Array.from(merged);
      }
      continue;
    }
    seen.add(key);
    deduped.push(p);
  }
  parks = deduped;
  console.log(`After dedup: ${parks.length} parks`);

  // 1B: Mark future parks
  for (const p of parks) {
    if (p.name.startsWith("Future ")) {
      p.status = "coming-soon";
      console.log(`  Marked coming-soon: "${p.name}"`);
    } else {
      p.status = "active";
    }
  }

  // 1C: Rewrite all descriptions
  // Shuffle template index based on park count for variety
  templateIndex = 0;
  for (const p of parks) {
    p.description = generateDescription(p);
  }
  console.log(`Rewrote ${parks.length} descriptions`);

  // 1D: Add categoryImage
  for (const p of parks) {
    p.categoryImage = getCategoryImage(p.amenities);
  }
  console.log("Added categoryImage to all parks");

  // Write back
  data.parks = parks;
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + "\n");
  console.log(`Wrote ${parks.length} parks to ${FILE}`);
}

main();
