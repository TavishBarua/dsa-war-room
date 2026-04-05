import { SDProblem } from '../types';

export const RATE_LIMITER: SDProblem = {
  id: 'rate-limiter',
  name: 'Rate Limiter',
  icon: '🚦',
  accent: '#ff4d6d',
  difficulty: 'Medium',

  eli5: `Imagine a water park with a slide that only lets 3 kids go down per minute. If you show up and 3 kids already went, you have to wait. A rate limiter is exactly that — it counts how many requests someone makes and says "slow down!" if they're going too fast.`,

  interviewPitch: `I'd design a distributed rate limiter that sits at the API gateway layer, using a Redis-backed sliding window algorithm to enforce per-client request quotas. The system supports multiple rate limiting strategies — token bucket for bursty traffic and sliding window counters for strict enforcement — with configurable rules per endpoint and graceful degradation when the central counter store is unavailable.`,

  requirements: {
    functional: [
      'Limit the number of requests a client can make within a time window',
      'Support multiple rate limiting algorithms (token bucket, sliding window, fixed window)',
      'Allow configurable rules per API endpoint and per client tier',
      'Return appropriate HTTP 429 responses with Retry-After headers',
      'Support both hard limits and soft/throttled limits',
    ],
    nonFunctional: [
      'Sub-millisecond latency overhead per request (<5ms p99)',
      '99.99% availability — if the limiter goes down, fail open (allow traffic)',
      'Handle 1M+ requests per second across distributed nodes',
      'Accurate counting in a distributed environment (minimal over-counting)',
    ],
    outOfScope: [
      'DDoS mitigation at the network layer (L3/L4)',
      'Bot detection and CAPTCHA challenges',
      'Billing or usage metering beyond rate enforcement',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'API Gateway',
        description: 'Entry point for all client requests. Intercepts requests before they reach backend services and checks rate limits.',
        techChoices: 'NGINX / Kong / AWS API Gateway',
      },
      {
        name: 'Rate Limiter Service',
        description: 'Core logic that evaluates rate limit rules and makes allow/deny decisions. Runs as a sidecar or embedded library.',
        techChoices: 'Go / Rust microservice or embedded library',
      },
      {
        name: 'Rules Engine',
        description: 'Stores and manages rate limit configurations — per endpoint, per client tier, and per user. Admins update rules via a dashboard.',
        techChoices: 'PostgreSQL for rule storage, in-memory cache for hot rules',
      },
      {
        name: 'Counter Store (Redis)',
        description: 'Centralized fast counter store that tracks request counts per client per window. Uses Redis for atomic increments and TTL-based expiry.',
        techChoices: 'Redis Cluster with Lua scripting for atomic operations',
      },
      {
        name: 'Notification / Alerting',
        description: 'Monitors rate limit events, alerts on anomalies (e.g., sudden spike in 429s), and feeds analytics dashboards.',
        techChoices: 'Kafka for event streaming, Grafana for dashboards',
      },
    ],
    dataFlow: 'Client request hits the API Gateway, which consults the Rate Limiter Service. The service fetches the applicable rule, checks the counter in Redis (increment + check atomically via Lua script), and returns allow/deny. If denied, a 429 response is returned with Retry-After header.',
    svgDiagram: `<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes flowRight { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
    @keyframes flowDown { from { stroke-dashoffset: 80; } to { stroke-dashoffset: 0; } }
    text { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; }
    .node { fill: #111318; stroke: #1e2230; stroke-width: 2; rx: 12; }
    .arrow { stroke: #ff4d6d; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowRight 1.5s linear infinite; }
    .arrow-down { stroke: #ff4d6d; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowDown 1.5s linear infinite; }
    .label { font-size: 10px; fill: #8b8fa3; }
  </style>
  <defs>
    <marker id="rl-arrow" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
      <polygon points="0 0, 10 3.5, 0 7" fill="#ff4d6d" />
    </marker>
  </defs>
  <!-- Client -->
  <rect class="node" x="20" y="140" width="110" height="60" />
  <text x="75" y="175" text-anchor="middle">Client</text>
  <!-- API Gateway -->
  <rect class="node" x="200" y="140" width="130" height="60" />
  <text x="265" y="175" text-anchor="middle">API Gateway</text>
  <!-- Rate Limiter -->
  <rect class="node" x="400" y="50" width="140" height="60" />
  <text x="470" y="85" text-anchor="middle">Rate Limiter</text>
  <!-- Redis -->
  <rect class="node" x="620" y="50" width="120" height="60" />
  <text x="680" y="85" text-anchor="middle">Redis</text>
  <text class="label" x="680" y="100" text-anchor="middle">(Counters)</text>
  <!-- Rules Engine -->
  <rect class="node" x="400" y="240" width="140" height="60" />
  <text x="470" y="275" text-anchor="middle">Rules Engine</text>
  <!-- Backend -->
  <rect class="node" x="620" y="240" width="120" height="60" />
  <text x="680" y="275" text-anchor="middle">Backend API</text>
  <!-- Arrows -->
  <line class="arrow" x1="130" y1="170" x2="200" y2="170" marker-end="url(#rl-arrow)" />
  <line class="arrow" x1="265" y1="140" x2="400" y2="80" marker-end="url(#rl-arrow)" />
  <line class="arrow" x1="540" y1="80" x2="620" y2="80" marker-end="url(#rl-arrow)" />
  <line class="arrow-down" x1="470" y1="110" x2="470" y2="240" marker-end="url(#rl-arrow)" />
  <line class="arrow" x1="330" y1="170" x2="620" y2="270" marker-end="url(#rl-arrow)" />
  <text class="label" x="155" y="162">req</text>
  <text class="label" x="310" y="105">check</text>
  <text class="label" x="570" y="72">get/incr</text>
  <text class="label" x="478" y="180">rules</text>
  <text class="label" x="460" y="225">allowed</text>
</svg>`,
  },

  deepDives: [
    {
      title: 'Token Bucket vs Sliding Window Algorithms',
      explanation: `The token bucket algorithm adds tokens at a fixed rate (e.g., 10 tokens/sec) and each request consumes one token. If the bucket is empty, the request is rejected. This naturally allows short bursts up to the bucket capacity while enforcing a long-term average rate. The sliding window counter algorithm divides time into sub-windows and weights the counts: currentWindow count + previousWindow count * overlap percentage. This gives a smoother limit than fixed windows without the memory cost of a full sliding log. In practice, the sliding window counter is the best default — it's accurate, memory-efficient (just 2 counters per client), and avoids the burst-at-boundary problem of fixed windows.`,
      svgDiagram: `<svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
  <style>
    text { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; }
    .bucket { fill: #111318; stroke: #ff4d6d; stroke-width: 2; rx: 8; }
    .token { fill: #ff4d6d; opacity: 0.7; }
    .window { fill: #111318; stroke: #1e2230; stroke-width: 2; }
    .label { font-size: 10px; fill: #8b8fa3; }
    .title { font-size: 12px; fill: #ff4d6d; font-weight: bold; }
  </style>
  <text class="title" x="120" y="25">Token Bucket</text>
  <rect class="bucket" x="80" y="40" width="120" height="160" />
  <circle class="token" cx="120" cy="170" r="12" />
  <circle class="token" cx="155" cy="170" r="12" />
  <circle class="token" cx="120" cy="140" r="12" />
  <circle class="token" cx="155" cy="140" r="12" />
  <circle class="token" cx="120" cy="110" r="12" />
  <text class="label" x="140" y="220" text-anchor="middle">5 tokens left</text>
  <text class="label" x="140" y="235" text-anchor="middle">refill: 10/sec</text>
  <text class="title" x="520" y="25">Sliding Window</text>
  <rect class="window" x="400" y="40" width="150" height="120" />
  <text class="label" x="475" y="70" text-anchor="middle">Prev Window</text>
  <text x="475" y="95" text-anchor="middle">42 reqs</text>
  <text class="label" x="475" y="120" text-anchor="middle">x 30% overlap</text>
  <rect class="window" x="570" y="40" width="150" height="120" />
  <text class="label" x="645" y="70" text-anchor="middle">Curr Window</text>
  <text x="645" y="95" text-anchor="middle">18 reqs</text>
  <text class="label" x="560" y="190" text-anchor="middle">Total: 42*0.3 + 18 = 30.6</text>
  <text class="label" x="560" y="210" text-anchor="middle">Limit: 50 → ALLOW</text>
</svg>`,
    },
    {
      title: 'Distributed Rate Limiting with Redis',
      explanation: `In a multi-node deployment, each API gateway instance must share counters. Redis is the go-to choice because it supports atomic increment-and-check via Lua scripts (EVAL), has sub-millisecond latency, and handles millions of operations per second. A typical Lua script does: INCR the key, set EXPIRE on first increment, and return the new count — all atomically. For sliding windows, we use two keys (current and previous window) and compute the weighted sum. Redis Cluster provides horizontal scaling by sharding keys across nodes. To handle Redis failures gracefully, we implement a local in-memory fallback with slightly relaxed limits (fail-open) — it's better to allow a few extra requests than to block all traffic.`,
    },
    {
      title: 'Client Identification Strategies',
      explanation: `Choosing the right client identifier is critical. For authenticated APIs, the user ID or API key is the obvious choice. For unauthenticated traffic, we combine IP address + User-Agent fingerprinting, though this breaks behind shared NATs. In practice, a tiered approach works best: rate limit by IP at the edge (coarse), by API key at the gateway (medium), and by user ID at the service level (fine). Each tier has different limits — e.g., 1000 req/min per IP, 100 req/min per API key, 30 req/min per user for write endpoints. The client identifier is hashed and used as the Redis key prefix for counter lookups.`,
    },
    {
      title: 'API Gateway Integration Pattern',
      explanation: `The rate limiter should run as middleware in the API gateway, not as a separate network hop. This keeps latency overhead minimal (<1ms). The flow is: extract client ID from request, hash it to determine Redis shard, run the Lua script to check/increment, and either forward the request or return 429. Response headers should include X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, and Retry-After. The rules engine publishes configuration changes via pub/sub, and each gateway node caches rules locally with a short TTL (30s). This avoids a rules DB lookup on every single request.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'Client Sends Request',
      description: 'A client makes an API call (e.g., POST /api/messages). The request hits the API Gateway, which is the single entry point for all traffic.',
      svgHighlight: `<rect x="18" y="138" width="114" height="64" fill="none" stroke="#ff4d6d" stroke-width="3" rx="12" opacity="0.9" />
<text x="75" y="225" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff4d6d">1. Request arrives</text>`,
    },
    {
      stepNumber: 2,
      title: 'Gateway Extracts Client ID',
      description: 'The API Gateway middleware extracts the client identifier — API key from the header, or IP address for unauthenticated requests. This ID is used to look up the applicable rate limit rule.',
      svgHighlight: `<rect x="198" y="138" width="134" height="64" fill="none" stroke="#ff4d6d" stroke-width="3" rx="12" opacity="0.9" />
<text x="265" y="225" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff4d6d">2. Extract client ID</text>`,
    },
    {
      stepNumber: 3,
      title: 'Check Rate Limit in Redis',
      description: 'The Rate Limiter Service sends an atomic Lua script to Redis: increment the counter for this client+window, set TTL if new, and return the current count. This happens in a single round trip.',
      svgHighlight: `<line x1="540" y1="80" x2="620" y2="80" stroke="#ff4d6d" stroke-width="4" fill="none" opacity="0.9" />
<rect x="618" y="48" width="124" height="64" fill="none" stroke="#ff4d6d" stroke-width="3" rx="12" opacity="0.9" />
<text x="680" y="135" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff4d6d">3. INCR + check</text>`,
    },
    {
      stepNumber: 4,
      title: 'Evaluate Against Rules',
      description: 'The counter value is compared against the cached rule for this endpoint+tier. Rules are loaded from the Rules Engine and cached locally with a 30-second TTL to avoid DB lookups on every request.',
      svgHighlight: `<rect x="398" y="238" width="144" height="64" fill="none" stroke="#ff4d6d" stroke-width="3" rx="12" opacity="0.9" />
<text x="470" y="325" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff4d6d">4. Check rule limit</text>`,
    },
    {
      stepNumber: 5,
      title: 'Allow — Forward to Backend',
      description: 'If the count is within the limit, the request is forwarded to the backend service. Rate limit headers (X-RateLimit-Remaining, etc.) are added to the response.',
      svgHighlight: `<line x1="330" y1="170" x2="620" y2="270" stroke="#00e676" stroke-width="4" fill="none" opacity="0.9" />
<rect x="618" y="238" width="124" height="64" fill="none" stroke="#00e676" stroke-width="3" rx="12" opacity="0.9" />
<text x="680" y="325" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#00e676">5. ALLOWED → forward</text>`,
    },
    {
      stepNumber: 6,
      title: 'Deny — Return 429',
      description: 'If the count exceeds the limit, the gateway immediately returns HTTP 429 Too Many Requests with a Retry-After header indicating when the client can retry. The backend is never hit.',
      svgHighlight: `<line x1="200" y1="170" x2="130" y2="170" stroke="#ff4d6d" stroke-width="4" fill="none" opacity="0.9" />
<text x="165" y="132" text-anchor="middle" font-family="Space Mono, monospace" font-size="11" fill="#ff4d6d" font-weight="bold">429</text>
<text x="165" y="250" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff4d6d">6. DENIED → 429</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Redis becomes a single point of failure — if it goes down, all rate limiting breaks.',
      solution: 'Use Redis Cluster for sharding, Redis Sentinel for failover, and implement local in-memory counters as a fallback (fail-open). Each gateway node keeps a local token bucket that kicks in when Redis is unreachable.',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'Race conditions in distributed counters — two gateway nodes might both read count=99 (limit=100) and both allow, resulting in 101 requests.',
      solution: 'Use atomic Redis Lua scripts that increment-and-check in a single operation. The INCR command in Redis is already atomic, so wrapping the logic in a Lua script ensures no race conditions.',
      pattern: 'Handling Contention',
    },
    {
      problem: 'Hot keys — a single popular API key generates millions of counter updates per second, overwhelming a single Redis shard.',
      solution: 'Use local per-node counters that periodically sync to Redis (e.g., every 100ms). Accept slight over-counting in exchange for eliminating the hot key problem. For extreme cases, shard the counter across multiple Redis keys and sum them.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Rule configuration changes need to propagate instantly to all gateway nodes to prevent inconsistent enforcement.',
      solution: 'Use Redis Pub/Sub or a message bus to broadcast rule changes. Each gateway subscribes and updates its local cache immediately. A short TTL on cached rules (30s) acts as a safety net for missed messages.',
      pattern: 'Real-Time Updates',
    },
  ],

  keyNumbers: [
    { label: 'Requests per second', value: '1M+' },
    { label: 'Latency overhead', value: '<5ms p99' },
    { label: 'Redis ops/sec per node', value: '100K+' },
    { label: 'Rule cache TTL', value: '30 seconds' },
    { label: 'Counter key size', value: '~100 bytes' },
  ],

  tags: ['rate-limiting', 'redis', 'api-gateway', 'distributed-systems', 'token-bucket', 'sliding-window'],
};
