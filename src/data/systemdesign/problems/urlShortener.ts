import { SDProblem } from '../types';

export const URL_SHORTENER: SDProblem = {
  id: 'url-shortener',
  name: 'URL Shortener (Bit.ly)',
  icon: '🔗',
  accent: '#00ff88',
  difficulty: 'Easy',

  eli5: `Imagine you have a super long address to your friend's house. A URL shortener is like giving that address a short nickname — like "Go to Bob's." When someone uses the nickname, we look it up in our big notebook and send them to the real address.`,

  interviewPitch: `I'd design a URL shortening service that maps long URLs to short, unique keys using Base62 encoding. The system is heavily read-optimized — roughly 100:1 read-to-write — so I'd layer aggressive caching with Redis in front of a horizontally partitioned datastore. I'd also address analytics tracking, expiration policies, and 301 vs 302 redirect trade-offs.`,

  requirements: {
    functional: [
      'Given a long URL, generate a unique short URL',
      'Redirect short URL to original long URL with low latency',
      'Allow users to set custom aliases',
      'URLs should expire after a configurable TTL',
      'Track click analytics (count, referrer, geo)',
      'Prevent duplicate short URLs for the same long URL',
    ],
    nonFunctional: [
      'Read latency < 10ms (p99) for redirects',
      'High availability — 99.99% uptime',
      'Scale to 100M new URLs per month, 10B redirects per month',
      'Short URLs should be unpredictable (no sequential IDs)',
      'Eventually consistent analytics is acceptable',
    ],
    outOfScope: [
      'User accounts and authentication',
      'Spam / malicious URL detection',
      'UI / frontend design',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'API Gateway / Load Balancer',
        description: 'Distributes incoming requests across API servers. Handles rate limiting and SSL termination.',
        techChoices: 'NGINX or AWS ALB with round-robin routing',
      },
      {
        name: 'URL Shortening Service',
        description: 'Accepts long URLs, generates short keys via Base62 encoding of a unique ID, and stores the mapping.',
        techChoices: 'Stateless Node.js or Go microservice',
      },
      {
        name: 'Redirect Service',
        description: 'Receives short URL requests, resolves them to long URLs, and issues HTTP redirects. Checks cache first.',
        techChoices: 'Stateless Go service optimized for throughput',
      },
      {
        name: 'Cache Layer',
        description: 'Stores hot short-to-long URL mappings in memory. Dramatically reduces DB reads for popular links.',
        techChoices: 'Redis Cluster with LRU eviction, ~20GB',
      },
      {
        name: 'Database',
        description: 'Persistent storage for URL mappings, metadata, and expiration info. Sharded by short key hash.',
        techChoices: 'DynamoDB or Cassandra (key-value optimized, auto-sharding)',
      },
      {
        name: 'Analytics Service',
        description: 'Consumes click events asynchronously and aggregates them for dashboards.',
        techChoices: 'Kafka + Apache Flink for stream processing, ClickHouse for storage',
      },
    ],
    dataFlow: 'Write path: Client sends long URL to API, which generates a Base62 key and writes to DB. Read path: Client hits short URL, Redirect Service checks Redis cache first, falls back to DB, then issues a 301/302 redirect and publishes a click event to Kafka.',
    svgDiagram: `<svg viewBox="0 0 800 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .us-node { fill: #1a1e2a; stroke: #2e3446; stroke-width: 1.5; rx: 8; }
        .us-node-accent { fill: #1a1e2a; stroke: #00ff88; stroke-width: 1.5; stroke-opacity: 0.8; rx: 8; }
        .us-label { font-family: 'Space Mono', monospace; font-size: 12px; fill: #e8eaf0; text-anchor: middle; }
        .us-sub { font-family: 'Space Mono', monospace; font-size: 10px; fill: #5a5f70; text-anchor: middle; }
        .us-arrow { stroke: #00ff88; stroke-width: 1.5; marker-end: url(#ahG); }
        @keyframes flowG { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .us-flow { stroke-dasharray: 10 10; animation: flowG 1s linear infinite; }
      </style>
      <defs>
        <marker id="ahG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#00ff88"/>
        </marker>
      </defs>

      <!-- Client -->
      <rect class="us-node" x="10" y="140" width="100" height="50"/>
      <text class="us-label" x="60" y="170">Client</text>

      <!-- LB -->
      <rect class="us-node-accent" x="160" y="140" width="100" height="50"/>
      <text class="us-label" x="210" y="165">Load</text>
      <text class="us-label" x="210" y="180">Balancer</text>

      <!-- API / Redirect -->
      <rect class="us-node" x="310" y="80" width="130" height="50"/>
      <text class="us-label" x="375" y="105">Shorten API</text>
      <text class="us-sub" x="375" y="120">write path</text>

      <rect class="us-node" x="310" y="200" width="130" height="50"/>
      <text class="us-label" x="375" y="225">Redirect Svc</text>
      <text class="us-sub" x="375" y="240">read path</text>

      <!-- Cache -->
      <rect class="us-node-accent" x="500" y="200" width="100" height="50"/>
      <text class="us-label" x="550" y="225" fill="#00ff88">Redis</text>
      <text class="us-sub" x="550" y="240">cache</text>

      <!-- DB -->
      <rect class="us-node" x="660" y="140" width="120" height="50"/>
      <text class="us-label" x="720" y="165">DynamoDB</text>
      <text class="us-sub" x="720" y="180">sharded</text>

      <!-- Analytics -->
      <rect class="us-node" x="500" y="60" width="100" height="50"/>
      <text class="us-label" x="550" y="85">Kafka</text>
      <text class="us-sub" x="550" y="100">click events</text>

      <rect class="us-node" x="660" y="60" width="120" height="50"/>
      <text class="us-label" x="720" y="85">Analytics</text>
      <text class="us-sub" x="720" y="100">ClickHouse</text>

      <!-- Arrows -->
      <line class="us-arrow us-flow" x1="110" y1="165" x2="155" y2="165"/>
      <line class="us-arrow us-flow" x1="260" y1="155" x2="305" y2="110"/>
      <line class="us-arrow us-flow" x1="260" y1="175" x2="305" y2="225"/>
      <line class="us-arrow us-flow" x1="440" y1="105" x2="655" y2="160"/>
      <line class="us-arrow us-flow" x1="440" y1="225" x2="495" y2="225"/>
      <line class="us-arrow us-flow" x1="600" y1="225" x2="655" y2="175"/>
      <line class="us-arrow us-flow" x1="440" y1="215" x2="495" y2="90"/>
      <line class="us-arrow us-flow" x1="600" y1="85" x2="655" y2="85"/>
    </svg>`,
  },

  deepDives: [
    {
      title: 'URL Key Generation: Base62 vs MD5',
      explanation: `There are two main strategies. First, Base62 encoding: use a distributed ID generator (like Twitter Snowflake) to mint a unique 64-bit integer, then encode it in Base62 (a-z, A-Z, 0-9) to get a 7-character string. This guarantees uniqueness with no collisions. Second, MD5 hashing: hash the long URL with MD5 and take the first 7 characters of the Base62-encoded hash. This is simpler but can collide — you need a collision check + retry loop. Base62 encoding is preferred for high throughput because it avoids the DB round-trip for collision checking. A counter-based approach with multiple ranges assigned to different servers also works well.`,
    },
    {
      title: '301 vs 302 Redirects',
      explanation: `A 301 (Moved Permanently) tells the browser to cache the redirect — subsequent clicks skip our servers entirely. This is great for performance but terrible for analytics since we never see repeat visits. A 302 (Found / Temporary) forces the browser to hit our servers every time, letting us count every click. Most URL shorteners use 302 by default for analytics, but offer 301 as an option for users who want pure speed. The choice directly impacts your read throughput requirements.`,
    },
    {
      title: 'Caching Strategy for Read-Heavy Workload',
      explanation: `With a 100:1 read-to-write ratio, caching is the single biggest lever. Use Redis with an LRU eviction policy. The top 20% of URLs typically account for 80% of traffic (Zipf distribution), so even a moderate cache size yields high hit rates. Use a cache-aside pattern: on redirect, check Redis first; on miss, read from DB and populate the cache. Set TTLs on cache entries matching the URL expiration. For extremely hot URLs, consider a local in-process cache (Guava / Caffeine) in front of Redis to avoid network hops entirely.`,
    },
    {
      title: 'Database Sharding by Short Key',
      explanation: `Shard the URL mapping table by the hash of the short key. This distributes reads and writes evenly because the short keys are already pseudo-random (Base62-encoded integers). Use consistent hashing so adding a new shard only moves a fraction of keys. Each shard is a Cassandra or DynamoDB partition. For lookups, the short key deterministically maps to a shard — no scatter-gather needed. Keep a separate secondary index (or a different table) if you need to look up by long URL to prevent duplicates.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'Client submits long URL',
      description: 'User sends a POST request with the long URL to the API Gateway. The gateway rate-limits and forwards to the Shorten API.',
      svgHighlight: `<line x1="110" y1="165" x2="155" y2="165" stroke="#00ff88" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00ff88" x="110" y="135">POST /shorten</text>`,
    },
    {
      stepNumber: 2,
      title: 'Generate short key',
      description: 'The Shorten API fetches a unique ID from a distributed ID generator (Snowflake) and encodes it in Base62 to produce a 7-character key like "aB3x9Kz".',
      svgHighlight: `<rect x="310" y="80" width="130" height="50" fill="none" stroke="#00ff88" stroke-width="2" rx="8"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></rect><text font-family="Space Mono" font-size="9" fill="#00ff88" x="315" y="72">Base62(snowflakeID)</text>`,
    },
    {
      stepNumber: 3,
      title: 'Persist mapping to DB',
      description: 'The short-to-long URL mapping is written to DynamoDB, sharded by the hash of the short key. The write is acknowledged back to the client.',
      svgHighlight: `<line x1="440" y1="105" x2="655" y2="160" stroke="#00ff88" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00ff88" x="500" y="125">WRITE mapping</text>`,
    },
    {
      stepNumber: 4,
      title: 'Client requests short URL redirect',
      description: 'A different user clicks the short URL. The request hits the Load Balancer and routes to the Redirect Service.',
      svgHighlight: `<line x1="260" y1="175" x2="305" y2="225" stroke="#00ff88" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00ff88" x="230" y="210">GET /aB3x9Kz</text>`,
    },
    {
      stepNumber: 5,
      title: 'Check Redis cache',
      description: 'Redirect Service checks Redis for the short key. On a cache hit (~80% of requests), it immediately has the long URL. On a miss, it queries DynamoDB.',
      svgHighlight: `<line x1="440" y1="225" x2="495" y2="225" stroke="#00ff88" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00ff88" x="445" y="260">cache lookup</text>`,
    },
    {
      stepNumber: 6,
      title: 'Issue 302 redirect',
      description: 'The Redirect Service responds with HTTP 302 pointing to the original long URL. The browser follows the redirect automatically.',
      svgHighlight: `<line x1="305" y1="225" x2="115" y2="175" stroke="#00ff88" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00ff88" x="150" y="210">302 Redirect</text>`,
    },
    {
      stepNumber: 7,
      title: 'Publish click event for analytics',
      description: 'Asynchronously, the Redirect Service publishes a click event (timestamp, referrer, geo) to Kafka. The Analytics service consumes and aggregates it into ClickHouse.',
      svgHighlight: `<line x1="440" y1="215" x2="495" y2="90" stroke="#00ff88" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00ff88" x="420" y="150">click event</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Read throughput bottleneck on the database with 10B redirects/month',
      solution: 'Layer a Redis cache in front of the DB. With Zipf-distributed traffic, a 20GB cache achieves ~80% hit rate, reducing DB reads by 5x.',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'Single-node DB cannot handle 100M writes/month as traffic grows',
      solution: 'Shard the URL mapping table by hash of the short key using consistent hashing. Each shard handles a fraction of the write load.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Analytics event processing must not block the redirect hot path',
      solution: 'Publish click events to Kafka asynchronously. A separate Flink pipeline consumes, aggregates, and writes to ClickHouse. Redirect latency stays under 10ms.',
      pattern: 'Long-Running Tasks',
    },
    {
      problem: 'ID generation contention — multiple servers minting IDs simultaneously',
      solution: 'Use Twitter Snowflake-style ID generation where each server has a unique machine ID and generates IDs independently without coordination.',
      pattern: 'Handling Contention',
    },
  ],

  keyNumbers: [
    { label: 'New URLs / month', value: '100M' },
    { label: 'Redirects / month', value: '10B' },
    { label: 'Read:Write ratio', value: '100:1' },
    { label: 'Storage per URL mapping', value: '~500 bytes' },
    { label: 'Total storage (5 years)', value: '~3 TB' },
  ],

  tags: ['Scaling Reads', 'Scaling Writes', 'Handling Contention'],
};
