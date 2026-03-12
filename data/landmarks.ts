export interface Landmark {
  id: string;
  slug: string;
  name: string;
  category: "Historic" | "Natural" | "Architecture" | "Cultural" | "Engineering";
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  images: string[];
}

export const landmarks: Landmark[] = [
  {
    id: "fort-sumter",
    slug: "fort-sumter",
    name: "Fort Sumter National Monument",
    category: "Historic",
    description:
      "The site where the first shots of the Civil War were fired on April 12, 1861. This sea fort in Charleston Harbor is accessible only by ferry from Liberty Square. The fort's museum chronicles the bombardment and its aftermath, with panoramic views of the harbor, Fort Moultrie, and the Charleston skyline.",
    address: "1214 Middle St, Sullivan's Island, SC 29482",
    latitude: 32.7524,
    longitude: -79.8746,
    images: ["1.jpg"],
  },
  {
    id: "rainbow-row",
    slug: "rainbow-row",
    name: "Rainbow Row",
    category: "Architecture",
    description:
      "A series of thirteen colorful Georgian row houses on East Bay Street, dating to the 1740s. Originally merchant stores, these pastel-painted homes form the longest cluster of Georgian row houses in the United States. Rainbow Row is one of Charleston's most photographed landmarks and a symbol of the city's charm.",
    address: "83-107 East Bay St, Charleston, SC 29401",
    latitude: 32.7722,
    longitude: -79.9281,
    images: ["1.jpg"],
  },
  {
    id: "angel-oak-tree",
    slug: "angel-oak-tree",
    name: "Angel Oak Tree",
    category: "Natural",
    description:
      "Estimated to be 400–500 years old, this Southern live oak on Johns Island is one of the oldest living things east of the Mississippi. Its massive canopy provides 17,200 square feet of shade, with limbs that dip to the ground and stretch nearly 190 feet across. The city of Charleston acquired the property in 1991 to protect this natural treasure.",
    address: "3688 Angel Oak Rd, Johns Island, SC 29455",
    latitude: 32.7172,
    longitude: -80.0804,
    images: ["1.jpg"],
  },
  {
    id: "ravenel-bridge",
    slug: "ravenel-bridge",
    name: "Arthur Ravenel Jr. Bridge",
    category: "Engineering",
    description:
      "This modern cable-stayed bridge spans the Cooper River between downtown Charleston and Mount Pleasant. Completed in 2005, it features a 2.5-mile pedestrian and bicycle path called the Wonders' Way, offering spectacular views of the harbor, Fort Sumter, and the city skyline. It replaced the outdated Grace Memorial and Silas N. Pearman bridges.",
    address: "Arthur Ravenel Jr Bridge, Charleston, SC",
    latitude: 32.8054,
    longitude: -79.9148,
    images: ["1.jpg"],
  },
  {
    id: "the-battery",
    slug: "the-battery",
    name: "The Battery & White Point Garden",
    category: "Historic",
    description:
      "A landmark defensive seawall and promenade at the southern tip of the Charleston peninsula. White Point Garden, the adjacent park, features Civil War-era cannons, monuments, and some of the city's most impressive antebellum mansions. The location offers sweeping views of Charleston Harbor where the Ashley and Cooper rivers meet.",
    address: "2 Murray Blvd, Charleston, SC 29401",
    latitude: 32.7698,
    longitude: -79.9311,
    images: ["1.jpg"],
  },
  {
    id: "magnolia-plantation",
    slug: "magnolia-plantation",
    name: "Magnolia Plantation & Gardens",
    category: "Historic",
    description:
      "Founded in 1676, Magnolia Plantation is one of the oldest public gardens in America. Its romantic-style gardens span 500 acres along the Ashley River, featuring ancient live oaks, a Biblical Garden, and one of the largest collections of azaleas and camellias in the world. The plantation also offers swamp and nature tours, a petting zoo, and an Audubon Swamp Garden.",
    address: "3550 Ashley River Rd, Charleston, SC 29414",
    latitude: 32.8608,
    longitude: -80.0872,
    images: ["1.jpg"],
  },
  {
    id: "middleton-place",
    slug: "middleton-place",
    name: "Middleton Place",
    category: "Historic",
    description:
      "Home to America's oldest landscaped gardens, dating to 1741. The terraced lawns, ornamental lakes, and formal gardens were designed by Henry Middleton, president of the First Continental Congress. The surviving south flanker of the original plantation house is now a museum showcasing Middleton family life across three centuries.",
    address: "4300 Ashley River Rd, Charleston, SC 29414",
    latitude: 32.8936,
    longitude: -80.1275,
    images: ["1.jpg"],
  },
  {
    id: "old-exchange",
    slug: "old-exchange",
    name: "Old Exchange & Provost Dungeon",
    category: "Historic",
    description:
      "Built in 1771 as a customs house and exchange, this Palladian-style building at the foot of Broad Street played a pivotal role in American history. The basement served as a British provost dungeon during the Revolutionary War, and the building hosted the ratification of the U.S. Constitution by South Carolina in 1788.",
    address: "122 E Bay St, Charleston, SC 29401",
    latitude: 32.7738,
    longitude: -79.9255,
    images: ["1.jpg"],
  },
  {
    id: "charleston-city-market",
    slug: "charleston-city-market",
    name: "Charleston City Market",
    category: "Cultural",
    description:
      "One of the oldest public markets in the United States, operating continuously since 1804. Spanning four blocks between Meeting Street and East Bay Street, the market features over 300 vendors selling sweetgrass baskets, local art, jewelry, and Lowcountry cuisine. Market Hall, the Romanesque Revival building at its entrance, was built in 1841.",
    address: "188 Meeting St, Charleston, SC 29401",
    latitude: 32.7821,
    longitude: -79.9275,
    images: ["1.jpg"],
  },
  {
    id: "drayton-hall",
    slug: "drayton-hall",
    name: "Drayton Hall",
    category: "Architecture",
    description:
      "The only Ashley River plantation house to survive both the Revolutionary and Civil Wars intact. Built around 1738 in the Palladian style, Drayton Hall is preserved in an unrestored state — no running water, electricity, or period furnishings — offering an authentic window into 18th-century craftsmanship. It is considered one of the finest examples of Georgian-Palladian architecture in North America.",
    address: "3380 Ashley River Rd, Charleston, SC 29414",
    latitude: 32.8608,
    longitude: -80.0597,
    images: ["1.jpg"],
  },
  {
    id: "sullivans-island-lighthouse",
    slug: "sullivans-island-lighthouse",
    name: "Sullivan's Island Lighthouse",
    category: "Architecture",
    description:
      "Completed in 1962, this triangular, modernist lighthouse on Sullivan's Island is the last major lighthouse built by the federal government. Its unconventional design — a stark contrast to traditional round lighthouses — features an aluminum-clad triangular tower rising 163 feet. Though not open to the public, it remains a beloved landmark visible from beaches and waterways throughout the harbor.",
    address: "1799 I'On Ave, Sullivan's Island, SC 29482",
    latitude: 32.7632,
    longitude: -79.8367,
    images: ["1.jpg"],
  },
  {
    id: "folly-beach-pier",
    slug: "folly-beach-pier",
    name: "Folly Beach Pier",
    category: "Cultural",
    description:
      "Originally built in 1931, the Folly Beach Pier extends 1,045 feet into the Atlantic Ocean from the heart of Folly Beach. The current pier, rebuilt in 1995, is one of the longest on the East Coast and serves as a popular spot for fishing, dolphin watching, and sunset viewing. It is the centerpiece of Folly Beach County Park.",
    address: "101 E Arctic Ave, Folly Beach, SC 29439",
    latitude: 32.6512,
    longitude: -79.9383,
    images: ["1.jpg"],
  },
];

export function getLandmarkBySlug(slug: string): Landmark | undefined {
  return landmarks.find((l) => l.slug === slug);
}

export function getAllLandmarkSlugs(): string[] {
  return landmarks.map((l) => l.slug);
}
