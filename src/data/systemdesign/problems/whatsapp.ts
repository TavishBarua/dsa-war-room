import { SDProblem } from '../types';

export const WHATSAPP: SDProblem = {
  id: 'whatsapp',
  name: 'WhatsApp (Messaging)',
  icon: '💬',
  accent: '#25D366',
  difficulty: 'Medium',

  eli5: `Imagine passing notes in class, but the teacher is a really fast mail carrier. When your friend is in the room, the note goes straight to them. When they're not, the teacher holds onto it and delivers it the moment they walk in. And the notes are written in secret code that even the teacher can't read!`,

  interviewPitch: `I'd design a real-time messaging system built on persistent WebSocket connections for instant delivery. Each user connects to a Chat Server that routes messages to the recipient's Chat Server via an internal message bus. For offline users, messages are durably stored and delivered when they reconnect. I'd implement end-to-end encryption so the server never sees plaintext, use message queues per user for ordering guarantees, and address group messaging fan-out, presence tracking, and delivery receipts (sent/delivered/read).`,

  requirements: {
    functional: [
      'Send and receive text messages in real time (1-on-1 and group)',
      'Support delivery receipts: sent, delivered, and read indicators',
      'Handle offline message delivery — messages queue until recipient comes online',
      'Group messaging with up to 1024 members',
      'End-to-end encryption so the server cannot read message content',
      'Message ordering guarantee within a conversation',
    ],
    nonFunctional: [
      'Message delivery latency < 100ms when both users are online',
      'Scale to 2B users, 100B messages per day',
      'High availability — 99.99% uptime',
      'Messages stored durably until delivered (at-least-once delivery)',
      'Support 1M+ concurrent WebSocket connections per server',
    ],
    outOfScope: [
      'Voice and video calling',
      'Status / stories feature',
      'Payment / money transfer',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'Chat Gateway (WebSocket Servers)',
        description: 'Maintains persistent WebSocket connections with clients. Each server handles ~1M concurrent connections. Routes messages to the appropriate services.',
        techChoices: 'Erlang/Elixir (BEAM VM) or Go with epoll — optimized for massive concurrency',
      },
      {
        name: 'Connection Registry',
        description: 'Maps user_id to the Chat Gateway server they are connected to. Enables routing messages to the correct server.',
        techChoices: 'Redis Cluster with hash slots — O(1) lookup by user_id',
      },
      {
        name: 'Message Service',
        description: 'Core message routing logic. Looks up the recipient\'s Chat Gateway, forwards the message, and handles offline queuing.',
        techChoices: 'Go microservice with Kafka for internal message bus',
      },
      {
        name: 'Message Store',
        description: 'Durably persists messages until confirmed delivered. Acts as an "outbox" for offline users. Messages are deleted after delivery confirmation.',
        techChoices: 'Cassandra — partitioned by recipient user_id, sorted by timestamp',
      },
      {
        name: 'Group Service',
        description: 'Manages group metadata and membership. When a group message arrives, fans it out to all group members via the Message Service.',
        techChoices: 'Go service + MySQL for group metadata',
      },
      {
        name: 'Presence Service',
        description: 'Tracks online/offline status and "last seen" timestamps. Updated when WebSocket connections open/close.',
        techChoices: 'Redis with TTL-based keys — key exists = online',
      },
    ],
    dataFlow: 'Online delivery: Sender\'s Chat Gateway receives the message via WebSocket, Message Service looks up recipient in Connection Registry, forwards to recipient\'s Chat Gateway, which pushes it over WebSocket. Offline delivery: If recipient is not in Connection Registry, message is persisted to Cassandra. When recipient reconnects, their Chat Gateway pulls all pending messages from the Message Store and delivers them.',
    svgDiagram: `<svg viewBox="0 0 820 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .wa-node { fill: #1a1e2a; stroke: #2e3446; stroke-width: 1.5; rx: 8; }
        .wa-node-accent { fill: #1a1e2a; stroke: #25D366; stroke-width: 1.5; stroke-opacity: 0.8; rx: 8; }
        .wa-label { font-family: 'Space Mono', monospace; font-size: 12px; fill: #e8eaf0; text-anchor: middle; }
        .wa-sub { font-family: 'Space Mono', monospace; font-size: 10px; fill: #5a5f70; text-anchor: middle; }
        .wa-arrow { stroke: #25D366; stroke-width: 1.5; marker-end: url(#ahWA); }
        @keyframes flowWA { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .wa-flow { stroke-dasharray: 10 10; animation: flowWA 1s linear infinite; }
      </style>
      <defs>
        <marker id="ahWA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#25D366"/>
        </marker>
      </defs>

      <!-- Sender -->
      <rect class="wa-node" x="10" y="140" width="100" height="50"/>
      <text class="wa-label" x="60" y="163">Sender</text>
      <text class="wa-sub" x="60" y="178">Alice</text>

      <!-- Chat Gateway A -->
      <rect class="wa-node-accent" x="160" y="140" width="120" height="50"/>
      <text class="wa-label" x="220" y="163">Chat GW A</text>
      <text class="wa-sub" x="220" y="178">WebSocket</text>

      <!-- Message Service -->
      <rect class="wa-node" x="340" y="140" width="130" height="50"/>
      <text class="wa-label" x="405" y="163">Message Svc</text>
      <text class="wa-sub" x="405" y="178">route + queue</text>

      <!-- Connection Registry -->
      <rect class="wa-node" x="340" y="55" width="130" height="50"/>
      <text class="wa-label" x="405" y="78">Conn Registry</text>
      <text class="wa-sub" x="405" y="93">Redis: user→GW</text>

      <!-- Chat Gateway B -->
      <rect class="wa-node-accent" x="530" y="140" width="120" height="50"/>
      <text class="wa-label" x="590" y="163">Chat GW B</text>
      <text class="wa-sub" x="590" y="178">WebSocket</text>

      <!-- Recipient -->
      <rect class="wa-node" x="700" y="140" width="100" height="50"/>
      <text class="wa-label" x="750" y="163">Recipient</text>
      <text class="wa-sub" x="750" y="178">Bob</text>

      <!-- Message Store -->
      <rect class="wa-node" x="340" y="240" width="130" height="50"/>
      <text class="wa-label" x="405" y="263">Msg Store</text>
      <text class="wa-sub" x="405" y="278">Cassandra</text>

      <!-- Group Service -->
      <rect class="wa-node" x="530" y="240" width="120" height="50"/>
      <text class="wa-label" x="590" y="263">Group Svc</text>
      <text class="wa-sub" x="590" y="278">fan-out</text>

      <!-- Presence -->
      <rect class="wa-node" x="160" y="55" width="120" height="50"/>
      <text class="wa-label" x="220" y="78">Presence</text>
      <text class="wa-sub" x="220" y="93">online/offline</text>

      <!-- Arrows: Online path -->
      <line class="wa-arrow wa-flow" x1="110" y1="165" x2="155" y2="165"/>
      <line class="wa-arrow wa-flow" x1="280" y1="165" x2="335" y2="165"/>
      <line class="wa-arrow wa-flow" x1="405" y1="140" x2="405" y2="110"/>
      <line class="wa-arrow wa-flow" x1="470" y1="165" x2="525" y2="165"/>
      <line class="wa-arrow wa-flow" x1="650" y1="165" x2="695" y2="165"/>

      <!-- Arrows: Offline path -->
      <line class="wa-arrow wa-flow" x1="405" y1="190" x2="405" y2="235"/>

      <!-- Arrows: Group -->
      <line class="wa-arrow wa-flow" x1="470" y1="175" x2="525" y2="255"/>

      <!-- Arrows: Presence -->
      <line class="wa-arrow wa-flow" x1="220" y1="140" x2="220" y2="110"/>
    </svg>`,
  },

  deepDives: [
    {
      title: 'WebSocket Connection Management at Scale',
      explanation: `Each Chat Gateway server maintains ~1M persistent WebSocket connections using epoll (Linux) for efficient I/O multiplexing. When a user connects, the Gateway registers the mapping (user_id -> gateway_server_id) in the Connection Registry (Redis). When the connection drops, the mapping is removed. To handle server failures gracefully, each registration has a TTL — if a Gateway crashes, stale entries expire within seconds. Clients auto-reconnect to any available Gateway and re-register. Load balancing across Gateways uses consistent hashing by user_id to minimize reconnections during scaling events.`,
    },
    {
      title: 'Message Delivery Guarantees and Ordering',
      explanation: `WhatsApp provides at-least-once delivery with client-side deduplication. Each message has a unique message_id (UUID). The server stores the message in Cassandra (partitioned by recipient_id, clustered by timestamp) and only deletes it after receiving a delivery ACK from the recipient's device. If the ACK is lost, the message is re-delivered on the next connection — the client deduplicates by message_id. Ordering within a conversation is guaranteed by the Cassandra clustering key (timestamp + sequence number). For group messages, each member gets their own copy in their partition, ensuring per-user ordering.`,
    },
    {
      title: 'End-to-End Encryption Basics',
      explanation: `The server never sees plaintext message content. Each user generates a public/private key pair on their device. When Alice wants to message Bob, she encrypts the message with Bob's public key (using the Signal Protocol — Double Ratchet algorithm). Only Bob's device can decrypt it. The server stores and forwards the encrypted blob. For groups, each message is encrypted separately for each member (N encryptions for N members), which is why WhatsApp limits groups to 1024 members. Key exchange happens via the server, but the server only relays public keys — it never possesses private keys.`,
    },
    {
      title: 'Group Messaging Fan-Out',
      explanation: `When a group message arrives, the Group Service looks up the member list and creates individual messages for each member (each encrypted with that member's public key). These are fanned out through the Message Service just like 1-on-1 messages. For a 1024-member group, this means 1024 writes — but it's a one-time cost per message. The fan-out happens asynchronously via Kafka to avoid blocking the sender. Each member's copy is independently tracked for delivery status. This per-member copy approach is simpler than shared storage and naturally handles members being in different online states.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'Alice sends a message',
      description: 'Alice types a message and hits send. Her device encrypts it with Bob\'s public key (E2E encryption) and sends the encrypted payload over her WebSocket connection to Chat Gateway A.',
      svgHighlight: `<line x1="110" y1="165" x2="155" y2="165" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="90" y="135">encrypted msg</text>`,
    },
    {
      stepNumber: 2,
      title: 'Chat Gateway forwards to Message Service',
      description: 'Chat Gateway A validates the session and forwards the message to the Message Service. It immediately sends a "sent" ACK (single checkmark) back to Alice.',
      svgHighlight: `<line x1="280" y1="165" x2="335" y2="165" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="280" y="155">✓ sent</text>`,
    },
    {
      stepNumber: 3,
      title: 'Look up recipient\'s connection',
      description: 'The Message Service queries the Connection Registry (Redis) to find which Chat Gateway Bob is connected to. If Bob is online, it gets "Chat GW B".',
      svgHighlight: `<line x1="405" y1="140" x2="405" y2="110" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="420" y="130">lookup Bob</text>`,
    },
    {
      stepNumber: 4,
      title: 'Route to recipient\'s Chat Gateway',
      description: 'The Message Service forwards the encrypted message to Chat Gateway B (Bob\'s server). The message is also durably persisted to Cassandra as a safety net.',
      svgHighlight: `<line x1="470" y1="165" x2="525" y2="165" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="475" y="155">forward msg</text>`,
    },
    {
      stepNumber: 5,
      title: 'Deliver to Bob via WebSocket',
      description: 'Chat Gateway B pushes the message to Bob\'s device over the WebSocket. Bob\'s device decrypts it with his private key and displays the message.',
      svgHighlight: `<line x1="650" y1="165" x2="695" y2="165" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="660" y="135">push to Bob</text>`,
    },
    {
      stepNumber: 6,
      title: 'Delivery ACK flows back',
      description: 'Bob\'s device sends a delivery ACK. This flows back through Chat GW B -> Message Service -> Chat GW A -> Alice. Alice sees double checkmarks (delivered). The message is deleted from Cassandra.',
      svgHighlight: `<line x1="525" y1="170" x2="280" y2="170" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="350" y="195">✓✓ delivered</text>`,
    },
    {
      stepNumber: 7,
      title: 'Offline delivery fallback',
      description: 'If Bob were offline (not in Connection Registry), the message stays in Cassandra. When Bob reconnects, his Chat Gateway pulls all pending messages from the Message Store and delivers them in order.',
      svgHighlight: `<line x1="405" y1="190" x2="405" y2="235" stroke="#25D366" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#25D366" x="420" y="225">store if offline</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Maintaining millions of concurrent WebSocket connections per server',
      solution: 'Use Erlang/BEAM VM or Go with epoll for efficient I/O multiplexing. Each connection uses ~10KB of memory. A single server with 32GB RAM can handle 1M+ connections. Horizontally scale Chat Gateways behind a load balancer.',
      pattern: 'Real-Time Updates',
    },
    {
      problem: 'Message ordering can be violated under network partitions or retries',
      solution: 'Use Cassandra\'s clustering key (timestamp + sequence number) per conversation partition. Messages are always read in order. Client-side sequence numbers detect gaps. At-least-once delivery with client dedup ensures no loss or duplication.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Group messages to 1024 members require fan-out of 1024 writes',
      solution: 'Fan out asynchronously via Kafka. Each member gets their own copy in their Cassandra partition. Kafka consumers process the fan-out in parallel. The sender is not blocked waiting for all 1024 deliveries.',
      pattern: 'Long-Running Tasks',
    },
    {
      problem: 'Connection Registry becomes a single point of failure for routing',
      solution: 'Use Redis Cluster with hash slots distributed across multiple nodes. Each node handles a subset of user_ids. If a node fails, its slots are reassigned within seconds. Clients simply reconnect and re-register.',
      pattern: 'Scaling Reads',
    },
  ],

  keyNumbers: [
    { label: 'Daily messages', value: '100B' },
    { label: 'Concurrent connections', value: '~1B' },
    { label: 'Connections per server', value: '~1M' },
    { label: 'Message delivery latency', value: '< 100ms' },
    { label: 'Max group size', value: '1,024' },
  ],

  tags: ['Real-Time Updates', 'Scaling Writes', 'Long-Running Tasks'],
};
