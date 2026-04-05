import { SDPattern } from './types';

export const SD_PATTERNS: SDPattern[] = [
  {
    name: 'Scaling Reads',
    icon: '📖',
    accent: '#00ff88',
    tagline: 'Read replicas, caching & denormalization for read-heavy workloads',
    description: 'Most systems are read-heavy (100:1 read-to-write). Scale reads by adding read replicas, caching hot data in Redis/Memcached, and denormalizing data to avoid expensive JOINs at query time.',
    whenToUse: [
      'Read-to-write ratio > 10:1',
      'Same data queried repeatedly',
      'Users tolerate slightly stale data',
      'Dashboard / feed / search pages',
    ],
    examples: ['URL Shortener', 'Instagram', 'Facebook News Feed', 'YouTube'],
    svgDiagram: `<svg viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #00ff88; stroke-width: 1.5; marker-end: url(#arrowG); }
        .glow { fill: none; stroke: #00ff88; stroke-width: 1; opacity: 0.3; }
        @keyframes flowR { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowR 1s linear infinite; }
      </style>
      <defs><marker id="arrowG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#00ff88"/></marker></defs>
      <rect class="node" x="10" y="80" width="100" height="50"/>
      <text class="node-label" x="60" y="110">Client</text>
      <rect class="node" x="160" y="80" width="100" height="50"/>
      <text class="node-label" x="210" y="110">Cache</text>
      <rect class="node" x="310" y="30" width="120" height="50"/>
      <text class="node-label" x="370" y="60">Read Replica 1</text>
      <rect class="node" x="310" y="90" width="120" height="50"/>
      <text class="node-label" x="370" y="120">Read Replica 2</text>
      <rect class="node" x="310" y="150" width="120" height="50"/>
      <text class="node-label" x="370" y="180">Read Replica N</text>
      <rect class="node" x="500" y="80" width="120" height="50"/>
      <text class="node-label" x="560" y="110">Primary DB</text>
      <line class="arrow flow" x1="110" y1="105" x2="155" y2="105"/>
      <line class="arrow flow" x1="260" y1="95" x2="305" y2="60"/>
      <line class="arrow flow" x1="260" y1="105" x2="305" y2="115"/>
      <line class="arrow flow" x1="260" y1="115" x2="305" y2="175"/>
      <line class="arrow" x1="500" y1="95" x2="435" y2="60" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <line class="arrow" x1="500" y1="105" x2="435" y2="115" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <line class="arrow" x1="500" y1="115" x2="435" y2="175" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <text font-family="Space Mono" font-size="8" fill="#5a5f70" x="460" y="70">replication</text>
    </svg>`,
  },
  {
    name: 'Scaling Writes',
    icon: '✏️',
    accent: '#ffd600',
    tagline: 'Sharding & partitioning to distribute write load across nodes',
    description: 'When a single database can\'t handle write throughput, shard the data across multiple nodes. Choose a good partition key that distributes evenly and avoids hot spots. Consistent hashing helps with rebalancing.',
    whenToUse: [
      'Write throughput exceeds single-node capacity',
      'Data volume exceeds single-node storage',
      'Need horizontal scalability',
      'High-throughput event ingestion',
    ],
    examples: ['WhatsApp', 'Uber', 'Ticketmaster', 'Rate Limiter'],
    svgDiagram: `<svg viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #ffd600; stroke-width: 1.5; marker-end: url(#arrowY); }
        @keyframes flowY { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowY 1s linear infinite; }
      </style>
      <defs><marker id="arrowY" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#ffd600"/></marker></defs>
      <rect class="node" x="10" y="80" width="100" height="50"/>
      <text class="node-label" x="60" y="110">Writes</text>
      <rect class="node" x="170" y="80" width="120" height="50" stroke="#ffd600" stroke-opacity="0.5"/>
      <text class="node-label" x="230" y="105" fill="#ffd600">Hash Function</text>
      <text class="node-label" x="230" y="120" font-size="8" fill="#5a5f70">partition key</text>
      <rect class="node" x="370" y="10" width="110" height="45"/>
      <text class="node-label" x="425" y="37">Shard A</text>
      <rect class="node" x="370" y="70" width="110" height="45"/>
      <text class="node-label" x="425" y="97">Shard B</text>
      <rect class="node" x="370" y="130" width="110" height="45"/>
      <text class="node-label" x="425" y="157">Shard C</text>
      <rect class="node" x="370" y="190" width="110" height="45"/>
      <text class="node-label" x="425" y="217">Shard N</text>
      <line class="arrow flow" x1="110" y1="105" x2="165" y2="105"/>
      <line class="arrow flow" x1="290" y1="95" x2="365" y2="35"/>
      <line class="arrow flow" x1="290" y1="100" x2="365" y2="93"/>
      <line class="arrow flow" x1="290" y1="110" x2="365" y2="153"/>
      <line class="arrow flow" x1="290" y1="115" x2="365" y2="213"/>
    </svg>`,
  },
  {
    name: 'Real-Time Updates',
    icon: '⚡',
    accent: '#00cfff',
    tagline: 'WebSockets, SSE & pub/sub for live data streaming',
    description: 'When clients need instant updates (chat, live feeds, notifications), use WebSockets for bidirectional communication or SSE for server-push. Back these with pub/sub systems like Redis Pub/Sub or Kafka for fan-out.',
    whenToUse: [
      'Chat / messaging features',
      'Live feeds or dashboards',
      'Collaborative editing',
      'Real-time notifications',
    ],
    examples: ['WhatsApp', 'Google Docs', 'Facebook News Feed', 'Uber'],
    svgDiagram: `<svg viewBox="0 0 700 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #00cfff; stroke-width: 1.5; marker-end: url(#arrowB); }
        @keyframes flowB { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowB 1s linear infinite; }
        @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        .pulse { animation: pulse 2s ease infinite; }
      </style>
      <defs><marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#00cfff"/></marker></defs>
      <rect class="node" x="10" y="70" width="100" height="50"/>
      <text class="node-label" x="60" y="100">Client A</text>
      <rect class="node" x="180" y="70" width="120" height="50" stroke="#00cfff" stroke-opacity="0.5"/>
      <text class="node-label" x="240" y="95" fill="#00cfff">WebSocket</text>
      <text class="node-label" x="240" y="110" font-size="8" fill="#5a5f70">Server</text>
      <rect class="node" x="370" y="70" width="110" height="50" stroke="#00cfff" stroke-opacity="0.5"/>
      <text class="node-label" x="425" y="95" fill="#00cfff">Pub/Sub</text>
      <text class="node-label" x="425" y="110" font-size="8" fill="#5a5f70">Redis / Kafka</text>
      <rect class="node" x="550" y="30" width="100" height="40"/>
      <text class="node-label" x="600" y="55">Client B</text>
      <rect class="node" x="550" y="85" width="100" height="40"/>
      <text class="node-label" x="600" y="110">Client C</text>
      <rect class="node" x="550" y="140" width="100" height="40"/>
      <text class="node-label" x="600" y="165">Client N</text>
      <line class="arrow flow" x1="110" y1="95" x2="175" y2="95"/>
      <line class="arrow flow" x1="300" y1="95" x2="365" y2="95"/>
      <line class="arrow flow" x1="480" y1="85" x2="545" y2="50"/>
      <line class="arrow flow" x1="480" y1="95" x2="545" y2="105"/>
      <line class="arrow flow" x1="480" y1="105" x2="545" y2="160"/>
      <circle cx="425" cy="95" r="20" class="pulse" stroke="#00cfff" fill="none"/>
    </svg>`,
  },
  {
    name: 'Long-Running Tasks',
    icon: '⏳',
    accent: '#a78bfa',
    tagline: 'Async job queues & workers for heavy background processing',
    description: 'For operations that take seconds to minutes (video transcoding, file processing, report generation), use async job queues. Return a job ID immediately, process in background workers, and let clients poll or get webhooks for completion.',
    whenToUse: [
      'Video/image processing',
      'File uploads & conversions',
      'Report generation',
      'Any request taking > 1 second',
    ],
    examples: ['YouTube', 'Dropbox', 'Instagram'],
    svgDiagram: `<svg viewBox="0 0 700 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #a78bfa; stroke-width: 1.5; marker-end: url(#arrowP); }
        @keyframes flowP { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowP 1s linear infinite; }
      </style>
      <defs><marker id="arrowP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#a78bfa"/></marker></defs>
      <rect class="node" x="10" y="70" width="100" height="50"/>
      <text class="node-label" x="60" y="100">Client</text>
      <rect class="node" x="160" y="70" width="100" height="50"/>
      <text class="node-label" x="210" y="100">API</text>
      <rect class="node" x="320" y="70" width="120" height="50" stroke="#a78bfa" stroke-opacity="0.5"/>
      <text class="node-label" x="380" y="95" fill="#a78bfa">Job Queue</text>
      <text class="node-label" x="380" y="110" font-size="8" fill="#5a5f70">SQS / RabbitMQ</text>
      <rect class="node" x="500" y="40" width="100" height="40"/>
      <text class="node-label" x="550" y="65">Worker 1</text>
      <rect class="node" x="500" y="100" width="100" height="40"/>
      <text class="node-label" x="550" y="125">Worker 2</text>
      <rect class="node" x="500" y="160" width="100" height="40"/>
      <text class="node-label" x="550" y="185">Worker N</text>
      <line class="arrow flow" x1="110" y1="95" x2="155" y2="95"/>
      <line class="arrow" x1="210" y1="70" x2="60" y2="70" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <text font-family="Space Mono" font-size="8" fill="#5a5f70" x="115" y="64">job_id</text>
      <line class="arrow flow" x1="260" y1="95" x2="315" y2="95"/>
      <line class="arrow flow" x1="440" y1="85" x2="495" y2="62"/>
      <line class="arrow flow" x1="440" y1="95" x2="495" y2="120"/>
      <line class="arrow flow" x1="440" y1="105" x2="495" y2="180"/>
    </svg>`,
  },
  {
    name: 'Handling Contention',
    icon: '🔒',
    accent: '#ff4d6d',
    tagline: 'Locks, transactions & optimistic concurrency for shared resources',
    description: 'When multiple users compete for the same resource (last ticket, same bank balance, auction bid), you need concurrency control. Use distributed locks (Redis/ZooKeeper), optimistic locking with version numbers, or database transactions.',
    whenToUse: [
      'Limited inventory (tickets, seats)',
      'Financial transactions',
      'Auction / bidding systems',
      'Any shared mutable state',
    ],
    examples: ['Ticketmaster', 'Uber', 'Rate Limiter'],
    svgDiagram: `<svg viewBox="0 0 700 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #ff4d6d; stroke-width: 1.5; marker-end: url(#arrowR); }
        @keyframes flowR2 { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowR2 1s linear infinite; }
        @keyframes lockPulse { 0%,100% { fill-opacity: 0.1; } 50% { fill-opacity: 0.3; } }
        .lock-glow { fill: #ff4d6d; animation: lockPulse 2s ease infinite; }
      </style>
      <defs><marker id="arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#ff4d6d"/></marker></defs>
      <rect class="node" x="10" y="30" width="100" height="40"/>
      <text class="node-label" x="60" y="55">User A</text>
      <rect class="node" x="10" y="130" width="100" height="40"/>
      <text class="node-label" x="60" y="155">User B</text>
      <rect class="node" x="200" y="70" width="100" height="50"/>
      <text class="node-label" x="250" y="100">Service</text>
      <rect x="370" y="60" width="120" height="70" rx="6" class="lock-glow"/>
      <rect class="node" x="370" y="60" width="120" height="70" stroke="#ff4d6d" stroke-opacity="0.5"/>
      <text class="node-label" x="430" y="90" fill="#ff4d6d">Lock</text>
      <text class="node-label" x="430" y="105" font-size="8" fill="#5a5f70">Redis / ZooKeeper</text>
      <text class="node-label" x="430" y="120" font-size="8" fill="#ff4d6d">🔒</text>
      <rect class="node" x="560" y="70" width="110" height="50"/>
      <text class="node-label" x="615" y="100">Database</text>
      <line class="arrow flow" x1="110" y1="50" x2="195" y2="85"/>
      <line class="arrow flow" x1="110" y1="150" x2="195" y2="110"/>
      <line class="arrow flow" x1="300" y1="95" x2="365" y2="95"/>
      <line class="arrow flow" x1="490" y1="95" x2="555" y2="95"/>
    </svg>`,
  },
  {
    name: 'Large Blob Storage',
    icon: '📦',
    accent: '#fb923c',
    tagline: 'Presigned URLs, S3 & CDN for large file handling',
    description: 'Never proxy large files through your API servers. Instead, generate presigned URLs that let clients upload directly to object storage (S3). Serve files via CDN for low-latency global access. Store only metadata in your database.',
    whenToUse: [
      'Image / video uploads',
      'File storage & sharing',
      'Any file > 1MB',
      'Global content distribution',
    ],
    examples: ['Dropbox', 'Instagram', 'YouTube'],
    svgDiagram: `<svg viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #fb923c; stroke-width: 1.5; marker-end: url(#arrowO); }
        @keyframes flowO { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowO 1s linear infinite; }
      </style>
      <defs><marker id="arrowO" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#fb923c"/></marker></defs>
      <rect class="node" x="10" y="80" width="100" height="50"/>
      <text class="node-label" x="60" y="110">Client</text>
      <rect class="node" x="200" y="80" width="100" height="50"/>
      <text class="node-label" x="250" y="105">API</text>
      <text class="node-label" x="250" y="118" font-size="8" fill="#5a5f70">presign URL</text>
      <rect class="node" x="400" y="30" width="130" height="50" stroke="#fb923c" stroke-opacity="0.5"/>
      <text class="node-label" x="465" y="55" fill="#fb923c">Object Storage</text>
      <text class="node-label" x="465" y="70" font-size="8" fill="#5a5f70">S3 / GCS</text>
      <rect class="node" x="400" y="140" width="130" height="50" stroke="#fb923c" stroke-opacity="0.5"/>
      <text class="node-label" x="465" y="165" fill="#fb923c">CDN</text>
      <text class="node-label" x="465" y="180" font-size="8" fill="#5a5f70">CloudFront</text>
      <rect class="node" x="600" y="80" width="80" height="50"/>
      <text class="node-label" x="640" y="110">Viewer</text>
      <line class="arrow" x1="60" y1="80" x2="200" y2="95" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <text font-family="Space Mono" font-size="8" fill="#5a5f70" x="120" y="78">1. request URL</text>
      <line class="arrow" x1="200" y1="105" x2="110" y2="105" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <text font-family="Space Mono" font-size="8" fill="#5a5f70" x="125" y="100">2. signed URL</text>
      <line class="arrow flow" x1="110" y1="90" x2="395" y2="55"/>
      <text font-family="Space Mono" font-size="8" fill="#fb923c" x="220" y="58">3. direct upload</text>
      <line class="arrow" x1="465" y1="80" x2="465" y2="140" stroke-dasharray="4 4" stroke="#5a5f70"/>
      <line class="arrow flow" x1="530" y1="165" x2="595" y2="115"/>
      <text font-family="Space Mono" font-size="8" fill="#fb923c" x="545" y="145">4. serve via CDN</text>
    </svg>`,
  },
  {
    name: 'Multi-Step Processes',
    icon: '🔄',
    accent: '#e879f9',
    tagline: 'Sagas, event sourcing & workflow engines for distributed transactions',
    description: 'When a business operation spans multiple services (payment + inventory + notification), you can\'t use a single DB transaction. Use the Saga pattern: break into steps, each with a compensating action for rollback. Or use event sourcing to replay.',
    whenToUse: [
      'Cross-service transactions',
      'Payment + order + inventory flows',
      'Multi-step onboarding / signup',
      'Anything needing distributed rollback',
    ],
    examples: ['Uber', 'Ticketmaster', 'Google Docs'],
    svgDiagram: `<svg viewBox="0 0 700 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 6; }
        .node-label { font-family: 'Space Mono', monospace; font-size: 10px; fill: #e8eaf0; text-anchor: middle; }
        .arrow { stroke: #e879f9; stroke-width: 1.5; marker-end: url(#arrowPi); }
        @keyframes flowPi { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowPi 1s linear infinite; }
        .comp { stroke: #ff4d6d; stroke-dasharray: 4 4; stroke-width: 1; }
      </style>
      <defs><marker id="arrowPi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#e879f9"/></marker></defs>
      <rect class="node" x="10" y="50" width="110" height="50" stroke="#e879f9" stroke-opacity="0.5"/>
      <text class="node-label" x="65" y="75" fill="#e879f9">Orchestrator</text>
      <text class="node-label" x="65" y="90" font-size="8" fill="#5a5f70">Saga</text>
      <rect class="node" x="180" y="30" width="110" height="40"/>
      <text class="node-label" x="235" y="55">Step 1</text>
      <text class="node-label" x="235" y="80" font-size="8" fill="#ff4d6d" y="80">↩ compensate</text>
      <rect class="node" x="340" y="30" width="110" height="40"/>
      <text class="node-label" x="395" y="55">Step 2</text>
      <text class="node-label" x="395" y="80" font-size="8" fill="#ff4d6d">↩ compensate</text>
      <rect class="node" x="500" y="30" width="110" height="40"/>
      <text class="node-label" x="555" y="55">Step 3</text>
      <text class="node-label" x="555" y="80" font-size="8" fill="#ff4d6d">↩ compensate</text>
      <rect class="node" x="500" y="120" width="110" height="40" stroke="#00ff88" stroke-opacity="0.5"/>
      <text class="node-label" x="555" y="145" fill="#00ff88">Done ✓</text>
      <line class="arrow flow" x1="120" y1="65" x2="175" y2="50"/>
      <line class="arrow flow" x1="290" y1="50" x2="335" y2="50"/>
      <line class="arrow flow" x1="450" y1="50" x2="495" y2="50"/>
      <line class="arrow flow" x1="555" y1="70" x2="555" y2="115"/>
    </svg>`,
  },
];
