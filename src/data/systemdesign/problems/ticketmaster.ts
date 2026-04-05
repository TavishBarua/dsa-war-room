import { SDProblem } from '../types';

export const TICKETMASTER: SDProblem = {
  id: 'ticketmaster',
  name: 'Ticketmaster (Event Booking)',
  icon: '🎫',
  accent: '#ffd600',
  difficulty: 'Medium',

  eli5: `Imagine 50,000 kids all rush to grab the last cookie on a plate at the exact same time. Ticketmaster is like having a really organized teacher who gives each kid a number, lets them hold a cookie for 10 minutes while they decide, and makes sure no two kids get the same cookie.`,

  interviewPitch: `I'd design an event ticket booking system that handles extreme flash-sale traffic with a virtual waiting queue for fairness. Seat selection uses distributed locks with short TTLs to implement temporary holds, preventing double-booking without long-held pessimistic locks. The system separates the read-heavy browsing path (cached seat maps) from the write-heavy booking path (serialized through a reservation service), and uses idempotency keys to safely handle retries.`,

  requirements: {
    functional: [
      'Browse events and view available seats on a venue map',
      'Temporarily hold/reserve selected seats (10-minute TTL)',
      'Complete purchase within the hold window to confirm booking',
      'Prevent double-booking — each seat sold to exactly one buyer',
      'Support a virtual waiting queue during flash sales for fairness',
      'Generate and deliver e-tickets after successful purchase',
    ],
    nonFunctional: [
      'Handle 10M+ concurrent users during major event on-sales',
      'Seat availability latency < 200ms for browsing',
      'Booking confirmation latency < 2s end-to-end',
      '99.99% correctness — zero double-bookings',
      'Graceful degradation under extreme load (queue, not crash)',
    ],
    outOfScope: [
      'Venue/event management and creation',
      'Payment processing internals (treat as external service)',
      'Secondary market / resale',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'CDN + Static Assets',
        description: 'Serves the event pages, venue maps, and seat layouts. Takes the majority of read traffic off the backend.',
        techChoices: 'CloudFront CDN with edge caching',
      },
      {
        name: 'Virtual Waiting Queue',
        description: 'During flash sales, absorbs the traffic spike. Users are assigned a position and gradually admitted to the booking flow.',
        techChoices: 'SQS FIFO queue or custom Redis-based queue with rate limiting',
      },
      {
        name: 'Seat Availability Service',
        description: 'Serves the current seat map with availability status. Reads from a denormalized cache updated by the reservation service.',
        techChoices: 'Go service + Redis bitmap for seat availability',
      },
      {
        name: 'Reservation Service',
        description: 'Core booking logic: places temporary holds on seats using distributed locks, validates, and confirms bookings.',
        techChoices: 'Java service with Redis distributed locks (Redlock) + PostgreSQL',
      },
      {
        name: 'Payment Service',
        description: 'Handles payment processing with the external payment gateway. Uses idempotency keys for safe retries.',
        techChoices: 'Stripe API integration with webhook confirmation',
      },
      {
        name: 'Database',
        description: 'Source of truth for bookings, seat ownership, and event metadata. Uses row-level locking for final booking confirmation.',
        techChoices: 'PostgreSQL with row-level locks, partitioned by event_id',
      },
      {
        name: 'Notification Service',
        description: 'Sends booking confirmations and e-tickets via email/SMS after successful purchase.',
        techChoices: 'Kafka consumer + SendGrid / Twilio',
      },
    ],
    dataFlow: 'Browsing: Client fetches seat maps from CDN and availability from Redis. Booking: User enters the virtual queue, gets admitted, selects seats, Reservation Service acquires distributed locks (10-min TTL hold), user completes payment, Reservation Service confirms and writes to PostgreSQL, e-ticket sent via Notification Service.',
    svgDiagram: `<svg viewBox="0 0 820 370" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 8; }
        .node-accent { fill: #111318; stroke: #ffd600; stroke-width: 1.5; stroke-opacity: 0.5; rx: 8; }
        .label { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; text-anchor: middle; }
        .sub { font-family: 'Space Mono', monospace; font-size: 8px; fill: #5a5f70; text-anchor: middle; }
        .arrow { stroke: #ffd600; stroke-width: 1.5; marker-end: url(#ahY); }
        @keyframes flowY { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowY 1s linear infinite; }
      </style>
      <defs>
        <marker id="ahY" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#ffd600"/>
        </marker>
      </defs>

      <!-- Users -->
      <rect class="node" x="10" y="145" width="90" height="50"/>
      <text class="label" x="55" y="170">Users</text>
      <text class="sub" x="55" y="185">10M+</text>

      <!-- Queue -->
      <rect class="node-accent" x="140" y="145" width="110" height="50"/>
      <text class="label" x="195" y="167" fill="#ffd600">Wait Queue</text>
      <text class="sub" x="195" y="182">fairness</text>

      <!-- Seat Availability -->
      <rect class="node" x="300" y="60" width="130" height="50"/>
      <text class="label" x="365" y="83">Seat Avail.</text>
      <text class="sub" x="365" y="98">Redis bitmap</text>

      <!-- Reservation Service -->
      <rect class="node-accent" x="300" y="145" width="130" height="50"/>
      <text class="label" x="365" y="168">Reservation</text>
      <text class="sub" x="365" y="183">dist. locks</text>

      <!-- Payment -->
      <rect class="node" x="300" y="240" width="130" height="50"/>
      <text class="label" x="365" y="263">Payment Svc</text>
      <text class="sub" x="365" y="278">Stripe</text>

      <!-- Redis Locks -->
      <rect class="node" x="490" y="100" width="110" height="50"/>
      <text class="label" x="545" y="123">Redis</text>
      <text class="sub" x="545" y="138">locks + seats</text>

      <!-- PostgreSQL -->
      <rect class="node" x="490" y="190" width="110" height="50"/>
      <text class="label" x="545" y="213">PostgreSQL</text>
      <text class="sub" x="545" y="228">bookings</text>

      <!-- Notification -->
      <rect class="node" x="660" y="145" width="120" height="50"/>
      <text class="label" x="720" y="168">Notify Svc</text>
      <text class="sub" x="720" y="183">email/SMS</text>

      <!-- CDN -->
      <rect class="node" x="140" y="60" width="110" height="50"/>
      <text class="label" x="195" y="83">CDN</text>
      <text class="sub" x="195" y="98">seat maps</text>

      <!-- Arrows -->
      <line class="arrow flow" x1="100" y1="160" x2="135" y2="160"/>
      <line class="arrow flow" x1="100" y1="155" x2="135" y2="90"/>
      <line class="arrow flow" x1="250" y1="170" x2="295" y2="170"/>
      <line class="arrow flow" x1="250" y1="85" x2="295" y2="85"/>
      <line class="arrow flow" x1="430" y1="170" x2="485" y2="130"/>
      <line class="arrow flow" x1="430" y1="175" x2="485" y2="210"/>
      <line class="arrow flow" x1="365" y1="195" x2="365" y2="235"/>
      <line class="arrow flow" x1="600" y1="210" x2="655" y2="175"/>
    </svg>`,
  },

  deepDives: [
    {
      title: 'Temporary Holds with Distributed Locks',
      explanation: `When a user selects a seat, the Reservation Service acquires a distributed lock in Redis (using Redlock algorithm) with a 10-minute TTL. This "hold" prevents other users from selecting the same seat. If the user completes payment within 10 minutes, the lock is released and a permanent booking is written to PostgreSQL. If the timer expires, Redis auto-expires the key, releasing the seat back to the pool. This avoids the need for a cleanup job and ensures seats don't stay locked due to abandoned sessions. The TTL acts as a natural circuit breaker.`,
    },
    {
      title: 'Virtual Waiting Queue for Flash Sales',
      explanation: `When a popular event goes on sale, millions of users hit the page simultaneously. Instead of letting them all flood the booking system, a virtual queue absorbs the spike. Users get a queue position and a "your turn" token when admitted. The system admits users at a controlled rate (e.g., 1,000/sec) that the Reservation Service can handle. This converts an uncontrolled traffic spike into a smooth, predictable load. The queue is implemented with Redis sorted sets (score = arrival timestamp) and clients poll for their turn.`,
    },
    {
      title: 'Preventing Double-Booking',
      explanation: `Double-booking prevention works at two layers. First, Redis distributed locks ensure only one user holds a given seat at a time during the selection phase. Second, when confirming the booking in PostgreSQL, a UNIQUE constraint on (event_id, seat_id) provides a final safety net — if two transactions somehow both try to book the same seat, only one commits. The Reservation Service also uses idempotency keys on the payment call so that retries (from network failures) don't result in double charges. Every write is designed to be safely retryable.`,
    },
    {
      title: 'Seat Availability at Scale',
      explanation: `For a 50,000-seat venue, we represent seat availability as a Redis bitmap — one bit per seat. Checking availability is O(1), and bitwise operations let us quickly count available seats per section. This denormalized view is updated by the Reservation Service whenever a hold is placed or released. Browsers poll this every few seconds for a near-real-time seat map. For the browsing use case (not booking), eventual consistency with a 2-3 second lag is perfectly acceptable and keeps load off PostgreSQL.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'User arrives at event page',
      description: 'The user loads the event page. Static assets (venue map, seat layout) are served from the CDN. Seat availability is fetched from the Seat Availability Service (Redis bitmap).',
      svgHighlight: `<line x1="100" y1="155" x2="135" y2="90" stroke="#ffd600" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#ffd600" x="80" y="110">browse seats</text>`,
    },
    {
      stepNumber: 2,
      title: 'User enters virtual waiting queue',
      description: 'When the user clicks "Buy Tickets," they enter the virtual waiting queue. They receive a position number and an estimated wait time. The queue admits users at a controlled rate.',
      svgHighlight: `<rect x="140" y="145" width="110" height="50" fill="none" stroke="#ffd600" stroke-width="2.5" rx="8"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></rect><text font-family="Space Mono" font-size="9" fill="#ffd600" x="145" y="140">position #4,291</text>`,
    },
    {
      stepNumber: 3,
      title: 'User admitted to select seats',
      description: 'When it is the user\'s turn, they receive an admission token and can select seats from the live availability map. The token is valid for a limited time.',
      svgHighlight: `<line x1="250" y1="170" x2="295" y2="170" stroke="#ffd600" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#ffd600" x="250" y="160">admitted</text>`,
    },
    {
      stepNumber: 4,
      title: 'Reservation Service places hold',
      description: 'The user selects seats and the Reservation Service acquires distributed locks in Redis with a 10-minute TTL. The seats are now "held" and removed from the availability map.',
      svgHighlight: `<line x1="430" y1="170" x2="485" y2="130" stroke="#ffd600" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#ffd600" x="435" y="120">LOCK seat TTL=10m</text>`,
    },
    {
      stepNumber: 5,
      title: 'User completes payment',
      description: 'The user submits payment info. The Reservation Service calls the Payment Service with an idempotency key. Stripe processes the charge and returns a confirmation.',
      svgHighlight: `<line x1="365" y1="195" x2="365" y2="235" stroke="#ffd600" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#ffd600" x="380" y="220">charge $85</text>`,
    },
    {
      stepNumber: 6,
      title: 'Booking confirmed in database',
      description: 'After payment succeeds, the Reservation Service writes the booking to PostgreSQL (with UNIQUE constraint on event+seat). The Redis lock is released. This is the point of no return.',
      svgHighlight: `<line x1="430" y1="175" x2="485" y2="210" stroke="#ffd600" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#ffd600" x="440" y="200">INSERT booking</text>`,
    },
    {
      stepNumber: 7,
      title: 'E-ticket delivered',
      description: 'The Notification Service sends a booking confirmation email with the e-ticket (QR code). The user sees a confirmation page with their seat details.',
      svgHighlight: `<line x1="600" y1="210" x2="655" y2="175" stroke="#ffd600" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#ffd600" x="610" y="165">send e-ticket</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: '10M users hitting the booking page simultaneously during flash sales',
      solution: 'Use a virtual waiting queue to absorb the spike and admit users at a controlled rate (e.g., 1K/sec). This converts a traffic spike into a smooth, manageable flow the Reservation Service can handle.',
      pattern: 'Handling Contention',
    },
    {
      problem: 'Double-booking seats when concurrent users select the same seat',
      solution: 'Distributed locks in Redis for temporary holds + UNIQUE constraint in PostgreSQL for final booking. Two-layer defense ensures zero double-bookings even under race conditions.',
      pattern: 'Handling Contention',
    },
    {
      problem: 'Seat availability queries overload the booking database',
      solution: 'Denormalize seat availability into a Redis bitmap (1 bit per seat). Browsing reads hit Redis, not PostgreSQL. Updates flow from the Reservation Service asynchronously.',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'Abandoned sessions leave seats locked and unavailable',
      solution: 'Use Redis key TTLs (10 minutes) for holds. If the user doesn\'t complete payment, the lock auto-expires and the seat returns to the available pool. No cleanup cron job needed.',
      pattern: 'Handling Contention',
    },
  ],

  keyNumbers: [
    { label: 'Concurrent users (flash sale)', value: '10M+' },
    { label: 'Seats per large venue', value: '50K-100K' },
    { label: 'Hold TTL', value: '10 min' },
    { label: 'Booking confirmation latency', value: '< 2s' },
    { label: 'Queue admission rate', value: '~1K/sec' },
  ],

  tags: ['Handling Contention', 'Scaling Reads', 'Multi-Step Processes'],
};
