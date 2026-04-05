import { SDProblem } from '../types';

export const FACEBOOK_NEWS_FEED: SDProblem = {
  id: 'facebook-news-feed',
  name: 'Facebook News Feed',
  icon: '📰',
  accent: '#4267B2',
  difficulty: 'Medium',

  eli5: `Imagine you have 500 friends who each write you letters every day. Instead of reading all of them, a helper picks the most interesting ones and stacks them on your desk in order. That's the News Feed — it collects posts from everyone you follow, ranks them by what you'd care about most, and shows you the best ones first.`,

  interviewPitch: `I'd design a news feed system using a hybrid fan-out approach — fan-out on write for normal users (pre-compute feeds at post time) and fan-out on read for celebrities with millions of followers. A ranking service scores posts using engagement signals (likes, comments, recency) before insertion. The precomputed feed is stored in Redis for sub-100ms read latency, and I'd address the celebrity problem, feed pagination, and cache invalidation.`,

  requirements: {
    functional: [
      'Users can create posts (text, images, links)',
      'Feed displays posts from friends/followed accounts, ranked by relevance',
      'Feed updates in near real-time when friends post',
      'Support pagination with infinite scroll',
      'Posts show engagement counts (likes, comments, shares) inline',
    ],
    nonFunctional: [
      'Feed load latency < 200ms (p99)',
      'Scale to 2B users, 500M daily active',
      'Post visible in friends\' feeds within 5 seconds',
      'High availability — 99.99% uptime',
      'Eventually consistent engagement counts are acceptable',
    ],
    outOfScope: [
      'Ads ranking and insertion',
      'Stories and ephemeral content',
      'Direct messaging',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'Post Service',
        description: 'Accepts new posts, stores them, and triggers the fan-out pipeline. Handles media upload coordination.',
        techChoices: 'Go microservice + PostgreSQL for post storage, S3 for media',
      },
      {
        name: 'Fan-Out Service',
        description: 'Distributes new posts to followers\' precomputed feeds. Uses fan-out on write for normal users and skips celebrities.',
        techChoices: 'Kafka consumers + Redis sorted sets for feed storage',
      },
      {
        name: 'Feed Cache (Precomputed Feeds)',
        description: 'Stores each user\'s precomputed, ranked feed as a sorted set in Redis. This is the primary read path.',
        techChoices: 'Redis Cluster — sorted sets keyed by user_id, scored by rank',
      },
      {
        name: 'Feed Service (Read Path)',
        description: 'Serves feed requests. Reads precomputed feed from Redis, merges in celebrity posts on-the-fly (fan-out on read), hydrates with latest engagement counts.',
        techChoices: 'Go service with parallel fan-in from Redis + Post DB',
      },
      {
        name: 'Ranking Service',
        description: 'Scores posts using a ML model with features like recency, engagement, relationship strength, and content type. Runs at write time and periodically re-ranks.',
        techChoices: 'Python ML service (LightGBM / neural ranker)',
      },
      {
        name: 'Social Graph Service',
        description: 'Provides follower/friend lists for fan-out. Returns the list of followers for a given user.',
        techChoices: 'TAO-style graph store (MySQL + Memcached)',
      },
    ],
    dataFlow: 'Write path: User creates a post, Post Service stores it and publishes to Kafka. Fan-Out Service reads follower lists, scores the post via Ranking Service, and inserts it into each follower\'s Redis sorted set. Read path: User opens the app, Feed Service reads the precomputed feed from Redis, fetches celebrity posts on-the-fly, merges and hydrates with engagement counts, returns the final ranked feed.',
    svgDiagram: `<svg viewBox="0 0 820 370" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node { fill: #111318; stroke: #1e2230; stroke-width: 1.5; rx: 8; }
        .node-accent { fill: #111318; stroke: #4267B2; stroke-width: 1.5; stroke-opacity: 0.5; rx: 8; }
        .label { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; text-anchor: middle; }
        .sub { font-family: 'Space Mono', monospace; font-size: 8px; fill: #5a5f70; text-anchor: middle; }
        .arrow { stroke: #4267B2; stroke-width: 1.5; marker-end: url(#ahFB); }
        @keyframes flowFB { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        .flow { stroke-dasharray: 10 10; animation: flowFB 1s linear infinite; }
      </style>
      <defs>
        <marker id="ahFB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#4267B2"/>
        </marker>
      </defs>

      <!-- User / Client -->
      <rect class="node" x="10" y="150" width="100" height="50"/>
      <text class="label" x="60" y="175">Client</text>

      <!-- Post Service -->
      <rect class="node" x="160" y="60" width="120" height="50"/>
      <text class="label" x="220" y="83">Post Service</text>
      <text class="sub" x="220" y="98">write path</text>

      <!-- Feed Service -->
      <rect class="node" x="160" y="240" width="120" height="50"/>
      <text class="label" x="220" y="263">Feed Service</text>
      <text class="sub" x="220" y="278">read path</text>

      <!-- Kafka -->
      <rect class="node" x="340" y="60" width="100" height="50"/>
      <text class="label" x="390" y="83">Kafka</text>
      <text class="sub" x="390" y="98">post events</text>

      <!-- Fan-Out Service -->
      <rect class="node-accent" x="500" y="60" width="130" height="50"/>
      <text class="label" x="565" y="83" fill="#4267B2">Fan-Out Svc</text>
      <text class="sub" x="565" y="98">write to feeds</text>

      <!-- Ranking -->
      <rect class="node" x="500" y="150" width="130" height="50"/>
      <text class="label" x="565" y="173">Ranking Svc</text>
      <text class="sub" x="565" y="188">ML scoring</text>

      <!-- Feed Cache -->
      <rect class="node-accent" x="340" y="240" width="120" height="50"/>
      <text class="label" x="400" y="263" fill="#4267B2">Feed Cache</text>
      <text class="sub" x="400" y="278">Redis sorted sets</text>

      <!-- Social Graph -->
      <rect class="node" x="690" y="60" width="110" height="50"/>
      <text class="label" x="745" y="83">Social</text>
      <text class="sub" x="745" y="98">graph / TAO</text>

      <!-- Post DB -->
      <rect class="node" x="690" y="150" width="110" height="50"/>
      <text class="label" x="745" y="173">Post DB</text>
      <text class="sub" x="745" y="188">PostgreSQL</text>

      <!-- Celebrity merge -->
      <rect class="node" x="340" y="150" width="120" height="50"/>
      <text class="label" x="400" y="168">Celebrity</text>
      <text class="sub" x="400" y="183">fan-out on read</text>

      <!-- Arrows: Write path -->
      <line class="arrow flow" x1="110" y1="162" x2="155" y2="90"/>
      <line class="arrow flow" x1="280" y1="85" x2="335" y2="85"/>
      <line class="arrow flow" x1="440" y1="85" x2="495" y2="85"/>
      <line class="arrow flow" x1="630" y1="85" x2="685" y2="85"/>
      <line class="arrow flow" x1="565" y1="110" x2="565" y2="145"/>
      <line class="arrow flow" x1="500" y1="95" x2="460" y2="240"/>

      <!-- Arrows: Read path -->
      <line class="arrow flow" x1="110" y1="185" x2="155" y2="260"/>
      <line class="arrow flow" x1="280" y1="265" x2="335" y2="265"/>
      <line class="arrow flow" x1="280" y1="250" x2="335" y2="180"/>
    </svg>`,
  },

  deepDives: [
    {
      title: 'Fan-Out on Write vs Fan-Out on Read',
      explanation: `Fan-out on write (push model): When a user posts, immediately insert the post into every follower's precomputed feed in Redis. Pros: feed reads are instant (just read from cache). Cons: a user with 10M followers triggers 10M writes, and most followers may never even open the app. Fan-out on read (pull model): Do nothing at post time. When a user opens their feed, query all followed accounts' recent posts, rank, and return. Pros: no wasted writes. Cons: slow reads, especially for users following 1000+ accounts. The optimal solution is a hybrid: fan-out on write for normal users (< 10K followers) and fan-out on read for celebrities.`,
    },
    {
      title: 'The Celebrity Problem',
      explanation: `A user with 50M followers would trigger 50M cache writes on every post — this is infeasible. The solution: mark users above a follower threshold (e.g., 10K) as "celebrities." Their posts are NOT fanned out. Instead, when a feed is read, the Feed Service fetches the precomputed feed from Redis AND queries the latest posts from the user's followed celebrities. It merges and re-ranks these in real time. This adds ~20ms to feed read latency (a few extra DB reads) but saves billions of unnecessary cache writes. The follower threshold is tunable based on system capacity.`,
    },
    {
      title: 'Feed Ranking Algorithm',
      explanation: `The ranking service scores each candidate post with a relevance model. Key features include: affinity (how often the viewer interacts with the poster), recency (time decay), engagement velocity (likes/comments in the first hour), content type preference (does this user prefer photos vs links?), and negative signals (hide, report). The model produces a score, and the feed is sorted by descending score. At write time, an approximate score is computed for fan-out ordering. At read time, scores are refreshed with the latest engagement counts. This two-pass approach balances latency with freshness.`,
    },
    {
      title: 'Feed Pagination and Cache Structure',
      explanation: `Each user's feed is stored as a Redis sorted set with the ranking score as the sort key. The Feed Service reads a page (e.g., top 20 items) using ZREVRANGE. For infinite scroll, the client passes the last seen score as a cursor, and the next page uses ZREVRANGEBYSCORE. We cap the feed at ~1000 items per user to bound memory (older items fall off). When a user hasn't visited in a while, their cached feed may be stale — a background job periodically refreshes cold feeds. Active users get real-time updates via the fan-out pipeline.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'User creates a post',
      description: 'The user writes a post with text and an image. The Post Service stores it in PostgreSQL, uploads the image to S3, and publishes a "new post" event to Kafka.',
      svgHighlight: `<line x1="110" y1="162" x2="155" y2="90" stroke="#4267B2" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4267B2" x="90" y="115">new post</text>`,
    },
    {
      stepNumber: 2,
      title: 'Fan-Out Service consumes the event',
      description: 'The Fan-Out Service reads the event from Kafka, fetches the poster\'s follower list from the Social Graph service, and filters out celebrity followers (who use fan-out on read).',
      svgHighlight: `<line x1="440" y1="85" x2="495" y2="85" stroke="#4267B2" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4267B2" x="445" y="75">consume event</text>`,
    },
    {
      stepNumber: 3,
      title: 'Score and distribute to feeds',
      description: 'The Ranking Service scores the post for each follower. The Fan-Out Service inserts the post ID + score into each follower\'s Redis sorted set (their precomputed feed).',
      svgHighlight: `<line x1="500" y1="95" x2="460" y2="240" stroke="#4267B2" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4267B2" x="435" y="170">write to feeds</text>`,
    },
    {
      stepNumber: 4,
      title: 'Friend opens their feed',
      description: 'When a friend opens the app, the Feed Service reads their precomputed feed from Redis (top 20 posts by score). This is the fast path — under 50ms.',
      svgHighlight: `<line x1="280" y1="265" x2="335" y2="265" stroke="#4267B2" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4267B2" x="285" y="295">read feed</text>`,
    },
    {
      stepNumber: 5,
      title: 'Merge celebrity posts',
      description: 'The Feed Service also queries the latest posts from the user\'s followed celebrities (fan-out on read). These are scored, merged with the cached feed, and the final top-N is returned.',
      svgHighlight: `<line x1="280" y1="250" x2="335" y2="180" stroke="#4267B2" stroke-width="3" stroke-dasharray="6 4"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></line><text font-family="Space Mono" font-size="9" fill="#4267B2" x="250" y="220">merge celebs</text>`,
    },
    {
      stepNumber: 6,
      title: 'Hydrate posts with engagement data',
      description: 'The Feed Service hydrates each post with the latest like/comment/share counts from a fast counter service (Redis). The fully rendered feed is returned to the client.',
      svgHighlight: `<rect x="160" y="240" width="120" height="50" fill="none" stroke="#4267B2" stroke-width="2.5" rx="8"><animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></rect><text font-family="Space Mono" font-size="9" fill="#4267B2" x="165" y="305">hydrate counts</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Celebrity users with millions of followers cause massive fan-out write storms',
      solution: 'Use a hybrid approach: fan-out on write for normal users, fan-out on read for celebrities (> 10K followers). Celebrity posts are fetched and merged at read time, adding ~20ms but saving billions of writes.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Feed read latency must stay under 200ms for 500M daily active users',
      solution: 'Precompute feeds into Redis sorted sets at write time. The read path is a single ZREVRANGE call — sub-50ms. Celebrity merging adds a small overhead handled with parallel queries.',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'Ranking scores become stale as engagement counts change',
      solution: 'Use a two-pass ranking: approximate score at fan-out time, refresh scores with latest engagement data at read time. A background job periodically re-ranks cold feeds for returning users.',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'Feed updates must be visible within seconds for active users',
      solution: 'The fan-out pipeline via Kafka provides near-real-time delivery. For truly live updates, the client can maintain a WebSocket connection and receive push notifications for new feed items.',
      pattern: 'Real-Time Updates',
    },
  ],

  keyNumbers: [
    { label: 'Daily active users', value: '500M' },
    { label: 'Avg friends per user', value: '~300' },
    { label: 'Posts per day', value: '~1B' },
    { label: 'Feed reads per day', value: '~10B' },
    { label: 'Celebrity threshold', value: '10K followers' },
  ],

  tags: ['Scaling Reads', 'Scaling Writes', 'Real-Time Updates'],
};
