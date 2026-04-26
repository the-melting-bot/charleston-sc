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

const _blogPostsUnsorted: BlogPost[] = [
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
  {
    slug: "best-parks-picnic-charleston",
    title: "Best Parks for a Picnic in Charleston",
    description:
      "From waterfront spreads with harbor views to shaded tables beneath centuries-old oaks, here are the best picnic spots in the Charleston area.",
    category: "Picnic Spots",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-23",
    readTime: "5 min read",
    image: "/images/blog/picnic-parks.jpg",
    imageAlt: "Picnic table under shady trees in a Charleston park",
    content: `
      <p>Few places in the Southeast reward a well-packed picnic basket like Charleston. The mild Lowcountry climate, centuries-old live oaks dripping with Spanish moss, and waterfront vistas in every direction make dining outdoors here feel less like a casual outing and more like an event. Whether you're after a quick lunch between sightseeing stops or an all-afternoon spread with friends, these parks deliver the setting, the shade, and the amenities to make it easy.</p>

      <h2>1. Waterfront Park — The Harbor View Spread</h2>
      <p><a href="/parks/waterfront-park">Waterfront Park</a> is Charleston's flagship picnic destination, and for good reason. The long swingbed benches facing Charleston Harbor are iconic, but the real picnic move is to claim one of the grassy patches along the waterfront promenade, spread a blanket, and face the Cooper River. You'll have the Ravenel Bridge framing the horizon and the occasional sailboat drifting past. The park has clean restrooms, water fountains, and trash receptacles throughout. Arrive before 10 AM on weekends to get your pick of spots near the <strong>Pineapple Fountain</strong>, where kids can splash while you set up.</p>

      <h2>2. Hampton Park — The Shaded Picnic Loop</h2>
      <p><a href="/parks/hampton-park">Hampton Park</a> is the largest park on the Peninsula and arguably the best for a long, leisurely picnic. The designated picnic areas sit beneath massive live oaks that provide nearly complete shade, even at midday in July. The park's rose gardens and seasonal flower beds are within easy strolling distance, and the wide paved loop trail makes it perfect for a post-meal walk. There are no formal picnic tables — bring a blanket or low chairs. The lack of a formal concession stand keeps the atmosphere peaceful and uncrowded on weekday afternoons.</p>

      <h2>3. James Island County Park — The All-Day Destination</h2>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> has the most complete picnic infrastructure in the Charleston area. Covered shelters with built-in tables and grills dot the park, many of them lakeside. Some shelters can be reserved in advance through Charleston County Parks for larger groups. Beyond the picnic areas, the park's paved trails, fishing docks, playground, and seasonal Splash Zone waterpark mean you can stretch a picnic into a full day out. Restrooms, water fountains, and parking are plentiful. There's a small daily vehicle entry fee.</p>

      <h2>4. White Point Garden — The Historic Battery Picnic</h2>
      <p>Spreading a blanket at <a href="/parks/white-point-garden">White Point Garden</a> puts you in one of the most photographed spots in Charleston. The garden sits at the southern tip of the Peninsula where the Ashley and Cooper rivers meet, surrounded by antebellum mansions and shaded by oaks that have been growing since before the Civil War. The crushed-shell paths and scattered benches provide options for smaller picnics, while the open lawn areas near the cannons work for groups. There are no restrooms on-site, so plan accordingly — the closest public facilities are a few blocks up East Bay Street.</p>

      <h2>5. Brittlebank Park — The Sunset Pick</h2>
      <p><a href="/parks/brittlebank-park">Brittlebank Park</a> on the Ashley River is the go-to spot for an evening picnic with a sunset view. The park has picnic tables and open grass overlooking the river, a playground for kids, and a fishing pier if someone in your group wants to cast a line while you eat. The park faces west, which means golden hour here is genuinely spectacular — the sun drops behind the marsh and treeline in a wash of orange and pink. Parking is free and usually available, even on busy evenings.</p>

      <h2>6. Palmetto Islands County Park — The Nature Picnic</h2>
      <p>If you want your picnic surrounded by nature rather than city, <a href="/parks/palmetto-islands-county-park">Palmetto Islands County Park</a> in Mount Pleasant is the pick. The park's sheltered picnic areas sit alongside tidal creeks and maritime forest, with boardwalk trails leading deeper into the Lowcountry landscape. Bring bug spray — the marsh setting means mosquitoes can be persistent, especially in the warmer months. The trade-off is a picnic setting that feels genuinely wild, with herons, egrets, and the occasional dolphin visible from the water's edge.</p>

      <h3>Picnic Packing Tips</h3>
      <ul>
        <li>Bring a ground blanket and a backup tablecloth — not all parks have tables.</li>
        <li>Pack a cooler with ice. The Charleston heat can spoil food fast, even in spring.</li>
        <li>Don't forget a trash bag — leave no trace, especially in parks without bins nearby.</li>
        <li>Sunscreen and a hat are non-negotiable from March through October.</li>
        <li>Check for reserved shelters at county parks before claiming a covered spot.</li>
      </ul>
    `,
  },
  {
    slug: "best-walking-jogging-trails-charleston",
    title: "Charleston's Best Walking and Jogging Trails",
    description:
      "From paved greenways to shaded marsh boardwalks, here are the best trails for walking and jogging in the Charleston area.",
    category: "Trails",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-23",
    readTime: "6 min read",
    image: "/images/blog/trails.jpg",
    imageAlt: "Tree-lined walking trail through a shady southern park",
    content: `
      <p>Charleston isn't known for elevation changes — this is the Lowcountry, after all — but what the area lacks in hills it makes up for with scenic, well-maintained trails that wind through maritime forest, along tidal marshes, and across waterfront parks. Whether you're training for a race or just looking for a peaceful morning walk, these trails are the best options in the area.</p>

      <h2>1. West Ashley Greenway — 10.5 Miles, Paved</h2>
      <p>The West Ashley Greenway is the longest dedicated trail in the Charleston area, stretching 10.5 miles from just west of the Ashley River to Johns Island. The paved surface is smooth enough for strollers and road bikes, and the flat terrain makes it accessible for all fitness levels. The trail passes through residential neighborhoods, past community gardens, and alongside patches of Lowcountry forest. Parking is available at several trailheads along the route, including at South Windermere Shopping Center. <strong>Best for:</strong> long runs, bike commuting, and dog walks. Morning shade is good on the eastern sections, but the western half can be exposed — bring water and sunscreen.</p>

      <h2>2. Hampton Park Loop — 1 Mile, Paved</h2>
      <p>The loop trail at <a href="/parks/hampton-park">Hampton Park</a> is the most popular running route on the Charleston Peninsula. The one-mile paved path circles the park's gardens, gazebo, and open lawns beneath a canopy of live oaks and magnolias. It's flat, shaded, and wide enough to accommodate walkers, joggers, and strollers without feeling crowded. The park is at its best in the early morning, when the light is soft and the regular crew of runners and dog walkers creates a friendly, community atmosphere. Street parking is free along Cleveland Street and Mary Murray Drive. <strong>Difficulty:</strong> Easy. <strong>Surface:</strong> Asphalt.</p>

      <h2>3. James Island County Park Trails — 3+ Miles, Paved & Unpaved</h2>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> offers a network of interconnected trails that total over three miles. The main paved trail loops around the park's central lake and is popular with joggers and families. For a more varied experience, the unpaved nature trails branch off into marsh-edge forest with views of tidal creeks. The terrain is flat throughout, but the natural-surface trails can be muddy after rain. Parking requires a small daily entry fee. <strong>Best for:</strong> families, mixed-surface runs, and nature walks. <strong>Difficulty:</strong> Easy to moderate.</p>

      <h2>4. Palmetto Islands County Park — 2 Miles, Boardwalk & Natural</h2>
      <p>The trail system at <a href="/parks/palmetto-islands-county-park">Palmetto Islands County Park</a> is one of the most scenic in the area. The main loop winds through maritime forest and crosses tidal creeks on elevated boardwalks, giving you an immersive Lowcountry experience without getting your feet wet. The boardwalk sections are excellent for birdwatching — keep an eye out for painted buntings in spring and summer. The natural-surface portions can be soft in spots, so trail shoes are recommended over road shoes. A daily park entry fee applies. <strong>Difficulty:</strong> Easy. <strong>Surface:</strong> Boardwalk and packed earth.</p>

      <h2>5. Colonial Lake Loop — 0.5 Miles, Paved</h2>
      <p>For a quick, scenic walk or jog in the heart of downtown, the loop around <a href="/parks/colonial-lake">Colonial Lake</a> is hard to beat. The half-mile paved path circles the tidal lake and is lined with some of the Peninsula's most beautiful residential architecture. Egrets wade along the banks, and the atmosphere is consistently calm. It's too short for a serious training run, but it's perfect for an easy morning loop or a lunchtime walk. Street parking is available on Rutledge Avenue and Broad Street. <strong>Difficulty:</strong> Easy. <strong>Surface:</strong> Sidewalk and asphalt.</p>

      <h2>6. Laurel Hill County Park Trails — 1.5 Miles, Natural</h2>
      <p><a href="/parks/laurel-hill-county-park">Laurel Hill County Park</a> on the Wando River offers a quieter alternative to the more popular county parks. The trail system winds through upland forest and along bluffs overlooking the river, with some of the best water views of any trail in the area. The natural surface is well-maintained but can be uneven in places, making it better suited for walking than fast running. The park is rarely crowded, which is part of its appeal. Free parking available on-site. <strong>Difficulty:</strong> Easy to moderate. <strong>Surface:</strong> Packed earth and gravel.</p>

      <h3>Trail Tips</h3>
      <ul>
        <li>Hydrate before you go. Water fountains aren't guaranteed at every trailhead.</li>
        <li>Mornings before 9 AM offer the best combination of cool temperatures and low crowds.</li>
        <li>Watch for cyclists on shared-use trails, especially the West Ashley Greenway.</li>
        <li>Bug spray is essential for any trail near marsh or standing water, particularly May through October.</li>
        <li>Most paved trails are stroller-friendly; boardwalks usually are too, but check for stairs.</li>
      </ul>
    `,
  },
  {
    slug: "free-outdoor-activities-charleston-spring-2026",
    title: "Free Things to Do Outdoors in Charleston This Spring",
    description:
      "Eight free outdoor activities to enjoy in Charleston this spring — from azalea-lined park walks to beach sunsets and farmers market strolls.",
    category: "Seasonal",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-03-23",
    readTime: "6 min read",
    image: "/images/blog/spring-outdoors.jpg",
    imageAlt: "Spring blossoms and greenery in a Charleston park",
    content: `
      <p>Spring in Charleston is the sweet spot — warm enough for shorts and sandals, cool enough to actually enjoy being outside for more than ten minutes. The azaleas are blooming, the humidity hasn't arrived in full force yet, and the days stretch long enough for a post-dinner walk along the waterfront. Best of all, many of the best outdoor experiences in the Lowcountry don't cost a dime. Here are eight free things to do outdoors in Charleston this spring.</p>

      <h2>1. Walk the Azalea Trails at Hampton Park</h2>
      <p><a href="/parks/hampton-park">Hampton Park</a> explodes with color every March and April. The park's azalea beds — tucked along the loop trail and around the gazebo — put on one of the best free flower shows in the Southeast. The camellias and magnolias add to the display, and the live oak canopy keeps the light soft and photogenic. Walk the full one-mile loop, then find a bench near the rose garden and soak it in. Free and open daily.</p>

      <h2>2. Sunset at Folly Beach</h2>
      <p>Folly Beach is Charleston's closest ocean beach, and spring sunsets here are extraordinary. The crowds thin after the winter tourists leave and before the summer rush begins, which means you can often find a stretch of sand to yourself in the evenings. Walk east toward the Morris Island Lighthouse at low tide for dramatic tidal pool scenery, or head to the <a href="/parks/folly-beach-county-park">Folly Beach County Park</a> end for a quieter stretch. Beach access is free; the county park has a small parking fee but street parking on the main island is available.</p>

      <h2>3. Explore the Waterfront Park Promenade</h2>
      <p><a href="/parks/waterfront-park">Waterfront Park's</a> promenade along Charleston Harbor is one of the best free walks in the city in any season, but spring mornings here are especially good. The swingbed benches face the harbor, the Pineapple Fountain is running, and the palmetto palms are at their greenest. Kids can splash in the fountain, and the views of Fort Sumter and the Ravenel Bridge make for excellent photography. Free parking can be tricky — try the lots on Concord Street or walk from the French Quarter.</p>

      <h2>4. Stroll the Charleston Farmers Market</h2>
      <p>Every Saturday from April through November, Marion Square hosts the <strong>Charleston Farmers Market</strong> from 8 AM to 2 PM. It's free to attend and worth the visit even if you don't buy anything — local musicians perform, artisans display handmade goods, and the food vendors offer samples of Lowcountry staples. <a href="/parks/marion-square">Marion Square</a> itself is a pleasant green space for sitting under the trees afterward. The spring market is the best time to go, before summer heat drives everyone indoors by noon.</p>

      <h2>5. Birdwatching at Palmetto Islands County Park</h2>
      <p>Spring migration brings painted buntings, prothonotary warblers, and dozens of shorebird species to the Lowcountry. <a href="/parks/palmetto-islands-county-park">Palmetto Islands County Park</a> in Mount Pleasant is one of the best spots to see them. The boardwalk trails through maritime forest and along tidal creeks provide excellent vantage points. Bring binoculars and arrive early — bird activity peaks in the first two hours after sunrise. Park entry requires a small vehicle fee, but the birdwatching itself is free and extraordinary in April and May.</p>

      <h2>6. Bike the Ravenel Bridge</h2>
      <p>The Arthur Ravenel Jr. Bridge has a dedicated pedestrian and bicycle lane that offers one of the most dramatic views in Charleston — 200 feet above the Cooper River with the city skyline on one side and Mount Pleasant on the other. The round trip from the Charleston side is about five miles. Spring mornings are ideal: clear skies, moderate temperatures, and a breeze off the harbor. There's no fee, and bike rentals are available at several shops downtown if you don't have your own.</p>

      <h2>7. Picnic at White Point Garden</h2>
      <p>Pack a lunch and head to <a href="/parks/white-point-garden">White Point Garden</a> at the tip of the Peninsula. The park is shaded by massive live oaks, dotted with Civil War-era cannons, and surrounded by some of the finest residential architecture in Charleston. Spread a blanket on the lawn, watch the boats pass where the rivers meet, and enjoy one of the most scenic free lunch spots anywhere on the East Coast. Spring temperatures make the garden comfortable from mid-morning through late afternoon.</p>

      <h2>8. Kayak-Watch at Shem Creek</h2>
      <p>Even if you're not paddling, Shem Creek in Mount Pleasant is a free spectacle in spring. Walk the boardwalk along the creek to watch kayakers, stand-up paddleboarders, and shrimp boats navigate the waterway. Dolphins are frequent visitors, especially around the tidal changes. The boardwalk is free and open all day, with several spots to stop and watch the action. Nearby restaurants with outdoor patios make it easy to extend the outing into dinner.</p>

      <h3>Spring Planning Tips</h3>
      <ul>
        <li>Charleston spring weather is mostly warm (65–80°F), but pack a light layer for cooler mornings.</li>
        <li>Pollen season peaks in March and April — antihistamines are your friend.</li>
        <li>Weekday mornings are the best time to visit popular spots without crowds.</li>
        <li>Mosquitoes return in force by late April — bring repellent for any activity near water or marsh.</li>
        <li>Check the <a href="/maps">interactive park map</a> to find parks and green spaces near wherever you're staying.</li>
      </ul>
    `,
  },
  {
    slug: "first-time-charleston-5-parks",
    title: "First Time in Charleston? Start With These 5 Parks",
    description:
      "The five must-visit parks for first-time Charleston visitors — from waterfront promenades and Civil War history to shaded gardens and family-friendly fun.",
    category: "Visitor Guide",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-02",
    readTime: "5 min read",
    image: "/images/blog/first-time-parks.jpg",
    imageAlt: "The Pineapple Fountain at Waterfront Park in Charleston with harbor views",
    content: `
      <p>Charleston has dozens of parks, but if this is your first visit you don't need to see them all. These five deliver the best mix of scenery, history, and Lowcountry charm — and they're all easy to reach whether you're staying downtown, in Mount Pleasant, or on James Island.</p>

      <h2>1. Waterfront Park — The Iconic Starting Point</h2>
      <p><a href="/parks/waterfront-park">Waterfront Park</a> is Charleston's postcard park and the perfect place to begin any trip. The eight-acre promenade stretches along the Cooper River with sweeping harbor views, swinging benches, and the famous Pineapple Fountain. Arrive before 9 a.m. on weekdays to have the pier almost to yourself. Street parking is available along Concord Street, or use the garage on Cumberland Street. Plan for 45 minutes to an hour.</p>
      <p><strong>Nearby:</strong> <a href="/landmarks/rainbow-row">Rainbow Row</a> is a two-minute walk south. Combine both for a perfect morning.</p>

      <h2>2. White Point Garden — Where History Meets the Harbor</h2>
      <p><a href="/parks/white-point-garden">White Point Garden</a> sits at the tip of the Charleston Peninsula where the Ashley and Cooper Rivers meet. The park is filled with Civil War-era cannons and monuments beneath a canopy of live oaks. Walk the perimeter path along <a href="/landmarks/the-battery">The Battery</a> seawall for some of the best views in the city. Street parking is limited, so walk from Waterfront Park in about 10 minutes. Allow 30–45 minutes.</p>
      <p><strong>Best time:</strong> Late afternoon, when the light hits the harbor and the antebellum mansions along Murray Boulevard.</p>

      <h2>3. Hampton Park — The Local Favorite</h2>
      <p><a href="/parks/hampton-park">Hampton Park</a> is the largest park on the Peninsula at 60 acres, and it's where Charlestonians go to walk, jog, and picnic. The one-mile loop road is closed to cars on weekends, making it perfect for strollers and cyclists. The rose garden and gazebo are highlights, and the entire park explodes with azaleas in spring. Free street parking is plentiful on surrounding streets. Plan for an hour.</p>
      <p><strong>Tip:</strong> Pack a picnic from a King Street deli and claim a bench near the pond.</p>

      <h2>4. James Island County Park — Worth the Drive</h2>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> is 15 minutes from downtown and feels like a different world — 643 acres of tidal creeks, marshland, and paved trails. It's the best option for families who want a half-day outdoor adventure with a splash zone (Splash Island, open seasonally), fishing docks, a climbing wall, and disc golf. Admission is $2 per person. The park has its own lot with ample free parking.</p>
      <p><strong>How long:</strong> Two to four hours, depending on whether kids hit the waterpark.</p>

      <h2>5. Marion Square — The Downtown Gathering Place</h2>
      <p><a href="/parks/marion-square">Marion Square</a> is the social hub of the Peninsula. This 10-acre green sits at the intersection of King and Calhoun Streets and hosts the beloved <a href="/landmarks/charleston-city-market">Charleston Farmers Market</a> every Saturday from April through November. Even without the market, the square is a great spot to people-watch, grab coffee from a nearby café, and plan your day. No parking lot — use the visitor center garage on Meeting Street. Allow 20–30 minutes, or longer on market days.</p>

      <h2>Planning Your Park Day</h2>
      <ul>
        <li><strong>Morning:</strong> Start at Waterfront Park → walk to White Point Garden along East Bay Street.</li>
        <li><strong>Midday:</strong> Head to Marion Square for lunch and shopping on King Street.</li>
        <li><strong>Afternoon:</strong> Drive to Hampton Park or James Island County Park for a more relaxed experience.</li>
        <li>Use the <a href="/maps">interactive park map</a> to plan distances and find parking options near each park.</li>
      </ul>
    `,
  },
  {
    slug: "self-guided-walking-tour-downtown-charleston",
    title: "A Self-Guided Outdoor Walking Tour of Downtown Charleston",
    description:
      "A 2.5-mile walking route connecting Charleston's best parks, landmarks, and scenic streets — with timing, directions, and tips for food and water breaks.",
    category: "Walking Tours",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-02",
    readTime: "6 min read",
    image: "/images/blog/walking-tour.jpg",
    imageAlt: "Historic Charleston downtown street with pastel buildings, palm trees, and a church steeple",
    content: `
      <p>Charleston's Peninsula is one of the most walkable historic districts in the country. This self-guided route covers roughly 2.5 miles and connects six parks and landmarks in a logical loop. The full walk takes about two and a half hours at a relaxed pace with photo stops, or you can break it into two shorter sessions.</p>

      <h2>Stop 1: Marion Square (Start Here)</h2>
      <p>Begin at <a href="/parks/marion-square">Marion Square</a> at the corner of King and Calhoun Streets. This central green is easy to reach from most downtown hotels and has public restrooms at the visitor center nearby. On Saturday mornings, the Charleston Farmers Market fills the square — grab a pastry and coffee to fuel the walk. Spend 15–20 minutes here.</p>
      <p><em>Walk south on Meeting Street for 6 blocks (10 minutes).</em></p>

      <h2>Stop 2: Charleston City Market</h2>
      <p>The <a href="/landmarks/charleston-city-market">Charleston City Market</a> stretches four blocks between Meeting and East Bay Streets. Stroll through the open-air sheds where Gullah artisans weave sweetgrass baskets — a tradition dating back centuries. Even if you're not shopping, the architecture and energy make it worth a walk-through. Spend 15–20 minutes.</p>
      <p><em>Continue east on Market Street to East Bay Street, then turn right and walk south for 3 blocks (5 minutes).</em></p>

      <h2>Stop 3: Waterfront Park</h2>
      <p><a href="/parks/waterfront-park">Waterfront Park</a> is the highlight of the route. Walk the full length of the promenade, stop at the Pineapple Fountain for photos, and rest on one of the iconic swinging benches facing the harbor. Water fountains and restrooms are available near the pier. Spend 20–30 minutes.</p>
      <p><em>Exit the park's south end and walk along East Battery for 5 blocks (8 minutes).</em></p>

      <h2>Stop 4: White Point Garden & The Battery</h2>
      <p><a href="/parks/white-point-garden">White Point Garden</a> anchors the southern tip of the Peninsula. Wander through the live oaks and cannon displays, then walk the seawall path along <a href="/landmarks/the-battery">The Battery</a> for panoramic views of Fort Sumter and the harbor. This is the most photogenic stretch of the walk. Spend 20–30 minutes.</p>
      <p><em>Walk west along South Battery, then turn right on Legare Street heading north for 4 blocks. Turn left on Broad Street for 2 blocks to reach King Street, then north for 5 blocks (15 minutes).</em></p>

      <h2>Stop 5: Cannon Park</h2>
      <p><a href="/parks/cannon-park">Cannon Park</a> is a small neighborhood green on the edge of the residential district. It's a quiet spot to sit on a bench under the oaks, rest your feet, and watch the neighborhood go by. There's no formal infrastructure here — just shade and calm. Spend 10 minutes.</p>
      <p><em>Continue north on Rutledge Avenue for 6 blocks (10 minutes).</em></p>

      <h2>Stop 6: Colonial Lake</h2>
      <p>Finish the loop at <a href="/parks/colonial-lake">Colonial Lake</a>. The half-mile paved path circling the tidal lake is one of the prettiest short walks in Charleston. Joggers, dog walkers, and families share the path against a backdrop of historic homes. Find a bench on the eastern shore for a sunset view if your timing is right. Spend 15–20 minutes.</p>

      <h2>Practical Tips</h2>
      <ul>
        <li><strong>Total distance:</strong> Approximately 2.5 miles.</li>
        <li><strong>Total time:</strong> 2–3 hours including stops.</li>
        <li><strong>Water break:</strong> Refill at Waterfront Park's fountains. Bring a bottle — Charleston gets warm even in spring.</li>
        <li><strong>Food break:</strong> Upper King Street (near Marion Square) and East Bay Street both have plenty of restaurants and cafés.</li>
        <li><strong>Best time to start:</strong> Early morning (before 9 a.m.) or late afternoon (4 p.m.) to avoid midday heat.</li>
        <li>View the full route on the <a href="/maps">interactive park map</a> to see all stops plotted on one screen.</li>
      </ul>
    `,
  },
  {
    slug: "best-parks-near-charleston-hotels",
    title: "Best Parks Near Charleston's Top Hotels and Vacation Rentals",
    description:
      "A neighborhood-by-neighborhood guide to the best parks near Charleston's most popular tourist areas — Historic District, Mount Pleasant, Folly Beach, and Daniel Island.",
    category: "Visitor Guide",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-02",
    readTime: "6 min read",
    image: "/images/blog/parks-near-hotels.jpg",
    imageAlt: "King Street in Charleston at sunset with historic storefronts and warm evening light",
    content: `
      <p>One of the best things about staying in Charleston is how close the green space is — no matter which neighborhood you book, there's a park within walking or short driving distance. Here's a guide organized by the areas where most visitors stay.</p>

      <h2>Historic District & King Street</h2>
      <p>If you're staying downtown — along King Street, Meeting Street, or near the Market — you're already within walking distance of Charleston's best parks.</p>
      <h3>Waterfront Park (5–10 min walk from most downtown hotels)</h3>
      <p><a href="/parks/waterfront-park">Waterfront Park</a> is the crown jewel. Morning visits are best for harbor photos without crowds. The swinging benches and Pineapple Fountain are a short stroll from hotels on East Bay and Vendue Range.</p>
      <h3>Marion Square (Central King Street)</h3>
      <p><a href="/parks/marion-square">Marion Square</a> is the green heart of downtown and likely steps from your hotel if you're on upper King Street. Saturday morning farmers market is a must. Grab breakfast and sit on the lawn.</p>
      <h3>White Point Garden (South of Broad)</h3>
      <p><a href="/parks/white-point-garden">White Point Garden</a> is a 15-minute walk from most downtown hotels, right at the tip of the Peninsula. The oaks, cannons, and Battery seawall views make it worth the stroll, especially near sunset.</p>

      <h2>Mount Pleasant</h2>
      <p>Mount Pleasant is across the Cooper River, popular for vacation rentals and resort-style hotels near Shem Creek and the beaches.</p>
      <h3>Mount Pleasant Waterfront Park</h3>
      <p><a href="/parks/mount-pleasant-waterfront-park">Mount Pleasant Waterfront Park</a> sits right under the Ravenel Bridge with a long fishing pier, playground, and marsh boardwalk. It's ideal for a morning walk or an evening with a view of the Charleston skyline. Free parking on-site.</p>
      <h3>Palmetto Islands County Park</h3>
      <p><a href="/parks/palmetto-islands-county-park">Palmetto Islands County Park</a> is a 10-minute drive from central Mount Pleasant and offers 943 acres of creeks, boardwalks, and nature trails. Bring binoculars — the birdwatching here is some of the best in the area. Great for families looking for a half-day nature escape.</p>

      <h2>Folly Beach & James Island</h2>
      <p>Folly Beach is Charleston's surf town, and James Island sits between downtown and the coast. Both areas are popular with vacation rental guests looking for a laid-back vibe.</p>
      <h3>Folly Beach County Park</h3>
      <p><a href="/parks/folly-beach-county-park">Folly Beach County Park</a> is at the west end of Folly Island with lifeguards, chair rentals, and a calmer stretch of sand than the main beach. Parking is $10 per car — arrive early in summer. Perfect for a full beach day without the party crowd.</p>
      <h3>James Island County Park</h3>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> is the outdoor activity hub of the area. Trails, fishing, disc golf, a dog park, and the seasonal Splash Island waterpark make it the best option for families staying on James Island. It's also the home of the annual Holiday Festival of Lights. A 10-minute drive from Folly Beach.</p>

      <h2>Daniel Island</h2>
      <p>Daniel Island is a planned community east of the Peninsula, known for its golf courses, family-friendly atmosphere, and newer vacation properties.</p>
      <h3>Waterfront Park at Daniel Island</h3>
      <p>Daniel Island's waterfront park offers a quiet boardwalk along the Wando River with kayak launches, a playground, and wide open lawns. It's a completely different pace from downtown — perfect for an early morning jog or a sunset picnic without the tourist crowds.</p>
      <h3>Wannamaker County Park</h3>
      <p><a href="/parks/wannamaker-county-park">Wannamaker County Park</a> is a 10-minute drive from Daniel Island and has an aquatic center with a lazy river, water slides, and a splash pad. It's the top choice for families with kids who want a full day of outdoor fun. Trails and fishing ponds round out the options for adults.</p>

      <h2>Quick Tips for Visitors</h2>
      <ul>
        <li><strong>Parking:</strong> Downtown parks have limited street parking. Use the visitor center garage on Meeting Street. County parks all have free lots.</li>
        <li><strong>Timing:</strong> Weekday mornings are best for avoiding crowds at downtown parks.</li>
        <li><strong>Combo plan:</strong> Stay downtown and visit nearby parks on foot, then drive to a county park for a half-day trip.</li>
        <li>Use the <a href="/maps">interactive park map</a> to find the closest park to your hotel or rental.</li>
      </ul>
    `,
  },
  {
    slug: "best-sunset-spots-charleston-parks",
    title: "Best Sunset Spots in Charleston's Parks",
    description:
      "Six parks and outdoor spots with the best sunset views in the Charleston area — plus which direction they face, best seasons, and photography tips.",
    category: "Scenic Views",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-09",
    readTime: "5 min read",
    image: "/images/blog/sunset-spots.jpg",
    imageAlt: "Golden sunset over marsh and water with dramatic clouds",
    content: `
      <p>Charleston sits where rivers meet the Atlantic, and that geography delivers some of the most spectacular sunsets on the East Coast. The trick is knowing which parks face the right direction. Here are six spots where the evening light is worth planning your day around.</p>

      <h2>1. Waterfront Park — Harbor Glow</h2>
      <p><a href="/parks/waterfront-park">Waterfront Park</a> faces east toward the Cooper River, so you won't catch the sun dropping into the water here. What you will get is the warm reflected glow that lights up the harbor, the Ravenel Bridge, and the Pineapple Fountain in golden tones. It's the most photogenic "afterglow" spot in the city. Arrive 20 minutes after official sunset for the best color on the bridge.</p>
      <p><strong>Faces:</strong> East. <strong>Best season:</strong> Year-round. <strong>Photo tip:</strong> Shoot the fountain with the bridge lit behind it during blue hour.</p>

      <h2>2. The Battery & White Point Garden — The Classic</h2>
      <p>The seawall path along <a href="/landmarks/the-battery">The Battery</a> at <a href="/parks/white-point-garden">White Point Garden</a> faces south and west — directly into the sunset over the Ashley River. This is Charleston's quintessential sunset walk. The antebellum mansions along Murray Boulevard catch the light beautifully, and on clear evenings the sky over the Ashley turns deep orange and pink.</p>
      <p><strong>Faces:</strong> South/West. <strong>Best season:</strong> Fall and winter, when the sun sets more directly over the river. <strong>Photo tip:</strong> Stand at the corner of East Battery and Murray for the best composition with the mansions.</p>

      <h2>3. Brittlebank Park — The Wide-Open View</h2>
      <p><a href="/parks/brittlebank-park">Brittlebank Park</a> sits on the Ashley River with a completely unobstructed western horizon. It's one of the few parks where you can watch the sun drop below the treeline across the river with nothing in the way. The park is less crowded than The Battery, which makes it a great alternative for a quiet sunset.</p>
      <p><strong>Faces:</strong> West. <strong>Best season:</strong> Spring and summer for the latest sunsets. <strong>Photo tip:</strong> The fishing pier makes an excellent foreground element.</p>

      <h2>4. Mount Pleasant Memorial Waterfront Park — Skyline Silhouette</h2>
      <p><a href="/parks/mount-pleasant-waterfront-park">Mount Pleasant Waterfront Park</a> faces west toward downtown Charleston, and the sunset drops behind the city skyline and <a href="/landmarks/ravenel-bridge">Ravenel Bridge</a>. The combination of marsh, bridge, and steeple silhouettes makes this arguably the most dramatic sunset viewpoint in the area. The long pier gives you an elevated vantage point.</p>
      <p><strong>Faces:</strong> West. <strong>Best season:</strong> Year-round. <strong>Photo tip:</strong> Walk to the end of the pier and shoot the bridge silhouetted against the sky.</p>

      <h2>5. Folly Beach County Park — Ocean Horizon</h2>
      <p><a href="/parks/folly-beach-county-park">Folly Beach County Park</a> faces south-southwest, and during summer months the sun sets far enough to the west that it dips toward the ocean horizon. The wide beach, gentle waves, and lack of buildings create a pure seascape sunset. Pack a blanket and arrive an hour early for the full color progression.</p>
      <p><strong>Faces:</strong> South/Southwest. <strong>Best season:</strong> Late spring and summer. <strong>Photo tip:</strong> Wet sand near the waterline creates mirror reflections of the sky.</p>

      <h2>6. Shem Creek Boardwalk — The Marsh Sunset</h2>
      <p>Shem Creek in Mount Pleasant isn't a formal park, but the public boardwalk along the creek offers one of the best sunset experiences in the Lowcountry. The sun drops behind the marsh grass, shrimp boats, and tidal creek in layers of gold and orange. The nearby restaurants have waterfront decks if you want to pair your sunset with dinner.</p>
      <p><strong>Faces:</strong> West. <strong>Best season:</strong> Year-round. <strong>Photo tip:</strong> Include a shrimp boat in the frame for a classic Lowcountry composition.</p>

      <h2>Sunset Planning Tips</h2>
      <ul>
        <li>Check sunset time for Charleston before heading out — it varies from 5:30 p.m. in winter to 8:30 p.m. in summer.</li>
        <li>Arrive 30 minutes before sunset and stay 20 minutes after — the afterglow is often better than the main event.</li>
        <li>Use the <a href="/maps">interactive park map</a> to check park locations and plan parking in advance.</li>
      </ul>
    `,
  },
  {
    slug: "charleston-parks-perfect-date-night",
    title: "Charleston Parks That Are Perfect for a Date Night",
    description:
      "Five romantic parks and outdoor settings in Charleston for couples — from fountain-lit strolls and garden walks to marsh sunsets and lakeside evenings.",
    category: "Date Ideas",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-09",
    readTime: "5 min read",
    image: "/images/blog/date-night.jpg",
    imageAlt: "Colorful illuminated fountain at dusk with purple and blue water jets",
    content: `
      <p>Charleston might be famous for its restaurants, but some of the most romantic moments happen outside — under live oaks, beside fountains, or overlooking the harbor at dusk. These five parks set the stage for a memorable evening out.</p>

      <h2>1. Colonial Lake at Dusk — The Quiet Walk</h2>
      <p><a href="/parks/colonial-lake">Colonial Lake</a> is one of Charleston's most underrated date spots. The half-mile paved path circling the tidal lake is peaceful in the evening, lined with historic homes and mature trees. As the light fades, the water reflects the surrounding architecture and the sky turns pink. Walk the loop, find a bench on the south side, and watch the neighborhood settle into evening.</p>
      <p><strong>Dinner nearby:</strong> The restaurants on Broad Street and Rutledge Avenue are a 5-minute walk away — try a prix fixe dinner before the walk.</p>
      <p><strong>Timing:</strong> Arrive about 45 minutes before sunset for the best light on the water.</p>

      <h2>2. Waterfront Park — The Fountain at Night</h2>
      <p>The Pineapple Fountain at <a href="/parks/waterfront-park">Waterfront Park</a> takes on a completely different character after dark. The fountain is lit from below, the harbor glitters with boat lights, and the swinging benches become the most romantic seats in Charleston. The park stays open until midnight, and the evening crowd thins out after 9 p.m.</p>
      <p><strong>Dinner nearby:</strong> East Bay Street has dozens of options — from fine dining to oyster bars — all within a block of the park entrance.</p>
      <p><strong>Timing:</strong> Go after dinner, around 8:30–9 p.m., for the quietest experience.</p>

      <h2>3. Hampton Park Gardens — The Afternoon Stroll</h2>
      <p><a href="/parks/hampton-park">Hampton Park</a> is 60 acres of gardens, ponds, and tree-canopied paths. The rose garden is the obvious romantic highlight, but the quieter paths near the gazebo and along the pond are where couples linger. On weekends, the loop road is closed to cars, making the entire park a pedestrian paradise.</p>
      <p><strong>Dinner nearby:</strong> Upper King Street's restaurant row is a 10-minute drive south. Grab dinner first, then drive up for a sunset walk through the gardens.</p>
      <p><strong>Timing:</strong> Late afternoon, especially in spring when the azaleas and roses are in bloom.</p>

      <h2>4. White Point Garden — The Evening View</h2>
      <p><a href="/parks/white-point-garden">White Point Garden</a> and <a href="/landmarks/the-battery">The Battery</a> promenade offer one of the most dramatic walks in Charleston. At sunset, the mansions along South Battery glow warm orange, and the harbor opens up at the point. Walk the full seawall from East Battery to Murray Boulevard. On quiet evenings, you might have the entire southern tip of the park to yourselves.</p>
      <p><strong>Dinner nearby:</strong> South of Broad has intimate bistros and wine bars on Church and State Streets.</p>
      <p><strong>Timing:</strong> Sunset — check the time and arrive 30 minutes early.</p>

      <h2>5. Shem Creek Boardwalk — The Marsh Sunset</h2>
      <p>The boardwalk along Shem Creek in Mount Pleasant is one of the most romantic outdoor walks in the Lowcountry. Watch shrimp boats return to dock as the sun drops behind the marsh, turning everything gold. Dolphins often surface in the creek at dusk. End the walk at one of the creek-side restaurants for drinks on the water.</p>
      <p><strong>Dinner nearby:</strong> The restaurants are right on the boardwalk — seafood and sunset in one stop.</p>
      <p><strong>Timing:</strong> Arrive one hour before sunset for the full light show.</p>

      <h2>Date Night Planning Tips</h2>
      <ul>
        <li>Bring a light layer — evenings near the water can cool down quickly, even in spring.</li>
        <li>Parking is easier after 6 p.m. downtown when meters stop enforcing.</li>
        <li>Check the <a href="/maps">interactive park map</a> for locations and nearby restaurants.</li>
      </ul>
    `,
  },
  {
    slug: "where-to-see-wildlife-charleston-parks",
    title: "Where to See Wildlife in Charleston's Parks",
    description:
      "The best parks and outdoor spots for seeing birds, dolphins, alligators, and other Lowcountry wildlife — with tips on the best seasons and times of day.",
    category: "Nature",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-09",
    readTime: "6 min read",
    image: "/images/blog/wildlife-parks.jpg",
    imageAlt: "Great blue heron with a fresh catch on a wooden dock in the Lowcountry",
    content: `
      <p>The Charleston Lowcountry is one of the richest wildlife habitats on the East Coast. Tidal marshes, maritime forests, barrier islands, and coastal waterways create overlapping ecosystems where birds, dolphins, alligators, sea turtles, and hundreds of other species thrive. You don't need a boat or a guide — just the right park at the right time.</p>

      <h2>Palmetto Islands County Park — The Birdwatcher's Paradise</h2>
      <p><a href="/parks/palmetto-islands-county-park">Palmetto Islands County Park</a> in Mount Pleasant is the single best spot for birdwatching in the Charleston area. The park's 943 acres of tidal creeks, marsh, and maritime forest host great blue herons, snowy egrets, wood storks, and osprey year-round. In spring and fall, migrating songbirds pass through in large numbers. The boardwalk through the marsh is the prime viewing area — bring binoculars and arrive early in the morning when birds are most active.</p>
      <p><strong>Best time:</strong> Sunrise to 9 a.m., year-round. Spring migration (March–May) is peak season.</p>

      <h2>Caw Caw Interpretive Center — Alligators and Wading Birds</h2>
      <p>Caw Caw is a former rice plantation turned nature preserve on Highway 17 South, about 20 minutes from downtown. The six miles of trails wind through old rice fields, swamp, and bottomland forest. This is the most reliable place near Charleston to see alligators basking in the sun along the dike trails. Wading birds — herons, ibis, and egrets — hunt in the shallow impoundments. The swamp trail also attracts painted buntings in summer.</p>
      <p><strong>Best time:</strong> Morning, spring through fall. Alligators are most visible on warm sunny days from April to October.</p>

      <h2>Shem Creek — Dolphins at Dusk</h2>
      <p>The Shem Creek boardwalk in Mount Pleasant is one of the easiest places to spot bottlenose dolphins in the wild. The dolphins follow schools of fish into the tidal creek, often surfacing just feet from the boardwalk. The best viewing is during incoming tides in the late afternoon. You'll also see pelicans diving, herons stalking the shallows, and the occasional stingray gliding past.</p>
      <p><strong>Best time:</strong> Late afternoon on an incoming tide, year-round. Summer evenings are especially active.</p>

      <h2>Folly Beach County Park — Sea Turtles and Shorebirds</h2>
      <p><a href="/parks/folly-beach-county-park">Folly Beach County Park</a> is a nesting site for loggerhead sea turtles from May through August. The park marks and protects nests, and volunteers lead nighttime turtle walks during peak season — check with the park office for schedules. Even outside turtle season, the beach hosts sanderlings, plovers, royal terns, and laughing gulls. The calmer western end of the beach is best for shorebirds.</p>
      <p><strong>Best time:</strong> Early morning for shorebirds. May–August for sea turtle nesting. Late July–September for hatchling emergence.</p>

      <h2>James Island County Park — Marsh Edges</h2>
      <p>The trails and fishing docks at <a href="/parks/james-island-county-park">James Island County Park</a> border tidal marsh and creeks where herons, egrets, and fiddler crabs are easy to spot. The park's ponds also attract seasonal ducks and coots in winter. Walk the perimeter trails early in the morning for the best sightings. Occasionally, river otters are seen along the creek banks.</p>
      <p><strong>Best time:</strong> Early morning. Winter for waterfowl, spring/summer for wading birds.</p>

      <h2>Mount Pleasant Waterfront Park — Easy Access Harbor Wildlife</h2>
      <p><a href="/parks/mount-pleasant-waterfront-park">Mount Pleasant Waterfront Park</a> offers the most convenient wildlife viewing in the area. Walk the marsh boardwalk at low tide to see fiddler crabs by the thousands, and watch the pier for brown pelicans, cormorants, and the occasional dolphin pod cruising past. The park's location under the <a href="/landmarks/ravenel-bridge">Ravenel Bridge</a> also makes it a perching spot for peregrine falcons.</p>
      <p><strong>Best time:</strong> Low tide for marsh life. Any time for birds and dolphins.</p>

      <h2>Wildlife Viewing Tips</h2>
      <ul>
        <li><strong>Binoculars:</strong> Essential for birdwatching. Even a basic pair makes a huge difference.</li>
        <li><strong>Stay quiet:</strong> Wildlife is most active when the area is calm. Early mornings on weekdays are ideal.</li>
        <li><strong>Keep distance:</strong> Never approach alligators, nesting birds, or sea turtle nests. Use a zoom lens instead.</li>
        <li>Use the <a href="/maps">interactive park map</a> to locate parks with marsh and waterfront access.</li>
      </ul>
    `,
  },
  {
    slug: "ultimate-guide-james-island-parks",
    title: "The Ultimate Guide to James Island's Parks and Outdoor Spaces",
    description:
      "A complete guide to every park and outdoor space on James Island — from the 643-acre county park to hidden neighborhood gems and Folly Beach access.",
    category: "Area Guide",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-09",
    readTime: "7 min read",
    image: "/images/blog/james-island-guide.jpg",
    imageAlt: "Wooden boardwalk winding through green marsh wetlands",
    content: `
      <p>James Island sits between downtown Charleston and Folly Beach, and it packs more outdoor options into one area than most visitors realize. From a 643-acre county park to a historic plantation site to one of the best beaches in the state, James Island can fill an entire vacation with outdoor activities. Here's everything you need to know.</p>

      <h2>James Island County Park — The Anchor</h2>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> is the largest and most developed park on the island, and one of the best in the entire Charleston County park system. The 643 acres include paved multi-use trails, a fishing and crabbing dock, a climbing wall, disc golf, a dog park, picnic shelters, and campgrounds.</p>
      <p>The seasonal Splash Island waterpark (open Memorial Day through Labor Day) is the biggest draw for families — with water slides, a lazy river, and a splash pad for toddlers. The park also hosts the annual Holiday Festival of Lights every November and December, when the driving route is decorated with millions of lights.</p>
      <p><strong>Admission:</strong> $2 per person. Free parking. <strong>Best for:</strong> Families, cyclists, disc golfers, and anyone wanting a full day outdoors. <strong>Time needed:</strong> 2–5 hours depending on activities.</p>

      <h2>McLeod Plantation Historic Site</h2>
      <p>McLeod Plantation on Country Club Drive is one of the most important Gullah Geechee heritage sites in the Lowcountry. The 37-acre property preserves six original slave cabins, the main house, and a live oak allée that frames the entrance. Unlike many plantation sites, McLeod centers the stories of the enslaved people who lived and worked here. The site is now part of the Charleston County Park system.</p>
      <p><strong>Admission:</strong> $15 adults, $10 ages 3–12. Guided tours available. <strong>Best for:</strong> History and cultural heritage. <strong>Time needed:</strong> 1–2 hours.</p>

      <h2>Folly Beach County Park — The Beach Day</h2>
      <p><a href="/parks/folly-beach-county-park">Folly Beach County Park</a> occupies the quieter western end of Folly Island. The beach here is wider and less crowded than the public beach near the pier. Lifeguards are on duty in season, and you can rent chairs, umbrellas, and boogie boards at the park. The dunes are protected sea turtle nesting habitat from May through August.</p>
      <p><strong>Admission:</strong> $10 per vehicle. <strong>Best for:</strong> Families, swimming, and beach picnics. <strong>Time needed:</strong> Half day to full day. <strong>Tip:</strong> Arrive before 10 a.m. on summer weekends — the lot fills up and the gate closes.</p>

      <h2>Stiles Point Neighborhood Parks</h2>
      <p>The Stiles Point area on the eastern side of James Island has several small neighborhood parks with playgrounds, open fields, and marsh views. These parks aren't destinations on their own, but they're great for morning walks, dog outings, or letting kids burn energy if you're staying nearby. The marsh-edge parks along the Stono River offer quiet spots to watch the tide come in.</p>
      <p><strong>Best for:</strong> Locals and visitors staying in nearby rentals who want a quick outdoor break.</p>

      <h2>Camp Road Bike and Walk Path</h2>
      <p>Camp Road connects James Island to Folly Beach, and the paved multi-use path along one side makes it a popular walking and cycling route. The path is flat and shaded in sections, passing through residential areas with occasional marsh views. It's not scenic enough to be a destination, but it's a practical route for getting exercise or biking from the island toward Folly.</p>
      <p><strong>Best for:</strong> Jogging, cycling, and connecting between parks without driving.</p>

      <h2>Planning a Full Day on James Island</h2>
      <p>Here's how to make the most of a day outdoors on James Island:</p>
      <ul>
        <li><strong>Morning:</strong> Start at James Island County Park for trails, disc golf, or the dog park. Grab coffee and breakfast at a café on Maybank Highway.</li>
        <li><strong>Midday:</strong> Drive to Folly Beach County Park for a beach session. Pack a cooler — there's no food service inside the park.</li>
        <li><strong>Afternoon:</strong> Visit McLeod Plantation for a guided tour (last tours usually start at 3 or 4 p.m. — check ahead).</li>
        <li><strong>Evening:</strong> Head back to Folly Beach Center Street for dinner and sunset from the <a href="/landmarks/folly-beach-pier">Folly Beach Pier</a>.</li>
        <li>Use the <a href="/maps">interactive park map</a> to see all James Island parks and plan your route.</li>
      </ul>
    `,
  },
  {
    slug: "charleston-parks-sunrise-walks-coffee",
    title: "Charleston's Best Parks for a Sunrise Walk and Coffee",
    description:
      "Five Charleston parks that come alive at first light — where the marsh fog lifts, the harbor wakes up, and the coffee tastes better for it.",
    category: "Scenic Views",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-26",
    readTime: "5 min read",
    image: "/images/blog/sunrise-walks.jpg",
    imageAlt: "Soft pastel sunrise rising over a Lowcountry marsh with mist on the water",
    content: `
      <p>Charleston gets a lot of attention for its sunsets, but locals will tell you the morning is really when the city is at its best. The marsh steams, the heat hasn't built up yet, and the parks are nearly empty. If you can get out the door with a thermos, here are five places where the first hour of daylight is worth setting an alarm for.</p>

      <h2>1. Waterfront Park — Catch the Sun Off the Cooper</h2>
      <p><a href="/parks/waterfront-park">Waterfront Park</a> faces directly east, which makes it the most reliable sunrise viewpoint downtown. The sun comes up over the Cooper River and lights the Pineapple Fountain in warm amber tones. Grab a coffee from one of the East Bay Street cafes on your way in — Harken Cafe and Black Tap are both within a five-minute walk and open early. Sit on the pier swings, watch the container ships come in, and you'll have the place mostly to yourself before 7:30 a.m.</p>

      <h2>2. The Battery — Quiet Before the Tour Buses</h2>
      <p>Walking the seawall along <a href="/landmarks/the-battery">The Battery</a> at sunrise is one of those Charleston experiences that doesn't show up in guidebooks because it's so simple. The harbor is glassy, joggers nod hello, and the antebellum mansions catch the first warm light on their facades. Park near <a href="/parks/white-point-garden">White Point Garden</a>, walk the seawall to the corner of East Bay, and double back through the live oaks. The whole loop takes about 25 minutes.</p>

      <h2>3. Hampton Park — Coffee, Roses, and Birdsong</h2>
      <p><a href="/parks/hampton-park">Hampton Park</a> is the runner's pick. The paved one-mile loop is mostly shaded, the rose garden is at its best in the cool morning hours, and the bird activity around the pond is genuinely impressive at first light. Hampton Park Cafe sits right at the edge of the park and opens at 7 a.m. — order a flat white, walk a lap, and you'll understand why so many West Side residents organize their entire morning around this routine.</p>

      <h2>4. Mount Pleasant Waterfront Park — The Bridge in Pink Light</h2>
      <p>If you've never seen the <a href="/landmarks/ravenel-bridge">Ravenel Bridge</a> in pink sunrise light, that's reason enough to drive over the river. <a href="/parks/mount-pleasant-waterfront-park">Mount Pleasant Waterfront Park</a> faces west toward the bridge, so the bridge cables glow while the sun rises behind you. Walk to the end of the pier, look back, and you'll see the Charleston skyline lit up like a postcard. Coffee options are thinner here — bring your own or stop at the Mount Pleasant Coffee Roasters on Coleman Boulevard before you arrive.</p>

      <h2>5. Brittlebank Park — The Wide-Sky Option</h2>
      <p><a href="/parks/brittlebank-park">Brittlebank Park</a> sits on the Ashley River with a huge open sky and very little tree cover, which means you get the whole color show — pre-dawn lavender, peach band on the horizon, then the full warm wash. It's also one of the easier parks to park at in the morning. The fishing pier is the place to stand. If you want food, Bumpa's on the corner of Lockwood and Spring opens early on weekdays.</p>

      <h2>Tips for an Easy Sunrise Outing</h2>
      <ul>
        <li>Sunrise in Charleston ranges from about 6:15 a.m. in summer to 7:30 a.m. in winter — check the time the night before.</li>
        <li>Bring a light layer even in summer; the marsh wind off the water is cooler than you'd expect at dawn.</li>
        <li>Most parks don't have coffee on-site, so plan a stop on the way in or pack a thermos.</li>
        <li>Use the <a href="/maps">interactive park map</a> to plan parking — many downtown lots are still free this early.</li>
      </ul>

      <p>If you've only got time for one sunrise this trip, make it Mount Pleasant Waterfront Park. The bridge in morning light is the kind of view people remember years later. Browse the rest of the parks on <a href="/parks">our park directory</a> to plan the next one.</p>
    `,
  },
  {
    slug: "quiet-charleston-parks-reading-sketching",
    title: "Quiet Charleston Parks for Reading, Sketching, or a Slow Afternoon",
    description:
      "Five low-key Charleston parks where you can find a shaded bench, open a book, and actually hear the wind in the live oaks — slow afternoon picks for locals.",
    category: "Hidden Gems",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-26",
    readTime: "5 min read",
    image: "/images/blog/quiet-parks.jpg",
    imageAlt: "Empty wooden park bench under sprawling live oaks draped in Spanish moss",
    content: `
      <p>Some afternoons you don't want a hike or a playground or a crowd. You want a bench, some shade, and an hour where nothing is asking anything of you. Charleston has more of these spaces than people realize — you just have to know which ones stay quiet. Here are five parks built for slow afternoons.</p>

      <h2>1. Cannon Park — A Pocket of Calm Off King Street</h2>
      <p><a href="/parks/cannon-park">Cannon Park</a> is small enough that most people walk past it on their way somewhere else. That's exactly why it works. The Doric columns from the old Charleston Museum still stand in the middle of the lawn, the benches around the edges are usually empty, and the live oaks form a near-complete canopy. It's the kind of place where you can finish a chapter without anyone noticing you're there. Five minutes from upper King Street if you need to refill on coffee.</p>

      <h2>2. Colonial Lake — A Bench, a Book, and the Water</h2>
      <p><a href="/parks/colonial-lake">Colonial Lake</a> is one of Charleston's most quietly underrated parks. The walking path circles a tidal pond with benches every fifty feet or so, and the entire place tilts toward calm. Mornings are good for sketching the reflections on the water; afternoons are better for reading once the live oak shade settles in. There's a steady, soft soundtrack of wind, birds, and the occasional kayak paddle, but rarely anything you'd call noise.</p>

      <h2>3. White Point Garden — Slow Bench Under Live Oaks</h2>
      <p>Most visitors hit <a href="/parks/white-point-garden">White Point Garden</a> at the end of a long walking tour, but if you come midweek and pick a bench on the interior paths rather than the seawall side, you'll find it surprisingly quiet. The live oaks are dramatic enough to anchor a sketch, the breeze off the harbor keeps the heat down, and the cannons and monuments give you something to look at when the page gets stale.</p>

      <h2>4. Hampton Park's Rose Garden — Color Without Crowds</h2>
      <p>Inside <a href="/parks/hampton-park">Hampton Park</a>, the rose garden and gazebo area near the pond is the quietest pocket in the whole park. Bring a notebook in spring when the roses are at peak — there's enough variety in shape and color to keep a watercolor session interesting for a couple hours. Park benches face the water, and the sound of the fountain covers everything else.</p>

      <h2>5. Hazel Parker Playground (the Garden Side) — Surprise Find</h2>
      <p>The name throws people off, but <a href="/parks/hazel-parker-playground">Hazel Parker Playground</a> on the south end of the peninsula has a beautiful waterfront edge that's almost completely separate from the play structures. Walk to the back of the park, past the basketball courts, and you'll find a grassy stretch facing the harbor with old benches and a slow flow of foot traffic. Locals walk dogs through here and barely break stride. It's a perfect afternoon read spot.</p>

      <h2>What to Bring</h2>
      <ul>
        <li>A small thermos or a water bottle — none of these parks have reliable concessions.</li>
        <li>Bug spray in the warmer months. The shade attracts mosquitoes after about 4 p.m.</li>
        <li>A light cushion if you're planning to sit for more than an hour. Charleston's wooden benches are pretty, but they get unforgiving.</li>
        <li>Headphones are optional — the ambient sound at all five of these is genuinely pleasant.</li>
      </ul>

      <p>Charleston's louder parks have their place, but the quiet ones are where the city actually slows down. Browse <a href="/parks">all of our parks</a> if you'd like to find your own bench, or check the <a href="/maps">park map</a> to plan a slow afternoon route.</p>
    `,
  },
  {
    slug: "short-charleston-nature-walks-under-an-hour",
    title: "Short Charleston Nature Walks You Can Do in Under an Hour",
    description:
      "Five short, scenic Lowcountry nature walks under a mile and under an hour — perfect for visitors with limited time or anyone squeezing in a quick green break.",
    category: "Trails",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-26",
    readTime: "5 min read",
    image: "/images/blog/short-nature-walks.jpg",
    imageAlt: "Wooden boardwalk winding through tall marsh grass under open sky",
    content: `
      <p>Not every park visit needs to be a half-day commitment. If you've got an hour between meetings, a flight to catch, or kids who can only handle so much trail, there are real Lowcountry nature walks that fit into a tight window. These five are all under a mile, low-effort, and pay off in views.</p>

      <h2>1. James Island County Park — Marsh Boardwalk Loop</h2>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> has a short boardwalk loop near the entrance that takes about 25 minutes round-trip and threads through tidal marsh and live oak hammock. You'll often see herons fishing in the channels and fiddler crabs working the mud at low tide. There's a small entry fee, but the parking is right next to the trailhead, which makes the in-and-out easy.</p>

      <h2>2. Palmetto Islands County Park — Big Toe Trail</h2>
      <p>The Big Toe Trail at <a href="/parks/palmetto-islands-county-park">Palmetto Islands County Park</a> is a flat 0.7-mile boardwalk and packed-dirt loop through maritime forest. It feels deeper into nature than its short length would suggest — palmettos overhead, marsh on one side, and very little ambient noise. A good first nature walk for kids who haven't done a real trail before, and short enough that you can fit it into a morning errand run from Mount Pleasant.</p>

      <h2>3. Magnolia Plantation — Audubon Swamp Garden Boardwalk</h2>
      <p>The Audubon Swamp Garden boardwalk at <a href="/parks/magnolia-plantation">Magnolia Plantation</a> is the most scenic 45 minutes of walking in the Charleston area. The boardwalk crosses a working blackwater swamp, with cypress knees in the water and turtles on every log. Bring a camera. Note that there's a separate ticket for plantation grounds, but the swamp garden alone is worth the stop if you've never seen one.</p>

      <h2>4. Hampton Park Pond Loop</h2>
      <p>The pond loop at <a href="/parks/hampton-park">Hampton Park</a> is the easiest urban nature walk on the peninsula. About a half-mile, fully paved, and circled by mature live oaks. Spring is the standout season — the rose garden is right next to the pond, and the bird life is genuinely good (great blue herons fish there year-round). Twenty minutes start to finish, and you can grab coffee at Hampton Park Cafe on the way out.</p>

      <h2>5. Folly Beach County Park — Tideline Walk</h2>
      <p>If you'd rather walk on sand than wood, drive south to <a href="/parks/folly-beach-county-park">Folly Beach County Park</a> and walk the tideline at low tide. Half a mile out, half a mile back, and you'll see shorebirds, sand dollars when you get lucky, and an unobstructed Atlantic horizon. The west end of Folly is a designated bird sanctuary, so the wildlife volume is higher than you'd expect for a public beach.</p>

      <h2>Quick Tips for Short Walks</h2>
      <ul>
        <li>Stick to morning or late afternoon in summer. The Lowcountry sun is harder than visitors expect, even on a short walk.</li>
        <li>Most boardwalks have minimal signage — pick up a trail map at the park entrance if you want context on what you're seeing.</li>
        <li>Wear closed-toed shoes for boardwalks. Splinters and unexpected mud happen.</li>
        <li>The <a href="/maps">interactive park map</a> shows every park in this list with parking and access notes.</li>
      </ul>

      <p>An hour outside in Charleston is rarely wasted. If you've got more time after one of these, browse our full <a href="/parks">park directory</a> for longer hikes and weekend-length trips.</p>
    `,
  },
  {
    slug: "rainy-day-park-plans-charleston",
    title: "Rainy Day Park Plans for Charleston: Backup Outdoor Ideas",
    description:
      "Charleston rain doesn't have to cancel your outdoor day. Here are five parks and covered outdoor spots that are still worth visiting in the wet.",
    category: "Seasonal",
    author: "Lowcountry Parks Team",
    publishedAt: "2026-04-26",
    readTime: "6 min read",
    image: "/images/blog/rainy-day-parks.jpg",
    imageAlt: "Spanish moss draped over live oak branches with soft backlight on a misty day",
    content: `
      <p>If you've spent any spring or summer in Charleston, you know the rain is rarely a full-day event. Most of the time it's a short, dramatic afternoon storm followed by clear skies and steam coming up off the pavement. That means a rainy forecast doesn't have to wreck your outdoor plans — it just changes which park you go to. Here are five parks and outdoor spots that hold up well when the weather doesn't fully cooperate.</p>

      <h2>1. Magnolia Plantation — Better in the Rain, Honestly</h2>
      <p><a href="/parks/magnolia-plantation">Magnolia Plantation</a> is the rare Charleston outdoor spot that's arguably more atmospheric in light rain than in sunshine. The Audubon Swamp boardwalk is partially canopied, the cypress trees take on a deeper color when wet, and there's a real working garden you can wander even with a drizzle. The plantation house and a couple of tour options give you indoor backup if the rain picks up. It's also far enough out of downtown that you'll dodge the worst of the tourist crowds on weather days.</p>

      <h2>2. Charleston City Market — Covered, Walkable, and Outdoor-Adjacent</h2>
      <p>The <a href="/landmarks/charleston-city-market">Charleston City Market</a> isn't a park, but it scratches the same itch on a rainy day. The four-block-long market is fully covered, runs the length of Market Street, and you can spend an hour walking the stalls, talking to local makers, and watching the rain come down on the cobblestones. Pair it with a covered porch lunch on East Bay Street and you've turned a wet afternoon into an easy one.</p>

      <h2>3. Hampton Park — A Walk in Light Rain</h2>
      <p>The paved loop at <a href="/parks/hampton-park">Hampton Park</a> holds up beautifully in light rain. The live oak canopy covers most of the path, the rose garden looks dramatic with droplets on the petals, and you'll basically have the place to yourself. Bring a hooded layer, walk the loop, and stop at Hampton Park Cafe across the street to dry out with a coffee. It's a low-stakes 45 minutes that feels like a real outing.</p>

      <h2>4. Middleton Place — Long Sheltered Walks</h2>
      <p><a href="/parks/middleton-place">Middleton Place</a> has enough covered porches, garden paths under arbors, and partial shelter that you can structure a half-day visit even with rain on and off. The terraced gardens look entirely different in wet weather — moodier, more reflective, less crowded. The stable yards and on-site restaurant give you indoor pivots when you need them. If your trip is built around outdoor things and the day turns gray, this is the smart move.</p>

      <h2>5. James Island County Park — Pavilions and Covered Picnic Areas</h2>
      <p><a href="/parks/james-island-county-park">James Island County Park</a> has multiple covered pavilions and picnic shelters that can keep a family meal going through a passing storm. The walking trails get muddy quickly after rain, but the campground store, climbing wall (covered), and pavilion lawn give you enough variety to fill a few hours without getting soaked. It's also one of the few parks where you can pull a car right up to a sheltered area, which matters when you've got little kids and rain gear is a hassle.</p>

      <h2>How to Read the Charleston Forecast</h2>
      <ul>
        <li>A 60% chance of rain in Charleston usually means a quick afternoon storm, not a washout. Plan around the storm window.</li>
        <li>Tropical systems are a different story — if there's a named storm in the forecast, indoor backup is the right call.</li>
        <li>Live oak canopy parks like Hampton and Hampton-adjacent streets stay surprisingly dry under light rain. Open marsh parks do not.</li>
        <li>Rain gear in Charleston is more about a hat and water-resistant jacket than a full poncho — humidity makes anything heavier miserable.</li>
      </ul>

      <h2>One Charleston Truth</h2>
      <p>Locals know that the best photos of the city often happen right after a storm, when the light comes back in low and golden over wet streets. If you're flexible on timing, stay close to a park during the storm and head back out as soon as it clears. You'll have the place to yourself for an hour, and the air will feel ten degrees cooler.</p>

      <p>Don't let a forecast cancel your plans. Use the <a href="/maps">interactive park map</a> to find a park near where you're staying, or browse the full <a href="/parks">park directory</a> to plan a backup route.</p>
    `,
  },
];

/** Blog posts sorted newest-first by publishedAt date */
export const blogPosts: BlogPost[] = [..._blogPostsUnsorted].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
