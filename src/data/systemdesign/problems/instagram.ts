import { SDProblem } from '../types';

export const INSTAGRAM: SDProblem = {
  id: 'instagram',
  name: 'Instagram (Photo Sharing)',
  icon: '📸',
  accent: '#E1306C',
  difficulty: 'Hard',

  eli5: `Imagine a giant photo album that millions of people share. When you stick a photo in, magic elves instantly make tiny, medium, and huge copies, then deliver the right size to whoever looks. Your "feed" is like a personal newspaper — elves pick the best photos from everyone you follow and arrange them just for you.`,

  interviewPitch: `I'd design Instagram as a read-heavy photo sharing platform with a dedicated upload pipeline that resizes images asynchronously, stores originals in object storage with CDN distribution, and generates personalized feeds using a hybrid push/pull fan-out model. The architecture separates the write path (upload, process, store) from the read path (feed generation, CDN delivery) to independently scale each based on traffic patterns.`,

  requirements: {
    functional: [
      'Upload photos with captions, tags, and location metadata',
      'Generate a personalized news feed from followed users',
      'Follow/unfollow users and view their profile galleries',
      'Like and comment on photos',
      'Support stories that expire after 24 hours',
      'Search by hashtags, users, and locations',
    ],
    nonFunctional: [
      'Photo upload completes within 2 seconds (perceived latency)',
      '99.9% availability — feed reads should never go down',
      'Feed loads in <200ms for p95 of users',
      'Support 500M daily active users, 100M photo uploads per day',
      'Photos stored durably with 99.999999999% (11 nines) durability',
    ],
    outOfScope: [
      'Direct messaging and group chats',
      'Reels / short-form video editing and playback',
      'Ads auction and targeting system',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'Upload Service',
        description: 'Accepts photo uploads from clients, validates formats, generates a unique photo ID, and stores the original in object storage. Returns immediately after storing the original.',
        techChoices: 'Go service behind a load balancer, pre-signed S3 URLs for direct upload',
      },
      {
        name: 'Image Processing Pipeline',
        description: 'Asynchronously resizes uploaded photos into multiple sizes (thumbnail 150px, medium 640px, large 1080px), strips EXIF data, and applies compression. Results are pushed to CDN.',
        techChoices: 'Worker pool consuming from SQS/Kafka, ImageMagick/libvips, output to S3',
      },
      {
        name: 'Object Storage + CDN',
        description: 'S3-compatible blob store holds all image variants. A CDN with global edge locations caches and serves images close to users. Cache-Control headers are set to immutable.',
        techChoices: 'AWS S3 for storage, CloudFront/Akamai CDN',
      },
      {
        name: 'Feed Service',
        description: 'Generates the personalized home feed. Uses hybrid fan-out: push to followers for normal users, pull at read-time for celebrity accounts (>1M followers) to avoid write amplification.',
        techChoices: 'Redis sorted sets for pre-computed feeds, Cassandra for feed persistence',
      },
      {
        name: 'User / Social Graph Service',
        description: 'Manages user profiles, follow relationships, and activity counts. The follower graph is stored in a graph-optimized store for fast fan-out queries.',
        techChoices: 'MySQL for profiles, Redis for counts, TAO-style graph store for relationships',
      },
      {
        name: 'Search & Discovery Service',
        description: 'Indexes hashtags, user profiles, and locations for search. Powers the Explore page with trending and personalized content recommendations.',
        techChoices: 'Elasticsearch for text search, ML ranking service for Explore',
      },
    ],
    dataFlow: 'Photo uploads go to Object Storage via the Upload Service, which enqueues an image processing job. Workers resize and push variants to CDN. The Feed Service fans out a reference (photoID) to followers\' feed caches. Readers fetch their feed list from Redis, then load image URLs that resolve to the nearest CDN edge.',
    svgDiagram: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes flowRight { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
    @keyframes flowDown { from { stroke-dashoffset: 80; } to { stroke-dashoffset: 0; } }
    .ig-text { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; }
    .ig-node { fill: #1a1e2a; stroke: #2e3446; stroke-width: 2; rx: 12; }
    .ig-arrow { stroke: #E1306C; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowRight 1.5s linear infinite; }
    .ig-arrow-down { stroke: #E1306C; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowDown 1.5s linear infinite; }
    .ig-label { font-size: 12px; fill: #8b8fa3; }
  </style>
  <defs>
    <marker id="ig-arrow" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
      <polygon points="0 0, 10 3.5, 0 7" fill="#E1306C" />
    </marker>
  </defs>
  <!-- Client -->
  <rect class="ig-node" x="20" y="160" width="100" height="60" />
  <text class="ig-text" x="70" y="195" text-anchor="middle">Client</text>
  <!-- Upload Service -->
  <rect class="ig-node" x="180" y="60" width="130" height="55" />
  <text class="ig-text" x="245" y="92" text-anchor="middle">Upload Service</text>
  <!-- Image Processing -->
  <rect class="ig-node" x="380" y="60" width="140" height="55" />
  <text class="ig-text" x="450" y="85" text-anchor="middle">Image</text>
  <text class="ig-text" x="450" y="100" text-anchor="middle">Processing</text>
  <!-- S3 + CDN -->
  <rect class="ig-node" x="600" y="60" width="130" height="55" />
  <text class="ig-text" x="665" y="85" text-anchor="middle">S3 + CDN</text>
  <!-- Feed Service -->
  <rect class="ig-node" x="180" y="270" width="130" height="55" />
  <text class="ig-text" x="245" y="302" text-anchor="middle">Feed Service</text>
  <!-- Redis Feed Cache -->
  <rect class="ig-node" x="380" y="270" width="140" height="55" />
  <text class="ig-text" x="450" y="295" text-anchor="middle">Redis</text>
  <text class="ig-text" x="450" y="310" text-anchor="middle">(Feed Cache)</text>
  <!-- Social Graph -->
  <rect class="ig-node" x="600" y="270" width="130" height="55" />
  <text class="ig-text" x="665" y="302" text-anchor="middle">Social Graph</text>
  <!-- Arrows -->
  <line class="ig-arrow" x1="120" y1="175" x2="180" y2="92" marker-end="url(#ig-arrow)" />
  <line class="ig-arrow" x1="310" y1="87" x2="380" y2="87" marker-end="url(#ig-arrow)" />
  <line class="ig-arrow" x1="520" y1="87" x2="600" y2="87" marker-end="url(#ig-arrow)" />
  <line class="ig-arrow" x1="120" y1="205" x2="180" y2="290" marker-end="url(#ig-arrow)" />
  <line class="ig-arrow" x1="310" y1="297" x2="380" y2="297" marker-end="url(#ig-arrow)" />
  <line class="ig-arrow" x1="520" y1="297" x2="600" y2="297" marker-end="url(#ig-arrow)" />
  <line class="ig-arrow-down" x1="450" y1="115" x2="450" y2="270" marker-end="url(#ig-arrow)" />
  <text class="ig-label" x="135" y="125">upload</text>
  <text class="ig-label" x="340" y="80">process</text>
  <text class="ig-label" x="555" y="80">store</text>
  <text class="ig-label" x="130" y="260">read</text>
  <text class="ig-label" x="335" y="290">fetch</text>
  <text class="ig-label" x="555" y="290">followers</text>
  <text class="ig-label" x="458" y="195">fan-out</text>
</svg>`,
  },

  deepDives: [
    {
      title: 'Photo Upload & Processing Pipeline',
      explanation: `When a user uploads a photo, the client gets a pre-signed S3 URL and uploads directly to object storage — bypassing our servers for the heavy blob transfer. Once the upload completes, a message is sent to the Upload Service which validates the image, writes metadata to the database, and enqueues a processing job. Workers pick up the job and generate multiple resolutions (150px thumbnail, 640px for feed, 1080px for full-screen) using libvips for speed. Each variant is uploaded to S3 with a predictable key pattern (e.g., photos/{id}/1080.jpg) and the CDN is warmed for the uploader's region. The whole pipeline completes in 5-10 seconds, but the user sees "uploaded" as soon as the original hits S3.`,
    },
    {
      title: 'Hybrid Fan-Out for News Feed',
      explanation: `The classic fan-out-on-write approach pushes a photo reference to every follower's feed cache when posted. This works great for users with <10K followers but breaks down for celebrities with 100M followers — writing to 100M feeds per post is too slow and wasteful. The hybrid approach: for normal users (fan-out-on-write), the Feed Service pushes the photoID to each follower's Redis sorted set (sorted by timestamp). For celebrity users (fan-out-on-read), their posts are NOT pre-distributed. Instead, when a user opens their feed, the Feed Service merges the pre-computed feed with recent posts from any celebrities they follow, using a lightweight merge step. This keeps write amplification manageable while delivering fast feed reads.`,
    },
    {
      title: 'CDN Strategy for Images',
      explanation: `Images are served entirely through a CDN — our origin servers should see near-zero image traffic for popular content. The URL structure embeds the size variant (e.g., cdn.ig.com/p/{id}/640.jpg), making it cacheable with Cache-Control: public, immutable, max-age=31536000. Since image URLs include the photo ID which never changes, we get infinite caching. For newly uploaded photos, we proactively push to edge locations in the uploader's region (cache warming) so the first viewer doesn't experience a cache miss. The CDN also handles WebP/AVIF content negotiation — serving modern formats to supported browsers for 30-50% size reduction. Total CDN bandwidth for 100M daily uploads at 2MB average = ~200TB/day of ingress alone.`,
    },
    {
      title: 'Stories: Ephemeral Content Architecture',
      explanation: `Stories expire after 24 hours, which changes the storage and caching strategy. Instead of permanent S3 storage, stories use a separate bucket with lifecycle policies for automatic deletion. The stories feed is simpler than the main feed — it's a ring of followed users who have active stories, sorted by recency and engagement. We store story metadata in Redis with TTL=24h, so expired stories are automatically cleaned up. The stories tray (the row of circles at the top) is pre-computed per user and cached aggressively. When a user posts a story, we push a lightweight notification to their followers' story trays via the same fan-out system, but with much smaller payloads (just user ID + timestamp).`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'User Uploads a Photo',
      description: 'The client app requests a pre-signed URL from the Upload Service, then uploads the photo directly to S3. This avoids routing large image blobs through our application servers.',
      svgHighlight: `<rect x="18" y="158" width="104" height="64" fill="none" stroke="#E1306C" stroke-width="3" rx="12" opacity="0.9" />
<text class="ig-text" x="70" y="245" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#E1306C">1. Upload photo</text>`,
    },
    {
      stepNumber: 2,
      title: 'Upload Service Stores Metadata',
      description: 'The Upload Service receives confirmation of the S3 upload, validates the image, writes metadata (user, caption, tags, location) to the database, and enqueues an image processing job.',
      svgHighlight: `<rect x="178" y="58" width="134" height="59" fill="none" stroke="#E1306C" stroke-width="3" rx="12" opacity="0.9" />
<text class="ig-text" x="245" y="140" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#E1306C">2. Save metadata + enqueue</text>`,
    },
    {
      stepNumber: 3,
      title: 'Image Processing Workers Resize',
      description: 'Workers consume the job, download the original from S3, generate thumbnail (150px), medium (640px), and large (1080px) variants, and upload all variants back to S3.',
      svgHighlight: `<rect x="378" y="58" width="144" height="59" fill="none" stroke="#E1306C" stroke-width="3" rx="12" opacity="0.9" />
<text class="ig-text" x="450" y="140" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#E1306C">3. Resize → 150/640/1080px</text>`,
    },
    {
      stepNumber: 4,
      title: 'Variants Pushed to CDN',
      description: 'Resized images are stored in S3 and the CDN is warmed for the uploader\'s region. The immutable URL pattern ensures aggressive caching at edge locations worldwide.',
      svgHighlight: `<rect x="598" y="58" width="134" height="59" fill="none" stroke="#E1306C" stroke-width="3" rx="12" opacity="0.9" />
<text class="ig-text" x="665" y="140" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#E1306C">4. CDN edge caching</text>`,
    },
    {
      stepNumber: 5,
      title: 'Fan-Out to Followers\' Feeds',
      description: 'The Feed Service is notified of the new post. For a normal user, it pushes the photoID to each follower\'s Redis sorted set. For celebrities, it skips fan-out (pull at read time).',
      svgHighlight: `<line x1="450" y1="115" x2="450" y2="270" stroke="#E1306C" stroke-width="4" fill="none" opacity="0.9" />
<text class="ig-text" x="500" y="195" font-family="Space Mono, monospace" font-size="10" fill="#E1306C">5. Fan-out photoID</text>`,
    },
    {
      stepNumber: 6,
      title: 'Follower Opens Feed',
      description: 'When a follower opens the app, the Feed Service reads their pre-computed feed from Redis, merges in any celebrity posts (pull), resolves photo URLs, and returns a ranked list of posts.',
      svgHighlight: `<rect x="178" y="268" width="134" height="59" fill="none" stroke="#E1306C" stroke-width="3" rx="12" opacity="0.9" />
<rect x="378" y="268" width="144" height="59" fill="none" stroke="#E1306C" stroke-width="3" rx="12" opacity="0.9" />
<text class="ig-text" x="320" y="350" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#E1306C">6. Fetch feed → merge → rank</text>`,
    },
    {
      stepNumber: 7,
      title: 'Images Served from CDN Edge',
      description: 'The client receives feed data with CDN image URLs. Images load from the nearest edge location in milliseconds. The client requests the appropriate size variant based on device resolution.',
      svgHighlight: `<rect x="598" y="58" width="134" height="59" fill="none" stroke="#00e676" stroke-width="3" rx="12" opacity="0.9" />
<text class="ig-text" x="665" y="30" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#00e676">7. Serve from edge (< 50ms)</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Celebrity users with 100M+ followers cause massive write amplification during fan-out — one post triggers 100M Redis writes.',
      solution: 'Hybrid fan-out: push for normal users (<10K followers), pull at read-time for celebrities. The feed merge step adds only ~10ms latency but eliminates billions of writes per day.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Image processing pipeline can\'t keep up during peak upload times (e.g., New Year\'s Eve), creating a growing backlog.',
      solution: 'Auto-scaling worker pools based on queue depth. Use priority queues so recent uploads process first. Pre-generate only the most critical size (640px for feed) synchronously, defer others.',
      pattern: 'Long-Running Tasks',
    },
    {
      problem: 'Hot images (viral posts) overwhelm CDN origin with cache misses across hundreds of edge locations simultaneously.',
      solution: 'CDN shield / mid-tier caching layer that collapses concurrent origin requests for the same image into one. Proactive cache warming for posts predicted to go viral (early engagement signals).',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'Storing 100M photos/day at ~2MB each = 200TB/day of raw storage, with 3 variants each adding to the total.',
      solution: 'Tiered storage: hot photos (< 30 days) on fast SSDs, warm photos on standard S3, cold photos (rarely accessed) on S3 Glacier. Use modern formats (AVIF) to reduce size by 50%. Delete original after processing if not needed.',
      pattern: 'Large Blob Storage',
    },
  ],

  keyNumbers: [
    { label: 'Daily active users', value: '500M' },
    { label: 'Daily photo uploads', value: '100M' },
    { label: 'Average photo size', value: '2 MB' },
    { label: 'Daily storage ingress', value: '~200 TB' },
    { label: 'Feed load latency (p95)', value: '<200ms' },
  ],

  tags: ['photo-sharing', 'cdn', 'fan-out', 'feed-generation', 'image-processing', 'object-storage', 'social-graph'],
};
