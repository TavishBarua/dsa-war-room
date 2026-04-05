import { SDProblem } from '../types';

export const DROPBOX: SDProblem = {
  id: 'dropbox',
  name: 'Dropbox (File Sync)',
  icon: '📁',
  accent: '#00cfff',
  difficulty: 'Easy',

  eli5: `Imagine you have a magic notebook — anything you write in it at home instantly appears in the same notebook at school. Dropbox is like that for your computer files. It chops files into tiny puzzle pieces, only sends the pieces that changed, and puts them back together on your other devices.`,

  interviewPitch: `I'd design a file synchronization service that splits files into fixed-size chunks for efficient delta sync and deduplication. A metadata service tracks file versions and chunk manifests, while actual blob storage uses a service like S3 with presigned URLs for direct client uploads. Change notifications flow through a WebSocket-based sync service to keep all devices up to date in near real-time.`,

  requirements: {
    functional: [
      'Upload, download, and sync files across multiple devices',
      'Support large files (multi-GB) via chunked upload/download',
      'Detect and sync only changed chunks (delta sync)',
      'Handle sync conflicts with versioning (last-write-wins or user resolution)',
      'Share files/folders with other users via link or permissions',
      'Show file revision history and allow rollback',
    ],
    nonFunctional: [
      'Sync latency < 5s for small file changes across devices',
      'Support files up to 50GB',
      'High durability — 99.999999999% (11 nines) for stored data',
      '99.9% availability for uploads and downloads',
      'Bandwidth-efficient — only transfer changed chunks',
    ],
    outOfScope: [
      'Real-time collaborative editing (Google Docs style)',
      'Full-text search of file contents',
      'Mobile-specific offline mode optimizations',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'Client Application',
        description: 'Desktop/mobile app that monitors the local file system for changes, chunks files, computes hashes, and syncs with the server.',
        techChoices: 'Native app with file-system watcher (inotify / FSEvents)',
      },
      {
        name: 'API Gateway',
        description: 'Routes and rate-limits all client requests. Terminates SSL and authenticates tokens.',
        techChoices: 'NGINX or AWS API Gateway',
      },
      {
        name: 'Metadata Service',
        description: 'Manages file/folder hierarchy, chunk manifests, versions, and sharing permissions. This is the brain of the system.',
        techChoices: 'Java/Go service backed by PostgreSQL with optimistic locking',
      },
      {
        name: 'Block Storage (S3)',
        description: 'Stores raw file chunks as immutable blobs. Clients upload/download directly via presigned URLs to avoid proxying through our servers.',
        techChoices: 'Amazon S3 with cross-region replication',
      },
      {
        name: 'Sync / Notification Service',
        description: 'Maintains long-lived connections to online clients and pushes change notifications in real time so devices pull updated chunks immediately.',
        techChoices: 'WebSocket servers with Redis Pub/Sub for fan-out',
      },
      {
        name: 'Message Queue',
        description: 'Decouples the upload pipeline from downstream processing — deduplication, thumbnail generation, indexing.',
        techChoices: 'Kafka or SQS',
      },
    ],
    dataFlow: 'Upload: Client chunks the file, hashes each chunk, asks Metadata Service which chunks are new, uploads new chunks directly to S3 via presigned URLs, then confirms to Metadata Service. Download: Client receives a change notification, fetches the new chunk manifest from Metadata Service, downloads only missing chunks from S3, and reconstructs the file locally.',
    svgDiagram: `<svg viewBox="0 0 800 370" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .db-node { fill: #1a1e2a; stroke: #2e3446; stroke-width: 1.5; rx: 8; }
        .db-node-accent { fill: #1a1e2a; stroke: #00cfff; stroke-width: 1.5; stroke-opacity: 0.8; rx: 8; }
        .db-label { font-family: 'Space Mono', monospace; font-size: 12px; fill: #e8eaf0; text-anchor: middle; }
        .db-sub { font-family: 'Space Mono', monospace; font-size: 10px; fill: #5a5f70; text-anchor: middle; }
        .db-arrow { stroke: #00cfff; stroke-width: 1.5; marker-end: url(#ahB); }
        @keyframes flowB { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .db-flow { stroke-dasharray: 10 10; animation: flowB 1s linear infinite; }
      </style>
      <defs>
        <marker id="ahB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#00cfff"/>
        </marker>
      </defs>

      <!-- Client -->
      <rect class="db-node" x="10" y="140" width="110" height="55"/>
      <text class="db-label" x="65" y="165">Client App</text>
      <text class="db-sub" x="65" y="180">file watcher</text>

      <!-- API Gateway -->
      <rect class="db-node-accent" x="170" y="140" width="100" height="55"/>
      <text class="db-label" x="220" y="165">API</text>
      <text class="db-label" x="220" y="180">Gateway</text>

      <!-- Metadata Service -->
      <rect class="db-node" x="320" y="60" width="140" height="55"/>
      <text class="db-label" x="390" y="85">Metadata Svc</text>
      <text class="db-sub" x="390" y="100">versions, chunks</text>

      <!-- Metadata DB -->
      <rect class="db-node" x="520" y="60" width="110" height="55"/>
      <text class="db-label" x="575" y="85">PostgreSQL</text>
      <text class="db-sub" x="575" y="100">metadata</text>

      <!-- S3 -->
      <rect class="db-node-accent" x="320" y="220" width="140" height="55"/>
      <text class="db-label" x="390" y="245" fill="#00cfff">S3 Blob Store</text>
      <text class="db-sub" x="390" y="260">chunks</text>

      <!-- Sync Service -->
      <rect class="db-node" x="320" y="140" width="140" height="55"/>
      <text class="db-label" x="390" y="165">Sync Service</text>
      <text class="db-sub" x="390" y="180">WebSocket push</text>

      <!-- Queue -->
      <rect class="db-node" x="520" y="220" width="110" height="55"/>
      <text class="db-label" x="575" y="245">Kafka</text>
      <text class="db-sub" x="575" y="260">async tasks</text>

      <!-- Redis PubSub -->
      <rect class="db-node" x="520" y="140" width="110" height="55"/>
      <text class="db-label" x="575" y="165">Redis</text>
      <text class="db-sub" x="575" y="180">pub/sub</text>

      <!-- Arrows -->
      <line class="db-arrow db-flow" x1="120" y1="167" x2="165" y2="167"/>
      <line class="db-arrow db-flow" x1="270" y1="150" x2="315" y2="90"/>
      <line class="db-arrow db-flow" x1="270" y1="167" x2="315" y2="167"/>
      <line class="db-arrow db-flow" x1="270" y1="185" x2="315" y2="240"/>
      <line class="db-arrow db-flow" x1="460" y1="87" x2="515" y2="87"/>
      <line class="db-arrow db-flow" x1="460" y1="167" x2="515" y2="167"/>
      <line class="db-arrow db-flow" x1="460" y1="247" x2="515" y2="247"/>

      <!-- Direct upload arrow from Client to S3 -->
      <path class="db-arrow db-flow" d="M65,195 Q65,310 315,255" fill="none"/>
      <text class="db-sub" x="140" y="300">presigned URL upload</text>
    </svg>`,
  },

  deepDives: [
    {
      title: 'File Chunking and Delta Sync',
      explanation: `Files are split into fixed-size chunks (typically 4MB). Each chunk is hashed (SHA-256) to produce a content-addressable ID. When a file changes, the client re-chunks it, computes new hashes, and compares against the stored chunk manifest. Only chunks with new hashes are uploaded. This means editing one paragraph in a 1GB file uploads only the 4MB chunk that changed. Content-defined chunking (like Rabin fingerprinting) can further improve dedup by keeping chunk boundaries stable when bytes are inserted.`,
    },
    {
      title: 'Deduplication',
      explanation: `Since chunks are addressed by their SHA-256 hash, identical chunks across all users are stored only once in S3. Before uploading, the client sends the chunk hash list to the Metadata Service, which responds with which hashes already exist. The client skips those uploads entirely. For a company with many employees sharing the same files, dedup can save 50-70% of storage. This is cross-user, global dedup — one of Dropbox's biggest cost optimizations.`,
    },
    {
      title: 'Sync Conflict Resolution',
      explanation: `When two devices edit the same file while offline, a conflict occurs. The Metadata Service detects this via version vectors — each device maintains a logical clock. If Device A's edit is not a descendant of Device B's, it's a conflict. The default strategy is to keep both versions: the later-arriving edit is saved as "filename (conflicted copy)". For folder-level conflicts (e.g., one device deletes a folder another device added a file to), the system preserves all data and lets the user reconcile.`,
    },
    {
      title: 'Presigned URLs for Direct Upload/Download',
      explanation: `Clients never upload file data through our API servers — that would make them a bottleneck. Instead, the Metadata Service issues short-lived presigned S3 URLs. The client uploads chunks directly to S3, then confirms completion to the Metadata Service. This offloads bandwidth to S3's globally distributed infrastructure. Presigned URLs expire in 15 minutes and are scoped to a specific chunk hash, so they can't be abused. The same pattern applies to downloads.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'File change detected on client',
      description: 'The client app detects a local file change via the OS file-system watcher (inotify/FSEvents). It chunks the modified file and computes SHA-256 hashes for each chunk.',
      svgHighlight: `<rect x="10" y="140" width="110" height="55" fill="none" stroke="#00cfff" stroke-width="2.5" rx="8"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></rect><text font-family="Space Mono" font-size="9" fill="#00cfff" x="15" y="135">file changed</text>`,
    },
    {
      stepNumber: 2,
      title: 'Client sends chunk hashes to Metadata Service',
      description: 'The client sends the new chunk manifest (list of hashes) to the Metadata Service via the API Gateway. The service responds with which chunks are new (not yet stored).',
      svgHighlight: `<line x1="120" y1="155" x2="315" y2="85" stroke="#00cfff" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00cfff" x="170" y="110">chunk manifest</text>`,
    },
    {
      stepNumber: 3,
      title: 'Upload new chunks directly to S3',
      description: 'For each new chunk, the client receives a presigned S3 URL and uploads the chunk directly — bypassing our servers. S3 handles bandwidth, durability, and replication.',
      svgHighlight: `<path d="M65,195 Q65,310 315,255" fill="none" stroke="#00cfff" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></path><text font-family="Space Mono" font-size="9" fill="#00cfff" x="100" y="280">presigned upload</text>`,
    },
    {
      stepNumber: 4,
      title: 'Confirm upload to Metadata Service',
      description: 'After all chunks are uploaded, the client confirms to the Metadata Service, which atomically updates the file version and chunk manifest in PostgreSQL.',
      svgHighlight: `<line x1="120" y1="160" x2="315" y2="90" stroke="#00cfff" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00cfff" x="175" y="140">confirm commit</text>`,
    },
    {
      stepNumber: 5,
      title: 'Notify other devices via Sync Service',
      description: 'The Metadata Service publishes a change event to Redis Pub/Sub. The Sync Service picks it up and pushes a WebSocket notification to all other connected devices for this user.',
      svgHighlight: `<line x1="460" y1="167" x2="515" y2="167" stroke="#00cfff" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00cfff" x="465" y="160">push notify</text>`,
    },
    {
      stepNumber: 6,
      title: 'Other device fetches updated manifest',
      description: 'The notified device fetches the new chunk manifest from the Metadata Service, identifies which chunks it is missing locally, and downloads only those chunks from S3.',
      svgHighlight: `<line x1="315" y1="167" x2="170" y2="167" stroke="#00cfff" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#00cfff" x="200" y="200">fetch manifest</text>`,
    },
    {
      stepNumber: 7,
      title: 'Reconstruct file on other device',
      description: 'The device downloads the missing chunks from S3 via presigned URLs, assembles them in order based on the manifest, and writes the updated file to disk.',
      svgHighlight: `<rect x="10" y="140" width="110" height="55" fill="none" stroke="#00cfff" stroke-width="2.5" rx="8"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></rect><text font-family="Space Mono" font-size="9" fill="#00cfff" x="15" y="210">file synced!</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Large file uploads saturate API server bandwidth',
      solution: 'Use presigned S3 URLs so clients upload directly to S3. API servers only handle lightweight metadata requests, never touch file bytes.',
      pattern: 'Large Blob Storage',
    },
    {
      problem: 'Syncing large files wastes bandwidth when only small parts change',
      solution: 'Chunk files into 4MB blocks and use content hashing. Only upload chunks whose SHA-256 hash changed. Delta sync reduces bandwidth by 90%+ for typical edits.',
      pattern: 'Large Blob Storage',
    },
    {
      problem: 'Notifying all user devices of changes in real time',
      solution: 'Maintain persistent WebSocket connections via the Sync Service. Use Redis Pub/Sub to fan out change events to all connected devices for a given user.',
      pattern: 'Real-Time Updates',
    },
    {
      problem: 'Concurrent edits from multiple devices cause data loss',
      solution: 'Use version vectors for conflict detection. When a true conflict is detected (divergent edits), save both versions and let the user resolve. Optimistic locking in PostgreSQL prevents metadata corruption.',
      pattern: 'Handling Contention',
    },
  ],

  keyNumbers: [
    { label: 'Registered users', value: '700M+' },
    { label: 'Files stored', value: '400B+' },
    { label: 'Chunk size', value: '4 MB' },
    { label: 'Peak uploads / sec', value: '~50K' },
    { label: 'Storage with dedup savings', value: '~50-70% saved' },
  ],

  tags: ['Large Blob Storage', 'Real-Time Updates', 'Handling Contention'],
};
