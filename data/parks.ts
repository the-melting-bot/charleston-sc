export interface Park {
  id: string;
  slug: string;
  name: string;
  area: string;
  description: string;
  address: string;
  hours: string;
  amenities: string[];
  latitude: number;
  longitude: number;
  images: string[];
}

export const parks: Park[] = [
  {
    id: "waterfront-park",
    slug: "waterfront-park",
    name: "Waterfront Park",
    area: "Peninsula",
    description:
      "Waterfront Park is an eight-acre public park along the Cooper River in downtown Charleston, featuring the iconic Pineapple Fountain, splash fountains, and a 1,200-foot palmetto-lined promenade. Opened in 1990 and designed by Sasaki Associates, it offers piers with swings, intimate gardens, and sweeping views of Charleston Harbor. It has become one of the most beloved landmarks in the city for locals and visitors alike.",
    address: "1 Vendue Range, Charleston, SC 29401",
    hours: "6:00 AM – Midnight",
    amenities: [
      "Water Access",
      "Restrooms",
      "Picnic Areas",
      "Dog-Friendly",
      "Walking Paths",
      "Fountains",
    ],
    latitude: 32.77806,
    longitude: -79.92528,
    images: ["1.jpg"],
  },
  {
    id: "hampton-park",
    slug: "hampton-park",
    name: "Hampton Park",
    area: "Peninsula",
    description:
      "Hampton Park is one of Charleston's largest parks at 60 acres, featuring the city's most extensive floral displays including a historic rose collection and seasonal plantings. The park serves as an arboretum with Lowcountry trees and shrubs, offers a one-mile perimeter path for walking and cycling, and hosts a physical fitness trail. Its rich history includes use as a Civil War prison camp and the site of an early exposition.",
    address: "30 Mary Murray Drive, Charleston, SC 29403",
    hours: "Dawn to Dusk",
    amenities: [
      "Playground",
      "Trails",
      "Picnic Areas",
      "Restrooms",
      "Gardens",
      "Dog-Friendly",
    ],
    latitude: 32.8,
    longitude: -79.95611,
    images: ["1.jpg"],
  },
  {
    id: "james-island-county-park",
    slug: "james-island-county-park",
    name: "James Island County Park",
    area: "James Island",
    description:
      "James Island County Park is a 643-acre park offering year-round family fun and natural beauty just a short drive from downtown Charleston. It features abundant recreation along the Stono River marsh, including trails, water activities, a climbing wall, and an 18-hole disc golf course. The park also has a campground, rental cottages, and the seasonal Splash Zone Waterpark.",
    address: "871 Riverland Drive, Charleston, SC 29412",
    hours: "8:00 AM – Sunset (seasonal hours vary)",
    amenities: [
      "Playground",
      "Trails",
      "Dog-Friendly",
      "Picnic Areas",
      "Restrooms",
      "Fishing",
      "Boat Ramp",
      "Disc Golf",
      "Splash Pad",
    ],
    latitude: 32.73611,
    longitude: -79.99,
    images: ["1.jpg"],
  },
  {
    id: "palmetto-islands-county-park",
    slug: "palmetto-islands-county-park",
    name: "Palmetto Islands County Park",
    area: "Mount Pleasant",
    description:
      "Palmetto Islands County Park is a nature-oriented, 943-acre park set in a tropical landscape of marshes and maritime forest. The park features paved bicycle paths, boardwalks, a 50-foot observation tower, and access to tidal creeks for fishing and kayaking. The seasonal Splash Island waterpark, off-leash dog park, and Big Toy playground make it a top family destination.",
    address: "444 Needlerush Parkway, Mount Pleasant, SC 29464",
    hours: "8:00 AM – Sunset (seasonal hours vary)",
    amenities: [
      "Playground",
      "Trails",
      "Dog-Friendly",
      "Picnic Areas",
      "Restrooms",
      "Fishing",
      "Kayaking",
      "Splash Pad",
    ],
    latitude: 32.861806,
    longitude: -79.832141,
    images: ["1.jpg"],
  },
  {
    id: "white-point-garden",
    slug: "white-point-garden",
    name: "White Point Garden",
    area: "Peninsula",
    description:
      "White Point Garden is a historic 5.7-acre public park at the southern tip of the Charleston peninsula, offering sweeping views of Charleston Harbor and Fort Sumter. Shaded by live oak trees with oyster shell paths, it features a central gazebo, historic monuments, statues, and Civil War cannons. Originally known as Oyster Point, the park was formally laid out in 1837 and sits at the terminus of the iconic Battery seawall.",
    address: "2 Murray Boulevard, Charleston, SC 29401",
    hours: "9:00 AM – Sunset",
    amenities: [
      "Water Access",
      "Dog-Friendly",
      "Walking Paths",
      "Picnic Areas",
      "Historic Monuments",
    ],
    latitude: 32.7696,
    longitude: -79.9304,
    images: ["1.jpg"],
  },
  {
    id: "brittlebank-park",
    slug: "brittlebank-park",
    name: "Brittlebank Park",
    area: "Peninsula",
    description:
      "Brittlebank Park is a 10-acre waterfront park along the Ashley River next to Joseph P. Riley Jr. Park in Charleston. It offers expansive green spaces with stunning river views, a playground, paved pathways for walking and biking, a fishing pier, and a boat dock. The park hosts various events and festivals throughout the year and features an off-leash dog area.",
    address: "Lockwood Drive, Charleston, SC 29403",
    hours: "Sunrise to Sunset",
    amenities: [
      "Playground",
      "Water Access",
      "Dog-Friendly",
      "Picnic Areas",
      "Fishing",
      "Trails",
      "Boat Ramp",
    ],
    latitude: 32.7873,
    longitude: -79.9598,
    images: ["1.jpg"],
  },
  {
    id: "wannamaker-county-park",
    slug: "wannamaker-county-park",
    name: "Wannamaker County Park",
    area: "North Charleston",
    description:
      "Wannamaker County Park is a 1,015-acre nature-oriented park of woodlands and wetlands designed for family and group use. Miles of paved trails wind through lagoons where visitors can spot alligators, turtles, and other wildlife. The park features kayak and bike rentals, a splash pad, a 9-basket disc golf course, and the seasonal Whirlin' Waters Adventure Waterpark.",
    address: "8888 University Boulevard, North Charleston, SC 29406",
    hours: "8:00 AM – Sunset (seasonal hours vary)",
    amenities: [
      "Playground",
      "Trails",
      "Dog-Friendly",
      "Picnic Areas",
      "Restrooms",
      "Disc Golf",
      "Kayaking",
      "Splash Pad",
    ],
    latitude: 32.978932,
    longitude: -80.051823,
    images: ["1.jpg"],
  },
  {
    id: "mitchell-playground",
    slug: "mitchell-playground",
    name: "Mitchell Playground",
    area: "Peninsula",
    description:
      "Mitchell Playground is a neighborhood park located in front of Julian Mitchell Elementary School on the Westside of downtown Charleston. It features a full basketball court, a large playground, a ball field, and open green space. Restrooms and free Wi-Fi are available during staffed hours, making it a popular spot for after-school activities.",
    address: "145 Fishburne Street, Charleston, SC 29403",
    hours: "Sunrise to Sunset",
    amenities: [
      "Playground",
      "Basketball Court",
      "Picnic Areas",
      "Restrooms",
    ],
    latitude: 32.7942,
    longitude: -79.9485,
    images: ["1.jpg"],
  },
  {
    id: "cannon-park",
    slug: "cannon-park",
    name: "Cannon Park",
    area: "Peninsula",
    description:
      "Cannon Park is a 2.7-acre public park in Charleston's Harleston Village neighborhood, located near the Medical University of South Carolina. It features iconic columns remaining from a former museum and auditorium destroyed by fire, a shaded playground under live oaks, and open grassy areas. The park is especially popular with dog owners and families seeking a peaceful respite.",
    address: "131 Rutledge Avenue, Charleston, SC 29401",
    hours: "9:00 AM – Sunset",
    amenities: [
      "Playground",
      "Dog-Friendly",
      "Walking Paths",
    ],
    latitude: 32.7829,
    longitude: -79.9445,
    images: ["1.jpg"],
  },
  {
    id: "colonial-lake",
    slug: "colonial-lake",
    name: "Colonial Lake",
    area: "Peninsula",
    description:
      "Colonial Lake is a historic tidal pond and public park in peninsular Charleston, originally known as Rutledge Street Pond and renamed in 1881. The park features wide paved walkways around the lake that are popular for walking, jogging, and dog-walking. Recent revitalizations have added climate-resilient gardens, making it one of the most scenic and walkable green spaces downtown.",
    address: "Broad Street, Charleston, SC 29401",
    hours: "Sunrise to Sunset",
    amenities: [
      "Walking Paths",
      "Dog-Friendly",
      "Fishing",
      "Picnic Areas",
      "Gardens",
    ],
    latitude: 32.7763,
    longitude: -79.9423,
    images: ["1.jpg"],
  },
  {
    id: "marion-square",
    slug: "marion-square",
    name: "Marion Square",
    area: "Peninsula",
    description:
      "Marion Square is a 10-acre park in the heart of downtown Charleston that has served as a gathering place since before the Revolutionary War. The park features a popular Saturday farmers market, a fountain, a performance area, and historic monuments including a Holocaust Memorial. Renovated in 2001, it hosts festivals, picnics, and events like Piccolo Spoleto throughout the year.",
    address: "329 Meeting Street, Charleston, SC 29403",
    hours: "Sunrise to Sunset",
    amenities: [
      "Picnic Areas",
      "Walking Paths",
      "Dog-Friendly",
      "Farmers Market",
      "Historic Monuments",
    ],
    latitude: 32.7855,
    longitude: -79.9348,
    images: ["1.jpg"],
  },
  {
    id: "hazel-parker-playground",
    slug: "hazel-parker-playground",
    name: "Hazel Parker Playground",
    area: "Peninsula",
    description:
      "Hazel Parker Playground is a historic public park in downtown Charleston, originally built in 1933 as a New Deal relief project and renamed in 1977 after longtime supervisor Hazel V. Parker. Located near Rainbow Row and Waterfront Park, this hidden gem offers a shaded playground, basketball and tennis courts, a dog park, and a recreation field. It serves as a beloved neighborhood favorite in the South of Broad area.",
    address: "70 East Bay Street, Charleston, SC 29401",
    hours: "Sunrise to Sunset",
    amenities: [
      "Playground",
      "Dog-Friendly",
      "Basketball Court",
      "Tennis Courts",
      "Restrooms",
      "Picnic Areas",
    ],
    latitude: 32.7742,
    longitude: -79.9271,
    images: ["1.jpg"],
  },
  {
    id: "laurel-hill-county-park",
    slug: "laurel-hill-county-park",
    name: "Laurel Hill County Park",
    area: "Mount Pleasant",
    description:
      "Laurel Hill County Park is a 745-acre park featuring several miles of unpaved trails for running, walking, and biking that wind through diverse landscapes. Visitors can explore oak allées, open meadows, and a small lake with a scenic viewing overlook. The park is ideal for nature lovers and trail enthusiasts seeking a quieter outdoor experience east of the Cooper River.",
    address: "1251 Park West Boulevard, Mount Pleasant, SC 29466",
    hours: "Sunrise to Sunset",
    amenities: [
      "Trails",
      "Dog-Friendly",
      "Picnic Areas",
      "Restrooms",
    ],
    latitude: 32.877534,
    longitude: -79.792809,
    images: ["1.jpg"],
  },
  {
    id: "folly-beach-county-park",
    slug: "folly-beach-county-park",
    name: "Folly Beach County Park",
    area: "Folly Beach",
    description:
      "Folly Beach County Park sits on the west end of Folly Island between the Atlantic Ocean and the Folly River, offering over 2,500 feet of ocean frontage. The park features boardwalk and accessible ramp beach access, seasonal lifeguards, and rentals for beach chairs, umbrellas, and boogie boards. Skimmer Flats, a major Eastern Brown Pelican rookery, is visible at the west end of the park.",
    address: "1100 West Ashley Avenue, Folly Beach, SC 29439",
    hours: "8:00 AM – Sunset",
    amenities: [
      "Water Access",
      "Restrooms",
      "Picnic Areas",
      "Dog-Friendly",
    ],
    latitude: 32.644237,
    longitude: -79.962748,
    images: ["1.jpg"],
  },
  {
    id: "mount-pleasant-waterfront-park",
    slug: "mount-pleasant-waterfront-park",
    name: "Mount Pleasant Memorial Waterfront Park",
    area: "Mount Pleasant",
    description:
      "Called the crown jewel of Mount Pleasant, Memorial Waterfront Park sits at the base of the Ravenel Bridge with stunning views of Charleston Harbor. It features a nautical-themed playground, a 1,250-foot fishing pier, the River Watch Café, pickleball and basketball courts, and a dog park with separate areas for small and large dogs. The Sweetgrass Cultural Arts Pavilion, War Memorial, and Visitor Center make it a destination for recreation and community gathering.",
    address: "99 Harry M. Hallman Jr. Boulevard, Mount Pleasant, SC 29464",
    hours: "6:00 AM – 11:00 PM",
    amenities: [
      "Playground",
      "Water Access",
      "Dog-Friendly",
      "Fishing",
      "Restrooms",
      "Picnic Areas",
      "Splash Pad",
      "Trails",
    ],
    latitude: 32.8017,
    longitude: -79.9025,
    images: ["1.jpg"],
  },
  {
    id: "magnolia-plantation",
    slug: "magnolia-plantation",
    name: "Magnolia Plantation & Gardens",
    area: "West Ashley",
    description:
      "Magnolia Plantation & Gardens was established in the late 17th century and features romantic-style gardens pioneered in the 1840s with outdoor azaleas and camellias amid year-round blooms. The 66-acre property includes the 13-acre Audubon Swamp Garden wildlife sanctuary with boardwalks, over six miles of trails, and the historic Ashley Riverwalk. Opened to the public in 1871, it is one of America's oldest public gardens.",
    address: "3550 Ashley River Road, Charleston, SC 29414",
    hours: "9:00 AM – 5:00 PM daily",
    amenities: [
      "Gardens",
      "Trails",
      "Dog-Friendly",
      "Restrooms",
      "Water Access",
    ],
    latitude: 32.87651,
    longitude: -80.08351,
    images: ["1.jpg"],
  },
  {
    id: "middleton-place",
    slug: "middleton-place",
    name: "Middleton Place",
    area: "West Ashley",
    description:
      "Middleton Place National Historic Landmark is home to America's oldest and most important landscaped gardens, begun in 1741. The 110-acre historic site encompasses the Gardens, House Museum, Stableyards with heritage animal breeds, and Eliza's House, telling the stories of the Middleton family and generations of enslaved people. The terraced lawns and butterfly lakes are considered a masterpiece of landscape design.",
    address: "4300 Ashley River Road, Charleston, SC 29414",
    hours: "9:00 AM – 5:00 PM daily",
    amenities: [
      "Gardens",
      "Trails",
      "Restrooms",
      "Water Access",
      "Historic Monuments",
    ],
    latitude: 32.89982,
    longitude: -80.13654,
    images: ["1.jpg"],
  },
];

/** Lookup helper */
export function getParkBySlug(slug: string): Park | undefined {
  return parks.find((p) => p.slug === slug);
}

/** Get all slugs for static generation */
export function getAllParkSlugs(): string[] {
  return parks.map((p) => p.slug);
}
