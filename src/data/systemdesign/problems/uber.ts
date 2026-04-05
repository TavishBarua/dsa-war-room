import { SDProblem } from '../types';

export const UBER: SDProblem = {
  id: 'uber',
  name: 'Uber (Ride Sharing)',
  icon: '🚗',
  accent: '#a78bfa',
  difficulty: 'Hard',

  eli5: `Imagine you're at a huge playground and you need a buddy to push you on the swings. You yell "I need help at the swings!" and a magic walkie-talkie finds the closest free buddy, tells them where you are, and guides them to you with a live map. That's Uber — it matches people who need rides with nearby drivers, then tracks everyone in real time.`,

  interviewPitch: `I'd design Uber as a real-time ride matching platform built around three core subsystems: a geospatial indexing service using a QuadTree or GeoHash for finding nearby drivers in O(log n) time, a matching engine that pairs riders with optimal drivers based on distance, ETA, and driver ratings, and a real-time location tracking service that processes millions of GPS updates per second via a persistent WebSocket connection. The architecture uses an event-driven design with Kafka for decoupling services and Redis for fast location lookups.`,

  requirements: {
    functional: [
      'Riders can request a ride by specifying pickup and drop-off locations',
      'Match riders with the nearest available drivers in real time',
      'Track driver location in real time and display on a map',
      'Calculate ETA for driver arrival and trip duration',
      'Support surge pricing based on supply/demand ratio per area',
      'Process payments and generate trip receipts',
    ],
    nonFunctional: [
      'Match rider to driver within 10 seconds in 99% of cases',
      'Location updates processed within 1 second end-to-end',
      '99.99% availability for the matching service',
      'Support 20M rides per day, 5M concurrent active drivers',
      'GPS updates from drivers every 3-5 seconds (500K updates/sec at peak)',
    ],
    outOfScope: [
      'Food delivery (Uber Eats) and package courier services',
      'Driver onboarding, background checks, and vehicle inspection',
      'In-app messaging and calling between rider and driver',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'Location Service',
        description: 'Ingests real-time GPS coordinates from all active drivers. Stores current positions in a geospatial index for fast nearest-neighbor queries. Drivers send updates every 3-5 seconds.',
        techChoices: 'Redis with GeoHash (GEOADD/GEOSEARCH), or custom QuadTree in memory',
      },
      {
        name: 'Matching Engine',
        description: 'Receives ride requests, queries the Location Service for nearby available drivers, ranks them by ETA/rating/acceptance rate, and dispatches the best match. Handles retries if a driver declines.',
        techChoices: 'Go service with in-memory state, Kafka for event processing',
      },
      {
        name: 'Trip Service',
        description: 'Manages the lifecycle of a trip from request to completion. Tracks state transitions (requested → matched → en-route → in-progress → completed), stores trip history, and triggers payment.',
        techChoices: 'Java/Go microservice, PostgreSQL for trip records, state machine pattern',
      },
      {
        name: 'ETA Service',
        description: 'Calculates estimated arrival times using road network graphs, real-time traffic data, and historical patterns. Powers both the "driver arriving" ETA and the trip duration estimate.',
        techChoices: 'Custom routing engine (Dijkstra/A*) on road graph, ML models for traffic prediction',
      },
      {
        name: 'Surge Pricing Service',
        description: 'Monitors supply (available drivers) and demand (ride requests) per geographic cell. When demand exceeds supply, calculates a surge multiplier to incentivize more drivers into the area.',
        techChoices: 'Python/Go service, H3 hex grid for geographic cells, real-time aggregation',
      },
      {
        name: 'WebSocket Gateway',
        description: 'Maintains persistent connections with all active riders and drivers. Pushes real-time updates: driver location, trip status changes, ETA updates, and match notifications.',
        techChoices: 'Node.js/Go WebSocket servers, Redis Pub/Sub for cross-node messaging',
      },
    ],
    dataFlow: 'Drivers continuously send GPS updates via WebSocket to the Location Service, which updates the geospatial index. When a rider requests a ride, the Matching Engine queries nearby drivers, selects the best match, and notifies both parties. Throughout the trip, location updates are streamed to the rider\'s app via the WebSocket Gateway.',
    svgDiagram: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes flowRight { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
    @keyframes flowDown { from { stroke-dashoffset: 80; } to { stroke-dashoffset: 0; } }
    .ub-text { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; }
    .ub-node { fill: #1a1e2a; stroke: #2e3446; stroke-width: 2; rx: 12; }
    .ub-arrow { stroke: #a78bfa; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowRight 1.5s linear infinite; }
    .ub-arrow-down { stroke: #a78bfa; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowDown 1.5s linear infinite; }
    .ub-label { font-size: 12px; fill: #8b8fa3; }
  </style>
  <defs>
    <marker id="ub-arrow" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
      <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
    </marker>
  </defs>
  <!-- Rider -->
  <rect class="ub-node" x="20" y="80" width="100" height="55" />
  <text class="ub-text" x="70" y="112" text-anchor="middle">Rider App</text>
  <!-- Driver -->
  <rect class="ub-node" x="20" y="260" width="100" height="55" />
  <text class="ub-text" x="70" y="292" text-anchor="middle">Driver App</text>
  <!-- WebSocket Gateway -->
  <rect class="ub-node" x="190" y="160" width="130" height="55" />
  <text class="ub-text" x="255" y="185" text-anchor="middle">WebSocket</text>
  <text class="ub-text" x="255" y="200" text-anchor="middle">Gateway</text>
  <!-- Matching Engine -->
  <rect class="ub-node" x="390" y="80" width="140" height="55" />
  <text class="ub-text" x="460" y="112" text-anchor="middle">Matching Engine</text>
  <!-- Location Service -->
  <rect class="ub-node" x="390" y="260" width="140" height="55" />
  <text class="ub-text" x="460" y="285" text-anchor="middle">Location</text>
  <text class="ub-text" x="460" y="300" text-anchor="middle">Service</text>
  <!-- ETA Service -->
  <rect class="ub-node" x="610" y="80" width="130" height="55" />
  <text class="ub-text" x="675" y="112" text-anchor="middle">ETA Service</text>
  <!-- Surge Pricing -->
  <rect class="ub-node" x="610" y="260" width="130" height="55" />
  <text class="ub-text" x="675" y="285" text-anchor="middle">Surge</text>
  <text class="ub-text" x="675" y="300" text-anchor="middle">Pricing</text>
  <!-- Trip Service -->
  <rect class="ub-node" x="610" y="170" width="130" height="55" />
  <text class="ub-text" x="675" y="202" text-anchor="middle">Trip Service</text>
  <!-- Arrows -->
  <line class="ub-arrow" x1="120" y1="107" x2="190" y2="175" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow" x1="120" y1="287" x2="190" y2="200" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow" x1="320" y1="175" x2="390" y2="107" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow" x1="320" y1="200" x2="390" y2="280" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow" x1="530" y1="107" x2="610" y2="107" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow" x1="530" y1="287" x2="610" y2="287" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow-down" x1="460" y1="135" x2="460" y2="260" marker-end="url(#ub-arrow)" />
  <line class="ub-arrow" x1="530" y1="107" x2="610" y2="190" marker-end="url(#ub-arrow)" />
  <text class="ub-label" x="140" y="132">request</text>
  <text class="ub-label" x="140" y="252">GPS</text>
  <text class="ub-label" x="340" y="132">match</text>
  <text class="ub-label" x="340" y="248">update</text>
  <text class="ub-label" x="565" y="100">ETA</text>
  <text class="ub-label" x="558" y="280">supply/demand</text>
  <text class="ub-label" x="468" y="200">nearby?</text>
</svg>`,
  },

  deepDives: [
    {
      title: 'Geospatial Indexing for Nearby Drivers',
      explanation: `Finding nearby drivers efficiently is the core challenge. We use a GeoHash-based approach: the world is divided into a grid of cells at multiple resolutions. Each driver's GPS coordinate is hashed into a cell ID, and we store active driver IDs per cell in Redis (GEOADD). When a rider requests a ride, we compute their GeoHash, then search the same cell plus neighboring cells (to handle boundary effects) using GEOSEARCH with a radius. This gives us O(1) per cell lookup. An alternative is a QuadTree, which adaptively subdivides busy areas into finer cells — NYC might have cells of 100m while rural Kansas has cells of 10km. Redis GeoHash is simpler and works well up to ~5M active drivers; beyond that, a custom in-memory QuadTree with sharding by region is more efficient.`,
      svgDiagram: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
  <style>
    .ub2-text { font-family: 'Space Mono', monospace; font-size: 12px; fill: #e8eaf0; }
    .ub2-cell { fill: none; stroke: #2e3446; stroke-width: 1; }
    .ub2-active { fill: #a78bfa; fill-opacity: 0.15; stroke: #a78bfa; stroke-width: 2; }
    .ub2-driver { fill: #a78bfa; }
    .ub2-rider { fill: #ff4d6d; }
    .ub2-label { font-size: 10px; fill: #8b8fa3; }
    .ub2-title { font-size: 12px; fill: #a78bfa; font-weight: bold; }
  </style>
  <text class="ub2-title" x="200" y="25">GeoHash Grid — Nearby Search</text>
  <!-- Grid 6x6 -->
  <rect class="ub2-cell" x="100" y="40" width="60" height="60" />
  <rect class="ub2-cell" x="160" y="40" width="60" height="60" />
  <rect class="ub2-cell" x="220" y="40" width="60" height="60" />
  <rect class="ub2-cell" x="280" y="40" width="60" height="60" />
  <rect class="ub2-cell" x="100" y="100" width="60" height="60" />
  <rect class="ub2-active" x="160" y="100" width="60" height="60" />
  <rect class="ub2-active" x="220" y="100" width="60" height="60" />
  <rect class="ub2-active" x="280" y="100" width="60" height="60" />
  <rect class="ub2-cell" x="100" y="160" width="60" height="60" />
  <rect class="ub2-active" x="160" y="160" width="60" height="60" />
  <rect class="ub2-active" x="220" y="160" width="60" height="60" />
  <rect class="ub2-active" x="280" y="160" width="60" height="60" />
  <!-- Rider -->
  <circle class="ub2-rider" cx="230" cy="140" r="8" />
  <text class="ub-text" x="245" y="145" fill="#ff4d6d" font-size="10">Rider</text>
  <!-- Drivers -->
  <circle class="ub2-driver" cx="180" cy="120" r="5" />
  <circle class="ub2-driver" cx="260" cy="110" r="5" />
  <circle class="ub2-driver" cx="300" cy="180" r="5" />
  <circle class="ub2-driver" cx="190" cy="190" r="5" />
  <circle class="ub2-driver" cx="140" cy="80" r="5" />
  <!-- Legend -->
  <text class="ub-label" x="420" y="80">Purple cells = search area</text>
  <text class="ub-label" x="420" y="100">Purple dots = available drivers</text>
  <text class="ub-label" x="420" y="120">Red dot = rider location</text>
  <text class="ub-label" x="420" y="160">Search: rider's cell + 8 neighbors</text>
  <text class="ub-label" x="420" y="180">Then rank by ETA, not distance</text>
</svg>`,
    },
    {
      title: 'Driver-Rider Matching Algorithm',
      explanation: `The matching engine uses a multi-factor scoring system, not just nearest distance. When a ride request comes in, we query the Location Service for all available drivers within a radius (typically 3-5km). Each candidate is scored: ETA (weighted 50% — computed by the ETA Service using road network, not straight-line distance), driver rating (20%), acceptance rate (15%), and vehicle match (15%). The top driver gets the request and has 15 seconds to accept. If they decline, we offer to the next best driver. To handle high-demand periods efficiently, we can batch requests and use a bipartite matching algorithm (Hungarian method) to find the globally optimal assignment across multiple simultaneous requests — reducing total wait time for all riders rather than greedily optimizing each individually.`,
    },
    {
      title: 'Real-Time Location Tracking at Scale',
      explanation: `With 5M active drivers sending GPS updates every 3-5 seconds, we're processing ~1.5M location updates per second. Each update flows through a WebSocket connection to the gateway, which publishes to a Kafka topic partitioned by city/region. Location consumers update the GeoHash index in Redis and store a short trail (last 20 positions) for ETA smoothing. For the rider watching their driver approach, the gateway subscribes to that specific driver's updates via Redis Pub/Sub and pushes them to the rider's WebSocket. We use client-side interpolation between 3-second updates to make movement appear smooth on the map. The entire pipeline from driver GPS to rider screen takes <1 second p99.`,
    },
    {
      title: 'Surge Pricing Mechanics',
      explanation: `The city is divided into hexagonal cells using Uber's H3 geospatial index. Every 2 minutes, we compute the supply/demand ratio per cell: available drivers divided by ride requests in the last 5 minutes. When demand exceeds supply by >1.5x, a surge multiplier kicks in (e.g., 1.5x to 3x). The multiplier is shown to the rider before they confirm. Surge serves two purposes: it discourages marginal demand (some riders will wait) and incentivizes nearby drivers to move into the surge zone. The pricing is smoothed across neighboring cells to avoid sharp price cliffs. We cap surge at a maximum multiplier and disable it during emergencies. The entire system runs on real-time streaming aggregation — Kafka Streams or Flink processing request events and driver heartbeats.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'Rider Requests a Ride',
      description: 'The rider opens the app, enters a destination, and taps "Request Ride." The request includes pickup coordinates, destination, and ride type (UberX, XL, etc.) and is sent via WebSocket to the backend.',
      svgHighlight: `<rect x="18" y="78" width="104" height="59" fill="none" stroke="#a78bfa" stroke-width="3" rx="12" opacity="0.9" />
<text class="ub-text" x="70" y="155" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#a78bfa">1. Ride request</text>`,
    },
    {
      stepNumber: 2,
      title: 'Matching Engine Queries Nearby Drivers',
      description: 'The Matching Engine receives the request and queries the Location Service for all available drivers within a 3km radius of the pickup point using GeoHash-based search.',
      svgHighlight: `<line x1="460" y1="135" x2="460" y2="260" stroke="#a78bfa" stroke-width="4" fill="none" opacity="0.9" />
<text class="ub-text" x="505" y="200" font-family="Space Mono, monospace" font-size="10" fill="#a78bfa">2. Find nearby</text>`,
    },
    {
      stepNumber: 3,
      title: 'ETA Calculation & Driver Ranking',
      description: 'For each candidate driver, the ETA Service calculates real driving time using the road network and current traffic. Drivers are ranked by a weighted score of ETA, rating, and acceptance rate.',
      svgHighlight: `<rect x="608" y="78" width="134" height="59" fill="none" stroke="#a78bfa" stroke-width="3" rx="12" opacity="0.9" />
<text class="ub-text" x="675" y="155" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#a78bfa">3. Compute ETAs</text>`,
    },
    {
      stepNumber: 4,
      title: 'Driver Receives Match Notification',
      description: 'The top-ranked driver gets a push notification with ride details (pickup location, rider rating, estimated fare). They have 15 seconds to accept. If they decline, the next driver is offered.',
      svgHighlight: `<rect x="18" y="258" width="104" height="59" fill="none" stroke="#a78bfa" stroke-width="3" rx="12" opacity="0.9" />
<text class="ub-text" x="70" y="340" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#a78bfa">4. Match notification</text>`,
    },
    {
      stepNumber: 5,
      title: 'Trip Created — Live Tracking Begins',
      description: 'Once the driver accepts, the Trip Service creates a trip record and both rider and driver enter a live tracking session. Driver GPS updates stream through WebSocket to the rider\'s map in real time.',
      svgHighlight: `<rect x="608" y="168" width="134" height="59" fill="none" stroke="#a78bfa" stroke-width="3" rx="12" opacity="0.9" />
<text class="ub-text" x="675" y="248" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#a78bfa">5. Trip created</text>`,
    },
    {
      stepNumber: 6,
      title: 'Driver Arrives & Trip In Progress',
      description: 'The driver arrives at the pickup point (detected by GPS proximity). The rider confirms pickup, and the trip transitions to "in-progress." The app now shows navigation to the destination with live ETA updates.',
      svgHighlight: `<rect x="188" y="158" width="134" height="59" fill="none" stroke="#a78bfa" stroke-width="3" rx="12" opacity="0.9" />
<text class="ub-text" x="255" y="240" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#a78bfa">6. Live tracking via WS</text>`,
    },
    {
      stepNumber: 7,
      title: 'Trip Completed — Payment Processed',
      description: 'At the destination, the driver ends the trip. The Trip Service calculates the final fare (base + distance + time + surge), charges the rider\'s payment method, and credits the driver. Both can rate each other.',
      svgHighlight: `<rect x="608" y="168" width="134" height="59" fill="none" stroke="#00e676" stroke-width="3" rx="12" opacity="0.9" />
<text class="ub-text" x="675" y="248" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#00e676">7. Fare calculated + paid</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Processing 1.5M GPS updates/sec from drivers and keeping the geospatial index consistent across nodes.',
      solution: 'Shard the location index by city/region. Each shard handles a geographic area independently. Use Kafka partitioned by region to distribute updates. Redis GeoHash operations are O(log n) so a single shard handles millions of entries.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Matching latency spikes during rush hour when thousands of ride requests arrive simultaneously in the same area.',
      solution: 'Batch matching: instead of processing each request individually, batch requests every 2 seconds and run a global optimization (bipartite matching) that finds the best assignment across all pending requests. This reduces total wait time.',
      pattern: 'Handling Contention',
    },
    {
      problem: 'Real-time location updates must reach riders in <1 second, but WebSocket fanout is expensive at scale.',
      solution: 'Each rider subscribes to exactly one driver\'s updates (1:1 channel). Use Redis Pub/Sub keyed by driver ID. The WebSocket gateway only subscribes to channels for its connected riders. This minimizes message fanout dramatically.',
      pattern: 'Real-Time Updates',
    },
    {
      problem: 'Surge pricing calculations require aggregating supply/demand across millions of events in near-real-time.',
      solution: 'Use stream processing (Kafka Streams / Flink) with tumbling windows (2-minute) to aggregate request counts and driver availability per H3 cell. The surge multiplier is computed per cell and cached in Redis with a short TTL.',
      pattern: 'Scaling Reads',
    },
  ],

  keyNumbers: [
    { label: 'Daily rides', value: '20M' },
    { label: 'Active drivers (concurrent)', value: '5M' },
    { label: 'GPS updates per second', value: '~1.5M' },
    { label: 'Match latency (p99)', value: '<10 sec' },
    { label: 'Location update e2e latency', value: '<1 sec' },
  ],

  tags: ['geospatial', 'real-time', 'websocket', 'matching', 'surge-pricing', 'location-tracking', 'quadtree'],
};
