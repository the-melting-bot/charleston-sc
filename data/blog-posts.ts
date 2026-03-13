export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-dog-friendly-parks-charleston",
    title: "5 Best Dog-Friendly Parks in Charleston",
    description:
      "From off-leash dog parks to shaded walking trails, here are the top spots to bring your pup in the Charleston area.",
    category: "Dog Parks",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-13",
    readTime: "5 min read",
    image: "/images/blog/dog-parks.jpg",
    imageAlt: "Dogs playing at a Charleston park off-leash area",
    content: `
      <p>Charleston is one of the most dog-friendly cities in the Southeast, and the Lowcountry's mild winters mean you can enjoy outdoor time with your pup nearly year-round. Whether you're looking for a fenced off-leash area or a scenic on-leash trail, these five parks are the best options for dogs and their owners.</p>

      <h2>1. James Island County Park</h2>
      <p>James Island County Park is the gold standard for dog owners in Charleston. The park's dedicated off-leash dog park spans several acres and includes separate areas for large and small dogs, water stations, and shaded rest spots beneath mature live oaks. Beyond the dog park, the park's paved and unpaved trails are excellent for on-leash walks along the tidal marsh. Parking is plentiful, and there's a small daily entry fee that helps keep the grounds in top shape.</p>

      <h2>2. Palmetto Islands County Park</h2>
      <p>Located in Mount Pleasant, Palmetto Islands County Park offers miles of nature trails that wind through maritime forest and along tidal creeks. Dogs are welcome on leash throughout the park, and the shaded canopy keeps things cool even on warm afternoons. The trails are well-maintained with boardwalk sections over marshy areas. It's a great choice if your dog loves sniffing through natural terrain rather than a traditional fenced enclosure.</p>

      <h2>3. Hampton Park</h2>
      <p>Hampton Park, the largest park on the Charleston Peninsula, is a favorite for on-leash walks. The wide, paved loop trail circles the park's beautiful gardens, fountains, and open lawns. Early mornings and late afternoons are the most popular times for dog walkers, and you'll often find an informal social scene of regulars. There's no off-leash area, but the spacious paths and gentle atmosphere make it ideal for well-behaved dogs of all sizes.</p>

      <h2>4. Ackerman Park</h2>
      <p>Ackerman Park in West Ashley features a fully fenced dog park that's become a neighborhood staple. The enclosure has good ground cover, benches for owners, and a double-gated entry for safety. It's smaller than James Island's dog park but rarely overcrowded, which is a plus if your dog prefers a calmer environment. The adjacent skate park and multi-purpose field make it a good stop for families with both kids and pets.</p>

      <h2>5. Wannamaker County Park</h2>
      <p>Wannamaker County Park in North Charleston has a large off-leash dog area with rolling terrain, shade trees, and water access for dogs that love to splash. The park also hosts seasonal dog events and agility days. Beyond the dog area, the park's trail system provides solid on-leash walking through wooded uplands. Water fountains designed for pets are placed throughout.</p>

      <h3>Tips for Visiting</h3>
      <ul>
        <li>Always bring fresh water — not every park has working fountains year-round.</li>
        <li>Visit early in the morning or after 4 PM during summer to avoid the worst heat.</li>
        <li>Charleston County parks require dogs to have current vaccinations and tags.</li>
        <li>Clean up after your dog — most parks provide bag stations, but bring extras just in case.</li>
      </ul>
    `,
  },
  {
    slug: "hidden-green-spaces-peninsula",
    title: "Hidden Green Spaces on the Peninsula",
    description:
      "Beyond the well-known parks, Charleston's Peninsula hides quiet green spaces that most visitors never find.",
    category: "Hidden Gems",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-13",
    readTime: "4 min read",
    image: "/images/blog/hidden-gems.jpg",
    imageAlt: "Quiet oak-lined path in a Charleston Peninsula green space",
    content: `
      <p>Most visitors to Charleston gravitate toward Waterfront Park or the Battery, but the Peninsula is filled with smaller green spaces that offer a quieter, more local experience. These hidden gems are perfect for a peaceful morning walk, a reading break on a bench, or simply escaping the bustle of King Street for a few minutes.</p>

      <h2>Colonial Lake</h2>
      <p>Colonial Lake is technically well known, but its calm loop trail remains surprisingly underused on weekday mornings. The half-mile paved path around the tidal lake is flat, shaded in parts, and offers views of some of Charleston's finest residential architecture. Egrets and herons are regular visitors, and the benches along the south side catch a breeze off the Ashley River. It's an ideal spot for a short jog or a stroller-friendly walk without the crowds of the waterfront.</p>

      <h2>Cannon Park</h2>
      <p>Tucked between the College of Charleston campus and Calhoun Street, Cannon Park is a quiet rectangle of green shaded by massive live oaks. It's mostly used by nearby residents and college students, which keeps it uncrowded. The thick canopy provides natural air conditioning even in August, and the park's simple layout — open lawn, benches, and a few paths — makes it a peaceful retreat in the heart of the city.</p>

      <h2>Hazel Parker Playground</h2>
      <p>At the western tip of Tradd Street near the Ashley River, Hazel Parker Playground is a small neighborhood park that feels miles from the tourist district. The playground equipment draws local families, but the surrounding green space and river views are the real draw. On clear evenings, you can watch the sun set behind the marsh from one of the benches. It's one of the best-kept secrets on the lower Peninsula.</p>

      <h2>White Point Garden's Quiet Corners</h2>
      <p>Most visitors walk the perimeter of White Point Garden at the Battery and then leave. But if you wander into the interior paths beneath the massive oaks, you'll find shaded benches with almost no foot traffic. The garden's interior is a network of crushed-shell paths, historic cannons and monuments, and the kind of deep shade that only centuries-old live oaks can provide. Bring a book and settle in.</p>

      <h2>Pocket Parks Worth Finding</h2>
      <p>The Peninsula has several tiny pocket parks that don't appear on most maps. Mary Murray Boulevard Park in Harleston Village has a pair of benches under a canopy of crepe myrtles. Allan Park on Rutledge Avenue is a triangular green with mature trees and a neighborhood feel. These micro-parks won't fill an afternoon, but they're perfect for a quiet moment during a walking tour of the city.</p>

      <h3>Why These Spaces Matter</h3>
      <p>Charleston's hidden green spaces serve as the city's breathing room. In a dense urban peninsula, these small parks provide shade, calm, and a connection to nature that improves daily life for residents and rewards curious visitors willing to look beyond the guidebooks.</p>
    `,
  },
  {
    slug: "best-parks-kids-under-5-charleston",
    title: "Best Parks for Kids Under 5 in Charleston",
    description:
      "A parent's guide to the safest, most fun playgrounds and splash areas for toddlers and preschoolers in Charleston.",
    category: "Family",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-13",
    readTime: "5 min read",
    image: "/images/blog/kids-parks.jpg",
    imageAlt: "Toddler playing at a Charleston park playground",
    content: `
      <p>Finding the right park for young children in Charleston means thinking beyond the typical playground checklist. You need shade (the Lowcountry sun is relentless), age-appropriate equipment, clean restrooms nearby, and ideally some kind of water feature to burn off that last bit of toddler energy. Here are the best parks for kids under five in the Charleston area.</p>

      <h2>Mitchell Playground</h2>
      <p>Mitchell Playground on Broad Street is one of the Peninsula's most popular spots for families with toddlers. The playground has a dedicated section with low-to-the-ground equipment designed for children under five, including a small slide, climbing structures, and a sandbox area. The fenced perimeter gives parents peace of mind, and the shaded sections keep things bearable during the warmer months. It can get busy on weekend mornings, so early arrivals get the best experience.</p>

      <h2>Hampton Park</h2>
      <p>Hampton Park is exceptional for young children because of its wide-open lawns and gentle atmosphere. Toddlers love running on the grass, watching the ducks at the small pond, and exploring the flower gardens. There's no formal playground, but the open space itself is the attraction for little ones still mastering walking and running. The paved loop trail is perfect for strollers, and the park's gazebo area provides a shaded spot for snack breaks.</p>

      <h2>Waterfront Park — Pineapple Fountain</h2>
      <p>The Pineapple Fountain at Waterfront Park is arguably the best free splash area in Charleston for young kids. On warm days, toddlers wade in the shallow water that cascades down the fountain's base, and the surrounding lawn is great for spreading a blanket. The park has clean restrooms and is walking distance from restaurants on East Bay Street. Be aware that it gets crowded on summer weekends — weekday mornings are much more relaxed.</p>

      <h2>James Island County Park</h2>
      <p>James Island County Park offers the most comprehensive experience for families with little ones. The Splash Zone waterpark (seasonal, with a small admission fee) has areas specifically designed for toddlers and non-swimmers. Outside the waterpark, the main playground has age-appropriate sections, and the park's wide paved trails are ideal for strollers, tricycles, or balance bikes. The climbing playground near the lake is a favorite for adventurous preschoolers.</p>

      <h2>Wannamaker County Park Playground</h2>
      <p>Wannamaker County Park in North Charleston has a large, well-maintained playground with a toddler section that includes low slides, gentle swings, and rubber surfacing. The shaded picnic area adjacent to the playground makes it easy to set up a home base for the morning. The park also has a seasonal splash pad that's perfect for hot days.</p>

      <h3>Tips for Visiting with Toddlers</h3>
      <ul>
        <li>Bring sunscreen and hats — even in spring, the Charleston sun can burn quickly.</li>
        <li>Pack snacks and water. While some parks have vending, it's not guaranteed.</li>
        <li>Visit between 9 and 11 AM to beat the heat and the crowds.</li>
        <li>Check for restroom availability before you go — not every park has facilities.</li>
        <li>Consider a pop-up shade tent for parks with limited tree cover.</li>
      </ul>
    `,
  },
  {
    slug: "kayaking-water-access-charleston",
    title: "A Guide to Kayaking and Water Access Points Around Charleston",
    description:
      "Where to launch a kayak, rent gear, and find the best paddling routes in the Charleston Lowcountry.",
    category: "Water Activities",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-13",
    readTime: "5 min read",
    image: "/images/blog/kayaking.jpg",
    imageAlt: "Kayakers paddling through a Charleston marsh waterway",
    content: `
      <p>The Charleston Lowcountry is one of the best places on the East Coast for kayaking. With miles of tidal creeks, protected marshes, and calm harbor waters, paddlers of all levels can find a route that fits their skill set. Whether you own your own boat or need to rent, these water access points are the best starting spots for a day on the water.</p>

      <h2>Shem Creek, Mount Pleasant</h2>
      <p>Shem Creek is the most popular kayaking launch in the Charleston area, and for good reason. The creek winds through spartina marsh, offering close encounters with dolphins, pelicans, and osprey. Several outfitters along the creek rent kayaks and stand-up paddleboards by the hour, making it the easiest entry point for beginners. The public boat landing provides free launch access for those with their own boats. Paddle early in the morning for calmer water and more wildlife sightings. Avoid weekends in peak summer if you prefer a quieter experience.</p>

      <h2>James Island County Park</h2>
      <p>James Island County Park has a small lake where you can rent kayaks, pedal boats, and stand-up paddleboards directly from the park. It's an ideal spot for families or first-time paddlers because the lake is calm, contained, and there's no tidal current to worry about. The rental dock is staffed seasonally, and prices are reasonable. After paddling, the rest of the park offers trails, playgrounds, and picnic areas — making it easy to turn a kayak trip into a full day out.</p>

      <h2>Folly Beach County Park</h2>
      <p>For paddlers who want ocean access, Folly Beach County Park at the west end of Folly Island provides a launch point into the Folly River and the surrounding marsh system. The conditions here are more variable than Shem Creek — check the tide tables and wind forecast before heading out. The park has a small parking fee and offers restrooms, showers, and lifeguard-patrolled beach access. It's a beautiful paddle through pristine salt marsh with views of Morris Island Lighthouse in the distance.</p>

      <h2>Brittlebank Park, Ashley River</h2>
      <p>Brittlebank Park on the west side of the Peninsula offers direct access to the Ashley River. The park's boat ramp is convenient for launching kayaks, and once on the water, you can paddle south toward the harbor or north toward the quieter stretches of the river. Be mindful of boat traffic — the Ashley sees commercial and recreational vessels, especially on weekends. Early mornings on weekdays offer the most peaceful paddling.</p>

      <h2>Sol Legare Boat Landing</h2>
      <p>For a less crowded alternative, Sol Legare Boat Landing on James Island provides access to Folly Creek and the surrounding marsh network. It's a favorite among local paddlers who want to avoid the Shem Creek crowds. The landing is basic — no rentals or facilities — but the paddling is exceptional, with narrow tidal creeks that wind through undeveloped marsh.</p>

      <h3>Tips for Beginners</h3>
      <ul>
        <li>Always check the tide chart before launching. Outgoing tides can leave you stranded in shallow mud.</li>
        <li>Wear a PFD (personal flotation device) — it's required by law in South Carolina.</li>
        <li>Apply reef-safe sunscreen and bring a hat. There's no shade on the water.</li>
        <li>Spring and fall offer the best conditions — warm enough to paddle, cool enough to enjoy it.</li>
        <li>Bring a dry bag for your phone, keys, and snacks.</li>
      </ul>
    `,
  },
];
