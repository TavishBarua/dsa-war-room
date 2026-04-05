import { SDProblem } from '../types';

export const GOOGLE_DOCS: SDProblem = {
  id: 'google-docs',
  name: 'Google Docs (Collaborative Editing)',
  icon: '📝',
  accent: '#4285F4',
  difficulty: 'Hard',

  eli5: `Imagine you and your friend are both drawing on the same whiteboard at the same time, but you're in different rooms. Every time one of you draws something, a magical camera takes a picture and instantly shows it on the other person's whiteboard. If you both draw in the same spot, the magic camera figures out how to combine both drawings so nothing gets lost!`,

  interviewPitch: `I'd design a real-time collaborative document editor using Operational Transformation (OT) for conflict resolution. Clients maintain a local copy and send operations (insert/delete) to a central Document Service via WebSockets. The server transforms concurrent operations to maintain consistency across all clients. I'd use a persistent WebSocket layer backed by Redis Pub/Sub for real-time sync, store document state and operation history in a database for durability, and implement cursor presence tracking so users can see each other's positions.`,

  requirements: {
    functional: [
      'Multiple users can edit the same document simultaneously in real time',
      'Changes appear on all connected clients within 200ms',
      'Conflict resolution when two users edit the same region simultaneously',
      'Cursor presence — see where other users are typing',
      'Version history — view and restore previous document versions',
      'Support rich text formatting (bold, italic, headings, lists)',
    ],
    nonFunctional: [
      'Real-time sync latency < 200ms between collaborators',
      'Support up to 100 concurrent editors per document',
      'Scale to 100M documents, 10M daily active users',
      'High durability — zero data loss, every keystroke persisted',
      '99.99% availability',
    ],
    outOfScope: [
      'Offline editing and sync',
      'Spreadsheet or presentation features',
      'Comments and suggestion mode',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'WebSocket Gateway',
        description: 'Maintains persistent WebSocket connections with all clients editing a document. Receives operations from clients and broadcasts transformed operations to other editors.',
        techChoices: 'Node.js / Go — optimized for concurrent WebSocket connections',
      },
      {
        name: 'Document Service (OT Engine)',
        description: 'The core collaboration engine. Receives operations, transforms them against concurrent operations using OT, applies them to the server document state, and broadcasts the transformed ops.',
        techChoices: 'Custom OT engine in Go/Java — stateful, one instance per active document',
      },
      {
        name: 'Document Store',
        description: 'Persists the current document state and operation history. Supports snapshotting to avoid replaying the full operation log on document load.',
        techChoices: 'PostgreSQL for metadata + S3 for document snapshots',
      },
      {
        name: 'Operation Log',
        description: 'Append-only log of all operations applied to each document. Enables version history, undo, and recovery. Periodically compacted into snapshots.',
        techChoices: 'Cassandra — partitioned by document_id, clustered by operation sequence number',
      },
      {
        name: 'Presence Service',
        description: 'Tracks which users are viewing/editing each document, their cursor positions, and selection ranges. Broadcasts presence updates to all connected clients.',
        techChoices: 'Redis Pub/Sub — ephemeral data with TTL',
      },
      {
        name: 'Session Router',
        description: 'Routes WebSocket connections to the correct Document Service instance that holds the active OT state for a given document. Uses consistent hashing by document_id.',
        techChoices: 'Redis / ZooKeeper for document-to-server mapping',
      },
    ],
    dataFlow: 'A client types a character, generating an insert operation. The operation is sent via WebSocket to the Document Service instance handling that document. The OT engine transforms the operation against any concurrent operations, applies it to the server state, appends it to the Operation Log, and broadcasts the transformed operation to all other connected clients. Each client applies the transformed operation to their local copy.',
    svgDiagram: `<svg viewBox="0 0 820 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .gd-node { fill: #1a1e2a; stroke: #2e3446; stroke-width: 1.5; rx: 8; }
        .gd-node-accent { fill: #1a1e2a; stroke: #4285F4; stroke-width: 1.5; stroke-opacity: 0.8; rx: 8; }
        .gd-label { font-family: 'Space Mono', monospace; font-size: 12px; fill: #e8eaf0; text-anchor: middle; }
        .gd-sub { font-family: 'Space Mono', monospace; font-size: 10px; fill: #5a5f70; text-anchor: middle; }
        .gd-arrow { stroke: #4285F4; stroke-width: 1.5; marker-end: url(#ahGD); }
        @keyframes flowGD { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .gd-flow { stroke-dasharray: 10 10; animation: flowGD 1s linear infinite; }
      </style>
      <defs>
        <marker id="ahGD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#4285F4"/>
        </marker>
      </defs>

      <!-- Clients -->
      <rect class="gd-node" x="10" y="60" width="100" height="45"/>
      <text class="gd-label" x="60" y="83">Client A</text>
      <text class="gd-sub" x="60" y="96">Alice</text>

      <rect class="gd-node" x="10" y="160" width="100" height="45"/>
      <text class="gd-label" x="60" y="183">Client B</text>
      <text class="gd-sub" x="60" y="196">Bob</text>

      <rect class="gd-node" x="10" y="260" width="100" height="45"/>
      <text class="gd-label" x="60" y="283">Client C</text>
      <text class="gd-sub" x="60" y="296">Carol</text>

      <!-- WebSocket Gateway -->
      <rect class="gd-node-accent" x="180" y="130" width="120" height="55"/>
      <text class="gd-label" x="240" y="155">WS Gateway</text>
      <text class="gd-sub" x="240" y="170">WebSocket</text>

      <!-- Session Router -->
      <rect class="gd-node" x="180" y="40" width="120" height="45"/>
      <text class="gd-label" x="240" y="63">Session Router</text>
      <text class="gd-sub" x="240" y="76">doc→server map</text>

      <!-- OT Engine -->
      <rect class="gd-node-accent" x="370" y="130" width="140" height="55"/>
      <text class="gd-label" x="440" y="155" fill="#4285F4">OT Engine</text>
      <text class="gd-sub" x="440" y="170">transform + apply</text>

      <!-- Operation Log -->
      <rect class="gd-node" x="370" y="240" width="140" height="50"/>
      <text class="gd-label" x="440" y="263">Operation Log</text>
      <text class="gd-sub" x="440" y="278">Cassandra</text>

      <!-- Document Store -->
      <rect class="gd-node" x="580" y="240" width="130" height="50"/>
      <text class="gd-label" x="645" y="263">Doc Store</text>
      <text class="gd-sub" x="645" y="278">PostgreSQL + S3</text>

      <!-- Presence Service -->
      <rect class="gd-node" x="580" y="130" width="130" height="55"/>
      <text class="gd-label" x="645" y="155">Presence Svc</text>
      <text class="gd-sub" x="645" y="170">Redis Pub/Sub</text>

      <!-- Arrows -->
      <line class="gd-arrow gd-flow" x1="110" y1="83" x2="175" y2="145"/>
      <line class="gd-arrow gd-flow" x1="110" y1="183" x2="175" y2="160"/>
      <line class="gd-arrow gd-flow" x1="110" y1="275" x2="175" y2="175"/>
      <line class="gd-arrow gd-flow" x1="300" y1="158" x2="365" y2="158"/>
      <line class="gd-arrow gd-flow" x1="440" y1="185" x2="440" y2="235"/>
      <line class="gd-arrow gd-flow" x1="510" y1="265" x2="575" y2="265"/>
      <line class="gd-arrow gd-flow" x1="510" y1="155" x2="575" y2="155"/>
      <line class="gd-arrow" x1="240" y1="85" x2="240" y2="125" stroke-dasharray="4 4" stroke="#5a5f70"/>

      <!-- Broadcast arrows back -->
      <line class="gd-arrow gd-flow" x1="370" y1="145" x2="300" y2="145"/>
    </svg>`,
  },

  deepDives: [
    {
      title: 'Operational Transformation (OT) — How Conflicts Get Resolved',
      explanation: `OT is the algorithm that makes simultaneous editing work. Every edit is represented as an operation: insert(position, character) or delete(position). When the server receives two concurrent operations from different clients, it "transforms" them so they can both be applied in sequence and produce the same result. For example, if Alice inserts "A" at position 5 and Bob inserts "B" at position 3 (concurrently), the server transforms Alice's operation to insert at position 6 (because Bob's insert shifted everything after position 3 by one). Both clients end up with the same document. The key invariant: transform(op1, op2) produces op1' and op2' such that apply(apply(state, op1), op2') = apply(apply(state, op2), op1'). Google Docs uses a centralized OT model where the server is the single source of truth and assigns a global ordering to operations.`,
    },
    {
      title: 'CRDTs vs OT — The Alternative Approach',
      explanation: `Conflict-free Replicated Data Types (CRDTs) are the main alternative to OT. Instead of transforming operations, CRDTs design the data structure itself to be merge-friendly. Each character gets a unique ID (e.g., based on a logical clock), and the merge operation is commutative and associative — so the order operations arrive doesn't matter. CRDTs enable true peer-to-peer collaboration without a central server, making them better for offline support. However, they have higher memory overhead (each character needs metadata) and the resulting document can have unexpected merge results. Google Docs chose OT because the centralized server model is simpler to reason about and guarantees a canonical document state. Figma uses CRDTs. For an interview, mention both and justify your choice.`,
    },
    {
      title: 'Cursor Presence and Awareness',
      explanation: `Presence tracking lets users see each other's cursors and selections in real time. Each client sends its cursor position and selection range to the Presence Service (via the same WebSocket). The Presence Service broadcasts these to all other clients editing the same document via Redis Pub/Sub. Cursor positions are specified as document offsets. When an operation is applied, all cursor positions after the edit point are adjusted (shifted forward for inserts, backward for deletes). Each user is assigned a random color for their cursor. Presence data is ephemeral — stored in Redis with a TTL. If a client disconnects (WebSocket closes), their cursor disappears after the TTL expires.`,
    },
    {
      title: 'Version History and Snapshots',
      explanation: `Every operation is appended to the Operation Log in Cassandra, creating a complete audit trail. To view version history, the system can replay operations from any point. However, replaying thousands of operations is slow, so the system periodically creates "snapshots" — full document state saved to S3. To load a document, the system fetches the latest snapshot and replays only operations after that snapshot. Snapshots are created every ~1000 operations or every 5 minutes of active editing. Users can browse version history by timestamp, and restoring a previous version is just creating a new operation that sets the document to that state.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'Alice types a character',
      description: 'Alice types "H" at position 0 in her local document. Her client immediately applies the operation locally (for instant responsiveness) and sends insert(0, "H") to the WebSocket Gateway.',
      svgHighlight: `<line x1="110" y1="83" x2="175" y2="145" stroke="#4285F4" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4285F4" x="115" y="110">insert(0,"H")</text>`,
    },
    {
      stepNumber: 2,
      title: 'Gateway routes to OT Engine',
      description: 'The WebSocket Gateway forwards the operation to the OT Engine instance responsible for this document (determined by the Session Router). The OT Engine holds the authoritative server state in memory.',
      svgHighlight: `<line x1="300" y1="158" x2="365" y2="158" stroke="#4285F4" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4285F4" x="305" y="148">route to OT</text>`,
    },
    {
      stepNumber: 3,
      title: 'OT Engine transforms concurrent ops',
      description: 'If Bob also sent an operation concurrently, the OT Engine transforms both operations against each other. Alice\'s op becomes the "canonical" version. The transformed ops are assigned sequence numbers.',
      svgHighlight: `<rect x="365" y="125" width="150" height="65" fill="none" stroke="#4285F4" stroke-width="2.5" rx="8"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></rect><text font-family="Space Mono" font-size="9" fill="#4285F4" x="380" y="205">transform(opA, opB)</text>`,
    },
    {
      stepNumber: 4,
      title: 'Persist to Operation Log',
      description: 'The transformed operation is appended to the Operation Log in Cassandra (partitioned by document_id, clustered by sequence number). This ensures durability and enables version history.',
      svgHighlight: `<line x1="440" y1="185" x2="440" y2="235" stroke="#4285F4" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4285F4" x="455" y="218">append op</text>`,
    },
    {
      stepNumber: 5,
      title: 'Broadcast to all clients',
      description: 'The OT Engine sends the transformed operation back through the WebSocket Gateway to all connected clients (Bob, Carol). Each client applies the transformed operation to their local document.',
      svgHighlight: `<line x1="370" y1="145" x2="300" y2="145" stroke="#4285F4" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4285F4" x="305" y="135">broadcast op'</text>`,
    },
    {
      stepNumber: 6,
      title: 'Update presence cursors',
      description: 'Alice\'s cursor position is updated in the Presence Service and broadcast to Bob and Carol. Their editors show Alice\'s colored cursor at position 1 (after the inserted character).',
      svgHighlight: `<line x1="510" y1="155" x2="575" y2="155" stroke="#4285F4" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4285F4" x="525" y="145">cursor pos</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'OT Engine is stateful — each active document needs exactly one server instance to maintain consistency',
      solution: 'Use consistent hashing to map document_id to a specific OT Engine instance. If that instance fails, a new one loads the latest snapshot + recent ops from the Operation Log and resumes. Session Router tracks the mapping in ZooKeeper.',
      pattern: 'Handling Contention',
    },
    {
      problem: 'Hot documents (100+ concurrent editors) create high WebSocket fan-out and OT computation load',
      solution: 'Batch operations into micro-batches (every 50ms) before broadcasting. The OT Engine transforms the batch as a unit. For extremely hot documents, shard the document into sections with independent OT engines that merge periodically.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Operation Log grows unboundedly for long-lived documents',
      solution: 'Periodically snapshot the full document state to S3 (every ~1000 ops). Compact the Operation Log by removing ops older than the latest snapshot. Loading a document = latest snapshot + ops since snapshot.',
      pattern: 'Large Blob Storage',
    },
    {
      problem: 'Network partitions cause clients to diverge with many buffered local operations',
      solution: 'Clients buffer operations during disconnection and send them on reconnect. The OT Engine transforms the entire buffer against any operations that happened while the client was offline. The client rebases its local state against the server\'s transformed response.',
      pattern: 'Multi-Step Processes',
    },
  ],

  keyNumbers: [
    { label: 'Daily active users', value: '10M' },
    { label: 'Concurrent editors/doc', value: '100' },
    { label: 'Sync latency target', value: '<200ms' },
    { label: 'Ops per active doc/sec', value: '~50' },
    { label: 'Snapshot interval', value: '1K ops' },
  ],

  tags: ['Real-Time Updates', 'Handling Contention', 'Scaling Writes'],
};
