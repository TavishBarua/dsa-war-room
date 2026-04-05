import { SDProblem } from '../types';

export const YOUTUBE: SDProblem = {
  id: 'youtube',
  name: 'YouTube (Video Streaming)',
  icon: '▶️',
  accent: '#ff6b6b',
  difficulty: 'Hard',

  eli5: `Imagine you record a home video and want to show it to everyone in your school. You give the tape to a magic factory that makes copies in every size — one for big TVs, one for phones, one for slow internet. Then it puts copies in closets all around the world so nobody has to wait long to watch. That's YouTube — it takes your video, prepares it for every device, and delivers it super fast from the closest closet.`,

  interviewPitch: `I'd design YouTube as a video platform centered on two pipelines: an upload/transcode pipeline that converts raw video into multiple formats and resolutions using a distributed worker fleet, and a streaming delivery pipeline using adaptive bitrate streaming (HLS/DASH) served through a global CDN. The architecture separates the write path (upload, transcode, index) from the read path (discovery, streaming, view counting) to scale them independently, with the recommendation engine and view counter as dedicated high-throughput subsystems.`,

  requirements: {
    functional: [
      'Upload videos up to 12 hours long in common formats (MP4, MOV, AVI, MKV)',
      'Transcode videos into multiple resolutions (360p, 720p, 1080p, 4K) and formats (H.264, VP9, AV1)',
      'Stream videos with adaptive bitrate that adjusts to viewer bandwidth',
      'Search videos by title, description, tags, and captions',
      'Display personalized recommendations on the home feed',
      'Track and display view counts, likes, comments in real time',
    ],
    nonFunctional: [
      'Video playback starts within 2 seconds (time-to-first-byte)',
      '99.99% availability for video streaming',
      'Support 2B monthly active users, 500 hours of video uploaded per minute',
      'Transcoding completes within 1 hour for 95% of videos',
      'View counts accurate to within 1% over any 1-hour window',
    ],
    outOfScope: [
      'Live streaming and real-time broadcast infrastructure',
      'Monetization, ad serving, and creator payments',
      'Content moderation and copyright detection (Content ID)',
    ],
  },

  highLevel: {
    components: [
      {
        name: 'Upload Service',
        description: 'Accepts video uploads via resumable upload protocol (for large files). Stores raw video in temporary blob storage and enqueues a transcoding job. Supports chunk-based upload to handle network interruptions.',
        techChoices: 'Go service, resumable upload API (tus protocol), temporary S3 storage',
      },
      {
        name: 'Transcoding Pipeline',
        description: 'Distributed worker fleet that converts raw video into multiple resolution/codec combinations. Splits long videos into segments for parallel processing. Generates thumbnails, sprites for seek preview, and subtitle tracks.',
        techChoices: 'FFmpeg workers on GPU instances, Kafka job queue, output to S3',
      },
      {
        name: 'Object Storage + CDN',
        description: 'Stores all transcoded video segments and serves them globally. Videos are segmented into 2-10 second chunks for adaptive bitrate streaming. CDN caches popular segments at edge locations.',
        techChoices: 'S3 for storage, CloudFront/Akamai CDN, HLS/DASH manifest files',
      },
      {
        name: 'Video Metadata Service',
        description: 'Stores video metadata (title, description, tags, upload date, channel), manages video state (processing/published/removed), and serves the video watch page data.',
        techChoices: 'MySQL for metadata, Elasticsearch for search indexing',
      },
      {
        name: 'Recommendation Engine',
        description: 'Generates personalized video suggestions for home feed and "Up Next" sidebar. Uses collaborative filtering, content similarity, and user watch history to rank candidates.',
        techChoices: 'ML serving infrastructure (TensorFlow Serving), feature store in Redis, batch training on Spark',
      },
      {
        name: 'View Counter Service',
        description: 'Counts video views at massive scale with eventual consistency. Uses a multi-stage pipeline: client-side deduplication, server-side sampling at high counts, and periodic batch reconciliation.',
        techChoices: 'Kafka for event ingestion, Redis for real-time approximate counts, Cassandra for durable counts',
      },
    ],
    dataFlow: 'Creators upload raw video to the Upload Service, which stores it in blob storage and triggers the Transcoding Pipeline. Workers produce multiple resolution/codec variants, each split into segments. Segments are stored in S3 and served via CDN. Viewers request the HLS/DASH manifest, and the player fetches segments adaptively based on bandwidth. Views are counted through a Kafka pipeline and reconciled periodically.',
    svgDiagram: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes flowRight { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
    @keyframes flowDown { from { stroke-dashoffset: 80; } to { stroke-dashoffset: 0; } }
    text { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; }
    .node { fill: #111318; stroke: #1e2230; stroke-width: 2; rx: 12; }
    .arrow { stroke: #ff6b6b; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowRight 1.5s linear infinite; }
    .arrow-down { stroke: #ff6b6b; stroke-width: 2; stroke-dasharray: 10 10; fill: none; animation: flowDown 1.5s linear infinite; }
    .label { font-size: 10px; fill: #8b8fa3; }
  </style>
  <defs>
    <marker id="yt-arrow" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
      <polygon points="0 0, 10 3.5, 0 7" fill="#ff6b6b" />
    </marker>
  </defs>
  <!-- Creator -->
  <rect class="node" x="20" y="70" width="100" height="55" />
  <text x="70" y="102" text-anchor="middle">Creator</text>
  <!-- Viewer -->
  <rect class="node" x="20" y="270" width="100" height="55" />
  <text x="70" y="302" text-anchor="middle">Viewer</text>
  <!-- Upload Service -->
  <rect class="node" x="190" y="70" width="130" height="55" />
  <text x="255" y="102" text-anchor="middle">Upload Service</text>
  <!-- Transcoding -->
  <rect class="node" x="390" y="70" width="140" height="55" />
  <text x="460" y="95" text-anchor="middle">Transcoding</text>
  <text x="460" y="110" text-anchor="middle">Pipeline</text>
  <!-- S3 + CDN -->
  <rect class="node" x="610" y="70" width="130" height="55" />
  <text x="675" y="102" text-anchor="middle">S3 + CDN</text>
  <!-- Metadata -->
  <rect class="node" x="190" y="270" width="130" height="55" />
  <text x="255" y="302" text-anchor="middle">Metadata DB</text>
  <!-- Recommendations -->
  <rect class="node" x="390" y="270" width="140" height="55" />
  <text x="460" y="295" text-anchor="middle">Recommend</text>
  <text x="460" y="310" text-anchor="middle">Engine</text>
  <!-- View Counter -->
  <rect class="node" x="610" y="270" width="130" height="55" />
  <text x="675" y="295" text-anchor="middle">View Counter</text>
  <text x="675" y="310" text-anchor="middle">(Kafka)</text>
  <!-- Arrows — upload path -->
  <line class="arrow" x1="120" y1="97" x2="190" y2="97" marker-end="url(#yt-arrow)" />
  <line class="arrow" x1="320" y1="97" x2="390" y2="97" marker-end="url(#yt-arrow)" />
  <line class="arrow" x1="530" y1="97" x2="610" y2="97" marker-end="url(#yt-arrow)" />
  <!-- Arrows — read path -->
  <line class="arrow" x1="120" y1="297" x2="190" y2="297" marker-end="url(#yt-arrow)" />
  <line class="arrow" x1="320" y1="297" x2="390" y2="297" marker-end="url(#yt-arrow)" />
  <!-- Viewer to CDN -->
  <line class="arrow" x1="120" y1="280" x2="610" y2="120" marker-end="url(#yt-arrow)" />
  <!-- View events -->
  <line class="arrow" x1="120" y1="310" x2="610" y2="280" marker-end="url(#yt-arrow)" />
  <text class="label" x="150" y="90">upload</text>
  <text class="label" x="345" y="90">transcode</text>
  <text class="label" x="565" y="90">store</text>
  <text class="label" x="145" y="290">search</text>
  <text class="label" x="345" y="290">suggest</text>
  <text class="label" x="340" y="195">stream HLS</text>
  <text class="label" x="390" y="325">view event</text>
</svg>`,
  },

  deepDives: [
    {
      title: 'Video Transcoding Pipeline',
      explanation: `Raw uploaded videos need to be transcoded into multiple resolutions (360p, 720p, 1080p, 4K) and codecs (H.264 for compatibility, VP9/AV1 for efficiency). A 1-hour 4K video takes ~4 hours to transcode sequentially on CPU. To speed this up, we split the video into segments (e.g., 10-second chunks at GOP boundaries) and transcode each segment in parallel across a fleet of GPU workers. A coordinator service manages the DAG: split → transcode each segment in N resolutions → concatenate → generate manifest → mark ready. For a 1-hour video with 360 segments and 4 resolutions, that's 1,440 parallel tasks — completing in minutes instead of hours. We use spot/preemptible instances for cost savings (60-80% cheaper) with checkpointing so interrupted work can resume.`,
      svgDiagram: `<svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
  <style>
    text { font-family: 'Space Mono', monospace; font-size: 11px; fill: #e8eaf0; }
    .box { fill: #111318; stroke: #1e2230; stroke-width: 2; rx: 8; }
    .active { fill: #111318; stroke: #ff6b6b; stroke-width: 2; rx: 8; }
    .label { font-size: 10px; fill: #8b8fa3; }
    .title { font-size: 12px; fill: #ff6b6b; font-weight: bold; }
    .seg { fill: #ff6b6b; opacity: 0.3; rx: 4; }
  </style>
  <text class="title" x="400" y="25" text-anchor="middle">Parallel Segment Transcoding</text>
  <!-- Raw video -->
  <rect class="box" x="30" y="50" width="120" height="40" />
  <text x="90" y="75" text-anchor="middle">Raw Video</text>
  <!-- Split -->
  <rect class="active" x="30" y="120" width="120" height="35" />
  <text x="90" y="142" text-anchor="middle">Split (GOP)</text>
  <!-- Segments -->
  <rect class="seg" x="200" y="50" width="70" height="30" />
  <text x="235" y="70" text-anchor="middle" font-size="9">Seg 1</text>
  <rect class="seg" x="200" y="90" width="70" height="30" />
  <text x="235" y="110" text-anchor="middle" font-size="9">Seg 2</text>
  <rect class="seg" x="200" y="130" width="70" height="30" />
  <text x="235" y="150" text-anchor="middle" font-size="9">Seg 3</text>
  <text class="label" x="235" y="180" text-anchor="middle">...N segs</text>
  <!-- Workers -->
  <rect class="active" x="330" y="50" width="100" height="30" />
  <text x="380" y="70" text-anchor="middle" font-size="9">GPU Worker</text>
  <rect class="active" x="330" y="90" width="100" height="30" />
  <text x="380" y="110" text-anchor="middle" font-size="9">GPU Worker</text>
  <rect class="active" x="330" y="130" width="100" height="30" />
  <text x="380" y="150" text-anchor="middle" font-size="9">GPU Worker</text>
  <!-- Output resolutions -->
  <rect class="box" x="490" y="40" width="80" height="25" />
  <text x="530" y="57" text-anchor="middle" font-size="9">360p</text>
  <rect class="box" x="490" y="75" width="80" height="25" />
  <text x="530" y="92" text-anchor="middle" font-size="9">720p</text>
  <rect class="box" x="490" y="110" width="80" height="25" />
  <text x="530" y="127" text-anchor="middle" font-size="9">1080p</text>
  <rect class="box" x="490" y="145" width="80" height="25" />
  <text x="530" y="162" text-anchor="middle" font-size="9">4K</text>
  <!-- Concat + manifest -->
  <rect class="active" x="630" y="80" width="130" height="40" />
  <text x="695" y="105" text-anchor="middle">HLS Manifest</text>
  <text class="label" x="695" y="140" text-anchor="middle">m3u8 + segments</text>
</svg>`,
    },
    {
      title: 'Adaptive Bitrate Streaming (HLS/DASH)',
      explanation: `Videos are served using HTTP Live Streaming (HLS) or DASH. Each video is available in multiple quality levels, and each quality is split into 2-10 second segments. The client first fetches a master manifest (m3u8) listing all available quality levels. It starts with a low quality, measures download speed, and dynamically switches to higher quality as bandwidth allows — or drops down if the network degrades. This happens seamlessly during playback. Each segment is a standalone file on the CDN, so the CDN can cache segments independently. The player maintains a buffer of 20-30 seconds ahead. The key insight is that the "video" is really hundreds of small HTTP file downloads, which means standard HTTP caching and CDN infrastructure work perfectly — no special streaming servers needed.`,
    },
    {
      title: 'View Counting at Scale',
      explanation: `YouTube serves 1B+ video views per day, and each view must be counted. Doing a database write per view would melt any database. Instead, we use a multi-stage pipeline. The client sends a "view" event when the user has watched at least 30 seconds (to filter bots). Events are batched on the client and sent to a Kafka topic. A stream processor deduplicates events (same user + same video within a window = 1 view) using a Bloom filter. Deduplicated counts are aggregated in 1-minute tumbling windows and written to Redis for the real-time approximate count displayed on the video page. Every hour, a batch job reconciles the exact count from Kafka logs and updates the authoritative count in Cassandra. The displayed count is eventually consistent — off by at most a few minutes.`,
    },
    {
      title: 'Recommendation Engine Architecture',
      explanation: `The recommendation system powers the home feed and "Up Next" sidebar, which drive ~70% of watch time. It operates in two stages: candidate generation and ranking. Candidate generation uses multiple signals — collaborative filtering (users who watched X also watched Y), content-based similarity (same topic, creator, tags), and trending/freshness signals — to produce ~1000 candidate videos per request. The ranking stage applies a deep neural network that predicts watch time based on user features (watch history, demographics, time of day) and video features (age, engagement rate, creator stats). The top ~20 ranked videos are returned. The entire pipeline runs in <100ms because candidate generation uses pre-computed embeddings stored in a vector database, and the ranking model runs on GPU serving infrastructure with batched inference.`,
    },
  ],

  walkthrough: [
    {
      stepNumber: 1,
      title: 'Creator Uploads Video',
      description: 'The creator selects a video file and the client initiates a resumable upload. The file is uploaded in chunks to the Upload Service, which stores the raw video in temporary blob storage and creates a metadata record.',
      svgHighlight: `<rect x="18" y="68" width="104" height="59" fill="none" stroke="#ff6b6b" stroke-width="3" rx="12" opacity="0.9" />
<text x="70" y="150" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff6b6b">1. Upload raw video</text>`,
    },
    {
      stepNumber: 2,
      title: 'Transcoding Job Enqueued',
      description: 'The Upload Service publishes a transcoding job to Kafka. The job includes the raw video location, target resolutions, and codec preferences. A coordinator picks it up and splits the video into segments.',
      svgHighlight: `<rect x="188" y="68" width="134" height="59" fill="none" stroke="#ff6b6b" stroke-width="3" rx="12" opacity="0.9" />
<text x="255" y="150" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff6b6b">2. Enqueue transcode job</text>`,
    },
    {
      stepNumber: 3,
      title: 'Parallel Transcoding on GPU Workers',
      description: 'GPU workers process video segments in parallel across multiple resolutions. A 1-hour video is split into 360 segments, each transcoded into 4 resolutions — 1,440 tasks completing in minutes. Results are uploaded to S3.',
      svgHighlight: `<rect x="388" y="68" width="144" height="59" fill="none" stroke="#ff6b6b" stroke-width="3" rx="12" opacity="0.9" />
<text x="460" y="150" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff6b6b">3. GPU transcode (parallel)</text>`,
    },
    {
      stepNumber: 4,
      title: 'Segments Stored in S3 + CDN',
      description: 'Transcoded segments and HLS/DASH manifests are stored in S3. The CDN begins caching segments at edge locations. The video status is updated to "published" and it appears on the creator\'s channel.',
      svgHighlight: `<rect x="608" y="68" width="134" height="59" fill="none" stroke="#ff6b6b" stroke-width="3" rx="12" opacity="0.9" />
<text x="675" y="150" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff6b6b">4. Store + CDN distribute</text>`,
    },
    {
      stepNumber: 5,
      title: 'Viewer Discovers & Plays Video',
      description: 'A viewer finds the video via search or recommendations. The player fetches the HLS manifest from the CDN, starts with a low quality segment, and progressively upgrades quality as it measures available bandwidth.',
      svgHighlight: `<rect x="18" y="268" width="104" height="59" fill="none" stroke="#ff6b6b" stroke-width="3" rx="12" opacity="0.9" />
<line x1="120" y1="280" x2="610" y2="120" stroke="#ff6b6b" stroke-width="4" fill="none" opacity="0.9" />
<text x="350" y="185" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff6b6b">5. Stream HLS segments</text>`,
    },
    {
      stepNumber: 6,
      title: 'View Event Counted',
      description: 'After 30 seconds of watch time, the client fires a "view" event to Kafka. The stream processor deduplicates and aggregates counts. Redis is updated for the real-time display, and Cassandra stores the durable count.',
      svgHighlight: `<rect x="608" y="268" width="134" height="59" fill="none" stroke="#ff6b6b" stroke-width="3" rx="12" opacity="0.9" />
<text x="675" y="348" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#ff6b6b">6. Count view (Kafka pipeline)</text>`,
    },
    {
      stepNumber: 7,
      title: 'Recommendations Updated',
      description: 'The view event also feeds the recommendation engine. User watch history is updated, and the next time they open the home feed, the model incorporates this new signal to improve suggestions.',
      svgHighlight: `<rect x="388" y="268" width="144" height="59" fill="none" stroke="#00e676" stroke-width="3" rx="12" opacity="0.9" />
<text x="460" y="348" text-anchor="middle" font-family="Space Mono, monospace" font-size="10" fill="#00e676">7. Update recommendations</text>`,
    },
  ],

  bottlenecks: [
    {
      problem: 'Transcoding 500 hours of video uploaded per minute requires enormous compute — and cost scales linearly with GPU hours.',
      solution: 'Use spot/preemptible GPU instances (60-80% cheaper) with checkpointing. Split videos into segments for parallel processing. Prioritize popular resolutions (720p, 1080p) first; transcode 4K lazily only when requested. Use AV1 codec for popular videos (50% smaller files = 50% less CDN cost).',
      pattern: 'Long-Running Tasks',
    },
    {
      problem: 'The top 1% of videos account for 80%+ of all views, causing CDN hot spots and origin hammering for the long tail.',
      solution: 'Multi-tier caching: CDN edge for top-1% videos, CDN mid-tier for top-10%, origin for the long tail. Pre-warm CDN caches for videos predicted to go viral (based on early engagement velocity). For the long tail, use cheaper storage tiers and accept higher first-byte latency.',
      pattern: 'Scaling Reads',
    },
    {
      problem: 'View counting must handle 1B+ events/day without losing counts or double-counting, while displaying a "real-time" count.',
      solution: 'Separate the real-time display (approximate, Redis-based) from the authoritative count (exact, Cassandra-based). Use Kafka for durable event storage, Bloom filters for deduplication, and hourly batch reconciliation. Accept eventual consistency for the displayed count.',
      pattern: 'Scaling Writes',
    },
    {
      problem: 'Storing petabytes of video with multiple resolution variants is extremely expensive at scale.',
      solution: 'Tiered encoding: popular videos get all resolutions + modern codecs (AV1). Unpopular videos older than 6 months get reduced to 2-3 resolutions. Use intelligent compression — AV1 saves 50% bandwidth over H.264 for equivalent quality. Delete raw uploads after transcoding.',
      pattern: 'Large Blob Storage',
    },
  ],

  keyNumbers: [
    { label: 'Video uploaded per minute', value: '500 hours' },
    { label: 'Daily video views', value: '1B+' },
    { label: 'Monthly active users', value: '2B' },
    { label: 'Average video size (1080p)', value: '~1 GB/hour' },
    { label: 'CDN bandwidth (peak)', value: '~100 Tbps' },
  ],

  tags: ['video-streaming', 'transcoding', 'cdn', 'hls', 'adaptive-bitrate', 'recommendations', 'view-counting', 'blob-storage'],
};
