import { DnaPattern } from './types';

export const DNA_EXTRA: DnaPattern[] = [
  {
    icon:'🌳', name:'Trees / DFS', accent:'#4ade80',
    tagline:'DFS or BFS — almost always one of these two',
    hook:"Imagine a family tree. To find your great-great-grandma, you go up one level at a time — that's like DFS (Depth First Search), going as DEEP as possible before coming back. BFS (Breadth First Search) is like asking ALL your grandparents first, then ALL your great-grandparents. DFS goes deep like a scuba diver; BFS spreads wide like ripples in a pond.",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes t-vis{0%{fill:#1a1d2e}100%{fill:rgba(74,222,128,.3)}} @keyframes t-vis2{0%{fill:#1a1d2e}100%{fill:rgba(0,207,255,.3)}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="170" y="25" fill="#4ade80" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">DFS (goes deep)</text><text x="430" y="25" fill="#00cfff" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">BFS (goes wide)</text><circle cx="170" cy="60" r="20" fill="#1a1d2e" stroke="#4ade80" stroke-width="2" style="animation:t-vis 4s ease .0s infinite alternate"/><text x="170" y="65" fill="#4ade80" text-anchor="middle" font-size="12" font-weight="bold">1</text><line x1="155" y1="78" x2="120" y2="110" stroke="#4ade80"/><line x1="185" y1="78" x2="220" y2="110" stroke="#4a5268"/><circle cx="120" cy="130" r="18" fill="#1a1d2e" stroke="#4ade80" stroke-width="2" style="animation:t-vis 4s ease .5s infinite alternate"/><text x="120" y="135" fill="#4ade80" text-anchor="middle" font-size="12">2</text><circle cx="220" cy="130" r="18" fill="#1a1d2e" stroke="#4a5268" stroke-width="1"/><text x="220" y="135" fill="#4a5268" text-anchor="middle" font-size="12">5</text><line x1="108" y1="146" x2="85" y2="175" stroke="#4ade80"/><line x1="132" y1="146" x2="155" y2="175" stroke="#4a5268"/><circle cx="85" cy="195" r="16" fill="#1a1d2e" stroke="#4ade80" stroke-width="2" style="animation:t-vis 4s ease 1s infinite alternate"/><text x="85" y="200" fill="#4ade80" text-anchor="middle" font-size="12">3</text><circle cx="155" cy="195" r="16" fill="#1a1d2e" stroke="#4ade80" stroke-width="2" style="animation:t-vis 4s ease 1.5s infinite alternate"/><text x="155" y="200" fill="#4ade80" text-anchor="middle" font-size="12">4</text><text x="170" y="250" fill="#4ade80" text-anchor="middle" font-size="11" font-family="monospace">Order: 1→2→3→4→5 (deep first)</text><circle cx="430" cy="60" r="20" fill="#1a1d2e" stroke="#00cfff" stroke-width="2" style="animation:t-vis2 4s ease .0s infinite alternate"/><text x="430" y="65" fill="#00cfff" text-anchor="middle" font-size="12" font-weight="bold">1</text><line x1="415" y1="78" x2="380" y2="110" stroke="#00cfff"/><line x1="445" y1="78" x2="480" y2="110" stroke="#00cfff"/><circle cx="380" cy="130" r="18" fill="#1a1d2e" stroke="#00cfff" stroke-width="2" style="animation:t-vis2 4s ease .5s infinite alternate"/><text x="380" y="135" fill="#00cfff" text-anchor="middle" font-size="12">2</text><circle cx="480" cy="130" r="18" fill="#1a1d2e" stroke="#00cfff" stroke-width="2" style="animation:t-vis2 4s ease .5s infinite alternate"/><text x="480" y="135" fill="#00cfff" text-anchor="middle" font-size="12">3</text><line x1="368" y1="146" x2="345" y2="175" stroke="#00cfff"/><line x1="392" y1="146" x2="415" y2="175" stroke="#00cfff"/><circle cx="345" cy="195" r="16" fill="#1a1d2e" stroke="#00cfff" stroke-width="2" style="animation:t-vis2 4s ease 1s infinite alternate"/><text x="345" y="200" fill="#00cfff" text-anchor="middle" font-size="12">4</text><circle cx="415" cy="195" r="16" fill="#1a1d2e" stroke="#00cfff" stroke-width="2" style="animation:t-vis2 4s ease 1s infinite alternate"/><text x="415" y="200" fill="#00cfff" text-anchor="middle" font-size="12">5</text><text x="430" y="250" fill="#00cfff" text-anchor="middle" font-size="11" font-family="monospace">Order: 1→2,3→4,5 (level by level)</text></svg>`,
    complexity:[{badge:'yellow',big:'O(n)',label:'DFS/BFS',desc:'Visit every node once'},{badge:'green',big:'O(log n)',label:'BST SEARCH',desc:'Balanced BST cuts in half each level'}],
    meterWidth:'82%',
    code:{python:`<span class="cm"># TREES — DFS TEMPLATE</span>
<span class="cm"># TIME: O(n) | SPACE: O(h) where h=height</span>

<span class="kw">def</span> <span class="fn">dfs</span>(node):
    <span class="kw">if not</span> node: <span class="kw">return</span> <span class="nm">0</span>  <span class="cm"># Base case</span>
    left = <span class="fn">dfs</span>(node.left)
    right = <span class="fn">dfs</span>(node.right)
    <span class="kw">return</span> <span class="nm">1</span> + <span class="fn">max</span>(left, right)

<span class="cm"># ─── Maximum Depth of Binary Tree ───</span>
<span class="kw">def</span> <span class="fn">maxDepth</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> <span class="nm">0</span>
    <span class="kw">return</span> <span class="nm">1</span> + <span class="fn">max</span>(<span class="fn">maxDepth</span>(root.left), <span class="fn">maxDepth</span>(root.right))`,csharp:`<span class="cm">// TREES — DFS TEMPLATE</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">MaxDepth</span>(<span class="tp">TreeNode</span> root) {
    <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> <span class="nm">0</span>;
    <span class="kw">return</span> <span class="nm">1</span> + Math.Max(<span class="fn">MaxDepth</span>(root.left), <span class="fn">MaxDepth</span>(root.right));
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// TREES / DFS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Depth, height, path sum, validate BST</span>
<span class="cm">// TIME: O(n) | SPACE: O(h) where h = height</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// DFS TEMPLATE — postorder (left, right, combine)</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">dfs</span>(<span class="tp">TreeNode</span> node) {
    <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="nm">0</span>;  <span class="cm">// Base case</span>
    <span class="tp">int</span> left = <span class="fn">dfs</span>(node.left);     <span class="cm">// Recurse left</span>
    <span class="tp">int</span> right = <span class="fn">dfs</span>(node.right);   <span class="cm">// Recurse right</span>
    <span class="kw">return</span> <span class="nm">1</span> + Math.max(left, right); <span class="cm">// Combine</span>
}

<span class="cm">// ─── REAL EXAMPLE: Maximum Depth ───</span>
<span class="cm">// Input: [3,9,20,null,null,15,7]  Output: 3</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">maxDepth</span>(<span class="tp">TreeNode</span> root) {
    <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> <span class="nm">0</span>;
    <span class="kw">return</span> <span class="nm">1</span> + Math.max(<span class="fn">maxDepth</span>(root.left), <span class="fn">maxDepth</span>(root.right));
}

<span class="cm">// ─── BONUS: Invert Binary Tree ───</span>
<span class="kw">public</span> <span class="tp">TreeNode</span> <span class="fn">invertTree</span>(<span class="tp">TreeNode</span> root) {
    <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return null</span>;
    <span class="cm">// Swap left and right children</span>
    <span class="tp">TreeNode</span> temp = root.left;
    root.left = <span class="fn">invertTree</span>(root.right);
    root.right = <span class="fn">invertTree</span>(temp);
    <span class="kw">return</span> root;
}`},
    memoryHack:{
      oneSentence:'For every tree node: check null, recurse left, recurse right, combine — that is the ENTIRE template.',
      flowchart:{
        nodes:[
          {id:'start',label:'Enter node',type:'start',x:290,y:20},
          {id:'base',label:'node == null?',type:'decision',x:290,y:80},
          {id:'ret0',label:'Return 0',type:'end',x:100,y:80},
          {id:'left',label:'Recurse left',type:'action',x:200,y:155},
          {id:'right',label:'Recurse right',type:'action',x:380,y:155},
          {id:'combine',label:'1+max(L,R)',type:'action',x:290,y:220},
          {id:'ret',label:'Return result',type:'end',x:290,y:245}
        ],
        edges:[
          {from:'start',to:'base',label:''},
          {from:'base',to:'ret0',label:'YES'},
          {from:'base',to:'left',label:'NO'},
          {from:'left',to:'right',label:''},
          {from:'right',to:'combine',label:''},
          {from:'combine',to:'ret',label:''}
        ]
      },
      annotatedCode:[
        {line:'int maxDepth(TreeNode root) {',stepId:'start',note:'DFS postorder traversal',color:'#5a5f70'},
        {line:'    if (root == null) return 0;',stepId:'base',note:'Base case: null node = depth 0',color:'#ffd600'},
        {line:'    int left = maxDepth(root.left);',stepId:'left',note:'Get left subtree depth',color:'#a78bfa'},
        {line:'    int right = maxDepth(root.right);',stepId:'right',note:'Get right subtree depth',color:'#a78bfa'},
        {line:'    return 1 + Math.max(left, right);',stepId:'combine',note:'Add myself to deeper branch',color:'#00ff88'},
        {line:'}',stepId:'combine',note:'',color:'#5a5f70'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'Call maxDepth(3) → recurse left to node 9',annotation:'Start at root 3, go left first'},
        {label:'Step 2',art:'maxDepth(9) → left=null→0, right=null→0 → return 1',annotation:'Node 9 is leaf, returns 1'},
        {label:'Step 3',art:'maxDepth(20) → left(15)=1, right(7)=1 → return 2',annotation:'Node 20: 1+max(1,1)=2'},
        {label:'Step 4',art:'Back at root 3: left=1, right=2 → return 3',annotation:'Root: 1+max(1,2)=3. Final answer!'}
      ],
      variations:[
        {name:'Max Depth',desc:'Recurse left/right, return 1+max',problem:'Maximum Depth (#104)'},
        {name:'Invert Binary Tree',desc:'Swap left/right at each node recursively',problem:'Invert Binary Tree (#226)'},
        {name:'Same Tree',desc:'Compare both trees node by node in parallel',problem:'Same Tree (#100)'}
      ],
      title:'Trees: DFS Recursion',
      mnemonic:'BASE → RECURSE LEFT → RECURSE RIGHT → COMBINE',
      steps:['Check null base case','Recurse left','Recurse right','Combine and return'],
      why:'Tree problems decompose naturally: solve children, combine at parent.'
    },
    cheat:{trigger:'depth, height, path sum, validate BST, level order',firstLine:'void dfs(TreeNode node) { if (node == null) return; }',gotcha:'Forgetting the base case (None/null check)',pitch:"I'll use DFS recursion, asking each subtree for its answer and combining at the parent.",
      snippet: `<span class="cm">// WHY recursion? Each node delegates to its children — trust the subtree</span>
<span class="kw">int</span> <span class="fn">maxDepth</span>(<span class="tp">TreeNode</span> node) {
    <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="nm">0</span>;  <span class="cm">// base case</span>
    <span class="kw">int</span> L = <span class="fn">maxDepth</span>(node.left), R = <span class="fn">maxDepth</span>(node.right);
    <span class="kw">return</span> Math.<span class="fn">max</span>(L, R) + <span class="nm">1</span>;  <span class="cm">// combine + count this node</span>
}`}
  },
  {
    icon:'⛏️', name:'Heap / Priority Queue', accent:'#fbbf24',
    tagline:'Always get the min or max in O(log n)',
    hook:"Imagine an emergency room. People don't get helped in the order they arrive — the sickest person ALWAYS goes first! A heap is like a magical line that automatically puts the most important item at the front. Adding someone? They slide into the right spot. Need the most urgent? Grab from the front instantly!",
    svg:`<svg viewBox="0 0 600 280" style="max-height:280px;width:100%"><style>@keyframes hp-pulse{0%,100%{stroke-width:2}50%{stroke-width:4}} @keyframes hp-ins{0%{opacity:0;transform:translateY(30px)}50%{opacity:1;transform:translateY(0)}}</style><rect width="600" height="280" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Min-Heap: Root is ALWAYS the minimum</text><circle cx="300" cy="65" r="22" fill="rgba(251,191,36,.15)" stroke="#fbbf24" stroke-width="3" style="animation:hp-pulse 2s infinite"/><text x="300" y="71" fill="#fbbf24" text-anchor="middle" font-size="16" font-weight="bold">1</text><text x="345" y="55" fill="#00ff88" font-size="10" font-family="monospace">← MIN</text><line x1="283" y1="83" x2="220" y2="115" stroke="#fbbf24"/><line x1="317" y1="83" x2="380" y2="115" stroke="#fbbf24"/><circle cx="220" cy="135" r="20" fill="#1a1d2e" stroke="#fbbf24"/><text x="220" y="141" fill="#fbbf24" text-anchor="middle" font-size="14">3</text><circle cx="380" cy="135" r="20" fill="#1a1d2e" stroke="#fbbf24"/><text x="380" y="141" fill="#fbbf24" text-anchor="middle" font-size="14">5</text><line x1="205" y1="153" x2="170" y2="180" stroke="#fbbf24"/><line x1="235" y1="153" x2="270" y2="180" stroke="#fbbf24"/><circle cx="170" cy="200" r="18" fill="#1a1d2e" stroke="#4a5268"/><text x="170" y="205" fill="#e8eaf0" text-anchor="middle" font-size="13">7</text><circle cx="270" cy="200" r="18" fill="#1a1d2e" stroke="#4a5268"/><text x="270" y="205" fill="#e8eaf0" text-anchor="middle" font-size="13">9</text><rect x="50" y="235" width="500" height="30" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="255" fill="#fbbf24" text-anchor="middle" font-size="11" font-family="monospace">Insert: bubble UP | Extract-min: swap root with last, sink DOWN</text></svg>`,
    complexity:[{badge:'yellow',big:'O(n log n)',label:'SORT + PICK K',desc:'Sort everything then take k elements'},{badge:'green',big:'O(n log k)',label:'HEAP SIZE K',desc:'Maintain heap of size k for efficiency'}],
    meterWidth:'85%',
    code:{python:`<span class="cm"># HEAP — THE TEMPLATE</span>
<span class="cm"># TIME: O(n log k) | SPACE: O(k)</span>
<span class="kw">import</span> heapq

<span class="kw">def</span> <span class="fn">kth_largest</span>(nums, k):
    <span class="cm"># Min-heap of size k = kth largest on top</span>
    heap = []
    <span class="kw">for</span> num <span class="kw">in</span> nums:
        heapq.heappush(heap, num)
        <span class="kw">if</span> <span class="fn">len</span>(heap) &gt; k:
            heapq.heappop(heap)  <span class="cm"># Remove smallest</span>
    <span class="kw">return</span> heap[<span class="nm">0</span>]  <span class="cm"># kth largest</span>`,csharp:`<span class="cm">// HEAP TEMPLATE</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">KthLargest</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> k) {
    <span class="kw">var</span> heap = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;<span class="tp">int</span>,<span class="tp">int</span>&gt;();
    <span class="kw">foreach</span> (<span class="tp">int</span> n <span class="kw">in</span> nums) {
        heap.Enqueue(n, n);
        <span class="kw">if</span> (heap.Count &gt; k) heap.Dequeue();
    }
    <span class="kw">return</span> heap.Peek();
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// HEAP / PRIORITY QUEUE — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Kth largest/smallest, median, merge k sorted</span>
<span class="cm">// TIME: O(n log k) | SPACE: O(k)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// HEAP TEMPLATE — kth largest using min-heap</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">kthLargest</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> k) {
    <span class="cm">// SETUP: Min-heap keeps the k largest elements</span>
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">Integer</span>&gt; heap = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;();

    <span class="kw">for</span> (<span class="tp">int</span> n : nums) {
        heap.offer(n);             <span class="cm">// Push element</span>
        <span class="kw">if</span> (heap.size() &gt; k)       <span class="cm">// Overflow? Evict smallest</span>
            heap.poll();
    }
    <span class="kw">return</span> heap.peek();           <span class="cm">// Root = kth largest</span>
}

<span class="cm">// ─── REAL EXAMPLE: Top K Frequent Elements ───</span>
<span class="cm">// Input: nums=[1,1,1,2,2,3], k=2  Output: [1,2]</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">topKFrequent</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> k) {
    <span class="cm">// Step 1: Count frequencies</span>
    <span class="tp">Map</span>&lt;<span class="tp">Integer</span>,<span class="tp">Integer</span>&gt; freq = <span class="kw">new</span> <span class="tp">HashMap</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="tp">int</span> n : nums) freq.merge(n, <span class="nm">1</span>, Integer::sum);

    <span class="cm">// Step 2: Min-heap by frequency, keep top k</span>
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">Integer</span>&gt; pq = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;(
        (a, b) -&gt; freq.get(a) - freq.get(b));
    <span class="kw">for</span> (<span class="tp">int</span> key : freq.keySet()) {
        pq.offer(key);
        <span class="kw">if</span> (pq.size() &gt; k) pq.poll();
    }

    <span class="cm">// Step 3: Collect results</span>
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[k];
    <span class="kw">for</span> (<span class="tp">int</span> i = k - <span class="nm">1</span>; i &gt;= <span class="nm">0</span>; i--) result[i] = pq.poll();
    <span class="kw">return</span> result;
}`},
    memoryHack:{
      oneSentence:'Keep a min-heap of size K; the smallest survivor is your Kth largest.',
      flowchart:{
        nodes:[
          {id:'init',label:'heap = []',type:'start',x:290,y:20},
          {id:'loop',label:'for each num',type:'action',x:290,y:75},
          {id:'push',label:'push num',type:'action',x:290,y:130},
          {id:'check',label:'len > k?',type:'decision',x:290,y:185},
          {id:'pop',label:'pop smallest',type:'action',x:480,y:185},
          {id:'ret',label:'return heap[0]',type:'end',x:290,y:240}
        ],
        edges:[
          {from:'init',to:'loop',label:''},
          {from:'loop',to:'push',label:''},
          {from:'push',to:'check',label:''},
          {from:'check',to:'pop',label:'YES'},
          {from:'check',to:'loop',label:'NO'},
          {from:'pop',to:'loop',label:''},
          {from:'loop',to:'ret',label:''}
        ]
      },
      annotatedCode:[
        {line:'int findKthLargest(int[] nums, int k) {',stepId:'init',note:'Find kth largest element',color:'#00cfff'},
        {line:'    PriorityQueue<Integer> heap = new PriorityQueue<>();',stepId:'init',note:'Min-heap holds top-k',color:'#00cfff'},
        {line:'    for (int num : nums) {',stepId:'loop',note:'Process each number once',color:'#a78bfa'},
        {line:'        heap.offer(num);',stepId:'push',note:'Add number to heap',color:'#a78bfa'},
        {line:'        if (heap.size() > k)',stepId:'check',note:'Heap exceeds size k?',color:'#ffd600'},
        {line:'            heap.poll();',stepId:'pop',note:'Evict smallest — not top-k',color:'#ff4d6d'},
        {line:'    }',stepId:'loop',note:'',color:'#a78bfa'},
        {line:'    return heap.peek();',stepId:'ret',note:'Min of top-k = kth largest',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'push 3 → heap=[3] (size 1 ≤ 2)',annotation:'k=2. Heap has room'},
        {label:'Step 2',art:'push 2 → heap=[2,3] (size 2 ≤ 2)',annotation:'At capacity k=2'},
        {label:'Step 3',art:'push 1 → heap=[1,2,3] → pop 1 → [2,3]',annotation:'1 evicted — too small for top-2'},
        {label:'Step 4',art:'push 5 → [2,3,5] → pop 2 → [3,5]',annotation:'2 evicted; top-2 now 5 and 3'},
        {label:'Step 5',art:'push 6 → pop 3 → [5,6]. push 4 → pop 4 → [5,6]',annotation:'3 and 4 both evicted'},
        {label:'Result',art:'heap=[5,6] → return heap[0]=5 ✓ 2nd largest',annotation:'Min of top-2 is the kth largest: 5'}
      ],
      variations:[
        {name:'Kth Largest Element',desc:'Min-heap of size k; root is kth largest',problem:'Kth Largest Element (#215)'},
        {name:'Top K Frequent',desc:'Count freqs, then heap top k by frequency',problem:'Top K Frequent Elements (#347)'},
        {name:'Merge K Sorted Lists',desc:'Push heads into min-heap, pop smallest, push its next',problem:'Merge k Sorted Lists (#23)'}
      ],
      title:'Heap / Priority Queue',
      mnemonic:'PUSH → OVERFLOW? → EVICT SMALLEST → SURVIVOR WINS',
      steps:['Init empty min-heap','Push each element','If size > k, pop smallest','heap[0] is kth largest'],
      why:'Min-heap of size k maintains the k largest seen. Root is always the smallest of those k = kth largest overall.'
    },
    cheat:{trigger:'k largest/smallest, median of stream, merge k sorted, schedule',firstLine:'PriorityQueue<Integer> heap = new PriorityQueue<>(); heap.offer(val);',gotcha:'PriorityQueue is min-heap by default — use Collections.reverseOrder() for max-heap',pitch:"I'll maintain a size-k heap, giving me the kth element in O(n log k).",
      snippet: `<span class="cm">// WHY min-heap of size k? It auto-ejects smallest → top is kth largest</span>
<span class="tp">PriorityQueue</span>&lt;<span class="tp">Integer</span>&gt; heap = <span class="kw">new</span> <span class="fn">PriorityQueue</span>&lt;&gt;();  <span class="cm">// min-heap</span>
<span class="kw">for</span> (<span class="kw">int</span> num : nums) {
    heap.<span class="fn">offer</span>(num);
    <span class="kw">if</span> (heap.<span class="fn">size</span>() &gt; k) heap.<span class="fn">poll</span>();  <span class="cm">// evict smallest, keep top k</span>
}
<span class="kw">return</span> heap.<span class="fn">peek</span>();  <span class="cm">// smallest of top-k = kth largest</span>`}
  },
  {
    icon:'🌿', name:'Backtracking', accent:'#e879f9',
    tagline:'Try everything, undo when stuck',
    hook:"Imagine a maze with lots of forks. You pick left — dead end! So you WALK BACK to the fork and try right. That's backtracking: try a path, if it fails, UNDO your choice and try the next one. It's like having an 'undo' button for decisions. You explore every possible path but quit early when you see a dead end.",
    svg:`<svg viewBox="0 0 600 280" style="max-height:280px;width:100%"><style>@keyframes bt-go{0%,100%{fill:rgba(232,121,249,.2)}50%{fill:rgba(232,121,249,.5)}} @keyframes bt-fail{0%,100%{fill:rgba(255,77,109,.1)}50%{fill:rgba(255,77,109,.4)}} @keyframes bt-ok{0%,100%{fill:rgba(0,255,136,.15)}50%{fill:rgba(0,255,136,.4)}}</style><rect width="600" height="280" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Backtracking: Decision Tree</text><circle cx="300" cy="55" r="18" fill="#1a1d2e" stroke="#e879f9" stroke-width="2" style="animation:bt-go 3s infinite"/><text x="300" y="60" fill="#e879f9" text-anchor="middle" font-size="12">START</text><line x1="285" y1="70" x2="200" y2="105" stroke="#00ff88" stroke-width="2"/><line x1="315" y1="70" x2="400" y2="105" stroke="#4a5268"/><circle cx="200" cy="120" r="16" fill="#1a1d2e" stroke="#00ff88" style="animation:bt-ok 3s infinite .5s"/><text x="200" y="125" fill="#00ff88" text-anchor="middle" font-size="11">A</text><circle cx="400" cy="120" r="16" fill="#1a1d2e" stroke="#4a5268"/><text x="400" y="125" fill="#4a5268" text-anchor="middle" font-size="11">B</text><line x1="188" y1="134" x2="140" y2="165" stroke="#ff4d6d" stroke-width="2"/><line x1="212" y1="134" x2="260" y2="165" stroke="#00ff88" stroke-width="2"/><circle cx="140" cy="180" r="15" fill="#1a1d2e" stroke="#ff4d6d" style="animation:bt-fail 3s infinite 1s"/><text x="140" y="185" fill="#ff4d6d" text-anchor="middle" font-size="10">DEAD</text><text x="140" y="210" fill="#ff4d6d" text-anchor="middle" font-size="9" font-family="monospace">↩ backtrack!</text><circle cx="260" cy="180" r="15" fill="#1a1d2e" stroke="#00ff88" style="animation:bt-ok 3s infinite 1.5s"/><text x="260" y="185" fill="#00ff88" text-anchor="middle" font-size="10">GOAL ✓</text><rect x="50" y="235" width="500" height="30" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="255" fill="#e879f9" text-anchor="middle" font-size="11" font-family="monospace">Choose → Explore → Undo (if dead end) → Try next</text></svg>`,
    complexity:[{badge:'red',big:'O(n!)',label:'PERMUTATIONS',desc:'All orderings'},{badge:'red',big:'O(2ⁿ)',label:'SUBSETS',desc:'Include or exclude each item'}],
    meterWidth:'40%',
    code:{python:`<span class="cm"># BACKTRACKING — THE TEMPLATE</span>
<span class="cm"># TIME: O(2^n) or O(n!) | SPACE: O(n)</span>

<span class="kw">def</span> <span class="fn">backtrack</span>(start, path, result, nums):
    result.append(path[:])  <span class="cm"># Save copy of current path</span>

    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(start, <span class="fn">len</span>(nums)):
        path.append(nums[i])       <span class="cm"># CHOOSE</span>
        <span class="fn">backtrack</span>(i + <span class="nm">1</span>, path, result, nums)  <span class="cm"># EXPLORE</span>
        path.pop()                  <span class="cm"># UNDO (backtrack!)</span>

<span class="cm"># ─── Subsets ───</span>
<span class="kw">def</span> <span class="fn">subsets</span>(nums):
    result = []
    <span class="fn">backtrack</span>(<span class="nm">0</span>, [], result, nums)
    <span class="kw">return</span> result`,csharp:`<span class="cm">// BACKTRACKING TEMPLATE</span>
<span class="kw">public</span> <span class="tp">IList</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt; <span class="fn">Subsets</span>(<span class="tp">int</span>[] nums) {
    <span class="kw">var</span> result = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt;();
    <span class="fn">Backtrack</span>(<span class="nm">0</span>, <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;(), result, nums);
    <span class="kw">return</span> result;
}
<span class="kw">void</span> <span class="fn">Backtrack</span>(<span class="tp">int</span> start, <span class="tp">List</span>&lt;<span class="tp">int</span>&gt; path, <span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt; res, <span class="tp">int</span>[] nums) {
    res.Add(<span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;(path));
    <span class="kw">for</span> (<span class="tp">int</span> i = start; i &lt; nums.Length; i++) {
        path.Add(nums[i]);
        <span class="fn">Backtrack</span>(i+<span class="nm">1</span>, path, res, nums);
        path.RemoveAt(path.Count-<span class="nm">1</span>);
    }
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// BACKTRACKING — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: All combinations, permutations, subsets, N-Queens</span>
<span class="cm">// TIME: O(2^n) or O(n!) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// BACKTRACKING TEMPLATE — Subsets</span>

<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; <span class="fn">subsets</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="fn">backtrack</span>(<span class="nm">0</span>, <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(), result, nums);
    <span class="kw">return</span> result;
}

<span class="kw">void</span> <span class="fn">backtrack</span>(<span class="tp">int</span> start, <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; path,
               <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; res, <span class="tp">int</span>[] nums) {
    res.add(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(path)); <span class="cm">// SAVE: snapshot of current path</span>

    <span class="kw">for</span> (<span class="tp">int</span> i = start; i &lt; nums.length; i++) {
        path.add(nums[i]);                 <span class="cm">// CHOOSE: pick nums[i]</span>
        <span class="fn">backtrack</span>(i + <span class="nm">1</span>, path, res, nums); <span class="cm">// EXPLORE: recurse deeper</span>
        path.remove(path.size() - <span class="nm">1</span>);      <span class="cm">// UNCHOOSE: undo for next</span>
    }
}

<span class="cm">// ─── REAL EXAMPLE: Permutations ───</span>
<span class="cm">// Input: [1,2,3]  Output: [[1,2,3],[1,3,2],[2,1,3],...]</span>

<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; <span class="fn">permute</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="fn">permuteHelper</span>(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(), result, nums, <span class="kw">new</span> <span class="tp">boolean</span>[nums.length]);
    <span class="kw">return</span> result;
}

<span class="kw">void</span> <span class="fn">permuteHelper</span>(<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; path, <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; res,
                   <span class="tp">int</span>[] nums, <span class="tp">boolean</span>[] used) {
    <span class="kw">if</span> (path.size() == nums.length) {
        res.add(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(path)); <span class="cm">// Full permutation found</span>
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++) {
        <span class="kw">if</span> (used[i]) <span class="kw">continue</span>;     <span class="cm">// Skip already-used elements</span>
        used[i] = <span class="kw">true</span>;
        path.add(nums[i]);            <span class="cm">// CHOOSE</span>
        <span class="fn">permuteHelper</span>(path, res, nums, used); <span class="cm">// EXPLORE</span>
        path.remove(path.size() - <span class="nm">1</span>); <span class="cm">// UNCHOOSE</span>
        used[i] = <span class="kw">false</span>;
    }
}`},
    memoryHack:{
      oneSentence:'Choose, explore, unchoose — build every path by trying then undoing each decision.',
      flowchart:{
        nodes:[
          {id:'save',label:'Save path',type:'start',x:290,y:20},
          {id:'loop',label:'for i in range',type:'action',x:290,y:80},
          {id:'choose',label:'CHOOSE: append',type:'action',x:100,y:140},
          {id:'explore',label:'EXPLORE: recurse',type:'action',x:290,y:140},
          {id:'unchoose',label:'UNCHOOSE: pop',type:'action',x:480,y:140},
          {id:'next',label:'Next i',type:'action',x:480,y:80},
          {id:'done',label:'return result',type:'end',x:290,y:220}
        ],
        edges:[
          {from:'save',to:'loop',label:''},
          {from:'loop',to:'choose',label:''},
          {from:'choose',to:'explore',label:''},
          {from:'explore',to:'unchoose',label:''},
          {from:'unchoose',to:'next',label:''},
          {from:'next',to:'loop',label:''},
          {from:'loop',to:'done',label:''}
        ]
      },
      annotatedCode:[
        {line:'List<List<Integer>> subsets(int[] nums) {',stepId:'save',note:'Generate all subsets',color:'#00cfff'},
        {line:'    List<List<Integer>> result = new ArrayList<>();',stepId:'save',note:'Collect all subsets',color:'#00cfff'},
        {line:'    backtrack(0, new ArrayList<>(), result, nums);',stepId:'',note:'Start with empty path',color:'#5a5f70'},
        {line:'    return result; }',stepId:'done',note:'All subsets collected',color:'#00ff88'},
        {line:'void backtrack(int start, List<Integer> path, ...) {',stepId:'',note:'Recursive helper',color:'#5a5f70'},
        {line:'    result.add(new ArrayList<>(path));',stepId:'save',note:'Snapshot current path (copy!)',color:'#00ff88'},
        {line:'    for (int i = start; i < nums.length; i++) {',stepId:'loop',note:'Try each remaining element',color:'#a78bfa'},
        {line:'        path.add(nums[i]);     // CHOOSE',stepId:'choose',note:'Add element to subset',color:'#ffd600'},
        {line:'        backtrack(i + 1, path); // EXPLORE',stepId:'explore',note:'Recurse deeper',color:'#ffd600'},
        {line:'        path.remove(path.size()-1); // UNCHOOSE',stepId:'unchoose',note:'Remove — try next option',color:'#ff4d6d'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'backtrack(0,[]) → Save [] → result=[[]]',annotation:'Empty subset saved'},
        {label:'Step 2',art:'CHOOSE 1 → path=[1] → Save [1]',annotation:'Choose 1, explore deeper'},
        {label:'Step 3',art:'CHOOSE 2 → [1,2] → Save → CHOOSE 3 → [1,2,3] → Save',annotation:'Build [1,2] and [1,2,3]'},
        {label:'Step 4',art:'UNCHOOSE 3→[1,2] UNCHOOSE 2→[1] CHOOSE 3→[1,3] Save',annotation:'Backtrack! Pop 3, pop 2, try 3'},
        {label:'Step 5',art:'UNCHOOSE→[] CHOOSE 2→[2] Save CHOOSE 3→[2,3] Save',annotation:'Explore from 2'},
        {label:'Step 6',art:'result=[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]',annotation:'All 8 subsets found'}
      ],
      variations:[
        {name:'Subsets',desc:'Save at every node, choose/explore/unchoose',problem:'Subsets (#78)'},
        {name:'Permutations',desc:'Use visited set instead of start index',problem:'Permutations (#46)'},
        {name:'Combination Sum',desc:'Recurse with i (not i+1) to allow reuse',problem:'Combination Sum (#39)'}
      ],
      title:'Backtracking',
      mnemonic:'SAVE → CHOOSE → EXPLORE → UNCHOOSE → REPEAT',
      steps:['Save current path','CHOOSE: append','EXPLORE: recurse(i+1)','UNCHOOSE: pop'],
      why:'Choose/explore/unchoose visits every branch of the decision tree.'
    },
    cheat:{trigger:'all combinations, permutations, subsets, generate valid, N-Queens',firstLine:'void backtrack(int start, List<Integer> path) {',gotcha:'Forgetting to undo the choice (path.pop()) after recursion',pitch:"I'll use backtracking: make a choice, recurse, then undo the choice to explore all possibilities.",
      snippet: `<span class="cm">// WHY backtrack? Try every choice, undo, try next — exhaustive search</span>
<span class="kw">void</span> <span class="fn">backtrack</span>(<span class="kw">int</span> start, <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; path) {
    result.<span class="fn">add</span>(<span class="kw">new</span> <span class="fn">ArrayList</span>&lt;&gt;(path));  <span class="cm">// record current subset</span>
    <span class="kw">for</span> (<span class="kw">int</span> i = start; i &lt; nums.length; i++) {
        path.<span class="fn">add</span>(nums[i]);           <span class="cm">// CHOOSE</span>
        <span class="fn">backtrack</span>(i + <span class="nm">1</span>, path);     <span class="cm">// EXPLORE</span>
        path.<span class="fn">remove</span>(path.<span class="fn">size</span>()-<span class="nm">1</span>);  <span class="cm">// UNDO</span>
    }
}`}
  },
  {
    icon:'🌲', name:'Tries', accent:'#67e8f9',
    tagline:'Prefix tree — fast string prefix lookups',
    hook:"Imagine a dictionary where words are filed by their letters. Looking up 'CAT': go to the C shelf, then the A drawer, then the T folder — found it! Need all words starting with 'CA'? Go to C→A and everything in that drawer matches. It's like autocomplete on your phone — super fast for finding words by their beginning!",
    svg:`<svg viewBox="0 0 600 260" style="max-height:260px;width:100%"><style>@keyframes tr-ins{0%{stroke-dashoffset:20}100%{stroke-dashoffset:0}}.tr-l{stroke-dasharray:20;animation:tr-ins 2s linear infinite}</style><rect width="600" height="260" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Trie: Storing CAR, CAT, CARD</text><circle cx="300" cy="55" r="16" fill="#1a1d2e" stroke="#67e8f9" stroke-width="2"/><text x="300" y="60" fill="#67e8f9" text-anchor="middle" font-size="12">root</text><line x1="300" y1="71" x2="300" y2="95" stroke="#67e8f9" class="tr-l"/><circle cx="300" cy="112" r="16" fill="#1a1d2e" stroke="#67e8f9" stroke-width="2"/><text x="300" y="117" fill="#67e8f9" text-anchor="middle" font-size="14" font-weight="bold">C</text><line x1="300" y1="128" x2="300" y2="152" stroke="#67e8f9" class="tr-l"/><circle cx="300" cy="168" r="16" fill="#1a1d2e" stroke="#67e8f9" stroke-width="2"/><text x="300" y="173" fill="#67e8f9" text-anchor="middle" font-size="14" font-weight="bold">A</text><line x1="285" y1="182" x2="220" y2="210" stroke="#00ff88" class="tr-l"/><line x1="315" y1="182" x2="380" y2="210" stroke="#a78bfa" class="tr-l"/><circle cx="220" cy="225" r="16" fill="rgba(0,255,136,.15)" stroke="#00ff88" stroke-width="2"/><text x="220" y="230" fill="#00ff88" text-anchor="middle" font-size="14" font-weight="bold">R✓</text><circle cx="380" cy="225" r="16" fill="rgba(167,139,250,.15)" stroke="#a78bfa" stroke-width="2"/><text x="380" y="230" fill="#a78bfa" text-anchor="middle" font-size="14" font-weight="bold">T✓</text><line x1="207" y1="238" x2="170" y2="248" stroke="#fbbf24"/><text x="155" y="255" fill="#fbbf24" font-size="12" font-weight="bold">D✓</text><text x="500" y="100" fill="#4a5268" font-size="11" font-family="monospace">CAR ✓</text><text x="500" y="120" fill="#4a5268" font-size="11" font-family="monospace">CARD ✓</text><text x="500" y="140" fill="#4a5268" font-size="11" font-family="monospace">CAT ✓</text></svg>`,
    complexity:[{badge:'yellow',big:'O(n*m)',label:'BRUTE FORCE',desc:'Compare every word character by character'},{badge:'green',big:'O(m)',label:'TRIE LOOKUP',desc:'m = word length, follow the path'}],
    meterWidth:'88%',
    code:{python:`<span class="cm"># TRIE — THE TEMPLATE</span>

<span class="kw">class</span> <span class="tp">TrieNode</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.children = {}
        self.is_end = <span class="kw">False</span>

<span class="kw">class</span> <span class="tp">Trie</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.root = <span class="tp">TrieNode</span>()

    <span class="kw">def</span> <span class="fn">insert</span>(self, word):
        node = self.root
        <span class="kw">for</span> ch <span class="kw">in</span> word:
            <span class="kw">if</span> ch <span class="kw">not in</span> node.children:
                node.children[ch] = <span class="tp">TrieNode</span>()
            node = node.children[ch]
        node.is_end = <span class="kw">True</span>

    <span class="kw">def</span> <span class="fn">search</span>(self, word):
        node = self.root
        <span class="kw">for</span> ch <span class="kw">in</span> word:
            <span class="kw">if</span> ch <span class="kw">not in</span> node.children: <span class="kw">return False</span>
            node = node.children[ch]
        <span class="kw">return</span> node.is_end`,csharp:`<span class="cm">// TRIE TEMPLATE</span>
<span class="kw">public class</span> <span class="tp">Trie</span> {
    <span class="tp">TrieNode</span> root = <span class="kw">new</span>();
    <span class="kw">public void</span> <span class="fn">Insert</span>(<span class="tp">string</span> word) {
        <span class="kw">var</span> node = root;
        <span class="kw">foreach</span> (<span class="tp">char</span> c <span class="kw">in</span> word) {
            <span class="kw">if</span> (!node.Children.ContainsKey(c))
                node.Children[c] = <span class="kw">new</span> <span class="tp">TrieNode</span>();
            node = node.Children[c];
        }
        node.IsEnd = <span class="kw">true</span>;
    }
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// TRIE — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Prefix search, autocomplete, word dictionary</span>
<span class="cm">// TIME: O(m) per operation | SPACE: O(n*m)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// TRIE TEMPLATE — Insert + Search + StartsWith</span>

<span class="kw">class</span> <span class="tp">TrieNode</span> {
    <span class="tp">TrieNode</span>[] children = <span class="kw">new</span> <span class="tp">TrieNode</span>[<span class="nm">26</span>]; <span class="cm">// 26 lowercase letters</span>
    <span class="tp">boolean</span> isEnd;                          <span class="cm">// Marks end of word</span>
}

<span class="kw">class</span> <span class="tp">Trie</span> {
    <span class="tp">TrieNode</span> root = <span class="kw">new</span> <span class="tp">TrieNode</span>();

    <span class="cm">// INSERT: Walk down, create nodes as needed</span>
    <span class="kw">void</span> <span class="fn">insert</span>(<span class="tp">String</span> word) {
        <span class="tp">TrieNode</span> node = root;
        <span class="kw">for</span> (<span class="tp">char</span> c : word.toCharArray()) {
            <span class="tp">int</span> idx = c - <span class="st">'a'</span>;
            <span class="kw">if</span> (node.children[idx] == <span class="kw">null</span>)
                node.children[idx] = <span class="kw">new</span> <span class="tp">TrieNode</span>();
            node = node.children[idx];
        }
        node.isEnd = <span class="kw">true</span>;
    }

    <span class="cm">// SEARCH: All chars must exist + isEnd flag</span>
    <span class="tp">boolean</span> <span class="fn">search</span>(<span class="tp">String</span> word) {
        <span class="tp">TrieNode</span> node = <span class="fn">findNode</span>(word);
        <span class="kw">return</span> node != <span class="kw">null</span> &amp;&amp; node.isEnd;
    }

    <span class="cm">// STARTS WITH: All prefix chars must exist</span>
    <span class="tp">boolean</span> <span class="fn">startsWith</span>(<span class="tp">String</span> prefix) {
        <span class="kw">return</span> <span class="fn">findNode</span>(prefix) != <span class="kw">null</span>;
    }

    <span class="kw">private</span> <span class="tp">TrieNode</span> <span class="fn">findNode</span>(<span class="tp">String</span> s) {
        <span class="tp">TrieNode</span> node = root;
        <span class="kw">for</span> (<span class="tp">char</span> c : s.toCharArray()) {
            node = node.children[c - <span class="st">'a'</span>];
            <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return null</span>;
        }
        <span class="kw">return</span> node;
    }
}`},
    memoryHack:{
      oneSentence:'Walk the tree one character at a time — create nodes on insert, follow nodes on search.',
      flowchart:{
        nodes:[
          {id:'root',label:'Start at root',type:'start',x:290,y:20},
          {id:'loop',label:'for each char',type:'action',x:290,y:80},
          {id:'check',label:'char in kids?',type:'decision',x:290,y:140},
          {id:'create',label:'Create node',type:'action',x:100,y:140},
          {id:'move',label:'Move to child',type:'action',x:480,y:140},
          {id:'end',label:'Mark/check end',type:'end',x:290,y:220}
        ],
        edges:[
          {from:'root',to:'loop',label:''},
          {from:'loop',to:'check',label:''},
          {from:'check',to:'create',label:'NO'},
          {from:'check',to:'move',label:'YES'},
          {from:'create',to:'move',label:''},
          {from:'move',to:'loop',label:''},
          {from:'loop',to:'end',label:''}
        ]
      },
      annotatedCode:[
        {line:'class TrieNode {',stepId:'root',note:'Each node: children array + end flag',color:'#00cfff'},
        {line:'    TrieNode[] children = new TrieNode[26];',stepId:'root',note:'26 slots for lowercase letters',color:'#00cfff'},
        {line:'    boolean isEnd; }',stepId:'root',note:'True if word ends here',color:'#00cfff'},
        {line:'void insert(String word) {',stepId:'',note:'Insert word into trie',color:'#a78bfa'},
        {line:'    TrieNode node = root;',stepId:'root',note:'Start at root',color:'#a78bfa'},
        {line:'    for (char c : word.toCharArray()) {',stepId:'loop',note:'Walk one char at a time',color:'#a78bfa'},
        {line:'        int idx = c - \'a\';',stepId:'loop',note:'Map char to index 0-25',color:'#a78bfa'},
        {line:'        if (node.children[idx] == null)',stepId:'check',note:'Path missing?',color:'#ffd600'},
        {line:'            node.children[idx] = new TrieNode();',stepId:'create',note:'Create branch',color:'#00ff88'},
        {line:'        node = node.children[idx];',stepId:'move',note:'Advance to child',color:'#a78bfa'},
        {line:'    } node.isEnd = true;',stepId:'end',note:'Mark word end',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'insert("app") → root→a(new)→p(new)→p(new,end=True)',annotation:'Create 3 new nodes, mark end'},
        {label:'Step 2',art:'insert("apple") → root→a→p→p(end)→l(new)→e(new,end)',annotation:'Reuse existing path, extend'},
        {label:'Step 3',art:'search("app") → root→a✓→p✓→p✓ is_end=True → True',annotation:'Follow path, check is_end'},
        {label:'Step 4',art:'search("ap") → root→a✓→p✓ is_end=False → False',annotation:'Path exists but not a word'},
        {label:'Step 5',art:'search("bat") → root→b✗ → return False',annotation:'First char missing, instant fail'}
      ],
      variations:[
        {name:'Implement Trie',desc:'Insert, search, startsWith via children dict + is_end',problem:'Implement Trie (#208)'},
        {name:'Add and Search Word',desc:'Trie with "." wildcard: branch to all children on dot',problem:'Add and Search Words (#211)'},
        {name:'Word Search II',desc:'Build trie of words, DFS board following trie to prune',problem:'Word Search II (#212)'}
      ],
      title:'Tries (Prefix Tree)',
      mnemonic:'CHAR BY CHAR → EXISTS? CREATE OR FOLLOW → MARK END',
      steps:['Start at root','For each char: check children','Missing? Create node','Move to child','Mark is_end'],
      why:'Tries store strings char by char — shared prefixes stored once. O(L) per lookup.'
    },
    cheat:{trigger:'prefix, autocomplete, word dictionary, starts with',firstLine:'class TrieNode { TrieNode[] children = new TrieNode[26]; boolean isEnd; }',gotcha:'Not creating new TrieNode instances — each node needs its own children array',pitch:"I'll build a trie for O(m) prefix lookups, where each node represents a character.",
      snippet: `<span class="cm">// WHY trie? Each node = one character, walk down = O(word length)</span>
<span class="kw">void</span> <span class="fn">insert</span>(<span class="tp">String</span> word) {
    <span class="tp">TrieNode</span> node = root;
    <span class="kw">for</span> (<span class="kw">char</span> c : word.<span class="fn">toCharArray</span>()) {
        <span class="kw">if</span> (node.children[c - <span class="st">'a'</span>] == <span class="kw">null</span>)
            node.children[c - <span class="st">'a'</span>] = <span class="kw">new</span> <span class="fn">TrieNode</span>();
        node = node.children[c - <span class="st">'a'</span>];  <span class="cm">// walk down</span>
    }
    node.isEnd = <span class="kw">true</span>;  <span class="cm">// mark complete word</span>
}`}
  },
  {
    icon:'🗺️', name:'Graphs — BFS/DFS', accent:'#86efac',
    tagline:'DFS/BFS on connected nodes',
    hook:"Think of a social network. BFS finds everyone 1 friend away first, then 2 friends away — like ripples spreading in a pond. DFS picks one friend chain and follows it ALL the way to the end before coming back. Grids ARE graphs too — each cell is connected to its neighbors. Once you see that, 'number of islands' is just 'count connected groups'!",
    svg:`<svg viewBox="0 0 600 260" style="max-height:260px;width:100%"><style>@keyframes gwave1{0%,100%{fill:#1a1d2e}50%{fill:rgba(134,239,172,.3)}} @keyframes gwave2{0%,100%{fill:#1a1d2e}50%{fill:rgba(134,239,172,.2)}}</style><rect width="600" height="260" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">BFS: Ripple outward from start</text><rect x="150" y="40" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1.5s"/><rect x="180" y="40" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1s"/><rect x="210" y="40" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave1 3s infinite .5s"/><rect x="240" y="40" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave1 3s infinite 1s"/><rect x="270" y="40" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1.5s"/><rect x="150" y="70" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1s"/><rect x="180" y="70" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave1 3s infinite .5s"/><rect x="210" y="70" width="30" height="30" fill="rgba(0,255,136,.3)" stroke="#00ff88" rx="2" stroke-width="2"/><text x="225" y="90" fill="#00ff88" text-anchor="middle" font-size="10" font-weight="bold">S</text><rect x="240" y="70" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave1 3s infinite .5s"/><rect x="270" y="70" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1s"/><rect x="150" y="100" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1.5s"/><rect x="180" y="100" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave1 3s infinite 1s"/><rect x="210" y="100" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave1 3s infinite .5s"/><rect x="240" y="100" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1s"/><rect x="270" y="100" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2" style="animation:gwave2 3s infinite 1.5s"/><text x="380" y="70" fill="#86efac" font-size="11" font-family="monospace">Wave 1: distance=1</text><text x="380" y="90" fill="#4ade80" font-size="11" font-family="monospace">Wave 2: distance=2</text><text x="380" y="110" fill="#22c55e" font-size="11" font-family="monospace">Wave 3: distance=3</text><rect x="50" y="150" width="500" height="90" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="175" fill="#86efac" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">BFS = Queue (FIFO) → Shortest path</text><text x="300" y="195" fill="#a78bfa" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">DFS = Stack/Recursion → Connectivity</text><text x="300" y="225" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Grid cell (r,c) = graph node. Neighbors = edges.</text></svg>`,
    complexity:[{badge:'yellow',big:'O(V+E)',label:'BFS/DFS',desc:'Visit every vertex and edge once'},{badge:'green',big:'O(V·α(V))',label:'UNION-FIND',desc:'Near-constant per operation with path compression'}],
    meterWidth:'82%',
    code:{python:`<span class="cm"># GRAPH BFS — THE TEMPLATE</span>
<span class="cm"># TIME: O(V+E) | SPACE: O(V)</span>
<span class="kw">from</span> collections <span class="kw">import</span> deque

<span class="kw">def</span> <span class="fn">bfs</span>(grid, sr, sc):
    rows, cols = <span class="fn">len</span>(grid), <span class="fn">len</span>(grid[<span class="nm">0</span>])
    visited = <span class="fn">set</span>()
    queue = deque([(sr, sc)])
    visited.add((sr, sc))

    <span class="kw">while</span> queue:
        r, c = queue.popleft()
        <span class="kw">for</span> dr, dc <span class="kw">in</span> [(<span class="nm">1</span>,<span class="nm">0</span>),(-<span class="nm">1</span>,<span class="nm">0</span>),(<span class="nm">0</span>,<span class="nm">1</span>),(<span class="nm">0</span>,-<span class="nm">1</span>)]:
            nr, nc = r+dr, c+dc
            <span class="kw">if</span> <span class="nm">0</span>&lt;=nr&lt;rows <span class="kw">and</span> <span class="nm">0</span>&lt;=nc&lt;cols <span class="kw">and</span> (nr,nc) <span class="kw">not in</span> visited:
                visited.add((nr,nc))  <span class="cm"># Mark BEFORE pushing!</span>
                queue.append((nr,nc))

<span class="cm"># ─── Number of Islands ───</span>
<span class="kw">def</span> <span class="fn">numIslands</span>(grid):
    count = <span class="nm">0</span>
    <span class="kw">for</span> r <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(grid)):
        <span class="kw">for</span> c <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(grid[<span class="nm">0</span>])):
            <span class="kw">if</span> grid[r][c] == <span class="st">"1"</span>:
                <span class="fn">bfs</span>(grid, r, c)  <span class="cm"># Flood fill island</span>
                count += <span class="nm">1</span>
    <span class="kw">return</span> count`,csharp:`<span class="cm">// GRAPH BFS — Number of Islands</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">NumIslands</span>(<span class="tp">char</span>[][] grid) {
    <span class="tp">int</span> count = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> r=<span class="nm">0</span>; r&lt;grid.Length; r++)
        <span class="kw">for</span> (<span class="tp">int</span> c=<span class="nm">0</span>; c&lt;grid[<span class="nm">0</span>].Length; c++)
            <span class="kw">if</span> (grid[r][c]==<span class="st">'1'</span>) { <span class="fn">BFS</span>(grid,r,c); count++; }
    <span class="kw">return</span> count;
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// GRAPHS / BFS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Grid traversal, connected components, shortest path</span>
<span class="cm">// TIME: O(V+E) | SPACE: O(V)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// BFS TEMPLATE — Grid traversal</span>
<span class="kw">public</span> <span class="kw">void</span> <span class="fn">bfs</span>(<span class="tp">char</span>[][] grid, <span class="tp">int</span> sr, <span class="tp">int</span> sc) {
    <span class="tp">int</span> rows = grid.length, cols = grid[<span class="nm">0</span>].length;
    <span class="tp">Queue</span>&lt;<span class="tp">int</span>[]&gt; queue = <span class="kw">new</span> <span class="tp">LinkedList</span>&lt;&gt;();
    queue.offer(<span class="kw">new</span> <span class="tp">int</span>[]{sr, sc});
    grid[sr][sc] = <span class="st">'0'</span>;              <span class="cm">// Mark BEFORE pushing!</span>

    <span class="tp">int</span>[][] dirs = {{<span class="nm">1</span>,<span class="nm">0</span>},{-<span class="nm">1</span>,<span class="nm">0</span>},{<span class="nm">0</span>,<span class="nm">1</span>},{<span class="nm">0</span>,-<span class="nm">1</span>}};
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="tp">int</span>[] cell = queue.poll();     <span class="cm">// FIFO — level by level</span>
        <span class="kw">for</span> (<span class="tp">int</span>[] d : dirs) {
            <span class="tp">int</span> nr = cell[<span class="nm">0</span>]+d[<span class="nm">0</span>], nc = cell[<span class="nm">1</span>]+d[<span class="nm">1</span>];
            <span class="kw">if</span> (nr&gt;=<span class="nm">0</span> &amp;&amp; nr&lt;rows &amp;&amp; nc&gt;=<span class="nm">0</span> &amp;&amp; nc&lt;cols
                &amp;&amp; grid[nr][nc]==<span class="st">'1'</span>) {
                grid[nr][nc] = <span class="st">'0'</span>;          <span class="cm">// Mark visited</span>
                queue.offer(<span class="kw">new</span> <span class="tp">int</span>[]{nr, nc});
            }
        }
    }
}

<span class="cm">// ─── REAL EXAMPLE: Number of Islands ───</span>
<span class="cm">// Input: [["1","1","0"],["1","1","0"],["0","0","1"]]  Output: 2</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">numIslands</span>(<span class="tp">char</span>[][] grid) {
    <span class="tp">int</span> count = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> r = <span class="nm">0</span>; r &lt; grid.length; r++)
        <span class="kw">for</span> (<span class="tp">int</span> c = <span class="nm">0</span>; c &lt; grid[<span class="nm">0</span>].length; c++)
            <span class="kw">if</span> (grid[r][c] == <span class="st">'1'</span>) {
                <span class="fn">bfs</span>(grid, r, c);  <span class="cm">// Flood fill island</span>
                count++;               <span class="cm">// One island consumed</span>
            }
    <span class="kw">return</span> count;
}`},
    memoryHack:{
      oneSentence:'Find an unvisited node, flood-fill everything it touches, count one component.',
      flowchart:{
        nodes:[
          {id:'scan',label:'Scan grid',type:'start',x:80,y:20},
          {id:'found',label:'cell == "1"?',type:'decision',x:80,y:90},
          {id:'dfs',label:'DFS flood fill',type:'action',x:290,y:90},
          {id:'mark',label:'Mark "0"',type:'action',x:290,y:155},
          {id:'dirs',label:'Explore 4 dirs',type:'action',x:480,y:155},
          {id:'count',label:'count++',type:'action',x:480,y:90},
          {id:'skip',label:'Skip cell',type:'action',x:80,y:175},
          {id:'ret',label:'return count',type:'end',x:290,y:235}
        ],
        edges:[
          {from:'scan',to:'found',label:''},
          {from:'found',to:'dfs',label:'YES'},
          {from:'found',to:'skip',label:'NO'},
          {from:'dfs',to:'mark',label:''},
          {from:'mark',to:'dirs',label:''},
          {from:'dirs',to:'dfs',label:''},
          {from:'dfs',to:'count',label:''},
          {from:'count',to:'scan',label:''},
          {from:'skip',to:'scan',label:''},
          {from:'scan',to:'ret',label:''}
        ]
      },
      annotatedCode:[
        {line:'int numIslands(char[][] grid) {',stepId:'scan',note:'Count connected components of 1s',color:'#00cfff'},
        {line:'    int count = 0;',stepId:'scan',note:'Island counter',color:'#00cfff'},
        {line:'    for (int r = 0; r < grid.length; r++)',stepId:'scan',note:'Scan every row',color:'#a78bfa'},
        {line:'        for (int c = 0; c < grid[0].length; c++)',stepId:'scan',note:'Scan every column',color:'#a78bfa'},
        {line:'            if (grid[r][c] == \'1\') {',stepId:'found',note:'Found unvisited land?',color:'#ffd600'},
        {line:'                bfs(grid, r, c);',stepId:'dfs',note:'Flood fill the island',color:'#ff4d6d'},
        {line:'                count++;',stepId:'count',note:'One island consumed',color:'#00ff88'},
        {line:'    } return count; }',stepId:'ret',note:'Total islands',color:'#00ff88'},
        {line:'void bfs(char[][] grid, int r, int c) {',stepId:'dfs',note:'BFS flood fill',color:'#ff4d6d'},
        {line:'    Queue<int[]> q = new LinkedList<>();',stepId:'',note:'BFS queue',color:'#5a5f70'},
        {line:'    q.offer(new int[]{r, c}); grid[r][c] = \'0\';',stepId:'mark',note:'Mark visited before push!',color:'#ff4d6d'},
        {line:'    while (!q.isEmpty()) { int[] cell = q.poll();',stepId:'',note:'Process level by level',color:'#5a5f70'},
        {line:'    // Check 4 directions, mark & enqueue valid neighbors',stepId:'dirs',note:'Explore 4 directions',color:'#a78bfa'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'1 1 0 0\\n1 1 0 0\\n0 0 1 0\\n0 0 0 1 1\\nScan (0,0) → "1"!',annotation:'Found first land at top-left'},
        {label:'Step 2',art:'0 0 0 0\\n0 0 0 0\\n0 0 1 0\\n0 0 0 1 1\\nDFS sinks 4 cells → count=1',annotation:'First island sunk'},
        {label:'Step 3',art:'(2,2)="1" → DFS → count=2',annotation:'Isolated cell = island 2'},
        {label:'Step 4',art:'(3,3)="1" → DFS floods (3,3),(3,4) → count=3',annotation:'Last island sunk. Total: 3'}
      ],
      variations:[
        {name:'Number of Islands',desc:'Scan grid, DFS flood-fill each "1", count components',problem:'Number of Islands (#200)'},
        {name:'Clone Graph',desc:'BFS/DFS with hashmap old→clone to copy nodes',problem:'Clone Graph (#133)'},
        {name:'Pacific Atlantic Water Flow',desc:'DFS from ocean edges inward, find overlap',problem:'Pacific Atlantic Water Flow (#417)'}
      ],
      title:'Graphs BFS/DFS',
      mnemonic:'SCAN → FIND "1" → FLOOD FILL → COUNT → REPEAT',
      steps:['Scan every cell','Found "1"? DFS flood-fill','Mark visited','Explore 4 dirs','Count++'],
      why:'Grid = graph. Each DFS discovers one connected component.'
    },
    cheat:{trigger:'grid traversal, connected components, shortest path, flood fill, islands',firstLine:'Queue<int[]> queue = new LinkedList<>(); Set<String> visited = new HashSet<>();',gotcha:'Forgetting to mark visited BEFORE pushing to queue (causes duplicates!)',pitch:"I'll model this as a graph and use BFS for shortest path / DFS for connectivity.",
      snippet: `<span class="cm">// WHY BFS on grid? Treat cells as nodes, 4-dir neighbors as edges</span>
<span class="kw">int</span>[][] dirs = {{<span class="nm">0</span>,<span class="nm">1</span>},{<span class="nm">0</span>,-<span class="nm">1</span>},{<span class="nm">1</span>,<span class="nm">0</span>},{-<span class="nm">1</span>,<span class="nm">0</span>}};
<span class="tp">Queue</span>&lt;<span class="kw">int</span>[]&gt; q = <span class="kw">new</span> <span class="fn">LinkedList</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="kw">new int</span>[]{r, c});  grid[r][c] = <span class="st">'0'</span>;  <span class="cm">// mark visited</span>
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="kw">int</span>[] cell = q.<span class="fn">poll</span>();
    <span class="kw">for</span> (<span class="kw">int</span>[] d : dirs) {  <span class="cm">// explore 4 neighbors</span>
        <span class="kw">int</span> nr = cell[<span class="nm">0</span>]+d[<span class="nm">0</span>], nc = cell[<span class="nm">1</span>]+d[<span class="nm">1</span>];
        <span class="kw">if</span> (<span class="fn">inBounds</span>(nr,nc) &amp;&amp; grid[nr][nc]==<span class="st">'1'</span>) { grid[nr][nc]=<span class="st">'0'</span>; q.<span class="fn">offer</span>(<span class="kw">new int</span>[]{nr,nc}); }
    }
}`}
  },
  {
    icon:'🔥', name:'Advanced Graphs', accent:'#f87171',
    tagline:"Dijkstra, Prim's, Topological Sort",
    hook:"Your GPS doesn't just find ANY road — it finds the CHEAPEST one. At each intersection, it picks the road with the smallest total distance so far. That's Dijkstra's algorithm: always expand the cheapest path first. It's like being greedy, but smarter — you use a priority queue to always know which unvisited node is closest.",
    svg:`<svg viewBox="0 0 600 250" style="max-height:250px;width:100%"><style>@keyframes dj-found{0%,100%{stroke:#4a5268}50%{stroke:#00ff88;stroke-width:3}}</style><rect width="600" height="250" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Dijkstra: Shortest Weighted Path</text><circle cx="100" cy="100" r="22" fill="rgba(0,255,136,.15)" stroke="#00ff88" stroke-width="2"/><text x="100" y="106" fill="#00ff88" text-anchor="middle" font-size="14" font-weight="bold">A:0</text><circle cx="250" cy="60" r="20" fill="#1a1d2e" stroke="#f87171" stroke-width="2" style="animation:dj-found 4s infinite .5s"/><text x="250" y="66" fill="#f87171" text-anchor="middle" font-size="13">B:4</text><circle cx="250" cy="160" r="20" fill="#1a1d2e" stroke="#f87171" stroke-width="2" style="animation:dj-found 4s infinite 1s"/><text x="250" y="166" fill="#f87171" text-anchor="middle" font-size="13">C:2</text><circle cx="400" cy="100" r="20" fill="#1a1d2e" stroke="#f87171" stroke-width="2" style="animation:dj-found 4s infinite 1.5s"/><text x="400" y="106" fill="#f87171" text-anchor="middle" font-size="13">D:5</text><circle cx="500" cy="100" r="22" fill="#1a1d2e" stroke="#fbbf24" stroke-width="2" style="animation:dj-found 4s infinite 2s"/><text x="500" y="106" fill="#fbbf24" text-anchor="middle" font-size="13">E:7</text><line x1="120" y1="90" x2="230" y2="62" stroke="#4a5268" stroke-width="1.5"/><text x="170" y="70" fill="#e8eaf0" font-size="11" font-weight="bold">4</text><line x1="120" y1="112" x2="230" y2="155" stroke="#00ff88" stroke-width="2"/><text x="170" y="145" fill="#00ff88" font-size="11" font-weight="bold">2</text><line x1="268" y1="68" x2="382" y2="92" stroke="#4a5268" stroke-width="1.5"/><text x="320" y="75" fill="#e8eaf0" font-size="11" font-weight="bold">1</text><line x1="268" y1="152" x2="382" y2="108" stroke="#00ff88" stroke-width="2"/><text x="320" y="140" fill="#00ff88" font-size="11" font-weight="bold">3</text><line x1="418" y1="100" x2="478" y2="100" stroke="#fbbf24" stroke-width="2"/><text x="450" y="95" fill="#fbbf24" font-size="11" font-weight="bold">2</text><rect x="50" y="200" width="500" height="35" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="222" fill="#f87171" text-anchor="middle" font-size="11" font-family="monospace">Always expand cheapest unvisited node first (use min-heap!)</text></svg>`,
    complexity:[{badge:'red',big:'O(V²)',label:'BASIC',desc:'Without heap, check all vertices'},{badge:'green',big:'O((V+E)logV)',label:'WITH HEAP',desc:'Min-heap for efficient next-vertex selection'}],
    meterWidth:'78%',
    code:{python:`<span class="cm"># DIJKSTRA — THE TEMPLATE</span>
<span class="cm"># TIME: O((V+E) log V) | SPACE: O(V)</span>
<span class="kw">import</span> heapq

<span class="kw">def</span> <span class="fn">dijkstra</span>(graph, start):
    dist = {node: <span class="fn">float</span>(<span class="st">'inf'</span>) <span class="kw">for</span> node <span class="kw">in</span> graph}
    dist[start] = <span class="nm">0</span>
    heap = [(<span class="nm">0</span>, start)]  <span class="cm"># (distance, node)</span>

    <span class="kw">while</span> heap:
        d, u = heapq.heappop(heap)
        <span class="kw">if</span> d &gt; dist[u]: <span class="kw">continue</span>  <span class="cm"># Skip stale entries</span>
        <span class="kw">for</span> v, w <span class="kw">in</span> graph[u]:
            <span class="kw">if</span> dist[u] + w &lt; dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(heap, (dist[v], v))

    <span class="kw">return</span> dist

<span class="cm"># ─── Network Delay Time ───</span>
<span class="kw">def</span> <span class="fn">networkDelayTime</span>(times, n, k):
    graph = {i: [] <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, n+<span class="nm">1</span>)}
    <span class="kw">for</span> u, v, w <span class="kw">in</span> times:
        graph[u].append((v, w))
    dist = <span class="fn">dijkstra</span>(graph, k)
    mx = <span class="fn">max</span>(dist.values())
    <span class="kw">return</span> mx <span class="kw">if</span> mx &lt; <span class="fn">float</span>(<span class="st">'inf'</span>) <span class="kw">else</span> -<span class="nm">1</span>`,csharp:`<span class="cm">// DIJKSTRA TEMPLATE</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">Dijkstra</span>(<span class="tp">List</span>&lt;(<span class="tp">int</span>,<span class="tp">int</span>)&gt;[] graph, <span class="tp">int</span> start) {
    <span class="tp">int</span>[] dist = <span class="kw">new</span> <span class="tp">int</span>[graph.Length];
    Array.Fill(dist, <span class="tp">int</span>.MaxValue);
    dist[start] = <span class="nm">0</span>;
    <span class="kw">var</span> pq = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;<span class="tp">int</span>,<span class="tp">int</span>&gt;();
    pq.Enqueue(start, <span class="nm">0</span>);
    <span class="kw">while</span> (pq.Count &gt; <span class="nm">0</span>) {
        <span class="tp">int</span> u = pq.Dequeue();
        <span class="kw">foreach</span> (<span class="kw">var</span> (v,w) <span class="kw">in</span> graph[u])
            <span class="kw">if</span> (dist[u]+w &lt; dist[v]) {
                dist[v] = dist[u]+w;
                pq.Enqueue(v, dist[v]);
            }
    }
    <span class="kw">return</span> dist;
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// DIJKSTRA / ADVANCED GRAPHS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Weighted shortest path, minimum cost</span>
<span class="cm">// TIME: O((V+E) log V) | SPACE: O(V)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// DIJKSTRA TEMPLATE — shortest weighted path</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">dijkstra</span>(<span class="tp">List</span>&lt;<span class="tp">int</span>[]&gt;[] graph, <span class="tp">int</span> start) {
    <span class="tp">int</span>[] dist = <span class="kw">new</span> <span class="tp">int</span>[graph.length];
    Arrays.fill(dist, Integer.MAX_VALUE); <span class="cm">// All distances = infinity</span>
    dist[start] = <span class="nm">0</span>;                      <span class="cm">// Source = 0</span>
    <span class="cm">// Min-heap: {distance, node}</span>
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">int</span>[]&gt; pq = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;((a,b)-&gt;a[<span class="nm">0</span>]-b[<span class="nm">0</span>]);
    pq.offer(<span class="kw">new</span> <span class="tp">int</span>[]{<span class="nm">0</span>, start});         <span class="cm">// Seed with source</span>

    <span class="kw">while</span> (!pq.isEmpty()) {
        <span class="tp">int</span>[] cur = pq.poll();              <span class="cm">// Pop closest node</span>
        <span class="tp">int</span> d = cur[<span class="nm">0</span>], u = cur[<span class="nm">1</span>];
        <span class="kw">if</span> (d &gt; dist[u]) <span class="kw">continue</span>;          <span class="cm">// Skip stale entries!</span>
        <span class="kw">for</span> (<span class="tp">int</span>[] e : graph[u]) {          <span class="cm">// Relax each neighbor</span>
            <span class="kw">if</span> (dist[u] + e[<span class="nm">1</span>] &lt; dist[e[<span class="nm">0</span>]]) { <span class="cm">// Found shorter path?</span>
                dist[e[<span class="nm">0</span>]] = dist[u] + e[<span class="nm">1</span>];  <span class="cm">// Update best distance</span>
                pq.offer(<span class="kw">new</span> <span class="tp">int</span>[]{dist[e[<span class="nm">0</span>]], e[<span class="nm">0</span>]}); <span class="cm">// Push improvement</span>
            }
        }
    }
    <span class="kw">return</span> dist;
}

<span class="cm">// ─── REAL EXAMPLE: Network Delay Time ───</span>
<span class="cm">// Input: times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2  Output: 2</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">networkDelayTime</span>(<span class="tp">int</span>[][] times, <span class="tp">int</span> n, <span class="tp">int</span> k) {
    <span class="tp">List</span>&lt;<span class="tp">int</span>[]&gt;[] graph = <span class="kw">new</span> <span class="tp">List</span>[n + <span class="nm">1</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt;= n; i++) graph[i] = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="tp">int</span>[] t : times) graph[t[<span class="nm">0</span>]].add(<span class="kw">new</span> <span class="tp">int</span>[]{t[<span class="nm">1</span>], t[<span class="nm">2</span>]});
    <span class="tp">int</span>[] dist = <span class="fn">dijkstra</span>(graph, k);
    <span class="tp">int</span> max = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt;= n; i++)
        max = Math.max(max, dist[i]);
    <span class="kw">return</span> max == Integer.MAX_VALUE ? -<span class="nm">1</span> : max;
}`},
    memoryHack:{
      oneSentence:'Greedily pop the closest unfinalized node, relax its edges, push improvements.',
      flowchart:{
        nodes:[
          {id:'init',label:'dist = {inf}',type:'start',x:290,y:15},
          {id:'src',label:'dist[src] = 0',type:'action',x:290,y:60},
          {id:'push',label:'push (0, src)',type:'action',x:290,y:105},
          {id:'empty',label:'heap empty?',type:'decision',x:290,y:155},
          {id:'pop',label:'pop min (d,u)',type:'action',x:100,y:155},
          {id:'stale',label:'d > dist[u]?',type:'decision',x:100,y:210},
          {id:'relax',label:'Relax edges',type:'action',x:290,y:210},
          {id:'skip',label:'Skip (stale)',type:'action',x:100,y:245},
          {id:'ret',label:'return dist',type:'end',x:480,y:155}
        ],
        edges:[
          {from:'init',to:'src',label:''},
          {from:'src',to:'push',label:''},
          {from:'push',to:'empty',label:''},
          {from:'empty',to:'pop',label:'NO'},
          {from:'empty',to:'ret',label:'YES'},
          {from:'pop',to:'stale',label:''},
          {from:'stale',to:'skip',label:'YES'},
          {from:'stale',to:'relax',label:'NO'},
          {from:'relax',to:'empty',label:''},
          {from:'skip',to:'empty',label:''}
        ]
      },
      annotatedCode:[
        {line:'int[] dijkstra(List<int[]>[] graph, int start) {',stepId:'init',note:'Shortest paths from start',color:'#00cfff'},
        {line:'    int[] dist = new int[graph.length];',stepId:'init',note:'Distance array',color:'#00cfff'},
        {line:'    Arrays.fill(dist, Integer.MAX_VALUE);',stepId:'init',note:'All distances start at infinity',color:'#00cfff'},
        {line:'    dist[start] = 0;',stepId:'src',note:'Source distance is 0',color:'#00ff88'},
        {line:'    PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->a[0]-b[0]);',stepId:'push',note:'Min-heap: {dist, node}',color:'#a78bfa'},
        {line:'    pq.offer(new int[]{0, start});',stepId:'push',note:'Seed heap with source',color:'#a78bfa'},
        {line:'    while (!pq.isEmpty()) {',stepId:'empty',note:'Process until empty',color:'#ffd600'},
        {line:'        int[] cur = pq.poll(); int d=cur[0], u=cur[1];',stepId:'pop',note:'Pop closest node',color:'#a78bfa'},
        {line:'        if (d > dist[u]) continue;',stepId:'stale',note:'Skip stale entries!',color:'#ff4d6d'},
        {line:'        for (int[] e : graph[u])',stepId:'relax',note:'Check each neighbor',color:'#a78bfa'},
        {line:'            if (dist[u]+e[1] < dist[e[0]]) {',stepId:'relax',note:'Found shorter path?',color:'#ffd600'},
        {line:'                dist[e[0]] = dist[u]+e[1];',stepId:'relax',note:'Update best distance',color:'#00ff88'},
        {line:'                pq.offer(new int[]{dist[e[0]], e[0]});',stepId:'relax',note:'Push improvement',color:'#a78bfa'},
        {line:'    }} return dist;',stepId:'ret',note:'All shortest distances',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'Graph: A→B(1), A→C(4), B→C(2)  dist={A:0,B:inf,C:inf}',annotation:'Initialize with source A=0'},
        {label:'Step 2',art:'Pop A(0): relax B=0+1=1, C=0+4=4  dist={A:0,B:1,C:4}',annotation:'Process A, update neighbors'},
        {label:'Step 3',art:'Pop B(1): relax C=1+2=3 < 4  dist={A:0,B:1,C:3}',annotation:'Found shorter path to C via B'},
        {label:'Step 4',art:'Pop C(3): no outgoing edges',annotation:'C finalized'},
        {label:'Step 5',art:'Pop C(4): STALE! 4 > 3 → skip',annotation:'Old entry discarded'},
        {label:'Result',art:'Final: {A:0, B:1, C:3}',annotation:'A→B=1, A→B→C=3 (not direct 4)'}
      ],
      variations:[
        {name:'Network Delay Time',desc:'Dijkstra from source, answer = max of all distances',problem:'Network Delay Time (#743)'},
        {name:'Cheapest Flights K Stops',desc:'Modified Dijkstra with stop count constraint',problem:'Cheapest Flights Within K Stops (#787)'},
        {name:'Swim in Rising Water',desc:'Dijkstra where weight = max elevation along path',problem:'Swim in Rising Water (#778)'}
      ],
      title:'Advanced Graphs (Dijkstra)',
      mnemonic:'INIT INF → SEED SOURCE → POP MIN → SKIP STALE → RELAX',
      steps:['dist[all]=inf, dist[start]=0','Push (0,start)','Pop min, skip stale','Relax neighbors, push improved'],
      why:'Dijkstra greedily finalizes closest nodes. Stale-check avoids reprocessing.'
    },
    cheat:{trigger:'weighted shortest path, minimum cost, task ordering, dependencies',firstLine:'Map<Integer, Integer> dist = new HashMap<>(); PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0] - b[0]);',gotcha:'Processing already-visited nodes — skip if dist[node] < current distance',pitch:"I'll use Dijkstra's algorithm with a min-heap to find the shortest weighted path in O((V+E) log V).",
      snippet: `<span class="cm">// WHY min-heap? Always expand cheapest node first → guarantees shortest path</span>
<span class="tp">PriorityQueue</span>&lt;<span class="kw">int</span>[]&gt; pq = <span class="kw">new</span> <span class="fn">PriorityQueue</span>&lt;&gt;((a,b) -&gt; a[<span class="nm">0</span>]-b[<span class="nm">0</span>]);
pq.<span class="fn">offer</span>(<span class="kw">new int</span>[]{<span class="nm">0</span>, src});  <span class="cm">// {cost, node}</span>
<span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>()) {
    <span class="kw">int</span>[] top = pq.<span class="fn">poll</span>();
    <span class="kw">if</span> (top[<span class="nm">0</span>] &gt; dist.<span class="fn">getOrDefault</span>(top[<span class="nm">1</span>], Integer.MAX_VALUE)) <span class="kw">continue</span>; <span class="cm">// skip stale</span>
    <span class="kw">for</span> (<span class="kw">int</span>[] edge : graph[top[<span class="nm">1</span>]])  <span class="cm">// relax neighbors</span>
        <span class="kw">if</span> (top[<span class="nm">0</span>]+edge[<span class="nm">1</span>] &lt; dist.<span class="fn">getOrDefault</span>(edge[<span class="nm">0</span>], Integer.MAX_VALUE))
            { dist.<span class="fn">put</span>(edge[<span class="nm">0</span>], top[<span class="nm">0</span>]+edge[<span class="nm">1</span>]); pq.<span class="fn">offer</span>(<span class="kw">new int</span>[]{top[<span class="nm">0</span>]+edge[<span class="nm">1</span>], edge[<span class="nm">0</span>]}); }
}`}
  },
  {
    icon:'🎯', name:'1-D Dynamic Programming', accent:'#fde68a',
    tagline:'Cache answers to subproblems',
    hook:"To climb to step 10, you only need to know how to get to step 9 and step 8. Once you figure those out, step 10 is easy: just add them up! The trick: write down each answer on a sticky note so you NEVER solve the same step twice. That's DP — breaking big problems into small ones and remembering the answers.",
    svg:`<svg viewBox="0 0 600 250" style="max-height:250px;width:100%"><style>@keyframes dp-fill{0%{fill:#1a1d2e}100%{fill:rgba(253,230,138,.2)}} @keyframes dp-arr{0%{stroke-dashoffset:30}100%{stroke-dashoffset:0}}.dp-a{stroke-dasharray:30;animation:dp-arr 2s linear infinite}</style><rect width="600" height="250" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">1D DP: Climbing Stairs (dp[i] = dp[i-1] + dp[i-2])</text><rect x="60" y="60" width="55" height="50" fill="rgba(253,230,138,.2)" stroke="#fde68a" rx="4" stroke-width="2"/><text x="87" y="80" fill="#fde68a" text-anchor="middle" font-size="11" font-family="monospace">dp[0]</text><text x="87" y="100" fill="#fde68a" text-anchor="middle" font-size="18" font-weight="bold">1</text><rect x="125" y="60" width="55" height="50" fill="rgba(253,230,138,.2)" stroke="#fde68a" rx="4" stroke-width="2"/><text x="152" y="80" fill="#fde68a" text-anchor="middle" font-size="11" font-family="monospace">dp[1]</text><text x="152" y="100" fill="#fde68a" text-anchor="middle" font-size="18" font-weight="bold">1</text><rect x="190" y="60" width="55" height="50" fill="rgba(253,230,138,.2)" stroke="#fde68a" rx="4" style="animation:dp-fill 4s infinite .5s alternate"/><text x="217" y="80" fill="#fde68a" text-anchor="middle" font-size="11" font-family="monospace">dp[2]</text><text x="217" y="100" fill="#fde68a" text-anchor="middle" font-size="18" font-weight="bold">2</text><rect x="255" y="60" width="55" height="50" fill="rgba(253,230,138,.15)" stroke="#fde68a" rx="4" style="animation:dp-fill 4s infinite 1s alternate"/><text x="282" y="80" fill="#fde68a" text-anchor="middle" font-size="11" font-family="monospace">dp[3]</text><text x="282" y="100" fill="#fde68a" text-anchor="middle" font-size="18" font-weight="bold">3</text><rect x="320" y="60" width="55" height="50" fill="rgba(253,230,138,.1)" stroke="#fde68a" rx="4" style="animation:dp-fill 4s infinite 1.5s alternate"/><text x="347" y="80" fill="#fde68a" text-anchor="middle" font-size="11" font-family="monospace">dp[4]</text><text x="347" y="100" fill="#fde68a" text-anchor="middle" font-size="18" font-weight="bold">5</text><rect x="385" y="60" width="55" height="50" fill="#1a1d2e" stroke="#fde68a" rx="4" style="animation:dp-fill 4s infinite 2s alternate"/><text x="412" y="80" fill="#fde68a" text-anchor="middle" font-size="11" font-family="monospace">dp[5]</text><text x="412" y="100" fill="#fde68a" text-anchor="middle" font-size="18" font-weight="bold">8</text><path d="M152 115 Q185 140 217 115" fill="none" stroke="#fde68a" class="dp-a"/><path d="M87 115 Q152 150 217 115" fill="none" stroke="#a78bfa" class="dp-a"/><text x="300" y="155" fill="#fde68a" text-anchor="middle" font-size="12" font-family="monospace">dp[i] = dp[i-1] + dp[i-2]</text><rect x="50" y="175" width="500" height="55" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="198" fill="#00ff88" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold">O(2ⁿ) recursive → O(n) with memoization → O(1) space!</text><text x="300" y="218" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Just track the last two values: prev1 and prev2</text></svg>`,
    complexity:[{badge:'red',big:'O(2ⁿ)',label:'BRUTE RECURSION',desc:'Recalculate same subproblems'},{badge:'yellow',big:'O(n)',label:'MEMOIZED/TAB',desc:'Cache each subproblem once'},{badge:'blue',big:'O(1) space',label:'OPTIMIZED',desc:'Only track previous 2 values'}],
    meterWidth:'90%',
    code:{python:`<span class="cm"># 1D DP — THE TEMPLATE</span>
<span class="cm"># TIME: O(n) | SPACE: O(n) or O(1)</span>

<span class="kw">def</span> <span class="fn">dp_template</span>(n):
    dp = [<span class="nm">0</span>] * (n + <span class="nm">1</span>)
    dp[<span class="nm">0</span>] = dp[<span class="nm">1</span>] = <span class="nm">1</span>  <span class="cm"># Base cases</span>

    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">2</span>, n + <span class="nm">1</span>):
        dp[i] = dp[i-<span class="nm">1</span>] + dp[i-<span class="nm">2</span>]  <span class="cm"># Recurrence</span>

    <span class="kw">return</span> dp[n]

<span class="cm"># ─── House Robber ───</span>
<span class="cm"># Input: [1,2,3,1]  Output: 4 (rob house 1+3)</span>

<span class="kw">def</span> <span class="fn">rob</span>(nums):
    <span class="kw">if</span> <span class="fn">len</span>(nums) &lt;= <span class="nm">2</span>: <span class="kw">return</span> <span class="fn">max</span>(nums, default=<span class="nm">0</span>)
    prev2, prev1 = nums[<span class="nm">0</span>], <span class="fn">max</span>(nums[<span class="nm">0</span>], nums[<span class="nm">1</span>])
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">2</span>, <span class="fn">len</span>(nums)):
        curr = <span class="fn">max</span>(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, curr
    <span class="kw">return</span> prev1`,csharp:`<span class="cm">// 1D DP — House Robber</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">Rob</span>(<span class="tp">int</span>[] nums) {
    <span class="kw">if</span> (nums.Length &lt;= <span class="nm">2</span>) <span class="kw">return</span> nums.Max();
    <span class="tp">int</span> prev2 = nums[<span class="nm">0</span>], prev1 = Math.Max(nums[<span class="nm">0</span>],nums[<span class="nm">1</span>]);
    <span class="kw">for</span> (<span class="tp">int</span> i=<span class="nm">2</span>; i&lt;nums.Length; i++) {
        <span class="tp">int</span> curr = Math.Max(prev1, prev2+nums[i]);
        prev2 = prev1; prev1 = curr;
    }
    <span class="kw">return</span> prev1;
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// 1D DYNAMIC PROGRAMMING — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Max/min, count ways, can you achieve</span>
<span class="cm">// TIME: O(n) | SPACE: O(n) or O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// 1D DP TEMPLATE — build answer from subproblems</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">dpTemplate</span>(<span class="tp">int</span> n) {
    <span class="tp">int</span>[] dp = <span class="kw">new</span> <span class="tp">int</span>[n + <span class="nm">1</span>];
    dp[<span class="nm">0</span>] = dp[<span class="nm">1</span>] = <span class="nm">1</span>;                  <span class="cm">// Base cases</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">2</span>; i &lt;= n; i++)
        dp[i] = dp[i-<span class="nm">1</span>] + dp[i-<span class="nm">2</span>];        <span class="cm">// Recurrence relation</span>
    <span class="kw">return</span> dp[n];
}

<span class="cm">// ─── REAL EXAMPLE: House Robber ───</span>
<span class="cm">// Input: [1,2,3,1]  Output: 4 (rob house 1+3)</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">rob</span>(<span class="tp">int</span>[] nums) {
    <span class="kw">if</span> (nums.length &lt;= <span class="nm">2</span>) <span class="kw">return</span> Arrays.stream(nums).max().getAsInt();
    <span class="tp">int</span> prev2 = nums[<span class="nm">0</span>];                   <span class="cm">// dp[i-2]</span>
    <span class="tp">int</span> prev1 = Math.max(nums[<span class="nm">0</span>], nums[<span class="nm">1</span>]); <span class="cm">// dp[i-1]</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">2</span>; i &lt; nums.length; i++) {
        <span class="tp">int</span> curr = Math.max(prev1, prev2 + nums[i]); <span class="cm">// Rob or skip</span>
        prev2 = prev1;                    <span class="cm">// Slide window forward</span>
        prev1 = curr;
    }
    <span class="kw">return</span> prev1;                          <span class="cm">// O(1) space optimized!</span>
}

<span class="cm">// ─── BONUS: Climbing Stairs ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">climbStairs</span>(<span class="tp">int</span> n) {
    <span class="kw">if</span> (n &lt;= <span class="nm">2</span>) <span class="kw">return</span> n;
    <span class="tp">int</span> prev2 = <span class="nm">1</span>, prev1 = <span class="nm">2</span>;            <span class="cm">// Base: 1 way, 2 ways</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">3</span>; i &lt;= n; i++) {
        <span class="tp">int</span> curr = prev1 + prev2;            <span class="cm">// From i-1 or i-2</span>
        prev2 = prev1; prev1 = curr;
    }
    <span class="kw">return</span> prev1;
}`},
    memoryHack:{
      oneSentence:'Build each answer from the answers before it — every dp[i] is just a small formula over previous dp values.',
      flowchart:{
        nodes:[
          {id:'start',label:'Define dp[i]',type:'start',x:290,y:20},
          {id:'base',label:'Set base cases',type:'action',x:290,y:70},
          {id:'loop',label:'i = 3 to n',type:'action',x:290,y:120},
          {id:'decide',label:'i <= n?',type:'decision',x:290,y:170},
          {id:'recur',label:'dp[i]=dp[i-1]+dp[i-2]',type:'action',x:480,y:170},
          {id:'done',label:'Return dp[n]',type:'end',x:290,y:235}
        ],
        edges:[
          {from:'start',to:'base',label:''},
          {from:'base',to:'loop',label:''},
          {from:'loop',to:'decide',label:''},
          {from:'decide',to:'recur',label:'YES'},
          {from:'recur',to:'loop',label:''},
          {from:'decide',to:'done',label:'NO'}
        ]
      },
      annotatedCode:[
        {line:'int climbStairs(int n) {',stepId:'start',note:'dp[i] = ways to reach step i',color:'#00cfff'},
        {line:'    if (n <= 2) return n;',stepId:'base',note:'Trivial cases',color:'#a78bfa'},
        {line:'    int[] dp = new int[n + 1];',stepId:'start',note:'Allocate array',color:'#00cfff'},
        {line:'    dp[1] = 1;',stepId:'base',note:'Base: 1 way to step 1',color:'#00ff88'},
        {line:'    dp[2] = 2;',stepId:'base',note:'Base: 2 ways to step 2',color:'#00ff88'},
        {line:'    for (int i = 3; i <= n; i++)',stepId:'loop',note:'Build up from base cases',color:'#ffd600'},
        {line:'        dp[i] = dp[i-1] + dp[i-2];',stepId:'recur',note:'From i-1 (1 step) or i-2 (2 steps)',color:'#ffd600'},
        {line:'    return dp[n];',stepId:'done',note:'Answer at step n',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'dp = [0, 1, 2, 0, 0, 0]',annotation:'Base cases: dp[1]=1, dp[2]=2'},
        {label:'Step 2',art:'dp = [0, 1, 2, 3, 0, 0]  i=3: 2+1=3',annotation:'3 ways to reach step 3'},
        {label:'Step 3',art:'dp = [0, 1, 2, 3, 5, 0]  i=4: 3+2=5',annotation:'5 ways to reach step 4'},
        {label:'Step 4',art:'dp = [0, 1, 2, 3, 5, 8]  i=5: 5+3=8',annotation:'8 ways to reach step 5. Done!'}
      ],
      variations:[
        {name:'Climbing Stairs',desc:'Fibonacci DP — dp[i] = dp[i-1] + dp[i-2]',problem:'Climbing Stairs (#70)'},
        {name:'House Robber',desc:'Rob or skip — dp[i] = max(dp[i-1], dp[i-2]+nums[i])',problem:'House Robber (#198)'},
        {name:'Longest Increasing Subseq',desc:'For each element, dp[i] = max(dp[j]+1) for j<i where nums[j]<nums[i]',problem:'LIS (#300)'}
      ],
      title:'1D Dynamic Programming',
      mnemonic:'DEFINE → BASE → LOOP → RECUR → RETURN',
      steps:['Define dp[i] in English','Set base cases','Write recurrence','Loop and fill','Return dp[n]'],
      why:'Most 1D DP reduces to defining dp[i], a base case, and filling forward.'
    },
    cheat:{trigger:'maximum/minimum, count ways, can you achieve, optimal cost',firstLine:'int[] dp = new int[n + 1]; dp[0] = dp[1] = 1;',gotcha:'Wrong base case — dp[0] and dp[1] depend on the problem',pitch:"I'll define dp[i] as the answer for subproblem i, with recurrence dp[i] = f(dp[i-1], dp[i-2]).",
      snippet: `<span class="cm">// WHY DP? Overlapping subproblems — dp[i] reuses dp[i-1] and dp[i-2]</span>
<span class="kw">int</span>[] dp = <span class="kw">new int</span>[n + <span class="nm">1</span>];
dp[<span class="nm">0</span>] = <span class="nm">1</span>; dp[<span class="nm">1</span>] = <span class="nm">1</span>;  <span class="cm">// base cases</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">2</span>; i &lt;= n; i++)
    dp[i] = dp[i-<span class="nm">1</span>] + dp[i-<span class="nm">2</span>];  <span class="cm">// recurrence: climb 1 or 2 steps</span>
<span class="kw">return</span> dp[n];  <span class="cm">// answer for full problem</span>`}
  },
  {
    icon:'📐', name:'2-D Dynamic Programming', accent:'#c4b5fd',
    tagline:'dp[i][j] — grid of subproblems',
    hook:"Imagine a chessboard. To know the best way to reach any square, you only need the square above it and the one to its left. Fill in the whole board square by square, and the answer is always in the bottom-right corner. Two strings? Make a grid where rows are one string and columns are the other!",
    svg:`<svg viewBox="0 0 600 250" style="max-height:250px;width:100%"><style>@keyframes dp2-fill{0%{fill:#1a1d2e}100%{fill:rgba(196,181,253,.25)}}</style><rect width="600" height="250" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">2D DP: Grid filling (row by row)</text><rect x="150" y="45" width="40" height="35" fill="rgba(196,181,253,.25)" stroke="#c4b5fd" rx="3"/><text x="170" y="67" fill="#c4b5fd" text-anchor="middle" font-size="12">1</text><rect x="195" y="45" width="40" height="35" fill="rgba(196,181,253,.2)" stroke="#c4b5fd" rx="3" style="animation:dp2-fill 4s infinite .5s alternate"/><text x="215" y="67" fill="#c4b5fd" text-anchor="middle" font-size="12">1</text><rect x="240" y="45" width="40" height="35" fill="rgba(196,181,253,.15)" stroke="#c4b5fd" rx="3" style="animation:dp2-fill 4s infinite 1s alternate"/><text x="260" y="67" fill="#c4b5fd" text-anchor="middle" font-size="12">1</text><rect x="150" y="85" width="40" height="35" fill="rgba(196,181,253,.2)" stroke="#c4b5fd" rx="3"/><text x="170" y="107" fill="#c4b5fd" text-anchor="middle" font-size="12">1</text><rect x="195" y="85" width="40" height="35" fill="rgba(196,181,253,.2)" stroke="#c4b5fd" rx="3" style="animation:dp2-fill 4s infinite 1.5s alternate"/><text x="215" y="107" fill="#c4b5fd" text-anchor="middle" font-size="12">2</text><rect x="240" y="85" width="40" height="35" fill="rgba(196,181,253,.15)" stroke="#c4b5fd" rx="3" style="animation:dp2-fill 4s infinite 2s alternate"/><text x="260" y="107" fill="#c4b5fd" text-anchor="middle" font-size="12">3</text><rect x="150" y="125" width="40" height="35" fill="rgba(196,181,253,.15)" stroke="#c4b5fd" rx="3"/><text x="170" y="147" fill="#c4b5fd" text-anchor="middle" font-size="12">1</text><rect x="195" y="125" width="40" height="35" fill="rgba(196,181,253,.15)" stroke="#c4b5fd" rx="3"/><text x="215" y="147" fill="#c4b5fd" text-anchor="middle" font-size="12">3</text><rect x="240" y="125" width="40" height="35" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="3" stroke-width="2" style="animation:dp2-fill 4s infinite 2.5s alternate"/><text x="260" y="147" fill="#00ff88" text-anchor="middle" font-size="14" font-weight="bold">6</text><text x="350" y="67" fill="#4a5268" font-size="11" font-family="monospace">← dp[i][j] = dp[i-1][j]</text><text x="350" y="87" fill="#4a5268" font-size="11" font-family="monospace">           + dp[i][j-1]</text><text x="260" y="182" fill="#00ff88" font-size="12" text-anchor="middle" font-family="monospace">Answer ↑</text><rect x="50" y="200" width="500" height="35" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="222" fill="#c4b5fd" text-anchor="middle" font-size="11" font-family="monospace">Fill row by row. Answer at dp[m-1][n-1]. Often can optimize to O(n) space.</text></svg>`,
    complexity:[{badge:'red',big:'O(2^(m+n))',label:'BRUTE RECURSION',desc:'Explore all paths without caching'},{badge:'yellow',big:'O(m×n)',label:'TABULATION',desc:'Fill grid once, each cell O(1)'}],
    meterWidth:'85%',
    code:{python:`<span class="cm"># 2D DP — THE TEMPLATE</span>
<span class="cm"># TIME: O(m*n) | SPACE: O(m*n)</span>

<span class="cm"># ─── Unique Paths ───</span>
<span class="kw">def</span> <span class="fn">uniquePaths</span>(m, n):
    dp = [[<span class="nm">1</span>]*n <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(m)]
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, m):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, n):
            dp[i][j] = dp[i-<span class="nm">1</span>][j] + dp[i][j-<span class="nm">1</span>]
    <span class="kw">return</span> dp[m-<span class="nm">1</span>][n-<span class="nm">1</span>]

<span class="cm"># ─── Longest Common Subsequence ───</span>
<span class="kw">def</span> <span class="fn">longestCommonSubseq</span>(s1, s2):
    m, n = <span class="fn">len</span>(s1), <span class="fn">len</span>(s2)
    dp = [[<span class="nm">0</span>]*(n+<span class="nm">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(m+<span class="nm">1</span>)]
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, m+<span class="nm">1</span>):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, n+<span class="nm">1</span>):
            <span class="kw">if</span> s1[i-<span class="nm">1</span>] == s2[j-<span class="nm">1</span>]:
                dp[i][j] = dp[i-<span class="nm">1</span>][j-<span class="nm">1</span>] + <span class="nm">1</span>
            <span class="kw">else</span>:
                dp[i][j] = <span class="fn">max</span>(dp[i-<span class="nm">1</span>][j], dp[i][j-<span class="nm">1</span>])
    <span class="kw">return</span> dp[m][n]`,csharp:`<span class="cm">// 2D DP — Unique Paths</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">UniquePaths</span>(<span class="tp">int</span> m, <span class="tp">int</span> n) {
    <span class="tp">int</span>[,] dp = <span class="kw">new</span> <span class="tp">int</span>[m,n];
    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>;i&lt;m;i++) dp[i,<span class="nm">0</span>]=<span class="nm">1</span>;
    <span class="kw">for</span>(<span class="tp">int</span> j=<span class="nm">0</span>;j&lt;n;j++) dp[<span class="nm">0</span>,j]=<span class="nm">1</span>;
    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">1</span>;i&lt;m;i++)
        <span class="kw">for</span>(<span class="tp">int</span> j=<span class="nm">1</span>;j&lt;n;j++)
            dp[i,j]=dp[i-<span class="nm">1</span>,j]+dp[i,j-<span class="nm">1</span>];
    <span class="kw">return</span> dp[m-<span class="nm">1</span>,n-<span class="nm">1</span>];
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// 2D DYNAMIC PROGRAMMING — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Two strings, grid paths, edit distance, LCS</span>
<span class="cm">// TIME: O(m*n) | SPACE: O(m*n)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// ─── REAL EXAMPLE: Unique Paths ───</span>
<span class="cm">// Input: m=3, n=3  Output: 6</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">uniquePaths</span>(<span class="tp">int</span> m, <span class="tp">int</span> n) {
    <span class="tp">int</span>[][] dp = <span class="kw">new</span> <span class="tp">int</span>[m][n];
    Arrays.fill(dp[<span class="nm">0</span>], <span class="nm">1</span>);              <span class="cm">// First row: 1 path each</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; m; i++)
        dp[i][<span class="nm">0</span>] = <span class="nm">1</span>;                     <span class="cm">// First col: 1 path each</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt; m; i++)
        <span class="kw">for</span> (<span class="tp">int</span> j = <span class="nm">1</span>; j &lt; n; j++)
            dp[i][j] = dp[i-<span class="nm">1</span>][j] + dp[i][j-<span class="nm">1</span>]; <span class="cm">// Top + Left</span>
    <span class="kw">return</span> dp[m-<span class="nm">1</span>][n-<span class="nm">1</span>];                  <span class="cm">// Bottom-right = answer</span>
}

<span class="cm">// ─── BONUS: Longest Common Subsequence ───</span>
<span class="cm">// Input: "abcde", "ace"  Output: 3 ("ace")</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">longestCommonSubsequence</span>(<span class="tp">String</span> s1, <span class="tp">String</span> s2) {
    <span class="tp">int</span> m = s1.length(), n = s2.length();
    <span class="tp">int</span>[][] dp = <span class="kw">new</span> <span class="tp">int</span>[m + <span class="nm">1</span>][n + <span class="nm">1</span>]; <span class="cm">// +1 for empty string base</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt;= m; i++)
        <span class="kw">for</span> (<span class="tp">int</span> j = <span class="nm">1</span>; j &lt;= n; j++)
            <span class="kw">if</span> (s1.charAt(i-<span class="nm">1</span>) == s2.charAt(j-<span class="nm">1</span>))
                dp[i][j] = dp[i-<span class="nm">1</span>][j-<span class="nm">1</span>] + <span class="nm">1</span>;  <span class="cm">// Match! Diagonal + 1</span>
            <span class="kw">else</span>
                dp[i][j] = Math.max(dp[i-<span class="nm">1</span>][j], dp[i][j-<span class="nm">1</span>]); <span class="cm">// Skip one char</span>
    <span class="kw">return</span> dp[m][n];
}`},
    memoryHack:{
      oneSentence:'Fill a 2D table cell by cell where each cell combines its top and left neighbors — row by row, the answer builds itself.',
      flowchart:{
        nodes:[
          {id:'start',label:'Init grid',type:'start',x:290,y:20},
          {id:'base',label:'Fill base cases',type:'action',x:290,y:70},
          {id:'outerloop',label:'For each row i',type:'action',x:290,y:120},
          {id:'innerloop',label:'For each col j',type:'action',x:290,y:170},
          {id:'fill',label:'dp[i][j]=top+left',type:'action',x:490,y:170},
          {id:'done',label:'Return dp[m-1][n-1]',type:'end',x:290,y:235}
        ],
        edges:[
          {from:'start',to:'base',label:''},
          {from:'base',to:'outerloop',label:''},
          {from:'outerloop',to:'innerloop',label:''},
          {from:'innerloop',to:'fill',label:''},
          {from:'fill',to:'innerloop',label:''},
          {from:'outerloop',to:'done',label:'NO'}
        ]
      },
      annotatedCode:[
        {line:'int uniquePaths(int m, int n) {',stepId:'start',note:'dp[i][j] = paths to cell (i,j)',color:'#00cfff'},
        {line:'    int[][] dp = new int[m][n];',stepId:'base',note:'Create m×n grid',color:'#00cfff'},
        {line:'    Arrays.fill(dp[0], 1); // first row',stepId:'base',note:'First row = 1 path each',color:'#00ff88'},
        {line:'    for (int i=0; i<m; i++) dp[i][0]=1;',stepId:'base',note:'First col = 1 path each',color:'#00ff88'},
        {line:'    for (int i = 1; i < m; i++)',stepId:'outerloop',note:'Process each row',color:'#ffd600'},
        {line:'        for (int j = 1; j < n; j++)',stepId:'innerloop',note:'Process each column',color:'#ffd600'},
        {line:'            dp[i][j] = dp[i-1][j] + dp[i][j-1];',stepId:'fill',note:'Paths from above + from left',color:'#a78bfa'},
        {line:'    return dp[m-1][n-1];',stepId:'done',note:'Bottom-right = total paths',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'[[1, 1, 1],\\n [1, ?, ?],\\n [1, ?, ?]]',annotation:'Grid initialized — edges all 1'},
        {label:'Step 2',art:'dp[1][1] = 1+1 = 2',annotation:'2 paths to reach (1,1)'},
        {label:'Step 3',art:'dp[1][2] = 1+2 = 3',annotation:'3 paths to reach (1,2)'},
        {label:'Step 4',art:'dp[2][1] = 2+1 = 3',annotation:'3 paths to reach (2,1)'},
        {label:'Step 5',art:'dp[2][2] = 3+3 = 6  ← Answer!',annotation:'6 unique paths in 3x3 grid'}
      ],
      variations:[
        {name:'Unique Paths',desc:'dp[i][j] = top + left — count grid paths',problem:'Unique Paths (#62)'},
        {name:'Longest Common Subseq',desc:'Match? diagonal+1. No match? max(left,top)',problem:'LCS (#1143)'},
        {name:'Edit Distance',desc:'Match? diagonal. Else min(left,top,diag)+1',problem:'Edit Distance (#72)'}
      ],
      title:'2D Dynamic Programming',
      mnemonic:'GRID → BASE EDGES → FILL CELL = TOP + LEFT → CORNER',
      steps:['Create m×n table','Fill base row/col','Each cell = top + left','Answer at dp[m-1][n-1]'],
      why:'2D DP = 1D extended to a grid. Each cell depends on top and left neighbors.'
    },
    cheat:{trigger:'two strings, grid paths, edit distance, LCS, interleaving',firstLine:'int[][] dp = new int[m + 1][n + 1];',gotcha:'Off-by-one with dp table dimensions — usually (m+1) x (n+1)',pitch:"I'll use a 2D dp table where dp[i][j] represents the answer for the first i and j elements.",
      snippet: `<span class="cm">// WHY 2D? Two inputs (rows × cols) → dp[i][j] = answer for subproblem (i,j)</span>
<span class="kw">int</span>[][] dp = <span class="kw">new int</span>[m+<span class="nm">1</span>][n+<span class="nm">1</span>];
dp[<span class="nm">0</span>][<span class="nm">0</span>] = <span class="nm">1</span>;  <span class="cm">// base: one way to reach start</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; m; i++)
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="nm">0</span>; j &lt; n; j++)
        { <span class="kw">if</span>(i+<span class="nm">1</span>&lt;m) dp[i+<span class="nm">1</span>][j]+=dp[i][j]; <span class="kw">if</span>(j+<span class="nm">1</span>&lt;n) dp[i][j+<span class="nm">1</span>]+=dp[i][j]; }
<span class="kw">return</span> dp[m-<span class="nm">1</span>][n-<span class="nm">1</span>];  <span class="cm">// bottom-right corner</span>`}
  },
  {
    icon:'💰', name:'Greedy', accent:'#6ee7b7',
    tagline:'Make the locally optimal choice each step',
    hook:"At a buffet with limited plate space, always grab the biggest piece first! Take the biggest cake slice, then the biggest cookie, then the biggest brownie. Being greedy — always picking the BEST available thing RIGHT NOW — sometimes gives you the best total. The tricky part: proving that greedy actually works for the problem!",
    svg:`<svg viewBox="0 0 600 220" style="max-height:220px;width:100%"><style>@keyframes gr-pick{0%{transform:translateY(0)}50%{transform:translateY(-15px)}100%{transform:translateY(0)}}</style><rect width="600" height="220" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Greedy: Always pick the local best</text><rect x="80" y="50" width="60" height="90" fill="rgba(110,231,183,.3)" stroke="#6ee7b7" rx="4" stroke-width="2" style="animation:gr-pick 3s infinite"/><text x="110" y="100" fill="#6ee7b7" text-anchor="middle" font-size="14" font-weight="bold">9</text><text x="110" y="155" fill="#00ff88" text-anchor="middle" font-size="10" font-family="monospace">PICK ✓</text><rect x="160" y="80" width="60" height="60" fill="#1a1d2e" stroke="#4a5268" rx="4"/><text x="190" y="115" fill="#e8eaf0" text-anchor="middle" font-size="14">4</text><rect x="240" y="60" width="60" height="80" fill="rgba(110,231,183,.2)" stroke="#6ee7b7" rx="4" style="animation:gr-pick 3s infinite .5s"/><text x="270" y="105" fill="#6ee7b7" text-anchor="middle" font-size="14" font-weight="bold">7</text><text x="270" y="155" fill="#00ff88" text-anchor="middle" font-size="10" font-family="monospace">PICK ✓</text><rect x="320" y="95" width="60" height="45" fill="#1a1d2e" stroke="#4a5268" rx="4"/><text x="350" y="122" fill="#e8eaf0" text-anchor="middle" font-size="14">2</text><rect x="400" y="70" width="60" height="70" fill="rgba(110,231,183,.15)" stroke="#6ee7b7" rx="4" style="animation:gr-pick 3s infinite 1s"/><text x="430" y="110" fill="#6ee7b7" text-anchor="middle" font-size="14" font-weight="bold">6</text><text x="430" y="155" fill="#00ff88" text-anchor="middle" font-size="10" font-family="monospace">PICK ✓</text><rect x="50" y="175" width="500" height="30" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="195" fill="#6ee7b7" text-anchor="middle" font-size="11" font-family="monospace">Greedy picked: 9+7+6 = 22 (optimal!)</text></svg>`,
    complexity:[{badge:'red',big:'O(n²)',label:'TRY ALL',desc:'Check all combinations'},{badge:'yellow',big:'O(n log n)',label:'SORT + GREEDY',desc:'Sort then greedily scan'},{badge:'green',big:'O(n)',label:'IF PRE-SORTED',desc:'Single pass greedy choice'}],
    meterWidth:'85%',
    code:{python:`<span class="cm"># GREEDY — Jump Game ───</span>
<span class="cm"># Can you reach the last index?</span>
<span class="cm"># Input: [2,3,1,1,4]  Output: True</span>

<span class="kw">def</span> <span class="fn">canJump</span>(nums):
    max_reach = <span class="nm">0</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(nums)):
        <span class="kw">if</span> i &gt; max_reach: <span class="kw">return False</span>
        max_reach = <span class="fn">max</span>(max_reach, i + nums[i])
    <span class="kw">return True</span>`,csharp:`<span class="cm">// GREEDY — Jump Game</span>
<span class="kw">public</span> <span class="tp">bool</span> <span class="fn">CanJump</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> maxReach = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i=<span class="nm">0</span>; i&lt;nums.Length; i++) {
        <span class="kw">if</span> (i &gt; maxReach) <span class="kw">return false</span>;
        maxReach = Math.Max(maxReach, i+nums[i]);
    }
    <span class="kw">return true</span>;
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// GREEDY — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Minimum steps, scheduling, partition, gas station</span>
<span class="cm">// TIME: O(n) | SPACE: O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// GREEDY — Jump Game</span>
<span class="cm">// Input: [2,3,1,1,4]  Output: true</span>

<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">canJump</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> maxReach = <span class="nm">0</span>;                      <span class="cm">// Farthest index reachable</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++) {
        <span class="kw">if</span> (i &gt; maxReach) <span class="kw">return false</span>;     <span class="cm">// Beyond reach? Stuck!</span>
        maxReach = Math.max(maxReach, i + nums[i]); <span class="cm">// Extend reach</span>
    }
    <span class="kw">return true</span>;                           <span class="cm">// Made it to end!</span>
}

<span class="cm">// ─── BONUS: Maximum Subarray (Kadane's) ───</span>
<span class="cm">// Input: [-2,1,-3,4,-1,2,1,-5,4]  Output: 6</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">maxSubArray</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> maxSum = nums[<span class="nm">0</span>], curSum = nums[<span class="nm">0</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt; nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i]); <span class="cm">// Extend or restart</span>
        maxSum = Math.max(maxSum, curSum);              <span class="cm">// Track global best</span>
    }
    <span class="kw">return</span> maxSum;
}`},
    memoryHack:{
      oneSentence:'Track the farthest you can reach so far — if you ever stand beyond your reach, you are stuck.',
      flowchart:{
        nodes:[
          {id:'start',label:'max_reach = 0',type:'start',x:290,y:20},
          {id:'loop',label:'For each i',type:'action',x:290,y:80},
          {id:'check',label:'i > max_reach?',type:'decision',x:290,y:145},
          {id:'fail',label:'Return False',type:'end',x:80,y:145},
          {id:'update',label:'Update reach',type:'action',x:490,y:145},
          {id:'done',label:'Return True',type:'end',x:290,y:235}
        ],
        edges:[
          {from:'start',to:'loop',label:''},
          {from:'loop',to:'check',label:''},
          {from:'check',to:'fail',label:'YES'},
          {from:'check',to:'update',label:'NO'},
          {from:'update',to:'loop',label:''},
          {from:'loop',to:'done',label:''}
        ]
      },
      annotatedCode:[
        {line:'boolean canJump(int[] nums) {',stepId:'start',note:'Track farthest reachable index',color:'#00cfff'},
        {line:'    int maxReach = 0;',stepId:'start',note:'Start at index 0',color:'#00ff88'},
        {line:'    for (int i = 0; i < nums.length; i++) {',stepId:'loop',note:'Visit each index',color:'#ffd600'},
        {line:'        if (i > maxReach) return false;',stepId:'check',note:'Beyond our reach? Stuck!',color:'#ff4d6d'},
        {line:'        maxReach = Math.max(maxReach, i + nums[i]);',stepId:'update',note:'Extend reach from here',color:'#a78bfa'},
        {line:'    }',stepId:'loop',note:'',color:'#ffd600'},
        {line:'    return true;',stepId:'done',note:'Survived — end reachable!',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'nums=[2,3,1,1,4] i=0 reach=max(0,0+2)=2',annotation:'From 0 we can reach index 2'},
        {label:'Step 2',art:'i=1 1<=2✓ reach=max(2,1+3)=4',annotation:'From 1 we can reach index 4!'},
        {label:'Step 3',art:'i=2 2<=4✓ reach=max(4,2+1)=4',annotation:'Reach stays at 4'},
        {label:'Step 4',art:'i=3 3<=4✓ i=4 4<=4✓ → True',annotation:'Made it to end!'},
        {label:'Fail Case',art:'nums=[3,2,1,0,4] i=4: 4>3 → False',annotation:'Index 3 has 0, can\'t reach index 4'}
      ],
      variations:[
        {name:'Jump Game',desc:'Track max reachable index greedily',problem:'Jump Game (#55)'},
        {name:'Gas Station',desc:'Track surplus gas, reset on deficit',problem:'Gas Station (#134)'},
        {name:'Maximum Subarray',desc:'Kadane\'s — extend or restart running sum',problem:'Maximum Subarray (#53)'}
      ],
      title:'Greedy Algorithm',
      mnemonic:'INIT TRACKER → SCAN → CAN I BE HERE? → UPDATE → CONCLUDE',
      steps:['Init greedy tracker','Scan left to right','Check condition','Update tracker','Return result'],
      why:'Greedy works when locally optimal = globally optimal.'
    },
    cheat:{trigger:'minimum steps, jump game, gas station, partition, scheduling',firstLine:'Arrays.sort(input, (a, b) -> a[0] - b[0]);',gotcha:'Assuming greedy works without proving local optimal → global optimal',pitch:"I'll sort by the relevant metric and greedily select the locally optimal choice at each step.",
      snippet: `<span class="cm">// WHY greedy? Track farthest reachable — if you can reach i, extend reach</span>
<span class="kw">int</span> reach = <span class="nm">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++) {
    <span class="kw">if</span> (i &gt; reach) <span class="kw">return false</span>;         <span class="cm">// can't reach this index</span>
    reach = Math.<span class="fn">max</span>(reach, i + nums[i]);  <span class="cm">// extend farthest jump</span>
}
<span class="kw">return true</span>;  <span class="cm">// reached the end</span>`}
  },
  {
    icon:'📅', name:'Intervals', accent:'#93c5fd',
    tagline:'Sort by start time, then merge or count',
    hook:"You have a bunch of TV shows you want to watch. Some overlap! Sort them by when they start. Now check: does the next show start BEFORE the current one ends? If yes — overlap! Merge them into one longer block. All interval problems start with sorting. After that, it's just a simple left-to-right scan.",
    svg:`<svg viewBox="0 0 600 220" style="max-height:220px;width:100%"><style>@keyframes iv-merge{0%,40%{opacity:1}50%{opacity:.5}60%,100%{opacity:0}} @keyframes iv-result{0%,50%{opacity:0}60%,100%{opacity:1}}</style><rect width="600" height="220" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Intervals: Sort then Merge Overlapping</text><rect x="100" y="50" width="200" height="25" fill="rgba(147,197,253,.2)" stroke="#93c5fd" rx="4"/><text x="200" y="67" fill="#93c5fd" text-anchor="middle" font-size="11" font-family="monospace">[1,5]</text><rect x="180" y="85" width="180" height="25" fill="rgba(167,139,250,.2)" stroke="#a78bfa" rx="4"/><text x="270" y="102" fill="#a78bfa" text-anchor="middle" font-size="11" font-family="monospace">[3,7]</text><text x="50" y="75" fill="#ff4d6d" font-size="11" font-family="monospace">overlap!</text><rect x="350" y="50" width="150" height="25" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="4"/><text x="425" y="67" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace">[8,12]</text><text x="300" y="135" fill="#00ff88" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">↓ After merging ↓</text><rect x="100" y="150" width="260" height="25" fill="rgba(147,197,253,.3)" stroke="#93c5fd" rx="4" stroke-width="2"/><text x="230" y="167" fill="#93c5fd" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold">[1,7] merged!</text><rect x="350" y="150" width="150" height="25" fill="rgba(0,255,136,.2)" stroke="#00ff88" rx="4"/><text x="425" y="167" fill="#00ff88" text-anchor="middle" font-size="12" font-family="monospace">[8,12]</text><rect x="50" y="190" width="500" height="25" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="207" fill="#93c5fd" text-anchor="middle" font-size="11" font-family="monospace">Sort by start → scan → if overlap: merge (extend end time)</text></svg>`,
    complexity:[{badge:'red',big:'O(n²)',label:'COMPARE ALL',desc:'Check every pair of intervals'},{badge:'yellow',big:'O(n log n)',label:'SORT + SCAN',desc:'Sort by start, single pass merge'}],
    meterWidth:'83%',
    code:{python:`<span class="cm"># INTERVALS — Merge Template</span>
<span class="cm"># TIME: O(n log n) | SPACE: O(n)</span>

<span class="kw">def</span> <span class="fn">merge</span>(intervals):
    intervals.sort(key=<span class="kw">lambda</span> x: x[<span class="nm">0</span>])
    merged = [intervals[<span class="nm">0</span>]]

    <span class="kw">for</span> start, end <span class="kw">in</span> intervals[<span class="nm">1</span>:]:
        <span class="kw">if</span> start &lt;= merged[-<span class="nm">1</span>][<span class="nm">1</span>]:  <span class="cm"># Overlap!</span>
            merged[-<span class="nm">1</span>][<span class="nm">1</span>] = <span class="fn">max</span>(merged[-<span class="nm">1</span>][<span class="nm">1</span>], end)
        <span class="kw">else</span>:
            merged.append([start, end])

    <span class="kw">return</span> merged`,csharp:`<span class="cm">// INTERVALS — Merge</span>
<span class="kw">public</span> <span class="tp">int</span>[][] <span class="fn">Merge</span>(<span class="tp">int</span>[][] intervals) {
    Array.Sort(intervals, (a,b) => a[<span class="nm">0</span>]-b[<span class="nm">0</span>]);
    <span class="kw">var</span> merged = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>[]&gt;{intervals[<span class="nm">0</span>]};
    <span class="kw">foreach</span> (<span class="kw">var</span> iv <span class="kw">in</span> intervals) {
        <span class="kw">if</span> (iv[<span class="nm">0</span>]&lt;=merged[^<span class="nm">1</span>][<span class="nm">1</span>])
            merged[^<span class="nm">1</span>][<span class="nm">1</span>]=Math.Max(merged[^<span class="nm">1</span>][<span class="nm">1</span>],iv[<span class="nm">1</span>]);
        <span class="kw">else</span> merged.Add(iv);
    }
    <span class="kw">return</span> merged.ToArray();
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// INTERVALS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Merge overlapping, meetings, time ranges</span>
<span class="cm">// TIME: O(n log n) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// INTERVALS — Merge Overlapping</span>
<span class="cm">// Input: [[1,3],[2,6],[8,10],[15,18]]  Output: [[1,6],[8,10],[15,18]]</span>

<span class="kw">public</span> <span class="tp">int</span>[][] <span class="fn">merge</span>(<span class="tp">int</span>[][] intervals) {
    Arrays.sort(intervals, (a,b)-&gt;a[<span class="nm">0</span>]-b[<span class="nm">0</span>]); <span class="cm">// Sort by start time</span>
    <span class="tp">List</span>&lt;<span class="tp">int</span>[]&gt; merged = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    merged.add(intervals[<span class="nm">0</span>]);              <span class="cm">// Seed with first interval</span>

    <span class="kw">for</span> (<span class="tp">int</span>[] iv : intervals) {
        <span class="tp">int</span>[] last = merged.get(merged.size() - <span class="nm">1</span>);
        <span class="kw">if</span> (iv[<span class="nm">0</span>] &lt;= last[<span class="nm">1</span>])               <span class="cm">// Overlap! Extend end</span>
            last[<span class="nm">1</span>] = Math.max(last[<span class="nm">1</span>], iv[<span class="nm">1</span>]);
        <span class="kw">else</span>
            merged.add(iv);                <span class="cm">// No overlap — new group</span>
    }
    <span class="kw">return</span> merged.toArray(<span class="kw">new</span> <span class="tp">int</span>[<span class="nm">0</span>][]);
}

<span class="cm">// ─── BONUS: Insert Interval ───</span>
<span class="kw">public</span> <span class="tp">int</span>[][] <span class="fn">insert</span>(<span class="tp">int</span>[][] intervals, <span class="tp">int</span>[] newInterval) {
    <span class="tp">List</span>&lt;<span class="tp">int</span>[]&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="tp">int</span>[] iv : intervals) {
        <span class="kw">if</span> (iv[<span class="nm">1</span>] &lt; newInterval[<span class="nm">0</span>])        <span class="cm">// Before new — add as-is</span>
            result.add(iv);
        <span class="kw">else if</span> (iv[<span class="nm">0</span>] &gt; newInterval[<span class="nm">1</span>]) { <span class="cm">// After new — insert new first</span>
            result.add(newInterval);
            newInterval = iv;
        } <span class="kw">else</span> {                           <span class="cm">// Overlap — merge into new</span>
            newInterval[<span class="nm">0</span>] = Math.min(newInterval[<span class="nm">0</span>], iv[<span class="nm">0</span>]);
            newInterval[<span class="nm">1</span>] = Math.max(newInterval[<span class="nm">1</span>], iv[<span class="nm">1</span>]);
        }
    }
    result.add(newInterval);
    <span class="kw">return</span> result.toArray(<span class="kw">new</span> <span class="tp">int</span>[<span class="nm">0</span>][]);
}`},
    cheat:{trigger:'intervals, meetings, time ranges, merge overlapping, schedule',firstLine:'Arrays.sort(intervals, (a, b) -> a[0] - b[0]);',gotcha:'Not considering adjacent intervals (end == start of next)',pitch:"I'll sort by start time and scan, merging overlapping intervals based on end times.",
      snippet: `<span class="cm">// WHY sort by start? Overlaps become adjacent → simple left-to-right merge</span>
Arrays.<span class="fn">sort</span>(intervals, (a,b) -&gt; a[<span class="nm">0</span>]-b[<span class="nm">0</span>]);
<span class="tp">List</span>&lt;<span class="kw">int</span>[]&gt; merged = <span class="kw">new</span> <span class="fn">ArrayList</span>&lt;&gt;();
merged.<span class="fn">add</span>(intervals[<span class="nm">0</span>]);
<span class="kw">for</span> (<span class="kw">int</span>[] iv : intervals) {
    <span class="kw">int</span>[] last = merged.<span class="fn">get</span>(merged.<span class="fn">size</span>()-<span class="nm">1</span>);
    <span class="kw">if</span> (iv[<span class="nm">0</span>] &lt;= last[<span class="nm">1</span>]) last[<span class="nm">1</span>] = Math.<span class="fn">max</span>(last[<span class="nm">1</span>], iv[<span class="nm">1</span>]); <span class="cm">// overlap → extend</span>
    <span class="kw">else</span> merged.<span class="fn">add</span>(iv);  <span class="cm">// no overlap → new interval</span>
}`},
    memoryHack:{
      oneSentence:'Sort by start time, then walk forward merging any interval whose start overlaps the previous end.',
      flowchart:{
        nodes:[
          {id:'start',label:'Sort by start',type:'start',x:290,y:20},
          {id:'init',label:'merged=[first]',type:'action',x:290,y:75},
          {id:'loop',label:'For each intv',type:'action',x:290,y:130},
          {id:'check',label:'Overlaps last?',type:'decision',x:290,y:185},
          {id:'extend',label:'Extend end',type:'action',x:100,y:185},
          {id:'append',label:'Append new',type:'action',x:480,y:185},
          {id:'done',label:'Return merged',type:'end',x:290,y:240}
        ],
        edges:[
          {from:'start',to:'init',label:''},
          {from:'init',to:'loop',label:''},
          {from:'loop',to:'check',label:''},
          {from:'check',to:'extend',label:'YES'},
          {from:'check',to:'append',label:'NO'},
          {from:'extend',to:'loop',label:''},
          {from:'append',to:'loop',label:''},
          {from:'loop',to:'done',label:''}
        ]
      },
      annotatedCode:[
        {line:'int[][] merge(int[][] intervals) {',stepId:'start',note:'Merge overlapping intervals',color:'#00cfff'},
        {line:'    Arrays.sort(intervals, (a,b)->a[0]-b[0]);',stepId:'start',note:'Sort by start — overlaps become adjacent',color:'#00ff88'},
        {line:'    List<int[]> merged = new ArrayList<>();',stepId:'init',note:'Result list',color:'#a78bfa'},
        {line:'    merged.add(intervals[0]);',stepId:'init',note:'Seed with first interval',color:'#a78bfa'},
        {line:'    for (int[] iv : intervals) {',stepId:'loop',note:'Walk all intervals',color:'#ffd600'},
        {line:'        int[] last = merged.get(merged.size()-1);',stepId:'loop',note:'Get last merged',color:'#ffd600'},
        {line:'        if (iv[0] <= last[1])',stepId:'check',note:'Overlaps last merged?',color:'#ffd600'},
        {line:'            last[1] = Math.max(last[1], iv[1]);',stepId:'extend',note:'Extend end',color:'#00ff88'},
        {line:'        else merged.add(iv);',stepId:'append',note:'No overlap — new group',color:'#a78bfa'},
        {line:'    } return merged.toArray(new int[0][]);',stepId:'done',note:'All merged',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'Input: [[1,3],[2,6],[8,10],[15,18]]  merged=[[1,3]]',annotation:'Sorted. Seed with [1,3]'},
        {label:'Step 2',art:'[2,6]: 2<=3 OVERLAP → merged=[[1,6]]',annotation:'Extend end from 3 to 6'},
        {label:'Step 3',art:'[8,10]: 8>6 NO OVERLAP → merged=[[1,6],[8,10]]',annotation:'Append new interval'},
        {label:'Step 4',art:'[15,18]: 15>10 → merged=[[1,6],[8,10],[15,18]]',annotation:'Final result!'}
      ],
      variations:[
        {name:'Merge Intervals',desc:'Sort by start, extend end on overlap',problem:'Merge Intervals (#56)'},
        {name:'Insert Interval',desc:'Add new interval, then merge overlapping',problem:'Insert Interval (#57)'},
        {name:'Non-overlapping Intervals',desc:'Sort by end, greedily keep earliest finishers',problem:'Non-overlapping Intervals (#435)'}
      ],
      title:'Intervals',
      mnemonic:'SORT → SEED → SCAN → OVERLAP? EXTEND : APPEND',
      steps:['Sort by start','Init merged=[first]','Overlap? Extend end','No overlap? Append'],
      why:'After sorting, overlaps are always adjacent — just compare to last merged.'
    }
  },
  {
    icon:'🔢', name:'Math & Geometry', accent:'#fca5a5',
    tagline:'Pattern recognition + clever math tricks',
    hook:"Some puzzles have clever shortcuts. Rotating a picture 90 degrees? Don't move each pixel one at a time — first flip the picture upside down, then flip it diagonally. Two simple flips = one rotation! Math problems reward you for finding the TRICK instead of brute-forcing. Once you see the trick, it feels like a magic show.",
    svg:`<svg viewBox="0 0 600 220" style="max-height:220px;width:100%"><style>@keyframes mt-swap{0%,100%{transform:none}50%{transform:scale(.95)}}</style><rect width="600" height="220" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Matrix Rotation: Transpose + Reverse Rows</text><text x="130" y="50" fill="#fca5a5" text-anchor="middle" font-size="12" font-family="monospace">Original</text><rect x="80" y="60" width="30" height="30" fill="#1a1d2e" stroke="#fca5a5" rx="2"/><text x="95" y="80" fill="#fca5a5" text-anchor="middle" font-size="12">1</text><rect x="115" y="60" width="30" height="30" fill="#1a1d2e" stroke="#fca5a5" rx="2"/><text x="130" y="80" fill="#fca5a5" text-anchor="middle" font-size="12">2</text><rect x="150" y="60" width="30" height="30" fill="#1a1d2e" stroke="#fca5a5" rx="2"/><text x="165" y="80" fill="#fca5a5" text-anchor="middle" font-size="12">3</text><rect x="80" y="95" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="95" y="115" fill="#e8eaf0" text-anchor="middle" font-size="12">4</text><rect x="115" y="95" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="130" y="115" fill="#e8eaf0" text-anchor="middle" font-size="12">5</text><rect x="150" y="95" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="165" y="115" fill="#e8eaf0" text-anchor="middle" font-size="12">6</text><rect x="80" y="130" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="95" y="150" fill="#e8eaf0" text-anchor="middle" font-size="12">7</text><rect x="115" y="130" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="130" y="150" fill="#e8eaf0" text-anchor="middle" font-size="12">8</text><rect x="150" y="130" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="165" y="150" fill="#e8eaf0" text-anchor="middle" font-size="12">9</text><text x="230" y="110" fill="#fca5a5" font-size="20">→</text><text x="230" y="130" fill="#4a5268" font-size="9" font-family="monospace">90° CW</text><text x="370" y="50" fill="#00ff88" text-anchor="middle" font-size="12" font-family="monospace">Result</text><rect x="320" y="60" width="30" height="30" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="2"/><text x="335" y="80" fill="#00ff88" text-anchor="middle" font-size="12">7</text><rect x="355" y="60" width="30" height="30" fill="rgba(0,255,136,.1)" stroke="#00ff88" rx="2"/><text x="370" y="80" fill="#00ff88" text-anchor="middle" font-size="12">4</text><rect x="390" y="60" width="30" height="30" fill="rgba(0,255,136,.1)" stroke="#00ff88" rx="2"/><text x="405" y="80" fill="#00ff88" text-anchor="middle" font-size="12">1</text><rect x="320" y="95" width="30" height="30" fill="rgba(0,255,136,.1)" stroke="#4a5268" rx="2"/><text x="335" y="115" fill="#e8eaf0" text-anchor="middle" font-size="12">8</text><rect x="355" y="95" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="370" y="115" fill="#e8eaf0" text-anchor="middle" font-size="12">5</text><rect x="390" y="95" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="405" y="115" fill="#e8eaf0" text-anchor="middle" font-size="12">2</text><rect x="320" y="130" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="335" y="150" fill="#e8eaf0" text-anchor="middle" font-size="12">9</text><rect x="355" y="130" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="370" y="150" fill="#e8eaf0" text-anchor="middle" font-size="12">6</text><rect x="390" y="130" width="30" height="30" fill="#1a1d2e" stroke="#4a5268" rx="2"/><text x="405" y="150" fill="#e8eaf0" text-anchor="middle" font-size="12">3</text><rect x="50" y="180" width="500" height="30" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="200" fill="#fca5a5" text-anchor="middle" font-size="11" font-family="monospace">Step 1: Transpose (swap [i][j] ↔ [j][i]) → Step 2: Reverse each row</text></svg>`,
    complexity:[{badge:'yellow',big:'O(n²)',label:'IN-PLACE',desc:'Transpose + reverse, no extra space'},{badge:'blue',big:'O(1)',label:'MATH TRICKS',desc:'Modular arithmetic, power tricks'}],
    meterWidth:'75%',
    code:{python:`<span class="cm"># MATH — Rotate Image (90° clockwise)</span>
<span class="cm"># Step 1: Transpose  Step 2: Reverse rows</span>

<span class="kw">def</span> <span class="fn">rotate</span>(matrix):
    n = <span class="fn">len</span>(matrix)
    <span class="cm"># Transpose</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(i+<span class="nm">1</span>, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    <span class="cm"># Reverse each row</span>
    <span class="kw">for</span> row <span class="kw">in</span> matrix:
        row.reverse()`,csharp:`<span class="cm">// Rotate Image — Transpose + Reverse</span>
<span class="kw">public void</span> <span class="fn">Rotate</span>(<span class="tp">int</span>[][] matrix) {
    <span class="tp">int</span> n = matrix.Length;
    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>;i&lt;n;i++)
        <span class="kw">for</span>(<span class="tp">int</span> j=i+<span class="nm">1</span>;j&lt;n;j++)
            (matrix[i][j],matrix[j][i])=(matrix[j][i],matrix[i][j]);
    <span class="kw">foreach</span>(<span class="kw">var</span> row <span class="kw">in</span> matrix) Array.Reverse(row);
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// MATH &amp; GEOMETRY — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Matrix rotation, spiral, digit ops, power</span>
<span class="cm">// TIME: O(n²) for matrix | SPACE: O(1) in-place</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// Rotate Image — Transpose + Reverse (90° CW)</span>
<span class="cm">// Input: [[1,2,3],[4,5,6],[7,8,9]]</span>
<span class="cm">// Output: [[7,4,1],[8,5,2],[9,6,3]]</span>

<span class="kw">public void</span> <span class="fn">rotate</span>(<span class="tp">int</span>[][] matrix) {
    <span class="tp">int</span> n = matrix.length;

    <span class="cm">// Step 1: Transpose — swap [i][j] with [j][i]</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++)
        <span class="kw">for</span> (<span class="tp">int</span> j = i + <span class="nm">1</span>; j &lt; n; j++) {
            <span class="tp">int</span> tmp = matrix[i][j];       <span class="cm">// Swap across diagonal</span>
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }

    <span class="cm">// Step 2: Reverse each row</span>
    <span class="kw">for</span> (<span class="tp">int</span>[] row : matrix) {
        <span class="tp">int</span> l = <span class="nm">0</span>, r = n - <span class="nm">1</span>;
        <span class="kw">while</span> (l &lt; r) {                <span class="cm">// Two-pointer mirror</span>
            <span class="tp">int</span> t = row[l];
            row[l] = row[r];
            row[r] = t;
            l++; r--;
        }
    }
}

<span class="cm">// ─── BONUS: Spiral Matrix ───</span>
<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; <span class="fn">spiralOrder</span>(<span class="tp">int</span>[][] matrix) {
    <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; res = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="tp">int</span> top = <span class="nm">0</span>, bot = matrix.length - <span class="nm">1</span>;
    <span class="tp">int</span> left = <span class="nm">0</span>, right = matrix[<span class="nm">0</span>].length - <span class="nm">1</span>;
    <span class="kw">while</span> (top &lt;= bot &amp;&amp; left &lt;= right) {
        <span class="kw">for</span> (<span class="tp">int</span> j = left; j &lt;= right; j++) res.add(matrix[top][j]); <span class="cm">// →</span>
        top++;
        <span class="kw">for</span> (<span class="tp">int</span> i = top; i &lt;= bot; i++) res.add(matrix[i][right]); <span class="cm">// ↓</span>
        right--;
        <span class="kw">if</span> (top &lt;= bot) { <span class="kw">for</span> (<span class="tp">int</span> j = right; j &gt;= left; j--) res.add(matrix[bot][j]); bot--; } <span class="cm">// ←</span>
        <span class="kw">if</span> (left &lt;= right) { <span class="kw">for</span> (<span class="tp">int</span> i = bot; i &gt;= top; i--) res.add(matrix[i][left]); left++; } <span class="cm">// ↑</span>
    }
    <span class="kw">return</span> res;
}`},
    cheat:{trigger:'matrix rotation, spiral, digit operations, power, geometry',firstLine:'// Transpose: swap matrix[i][j] and matrix[j][i]',gotcha:'Modifying matrix while reading from it — use temp var or do in-place carefully',pitch:"I'll use the transpose-then-reverse trick for rotation, or simulate with direction vectors for spiral.",
      snippet: `<span class="cm">// WHY transpose + reverse? It IS 90° rotation — no extra space needed</span>
<span class="kw">int</span> n = matrix.length;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; n; i++)          <span class="cm">// Step 1: transpose</span>
    <span class="kw">for</span> (<span class="kw">int</span> j = i+<span class="nm">1</span>; j &lt; n; j++)
        { <span class="kw">int</span> tmp=matrix[i][j]; matrix[i][j]=matrix[j][i]; matrix[j][i]=tmp; }
<span class="kw">for</span> (<span class="kw">int</span>[] row : matrix)              <span class="cm">// Step 2: reverse each row</span>
    <span class="kw">for</span> (<span class="kw">int</span> l=<span class="nm">0</span>,r=n-<span class="nm">1</span>; l&lt;r; l++,r--)
        { <span class="kw">int</span> tmp=row[l]; row[l]=row[r]; row[r]=tmp; }`},
    memoryHack:{
      oneSentence:'Transpose the matrix (swap rows and columns), then reverse each row — that is a 90-degree clockwise rotation.',
      flowchart:{
        nodes:[
          {id:'start',label:'Get n = size',type:'start',x:290,y:20},
          {id:'transpose',label:'Transpose matrix',type:'action',x:290,y:80},
          {id:'swaploop',label:'Swap [i][j],[j][i]',type:'action',x:490,y:80},
          {id:'reverse',label:'Reverse each row',type:'action',x:290,y:150},
          {id:'revloop',label:'row.reverse()',type:'action',x:490,y:150},
          {id:'done',label:'Done (in-place)',type:'end',x:290,y:230}
        ],
        edges:[
          {from:'start',to:'transpose',label:''},
          {from:'transpose',to:'swaploop',label:''},
          {from:'swaploop',to:'reverse',label:''},
          {from:'reverse',to:'revloop',label:''},
          {from:'revloop',to:'done',label:''}
        ]
      },
      annotatedCode:[
        {line:'void rotate(int[][] matrix) {',stepId:'start',note:'Rotate NxN 90° CW in-place',color:'#00cfff'},
        {line:'    int n = matrix.length;',stepId:'start',note:'Square matrix dimension',color:'#00cfff'},
        {line:'    // Step 1: Transpose',stepId:'transpose',note:'Flip along main diagonal',color:'#a78bfa'},
        {line:'    for (int i = 0; i < n; i++)',stepId:'transpose',note:'Iterate rows',color:'#ffd600'},
        {line:'        for (int j = i + 1; j < n; j++) {',stepId:'swaploop',note:'Only upper triangle (j>i)',color:'#ffd600'},
        {line:'            int tmp=matrix[i][j]; matrix[i][j]=matrix[j][i]; matrix[j][i]=tmp;',stepId:'swaploop',note:'Swap across diagonal',color:'#a78bfa'},
        {line:'    } // Step 2: Reverse each row',stepId:'reverse',note:'Mirror horizontally',color:'#00ff88'},
        {line:'    for (int[] row : matrix) {',stepId:'revloop',note:'Each row independently',color:'#ffd600'},
        {line:'        int l=0, r=n-1; while(l<r) { int t=row[l]; row[l]=row[r]; row[r]=t; l++; r--; }',stepId:'revloop',note:'Transpose + reverse = 90° CW!',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Original',art:'1  2  3\\n4  5  6\\n7  8  9',annotation:'Starting 3x3 matrix'},
        {label:'Transpose',art:'1  4  7\\n2  5  8\\n3  6  9',annotation:'Rows became columns (swapped across diagonal)'},
        {label:'Reverse',art:'7  4  1\\n8  5  2\\n9  6  3',annotation:'Each row reversed. Rotated 90° CW!'}
      ],
      variations:[
        {name:'Rotate Image',desc:'Transpose then reverse rows for 90° CW',problem:'Rotate Image (#48)'},
        {name:'Spiral Matrix',desc:'Walk with 4 shrinking boundaries',problem:'Spiral Matrix (#54)'},
        {name:'Set Matrix Zeroes',desc:'Use first row/col as markers, then zero out',problem:'Set Matrix Zeroes (#73)'}
      ],
      title:'Math & Geometry',
      mnemonic:'TRANSPOSE (flip diagonal) → REVERSE ROWS → ROTATED!',
      steps:['Transpose: swap [i][j] with [j][i]','Reverse each row','Done — rotated 90° CW in-place'],
      why:'Rotation = two simple ops. Transpose + reverse = 90° CW.'
    }
  },
  {
    icon:'💾', name:'Bit Manipulation', accent:'#a5b4fc',
    tagline:'XOR, shifts, masks — the raw power',
    hook:"Computers think in 1s and 0s. XOR is a magic trick: same number XOR itself equals ZERO (they cancel out!), and any number XOR zero stays the same. So if you XOR all numbers together, duplicates vanish and the unique one remains. It's like a magic disappearing act — pairs vanish, the lonely number stays!",
    svg:`<svg viewBox="0 0 600 220" style="max-height:220px;width:100%"><style>@keyframes bit-flip{0%,100%{fill:#a5b4fc}50%{fill:#ff4d6d}}</style><rect width="600" height="220" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">XOR Magic: a ^ a = 0, a ^ 0 = a</text><text x="100" y="60" fill="#a5b4fc" font-size="12" font-family="monospace">5 in binary:</text><text x="250" y="60" fill="#a5b4fc" font-size="16" font-family="monospace" font-weight="bold">1 0 1</text><text x="100" y="85" fill="#e879f9" font-size="12" font-family="monospace">3 in binary:</text><text x="250" y="85" fill="#e879f9" font-size="16" font-family="monospace" font-weight="bold">0 1 1</text><line x1="230" y1="92" x2="290" y2="92" stroke="#4a5268" stroke-width="1"/><text x="100" y="110" fill="#00ff88" font-size="12" font-family="monospace">5 XOR 3 =</text><text x="250" y="110" fill="#00ff88" font-size="16" font-family="monospace" font-weight="bold">1 1 0</text><text x="320" y="110" fill="#00ff88" font-size="12" font-family="monospace">= 6</text><text x="100" y="145" fill="#fbbf24" font-size="12" font-family="monospace">XOR rule:</text><text x="250" y="145" fill="#fbbf24" font-size="12" font-family="monospace">same bits → 0, diff bits → 1</text><rect x="50" y="160" width="500" height="45" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="180" fill="#a5b4fc" text-anchor="middle" font-size="12" font-family="monospace">[4,1,2,1,2] → 4^1^2^1^2 = 4^(1^1)^(2^2) = 4^0^0 = 4</text><text x="300" y="198" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace" font-weight="bold">Duplicates cancel! Only unique remains ✓</text></svg>`,
    complexity:[{badge:'yellow',big:'O(n)',label:'HASHSET',desc:'Track seen numbers with extra space'},{badge:'green',big:'O(n) / O(1)',label:'BIT MANIPULATION',desc:'XOR all — no extra space needed!'}],
    meterWidth:'90%',
    code:{python:`<span class="cm"># BIT MANIPULATION — THE TEMPLATE</span>
<span class="cm"># TIME: O(n) | SPACE: O(1)</span>

<span class="cm"># ─── Single Number (XOR all) ───</span>
<span class="kw">def</span> <span class="fn">singleNumber</span>(nums):
    result = <span class="nm">0</span>
    <span class="kw">for</span> num <span class="kw">in</span> nums:
        result ^= num  <span class="cm"># XOR: duplicates cancel to 0</span>
    <span class="kw">return</span> result

<span class="cm"># ─── Counting Bits ───</span>
<span class="cm"># Brian Kernighan: n &amp; (n-1) removes lowest set bit</span>
<span class="kw">def</span> <span class="fn">countBits</span>(n):
    dp = [<span class="nm">0</span>] * (n + <span class="nm">1</span>)
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, n + <span class="nm">1</span>):
        dp[i] = dp[i &amp; (i-<span class="nm">1</span>)] + <span class="nm">1</span>  <span class="cm"># Remove lowest bit + 1</span>
    <span class="kw">return</span> dp`,csharp:`<span class="cm">// BIT MANIPULATION</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">SingleNumber</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> result = <span class="nm">0</span>;
    <span class="kw">foreach</span> (<span class="tp">int</span> n <span class="kw">in</span> nums) result ^= n;
    <span class="kw">return</span> result;
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// BIT MANIPULATION — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Single unique, missing number, count bits</span>
<span class="cm">// TIME: O(n) | SPACE: O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="cm">// ─── Single Number (XOR all) ───</span>
<span class="cm">// Input: [4,1,2,1,2]  Output: 4</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">singleNumber</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> result = <span class="nm">0</span>;                        <span class="cm">// XOR identity: a ^ 0 = a</span>
    <span class="kw">for</span> (<span class="tp">int</span> n : nums)
        result ^= n;                       <span class="cm">// Duplicates cancel (a^a=0)</span>
    <span class="kw">return</span> result;                         <span class="cm">// Only unique survives!</span>
}

<span class="cm">// ─── BONUS: Counting Bits ───</span>
<span class="cm">// Brian Kernighan: n &amp; (n-1) removes lowest set bit</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">countBits</span>(<span class="tp">int</span> n) {
    <span class="tp">int</span>[] dp = <span class="kw">new</span> <span class="tp">int</span>[n + <span class="nm">1</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt;= n; i++)
        dp[i] = dp[i &amp; (i - <span class="nm">1</span>)] + <span class="nm">1</span>;      <span class="cm">// Remove lowest bit + 1</span>
    <span class="kw">return</span> dp;
}

<span class="cm">// ─── BONUS: Missing Number ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">missingNumber</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> xor = nums.length;                 <span class="cm">// Start with n</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++)
        xor ^= i ^ nums[i];               <span class="cm">// XOR index and value</span>
    <span class="kw">return</span> xor;                            <span class="cm">// Missing one survives</span>
}`},
    cheat:{trigger:'single unique, missing number, count bits, without +/-, power of 2',firstLine:'int result = 0; for (int num : nums) result ^= num;',gotcha:'Confusing & (AND) with && (logical) and forgetting operator precedence',pitch:"I'll use XOR to cancel duplicates, or bit masking to manipulate bits in O(n) time O(1) space.",
      snippet: `<span class="cm">// WHY XOR? a ^ a = 0, a ^ 0 = a → duplicates cancel, loner survives</span>
<span class="kw">int</span> result = <span class="nm">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> num : nums)
    result ^= num;  <span class="cm">// pairs cancel out to 0</span>
<span class="kw">return</span> result;  <span class="cm">// only the unique number remains — O(n) time, O(1) space</span>`},
    memoryHack:{
      oneSentence:'XOR every number together — duplicates cancel to zero and the lone survivor remains.',
      flowchart:{
        nodes:[
          {id:'start',label:'result = 0',type:'start',x:290,y:20},
          {id:'loop',label:'For each num',type:'action',x:290,y:80},
          {id:'xor',label:'result ^= num',type:'action',x:290,y:140},
          {id:'why',label:'a^a=0, a^0=a',type:'action',x:500,y:140},
          {id:'pairs',label:'Pairs cancel out',type:'action',x:500,y:80},
          {id:'done',label:'Return result',type:'end',x:290,y:230}
        ],
        edges:[
          {from:'start',to:'loop',label:''},
          {from:'loop',to:'xor',label:''},
          {from:'xor',to:'why',label:''},
          {from:'why',to:'pairs',label:''},
          {from:'pairs',to:'loop',label:''},
          {from:'loop',to:'done',label:''}
        ]
      },
      annotatedCode:[
        {line:'int singleNumber(int[] nums) {',stepId:'start',note:'Find the one unique element',color:'#00cfff'},
        {line:'    int result = 0;',stepId:'start',note:'XOR identity: a ^ 0 = a',color:'#00ff88'},
        {line:'    for (int num : nums)',stepId:'loop',note:'Process every number',color:'#ffd600'},
        {line:'        result ^= num;',stepId:'xor',note:'Duplicates cancel (a^a=0)',color:'#a78bfa'},
        {line:'    return result;',stepId:'done',note:'Only unique survives',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'nums=[4,1,2,1,2]  0^4=4   result=4 (0100)',annotation:'XOR with 0 gives number itself'},
        {label:'Step 2',art:'4^1=5   result=5 (0101)',annotation:'4 (0100) XOR 1 (0001) = 5'},
        {label:'Step 3',art:'5^2=7   result=7 (0111)',annotation:'5 XOR 2 = 7'},
        {label:'Step 4',art:'7^1=6   result=6 (0110)',annotation:'The two 1s have cancelled!'},
        {label:'Step 5',art:'6^2=4   result=4 (0100)',annotation:'The two 2s cancelled! Only 4 remains.'},
        {label:'Final',art:'Return 4 — the single number!',annotation:'All pairs XORed to 0. Lone element survives.'}
      ],
      variations:[
        {name:'Single Number',desc:'XOR all — duplicates cancel, unique survives',problem:'Single Number (#136)'},
        {name:'Number of 1 Bits',desc:'n & (n-1) clears lowest set bit each time',problem:'Number of 1 Bits (#191)'},
        {name:'Missing Number',desc:'XOR indices 0..n with elements — missing survives',problem:'Missing Number (#268)'}
      ],
      title:'Bit Manipulation',
      mnemonic:'ZERO → XOR ALL → PAIRS DIE → LONER LIVES',
      steps:['Init result=0','XOR each element','Duplicates cancel: a^a=0','Return lone survivor'],
      why:'XOR is self-inverse and commutative — pairs cancel, loner remains. O(n) time O(1) space.'
    }
  },
  {
    icon:'📊', name:'Prefix / Suffix Arrays', accent:'#fb923c',
    tagline:'Pre-compute cumulative answers from both directions',
    hook:"Imagine you're in a line of kids and each kid holds a number. The teacher asks: 'What's the product of everyone EXCEPT you?' You could multiply everyone each time — slow! OR, before anyone asks, compute the running product from the LEFT and from the RIGHT. Then for each kid, just multiply left-product × right-product. That pre-computation trick is Prefix/Suffix! WHEN TO RECOGNIZE: If you think 'I need info from BOTH sides' or see yourself scanning left AND right repeatedly, that's your cue. Trapping Rain Water? Water at position i depends on tallest bar on LEFT and tallest on RIGHT — both directions needed!",
    svg:`<svg viewBox="0 0 600 320" style="max-height:320px;width:100%"><rect width="600" height="320" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Prefix / Suffix: Product Except Self</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">nums = [1, 2, 3, 4]</text><text x="60" y="80" fill="#fb923c" font-size="12" font-weight="bold" font-family="monospace">→ Prefix products (left to right)</text><rect x="80" y="90" width="50" height="35" fill="#1a1d2e" stroke="#fb923c" rx="4"/><text x="105" y="113" fill="#fb923c" text-anchor="middle" font-size="13">1</text><rect x="180" y="90" width="50" height="35" fill="#1a1d2e" stroke="#fb923c" rx="4"/><text x="205" y="113" fill="#fb923c" text-anchor="middle" font-size="13">1</text><rect x="280" y="90" width="50" height="35" fill="#1a1d2e" stroke="#fb923c" rx="4"/><text x="305" y="113" fill="#fb923c" text-anchor="middle" font-size="13">2</text><rect x="380" y="90" width="50" height="35" fill="#1a1d2e" stroke="#fb923c" rx="4"/><text x="405" y="113" fill="#fb923c" text-anchor="middle" font-size="13">6</text><text x="60" y="155" fill="#a78bfa" font-size="12" font-weight="bold" font-family="monospace">← Suffix products (right to left)</text><rect x="80" y="165" width="50" height="35" fill="#1a1d2e" stroke="#a78bfa" rx="4"/><text x="105" y="188" fill="#a78bfa" text-anchor="middle" font-size="13">24</text><rect x="180" y="165" width="50" height="35" fill="#1a1d2e" stroke="#a78bfa" rx="4"/><text x="205" y="188" fill="#a78bfa" text-anchor="middle" font-size="13">12</text><rect x="280" y="165" width="50" height="35" fill="#1a1d2e" stroke="#a78bfa" rx="4"/><text x="305" y="188" fill="#a78bfa" text-anchor="middle" font-size="13">4</text><rect x="380" y="165" width="50" height="35" fill="#1a1d2e" stroke="#a78bfa" rx="4"/><text x="405" y="188" fill="#a78bfa" text-anchor="middle" font-size="13">1</text><text x="60" y="230" fill="#00ff88" font-size="12" font-weight="bold" font-family="monospace">= prefix[i] × suffix[i]</text><rect x="80" y="240" width="50" height="35" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="4"/><text x="105" y="263" fill="#00ff88" text-anchor="middle" font-size="13">24</text><rect x="180" y="240" width="50" height="35" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="4"/><text x="205" y="263" fill="#00ff88" text-anchor="middle" font-size="13">12</text><rect x="280" y="240" width="50" height="35" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="4"/><text x="305" y="263" fill="#00ff88" text-anchor="middle" font-size="13">8</text><rect x="380" y="240" width="50" height="35" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="4"/><text x="405" y="263" fill="#00ff88" text-anchor="middle" font-size="13">6</text><text x="300" y="300" fill="#ffd600" text-anchor="middle" font-size="11" font-family="monospace">Result: [24, 12, 8, 6] — no division needed!</text></svg>`,
    complexity:[
      {badge:'red',big:'O(n²)',label:'BRUTE FORCE',desc:'For each element, multiply all others'},
      {badge:'green',big:'O(n)',label:'PREFIX+SUFFIX',desc:'Two passes: build left[], build right[], multiply'}
    ],
    meterWidth:'90%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># PREFIX / SUFFIX ARRAYS — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: "product/sum except self", "rain water", "left-right scan"</span>
<span class="cm"># TIME: O(n) | SPACE: O(n) or O(1) with in-place trick</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Product of Array Except Self ───</span>
<span class="kw">def</span> <span class="fn">productExceptSelf</span>(nums):
    n = <span class="fn">len</span>(nums)
    result = [<span class="nm">1</span>] * n

    <span class="cm"># Pass 1: prefix products (left → right)</span>
    prefix = <span class="nm">1</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        result[i] = prefix
        prefix *= nums[i]

    <span class="cm"># Pass 2: suffix products (right → left)</span>
    suffix = <span class="nm">1</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n - <span class="nm">1</span>, -<span class="nm">1</span>, -<span class="nm">1</span>):
        result[i] *= suffix
        suffix *= nums[i]

    <span class="kw">return</span> result

<span class="cm"># ─── Trapping Rain Water ───</span>
<span class="kw">def</span> <span class="fn">trap</span>(height):
    n = <span class="fn">len</span>(height)
    left_max = [<span class="nm">0</span>] * n
    right_max = [<span class="nm">0</span>] * n
    left_max[<span class="nm">0</span>] = height[<span class="nm">0</span>]
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, n):
        left_max[i] = <span class="fn">max</span>(left_max[i-<span class="nm">1</span>], height[i])
    right_max[n-<span class="nm">1</span>] = height[n-<span class="nm">1</span>]
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n-<span class="nm">2</span>, -<span class="nm">1</span>, -<span class="nm">1</span>):
        right_max[i] = <span class="fn">max</span>(right_max[i+<span class="nm">1</span>], height[i])
    <span class="kw">return</span> <span class="fn">sum</span>(<span class="fn">min</span>(left_max[i], right_max[i]) - height[i] <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n))`,
      java:`<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// PREFIX / SUFFIX ARRAYS — THE TEMPLATE</span>
<span class="cm">// TIME: O(n) | SPACE: O(n) or O(1)</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="cm">// ─── Product of Array Except Self ───</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">productExceptSelf</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> n = nums.length;
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[n];
    result[<span class="nm">0</span>] = <span class="nm">1</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt; n; i++)
        result[i] = result[i-<span class="nm">1</span>] * nums[i-<span class="nm">1</span>];  <span class="cm">// prefix</span>
    <span class="tp">int</span> suffix = <span class="nm">1</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = n-<span class="nm">1</span>; i &gt;= <span class="nm">0</span>; i--) {
        result[i] *= suffix;  <span class="cm">// multiply by suffix</span>
        suffix *= nums[i];
    }
    <span class="kw">return</span> result;
}

<span class="cm">// ─── Trapping Rain Water ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">trap</span>(<span class="tp">int</span>[] height) {
    <span class="tp">int</span> n = height.length;
    <span class="tp">int</span>[] leftMax = <span class="kw">new</span> <span class="tp">int</span>[n], rightMax = <span class="kw">new</span> <span class="tp">int</span>[n];
    leftMax[<span class="nm">0</span>] = height[<span class="nm">0</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt; n; i++)
        leftMax[i] = Math.max(leftMax[i-<span class="nm">1</span>], height[i]);
    rightMax[n-<span class="nm">1</span>] = height[n-<span class="nm">1</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = n-<span class="nm">2</span>; i &gt;= <span class="nm">0</span>; i--)
        rightMax[i] = Math.max(rightMax[i+<span class="nm">1</span>], height[i]);
    <span class="tp">int</span> water = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++)
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    <span class="kw">return</span> water;
}`,
      csharp:`<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// PREFIX / SUFFIX ARRAYS — THE TEMPLATE</span>
<span class="cm">// TIME: O(n) | SPACE: O(n) or O(1)</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">ProductExceptSelf</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> n = nums.Length;
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[n];
    result[<span class="nm">0</span>] = <span class="nm">1</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">1</span>; i &lt; n; i++)
        result[i] = result[i-<span class="nm">1</span>] * nums[i-<span class="nm">1</span>];
    <span class="tp">int</span> suffix = <span class="nm">1</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = n-<span class="nm">1</span>; i &gt;= <span class="nm">0</span>; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    <span class="kw">return</span> result;
}`
    },
    memoryHack:{
      oneSentence:'Build cumulative products from the left and right, then multiply them — each position gets everything except itself.',
      flowchart:{
        nodes:[
          {id:'start',label:'Init result[]=1s',type:'start',x:290,y:20},
          {id:'left',label:'Left → Right pass',type:'action',x:290,y:75},
          {id:'pfx',label:'result[i]=prefix',type:'action',x:290,y:130},
          {id:'right',label:'Right → Left pass',type:'action',x:290,y:185},
          {id:'sfx',label:'result[i]*=suffix',type:'action',x:290,y:240},
          {id:'done',label:'Return result',type:'end',x:290,y:295}
        ],
        edges:[
          {from:'start',to:'left',label:''},
          {from:'left',to:'pfx',label:'prefix *= nums[i]'},
          {from:'pfx',to:'right',label:''},
          {from:'right',to:'sfx',label:'suffix *= nums[i]'},
          {from:'sfx',to:'done',label:''}
        ]
      },
      annotatedCode:[
        {line:'int[] productExceptSelf(int[] nums) {',stepId:'start',note:'No division allowed!',color:'#5a5f70'},
        {line:'    int[] result = new int[n]; result[0]=1;',stepId:'start',note:'Seed with 1 (identity for multiplication)',color:'#fb923c'},
        {line:'    for (i=1..n) result[i] = result[i-1]*nums[i-1];',stepId:'pfx',note:'Left pass: each slot = product of everything LEFT',color:'#00ff88'},
        {line:'    int suffix = 1;',stepId:'right',note:'Now sweep from right',color:'#a78bfa'},
        {line:'    for (i=n-1..0) result[i] *= suffix; suffix *= nums[i];',stepId:'sfx',note:'Multiply by product of everything RIGHT',color:'#ffd600'},
        {line:'    return result;',stepId:'done',note:'prefix × suffix = everything except self!',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'PATTERN RECOGNITION',art:`Position i needs info from:
← LEFT side  [i]  RIGHT side →

If BOTH arrows needed:
→ Use Prefix/Suffix!`,annotation:'Key trigger: "I need data from both directions"'},
        {label:'Input',art:'nums = [1, 2, 3, 4]',annotation:'Goal: result[i] = product of all except nums[i]'},
        {label:'Left pass',art:'prefix: 1→1→2→6  result=[1,1,2,6]',annotation:'Each slot stores product of everything to its LEFT'},
        {label:'Right pass',art:'suffix: 1→4→12→24  result=[24,12,8,6]',annotation:'Multiply each slot by product of everything to its RIGHT'},
        {label:'Why it works',art:`Position 2 (value=3):
prefix[2]=2  (1×2 from left)
suffix[2]=4  (4 from right)
Result: 2×4=8 (skipped 3!)`,annotation:'prefix × suffix = everything except self'},
        {label:'Trapping Water Example',art:`height=[0,1,0,2,1,0,1,3]
Position 5: needs leftMax
           AND rightMax
→ Both directions = Prefix/Suffix!`,annotation:'Same pattern, different operation (max instead of product)'}
      ],
      variations:[
        {name:'Product of Array Except Self',desc:'Prefix product from left, suffix product from right, multiply',problem:'Product of Array Except Self (#238)'},
        {name:'Trapping Rain Water',desc:'leftMax[] from left, rightMax[] from right, water = min(L,R) - height',problem:'Trapping Rain Water (#42)'},
        {name:'Running Sum / Prefix Sum',desc:'prefix[i] = prefix[i-1] + nums[i] for range sum queries',problem:'Range Sum Query (#303)'}
      ],
      title:'LEFT PASS → RIGHT PASS',
      mnemonic:'LEFT PASS → RIGHT PASS — scan both directions, combine at each index',
      steps:['Init result array with 1s','Left→Right: result[i] = running prefix product','Right→Left: result[i] *= running suffix product','Each index now has product of everything except itself'],
      why:'WHEN TO USE: Ask "What does position i need?" If answer is "info from BOTH left AND right" → use this pattern! Examples: (1) Product Except Self: need leftProduct × rightProduct. (2) Trapping Rain Water: need leftMax AND rightMax to determine water level = min(leftMax, rightMax) - height. RECOGNITION TRIGGER: When naive solution scans left and right repeatedly (O(n²)), optimize by pre-computing once (O(n)). The "sandwich pattern" - position i needs left boundary AND right boundary. Keywords: "except current", "trapped between", "bounded by both sides".'
    },
    cheat:{
      trigger:'product except self, trapping rain water, left-right scan, prefix sum, range query',
      firstLine:'int[] result = new int[n]; result[0] = 1;',
      gotcha:'Forgetting to initialize prefix/suffix to 1 (identity for multiplication) or 0 (identity for addition)',
      pitch:"I'll do two passes — left-to-right building prefix products, then right-to-left multiplying by suffix products. Each index gets the product of everything except itself without division.",
      snippet:`<span class="cm">// Two-pass: prefix from left, suffix from right</span>
<span class="tp">int</span>[] res = <span class="kw">new int</span>[n]; res[<span class="nm">0</span>]=<span class="nm">1</span>;
<span class="kw">for</span>(<span class="kw">int</span> i=<span class="nm">1</span>;i&lt;n;i++) res[i]=res[i-<span class="nm">1</span>]*nums[i-<span class="nm">1</span>]; <span class="cm">// prefix</span>
<span class="kw">int</span> suf=<span class="nm">1</span>;
<span class="kw">for</span>(<span class="kw">int</span> i=n-<span class="nm">1</span>;i&gt;=<span class="nm">0</span>;i--){res[i]*=suf; suf*=nums[i];} <span class="cm">// suffix</span>`
    }
  },
  {
    icon:'📈', name:'Monotonic Stack', accent:'#ef4444',
    tagline:'Stack that stays sorted — find next greater/smaller in O(n)',
    hook:"Imagine you're standing in a line of people of different heights. You want to know: 'Who is the next taller person after me?' You could look ahead one by one — slow! OR imagine people standing on a shrinking staircase. When a tall person arrives, everyone shorter gets popped off — they just found their 'next greater'. The tall person stays, waiting for someone even taller. That's a monotonic stack!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes ms-pop{0%,70%{opacity:1}80%,100%{opacity:0}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Monotonic Stack: Next Greater Element</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">temps = [73, 74, 75, 71, 69, 72, 76, 73]</text><rect x="50" y="65" width="200" height="210" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="150" y="90" fill="#ef4444" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Stack (decreasing)</text><rect x="75" y="220" width="150" height="28" fill="#0e1018" stroke="#ef4444" rx="4"/><text x="150" y="239" fill="#ef4444" text-anchor="middle" font-size="11">73 (idx:0)</text><rect x="75" y="188" width="150" height="28" fill="#0e1018" stroke="#ef4444" rx="4" style="animation:ms-pop 3s ease 1s infinite"/><text x="150" y="207" fill="#ef4444" text-anchor="middle" font-size="11">popped by 74!</text><rect x="300" y="65" width="260" height="210" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="430" y="90" fill="#00ff88" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">How it works</text><text x="320" y="115" fill="#e8eaf0" font-size="11" font-family="monospace">Push 73 → stack=[73]</text><text x="320" y="138" fill="#ffd600" font-size="11" font-family="monospace">74 &gt; 73 → pop 73, ans[0]=1</text><text x="320" y="161" fill="#ffd600" font-size="11" font-family="monospace">75 &gt; 74 → pop 74, ans[1]=1</text><text x="320" y="184" fill="#e8eaf0" font-size="11" font-family="monospace">Push 71, 69 (decreasing)</text><text x="320" y="207" fill="#ffd600" font-size="11" font-family="monospace">72 &gt; 69,71 → pop both!</text><text x="320" y="230" fill="#ffd600" font-size="11" font-family="monospace">76 &gt; all → clears stack!</text><text x="320" y="258" fill="#00ff88" font-size="11" font-family="monospace">Result: [1,1,4,2,1,1,0,0]</text></svg>`,
    complexity:[
      {badge:'red',big:'O(n²)',label:'BRUTE FORCE',desc:'For each element scan right for next greater'},
      {badge:'green',big:'O(n)',label:'MONOTONIC STACK',desc:'Each element pushed/popped at most once'}
    ],
    meterWidth:'92%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># MONOTONIC STACK — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: "next greater/smaller", "days until warmer"</span>
<span class="cm"># TIME: O(n) | SPACE: O(n)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Daily Temperatures ───</span>
<span class="kw">def</span> <span class="fn">dailyTemperatures</span>(temps):
    n = <span class="fn">len</span>(temps)
    result = [<span class="nm">0</span>] * n
    stack = []  <span class="cm"># stores indices, decreasing temps</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
        <span class="kw">while</span> stack <span class="kw">and</span> temps[i] &gt; temps[stack[-<span class="nm">1</span>]]:
            prev = stack.pop()
            result[prev] = i - prev  <span class="cm"># days to wait</span>
        stack.append(i)
    <span class="kw">return</span> result

<span class="cm"># ─── Largest Rectangle in Histogram (#84) ───</span>
<span class="kw">def</span> <span class="fn">largestRectangleArea</span>(heights):
    stack = []  <span class="cm"># stores INDICES (increasing)</span>
    max_area = <span class="nm">0</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(heights)):
        <span class="kw">while</span> stack <span class="kw">and</span> heights[i] &lt; heights[stack[-<span class="nm">1</span>]]:
            h = heights[stack.pop()]
            w = i <span class="kw">if not</span> stack <span class="kw">else</span> i - stack[-<span class="nm">1</span>] - <span class="nm">1</span>
            max_area = <span class="fn">max</span>(max_area, h * w)
        stack.append(i)
    <span class="kw">while</span> stack:
        h = heights[stack.pop()]
        w = <span class="fn">len</span>(heights) <span class="kw">if not</span> stack <span class="kw">else</span> <span class="fn">len</span>(heights) - stack[-<span class="nm">1</span>] - <span class="nm">1</span>
        max_area = <span class="fn">max</span>(max_area, h * w)
    <span class="kw">return</span> max_area`,
      java:`<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// MONOTONIC STACK — THE TEMPLATE</span>
<span class="cm">// TIME: O(n) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="cm">// ─── Daily Temperatures ───</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">dailyTemperatures</span>(<span class="tp">int</span>[] temps) {
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[temps.length];
    <span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; temps.length; i++) {
        <span class="kw">while</span> (!stack.isEmpty() &amp;&amp; temps[i] &gt; temps[stack.peek()])  {
            <span class="tp">int</span> prev = stack.pop();
            result[prev] = i - prev;
        }
        stack.push(i);
    }
    <span class="kw">return</span> result;
}

<span class="cm">// ─── Largest Rectangle in Histogram (#84) ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">largestRectangleArea</span>(<span class="tp">int</span>[] heights) {
    <span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();
    <span class="tp">int</span> maxArea = <span class="nm">0</span>, n = heights.length;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++) {
        <span class="kw">while</span> (!stack.isEmpty() &amp;&amp; heights[i] &lt; heights[stack.peek()]) {
            <span class="tp">int</span> h = heights[stack.pop()];
            <span class="tp">int</span> w = stack.isEmpty() ? i : i - stack.peek() - <span class="nm">1</span>;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);  <span class="cm">// push INDEX not height!</span>
    }
    <span class="kw">while</span> (!stack.isEmpty()) {
        <span class="tp">int</span> h = heights[stack.pop()];
        <span class="tp">int</span> w = stack.isEmpty() ? n : n - stack.peek() - <span class="nm">1</span>;
        maxArea = Math.max(maxArea, h * w);
    }
    <span class="kw">return</span> maxArea;
}`,
      csharp:`<span class="cm">// MONOTONIC STACK — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">DailyTemperatures</span>(<span class="tp">int</span>[] temps) {
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[temps.Length];
    <span class="kw">var</span> stack = <span class="kw">new</span> <span class="tp">Stack</span>&lt;<span class="tp">int</span>&gt;();
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; temps.Length; i++) {
        <span class="kw">while</span> (stack.Count &gt; <span class="nm">0</span> &amp;&amp; temps[i] &gt; temps[stack.Peek()]) {
            <span class="tp">int</span> prev = stack.Pop();
            result[prev] = i - prev;
        }
        stack.Push(i);
    }
    <span class="kw">return</span> result;
}

<span class="cm">// ─── Largest Rectangle in Histogram (#84) ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">LargestRectangleArea</span>(<span class="tp">int</span>[] heights) {
    <span class="kw">var</span> stack = <span class="kw">new</span> <span class="tp">Stack</span>&lt;<span class="tp">int</span>&gt;();
    <span class="tp">int</span> maxArea = <span class="nm">0</span>, n = heights.Length;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++) {
        <span class="kw">while</span> (stack.Count &gt; <span class="nm">0</span> &amp;&amp; heights[i] &lt; heights[stack.Peek()]) {
            <span class="tp">int</span> h = heights[stack.Pop()];
            <span class="tp">int</span> w = stack.Count == <span class="nm">0</span> ? i : i - stack.Peek() - <span class="nm">1</span>;
            maxArea = Math.Max(maxArea, h * w);
        }
        stack.Push(i);
    }
    <span class="kw">while</span> (stack.Count &gt; <span class="nm">0</span>) {
        <span class="tp">int</span> h = heights[stack.Pop()];
        <span class="tp">int</span> w = stack.Count == <span class="nm">0</span> ? n : n - stack.Peek() - <span class="nm">1</span>;
        maxArea = Math.Max(maxArea, h * w);
    }
    <span class="kw">return</span> maxArea;
}`
    },
    memoryHack:{
      oneSentence:'Maintain a stack of decreasing values — when a bigger element arrives, pop all smaller ones (they found their answer).',
      flowchart:{
        nodes:[
          {id:'start',label:'Init stack=[]',type:'start',x:290,y:20},
          {id:'loop',label:'For each i',type:'action',x:290,y:75},
          {id:'check',label:'curr > stack.top?',type:'decision',x:290,y:135},
          {id:'pop',label:'Pop → answer found',type:'action',x:100,y:135},
          {id:'push',label:'Push i to stack',type:'action',x:480,y:135},
          {id:'next',label:'Next i',type:'action',x:480,y:75}
        ],
        edges:[
          {from:'start',to:'loop',label:''},
          {from:'loop',to:'check',label:''},
          {from:'check',to:'pop',label:'YES'},
          {from:'pop',to:'check',label:'keep popping'},
          {from:'check',to:'push',label:'NO'},
          {from:'push',to:'next',label:''},
          {from:'next',to:'loop',label:''}
        ]
      },
      annotatedCode:[
        {line:'int[] dailyTemperatures(int[] temps) {',stepId:'start',note:'Find days until warmer for each day',color:'#5a5f70'},
        {line:'    Deque<Integer> stack = new ArrayDeque<>();',stepId:'start',note:'Stack holds INDICES of decreasing temps',color:'#ef4444'},
        {line:'    for (int i = 0; i < temps.length; i++) {',stepId:'loop',note:'Process each day left to right',color:'#00cfff'},
        {line:'        while (!stack.isEmpty() && temps[i] > temps[stack.peek()])',stepId:'check',note:'Current temp beats stack top?',color:'#ffd600'},
        {line:'            result[stack.pop()] = i - prev;',stepId:'pop',note:'Pop! That day found its warmer day',color:'#00ff88'},
        {line:'        stack.push(i);',stepId:'push',note:'Push current — waiting for its warmer day',color:'#ef4444'}
      ],
      stateSnapshots:[
        {label:'Day 0',art:'temp=73  stack=[]  → push 0  stack=[0]',annotation:'73 enters, no one to compare'},
        {label:'Day 1',art:'temp=74 > 73  → pop 0 (ans[0]=1)  push 1  stack=[1]',annotation:'74 is warmer than 73! Answer: 1 day'},
        {label:'Day 2',art:'temp=75 > 74  → pop 1 (ans[1]=1)  push 2  stack=[2]',annotation:'75 beats 74 too'},
        {label:'Day 3-4',art:'temp=71,69 < 75  → push both  stack=[2,3,4]',annotation:'Decreasing, just push and wait'},
        {label:'Day 5',art:'temp=72 > 69,71  → pop 4(ans=1) pop 3(ans=2)  stack=[2,5]',annotation:'72 resolves both 69 and 71!'}
      ],
      variations:[
        {name:'Daily Temperatures',desc:'Decreasing stack of indices, pop when warmer found',problem:'Daily Temperatures (#739)'},
        {name:'Car Fleet',desc:'Sort by position desc, stack of arrival times',problem:'Car Fleet (#853)'},
        {name:'Largest Rectangle in Histogram',desc:'Increasing stack — pop when shorter bar found, calc area',problem:'Largest Rectangle (#84)'},
        {name:'Next Greater Element',desc:'Classic monotonic stack — pop when next greater appears',problem:'Next Greater Element (#496)'}
      ],
      title:'POP THE SMALLER',
      mnemonic:'POP THE SMALLER — big element arrives, everyone shorter gets their answer and leaves',
      steps:['Init empty stack (will hold indices)','For each element: while stack.top < current, pop and record answer','Push current index onto stack','Remaining in stack have no answer (0 or -1)'],
      why:'Each element is pushed and popped at most once, giving O(n) total. The stack maintains a sorted order so the next greater/smaller is found instantly on arrival.'
    },
    cheat:{
      trigger:'next greater element, next smaller, days until warmer, histogram area, car fleet',
      firstLine:'Deque<Integer> stack = new ArrayDeque<>();',
      gotcha:'Storing values instead of indices — you usually need indices to calculate distances',
      pitch:"I'll use a monotonic decreasing stack. Each element pops everything smaller, giving those elements their 'next greater'. O(n) since each element is pushed and popped at most once.",
      snippet:`<span class="cm">// Monotonic decreasing stack — pop smaller elements</span>
<span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; stk = <span class="kw">new</span> <span class="fn">ArrayDeque</span>&lt;&gt;();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; n; i++) {
    <span class="kw">while</span> (!stk.isEmpty() &amp;&amp; arr[i] &gt; arr[stk.peek()])
        result[stk.pop()] = i;  <span class="cm">// found next greater!</span>
    stk.push(i);
}`
    }
  },
  {
    icon:'🐢🐇', name:'Fast & Slow Pointers', accent:'#06b6d4',
    tagline:'Two pointers at different speeds to detect cycles',
    hook:"Imagine two runners on a circular track. The fast runner goes 2x speed. If the track is circular, the fast runner WILL eventually lap the slow runner — they'll meet! If the track is straight (no loop), the fast runner just reaches the end. This simple idea detects cycles in linked lists, finds duplicate numbers, and even tells you if a number is 'happy'. Two speeds, one powerful trick!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes fs-slow{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}} @keyframes fs-fast{0%{transform:rotate(0deg)}100%{transform:rotate(720deg)}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Floyd's Cycle Detection</text><circle cx="200" cy="170" r="80" fill="none" stroke="#1e2230" stroke-width="3"/><text x="200" y="75" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Circular linked list</text><g style="transform-origin:200px 170px;animation:fs-slow 4s linear infinite"><circle cx="280" cy="170" r="12" fill="#06b6d4"/><text x="280" y="174" fill="#fff" text-anchor="middle" font-size="9" font-weight="bold">S</text></g><g style="transform-origin:200px 170px;animation:fs-fast 4s linear infinite"><circle cx="280" cy="170" r="12" fill="#f472b6"/><text x="280" y="174" fill="#fff" text-anchor="middle" font-size="9" font-weight="bold">F</text></g><text x="200" y="280" fill="#06b6d4" text-anchor="middle" font-size="11" font-family="monospace">Slow: 1 step | Fast: 2 steps</text><rect x="350" y="65" width="220" height="200" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="460" y="90" fill="#fff" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Why they meet</text><text x="370" y="115" fill="#06b6d4" font-size="11" font-family="monospace">Slow: 1→2→3→4</text><text x="370" y="138" fill="#f472b6" font-size="11" font-family="monospace">Fast: 1→3→5→7</text><text x="370" y="165" fill="#ffd600" font-size="11" font-family="monospace">Gap shrinks by 1</text><text x="370" y="188" fill="#ffd600" font-size="11" font-family="monospace">each step!</text><text x="370" y="220" fill="#00ff88" font-size="11" font-family="monospace">They MUST meet</text><text x="370" y="243" fill="#00ff88" font-size="11" font-family="monospace">inside the cycle.</text></svg>`,
    complexity:[
      {badge:'red',big:'O(n²)',label:'BRUTE FORCE',desc:'Track visited nodes in a set'},
      {badge:'green',big:'O(n)',label:'FLOYD\'S',desc:'Two pointers, O(1) space, guaranteed meeting'}
    ],
    meterWidth:'88%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># FAST &amp; SLOW POINTERS — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Cycle detection, find middle, find duplicate</span>
<span class="cm"># TIME: O(n) | SPACE: O(1)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Linked List Cycle ───</span>
<span class="kw">def</span> <span class="fn">hasCycle</span>(head):
    slow = fast = head
    <span class="kw">while</span> fast <span class="kw">and</span> fast.next:
        slow = slow.next        <span class="cm"># 1 step</span>
        fast = fast.next.next   <span class="cm"># 2 steps</span>
        <span class="kw">if</span> slow == fast:
            <span class="kw">return</span> <span class="nm">True</span>  <span class="cm"># they met = cycle!</span>
    <span class="kw">return</span> <span class="nm">False</span>  <span class="cm"># fast hit end = no cycle</span>

<span class="cm"># ─── Find Duplicate Number ───</span>
<span class="kw">def</span> <span class="fn">findDuplicate</span>(nums):
    slow = fast = nums[<span class="nm">0</span>]
    <span class="kw">while</span> <span class="nm">True</span>:  <span class="cm"># Phase 1: find meeting point</span>
        slow = nums[slow]
        fast = nums[nums[fast]]
        <span class="kw">if</span> slow == fast: <span class="kw">break</span>
    slow = nums[<span class="nm">0</span>]  <span class="cm"># Phase 2: find cycle start</span>
    <span class="kw">while</span> slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    <span class="kw">return</span> slow

<span class="cm"># ─── Happy Number ───</span>
<span class="kw">def</span> <span class="fn">isHappy</span>(n):
    <span class="kw">def</span> <span class="fn">next_num</span>(x):
        <span class="kw">return</span> <span class="fn">sum</span>(<span class="fn">int</span>(d)**<span class="nm">2</span> <span class="kw">for</span> d <span class="kw">in</span> <span class="fn">str</span>(x))
    slow = fast = n
    <span class="kw">while</span> <span class="nm">True</span>:
        slow = <span class="fn">next_num</span>(slow)
        fast = <span class="fn">next_num</span>(<span class="fn">next_num</span>(fast))
        <span class="kw">if</span> fast == <span class="nm">1</span>: <span class="kw">return</span> <span class="nm">True</span>
        <span class="kw">if</span> slow == fast: <span class="kw">return</span> <span class="nm">False</span>`,
      java:`<span class="cm">// FAST &amp; SLOW POINTERS — THE TEMPLATE</span>
<span class="cm">// TIME: O(n) | SPACE: O(1)</span>

<span class="cm">// ─── Linked List Cycle ───</span>
<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">hasCycle</span>(<span class="tp">ListNode</span> head) {
    <span class="tp">ListNode</span> slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
        <span class="kw">if</span> (slow == fast) <span class="kw">return</span> <span class="nm">true</span>;
    }
    <span class="kw">return</span> <span class="nm">false</span>;
}

<span class="cm">// ─── Find Duplicate Number ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">findDuplicate</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> slow = nums[<span class="nm">0</span>], fast = nums[<span class="nm">0</span>];
    <span class="kw">do</span> { slow = nums[slow]; fast = nums[nums[fast]]; }
    <span class="kw">while</span> (slow != fast);
    slow = nums[<span class="nm">0</span>];
    <span class="kw">while</span> (slow != fast) { slow = nums[slow]; fast = nums[fast]; }
    <span class="kw">return</span> slow;
}`,
      csharp:`<span class="cm">// FAST &amp; SLOW POINTERS — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">bool</span> <span class="fn">HasCycle</span>(<span class="tp">ListNode</span> head) {
    <span class="tp">ListNode</span> slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
        <span class="kw">if</span> (slow == fast) <span class="kw">return</span> <span class="nm">true</span>;
    }
    <span class="kw">return</span> <span class="nm">false</span>;
}

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">FindDuplicate</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> slow = nums[<span class="nm">0</span>], fast = nums[<span class="nm">0</span>];
    <span class="kw">do</span> { slow = nums[slow]; fast = nums[nums[fast]]; }
    <span class="kw">while</span> (slow != fast);
    slow = nums[<span class="nm">0</span>];
    <span class="kw">while</span> (slow != fast) { slow = nums[slow]; fast = nums[fast]; }
    <span class="kw">return</span> slow;
}`
    },
    memoryHack:{
      oneSentence:'Slow moves 1 step, fast moves 2 steps — if they meet, there is a cycle; to find cycle start, reset one pointer to head.',
      flowchart:{
        nodes:[
          {id:'start',label:'slow=fast=head',type:'start',x:290,y:20},
          {id:'move',label:'slow+=1, fast+=2',type:'action',x:290,y:75},
          {id:'end',label:'fast hit null?',type:'decision',x:290,y:135},
          {id:'no_cycle',label:'No cycle',type:'end',x:480,y:135},
          {id:'meet',label:'slow==fast?',type:'decision',x:100,y:135},
          {id:'cycle',label:'Cycle found!',type:'end',x:100,y:200}
        ],
        edges:[
          {from:'start',to:'move',label:''},
          {from:'move',to:'end',label:''},
          {from:'end',to:'no_cycle',label:'YES'},
          {from:'end',to:'meet',label:'NO'},
          {from:'meet',to:'cycle',label:'YES'},
          {from:'meet',to:'move',label:'NO'}
        ]
      },
      annotatedCode:[
        {line:'ListNode slow = head, fast = head;',stepId:'start',note:'Both start at head',color:'#06b6d4'},
        {line:'while (fast != null && fast.next != null) {',stepId:'move',note:'Fast needs 2 valid nodes ahead',color:'#00cfff'},
        {line:'    slow = slow.next;',stepId:'move',note:'Tortoise: 1 step',color:'#06b6d4'},
        {line:'    fast = fast.next.next;',stepId:'move',note:'Hare: 2 steps',color:'#f472b6'},
        {line:'    if (slow == fast) return true;',stepId:'meet',note:'They met inside the cycle!',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'slow=node1  fast=node1  (both at head)',annotation:'Starting together'},
        {label:'Step 2',art:'slow=node2  fast=node3  (gap growing)',annotation:'Fast pulls ahead'},
        {label:'Step 3',art:'slow=node3  fast=node5  (fast enters cycle)',annotation:'Fast loops around'},
        {label:'Step 4',art:'slow=node4  fast=node4  (MEET!)',annotation:'Gap shrinks by 1 each step until they collide'}
      ],
      variations:[
        {name:'Linked List Cycle',desc:'slow+1, fast+2 — if meet, cycle exists',problem:'Linked List Cycle (#141)'},
        {name:'Find the Duplicate Number',desc:'Treat array as linked list, Floyd\'s to find cycle start = duplicate',problem:'Find the Duplicate Number (#287)'},
        {name:'Happy Number',desc:'next(n) = sum of digit squares. Floyd\'s detects if sequence cycles or reaches 1',problem:'Happy Number (#202)'},
        {name:'Middle of Linked List',desc:'When fast reaches end, slow is at middle',problem:'Middle of Linked List (#876)'}
      ],
      title:'TORTOISE & HARE',
      mnemonic:'TORTOISE & HARE — slow walks, fast runs. If they meet, there is a loop.',
      steps:['Init slow=head, fast=head','Move slow 1 step, fast 2 steps','If fast hits null → no cycle','If slow==fast → cycle detected','To find cycle START: reset slow to head, both move 1 step until they meet again'],
      why:'Fast closes the gap by 1 each step inside a cycle, guaranteeing a meeting. The math proves the meeting point is exactly cycle-length away from the cycle entrance.'
    },
    cheat:{
      trigger:'cycle detection, find duplicate, happy number, middle of list, loop in linked list',
      firstLine:'ListNode slow = head, fast = head;',
      gotcha:'Forgetting to check fast.next != null (fast needs TWO valid steps ahead)',
      pitch:"I'll use Floyd's cycle detection — slow pointer moves 1 step, fast moves 2. If they meet, there's a cycle. To find the cycle start, reset one to head and walk both at speed 1.",
      snippet:`<span class="cm">// Floyd's: slow=1step, fast=2steps</span>
<span class="tp">ListNode</span> slow = head, fast = head;
<span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
    slow = slow.next;
    fast = fast.next.next;
    <span class="kw">if</span> (slow == fast) <span class="kw">return</span> <span class="nm">true</span>; <span class="cm">// cycle!</span>
}`
    }
  },
  {
    icon:'🌊', name:'Tree BFS / Level Order', accent:'#38bdf8',
    tagline:'Process a tree level by level using a queue',
    hook:"Imagine you're the principal of a school. You want to take attendance floor by floor — first all classrooms on floor 1, then floor 2, then floor 3. You don't jump into a classroom and go down a staircase (that's DFS). Instead you sweep across each level. BFS uses a queue: process current floor, add all kids from next floor to the queue. Level complete!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes bfs-l1{0%,100%{stroke:#38bdf8}50%{stroke:#ffd600}} @keyframes bfs-l2{0%,30%{stroke:#1e2230}30%,100%{stroke:#38bdf8}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">BFS: Level Order Traversal</text><circle cx="200" cy="65" r="22" fill="#1a1d2e" stroke="#38bdf8" stroke-width="2" style="animation:bfs-l1 3s infinite"/><text x="200" y="70" fill="#38bdf8" text-anchor="middle" font-size="14" font-weight="bold">3</text><text x="245" y="60" fill="#ffd600" font-size="10" font-family="monospace">Level 0</text><line x1="183" y1="83" x2="140" y2="115" stroke="#38bdf8"/><line x1="217" y1="83" x2="260" y2="115" stroke="#38bdf8"/><circle cx="140" cy="135" r="20" fill="#1a1d2e" stroke="#38bdf8" stroke-width="2" style="animation:bfs-l2 3s .5s infinite"/><text x="140" y="140" fill="#38bdf8" text-anchor="middle" font-size="14">9</text><circle cx="260" cy="135" r="20" fill="#1a1d2e" stroke="#38bdf8" stroke-width="2" style="animation:bfs-l2 3s .5s infinite"/><text x="260" y="140" fill="#38bdf8" text-anchor="middle" font-size="14">20</text><text x="305" y="130" fill="#ffd600" font-size="10" font-family="monospace">Level 1</text><line x1="245" y1="152" x2="220" y2="180" stroke="#38bdf8"/><line x1="275" y1="152" x2="300" y2="180" stroke="#38bdf8"/><circle cx="220" cy="200" r="18" fill="#1a1d2e" stroke="#38bdf8" stroke-width="2"/><text x="220" y="205" fill="#38bdf8" text-anchor="middle" font-size="13">15</text><circle cx="300" cy="200" r="18" fill="#1a1d2e" stroke="#38bdf8" stroke-width="2"/><text x="300" y="205" fill="#38bdf8" text-anchor="middle" font-size="13">7</text><text x="340" y="195" fill="#ffd600" font-size="10" font-family="monospace">Level 2</text><rect x="350" y="55" width="220" height="130" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="460" y="78" fill="#38bdf8" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Queue processing</text><text x="370" y="100" fill="#e8eaf0" font-size="11" font-family="monospace">Q=[3] → level=[[3]]</text><text x="370" y="120" fill="#e8eaf0" font-size="11" font-family="monospace">Q=[9,20] → level=[[9,20]]</text><text x="370" y="140" fill="#e8eaf0" font-size="11" font-family="monospace">Q=[15,7] → level=[[15,7]]</text><text x="370" y="165" fill="#00ff88" font-size="11" font-family="monospace">Result: [[3],[9,20],[15,7]]</text><text x="300" y="265" fill="#ffd600" text-anchor="middle" font-size="11" font-family="monospace">Key: process ALL nodes at current level before moving to next</text></svg>`,
    complexity:[
      {badge:'green',big:'O(n)',label:'BFS',desc:'Visit every node exactly once via queue'},
      {badge:'blue',big:'O(w)',label:'SPACE',desc:'Queue holds at most one level width (max width w)'}
    ],
    meterWidth:'80%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># TREE BFS / LEVEL ORDER — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Level-by-level, rightmost view, zigzag</span>
<span class="cm"># TIME: O(n) | SPACE: O(w) where w = max width</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="kw">from</span> collections <span class="kw">import</span> deque

<span class="cm"># ─── Level Order Traversal ───</span>
<span class="kw">def</span> <span class="fn">levelOrder</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> []
    result, queue = [], deque([root])
    <span class="kw">while</span> queue:
        level = []
        <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(queue)):  <span class="cm"># process entire level</span>
            node = queue.popleft()
            level.append(node.val)
            <span class="kw">if</span> node.left:  queue.append(node.left)
            <span class="kw">if</span> node.right: queue.append(node.right)
        result.append(level)
    <span class="kw">return</span> result

<span class="cm"># ─── Right Side View ───</span>
<span class="kw">def</span> <span class="fn">rightSideView</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> []
    result, queue = [], deque([root])
    <span class="kw">while</span> queue:
        <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(queue)):
            node = queue.popleft()
            <span class="kw">if</span> i == <span class="fn">len</span>(queue):  <span class="cm"># wait, last in level</span>
                result.append(node.val)
            <span class="kw">if</span> node.left:  queue.append(node.left)
            <span class="kw">if</span> node.right: queue.append(node.right)
        result.append(node.val)  <span class="cm"># last node = rightmost</span>
    <span class="kw">return</span> result`,
      java:`<span class="cm">// TREE BFS / LEVEL ORDER — THE TEMPLATE</span>
<span class="cm">// TIME: O(n) | SPACE: O(w)</span>

<span class="cm">// ─── Level Order Traversal ───</span>
<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; <span class="fn">levelOrder</span>(<span class="tp">TreeNode</span> root) {
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> result;
    <span class="tp">Queue</span>&lt;<span class="tp">TreeNode</span>&gt; queue = <span class="kw">new</span> <span class="tp">LinkedList</span>&lt;&gt;();
    queue.offer(root);
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="tp">int</span> size = queue.size();  <span class="cm">// snapshot level size!</span>
        <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; level = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
        <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; size; i++) {
            <span class="tp">TreeNode</span> node = queue.poll();
            level.add(node.val);
            <span class="kw">if</span> (node.left != <span class="kw">null</span>)  queue.offer(node.left);
            <span class="kw">if</span> (node.right != <span class="kw">null</span>) queue.offer(node.right);
        }
        result.add(level);
    }
    <span class="kw">return</span> result;
}`,
      csharp:`<span class="cm">// TREE BFS / LEVEL ORDER — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">IList</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt; <span class="fn">LevelOrder</span>(<span class="tp">TreeNode</span> root) {
    <span class="kw">var</span> result = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt;();
    <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> result;
    <span class="kw">var</span> queue = <span class="kw">new</span> <span class="tp">Queue</span>&lt;<span class="tp">TreeNode</span>&gt;();
    queue.Enqueue(root);
    <span class="kw">while</span> (queue.Count &gt; <span class="nm">0</span>) {
        <span class="tp">int</span> size = queue.Count;
        <span class="kw">var</span> level = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;();
        <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; size; i++) {
            <span class="kw">var</span> node = queue.Dequeue();
            level.Add(node.val);
            <span class="kw">if</span> (node.left != <span class="kw">null</span>)  queue.Enqueue(node.left);
            <span class="kw">if</span> (node.right != <span class="kw">null</span>) queue.Enqueue(node.right);
        }
        result.Add(level);
    }
    <span class="kw">return</span> result;
}`
    },
    memoryHack:{
      oneSentence:'Use a queue. Process all nodes at the current level (snapshot queue size), then their children become the next level.',
      flowchart:{
        nodes:[
          {id:'start',label:'Queue=[root]',type:'start',x:290,y:20},
          {id:'while',label:'Queue empty?',type:'decision',x:290,y:80},
          {id:'size',label:'size=queue.size()',type:'action',x:290,y:140},
          {id:'loop',label:'For i in 0..size',type:'action',x:290,y:195},
          {id:'proc',label:'Poll + add children',type:'action',x:100,y:195},
          {id:'done',label:'Return levels',type:'end',x:480,y:80}
        ],
        edges:[
          {from:'start',to:'while',label:''},
          {from:'while',to:'done',label:'YES'},
          {from:'while',to:'size',label:'NO'},
          {from:'size',to:'loop',label:'snapshot!'},
          {from:'loop',to:'proc',label:''},
          {from:'proc',to:'while',label:'next level'}
        ]
      },
      annotatedCode:[
        {line:'Queue<TreeNode> queue = new LinkedList<>();',stepId:'start',note:'Queue for BFS — FIFO order',color:'#38bdf8'},
        {line:'queue.offer(root);',stepId:'start',note:'Seed with root node',color:'#38bdf8'},
        {line:'while (!queue.isEmpty()) {',stepId:'while',note:'Keep going until all levels processed',color:'#00cfff'},
        {line:'    int size = queue.size();',stepId:'size',note:'CRITICAL: snapshot size BEFORE adding children!',color:'#ffd600'},
        {line:'    for (int i = 0; i < size; i++) {',stepId:'loop',note:'Process exactly this many nodes = one level',color:'#a78bfa'},
        {line:'        TreeNode node = queue.poll();',stepId:'proc',note:'Dequeue front node',color:'#00ff88'},
        {line:'        if (node.left) queue.offer(node.left);',stepId:'proc',note:'Children go to back of queue = next level',color:'#38bdf8'}
      ],
      stateSnapshots:[
        {label:'Level 0',art:'Q=[3]  size=1  → process 3  → add 9,20  Q=[9,20]',annotation:'Root level: just node 3'},
        {label:'Level 1',art:'Q=[9,20]  size=2  → process 9,20  → add 15,7  Q=[15,7]',annotation:'Both children processed as one level'},
        {label:'Level 2',art:'Q=[15,7]  size=2  → process 15,7  → Q empty',annotation:'Leaf level, no more children'},
        {label:'Result',art:'[[3], [9,20], [15,7]]',annotation:'Each inner list = one tree level'}
      ],
      variations:[
        {name:'Level Order Traversal',desc:'Queue BFS, snapshot size, collect each level',problem:'Binary Tree Level Order Traversal (#102)'},
        {name:'Right Side View',desc:'BFS — last node of each level is the rightmost',problem:'Binary Tree Right Side View (#199)'},
        {name:'Rotting Oranges',desc:'Multi-source BFS from all rotten oranges simultaneously',problem:'Rotting Oranges (#994)'},
        {name:'Walls and Gates',desc:'Multi-source BFS from all gates, flood-fill distances',problem:'Walls and Gates (#286)'}
      ],
      title:'SNAPSHOT THE LEVEL',
      mnemonic:'SNAPSHOT THE LEVEL — save queue.size() before processing so you know where one level ends and the next begins',
      steps:['Init queue with root','While queue not empty: snapshot size = queue.size()','For i in 0..size: poll node, process it, add children','After inner loop: one complete level is done','Repeat until queue empty'],
      why:'The key insight is snapshotting queue.size() before the inner loop — this tells you exactly how many nodes belong to the current level vs the next level.'
    },
    cheat:{
      trigger:'level order, level by level, BFS tree, right side view, rotting oranges, shortest path grid',
      firstLine:'Queue<TreeNode> queue = new LinkedList<>();',
      gotcha:'NOT snapshotting queue.size() before the loop — children mix with current level nodes',
      pitch:"I'll use BFS with a queue. The key trick is snapshotting queue.size() at the start of each level to know exactly how many nodes belong to the current level.",
      snippet:`<span class="cm">// BFS level-order: snapshot size before processing</span>
<span class="tp">Queue</span>&lt;<span class="tp">TreeNode</span>&gt; q = <span class="kw">new</span> <span class="fn">LinkedList</span>&lt;&gt;();
q.offer(root);
<span class="kw">while</span> (!q.isEmpty()) {
    <span class="kw">int</span> size = q.size(); <span class="cm">// snapshot!</span>
    <span class="kw">for</span> (<span class="kw">int</span> i=<span class="nm">0</span>;i&lt;size;i++) {
        <span class="tp">TreeNode</span> n = q.poll();
        <span class="kw">if</span>(n.left!=<span class="kw">null</span>) q.offer(n.left);
        <span class="kw">if</span>(n.right!=<span class="kw">null</span>) q.offer(n.right);
    }
}`
    }
  },
  {
    icon:'🔍', name:'BST Property Patterns', accent:'#a3e635',
    tagline:'Exploit sorted in-order traversal of BSTs',
    hook:"A Binary Search Tree has a superpower: if you read it in-order (left, root, right), you get a SORTED list! That's like having a bookshelf where books are always alphabetically ordered — you don't need to search everywhere. To validate a BST, just check that in-order gives sorted output. To find the kth smallest, just do in-order and count to k. The BST property = free sorting!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">BST Property: In-Order = Sorted!</text><circle cx="200" cy="70" r="22" fill="#1a1d2e" stroke="#a3e635" stroke-width="2"/><text x="200" y="75" fill="#a3e635" text-anchor="middle" font-size="14" font-weight="bold">5</text><line x1="183" y1="88" x2="130" y2="118" stroke="#a3e635"/><line x1="217" y1="88" x2="270" y2="118" stroke="#a3e635"/><circle cx="130" cy="138" r="20" fill="#1a1d2e" stroke="#a3e635" stroke-width="2"/><text x="130" y="143" fill="#a3e635" text-anchor="middle" font-size="14">3</text><circle cx="270" cy="138" r="20" fill="#1a1d2e" stroke="#a3e635" stroke-width="2"/><text x="270" y="143" fill="#a3e635" text-anchor="middle" font-size="14">8</text><line x1="117" y1="155" x2="90" y2="180" stroke="#a3e635"/><line x1="143" y1="155" x2="170" y2="180" stroke="#a3e635"/><circle cx="90" cy="200" r="18" fill="#1a1d2e" stroke="#a3e635" stroke-width="2"/><text x="90" y="205" fill="#a3e635" text-anchor="middle" font-size="13">1</text><circle cx="170" cy="200" r="18" fill="#1a1d2e" stroke="#a3e635" stroke-width="2"/><text x="170" y="205" fill="#a3e635" text-anchor="middle" font-size="13">4</text><text x="200" y="250" fill="#ffd600" text-anchor="middle" font-size="12" font-family="monospace">In-order: 1→3→4→5→8 (sorted!)</text><rect x="350" y="55" width="220" height="160" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="460" y="78" fill="#a3e635" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">BST Tricks</text><text x="370" y="100" fill="#00ff88" font-size="11" font-family="monospace">✓ Validate: in-order sorted?</text><text x="370" y="122" fill="#00ff88" font-size="11" font-family="monospace">✓ Kth smallest: in-order, k--</text><text x="370" y="144" fill="#00ff88" font-size="11" font-family="monospace">✓ LCA: go left/right by value</text><text x="370" y="166" fill="#ffd600" font-size="11" font-family="monospace">Rule: left &lt; root &lt; right</text><text x="370" y="188" fill="#ffd600" font-size="11" font-family="monospace">For EVERY subtree!</text></svg>`,
    complexity:[
      {badge:'green',big:'O(n)',label:'IN-ORDER',desc:'Visit every node once in sorted order'},
      {badge:'blue',big:'O(h)',label:'BST SEARCH',desc:'Follow left/right path — O(log n) if balanced'}
    ],
    meterWidth:'85%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># BST PROPERTY PATTERNS — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># KEY INSIGHT: In-order traversal of BST = sorted array</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Validate BST (bounds approach) ───</span>
<span class="kw">def</span> <span class="fn">isValidBST</span>(root, lo=<span class="fn">float</span>(<span class="st">'-inf'</span>), hi=<span class="fn">float</span>(<span class="st">'inf'</span>)):
    <span class="kw">if not</span> root: <span class="kw">return</span> <span class="nm">True</span>
    <span class="kw">if</span> root.val &lt;= lo <span class="kw">or</span> root.val &gt;= hi:
        <span class="kw">return</span> <span class="nm">False</span>
    <span class="kw">return</span> (<span class="fn">isValidBST</span>(root.left, lo, root.val) <span class="kw">and</span>
            <span class="fn">isValidBST</span>(root.right, root.val, hi))

<span class="cm"># ─── Kth Smallest Element ───</span>
<span class="kw">def</span> <span class="fn">kthSmallest</span>(root, k):
    stack, curr = [], root
    <span class="kw">while</span> stack <span class="kw">or</span> curr:
        <span class="kw">while</span> curr:  <span class="cm"># go as left as possible</span>
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        k -= <span class="nm">1</span>
        <span class="kw">if</span> k == <span class="nm">0</span>: <span class="kw">return</span> curr.val
        curr = curr.right

<span class="cm"># ─── Lowest Common Ancestor of BST ───</span>
<span class="kw">def</span> <span class="fn">lowestCommonAncestor</span>(root, p, q):
    <span class="kw">while</span> root:
        <span class="kw">if</span> p.val &lt; root.val <span class="kw">and</span> q.val &lt; root.val:
            root = root.left   <span class="cm"># both left → go left</span>
        <span class="kw">elif</span> p.val &gt; root.val <span class="kw">and</span> q.val &gt; root.val:
            root = root.right  <span class="cm"># both right → go right</span>
        <span class="kw">else</span>:
            <span class="kw">return</span> root  <span class="cm"># split point = LCA!</span>`,
      java:`<span class="cm">// BST PROPERTY PATTERNS — THE TEMPLATE</span>

<span class="cm">// ─── Validate BST ───</span>
<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">isValidBST</span>(<span class="tp">TreeNode</span> root) {
    <span class="kw">return</span> validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
}
<span class="kw">private</span> <span class="tp">boolean</span> <span class="fn">validate</span>(<span class="tp">TreeNode</span> node, <span class="tp">long</span> lo, <span class="tp">long</span> hi) {
    <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="nm">true</span>;
    <span class="kw">if</span> (node.val &lt;= lo || node.val &gt;= hi) <span class="kw">return</span> <span class="nm">false</span>;
    <span class="kw">return</span> validate(node.left, lo, node.val)
        &amp;&amp; validate(node.right, node.val, hi);
}

<span class="cm">// ─── Kth Smallest ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">kthSmallest</span>(<span class="tp">TreeNode</span> root, <span class="tp">int</span> k) {
    <span class="tp">Deque</span>&lt;<span class="tp">TreeNode</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();
    <span class="tp">TreeNode</span> curr = root;
    <span class="kw">while</span> (!stack.isEmpty() || curr != <span class="kw">null</span>) {
        <span class="kw">while</span> (curr != <span class="kw">null</span>) { stack.push(curr); curr = curr.left; }
        curr = stack.pop();
        <span class="kw">if</span> (--k == <span class="nm">0</span>) <span class="kw">return</span> curr.val;
        curr = curr.right;
    }
    <span class="kw">return</span> -<span class="nm">1</span>;
}

<span class="cm">// ─── LCA of BST ───</span>
<span class="kw">public</span> <span class="tp">TreeNode</span> <span class="fn">lowestCommonAncestor</span>(<span class="tp">TreeNode</span> root, <span class="tp">TreeNode</span> p, <span class="tp">TreeNode</span> q) {
    <span class="kw">while</span> (root != <span class="kw">null</span>) {
        <span class="kw">if</span> (p.val &lt; root.val &amp;&amp; q.val &lt; root.val) root = root.left;
        <span class="kw">else if</span> (p.val &gt; root.val &amp;&amp; q.val &gt; root.val) root = root.right;
        <span class="kw">else return</span> root;
    }
    <span class="kw">return null</span>;
}`,
      csharp:`<span class="cm">// BST PROPERTY PATTERNS — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">bool</span> <span class="fn">IsValidBST</span>(<span class="tp">TreeNode</span> root) {
    <span class="kw">return</span> Validate(root, <span class="tp">long</span>.MinValue, <span class="tp">long</span>.MaxValue);
}
<span class="kw">private</span> <span class="tp">bool</span> <span class="fn">Validate</span>(<span class="tp">TreeNode</span> node, <span class="tp">long</span> lo, <span class="tp">long</span> hi) {
    <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="nm">true</span>;
    <span class="kw">if</span> (node.val &lt;= lo || node.val &gt;= hi) <span class="kw">return</span> <span class="nm">false</span>;
    <span class="kw">return</span> Validate(node.left, lo, node.val)
        &amp;&amp; Validate(node.right, node.val, hi);
}

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">KthSmallest</span>(<span class="tp">TreeNode</span> root, <span class="tp">int</span> k) {
    <span class="kw">var</span> stack = <span class="kw">new</span> <span class="tp">Stack</span>&lt;<span class="tp">TreeNode</span>&gt;();
    <span class="kw">var</span> curr = root;
    <span class="kw">while</span> (stack.Count &gt; <span class="nm">0</span> || curr != <span class="kw">null</span>) {
        <span class="kw">while</span> (curr != <span class="kw">null</span>) { stack.Push(curr); curr = curr.left; }
        curr = stack.Pop();
        <span class="kw">if</span> (--k == <span class="nm">0</span>) <span class="kw">return</span> curr.val;
        curr = curr.right;
    }
    <span class="kw">return</span> -<span class="nm">1</span>;
}`
    },
    memoryHack:{
      oneSentence:'BST in-order = sorted array. Validate with bounds, find kth by counting in-order, LCA by following the split point.',
      flowchart:{
        nodes:[
          {id:'start',label:'BST node',type:'start',x:290,y:20},
          {id:'check',label:'Both left?',type:'decision',x:290,y:80},
          {id:'left',label:'Go left',type:'action',x:100,y:80},
          {id:'right_check',label:'Both right?',type:'decision',x:290,y:140},
          {id:'right',label:'Go right',type:'action',x:480,y:140},
          {id:'lca',label:'Split = LCA!',type:'end',x:290,y:200}
        ],
        edges:[
          {from:'start',to:'check',label:''},
          {from:'check',to:'left',label:'YES'},
          {from:'left',to:'check',label:''},
          {from:'check',to:'right_check',label:'NO'},
          {from:'right_check',to:'right',label:'YES'},
          {from:'right',to:'right_check',label:''},
          {from:'right_check',to:'lca',label:'NO = split'}
        ]
      },
      annotatedCode:[
        {line:'boolean isValidBST(TreeNode node, long lo, long hi) {',stepId:'start',note:'Pass bounds down recursively',color:'#5a5f70'},
        {line:'    if (node == null) return true;',stepId:'start',note:'Empty subtree is valid',color:'#a3e635'},
        {line:'    if (node.val <= lo || node.val >= hi) return false;',stepId:'check',note:'Must be strictly within bounds!',color:'#ff4d6d'},
        {line:'    return validate(left, lo, node.val)',stepId:'left',note:'Left child must be < current',color:'#00ff88'},
        {line:'        && validate(right, node.val, hi);',stepId:'right',note:'Right child must be > current',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Validate',art:'Node 5, bounds (-∞, ∞) → valid. Left(3, -∞, 5) Right(8, 5, ∞)',annotation:'Root always valid, pass value as new bound'},
        {label:'Left subtree',art:'Node 3, bounds (-∞, 5) → valid. Node 1(-∞,3) Node 4(3,5)',annotation:'3 < 5 ✓, tighten bounds for children'},
        {label:'Kth smallest',art:'In-order: 1,3,4,5,8. k=3 → answer is 4',annotation:'In-order traversal gives sorted order'},
        {label:'LCA',art:'Find LCA(1,4): root=5→both<5→go left→root=3→split! LCA=3',annotation:'When p and q split to different sides, that is the LCA'}
      ],
      variations:[
        {name:'Validate BST',desc:'Pass (lo, hi) bounds down — each node must be within range',problem:'Validate Binary Search Tree (#98)'},
        {name:'Kth Smallest in BST',desc:'In-order traversal with counter — stop at k',problem:'Kth Smallest Element in BST (#230)'},
        {name:'LCA of BST',desc:'Follow the split: both left→go left, both right→go right, else→LCA',problem:'Lowest Common Ancestor of BST (#235)'},
        {name:'Search in BST',desc:'Simple: go left if target < root, right if target > root',problem:'Search in BST (#700)'}
      ],
      title:'IN-ORDER = SORTED',
      mnemonic:'IN-ORDER = SORTED — BST gives you free sorting, use bounds for validation, split for LCA',
      steps:['Validate: pass (lo, hi) bounds, each node must be in range','Kth Smallest: in-order traversal, decrement k each pop','LCA: both targets < node → go left; both > → go right; else → found LCA'],
      why:'The BST property (left < root < right) means in-order traversal produces sorted output, enabling efficient search, validation, and kth element queries.'
    },
    cheat:{
      trigger:'validate BST, kth smallest, lowest common ancestor BST, in-order traversal, BST search',
      firstLine:'return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);',
      gotcha:'Using int bounds instead of long — node values can be Integer.MIN_VALUE/MAX_VALUE themselves',
      pitch:"I'll exploit the BST property: in-order gives sorted order. For validation I'll pass bounds, for kth smallest I'll do iterative in-order, for LCA I'll follow the value split.",
      snippet:`<span class="cm">// BST validate: pass bounds, tighten at each level</span>
<span class="kw">boolean</span> <span class="fn">validate</span>(<span class="tp">TreeNode</span> n, <span class="kw">long</span> lo, <span class="kw">long</span> hi) {
    <span class="kw">if</span> (n==<span class="kw">null</span>) <span class="kw">return true</span>;
    <span class="kw">if</span> (n.val&lt;=lo || n.val&gt;=hi) <span class="kw">return false</span>;
    <span class="kw">return</span> <span class="fn">validate</span>(n.left,lo,n.val) &amp;&amp; <span class="fn">validate</span>(n.right,n.val,hi);
}`
    }
  },
  {
    icon:'📐', name:'Topological Sort', accent:'#c084fc',
    tagline:'Order tasks respecting dependencies — detect cycles too',
    hook:"Imagine getting dressed: you MUST put on underwear before pants, socks before shoes. Some things have prerequisites! Topological sort figures out a valid order. It uses a trick: count each task's prerequisites (in-degree). Tasks with 0 prerequisites go first. When you complete a task, reduce the count for everything depending on it. New zeros? They're ready! If not everything gets processed, there's a circular dependency — impossible!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Topological Sort (Kahn's BFS)</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Course Schedule: [[1,0],[2,0],[3,1],[3,2]]</text><circle cx="150" cy="90" r="22" fill="#1a1d2e" stroke="#c084fc" stroke-width="2"/><text x="150" y="95" fill="#c084fc" text-anchor="middle" font-size="14" font-weight="bold">0</text><text x="150" y="72" fill="#00ff88" font-size="9" font-family="monospace">in:0</text><circle cx="80" cy="170" r="22" fill="#1a1d2e" stroke="#c084fc" stroke-width="2"/><text x="80" y="175" fill="#c084fc" text-anchor="middle" font-size="14">1</text><text x="80" y="152" fill="#ffd600" font-size="9" font-family="monospace">in:1</text><circle cx="220" cy="170" r="22" fill="#1a1d2e" stroke="#c084fc" stroke-width="2"/><text x="220" y="175" fill="#c084fc" text-anchor="middle" font-size="14">2</text><text x="220" y="152" fill="#ffd600" font-size="9" font-family="monospace">in:1</text><circle cx="150" cy="250" r="22" fill="#1a1d2e" stroke="#c084fc" stroke-width="2"/><text x="150" y="255" fill="#c084fc" text-anchor="middle" font-size="14">3</text><text x="150" y="232" fill="#ff4d6d" font-size="9" font-family="monospace">in:2</text><line x1="135" y1="108" x2="95" y2="152" stroke="#c084fc" marker-end="url(#ts-arr)"/><line x1="165" y1="108" x2="205" y2="152" stroke="#c084fc" marker-end="url(#ts-arr)"/><line x1="95" y1="188" x2="135" y2="232" stroke="#c084fc" marker-end="url(#ts-arr)"/><line x1="205" y1="188" x2="165" y2="232" stroke="#c084fc" marker-end="url(#ts-arr)"/><defs><marker id="ts-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc"/></marker></defs><rect x="330" y="65" width="240" height="180" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="450" y="88" fill="#c084fc" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Kahn's Algorithm</text><text x="350" y="112" fill="#00ff88" font-size="11" font-family="monospace">1. in-degree 0 → queue [0]</text><text x="350" y="135" fill="#e8eaf0" font-size="11" font-family="monospace">2. Process 0 → dec 1,2</text><text x="350" y="158" fill="#ffd600" font-size="11" font-family="monospace">3. Now 1,2 have in=0 → queue</text><text x="350" y="181" fill="#e8eaf0" font-size="11" font-family="monospace">4. Process 1,2 → dec 3</text><text x="350" y="204" fill="#ffd600" font-size="11" font-family="monospace">5. Now 3 has in=0 → queue</text><text x="350" y="230" fill="#00ff88" font-size="11" font-family="monospace">Order: [0,1,2,3] ✓</text></svg>`,
    complexity:[
      {badge:'green',big:'O(V+E)',label:'KAHN\'S BFS',desc:'Process each vertex and edge once'},
      {badge:'green',big:'O(V+E)',label:'DFS',desc:'Post-order DFS also works for topo sort'}
    ],
    meterWidth:'88%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># TOPOLOGICAL SORT — THE TEMPLATE (Kahn's)</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Task ordering, course prerequisites, dependency resolution</span>
<span class="cm"># TIME: O(V+E) | SPACE: O(V+E)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="kw">from</span> collections <span class="kw">import</span> deque, defaultdict

<span class="cm"># ─── Course Schedule (can finish?) ───</span>
<span class="kw">def</span> <span class="fn">canFinish</span>(numCourses, prerequisites):
    graph = defaultdict(<span class="fn">list</span>)
    indegree = [<span class="nm">0</span>] * numCourses
    <span class="kw">for</span> course, prereq <span class="kw">in</span> prerequisites:
        graph[prereq].append(course)
        indegree[course] += <span class="nm">1</span>
    queue = deque(i <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(numCourses) <span class="kw">if</span> indegree[i] == <span class="nm">0</span>)
    count = <span class="nm">0</span>
    <span class="kw">while</span> queue:
        node = queue.popleft()
        count += <span class="nm">1</span>
        <span class="kw">for</span> nei <span class="kw">in</span> graph[node]:
            indegree[nei] -= <span class="nm">1</span>
            <span class="kw">if</span> indegree[nei] == <span class="nm">0</span>:
                queue.append(nei)
    <span class="kw">return</span> count == numCourses  <span class="cm"># all processed = no cycle</span>

<span class="cm"># ─── Course Schedule II (return order) ───</span>
<span class="kw">def</span> <span class="fn">findOrder</span>(numCourses, prerequisites):
    graph = defaultdict(<span class="fn">list</span>)
    indegree = [<span class="nm">0</span>] * numCourses
    <span class="kw">for</span> c, p <span class="kw">in</span> prerequisites:
        graph[p].append(c)
        indegree[c] += <span class="nm">1</span>
    queue = deque(i <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(numCourses) <span class="kw">if</span> indegree[i] == <span class="nm">0</span>)
    order = []
    <span class="kw">while</span> queue:
        node = queue.popleft()
        order.append(node)
        <span class="kw">for</span> nei <span class="kw">in</span> graph[node]:
            indegree[nei] -= <span class="nm">1</span>
            <span class="kw">if</span> indegree[nei] == <span class="nm">0</span>:
                queue.append(nei)
    <span class="kw">return</span> order <span class="kw">if</span> <span class="fn">len</span>(order) == numCourses <span class="kw">else</span> []`,
      java:`<span class="cm">// TOPOLOGICAL SORT — THE TEMPLATE (Kahn's BFS)</span>
<span class="cm">// TIME: O(V+E) | SPACE: O(V+E)</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">findOrder</span>(<span class="tp">int</span> numCourses, <span class="tp">int</span>[][] prerequisites) {
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; graph = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    <span class="tp">int</span>[] indegree = <span class="kw">new</span> <span class="tp">int</span>[numCourses];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; numCourses; i++) graph.add(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;());
    <span class="kw">for</span> (<span class="tp">int</span>[] p : prerequisites) {
        graph.get(p[<span class="nm">1</span>]).add(p[<span class="nm">0</span>]);
        indegree[p[<span class="nm">0</span>]]++;
    }
    <span class="tp">Queue</span>&lt;<span class="tp">Integer</span>&gt; queue = <span class="kw">new</span> <span class="tp">LinkedList</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; numCourses; i++)
        <span class="kw">if</span> (indegree[i] == <span class="nm">0</span>) queue.offer(i);
    <span class="tp">int</span>[] order = <span class="kw">new</span> <span class="tp">int</span>[numCourses];
    <span class="tp">int</span> idx = <span class="nm">0</span>;
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="tp">int</span> node = queue.poll();
        order[idx++] = node;
        <span class="kw">for</span> (<span class="tp">int</span> nei : graph.get(node))
            <span class="kw">if</span> (--indegree[nei] == <span class="nm">0</span>) queue.offer(nei);
    }
    <span class="kw">return</span> idx == numCourses ? order : <span class="kw">new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}`,
      csharp:`<span class="cm">// TOPOLOGICAL SORT — THE TEMPLATE (Kahn's BFS)</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">FindOrder</span>(<span class="tp">int</span> numCourses, <span class="tp">int</span>[][] prerequisites) {
    <span class="kw">var</span> graph = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;[numCourses];
    <span class="tp">int</span>[] indegree = <span class="kw">new</span> <span class="tp">int</span>[numCourses];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; numCourses; i++) graph[i] = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;();
    <span class="kw">foreach</span> (<span class="kw">var</span> p <span class="kw">in</span> prerequisites) {
        graph[p[<span class="nm">1</span>]].Add(p[<span class="nm">0</span>]);
        indegree[p[<span class="nm">0</span>]]++;
    }
    <span class="kw">var</span> queue = <span class="kw">new</span> <span class="tp">Queue</span>&lt;<span class="tp">int</span>&gt;();
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; numCourses; i++)
        <span class="kw">if</span> (indegree[i] == <span class="nm">0</span>) queue.Enqueue(i);
    <span class="kw">var</span> order = <span class="kw">new</span> <span class="tp">int</span>[numCourses];
    <span class="tp">int</span> idx = <span class="nm">0</span>;
    <span class="kw">while</span> (queue.Count &gt; <span class="nm">0</span>) {
        <span class="tp">int</span> node = queue.Dequeue();
        order[idx++] = node;
        <span class="kw">foreach</span> (<span class="tp">int</span> nei <span class="kw">in</span> graph[node])
            <span class="kw">if</span> (--indegree[nei] == <span class="nm">0</span>) queue.Enqueue(nei);
    }
    <span class="kw">return</span> idx == numCourses ? order : Array.Empty&lt;<span class="tp">int</span>&gt;();
}`
    },
    memoryHack:{
      oneSentence:'Count in-degrees, enqueue zeros, process each node by decrementing neighbors — if all processed, no cycle.',
      flowchart:{
        nodes:[
          {id:'start',label:'Build graph + indegree[]',type:'start',x:290,y:20},
          {id:'seed',label:'Enqueue indegree=0',type:'action',x:290,y:80},
          {id:'while',label:'Queue empty?',type:'decision',x:290,y:140},
          {id:'proc',label:'Poll, dec neighbors',type:'action',x:100,y:140},
          {id:'zero',label:'Neighbor=0? Enqueue',type:'action',x:100,y:200},
          {id:'check',label:'All processed?',type:'decision',x:290,y:200},
          {id:'yes',label:'Valid order!',type:'end',x:480,y:200},
          {id:'no',label:'Cycle exists!',type:'end',x:480,y:140}
        ],
        edges:[
          {from:'start',to:'seed',label:''},
          {from:'seed',to:'while',label:''},
          {from:'while',to:'proc',label:'NO'},
          {from:'proc',to:'zero',label:''},
          {from:'zero',to:'while',label:''},
          {from:'while',to:'check',label:'YES'},
          {from:'check',to:'yes',label:'YES'},
          {from:'check',to:'no',label:'NO'}
        ]
      },
      annotatedCode:[
        {line:'int[] indegree = new int[numCourses];',stepId:'start',note:'Count prerequisites for each course',color:'#c084fc'},
        {line:'for (int[] p : prerequisites) { graph[p[1]].add(p[0]); indegree[p[0]]++; }',stepId:'start',note:'Build adjacency list + count incoming edges',color:'#c084fc'},
        {line:'for (i) if (indegree[i]==0) queue.offer(i);',stepId:'seed',note:'Courses with NO prereqs can start immediately',color:'#00ff88'},
        {line:'while (!queue.isEmpty()) {',stepId:'while',note:'Process until queue empty',color:'#00cfff'},
        {line:'    int node = queue.poll(); order[idx++] = node;',stepId:'proc',note:'Take next available course',color:'#ffd600'},
        {line:'    for (nei : graph[node]) if (--indegree[nei]==0) queue.offer(nei);',stepId:'zero',note:'Completing this unlocks neighbors!',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Init',art:'indegree=[0,1,1,2]  queue=[0]',annotation:'Course 0 has no prereqs → ready'},
        {label:'Process 0',art:'dec 1→0, dec 2→0  queue=[1,2]  order=[0]',annotation:'Completing 0 unlocks courses 1 and 2'},
        {label:'Process 1',art:'dec 3→1  queue=[2]  order=[0,1]',annotation:'Course 3 still needs course 2'},
        {label:'Process 2',art:'dec 3→0  queue=[3]  order=[0,1,2]',annotation:'Now course 3 is unlocked!'},
        {label:'Process 3',art:'queue=[]  order=[0,1,2,3]  count=4=numCourses ✓',annotation:'All courses processed = no cycle'}
      ],
      variations:[
        {name:'Course Schedule',desc:'Kahn\'s BFS — if count < numCourses, cycle exists',problem:'Course Schedule (#207)'},
        {name:'Course Schedule II',desc:'Same but return the actual ordering',problem:'Course Schedule II (#210)'},
        {name:'Alien Dictionary',desc:'Build graph from char ordering between words, then topo sort',problem:'Alien Dictionary (#269)'}
      ],
      title:'COUNT → SEED → PEEL',
      mnemonic:'COUNT → SEED → PEEL — count in-degrees, seed queue with zeros, peel off layer by layer',
      steps:['Build adjacency list + indegree array','Enqueue all nodes with indegree=0 (no dependencies)','While queue: poll node, add to order','For each neighbor: decrement indegree, enqueue if becomes 0','If order.length < numNodes → cycle exists!'],
      why:'By always processing nodes with zero dependencies first, we naturally build a valid ordering. If a cycle exists, those nodes never reach zero in-degree and are never processed.'
    },
    cheat:{
      trigger:'course schedule, prerequisites, task ordering, dependency graph, detect cycle in directed graph',
      firstLine:'int[] indegree = new int[numCourses];',
      gotcha:'Forgetting to check if all nodes were processed — unprocessed nodes mean a cycle exists',
      pitch:"I'll use Kahn's algorithm: count in-degrees, enqueue nodes with 0 dependencies, and peel off layers. If not all nodes are processed, there's a cycle.",
      snippet:`<span class="cm">// Kahn's: count indegree, seed zeros, peel layers</span>
<span class="kw">int</span>[] indeg = <span class="kw">new int</span>[n];
<span class="cm">// ... build graph + indegree</span>
<span class="kw">for</span>(<span class="kw">int</span> i=<span class="nm">0</span>;i&lt;n;i++) <span class="kw">if</span>(indeg[i]==<span class="nm">0</span>) q.offer(i);
<span class="kw">while</span>(!q.isEmpty()) {
    <span class="kw">int</span> node = q.poll(); count++;
    <span class="kw">for</span>(<span class="kw">int</span> nei : graph[node])
        <span class="kw">if</span>(--indeg[nei]==<span class="nm">0</span>) q.offer(nei);
} <span class="cm">// count==n ? no cycle : cycle!</span>`
    }
  },
  {
    icon:'🔗', name:'Union-Find', accent:'#f59e0b',
    tagline:'Track connected components — merge and query in near O(1)',
    hook:"Imagine a school where kids form friend groups. When two kids become friends, their ENTIRE groups merge. To check if two kids are in the same group, you follow the chain to the group leader. Union-Find makes this lightning fast with two tricks: path compression (shortcut to the leader) and union by rank (keep the tree flat). Finding connected groups has never been faster!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Union-Find: Connected Components</text><text x="150" y="55" fill="#f59e0b" text-anchor="middle" font-size="12" font-family="monospace">Before Union(1,4)</text><circle cx="80" cy="95" r="18" fill="#1a1d2e" stroke="#f59e0b" stroke-width="2"/><text x="80" y="100" fill="#f59e0b" text-anchor="middle" font-size="13">0</text><circle cx="80" cy="150" r="16" fill="#1a1d2e" stroke="#f59e0b" stroke-width="2"/><text x="80" y="155" fill="#f59e0b" text-anchor="middle" font-size="12">1</text><circle cx="80" cy="200" r="15" fill="#1a1d2e" stroke="#f59e0b" stroke-width="2"/><text x="80" y="205" fill="#f59e0b" text-anchor="middle" font-size="11">2</text><line x1="80" y1="113" x2="80" y2="134" stroke="#f59e0b"/><line x1="80" y1="166" x2="80" y2="185" stroke="#f59e0b"/><circle cx="220" cy="95" r="18" fill="#1a1d2e" stroke="#00ff88" stroke-width="2"/><text x="220" y="100" fill="#00ff88" text-anchor="middle" font-size="13">3</text><circle cx="220" cy="150" r="16" fill="#1a1d2e" stroke="#00ff88" stroke-width="2"/><text x="220" y="155" fill="#00ff88" text-anchor="middle" font-size="12">4</text><line x1="220" y1="113" x2="220" y2="134" stroke="#00ff88"/><text x="450" y="55" fill="#ffd600" text-anchor="middle" font-size="12" font-family="monospace">After Union(1,4)</text><circle cx="450" cy="95" r="20" fill="#1a1d2e" stroke="#ffd600" stroke-width="2"/><text x="450" y="100" fill="#ffd600" text-anchor="middle" font-size="14" font-weight="bold">0</text><circle cx="390" cy="155" r="16" fill="#1a1d2e" stroke="#ffd600" stroke-width="2"/><text x="390" y="160" fill="#ffd600" text-anchor="middle" font-size="12">1</text><circle cx="450" cy="155" r="16" fill="#1a1d2e" stroke="#ffd600" stroke-width="2"/><text x="450" y="160" fill="#ffd600" text-anchor="middle" font-size="12">3</text><circle cx="390" cy="210" r="14" fill="#1a1d2e" stroke="#ffd600" stroke-width="2"/><text x="390" y="215" fill="#ffd600" text-anchor="middle" font-size="11">2</text><circle cx="510" cy="155" r="16" fill="#1a1d2e" stroke="#ffd600" stroke-width="2"/><text x="510" y="160" fill="#ffd600" text-anchor="middle" font-size="12">4</text><line x1="435" y1="112" x2="395" y2="140" stroke="#ffd600"/><line x1="450" y1="115" x2="450" y2="139" stroke="#ffd600"/><line x1="465" y1="112" x2="505" y2="140" stroke="#ffd600"/><line x1="390" y1="171" x2="390" y2="196" stroke="#ffd600"/><text x="300" y="260" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace">find(2) → 0, find(4) → 0 → Same component!</text><text x="300" y="282" fill="#4a5268" text-anchor="middle" font-size="10" font-family="monospace">Path compression: 2→0 directly (skip 1)</text></svg>`,
    complexity:[
      {badge:'red',big:'O(n²)',label:'BRUTE FORCE',desc:'Recompute components from scratch each time'},
      {badge:'green',big:'O(α(n))',label:'UNION-FIND',desc:'Near O(1) with path compression + union by rank'}
    ],
    meterWidth:'95%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># UNION-FIND — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Connected components, cycle in undirected graph, MST</span>
<span class="cm"># TIME: O(α(n)) ≈ O(1) per operation</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="kw">class</span> <span class="fn">UnionFind</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, n):
        self.parent = <span class="fn">list</span>(<span class="fn">range</span>(n))
        self.rank = [<span class="nm">0</span>] * n
        self.components = n

    <span class="kw">def</span> <span class="fn">find</span>(self, x):
        <span class="kw">if</span> self.parent[x] != x:
            self.parent[x] = self.<span class="fn">find</span>(self.parent[x])  <span class="cm"># path compression</span>
        <span class="kw">return</span> self.parent[x]

    <span class="kw">def</span> <span class="fn">union</span>(self, x, y):
        px, py = self.<span class="fn">find</span>(x), self.<span class="fn">find</span>(y)
        <span class="kw">if</span> px == py: <span class="kw">return</span> <span class="nm">False</span>  <span class="cm"># already connected</span>
        <span class="kw">if</span> self.rank[px] &lt; self.rank[py]: px, py = py, px
        self.parent[py] = px  <span class="cm"># union by rank</span>
        <span class="kw">if</span> self.rank[px] == self.rank[py]: self.rank[px] += <span class="nm">1</span>
        self.components -= <span class="nm">1</span>
        <span class="kw">return</span> <span class="nm">True</span>

<span class="cm"># ─── Redundant Connection ───</span>
<span class="kw">def</span> <span class="fn">findRedundantConnection</span>(edges):
    uf = <span class="fn">UnionFind</span>(<span class="fn">len</span>(edges) + <span class="nm">1</span>)
    <span class="kw">for</span> u, v <span class="kw">in</span> edges:
        <span class="kw">if not</span> uf.<span class="fn">union</span>(u, v):
            <span class="kw">return</span> [u, v]  <span class="cm"># already connected = redundant!</span>`,
      java:`<span class="cm">// UNION-FIND — THE TEMPLATE</span>
<span class="cm">// TIME: O(α(n)) ≈ O(1) per operation</span>

<span class="kw">class</span> <span class="tp">UnionFind</span> {
    <span class="tp">int</span>[] parent, rank;
    <span class="tp">int</span> components;
    <span class="fn">UnionFind</span>(<span class="tp">int</span> n) {
        parent = <span class="kw">new</span> <span class="tp">int</span>[n]; rank = <span class="kw">new</span> <span class="tp">int</span>[n]; components = n;
        <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++) parent[i] = i;
    }
    <span class="tp">int</span> <span class="fn">find</span>(<span class="tp">int</span> x) {
        <span class="kw">if</span> (parent[x] != x) parent[x] = find(parent[x]); <span class="cm">// path compression</span>
        <span class="kw">return</span> parent[x];
    }
    <span class="tp">boolean</span> <span class="fn">union</span>(<span class="tp">int</span> x, <span class="tp">int</span> y) {
        <span class="tp">int</span> px = find(x), py = find(y);
        <span class="kw">if</span> (px == py) <span class="kw">return</span> <span class="nm">false</span>;
        <span class="kw">if</span> (rank[px] &lt; rank[py]) { <span class="tp">int</span> t=px; px=py; py=t; }
        parent[py] = px;
        <span class="kw">if</span> (rank[px] == rank[py]) rank[px]++;
        components--;
        <span class="kw">return</span> <span class="nm">true</span>;
    }
}`,
      csharp:`<span class="cm">// UNION-FIND — THE TEMPLATE</span>
<span class="kw">class</span> <span class="tp">UnionFind</span> {
    <span class="tp">int</span>[] parent, rank;
    <span class="kw">public</span> <span class="tp">int</span> Components;
    <span class="kw">public</span> <span class="fn">UnionFind</span>(<span class="tp">int</span> n) {
        parent = <span class="kw">new</span> <span class="tp">int</span>[n]; rank = <span class="kw">new</span> <span class="tp">int</span>[n]; Components = n;
        <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++) parent[i] = i;
    }
    <span class="kw">public</span> <span class="tp">int</span> <span class="fn">Find</span>(<span class="tp">int</span> x) {
        <span class="kw">if</span> (parent[x] != x) parent[x] = Find(parent[x]);
        <span class="kw">return</span> parent[x];
    }
    <span class="kw">public</span> <span class="tp">bool</span> <span class="fn">Union</span>(<span class="tp">int</span> x, <span class="tp">int</span> y) {
        <span class="tp">int</span> px = Find(x), py = Find(y);
        <span class="kw">if</span> (px == py) <span class="kw">return</span> <span class="nm">false</span>;
        <span class="kw">if</span> (rank[px] &lt; rank[py]) (px,py)=(py,px);
        parent[py] = px;
        <span class="kw">if</span> (rank[px] == rank[py]) rank[px]++;
        Components--;
        <span class="kw">return</span> <span class="nm">true</span>;
    }
}`
    },
    memoryHack:{
      oneSentence:'Each node points to a parent. Find compresses paths to root. Union merges two trees by rank. Connected = same root.',
      flowchart:{
        nodes:[
          {id:'start',label:'parent[i]=i',type:'start',x:290,y:20},
          {id:'find',label:'Find root of x',type:'action',x:140,y:90},
          {id:'compress',label:'Path compress',type:'action',x:140,y:160},
          {id:'union',label:'Union(x,y)',type:'action',x:440,y:90},
          {id:'same',label:'Same root?',type:'decision',x:440,y:160},
          {id:'skip',label:'Already connected',type:'end',x:290,y:160},
          {id:'merge',label:'Attach smaller to bigger',type:'action',x:440,y:230}
        ],
        edges:[
          {from:'start',to:'find',label:''},
          {from:'start',to:'union',label:''},
          {from:'find',to:'compress',label:'recurse'},
          {from:'union',to:'same',label:'find both roots'},
          {from:'same',to:'skip',label:'YES'},
          {from:'same',to:'merge',label:'NO'}
        ]
      },
      annotatedCode:[
        {line:'int[] parent = new int[n]; // parent[i] = i initially',stepId:'start',note:'Everyone is their own root at first',color:'#f59e0b'},
        {line:'int find(int x) {',stepId:'find',note:'Follow parent chain to root',color:'#00cfff'},
        {line:'    if (parent[x] != x) parent[x] = find(parent[x]);',stepId:'compress',note:'Path compression: point directly to root!',color:'#00ff88'},
        {line:'boolean union(int x, int y) {',stepId:'union',note:'Merge two components',color:'#ffd600'},
        {line:'    if (px == py) return false;',stepId:'same',note:'Already same component — skip',color:'#ff4d6d'},
        {line:'    parent[py] = px; // attach smaller to larger',stepId:'merge',note:'Union by rank keeps tree flat',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Init',art:'parent=[0,1,2,3,4]  5 components',annotation:'Each node is its own root'},
        {label:'Union(0,1)',art:'parent=[0,0,2,3,4]  4 components',annotation:'Node 1 now points to 0'},
        {label:'Union(2,3)',art:'parent=[0,0,2,2,4]  3 components',annotation:'Node 3 now points to 2'},
        {label:'Union(1,3)',art:'parent=[0,0,0,2,4]  2 components  find(3)→2→0',annotation:'Merging groups: {0,1} + {2,3}'},
        {label:'Find(3)',art:'parent[3]=2, parent[2]=0 → compress: parent[3]=0',annotation:'Path compression: 3→0 directly now'}
      ],
      variations:[
        {name:'Graph Valid Tree',desc:'Union-Find: n-1 edges + no cycle (union returns false) = tree',problem:'Graph Valid Tree (#261)'},
        {name:'Connected Components',desc:'Union all edges, count remaining components',problem:'Number of Connected Components (#323)'},
        {name:'Redundant Connection',desc:'First edge where union returns false = redundant',problem:'Redundant Connection (#684)'}
      ],
      title:'FIND ROOT → MERGE TREES',
      mnemonic:'FIND ROOT → MERGE TREES — path compression + union by rank = near O(1)',
      steps:['Init parent[i]=i, rank[i]=0','Find(x): follow parent to root, compress path','Union(x,y): find both roots, attach smaller to larger','Connected(x,y): find(x) == find(y)'],
      why:'Path compression flattens the tree on each find, and union by rank keeps trees balanced. Together they give amortized O(α(n)) ≈ O(1) per operation.'
    },
    cheat:{
      trigger:'connected components, redundant connection, graph valid tree, union find, disjoint set, MST',
      firstLine:'int[] parent = new int[n]; for (int i=0;i<n;i++) parent[i]=i;',
      gotcha:'Forgetting path compression — without it, find() degrades to O(n) in worst case',
      pitch:"I'll use Union-Find with path compression and union by rank. Each union/find is near O(1). For cycle detection, if union returns false, the edge connects already-connected nodes.",
      snippet:`<span class="cm">// Union-Find with path compression</span>
<span class="kw">int</span> <span class="fn">find</span>(<span class="kw">int</span> x) {
    <span class="kw">if</span>(parent[x]!=x) parent[x]=<span class="fn">find</span>(parent[x]); <span class="cm">// compress!</span>
    <span class="kw">return</span> parent[x];
}
<span class="kw">boolean</span> <span class="fn">union</span>(<span class="kw">int</span> x,<span class="kw">int</span> y) {
    <span class="kw">int</span> px=<span class="fn">find</span>(x), py=<span class="fn">find</span>(y);
    <span class="kw">if</span>(px==py) <span class="kw">return false</span>; <span class="cm">// cycle!</span>
    parent[py]=px; <span class="kw">return true</span>;
}`
    }
  },
  {
    icon:'⚖️', name:'Two Heaps (Median)', accent:'#ec4899',
    tagline:'Max-heap + min-heap to track the middle dynamically',
    hook:"Imagine sorting a deck of cards as you draw them, always knowing which card is in the middle. You split the deck: the left half goes into a max-heap (biggest on top), the right half into a min-heap (smallest on top). The tops of these heaps are the middle cards! When a new card arrives, put it in the correct half and rebalance if needed. The median is always at your fingertips!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Two Heaps: Find Median from Data Stream</text><text x="150" y="65" fill="#ff6b6b" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Max-Heap (left half)</text><rect x="70" y="80" width="160" height="35" fill="#1a1d2e" stroke="#ff6b6b" rx="4"/><text x="150" y="102" fill="#ff6b6b" text-anchor="middle" font-size="13" font-family="monospace">Top: 5 (largest left)</text><text x="150" y="130" fill="#4a5268" font-size="10" font-family="monospace">[5, 3, 1]</text><text x="450" y="65" fill="#4ade80" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Min-Heap (right half)</text><rect x="370" y="80" width="160" height="35" fill="#1a1d2e" stroke="#4ade80" rx="4"/><text x="450" y="102" fill="#4ade80" text-anchor="middle" font-size="13" font-family="monospace">Top: 7 (smallest right)</text><text x="450" y="130" fill="#4a5268" font-size="10" font-family="monospace">[7, 9, 11]</text><text x="300" y="165" fill="#ec4899" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Median = (5 + 7) / 2 = 6.0</text><rect x="70" y="185" width="460" height="100" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="208" fill="#ffd600" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Invariant: |max_heap| ≥ |min_heap| ≥ |max_heap|-1</text><text x="90" y="232" fill="#e8eaf0" font-size="11" font-family="monospace">1. Add to correct heap (compare with max_heap.top)</text><text x="90" y="252" fill="#e8eaf0" font-size="11" font-family="monospace">2. Rebalance: if size diff &gt; 1, move top element</text><text x="90" y="272" fill="#00ff88" font-size="11" font-family="monospace">3. Median: both same size? avg of tops : max_heap.top</text></svg>`,
    complexity:[
      {badge:'red',big:'O(n log n)',label:'SORT EACH TIME',desc:'Re-sort entire array on each add'},
      {badge:'green',big:'O(log n)',label:'TWO HEAPS',desc:'Add in O(log n), median in O(1)'}
    ],
    meterWidth:'90%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># TWO HEAPS (MEDIAN) — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Streaming median, dynamic middle element</span>
<span class="cm"># TIME: O(log n) add, O(1) median | SPACE: O(n)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="kw">import</span> heapq

<span class="kw">class</span> <span class="fn">MedianFinder</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.max_heap = []  <span class="cm"># left half (invert for max)</span>
        self.min_heap = []  <span class="cm"># right half</span>

    <span class="kw">def</span> <span class="fn">addNum</span>(self, num):
        <span class="cm"># Always add to max_heap first, then rebalance</span>
        heapq.heappush(self.max_heap, -num)
        heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        <span class="cm"># Keep max_heap size ≥ min_heap</span>
        <span class="kw">if</span> <span class="fn">len</span>(self.min_heap) &gt; <span class="fn">len</span>(self.max_heap):
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))

    <span class="kw">def</span> <span class="fn">findMedian</span>(self):
        <span class="kw">if</span> <span class="fn">len</span>(self.max_heap) &gt; <span class="fn">len</span>(self.min_heap):
            <span class="kw">return</span> -self.max_heap[<span class="nm">0</span>]
        <span class="kw">return</span> (-self.max_heap[<span class="nm">0</span>] + self.min_heap[<span class="nm">0</span>]) / <span class="nm">2.0</span>`,
      java:`<span class="cm">// TWO HEAPS (MEDIAN) — THE TEMPLATE</span>
<span class="cm">// TIME: O(log n) add, O(1) median</span>

<span class="kw">class</span> <span class="tp">MedianFinder</span> {
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">Integer</span>&gt; maxHeap;  <span class="cm">// left half (max on top)</span>
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">Integer</span>&gt; minHeap;  <span class="cm">// right half (min on top)</span>

    <span class="kw">public</span> <span class="fn">MedianFinder</span>() {
        maxHeap = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;((a,b) -&gt; b - a);  <span class="cm">// reverse order</span>
        minHeap = <span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;();
    }

    <span class="kw">public</span> <span class="tp">void</span> <span class="fn">addNum</span>(<span class="tp">int</span> num) {
        maxHeap.offer(num);
        minHeap.offer(maxHeap.poll());  <span class="cm">// move largest left to right</span>
        <span class="kw">if</span> (minHeap.size() &gt; maxHeap.size())
            maxHeap.offer(minHeap.poll());  <span class="cm">// rebalance</span>
    }

    <span class="kw">public</span> <span class="tp">double</span> <span class="fn">findMedian</span>() {
        <span class="kw">if</span> (maxHeap.size() &gt; minHeap.size())
            <span class="kw">return</span> maxHeap.peek();
        <span class="kw">return</span> (maxHeap.peek() + minHeap.peek()) / <span class="nm">2.0</span>;
    }
}`,
      csharp:`<span class="cm">// TWO HEAPS (MEDIAN) — THE TEMPLATE</span>
<span class="kw">public</span> <span class="kw">class</span> <span class="tp">MedianFinder</span> {
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">int</span>,<span class="tp">int</span>&gt; maxHeap;  <span class="cm">// left (larger priority = max)</span>
    <span class="tp">PriorityQueue</span>&lt;<span class="tp">int</span>,<span class="tp">int</span>&gt; minHeap;  <span class="cm">// right</span>

    <span class="kw">public</span> <span class="fn">MedianFinder</span>() {
        maxHeap = <span class="kw">new</span>(<span class="tp">Comparer</span>&lt;<span class="tp">int</span>&gt;.Create((a,b)=&gt;b-a));
        minHeap = <span class="kw">new</span>();
    }

    <span class="kw">public</span> <span class="tp">void</span> <span class="fn">AddNum</span>(<span class="tp">int</span> num) {
        maxHeap.Enqueue(num, num);
        minHeap.Enqueue(maxHeap.Dequeue(), maxHeap.Dequeue());
        <span class="kw">if</span> (minHeap.Count &gt; maxHeap.Count)
            maxHeap.Enqueue(minHeap.Dequeue(), minHeap.Dequeue());
    }

    <span class="kw">public</span> <span class="tp">double</span> <span class="fn">FindMedian</span>() {
        <span class="kw">if</span> (maxHeap.Count &gt; minHeap.Count)
            <span class="kw">return</span> maxHeap.Peek();
        <span class="kw">return</span> (maxHeap.Peek() + minHeap.Peek()) / <span class="nm">2.0</span>;
    }
}`
    },
    memoryHack:{
      oneSentence:'Max-heap holds smaller half (largest small on top), min-heap holds larger half (smallest large on top) — median is at the tops.',
      flowchart:{
        nodes:[
          {id:'start',label:'Two heaps empty',type:'start',x:290,y:20},
          {id:'add',label:'Add to max_heap',type:'action',x:290,y:80},
          {id:'move',label:'Move top to min_heap',type:'action',x:290,y:140},
          {id:'check',label:'Size diff > 1?',type:'decision',x:290,y:200},
          {id:'rebal',label:'Move back',type:'action',x:480,y:200},
          {id:'median',label:'Get median from tops',type:'end',x:100,y:200}
        ],
        edges:[
          {from:'start',to:'add',label:''},
          {from:'add',to:'move',label:'ensure correctness'},
          {from:'move',to:'check',label:''},
          {from:'check',to:'rebal',label:'YES'},
          {from:'rebal',to:'check',label:''},
          {from:'check',to:'median',label:'NO = balanced'}
        ]
      },
      annotatedCode:[
        {line:'PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b)->b-a);',stepId:'start',note:'Left half — max on top (reverse comparator)',color:'#ec4899'},
        {line:'PriorityQueue<Integer> minHeap = new PriorityQueue<>();',stepId:'start',note:'Right half — min on top (default)',color:'#ec4899'},
        {line:'maxHeap.offer(num);',stepId:'add',note:'Always add to left side first',color:'#ff6b6b'},
        {line:'minHeap.offer(maxHeap.poll());',stepId:'move',note:'Move largest left to right — ensures all left ≤ all right',color:'#4ade80'},
        {line:'if (minHeap.size() > maxHeap.size())',stepId:'check',note:'Left must have same or 1 more than right',color:'#ffd600'},
        {line:'    maxHeap.offer(minHeap.poll());',stepId:'rebal',note:'Rebalance: move smallest right back to left',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Add 5',art:'max=[] min=[] → add 5 → max=[5] → move → min=[5] → rebal → max=[5] min=[]',annotation:'First element goes to max_heap'},
        {label:'Add 3',art:'max=[5] → add 3 → max=[5,3] → move 5 → min=[5] max=[3]',annotation:'Balanced: both have 1 element'},
        {label:'Add 7',art:'max=[3] → add 7 → max=[7,3] → move 7 → min=[5,7] → rebal 5 → max=[5,3] min=[7]',annotation:'Median = 5 (odd count, max_heap.top)'},
        {label:'Add 1',art:'max=[5,3] → add 1 → max=[5,3,1] → move 5 → min=[5,7] max=[3,1]',annotation:'Median = (3+5)/2 = 4.0 (even count, avg)'}
      ],
      variations:[
        {name:'Find Median from Data Stream',desc:'Two heaps with invariant: |max| ≥ |min| ≥ |max|-1',problem:'Find Median from Data Stream (#295)'},
        {name:'Sliding Window Median',desc:'Two heaps + lazy deletion for sliding window',problem:'Sliding Window Median (#480)'},
        {name:'IPO (Maximum Capital)',desc:'Two heaps: available projects (max profit) + locked projects (min capital)',problem:'IPO (#502)'}
      ],
      title:'SPLIT LEFT & RIGHT',
      mnemonic:'SPLIT LEFT & RIGHT — max-heap for left, min-heap for right, tops meet at the median',
      steps:['Init max_heap (left half, max on top) and min_heap (right half, min on top)','Add: always offer to max_heap first','Move largest from max_heap to min_heap (ensures left ≤ right)','Rebalance: if min_heap bigger, move smallest back to max_heap','Median: if sizes equal → avg of tops, else → max_heap.top'],
      why:'By maintaining the invariant that all elements in max_heap ≤ all elements in min_heap and keeping sizes balanced, the median is always at the heap tops.'
    },
    cheat:{
      trigger:'median from data stream, running median, middle element, sliding window median, two heaps',
      firstLine:'PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b)->b-a);',
      gotcha:'Forgetting to reverse the comparator for max-heap — Java PriorityQueue is min-heap by default',
      pitch:"I'll use two heaps: max-heap for the left half, min-heap for the right half. Add to max first, move top to min, rebalance if needed. Median is at the tops.",
      snippet:`<span class="cm">// Two heaps: max (left) + min (right)</span>
<span class="tp">PriorityQueue</span>&lt;<span class="tp">Integer</span>&gt; maxH=<span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;((a,b)-&gt;b-a), minH=<span class="kw">new</span> <span class="tp">PriorityQueue</span>&lt;&gt;();
<span class="tp">void</span> <span class="fn">add</span>(<span class="kw">int</span> n) {
    maxH.offer(n); minH.offer(maxH.poll()); <span class="cm">// ensure left≤right</span>
    <span class="kw">if</span>(minH.size()&gt;maxH.size()) maxH.offer(minH.poll()); <span class="cm">// rebalance</span>
}
<span class="tp">double</span> <span class="fn">median</span>() {
    <span class="kw">return</span> maxH.size()&gt;minH.size() ? maxH.peek() : (maxH.peek()+minH.peek())/<span class="nm">2.0</span>;
}`
    }
  },
  {
    icon:'🎒', name:'Knapsack DP', accent:'#f97316',
    tagline:'2D DP table: items × capacity → optimal value',
    hook:"You have a backpack and a pile of treasures. Each treasure has weight and value. Your backpack has a weight limit. Which treasures do you take to maximize value? You build a table: for each item and each possible weight, you decide: 'take it (if it fits) or skip it'. The table fills up with best values. The bottom-right corner is your answer — the max value you can carry!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Knapsack DP: Items × Capacity Table</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">coins=[1,2,5] amount=5 → ways to make 5?</text><rect x="50" y="65" width="500" height="210" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="100" y="88" fill="#f97316" font-size="10" font-family="monospace">amt→</text><text x="145" y="88" fill="#f97316" font-size="10" font-family="monospace">0</text><text x="195" y="88" fill="#f97316" font-size="10" font-family="monospace">1</text><text x="245" y="88" fill="#f97316" font-size="10" font-family="monospace">2</text><text x="295" y="88" fill="#f97316" font-size="10" font-family="monospace">3</text><text x="345" y="88" fill="#f97316" font-size="10" font-family="monospace">4</text><text x="395" y="88" fill="#f97316" font-size="10" font-family="monospace">5</text><text x="70" y="115" fill="#f97316" font-size="10" font-family="monospace">[]</text><rect x="130" y="100" width="40" height="25" fill="#0e1018" stroke="#4a5268" rx="3"/><text x="150" y="117" fill="#00ff88" text-anchor="middle" font-size="11">1</text><rect x="180" y="100" width="40" height="25" fill="#0e1018" stroke="#4a5268" rx="3"/><text x="200" y="117" fill="#4a5268" text-anchor="middle" font-size="11">0</text><rect x="230" y="100" width="40" height="25" fill="#0e1018" stroke="#4a5268" rx="3"/><text x="250" y="117" fill="#4a5268" text-anchor="middle" font-size="11">0</text><rect x="280" y="100" width="40" height="25" fill="#0e1018" stroke="#4a5268" rx="3"/><text x="300" y="117" fill="#4a5268" text-anchor="middle" font-size="11">0</text><rect x="330" y="100" width="40" height="25" fill="#0e1018" stroke="#4a5268" rx="3"/><text x="350" y="117" fill="#4a5268" text-anchor="middle" font-size="11">0</text><rect x="380" y="100" width="40" height="25" fill="#0e1018" stroke="#4a5268" rx="3"/><text x="400" y="117" fill="#4a5268" text-anchor="middle" font-size="11">0</text><text x="70" y="148" fill="#f97316" font-size="10" font-family="monospace">[1]</text><rect x="130" y="133" width="40" height="25" fill="#0e1018" stroke="#f97316" rx="3"/><text x="150" y="150" fill="#00ff88" text-anchor="middle" font-size="11">1</text><rect x="180" y="133" width="40" height="25" fill="#0e1018" stroke="#f97316" rx="3"/><text x="200" y="150" fill="#ffd600" text-anchor="middle" font-size="11">1</text><rect x="230" y="133" width="40" height="25" fill="#0e1018" stroke="#f97316" rx="3"/><text x="250" y="150" fill="#ffd600" text-anchor="middle" font-size="11">1</text><rect x="280" y="133" width="40" height="25" fill="#0e1018" stroke="#f97316" rx="3"/><text x="300" y="150" fill="#ffd600" text-anchor="middle" font-size="11">1</text><rect x="330" y="133" width="40" height="25" fill="#0e1018" stroke="#f97316" rx="3"/><text x="350" y="150" fill="#ffd600" text-anchor="middle" font-size="11">1</text><rect x="380" y="133" width="40" height="25" fill="#0e1018" stroke="#f97316" rx="3"/><text x="400" y="150" fill="#ffd600" text-anchor="middle" font-size="11">1</text><text x="70" y="181" fill="#f97316" font-size="10" font-family="monospace">[1,2]</text><rect x="130" y="166" width="40" height="25" fill="#0e1018" stroke="#a78bfa" rx="3"/><text x="150" y="183" fill="#00ff88" text-anchor="middle" font-size="11">1</text><rect x="180" y="166" width="40" height="25" fill="#0e1018" stroke="#a78bfa" rx="3"/><text x="200" y="183" fill="#ffd600" text-anchor="middle" font-size="11">1</text><rect x="230" y="166" width="40" height="25" fill="#0e1018" stroke="#a78bfa" rx="3"/><text x="250" y="183" fill="#ffd600" text-anchor="middle" font-size="11">2</text><rect x="280" y="166" width="40" height="25" fill="#0e1018" stroke="#a78bfa" rx="3"/><text x="300" y="183" fill="#ffd600" text-anchor="middle" font-size="11">2</text><rect x="330" y="166" width="40" height="25" fill="#0e1018" stroke="#a78bfa" rx="3"/><text x="350" y="183" fill="#ffd600" text-anchor="middle" font-size="11">3</text><rect x="380" y="166" width="40" height="25" fill="#0e1018" stroke="#a78bfa" rx="3"/><text x="400" y="183" fill="#ffd600" text-anchor="middle" font-size="11">3</text><text x="70" y="214" fill="#f97316" font-size="10" font-family="monospace">[1,2,5]</text><rect x="130" y="199" width="40" height="25" fill="#0e1018" stroke="#00ff88" rx="3"/><text x="150" y="216" fill="#00ff88" text-anchor="middle" font-size="11" font-weight="bold">1</text><rect x="180" y="199" width="40" height="25" fill="#0e1018" stroke="#00ff88" rx="3"/><text x="200" y="216" fill="#ffd600" text-anchor="middle" font-size="11">1</text><rect x="230" y="199" width="40" height="25" fill="#0e1018" stroke="#00ff88" rx="3"/><text x="250" y="216" fill="#ffd600" text-anchor="middle" font-size="11">2</text><rect x="280" y="199" width="40" height="25" fill="#0e1018" stroke="#00ff88" rx="3"/><text x="300" y="216" fill="#ffd600" text-anchor="middle" font-size="11">2</text><rect x="330" y="199" width="40" height="25" fill="#0e1018" stroke="#00ff88" rx="3"/><text x="350" y="216" fill="#ffd600" text-anchor="middle" font-size="11">3</text><rect x="380" y="199" width="40" height="25" fill="rgba(0,255,136,.15)" stroke="#00ff88" stroke-width="2" rx="3"/><text x="400" y="216" fill="#00ff88" text-anchor="middle" font-size="12" font-weight="bold">4</text><text x="300" y="255" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace">Answer: 4 ways to make amount 5</text></svg>`,
    complexity:[
      {badge:'red',big:'O(2^n)',label:'BRUTE FORCE',desc:'Try every subset of items'},
      {badge:'green',big:'O(n×W)',label:'KNAPSACK DP',desc:'Fill table: items × capacity'}
    ],
    meterWidth:'88%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># KNAPSACK DP — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Coin change, subset sum, partition, target sum</span>
<span class="cm"># TIME: O(n×W) | SPACE: O(n×W) or O(W) optimized</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Coin Change (min coins) ───</span>
<span class="kw">def</span> <span class="fn">coinChange</span>(coins, amount):
    dp = [<span class="fn">float</span>(<span class="st">'inf'</span>)] * (amount + <span class="nm">1</span>)
    dp[<span class="nm">0</span>] = <span class="nm">0</span>
    <span class="kw">for</span> coin <span class="kw">in</span> coins:
        <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(coin, amount + <span class="nm">1</span>):
            dp[i] = <span class="fn">min</span>(dp[i], dp[i - coin] + <span class="nm">1</span>)
    <span class="kw">return</span> dp[amount] <span class="kw">if</span> dp[amount] != <span class="fn">float</span>(<span class="st">'inf'</span>) <span class="kw">else</span> -<span class="nm">1</span>

<span class="cm"># ─── Coin Change II (count ways) ───</span>
<span class="kw">def</span> <span class="fn">change</span>(amount, coins):
    dp = [<span class="nm">0</span>] * (amount + <span class="nm">1</span>)
    dp[<span class="nm">0</span>] = <span class="nm">1</span>  <span class="cm"># 1 way to make 0: use nothing</span>
    <span class="kw">for</span> coin <span class="kw">in</span> coins:
        <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(coin, amount + <span class="nm">1</span>):
            dp[i] += dp[i - coin]
    <span class="kw">return</span> dp[amount]

<span class="cm"># ─── Partition Equal Subset Sum ───</span>
<span class="kw">def</span> <span class="fn">canPartition</span>(nums):
    total = <span class="fn">sum</span>(nums)
    <span class="kw">if</span> total % <span class="nm">2</span>: <span class="kw">return</span> <span class="nm">False</span>
    target = total // <span class="nm">2</span>
    dp = [<span class="nm">False</span>] * (target + <span class="nm">1</span>)
    dp[<span class="nm">0</span>] = <span class="nm">True</span>
    <span class="kw">for</span> num <span class="kw">in</span> nums:
        <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(target, num - <span class="nm">1</span>, -<span class="nm">1</span>):  <span class="cm"># reverse!</span>
            dp[i] = dp[i] <span class="kw">or</span> dp[i - num]
    <span class="kw">return</span> dp[target]`,
      java:`<span class="cm">// KNAPSACK DP — THE TEMPLATE</span>
<span class="cm">// TIME: O(n×W) | SPACE: O(W)</span>

<span class="cm">// ─── Coin Change (min coins) ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">coinChange</span>(<span class="tp">int</span>[] coins, <span class="tp">int</span> amount) {
    <span class="tp">int</span>[] dp = <span class="kw">new</span> <span class="tp">int</span>[amount + <span class="nm">1</span>];
    <span class="tp">Arrays</span>.fill(dp, amount + <span class="nm">1</span>);  <span class="cm">// infinity</span>
    dp[<span class="nm">0</span>] = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> coin : coins)
        <span class="kw">for</span> (<span class="tp">int</span> i = coin; i &lt;= amount; i++)
            dp[i] = Math.min(dp[i], dp[i - coin] + <span class="nm">1</span>);
    <span class="kw">return</span> dp[amount] &gt; amount ? -<span class="nm">1</span> : dp[amount];
}

<span class="cm">// ─── Coin Change II (count ways) ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">change</span>(<span class="tp">int</span> amount, <span class="tp">int</span>[] coins) {
    <span class="tp">int</span>[] dp = <span class="kw">new</span> <span class="tp">int</span>[amount + <span class="nm">1</span>];
    dp[<span class="nm">0</span>] = <span class="nm">1</span>;
    <span class="kw">for</span> (<span class="tp">int</span> coin : coins)
        <span class="kw">for</span> (<span class="tp">int</span> i = coin; i &lt;= amount; i++)
            dp[i] += dp[i - coin];
    <span class="kw">return</span> dp[amount];
}

<span class="cm">// ─── Partition Equal Subset Sum ───</span>
<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">canPartition</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">int</span> sum = <span class="tp">Arrays</span>.stream(nums).sum();
    <span class="kw">if</span> (sum % <span class="nm">2</span> != <span class="nm">0</span>) <span class="kw">return</span> <span class="nm">false</span>;
    <span class="tp">int</span> target = sum / <span class="nm">2</span>;
    <span class="tp">boolean</span>[] dp = <span class="kw">new</span> <span class="tp">boolean</span>[target + <span class="nm">1</span>];
    dp[<span class="nm">0</span>] = <span class="nm">true</span>;
    <span class="kw">for</span> (<span class="tp">int</span> num : nums)
        <span class="kw">for</span> (<span class="tp">int</span> i = target; i &gt;= num; i--)  <span class="cm">// reverse!</span>
            dp[i] = dp[i] || dp[i - num];
    <span class="kw">return</span> dp[target];
}`,
      csharp:`<span class="cm">// KNAPSACK DP — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">CoinChange</span>(<span class="tp">int</span>[] coins, <span class="tp">int</span> amount) {
    <span class="tp">int</span>[] dp = <span class="kw">new</span> <span class="tp">int</span>[amount + <span class="nm">1</span>];
    <span class="tp">Array</span>.Fill(dp, amount + <span class="nm">1</span>);
    dp[<span class="nm">0</span>] = <span class="nm">0</span>;
    <span class="kw">foreach</span> (<span class="tp">int</span> coin <span class="kw">in</span> coins)
        <span class="kw">for</span> (<span class="tp">int</span> i = coin; i &lt;= amount; i++)
            dp[i] = Math.Min(dp[i], dp[i - coin] + <span class="nm">1</span>);
    <span class="kw">return</span> dp[amount] &gt; amount ? -<span class="nm">1</span> : dp[amount];
}

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">Change</span>(<span class="tp">int</span> amount, <span class="tp">int</span>[] coins) {
    <span class="tp">int</span>[] dp = <span class="kw">new</span> <span class="tp">int</span>[amount + <span class="nm">1</span>];
    dp[<span class="nm">0</span>] = <span class="nm">1</span>;
    <span class="kw">foreach</span> (<span class="tp">int</span> coin <span class="kw">in</span> coins)
        <span class="kw">for</span> (<span class="tp">int</span> i = coin; i &lt;= amount; i++)
            dp[i] += dp[i - coin];
    <span class="kw">return</span> dp[amount];
}`
    },
    memoryHack:{
      oneSentence:'Build a 1D DP array: dp[i] = best way to reach sum i. For each coin/item, update all reachable sums.',
      flowchart:{
        nodes:[
          {id:'start',label:'dp[0]=base (0 or 1)',type:'start',x:290,y:20},
          {id:'coin',label:'For each coin',type:'action',x:290,y:80},
          {id:'amt',label:'For each amount',type:'action',x:290,y:140},
          {id:'update',label:'dp[i] uses dp[i-coin]',type:'action',x:290,y:200},
          {id:'done',label:'Return dp[target]',type:'end',x:290,y:260}
        ],
        edges:[
          {from:'start',to:'coin',label:''},
          {from:'coin',to:'amt',label:''},
          {from:'amt',to:'update',label:'transition'},
          {from:'update',to:'amt',label:'next amount'},
          {from:'amt',to:'coin',label:'next coin'},
          {from:'coin',to:'done',label:'all coins done'}
        ]
      },
      annotatedCode:[
        {line:'int[] dp = new int[amount + 1];',stepId:'start',note:'dp[i] = min coins to make amount i',color:'#f97316'},
        {line:'Arrays.fill(dp, amount + 1); dp[0] = 0;',stepId:'start',note:'Base: 0 coins for amount 0',color:'#00ff88'},
        {line:'for (int coin : coins)',stepId:'coin',note:'Outer loop: each coin type',color:'#ffd600'},
        {line:'    for (int i = coin; i <= amount; i++)',stepId:'amt',note:'Inner loop: all amounts ≥ coin',color:'#00cfff'},
        {line:'        dp[i] = Math.min(dp[i], dp[i - coin] + 1);',stepId:'update',note:'Take coin? dp[i-coin] + 1. Skip? keep dp[i]',color:'#a78bfa'}
      ],
      stateSnapshots:[
        {label:'Init',art:'coins=[1,2,5] amount=11  dp=[0,∞,∞,∞,...,∞]',annotation:'Base case: 0 coins for amount 0'},
        {label:'Coin 1',art:'dp=[0,1,2,3,4,5,6,7,8,9,10,11] (all 1s)',annotation:'Using only coin=1, amounts are 1×amount'},
        {label:'Coin 2',art:'dp=[0,1,1,2,2,3,3,4,4,5,5,6]',annotation:'Using coin=2 reduces some amounts'},
        {label:'Coin 5',art:'dp=[0,1,1,2,2,1,2,2,3,3,2,3]',annotation:'Using coin=5 optimizes further: amount 5 = 1 coin'},
        {label:'Result',art:'dp[11] = 3  (5+5+1)',annotation:'Minimum 3 coins to make 11'}
      ],
      variations:[
        {name:'Coin Change (min coins)',desc:'dp[i] = min coins to make i. Unbounded knapsack.',problem:'Coin Change (#322)'},
        {name:'Coin Change II (count ways)',desc:'dp[i] = # ways to make i. Sum combinations.',problem:'Coin Change II (#518)'},
        {name:'Partition Equal Subset Sum',desc:'dp[i] = can we make sum i? 0/1 knapsack (reverse loop!).',problem:'Partition Equal Subset Sum (#416)'},
        {name:'Target Sum',desc:'Convert to subset sum problem with target=(sum+S)/2',problem:'Target Sum (#494)'}
      ],
      title:'ITEM LOOP → CAPACITY LOOP',
      mnemonic:'ITEM LOOP → CAPACITY LOOP — for each item, update all reachable capacities from item weight to max',
      steps:['Init dp[0] = base value (0 for min, 1 for count, true for possible)','For each item/coin: for each capacity from item to max','Update dp[capacity] using dp[capacity - item]','For 0/1 knapsack (each item once): loop capacity in REVERSE','For unbounded knapsack (items reusable): loop capacity FORWARD','Return dp[target]'],
      why:'The DP table encodes "best way to reach each subproblem sum". By iterating items outside and capacities inside, each dp[i] builds on smaller subproblems.'
    },
    cheat:{
      trigger:'coin change, subset sum, partition, target sum, knapsack, 0/1 knapsack, unbounded knapsack',
      firstLine:'int[] dp = new int[amount + 1]; dp[0] = base;',
      gotcha:'0/1 knapsack needs REVERSE loop on capacity (to avoid using same item twice). Unbounded uses FORWARD loop.',
      pitch:"I'll use 1D DP knapsack. dp[i] represents the best way to reach sum i. For each item, I update all reachable sums. Unbounded = forward loop, 0/1 = reverse loop.",
      snippet:`<span class="cm">// Unbounded knapsack: forward loop (reuse items)</span>
<span class="kw">int</span>[] dp = <span class="kw">new int</span>[target+<span class="nm">1</span>]; dp[<span class="nm">0</span>]=base;
<span class="kw">for</span>(<span class="kw">int</span> item : items)
    <span class="kw">for</span>(<span class="kw">int</span> i=item; i&lt;=target; i++)
        dp[i] = combine(dp[i], dp[i-item]);
<span class="cm">// 0/1 knapsack: reverse loop (each item once)</span>
<span class="kw">for</span>(<span class="kw">int</span> item : items)
    <span class="kw">for</span>(<span class="kw">int</span> i=target; i&gt;=item; i--)
        dp[i] = combine(dp[i], dp[i-item]);`
    }
  },
  {
    icon:'🔄', name:'Palindrome Expand', accent:'#14b8a6',
    tagline:'Expand from center outward to find palindromes',
    hook:"How do you check if a string is a palindrome? Start from the middle and walk outward — if left matches right at every step, it's a palindrome! For 'racecar', start at 'e', expand to 'cec', then 'aceca', then 'racecar' — all match! This trick finds ALL palindromes in a string by trying every possible center (including between characters for even-length palindromes). Way faster than checking every substring!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Palindrome Expand from Center</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">String: "babad" → Find longest palindrome</text><rect x="120" y="70" width="40" height="40" fill="#1a1d2e" stroke="#4a5268" rx="4"/><text x="140" y="96" fill="#e8eaf0" text-anchor="middle" font-size="16">b</text><rect x="170" y="70" width="40" height="40" fill="#1a1d2e" stroke="#14b8a6" rx="4"/><text x="190" y="96" fill="#14b8a6" text-anchor="middle" font-size="16">a</text><rect x="220" y="70" width="40" height="40" fill="#1a1d2e" stroke="#14b8a6" rx="4"/><text x="240" y="96" fill="#14b8a6" text-anchor="middle" font-size="16">b</text><rect x="270" y="70" width="40" height="40" fill="#1a1d2e" stroke="#14b8a6" rx="4"/><text x="290" y="96" fill="#14b8a6" text-anchor="middle" font-size="16">a</text><rect x="320" y="70" width="40" height="40" fill="#1a1d2e" stroke="#4a5268" rx="4"/><text x="340" y="96" fill="#e8eaf0" text-anchor="middle" font-size="16">d</text><text x="300" y="135" fill="#14b8a6" text-anchor="middle" font-size="12" font-family="monospace">Center: i=2 (middle 'b') → expand!</text><line x1="240" y1="120" x2="210" y2="155" stroke="#14b8a6" stroke-width="2"/><line x1="240" y1="120" x2="270" y2="155" stroke="#14b8a6" stroke-width="2"/><text x="180" y="175" fill="#ffd600" font-size="11" font-family="monospace">←L</text><text x="310" y="175" fill="#ffd600" font-size="11" font-family="monospace">R→</text><rect x="70" y="190" width="460" height="90" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="213" fill="#14b8a6" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Expand Steps</text><text x="90" y="235" fill="#e8eaf0" font-size="11" font-family="monospace">1. Center='b' (L=2, R=2) → "b" ✓</text><text x="90" y="255" fill="#00ff88" font-size="11" font-family="monospace">2. Expand (L=1, R=3) → "aba" ✓ (a==a)</text><text x="90" y="270" fill="#ff4d6d" font-size="11" font-family="monospace">3. Expand (L=0, R=4) → "babad" ✗ (b≠d) STOP</text></svg>`,
    complexity:[
      {badge:'red',big:'O(n³)',label:'BRUTE FORCE',desc:'Check every substring for palindrome'},
      {badge:'green',big:'O(n²)',label:'EXPAND CENTER',desc:'Try each center, expand up to n characters'}
    ],
    meterWidth:'85%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># PALINDROME EXPAND — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Longest palindrome, count palindromes</span>
<span class="cm"># TIME: O(n²) | SPACE: O(1)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Longest Palindromic Substring ───</span>
<span class="kw">def</span> <span class="fn">longestPalindrome</span>(s):
    <span class="kw">def</span> <span class="fn">expand</span>(L, R):
        <span class="kw">while</span> L &gt;= <span class="nm">0</span> <span class="kw">and</span> R &lt; <span class="fn">len</span>(s) <span class="kw">and</span> s[L] == s[R]:
            L -= <span class="nm">1</span>
            R += <span class="nm">1</span>
        <span class="kw">return</span> R - L - <span class="nm">1</span>  <span class="cm"># length of palindrome</span>

    start = maxLen = <span class="nm">0</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(s)):
        len1 = <span class="fn">expand</span>(i, i)      <span class="cm"># odd-length: center at i</span>
        len2 = <span class="fn">expand</span>(i, i+<span class="nm">1</span>)  <span class="cm"># even-length: center between i,i+1</span>
        curLen = <span class="fn">max</span>(len1, len2)
        <span class="kw">if</span> curLen &gt; maxLen:
            maxLen = curLen
            start = i - (curLen - <span class="nm">1</span>) // <span class="nm">2</span>
    <span class="kw">return</span> s[start:start + maxLen]

<span class="cm"># ─── Palindromic Substrings (count all) ───</span>
<span class="kw">def</span> <span class="fn">countSubstrings</span>(s):
    <span class="kw">def</span> <span class="fn">expand</span>(L, R):
        count = <span class="nm">0</span>
        <span class="kw">while</span> L &gt;= <span class="nm">0</span> <span class="kw">and</span> R &lt; <span class="fn">len</span>(s) <span class="kw">and</span> s[L] == s[R]:
            count += <span class="nm">1</span>
            L -= <span class="nm">1</span>
            R += <span class="nm">1</span>
        <span class="kw">return</span> count

    total = <span class="nm">0</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(s)):
        total += <span class="fn">expand</span>(i, i)      <span class="cm"># odd centers</span>
        total += <span class="fn">expand</span>(i, i+<span class="nm">1</span>)  <span class="cm"># even centers</span>
    <span class="kw">return</span> total`,
      java:`<span class="cm">// PALINDROME EXPAND — THE TEMPLATE</span>
<span class="cm">// TIME: O(n²) | SPACE: O(1)</span>

<span class="cm">// ─── Longest Palindromic Substring ───</span>
<span class="kw">public</span> <span class="tp">String</span> <span class="fn">longestPalindrome</span>(<span class="tp">String</span> s) {
    <span class="tp">int</span> start = <span class="nm">0</span>, maxLen = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; s.length(); i++) {
        <span class="tp">int</span> len1 = expand(s, i, i);      <span class="cm">// odd-length</span>
        <span class="tp">int</span> len2 = expand(s, i, i+<span class="nm">1</span>);  <span class="cm">// even-length</span>
        <span class="tp">int</span> curLen = Math.max(len1, len2);
        <span class="kw">if</span> (curLen &gt; maxLen) {
            maxLen = curLen;
            start = i - (curLen - <span class="nm">1</span>) / <span class="nm">2</span>;
        }
    }
    <span class="kw">return</span> s.substring(start, start + maxLen);
}

<span class="kw">private</span> <span class="tp">int</span> <span class="fn">expand</span>(<span class="tp">String</span> s, <span class="tp">int</span> L, <span class="tp">int</span> R) {
    <span class="kw">while</span> (L &gt;= <span class="nm">0</span> &amp;&amp; R &lt; s.length() &amp;&amp; s.charAt(L) == s.charAt(R)) {
        L--; R++;
    }
    <span class="kw">return</span> R - L - <span class="nm">1</span>;  <span class="cm">// length</span>
}

<span class="cm">// ─── Count Palindromic Substrings ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">countSubstrings</span>(<span class="tp">String</span> s) {
    <span class="tp">int</span> count = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; s.length(); i++) {
        count += expandCount(s, i, i);      <span class="cm">// odd</span>
        count += expandCount(s, i, i+<span class="nm">1</span>);  <span class="cm">// even</span>
    }
    <span class="kw">return</span> count;
}

<span class="kw">private</span> <span class="tp">int</span> <span class="fn">expandCount</span>(<span class="tp">String</span> s, <span class="tp">int</span> L, <span class="tp">int</span> R) {
    <span class="tp">int</span> cnt = <span class="nm">0</span>;
    <span class="kw">while</span> (L &gt;= <span class="nm">0</span> &amp;&amp; R &lt; s.length() &amp;&amp; s.charAt(L) == s.charAt(R)) {
        cnt++; L--; R++;
    }
    <span class="kw">return</span> cnt;
}`,
      csharp:`<span class="cm">// PALINDROME EXPAND — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">string</span> <span class="fn">LongestPalindrome</span>(<span class="tp">string</span> s) {
    <span class="tp">int</span> start = <span class="nm">0</span>, maxLen = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; s.Length; i++) {
        <span class="tp">int</span> len1 = Expand(s, i, i);
        <span class="tp">int</span> len2 = Expand(s, i, i+<span class="nm">1</span>);
        <span class="tp">int</span> curLen = Math.Max(len1, len2);
        <span class="kw">if</span> (curLen &gt; maxLen) {
            maxLen = curLen;
            start = i - (curLen - <span class="nm">1</span>) / <span class="nm">2</span>;
        }
    }
    <span class="kw">return</span> s.Substring(start, maxLen);
}

<span class="kw">private</span> <span class="tp">int</span> <span class="fn">Expand</span>(<span class="tp">string</span> s, <span class="tp">int</span> L, <span class="tp">int</span> R) {
    <span class="kw">while</span> (L &gt;= <span class="nm">0</span> &amp;&amp; R &lt; s.Length &amp;&amp; s[L] == s[R]) {
        L--; R++;
    }
    <span class="kw">return</span> R - L - <span class="nm">1</span>;
}`
    },
    memoryHack:{
      oneSentence:'For each possible center (char or between chars), expand outward while left == right.',
      flowchart:{
        nodes:[
          {id:'start',label:'For each center i',type:'start',x:290,y:20},
          {id:'odd',label:'Expand(i,i)',type:'action',x:140,y:90},
          {id:'even',label:'Expand(i,i+1)',type:'action',x:440,y:90},
          {id:'check',label:'L≥0, R<n, s[L]==s[R]?',type:'decision',x:290,y:160},
          {id:'expand',label:'L--, R++',type:'action',x:290,y:230},
          {id:'done',label:'Return length',type:'end',x:480,y:160}
        ],
        edges:[
          {from:'start',to:'odd',label:'try odd-length'},
          {from:'start',to:'even',label:'try even-length'},
          {from:'odd',to:'check',label:''},
          {from:'even',to:'check',label:''},
          {from:'check',to:'expand',label:'YES = palindrome'},
          {from:'expand',to:'check',label:'keep expanding'},
          {from:'check',to:'done',label:'NO = stop'}
        ]
      },
      annotatedCode:[
        {line:'for (int i = 0; i < s.length(); i++) {',stepId:'start',note:'Try every possible center',color:'#14b8a6'},
        {line:'    int len1 = expand(s, i, i);',stepId:'odd',note:'Odd-length palindrome: center at i',color:'#00ff88'},
        {line:'    int len2 = expand(s, i, i+1);',stepId:'even',note:'Even-length palindrome: center between i and i+1',color:'#ffd600'},
        {line:'while (L >= 0 && R < n && s[L] == s[R]) {',stepId:'check',note:'Expand while matching',color:'#a78bfa'},
        {line:'    L--; R++;',stepId:'expand',note:'Grow palindrome outward',color:'#00cfff'},
        {line:'return R - L - 1;',stepId:'done',note:'Length of palindrome found',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Center i=0',art:'s="babad"  expand(0,0): "b"=1  expand(0,1): b≠a STOP',annotation:'Single char palindrome'},
        {label:'Center i=1',art:'expand(1,1): "a"=1  expand(1,2): "aba"=3! (a==a, b==b)',annotation:'Odd-length palindrome "aba"'},
        {label:'Center i=2',art:'expand(2,2): "b"=1  expand(2,3): b≠a STOP',annotation:'No even palindrome here'},
        {label:'Center i=3',art:'expand(3,3): "a"=1  expand(3,4): "ada"? no d',annotation:'End of string, short palindrome'},
        {label:'Result',art:'Longest found: "aba" or "bab" (length 3)',annotation:'Multiple valid answers possible'}
      ],
      variations:[
        {name:'Longest Palindromic Substring',desc:'Expand from each center, track max length',problem:'Longest Palindromic Substring (#5)'},
        {name:'Palindromic Substrings',desc:'Count all palindromes: expand from each center, sum counts',problem:'Palindromic Substrings (#647)'},
        {name:'Longest Palindrome (by constructing)',desc:'Different problem: use char frequency to build longest palindrome',problem:'Longest Palindrome (#409)'}
      ],
      title:'EXPAND FROM CENTER',
      mnemonic:'EXPAND FROM CENTER — try every possible middle, grow outward while matching',
      steps:['For each index i from 0 to n-1:','Try odd-length: expand(i, i) → center at i','Try even-length: expand(i, i+1) → center between i and i+1','Expand: while L≥0 && R<n && s[L]==s[R]: L--, R++','Track max length found'],
      why:'There are 2n-1 possible centers (n chars + n-1 gaps). Expanding from each takes O(n), giving O(n²) total. Avoids O(n³) of checking every substring.'
    },
    cheat:{
      trigger:'longest palindrome, palindromic substring, count palindromes, expand from center',
      firstLine:'for (int i=0; i<s.length(); i++) { expand(i,i); expand(i,i+1); }',
      gotcha:'Forgetting to check even-length palindromes (center between two chars) — only checking odd-length misses cases like "abba"',
      pitch:"I'll expand from every possible center. For each index, I try both odd-length (center at i) and even-length (center between i and i+1). Expand while characters match.",
      snippet:`<span class="cm">// Expand from center: odd + even lengths</span>
<span class="kw">int</span> <span class="fn">expand</span>(<span class="tp">String</span> s, <span class="kw">int</span> L, <span class="kw">int</span> R) {
    <span class="kw">while</span>(L&gt;=<span class="nm">0</span> &amp;&amp; R&lt;s.length() &amp;&amp; s.charAt(L)==s.charAt(R)) {
        L--; R++;
    }
    <span class="kw">return</span> R-L-<span class="nm">1</span>; <span class="cm">// length</span>
}
<span class="cm">// Call: max(expand(i,i), expand(i,i+1)) for each i</span>`
    }
  },
  {
    icon:'🔀', name:'Backtracking + Dedup', accent:'#8b5cf6',
    tagline:'Backtrack with sorted input + skip duplicates',
    hook:"Imagine picking teams from a lineup. You try every combination — pick player 1, then pick from remaining, backtrack, try without player 1. But what if there are TWO players named 'Alex'? You'd count duplicate teams! Solution: sort the lineup first, and if you skip an Alex, skip ALL Alexes in a row. That's backtracking with deduplication — generate all unique combinations without repeats!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Backtracking + Dedup: Subsets II</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Input: [1,2,2]  →  Unique subsets (no duplicates!)</text><rect x="50" y="70" width="500" height="210" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="95" fill="#8b5cf6" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Decision Tree (sorted input)</text><circle cx="300" cy="120" r="14" fill="#0e1018" stroke="#8b5cf6" stroke-width="2"/><text x="300" y="125" fill="#8b5cf6" text-anchor="middle" font-size="10">[]</text><line x1="285" y1="133" x2="140" y2="160" stroke="#8b5cf6"/><line x1="300" y1="134" x2="300" y2="160" stroke="#8b5cf6"/><line x1="315" y1="133" x2="460" y2="160" stroke="#4a5268" stroke-dasharray="4"/><circle cx="140" cy="175" r="12" fill="#0e1018" stroke="#8b5cf6" stroke-width="2"/><text x="140" y="179" fill="#8b5cf6" text-anchor="middle" font-size="9">1</text><circle cx="300" cy="175" r="12" fill="#0e1018" stroke="#8b5cf6" stroke-width="2"/><text x="300" y="179" fill="#8b5cf6" text-anchor="middle" font-size="9">2</text><circle cx="460" cy="175" r="12" fill="#0e1018" stroke="#ff4d6d" stroke-width="2"/><text x="460" y="179" fill="#ff4d6d" text-anchor="middle" font-size="9">2</text><text x="460" y="195" fill="#ff4d6d" font-size="8" font-family="monospace">SKIP!</text><line x1="133" y1="186" x2="90" y2="215" stroke="#8b5cf6"/><line x1="147" y1="186" x2="190" y2="215" stroke="#8b5cf6"/><circle cx="90" cy="230" r="11" fill="#0e1018" stroke="#8b5cf6" stroke-width="2"/><text x="90" y="234" fill="#8b5cf6" text-anchor="middle" font-size="8">1,2</text><circle cx="190" cy="230" r="11" fill="#0e1018" stroke="#8b5cf6" stroke-width="2"/><text x="190" y="234" fill="#8b5cf6" text-anchor="middle" font-size="8">1,2,2</text><text x="70" y="260" fill="#00ff88" font-size="10" font-family="monospace">Results: [], [1], [1,2], [1,2,2], [2], [2,2]</text><text x="440" y="220" fill="#ff4d6d" font-size="9" font-family="monospace">if (i > start && nums[i] == nums[i-1])</text><text x="440" y="235" fill="#ff4d6d" font-size="9" font-family="monospace">    continue; // skip duplicate</text></svg>`,
    complexity:[
      {badge:'red',big:'O(2^n × n)',label:'BRUTE FORCE',desc:'Generate all, use Set to filter dupes'},
      {badge:'green',big:'O(2^n × n)',label:'SMART BACKTRACK',desc:'Sort + skip dupes inline, no Set needed'}
    ],
    meterWidth:'80%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># BACKTRACKING + DEDUP — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Subsets/combinations/permutations with duplicates</span>
<span class="cm"># TIME: O(2^n × n) | SPACE: O(n) recursion</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Subsets II (with duplicates) ───</span>
<span class="kw">def</span> <span class="fn">subsetsWithDup</span>(nums):
    nums.sort()  <span class="cm"># CRITICAL: sort first!</span>
    result = []
    <span class="kw">def</span> <span class="fn">backtrack</span>(start, path):
        result.append(path[:])
        <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(start, <span class="fn">len</span>(nums)):
            <span class="cm"># Skip duplicates: if same as previous AND we skipped previous</span>
            <span class="kw">if</span> i &gt; start <span class="kw">and</span> nums[i] == nums[i-<span class="nm">1</span>]:
                <span class="kw">continue</span>
            path.append(nums[i])
            <span class="fn">backtrack</span>(i + <span class="nm">1</span>, path)
            path.pop()
    <span class="fn">backtrack</span>(<span class="nm">0</span>, [])
    <span class="kw">return</span> result

<span class="cm"># ─── Combination Sum II (each element once) ───</span>
<span class="kw">def</span> <span class="fn">combinationSum2</span>(candidates, target):
    candidates.sort()
    result = []
    <span class="kw">def</span> <span class="fn">backtrack</span>(start, path, total):
        <span class="kw">if</span> total == target:
            result.append(path[:])
            <span class="kw">return</span>
        <span class="kw">if</span> total &gt; target:
            <span class="kw">return</span>
        <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(start, <span class="fn">len</span>(candidates)):
            <span class="kw">if</span> i &gt; start <span class="kw">and</span> candidates[i] == candidates[i-<span class="nm">1</span>]:
                <span class="kw">continue</span>  <span class="cm"># skip duplicate</span>
            path.append(candidates[i])
            <span class="fn">backtrack</span>(i + <span class="nm">1</span>, path, total + candidates[i])
            path.pop()
    <span class="fn">backtrack</span>(<span class="nm">0</span>, [], <span class="nm">0</span>)
    <span class="kw">return</span> result`,
      java:`<span class="cm">// BACKTRACKING + DEDUP — THE TEMPLATE</span>
<span class="cm">// TIME: O(2^n × n) | SPACE: O(n)</span>

<span class="cm">// ─── Subsets II ───</span>
<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; <span class="fn">subsetsWithDup</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">Arrays</span>.sort(nums);  <span class="cm">// MUST sort first!</span>
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    backtrack(result, <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(), nums, <span class="nm">0</span>);
    <span class="kw">return</span> result;
}

<span class="kw">private</span> <span class="tp">void</span> <span class="fn">backtrack</span>(<span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result, <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; path, <span class="tp">int</span>[] nums, <span class="tp">int</span> start) {
    result.add(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(path));
    <span class="kw">for</span> (<span class="tp">int</span> i = start; i &lt; nums.length; i++) {
        <span class="cm">// Skip duplicates at same decision level</span>
        <span class="kw">if</span> (i &gt; start &amp;&amp; nums[i] == nums[i-<span class="nm">1</span>]) <span class="kw">continue</span>;
        path.add(nums[i]);
        backtrack(result, path, nums, i + <span class="nm">1</span>);
        path.remove(path.size() - <span class="nm">1</span>);
    }
}

<span class="cm">// ─── Combination Sum II ───</span>
<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; <span class="fn">combinationSum2</span>(<span class="tp">int</span>[] candidates, <span class="tp">int</span> target) {
    <span class="tp">Arrays</span>.sort(candidates);
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
    backtrack2(result, <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(), candidates, target, <span class="nm">0</span>);
    <span class="kw">return</span> result;
}

<span class="kw">private</span> <span class="tp">void</span> <span class="fn">backtrack2</span>(<span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result, <span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt; path, <span class="tp">int</span>[] cand, <span class="tp">int</span> remain, <span class="tp">int</span> start) {
    <span class="kw">if</span> (remain == <span class="nm">0</span>) { result.add(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(path)); <span class="kw">return</span>; }
    <span class="kw">if</span> (remain &lt; <span class="nm">0</span>) <span class="kw">return</span>;
    <span class="kw">for</span> (<span class="tp">int</span> i = start; i &lt; cand.length; i++) {
        <span class="kw">if</span> (i &gt; start &amp;&amp; cand[i] == cand[i-<span class="nm">1</span>]) <span class="kw">continue</span>;
        path.add(cand[i]);
        backtrack2(result, path, cand, remain - cand[i], i + <span class="nm">1</span>);
        path.remove(path.size() - <span class="nm">1</span>);
    }
}`,
      csharp:`<span class="cm">// BACKTRACKING + DEDUP — THE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">IList</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt; <span class="fn">SubsetsWithDup</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">Array</span>.Sort(nums);
    <span class="kw">var</span> result = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt;();
    Backtrack(result, <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;(), nums, <span class="nm">0</span>);
    <span class="kw">return</span> result;
}

<span class="kw">private</span> <span class="tp">void</span> <span class="fn">Backtrack</span>(<span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt; result, <span class="tp">List</span>&lt;<span class="tp">int</span>&gt; path, <span class="tp">int</span>[] nums, <span class="tp">int</span> start) {
    result.Add(<span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;(path));
    <span class="kw">for</span> (<span class="tp">int</span> i = start; i &lt; nums.Length; i++) {
        <span class="kw">if</span> (i &gt; start &amp;&amp; nums[i] == nums[i-<span class="nm">1</span>]) <span class="kw">continue</span>;
        path.Add(nums[i]);
        Backtrack(result, path, nums, i + <span class="nm">1</span>);
        path.RemoveAt(path.Count - <span class="nm">1</span>);
    }
}`
    },
    memoryHack:{
      oneSentence:'Sort first, then during backtracking skip duplicates: if (i > start && nums[i] == nums[i-1]) continue.',
      flowchart:{
        nodes:[
          {id:'start',label:'Sort input',type:'start',x:290,y:20},
          {id:'bt',label:'Backtrack(start, path)',type:'action',x:290,y:80},
          {id:'add',label:'Add path to result',type:'action',x:290,y:140},
          {id:'loop',label:'For i=start..n',type:'action',x:290,y:200},
          {id:'dup',label:'i>start && nums[i]==nums[i-1]?',type:'decision',x:290,y:260},
          {id:'skip',label:'Continue (skip)',type:'action',x:480,y:260},
          {id:'recurse',label:'Add i, recurse, remove',type:'action',x:100,y:260}
        ],
        edges:[
          {from:'start',to:'bt',label:''},
          {from:'bt',to:'add',label:''},
          {from:'add',to:'loop',label:''},
          {from:'loop',to:'dup',label:''},
          {from:'dup',to:'skip',label:'YES = duplicate'},
          {from:'skip',to:'loop',label:''},
          {from:'dup',to:'recurse',label:'NO = unique'},
          {from:'recurse',to:'loop',label:''}
        ]
      },
      annotatedCode:[
        {line:'Arrays.sort(nums);',stepId:'start',note:'CRITICAL: sort brings duplicates together',color:'#8b5cf6'},
        {line:'result.add(new ArrayList<>(path));',stepId:'add',note:'Every path is a valid subset',color:'#00ff88'},
        {line:'for (int i = start; i < nums.length; i++) {',stepId:'loop',note:'Try adding each remaining element',color:'#00cfff'},
        {line:'    if (i > start && nums[i] == nums[i-1]) continue;',stepId:'dup',note:'Skip duplicate at same recursion level!',color:'#ff4d6d'},
        {line:'    path.add(nums[i]);',stepId:'recurse',note:'Choose: add element',color:'#ffd600'},
        {line:'    backtrack(i + 1, path);',stepId:'recurse',note:'Explore: recurse with next start',color:'#a78bfa'},
        {line:'    path.remove(path.size()-1);',stepId:'recurse',note:'Unchoose: backtrack',color:'#ffd600'}
      ],
      stateSnapshots:[
        {label:'Sorted',art:'nums = [1, 2, 2]  (duplicates adjacent)',annotation:'Sorting groups duplicates together'},
        {label:'Level 1',art:'Try [] → [], [1], [2], skip 2nd [2] (duplicate!)',annotation:'At top level, skip 2nd 2'},
        {label:'Branch [1]',art:'From [1]: try [1,2], then [1,2,2]',annotation:'Within [1] branch, both 2s allowed'},
        {label:'Branch [2]',art:'From [2]: try [2,2] (using 2nd occurrence)',annotation:'First [2] can use 2nd [2]'},
        {label:'Result',art:'Unique: [], [1], [1,2], [1,2,2], [2], [2,2]',annotation:'No duplicate subsets!'}
      ],
      variations:[
        {name:'Subsets II',desc:'Sort + skip duplicates at same recursion level',problem:'Subsets II (#90)'},
        {name:'Combination Sum II',desc:'Sort + skip dupes + target sum constraint',problem:'Combination Sum II (#40)'},
        {name:'Permutations II',desc:'Sort + use boolean[] used array + skip consecutive dupes',problem:'Permutations II (#47)'},
        {name:'Palindrome Partitioning',desc:'Backtrack + isPalindrome check at each partition',problem:'Palindrome Partitioning (#131)'}
      ],
      title:'SORT → SKIP DUPES',
      mnemonic:'SORT → SKIP DUPES — sort brings duplicates together, skip when i > start && nums[i] == nums[i-1]',
      steps:['Sort the input array (brings duplicates adjacent)','Backtrack: for each index from start to end','If i > start && nums[i] == nums[i-1]: continue (skip duplicate)','Otherwise: add nums[i], recurse with start = i+1, backtrack (remove)','The condition "i > start" allows using duplicate within same branch, but skips at same level'],
      why:'Sorting groups duplicates. The check "i > start" means: at this recursion depth, if we already tried this value, skip subsequent occurrences. But deeper levels can still use them.'
    },
    cheat:{
      trigger:'subsets with duplicates, combination sum with duplicates, permutations with duplicates, backtracking dedup',
      firstLine:'Arrays.sort(nums); // CRITICAL for dedup',
      gotcha:'Checking i > 0 instead of i > start — this breaks inner branches. Must be i > start to only skip at current recursion level.',
      pitch:"I'll sort the input first to group duplicates. During backtracking, if i > start and nums[i] == nums[i-1], I skip to avoid generating duplicate results.",
      snippet:`<span class="cm">// Backtracking with dedup: sort + skip same at level</span>
<span class="tp">Arrays</span>.sort(nums);
<span class="tp">void</span> <span class="fn">backtrack</span>(<span class="kw">int</span> start, <span class="tp">List</span> path) {
    result.add(<span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;(path));
    <span class="kw">for</span>(<span class="kw">int</span> i=start; i&lt;nums.length; i++) {
        <span class="kw">if</span>(i&gt;start &amp;&amp; nums[i]==nums[i-<span class="nm">1</span>]) <span class="kw">continue</span>; <span class="cm">// skip dup</span>
        path.add(nums[i]); <span class="fn">backtrack</span>(i+<span class="nm">1</span>,path); path.remove(path.size()-<span class="nm">1</span>);
    }
}`
    }
  },
  {
    icon:'🗂️', name:'Arrays & Hashing / Sudoku Validation', accent:'#00ff88',
    tagline:'Hash sets + Box index formula',
    hook:"Valid Sudoku is about checking if a 9×9 board is valid. The trick? Calculate which 3×3 box a cell belongs to using a simple formula: box = (row/3)*3 + col/3. Use hash sets to track seen numbers in rows, columns, and boxes. Think of it like airport security: each checkpoint (row, column, box) maintains its own list of what's passed through.",
    svg:`<svg viewBox="0 0 600 400" style="max-height:400px;width:100%"><rect width="600" height="400" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#00ff88" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">SUDOKU BOX FORMULA: box = (row/3)*3 + col/3</text><g transform="translate(50,50)"><rect x="0" y="0" width="270" height="270" fill="#1a1d2e" stroke="#4a5268" stroke-width="3"/><line x1="90" y1="0" x2="90" y2="270" stroke="#4a5268" stroke-width="3"/><line x1="180" y1="0" x2="180" y2="270" stroke="#4a5268" stroke-width="3"/><line x1="0" y1="90" x2="270" y2="90" stroke="#4a5268" stroke-width="3"/><line x1="0" y1="180" x2="270" y2="180" stroke="#4a5268" stroke-width="3"/><line x1="30" y1="0" x2="30" y2="270" stroke="#2a2d3e" stroke-width="1"/><line x1="60" y1="0" x2="60" y2="270" stroke="#2a2d3e" stroke-width="1"/><line x1="120" y1="0" x2="120" y2="270" stroke="#2a2d3e" stroke-width="1"/><line x1="150" y1="0" x2="150" y2="270" stroke="#2a2d3e" stroke-width="1"/><line x1="210" y1="0" x2="210" y2="270" stroke="#2a2d3e" stroke-width="1"/><line x1="240" y1="0" x2="240" y2="270" stroke="#2a2d3e" stroke-width="1"/><line x1="0" y1="30" x2="270" y2="30" stroke="#2a2d3e" stroke-width="1"/><line x1="0" y1="60" x2="270" y2="60" stroke="#2a2d3e" stroke-width="1"/><line x1="0" y1="120" x2="270" y2="120" stroke="#2a2d3e" stroke-width="1"/><line x1="0" y1="150" x2="270" y2="150" stroke="#2a2d3e" stroke-width="1"/><line x1="0" y1="210" x2="270" y2="210" stroke="#2a2d3e" stroke-width="1"/><line x1="0" y1="240" x2="270" y2="240" stroke="#2a2d3e" stroke-width="1"/><rect x="0" y="120" width="270" height="30" fill="rgba(0,207,255,0.1)"/><rect x="120" y="0" width="30" height="270" fill="rgba(255,100,255,0.1)"/><rect x="90" y="90" width="90" height="90" fill="rgba(0,255,136,0.15)" stroke="#00ff88" stroke-width="2"/><rect x="120" y="120" width="30" height="30" fill="#00ff88" stroke="#00ff88" stroke-width="2"/><text x="135" y="140" fill="#0e1018" text-anchor="middle" font-size="16" font-weight="bold">5</text><text x="15" y="140" fill="#00cfff" text-anchor="middle" font-size="10">ROW 4</text><text x="135" y="15" fill="#ff64ff" text-anchor="middle" font-size="10">COL 4</text><text x="135" y="135" fill="#00ff88" text-anchor="middle" font-size="9">BOX 4</text></g><g transform="translate(350,80)"><text x="0" y="0" fill="#fff" font-size="13" font-family="monospace" font-weight="bold">Cell at row=4, col=4</text><text x="0" y="30" fill="#00cfff" font-size="12" font-family="monospace">✓ Check row 4</text><text x="0" y="55" fill="#ff64ff" font-size="12" font-family="monospace">✓ Check column 4</text><text x="0" y="80" fill="#00ff88" font-size="12" font-family="monospace">✓ Check box 4</text><rect x="-5" y="100" width="240" height="80" fill="#1a1d2e" stroke="#00ff88" stroke-width="2" rx="4"/><text x="115" y="125" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace" font-weight="bold">BOX FORMULA:</text><text x="115" y="150" fill="#fff" text-anchor="middle" font-size="13" font-family="monospace">box = (4/3)*3 + 4/3</text><text x="115" y="170" fill="#ffd600" text-anchor="middle" font-size="13" font-family="monospace">    = 1*3 + 1 = 4</text><text x="0" y="215" fill="#4a5268" font-size="10" font-family="monospace">Hash Set Keys:</text><text x="0" y="235" fill="#00cfff" font-size="10" font-family="monospace">("5", "r", 4)</text><text x="0" y="255" fill="#ff64ff" font-size="10" font-family="monospace">("5", "c", 4)</text><text x="0" y="275" fill="#00ff88" font-size="10" font-family="monospace">("5", "b", 4)</text></g></svg>`,
    complexity:[{badge:'green',big:'O(1)',label:'TIME',desc:'Fixed 9×9 board = 81 cells max'},{badge:'green',big:'O(1)',label:'SPACE',desc:'Max 81 entries in hash set'}],
    meterWidth:'100%',
    code:{python:`<span class="cm"># VALID SUDOKU — Hash Set Pattern</span>
<span class="cm"># TIME: O(1) | SPACE: O(1) — fixed 9×9 board</span>

<span class="kw">def</span> <span class="fn">isValidSudoku</span>(board):
    seen = <span class="fn">set</span>()
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">9</span>):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">9</span>):
            <span class="kw">if</span> board[i][j] != <span class="st">'.'</span>:
                num = board[i][j]
                <span class="cm"># Check all 3 constraints at once</span>
                <span class="kw">if</span> (num, <span class="st">'r'</span>, i) <span class="kw">in</span> seen <span class="kw">or</span> \\
                   (num, <span class="st">'c'</span>, j) <span class="kw">in</span> seen <span class="kw">or</span> \\
                   (num, <span class="st">'b'</span>, i//<span class="nm">3</span>, j//<span class="nm">3</span>) <span class="kw">in</span> seen:
                    <span class="kw">return</span> <span class="kw">False</span>
                seen.add((num, <span class="st">'r'</span>, i))
                seen.add((num, <span class="st">'c'</span>, j))
                seen.add((num, <span class="st">'b'</span>, i//<span class="nm">3</span>, j//<span class="nm">3</span>))
    <span class="kw">return</span> <span class="kw">True</span>`,csharp:`<span class="cm">// VALID SUDOKU — Hash Set Pattern</span>
<span class="kw">public</span> <span class="tp">bool</span> <span class="fn">IsValidSudoku</span>(<span class="tp">char</span>[][] board) {
    <span class="tp">HashSet</span>&lt;<span class="tp">string</span>&gt; seen = <span class="kw">new</span> <span class="tp">HashSet</span>&lt;<span class="tp">string</span>&gt;();
    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>; i&lt;<span class="nm">9</span>; i++) {
        <span class="kw">for</span>(<span class="tp">int</span> j=<span class="nm">0</span>; j&lt;<span class="nm">9</span>; j++) {
            <span class="kw">if</span>(board[i][j] != <span class="st">'.'</span>) {
                <span class="tp">char</span> num = board[i][j];
                <span class="kw">if</span>(!seen.Add(num + <span class="st">" row "</span> + i) ||
                   !seen.Add(num + <span class="st">" col "</span> + j) ||
                   !seen.Add(num + <span class="st">" box "</span> + (i/<span class="nm">3</span>)*<span class="nm">3</span> + j/<span class="nm">3</span>))
                    <span class="kw">return</span> <span class="kw">false</span>;
            }
        }
    }
    <span class="kw">return</span> <span class="kw">true</span>;
}`,java:`<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// VALID SUDOKU — THE BOX FORMULA</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Grid validation with regions/zones</span>
<span class="cm">// TIME: O(1) | SPACE: O(1) — fixed 9×9 = 81 cells</span>
<span class="cm">// KEY TRICK: box_index = (row/3)*3 + col/3</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">isValidSudoku</span>(<span class="tp">char</span>[][] board) {
    <span class="tp">Set</span>&lt;<span class="tp">String</span>&gt; seen = <span class="kw">new</span> <span class="tp">HashSet</span>&lt;&gt;();

    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>; i&lt;<span class="nm">9</span>; i++) {
        <span class="kw">for</span>(<span class="tp">int</span> j=<span class="nm">0</span>; j&lt;<span class="nm">9</span>; j++) {
            <span class="tp">char</span> num = board[i][j];
            <span class="kw">if</span>(num != <span class="st">'.'</span>) {
                <span class="cm">// The TRICK: Check all 3 constraints with unique string keys</span>
                <span class="kw">if</span>(!seen.add(num + <span class="st">" in row "</span> + i) ||
                   !seen.add(num + <span class="st">" in col "</span> + j) ||
                   !seen.add(num + <span class="st">" in box "</span> + (i/<span class="nm">3</span>)*<span class="nm">3</span> + j/<span class="nm">3</span>)) {
                    <span class="kw">return</span> <span class="kw">false</span>;  <span class="cm">// Duplicate found!</span>
                }
            }
        }
    }
    <span class="kw">return</span> <span class="kw">true</span>;
}

<span class="cm">// ─── THE BOX INDEX FORMULA ───</span>
<span class="cm">// Cell (4,7) → box = (4/3)*3 + 7/3 = 1*3 + 2 = 5 ✓</span>
<span class="cm">// Cell (8,1) → box = (8/3)*3 + 1/3 = 2*3 + 0 = 6 ✓</span>
<span class="cm">//</span>
<span class="cm">// Box Layout:</span>
<span class="cm">// ┌─────┬─────┬─────┐</span>
<span class="cm">// │  0  │  1  │  2  │</span>
<span class="cm">// ├─────┼─────┼─────┤</span>
<span class="cm">// │  3  │  4  │  5  │</span>
<span class="cm">// ├─────┼─────┼─────┤</span>
<span class="cm">// │  6  │  7  │  8  │</span>
<span class="cm">// └─────┴─────┴─────┘</span>`},
    memoryHack:{
      oneSentence:'Use ONE hash set with unique string keys combining number + constraint type (row/col/box) — the box index formula is (row/3)*3 + col/3.',
      flowchart:{
        nodes:[
          {id:'start',label:'For each cell (i,j)',type:'start',x:290,y:20},
          {id:'empty',label:'Empty cell?',type:'decision',x:290,y:80},
          {id:'skip',label:'Skip (continue)',type:'action',x:100,y:80},
          {id:'check',label:'Check row/col/box',type:'action',x:290,y:145},
          {id:'dup',label:'Duplicate?',type:'decision',x:290,y:210},
          {id:'fail',label:'Return false',type:'end',x:480,y:210},
          {id:'add',label:'Add to seen set',type:'action',x:290,y:275},
          {id:'done',label:'Return true',type:'end',x:290,y:340}
        ],
        edges:[
          {from:'start',to:'empty',label:''},
          {from:'empty',to:'skip',label:'YES (.)'},
          {from:'empty',to:'check',label:'NO (digit)'},
          {from:'skip',to:'start',label:''},
          {from:'check',to:'dup',label:''},
          {from:'dup',to:'fail',label:'YES'},
          {from:'dup',to:'add',label:'NO'},
          {from:'add',to:'start',label:'next cell'},
          {from:'start',to:'done',label:'all cells done'}
        ]
      },
      annotatedCode:[
        {line:'Set<String> seen = new HashSet<>();',stepId:'start',note:'One set for everything',color:'#00ff88'},
        {line:'for(int i=0; i<9; i++) {',stepId:'start',note:'Scan all rows',color:'#5a5f70'},
        {line:'  for(int j=0; j<9; j++) {',stepId:'start',note:'Scan all columns',color:'#5a5f70'},
        {line:'    if(board[i][j] == \'.\') continue;',stepId:'empty',note:'Skip empty cells',color:'#ffd600'},
        {line:'    char num = board[i][j];',stepId:'check',note:'Get the digit',color:'#a78bfa'},
        {line:'    int box = (i/3)*3 + j/3;',stepId:'check',note:'THE TRICK: Calculate box index',color:'#ff4d6d'},
        {line:'    if(!seen.add(num+" row "+i) ||',stepId:'dup',note:'Check + add row constraint',color:'#00cfff'},
        {line:'       !seen.add(num+" col "+j) ||',stepId:'dup',note:'Check + add column constraint',color:'#00cfff'},
        {line:'       !seen.add(num+" box "+box))',stepId:'dup',note:'Check + add box constraint',color:'#00cfff'},
        {line:'      return false;',stepId:'fail',note:'Duplicate found → invalid',color:'#ff4d6d'},
        {line:'return true;',stepId:'done',note:'All checks passed',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Box Formula',art:'Cell (0,0) → box = (0/3)*3 + 0/3 = 0\nCell (4,7) → box = (4/3)*3 + 7/3 = 1*3 + 2 = 5',annotation:'Dividing by 3 gives box row/col'},
        {label:'String Keys',art:'seen.add("5 in row 0")\nseen.add("5 in col 3")\nseen.add("5 in box 1")',annotation:'Unique keys for each constraint'},
        {label:'Duplicate Check',art:'If "5 in row 0" already in seen → return false',annotation:'Hash set detects duplicates in O(1)'},
        {label:'Valid Board',art:'All 81 cells checked, no duplicates → return true',annotation:'Each digit appears once per row/col/box'}
      ],
      variations:[
        {name:'Valid Sudoku',desc:'Hash set + box formula (row/3)*3 + col/3',problem:'Valid Sudoku (#36)'},
        {name:'Sudoku Solver',desc:'Backtracking + same validation logic',problem:'Sudoku Solver (#37)'},
        {name:'N-Queens',desc:'Similar constraint checking pattern',problem:'N-Queens (#51)'}
      ],
      title:'Arrays & Hashing: Sudoku Validation',
      mnemonic:'ONE SET → UNIQUE STRING KEYS → BOX = (ROW/3)*3 + COL/3',
      steps:['Create one hash set for tracking seen values','For each non-empty cell, calculate box index: (row/3)*3 + col/3','Create unique string keys: "num in row i", "num in col j", "num in box b"','Try adding all 3 keys to set — if any fails, return false','If all cells pass, return true'],
      why:'The box formula (row/3)*3 + col/3 maps 9 boxes (0-8) correctly. Using one hash set with unique string keys is simpler than managing 3 separate arrays of sets. Hash set gives O(1) lookup and insertion.'
    },
    cheat:{
      trigger:'sudoku validation, grid with regions, constraint checking, 9×9 board',
      firstLine:'Set<String> seen = new HashSet<>();',
      gotcha:'Using (i/3) + (j/3) instead of (i/3)*3 + (j/3) — the *3 is critical! Integer division in Java truncates: 4/3 = 1, not 1.33.',
      pitch:"I'll use a single hash set with unique string keys combining the number with its constraint type. The key trick is the box formula: (row/3)*3 + col/3.",
      snippet:`<span class="cm">// Valid Sudoku: The Box Formula Trick</span>
<span class="tp">Set</span>&lt;<span class="tp">String</span>&gt; seen = <span class="kw">new</span> <span class="tp">HashSet</span>&lt;&gt;();
<span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>; i&lt;<span class="nm">9</span>; i++) {
    <span class="kw">for</span>(<span class="tp">int</span> j=<span class="nm">0</span>; j&lt;<span class="nm">9</span>; j++) {
        <span class="tp">char</span> num = board[i][j];
        <span class="kw">if</span>(num != <span class="st">'.'</span>) {
            <span class="tp">int</span> box = (i/<span class="nm">3</span>)*<span class="nm">3</span> + j/<span class="nm">3</span>;  <span class="cm">// THE TRICK!</span>
            <span class="kw">if</span>(!seen.add(num+<span class="st">" row "</span>+i) || !seen.add(num+<span class="st">" col "</span>+j) ||
               !seen.add(num+<span class="st">" box "</span>+box)) <span class="kw">return</span> <span class="kw">false</span>;
        }
    }
}
<span class="kw">return</span> <span class="kw">true</span>;`
    }
  },
  {
    icon:'🔤', name:'Encode and Decode Strings', accent:'#00ff88',
    tagline:'Length-prefix encoding for unambiguous parsing',
    hook:"Imagine you need to store multiple strings in a single string. If you just join them with a delimiter like '#', what happens if a string contains '#'? You can't parse it back! The trick: prepend each string with its LENGTH. So 'lint' becomes '4#lint'. Now even if the string contains '#', you know exactly where it ends by reading the length first.",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">Length-Prefix Encoding</text><text x="300" y="50" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace">Input: ["lint","code","love","you"]</text><rect x="50" y="70" width="500" height="60" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="70" y="95" fill="#4a5268" font-size="10" font-family="monospace">Encode Process:</text><text x="70" y="115" fill="#00ff88" font-size="10" font-family="monospace">"lint" → len=4 → "4#lint"</text><rect x="50" y="145" width="500" height="40" fill="rgba(0,255,136,.1)" rx="6" stroke="#00ff88"/><text x="60" y="170" fill="#00ff88" font-size="11" font-family="monospace">4#lint4#code4#love3#you</text><rect x="50" y="200" width="500" height="80" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="70" y="225" fill="#4a5268" font-size="10" font-family="monospace">Decode Process:</text><text x="70" y="245" fill="#00cfff" font-size="10" font-family="monospace">1. Read "4" → length=4</text><text x="70" y="260" fill="#00cfff" font-size="10" font-family="monospace">2. Skip "#" → extract 4 chars → "lint"</text><text x="70" y="275" fill="#00cfff" font-size="10" font-family="monospace">3. Repeat for next chunk...</text></svg>`,
    complexity:[
      {badge:'green',big:'O(n)',label:'ENCODE',desc:'Single pass through all strings'},
      {badge:'green',big:'O(n)',label:'DECODE',desc:'Single pass reading lengths + strings'},
      {badge:'blue',big:'O(1)',label:'PER STRING',desc:'Constant time to prepend length'}
    ],
    meterWidth:'85%',
    code:{
      python:`<span class="cm"># ════════════════════════════════════════</span>
<span class="cm"># ENCODE AND DECODE STRINGS — THE PATTERN</span>
<span class="cm"># ════════════════════════════════════════</span>
<span class="cm"># WHEN: Serialize list of strings with any chars</span>
<span class="cm"># TRICK: Length-prefix → immune to delimiters</span>
<span class="cm"># ════════════════════════════════════════</span>

<span class="kw">class</span> <span class="tp">Codec</span>:
    <span class="kw">def</span> <span class="fn">encode</span>(<span class="kw">self</span>, strs):
        <span class="cm"># Format: "len#string" for each string</span>
        result = <span class="st">""</span>
        <span class="kw">for</span> s <span class="kw">in</span> strs:
            result += <span class="fn">str</span>(<span class="fn">len</span>(s)) + <span class="st">"#"</span> + s
        <span class="kw">return</span> result

    <span class="kw">def</span> <span class="fn">decode</span>(<span class="kw">self</span>, s):
        result, i = [], <span class="nm">0</span>
        <span class="kw">while</span> i &lt; <span class="fn">len</span>(s):
            <span class="cm"># Find delimiter '#'</span>
            j = i
            <span class="kw">while</span> s[j] != <span class="st">'#'</span>:
                j += <span class="nm">1</span>
            <span class="cm"># Extract length</span>
            length = <span class="fn">int</span>(s[i:j])
            <span class="cm"># Extract string of that length</span>
            result.<span class="fn">append</span>(s[j+<span class="nm">1</span> : j+<span class="nm">1</span>+length])
            <span class="cm"># Move to next chunk</span>
            i = j + <span class="nm">1</span> + length
        <span class="kw">return</span> result`,
      csharp:`<span class="cm">// ════════════════════════════════════════</span>
<span class="cm">// ENCODE AND DECODE STRINGS — THE PATTERN</span>
<span class="cm">// ════════════════════════════════════════</span>

<span class="kw">public class</span> <span class="tp">Codec</span> {
    <span class="kw">public</span> <span class="tp">string</span> <span class="fn">Encode</span>(<span class="tp">IList</span>&lt;<span class="tp">string</span>&gt; strs) {
        <span class="kw">var</span> sb = <span class="kw">new</span> <span class="tp">StringBuilder</span>();
        <span class="kw">foreach</span>(<span class="kw">var</span> s <span class="kw">in</span> strs) {
            sb.<span class="fn">Append</span>(s.Length).<span class="fn">Append</span>(<span class="st">'#'</span>).<span class="fn">Append</span>(s);
        }
        <span class="kw">return</span> sb.<span class="fn">ToString</span>();
    }

    <span class="kw">public</span> <span class="tp">IList</span>&lt;<span class="tp">string</span>&gt; <span class="fn">Decode</span>(<span class="tp">string</span> s) {
        <span class="kw">var</span> result = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">string</span>&gt;();
        <span class="tp">int</span> i = <span class="nm">0</span>;
        <span class="kw">while</span>(i &lt; s.Length) {
            <span class="tp">int</span> j = s.<span class="fn">IndexOf</span>(<span class="st">'#'</span>, i);
            <span class="tp">int</span> len = <span class="fn">int</span>.<span class="fn">Parse</span>(s.<span class="fn">Substring</span>(i, j-i));
            result.<span class="fn">Add</span>(s.<span class="fn">Substring</span>(j+<span class="nm">1</span>, len));
            i = j + <span class="nm">1</span> + len;
        }
        <span class="kw">return</span> result;
    }
}`,
      java:`<span class="cm">// ════════════════════════════════════════</span>
<span class="cm">// ENCODE AND DECODE STRINGS — THE PATTERN</span>
<span class="cm">// ════════════════════════════════════════</span>

<span class="kw">public class</span> <span class="tp">Codec</span> {
    <span class="kw">public</span> <span class="tp">String</span> <span class="fn">encode</span>(<span class="tp">List</span>&lt;<span class="tp">String</span>&gt; strs) {
        <span class="tp">StringBuilder</span> sb = <span class="kw">new</span> <span class="tp">StringBuilder</span>();
        <span class="kw">for</span>(<span class="tp">String</span> s : strs) {
            sb.<span class="fn">append</span>(s.<span class="fn">length</span>()).<span class="fn">append</span>(<span class="st">'#'</span>).<span class="fn">append</span>(s);
        }
        <span class="kw">return</span> sb.<span class="fn">toString</span>();
    }

    <span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">String</span>&gt; <span class="fn">decode</span>(<span class="tp">String</span> s) {
        <span class="tp">List</span>&lt;<span class="tp">String</span>&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();
        <span class="tp">int</span> i = <span class="nm">0</span>;
        <span class="kw">while</span>(i &lt; s.<span class="fn">length</span>()) {
            <span class="tp">int</span> j = s.<span class="fn">indexOf</span>(<span class="st">'#'</span>, i);
            <span class="tp">int</span> len = <span class="tp">Integer</span>.<span class="fn">parseInt</span>(s.<span class="fn">substring</span>(i, j));
            result.<span class="fn">add</span>(s.<span class="fn">substring</span>(j+<span class="nm">1</span>, j+<span class="nm">1</span>+len));
            i = j + <span class="nm">1</span> + len;
        }
        <span class="kw">return</span> result;
    }
}`
    },
    memoryHack:{
      flowchart:{
        nodes:[
          {id:'start',label:'encode(strs)',type:'start',x:300,y:20},
          {id:'loop',label:'For each str',type:'action',x:300,y:80},
          {id:'append',label:'result += len(s)+"#"+s',type:'action',x:300,y:140},
          {id:'done',label:'Return result',type:'end',x:300,y:200}
        ],
        edges:[
          {from:'start',to:'loop',label:''},
          {from:'loop',to:'append',label:''},
          {from:'append',to:'loop',label:'next'},
          {from:'loop',to:'done',label:'done'}
        ]
      },
      annotatedCode:[
        {line:'def encode(self, strs):',stepId:'start',note:'Takes list of strings',color:'#5a5f70'},
        {line:'    result = ""',stepId:'start',note:'Build encoded string',color:'#00cfff'},
        {line:'    for s in strs:',stepId:'loop',note:'Process each string',color:'#00cfff'},
        {line:'        result += str(len(s)) + "#" + s',stepId:'append',note:'Prepend length + delimiter',color:'#00ff88'},
        {line:'    return result',stepId:'done',note:'Return encoded string',color:'#5a5f70'}
      ],
      stateSnapshots:[
        {label:'Step 1',art:'strs=["lint","code"]  s="lint"  len=4  →  "4#lint"',annotation:'First string encoded'},
        {label:'Step 2',art:'result="4#lint"  s="code"  len=4  →  "4#lint4#code"',annotation:'Second string appended'},
        {label:'Decode',art:'"4#lint..." → read "4" → skip # → take 4 chars → "lint"',annotation:'Reverse process'}
      ],
      variations:[
        {name:'Encode/Decode',desc:'Length-prefix: len + "#" + string',problem:'Encode and Decode Strings (#271)'},
        {name:'Chunked Transfer',desc:'Same idea used in HTTP chunked encoding',problem:'Real-world pattern'}
      ],
      title:'LENGTH-PREFIX ENCODING',
      mnemonic:'LENGTH FIRST, PARSE SAFE — delimiter can appear in data',
      steps:['For encode: append "length#string" for each','For decode: read number until #, skip #, extract that many chars','Repeat until end of string'],
      why:'Length-prefix makes parsing unambiguous even if delimiter appears in the data.',
      oneSentence:'Prepend each string with its length + delimiter to enable unambiguous decoding.'
    },
    cheat:{
      trigger:'serialize strings, encode list, delimiter ambiguity, chunked data',
      firstLine:'result = str(len(s)) + "#" + s',
      gotcha:'Using a simple delimiter without length prefix fails when delimiter appears in data',
      pitch:"I'll use length-prefix encoding where each string is prepended with its length and a delimiter, making decoding unambiguous in O(n) time.",
      snippet:`<span class="cm"># ENCODE: prepend length</span>
<span class="kw">for</span> s <span class="kw">in</span> strs:
    result += <span class="fn">str</span>(<span class="fn">len</span>(s)) + <span class="st">"#"</span> + s

<span class="cm"># DECODE: read length, extract substring</span>
j = s.<span class="fn">index</span>(<span class="st">'#'</span>, i)
length = <span class="fn">int</span>(s[i:j])
result.<span class="fn">append</span>(s[j+<span class="nm">1</span>:j+<span class="nm">1</span>+length])`
    }
  },
  {
    icon:'👉👈', name:'3Sum', accent:'#00cfff',
    tagline:'Sort + fix one + two-pointer squeeze',
    hook:"Finding two numbers that sum to a target is easy with a HashMap. But three numbers? You'd need O(n²) HashMap lookups. The trick: SORT the array first. Then for each number, turn it into a Two Sum II problem on the remaining sorted portion. Fix one number, use two pointers for the other two. Skip duplicates to avoid repeat triplets.",
    svg:`<svg viewBox="0 0 600 280" style="max-height:280px;width:100%"><rect width="600" height="280" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">3Sum Pattern</text><text x="300" y="50" fill="#00cfff" text-anchor="middle" font-size="11" font-family="monospace">nums = [-1,0,1,2,-1,-4] → target = 0</text><rect x="50" y="70" width="500" height="35" fill="#1a1d2e" rx="4" stroke="#1e2230"/><text x="60" y="92" fill="#4a5268" font-size="10" font-family="monospace">1. SORT: [-4,-1,-1,0,1,2]</text><rect x="50" y="120" width="500" height="120" fill="rgba(0,207,255,.05)" rx="6" stroke="#00cfff"/><text x="60" y="140" fill="#fbbf24" font-size="10" font-family="monospace">2. FIX i=-1, TWO-POINTER on rest:</text><g transform="translate(80,145)"><rect x="0" y="0" width="30" height="22" fill="rgba(251,191,36,.2)" stroke="#fbbf24" rx="3"/><text x="15" y="16" fill="#fbbf24" text-anchor="middle" font-size="9">-1</text><text x="15" y="35" fill="#fbbf24" text-anchor="middle" font-size="7">i</text><rect x="40" y="0" width="30" height="22" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="3"/><text x="55" y="16" fill="#00ff88" text-anchor="middle" font-size="9">-1</text><text x="55" y="35" fill="#00ff88" text-anchor="middle" font-size="7">L</text><rect x="80" y="0" width="25" height="22" fill="#1a1d2e" stroke="#4a5268" rx="3"/><text x="92" y="16" fill="#4a5268" text-anchor="middle" font-size="9">0</text><rect x="110" y="0" width="25" height="22" fill="#1a1d2e" stroke="#4a5268" rx="3"/><text x="122" y="16" fill="#4a5268" text-anchor="middle" font-size="9">1</text><rect x="140" y="0" width="25" height="22" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="3"/><text x="152" y="16" fill="#00ff88" text-anchor="middle" font-size="9">2</text><text x="152" y="35" fill="#00ff88" text-anchor="middle" font-size="7">R</text></g><text x="80" y="195" fill="#00ff88" font-size="10" font-family="monospace">sum = -1 + (-1) + 2 = 0 ✓</text><text x="80" y="215" fill="#00ff88" font-size="10" font-family="monospace">Found triplet: [-1,-1,2]</text><text x="60" y="255" fill="#ff4d6d" font-size="9" font-family="monospace">SKIP DUPLICATES: if nums[i]==nums[i-1] continue</text></svg>`,
    complexity:[
      {badge:'yellow',big:'O(n²)',label:'TIME',desc:'Sort O(n log n) + nested two-pointer O(n²)'},
      {badge:'green',big:'O(1)',label:'SPACE',desc:'No extra data structures, in-place sort'},
      {badge:'blue',big:'Better than',label:'O(n³)',desc:'Brute force three nested loops'}
    ],
    meterWidth:'70%',
    code:{
      python:`<span class="cm"># ════════════════════════════</span>
<span class="cm"># 3SUM — THE PATTERN</span>
<span class="cm"># ════════════════════════════</span>
<span class="cm"># WHEN: Find triplets summing to target</span>
<span class="cm"># TRICK: Sort + fix one + two-pointer</span>
<span class="cm"># ════════════════════════════</span>

<span class="kw">def</span> <span class="fn">threeSum</span>(nums):
    nums.<span class="fn">sort</span>()  <span class="cm"># CRITICAL: enables two-pointer</span>
    result = []

    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(nums) - <span class="nm">2</span>):
        <span class="cm"># Skip duplicates for i</span>
        <span class="kw">if</span> i &gt; <span class="nm">0</span> <span class="kw">and</span> nums[i] == nums[i-<span class="nm">1</span>]:
            <span class="kw">continue</span>

        <span class="cm"># Two-pointer on remaining array</span>
        L, R = i + <span class="nm">1</span>, <span class="fn">len</span>(nums) - <span class="nm">1</span>
        <span class="kw">while</span> L &lt; R:
            total = nums[i] + nums[L] + nums[R]
            <span class="kw">if</span> total &lt; <span class="nm">0</span>:
                L += <span class="nm">1</span>
            <span class="kw">elif</span> total &gt; <span class="nm">0</span>:
                R -= <span class="nm">1</span>
            <span class="kw">else</span>:
                result.<span class="fn">append</span>([nums[i], nums[L], nums[R]])
                <span class="cm"># Skip duplicates for L and R</span>
                <span class="kw">while</span> L &lt; R <span class="kw">and</span> nums[L] == nums[L+<span class="nm">1</span>]:
                    L += <span class="nm">1</span>
                <span class="kw">while</span> L &lt; R <span class="kw">and</span> nums[R] == nums[R-<span class="nm">1</span>]:
                    R -= <span class="nm">1</span>
                L += <span class="nm">1</span>
                R -= <span class="nm">1</span>

    <span class="kw">return</span> result`,
      csharp:`<span class="cm">// ════════════════════════════</span>
<span class="cm">// 3SUM — THE PATTERN</span>
<span class="cm">// ════════════════════════════</span>

<span class="kw">public</span> <span class="tp">IList</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt; <span class="fn">ThreeSum</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">Array</span>.<span class="fn">Sort</span>(nums);
    <span class="kw">var</span> result = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">int</span>&gt;&gt;();

    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>; i&lt;nums.Length-<span class="nm">2</span>; i++) {
        <span class="kw">if</span>(i&gt;<span class="nm">0</span> &amp;&amp; nums[i]==nums[i<span class="nm">-1</span>]) <span class="kw">continue</span>;

        <span class="tp">int</span> L=i+<span class="nm">1</span>, R=nums.Length-<span class="nm">1</span>;
        <span class="kw">while</span>(L &lt; R) {
            <span class="tp">int</span> sum = nums[i] + nums[L] + nums[R];
            <span class="kw">if</span>(sum &lt; <span class="nm">0</span>) L++;
            <span class="kw">else if</span>(sum &gt; <span class="nm">0</span>) R--;
            <span class="kw">else</span> {
                result.<span class="fn">Add</span>(<span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">int</span>&gt;{nums[i],nums[L],nums[R]});
                <span class="kw">while</span>(L&lt;R &amp;&amp; nums[L]==nums[L+<span class="nm">1</span>]) L++;
                <span class="kw">while</span>(L&lt;R &amp;&amp; nums[R]==nums[R<span class="nm">-1</span>]) R--;
                L++; R--;
            }
        }
    }
    <span class="kw">return</span> result;
}`,
      java:`<span class="cm">// ════════════════════════════</span>
<span class="cm">// 3SUM — THE PATTERN</span>
<span class="cm">// ════════════════════════════</span>

<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; <span class="fn">threeSum</span>(<span class="tp">int</span>[] nums) {
    <span class="tp">Arrays</span>.<span class="fn">sort</span>(nums);
    <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;();

    <span class="kw">for</span>(<span class="tp">int</span> i=<span class="nm">0</span>; i&lt;nums.length-<span class="nm">2</span>; i++) {
        <span class="kw">if</span>(i&gt;<span class="nm">0</span> &amp;&amp; nums[i]==nums[i<span class="nm">-1</span>]) <span class="kw">continue</span>;

        <span class="tp">int</span> L=i+<span class="nm">1</span>, R=nums.length-<span class="nm">1</span>;
        <span class="kw">while</span>(L &lt; R) {
            <span class="tp">int</span> sum = nums[i] + nums[L] + nums[R];
            <span class="kw">if</span>(sum &lt; <span class="nm">0</span>) L++;
            <span class="kw">else if</span>(sum &gt; <span class="nm">0</span>) R--;
            <span class="kw">else</span> {
                result.<span class="fn">add</span>(<span class="tp">Arrays</span>.<span class="fn">asList</span>(nums[i],nums[L],nums[R]));
                <span class="kw">while</span>(L&lt;R &amp;&amp; nums[L]==nums[L+<span class="nm">1</span>]) L++;
                <span class="kw">while</span>(L&lt;R &amp;&amp; nums[R]==nums[R<span class="nm">-1</span>]) R--;
                L++; R--;
            }
        }
    }
    <span class="kw">return</span> result;
}`
    },
    memoryHack:{
      flowchart:{
        nodes:[
          {id:'sort',label:'Sort array',type:'start',x:300,y:20},
          {id:'fix',label:'Fix i',type:'action',x:300,y:80},
          {id:'skip',label:'Skip dup i?',type:'decision',x:200,y:140},
          {id:'twoptr',label:'L=i+1, R=end',type:'action',x:400,y:140},
          {id:'calc',label:'sum=nums[i]+L+R',type:'action',x:400,y:200},
          {id:'check',label:'sum?',type:'decision',x:400,y:260},
          {id:'found',label:'Add triplet',type:'end',x:500,y:320}
        ],
        edges:[
          {from:'sort',to:'fix',label:''},
          {from:'fix',to:'skip',label:''},
          {from:'skip',to:'fix',label:'YES'},
          {from:'skip',to:'twoptr',label:'NO'},
          {from:'twoptr',to:'calc',label:''},
          {from:'calc',to:'check',label:''},
          {from:'check',to:'found',label:'==0'}
        ]
      },
      annotatedCode:[
        {line:'nums.sort()',stepId:'sort',note:'MUST sort for two-pointer',color:'#fbbf24'},
        {line:'for i in range(len(nums)-2):',stepId:'fix',note:'Fix first number',color:'#00cfff'},
        {line:'    if i>0 and nums[i]==nums[i-1]: continue',stepId:'skip',note:'Skip duplicate i',color:'#ff4d6d'},
        {line:'    L, R = i+1, len(nums)-1',stepId:'twoptr',note:'Two pointers on rest',color:'#00ff88'},
        {line:'    while L < R:',stepId:'calc',note:'Squeeze inward',color:'#00cfff'},
        {line:'        total = nums[i] + nums[L] + nums[R]',stepId:'calc',note:'Calculate sum',color:'#a78bfa'},
        {line:'        if total == 0: result.append([...])',stepId:'found',note:'Found triplet!',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Start',art:'[-4,-1,-1,0,1,2] sorted',annotation:'Must be sorted'},
        {label:'i=1',art:'i=-1 (skip i=0:-4 too small)  L=-1  R=2  sum=0 ✓',annotation:'Found [-1,-1,2]'},
        {label:'Skip',art:'i=2: nums[2]==-1==nums[1] → skip duplicate',annotation:'Avoid duplicate triplets'}
      ],
      variations:[
        {name:'3Sum',desc:'Sort + fix one + two-pointer squeeze',problem:'3Sum (#15)'},
        {name:'3Sum Closest',desc:'Same pattern, track min diff instead of exact match',problem:'3Sum Closest (#16)'},
        {name:'4Sum',desc:'Add outer loop, becomes O(n³)',problem:'4Sum (#18)'}
      ],
      title:'SORT + FIX ONE + TWO-POINTER',
      mnemonic:'SORT, FIX, SQUEEZE — reduce 3Sum to 2Sum II',
      steps:['Sort the array','Fix one element i, skip duplicates','Two-pointer L and R on remaining sorted portion','If sum < 0: L++, if sum > 0: R--, if == 0: found!','Skip duplicates for L and R after finding'],
      why:'Sorting enables two-pointer technique, reducing O(n³) brute force to O(n²).',
      oneSentence:'Sort array, fix one number, apply two-pointer squeeze on the rest.'
    },
    cheat:{
      trigger:'three sum, triplets sum to zero, find three numbers',
      firstLine:'nums.sort()  # CRITICAL FIRST STEP',
      gotcha:'Forgetting to skip duplicates causes repeat triplets in output',
      pitch:"I'll sort the array, then for each number fix it and use two-pointer technique on the remaining sorted portion, reducing from O(n³) to O(n²).",
      snippet:`<span class="cm"># MUST sort first</span>
nums.<span class="fn">sort</span>()
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(nums)-<span class="nm">2</span>):
    <span class="kw">if</span> i&gt;<span class="nm">0</span> <span class="kw">and</span> nums[i]==nums[i<span class="nm">-1</span>]: <span class="kw">continue</span>  <span class="cm"># skip dup</span>
    L, R = i+<span class="nm">1</span>, <span class="fn">len</span>(nums)-<span class="nm">1</span>
    <span class="kw">while</span> L &lt; R:
        <span class="kw">if</span> nums[i]+nums[L]+nums[R] == <span class="nm">0</span>:
            result.<span class="fn">append</span>([nums[i],nums[L],nums[R]])`
    }
  },
  {
    icon:'📚', name:'Reverse Polish Notation (RPN)', accent:'#fb923c',
    tagline:'Stack evaluation: operands wait, operators compute',
    hook:"Think of RPN like a calculator that remembers numbers. When you see '2 3 +', you store 2, store 3, then when '+' arrives, grab the last two numbers and add them. It's like a cafeteria tray stack — last tray in is first tray out (LIFO). Numbers pile up waiting, operators grab the top two, compute, and put the result back. Simple, no parentheses needed!",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes rpn-push{0%{transform:translateY(-20px);opacity:0}100%{transform:translateY(0);opacity:1}} @keyframes rpn-pop{0%{opacity:1}100%{opacity:0;transform:translateY(-30px)}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">RPN: "2 1 + 3 *" = (2+1)*3 = 9</text><rect x="50" y="50" width="200" height="220" fill="#1a1d2e" rx="8" stroke="#fb923c"/><text x="150" y="75" fill="#fb923c" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Stack (LIFO)</text><rect x="75" y="230" width="150" height="30" fill="#0e1018" stroke="#fb923c" rx="4" opacity="0" style="animation:rpn-push 1.5s ease 0s forwards"/><text x="150" y="250" fill="#fb923c" text-anchor="middle" font-size="13">2</text><rect x="75" y="195" width="150" height="30" fill="#0e1018" stroke="#fb923c" rx="4" opacity="0" style="animation:rpn-push 1.5s ease 0.5s forwards"/><text x="150" y="215" fill="#fb923c" text-anchor="middle" font-size="13">1</text><rect x="75" y="160" width="150" height="30" fill="#0e1018" stroke="#00ff88" stroke-width="2" rx="4" opacity="0" style="animation:rpn-push 1.5s ease 1.5s forwards"/><text x="150" y="180" fill="#00ff88" text-anchor="middle" font-size="13" font-weight="bold">3</text><rect x="75" y="125" width="150" height="30" fill="#0e1018" stroke="#ffd600" rx="4" opacity="0" style="animation:rpn-push 1.5s ease 2s forwards"/><text x="150" y="145" fill="#ffd600" text-anchor="middle" font-size="13">3</text><rect x="75" y="90" width="150" height="30" fill="#0e1018" stroke="#00cfff" stroke-width="3" rx="4" opacity="0" style="animation:rpn-push 1.5s ease 2.5s forwards"/><text x="150" y="110" fill="#00cfff" text-anchor="middle" font-size="14" font-weight="bold">9</text><rect x="300" y="60" width="270" height="210" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="435" y="85" fill="#fb923c" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Timeline</text><text x="320" y="110" fill="#e8eaf0" font-size="11" font-family="monospace">① Read "2" → push(2)</text><text x="320" y="133" fill="#e8eaf0" font-size="11" font-family="monospace">② Read "1" → push(1)</text><text x="320" y="156" fill="#00ff88" font-size="11" font-family="monospace">③ Read "+" → pop 1,2 → 2+1=3</text><text x="345" y="173" fill="#00ff88" font-size="10" font-family="monospace">→ push(3)</text><text x="320" y="196" fill="#ffd600" font-size="11" font-family="monospace">④ Read "3" → push(3)</text><text x="320" y="219" fill="#00cfff" font-size="11" font-family="monospace">⑤ Read "*" → pop 3,3 → 3*3=9</text><text x="345" y="236" fill="#00cfff" font-size="10" font-family="monospace">→ push(9)</text><text x="435" y="258" fill="#00cfff" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Final answer: 9</text></svg>`,
    complexity:[
      {badge:'green',big:'O(n)',label:'TIME',desc:'Single pass through tokens'},
      {badge:'green',big:'O(n)',label:'SPACE',desc:'Stack holds up to n operands'}
    ],
    meterWidth:'95%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># REVERSE POLISH NOTATION (RPN) — STACK</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Evaluate postfix expressions</span>
<span class="cm"># TIME: O(n) | SPACE: O(n)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Evaluate RPN ───</span>
<span class="kw">def</span> <span class="fn">evalRPN</span>(tokens):
    stack = []
    <span class="kw">for</span> token <span class="kw">in</span> tokens:
        <span class="kw">if</span> token <span class="kw">in</span> [<span class="st">'+'</span>, <span class="st">'-'</span>, <span class="st">'*'</span>, <span class="st">'/'</span>]:
            <span class="cm"># ⚠️ ORDER MATTERS!</span>
            right = stack.pop()  <span class="cm"># Second operand</span>
            left = stack.pop()   <span class="cm"># First operand</span>

            <span class="kw">if</span> token == <span class="st">'+'</span>: stack.append(left + right)
            <span class="kw">elif</span> token == <span class="st">'-'</span>: stack.append(left - right)
            <span class="kw">elif</span> token == <span class="st">'*'</span>: stack.append(left * right)
            <span class="kw">elif</span> token == <span class="st">'/'</span>: stack.append(<span class="fn">int</span>(left / right))  <span class="cm"># truncate toward 0</span>
        <span class="kw">else</span>:
            stack.append(<span class="fn">int</span>(token))  <span class="cm"># Push operand</span>

    <span class="kw">return</span> stack[<span class="nm">0</span>]  <span class="cm"># Final answer</span>

<span class="cm"># Example: ["2","1","+","3","*"]</span>
<span class="cm"># Stack: [2] → [2,1] → [3] → [3,3] → [9]</span>
<span class="cm"># Result: 9 (because (2+1)*3 = 9)</span>`,
      java:`<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// REVERSE POLISH NOTATION — STACK PATTERN</span>
<span class="cm">// TIME: O(n) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="cm">// ─── Evaluate RPN ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">evalRPN</span>(<span class="tp">String</span>[] tokens) {
    <span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();

    <span class="kw">for</span> (<span class="tp">String</span> token : tokens) {
        <span class="kw">if</span> (token.length() == <span class="nm">1</span> &amp;&amp; <span class="st">"+-*/"</span>.contains(token)) {
            <span class="cm">// ⚠️ POP ORDER CRITICAL!</span>
            <span class="tp">int</span> right = stack.pop();  <span class="cm">// Second operand (top)</span>
            <span class="tp">int</span> left = stack.pop();   <span class="cm">// First operand (below)</span>

            <span class="kw">switch</span> (token.charAt(<span class="nm">0</span>)) {
                <span class="kw">case</span> <span class="st">'+'</span>: stack.push(left + right); <span class="kw">break</span>;
                <span class="kw">case</span> <span class="st">'-'</span>: stack.push(left - right); <span class="kw">break</span>;
                <span class="kw">case</span> <span class="st">'*'</span>: stack.push(left * right); <span class="kw">break</span>;
                <span class="kw">case</span> <span class="st">'/'</span>: stack.push(left / right); <span class="kw">break</span>;  <span class="cm">// Java truncates toward 0</span>
            }
        } <span class="kw">else</span> {
            stack.push(Integer.parseInt(token));  <span class="cm">// Push operand</span>
        }
    }

    <span class="kw">return</span> stack.pop();  <span class="cm">// Final answer</span>
}

<span class="cm">// ─── WHY STACK? ───</span>
<span class="cm">// Operators come AFTER operands in RPN</span>
<span class="cm">// Stack saves operands until operator arrives</span>
<span class="cm">// Result becomes operand for next operation</span>
<span class="cm">// LIFO = perfect match for nested evaluation</span>`,
      csharp:`<span class="cm">// REVERSE POLISH NOTATION — STACK</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">EvalRPN</span>(<span class="tp">string</span>[] tokens) {
    <span class="kw">var</span> stack = <span class="kw">new</span> <span class="tp">Stack</span>&lt;<span class="tp">int</span>&gt;();

    <span class="kw">foreach</span> (<span class="kw">var</span> token <span class="kw">in</span> tokens) {
        <span class="kw">if</span> (token.Length == <span class="nm">1</span> &amp;&amp; <span class="st">"+-*/"</span>.Contains(token)) {
            <span class="tp">int</span> right = stack.Pop();
            <span class="tp">int</span> left = stack.Pop();

            <span class="kw">switch</span> (token[<span class="nm">0</span>]) {
                <span class="kw">case</span> <span class="st">'+'</span>: stack.Push(left + right); <span class="kw">break</span>;
                <span class="kw">case</span> <span class="st">'-'</span>: stack.Push(left - right); <span class="kw">break</span>;
                <span class="kw">case</span> <span class="st">'*'</span>: stack.Push(left * right); <span class="kw">break</span>;
                <span class="kw">case</span> <span class="st">'/'</span>: stack.Push(left / right); <span class="kw">break</span>;
            }
        } <span class="kw">else</span> {
            stack.Push(<span class="tp">int</span>.Parse(token));
        }
    }

    <span class="kw">return</span> stack.Pop();
}`
    },
    memoryHack:{
      oneSentence:'Read left-to-right: operands get pushed, operators pop two & compute, result gets pushed back.',
      flowchart:{
        nodes:[
          {id:'start',label:'Init stack',type:'start',x:290,y:20},
          {id:'loop',label:'For each token',type:'action',x:290,y:75},
          {id:'check',label:'Is operator?',type:'decision',x:290,y:135},
          {id:'push',label:'Push operand',type:'action',x:480,y:135},
          {id:'pop',label:'Pop right, left',type:'action',x:100,y:135},
          {id:'compute',label:'Compute result',type:'action',x:100,y:195},
          {id:'pushback',label:'Push result',type:'action',x:100,y:255},
          {id:'next',label:'Next token',type:'action',x:290,y:255},
          {id:'end',label:'Return stack[0]',type:'end',x:290,y:315}
        ],
        edges:[
          {from:'start',to:'loop',label:''},
          {from:'loop',to:'check',label:''},
          {from:'check',to:'push',label:'NO'},
          {from:'check',to:'pop',label:'YES'},
          {from:'pop',to:'compute',label:''},
          {from:'compute',to:'pushback',label:''},
          {from:'push',to:'next',label:''},
          {from:'pushback',to:'next',label:''},
          {from:'next',to:'loop',label:'more tokens'},
          {from:'next',to:'end',label:'done'}
        ]
      },
      title:'RPN Stack Evaluation',
      mnemonic:'OPERAND = PUSH, OPERATOR = POP-COMPUTE-PUSH',
      steps:[
        'Initialize empty stack',
        'Read tokens left to right',
        'If operand (number): push to stack',
        'If operator (+,-,*,/): pop 2, compute, push result',
        'Final stack has one value: the answer'
      ],
      why:'RPN places operators AFTER operands, so stack naturally holds pending values until operator arrives. LIFO ensures most recent operands are used first.',
      annotatedCode:[
        {line:'    Deque<Integer> stack = new ArrayDeque<>();',stepId:'start',note:'Stack holds pending operands',color:'#fb923c'},
        {line:'    for (String token : tokens) {',stepId:'loop',note:'Process each token left-to-right',color:'#4a5268'},
        {line:'        if ("+-*/".contains(token)) {',stepId:'check',note:'Check if operator',color:'#ffd600'},
        {line:'            int right = stack.pop();',stepId:'pop',note:'Pop order matters! Right first',color:'#ef4444'},
        {line:'            int left = stack.pop();',stepId:'pop',note:'Then left operand',color:'#ef4444'},
        {line:'            int result = compute(left, right, token);',stepId:'compute',note:'Perform operation',color:'#00ff88'},
        {line:'            stack.push(result);',stepId:'pushback',note:'Result becomes next operand',color:'#00cfff'},
        {line:'        } else {',stepId:'else',note:'',color:'#4a5268'},
        {line:'            stack.push(Integer.parseInt(token));',stepId:'push',note:'Save operand for later',color:'#a78bfa'},
        {line:'    return stack.pop();',stepId:'end',note:'Final answer',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'Input: ["2","1","+","3","*"]',art:`
  ┌─────────────────┐
  │ Tokens → Stack  │
  └─────────────────┘
     Read "2"
     Stack: [2]`,annotation:'Push first operand'},
        {label:'After "1"',art:`
     Read "1"
     Stack: [2, 1]
            ↑  ↑
            L  R`,annotation:'Stack holds both operands'},
        {label:'After "+"',art:`
     Operator "+"!
     Pop 1 (right)
     Pop 2 (left)
     Compute: 2+1=3
     Stack: [3]`,annotation:'Operator consumes 2, produces 1'},
        {label:'After "3"',art:`
     Read "3"
     Stack: [3, 3]
            ↑  ↑
          prev new`,annotation:'Result + new operand'},
        {label:'Final "*"',art:`
     Operator "*"!
     Pop 3 (right)
     Pop 3 (left)
     Compute: 3*3=9
     Stack: [9] ← ANSWER`,annotation:'Final evaluation complete'}
      ],
      variations:[
        {name:'Basic Calculator',desc:'Infix notation with parentheses — convert to RPN or use stack with operator precedence',problem:'#224'},
        {name:'Basic Calculator II',desc:'Infix with +,-,*,/ — stack evaluation with precedence handling',problem:'#227'},
        {name:'Expression Add Operators',desc:'Generate expressions with operators between digits that evaluate to target',problem:'#282'}
      ]
    },
    cheat:{
      trigger:'reverse polish, postfix notation, evaluate expression',
      firstLine:'Deque<Integer> stack = new ArrayDeque<>();',
      gotcha:'Forgetting pop order matters! For "5 3 -", first pop=3 (right), second pop=5 (left) → 5-3, NOT 3-5',
      pitch:"I'll use a stack to evaluate RPN. Operands get pushed, operators pop two values, compute, and push the result back. The stack naturally handles the postfix order.",
      snippet:`<span class="cm">// RPN Stack Pattern</span>
<span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();
<span class="kw">for</span> (<span class="tp">String</span> t : tokens) {
  <span class="kw">if</span> (<span class="st">"+-*/"</span>.contains(t)) {
    <span class="tp">int</span> b = stack.pop(), a = stack.pop();  <span class="cm">// ORDER!</span>
    stack.push(compute(a, b, t));
  } <span class="kw">else</span> stack.push(Integer.parseInt(t));
}
<span class="kw">return</span> stack.pop();`
    }
  },
  {
    icon:'🎢', name:'Sliding Window Maximum (Monotonic Deque)', accent:'#ef4444',
    tagline:'Deque maintains decreasing order — track potential max candidates',
    hook:"Imagine a roller coaster with cars sliding through a tunnel that fits exactly 3 cars. At each moment, you want to know the tallest person in the tunnel. When a tall person enters, all shorter people behind them become irrelevant (they'll never be tallest while the tall person is there). This is a monotonic deque — keep only the 'candidates' who could become max, remove from both ends as window slides! WHEN TO RECOGNIZE: Sliding window + need min/max in each window → think monotonic deque, not heap (deque is O(n), heap is O(n log k)).",
    svg:`<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes slide-in{0%{transform:translateX(30px);opacity:0}100%{transform:translateX(0);opacity:1}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="25" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Sliding Window Maximum: [1,3,-1,-3,5,3,6,7] k=3</text><rect x="50" y="50" width="500" height="80" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="75" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Array with sliding window</text><rect x="80" y="90" width="50" height="30" fill="#0e1018" stroke="#4a5268" rx="4"/><text x="105" y="110" fill="#4a5268" text-anchor="middle" font-size="12">1</text><rect x="135" y="90" width="50" height="30" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2" rx="4"/><text x="160" y="110" fill="#ef4444" text-anchor="middle" font-size="12" font-weight="bold">3</text><rect x="190" y="90" width="50" height="30" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2" rx="4"/><text x="215" y="110" fill="#ef4444" text-anchor="middle" font-size="12">-1</text><rect x="245" y="90" width="50" height="30" fill="rgba(239,68,68,0.3)" stroke="#ef4444" stroke-width="2" rx="4"/><text x="270" y="110" fill="#ef4444" text-anchor="middle" font-size="12">-3</text><rect x="300" y="90" width="50" height="30" fill="#0e1018" stroke="#4a5268" rx="4"/><text x="325" y="110" fill="#4a5268" text-anchor="middle" font-size="12">5</text><text x="300" y="68" fill="#ef4444" text-anchor="middle" font-size="10" font-family="monospace">← window size k=3</text><rect x="50" y="150" width="500" height="120" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="175" fill="#00ff88" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">Monotonic Deque (decreasing order)</text><text x="80" y="200" fill="#a78bfa" font-size="11" font-family="monospace">Front →</text><rect x="150" y="190" width="80" height="30" fill="rgba(0,255,136,0.2)" stroke="#00ff88" stroke-width="2" rx="4" style="animation:slide-in 1s ease"/><text x="190" y="210" fill="#00ff88" text-anchor="middle" font-size="12" font-weight="bold">idx:1 (3)</text><rect x="240" y="190" width="80" height="30" fill="rgba(167,139,250,0.2)" stroke="#a78bfa" rx="4" style="animation:slide-in 1.2s ease"/><text x="280" y="210" fill="#a78bfa" text-anchor="middle" font-size="11">idx:2 (-1)</text><rect x="330" y="190" width="80" height="30" fill="rgba(167,139,250,0.2)" stroke="#a78bfa" rx="4" style="animation:slide-in 1.4s ease"/><text x="370" y="210" fill="#a78bfa" text-anchor="middle" font-size="11">idx:3 (-3)</text><text x="470" y="210" fill="#4a5268" font-size="11" font-family="monospace">← Back</text><text x="80" y="245" fill="#ffd600" font-size="10" font-family="monospace">Max = deque.front() = 3</text><text x="80" y="260" fill="#4a5268" font-size="9" font-family="monospace">When 5 arrives: remove -1,-3,3</text><text x="80" y="273" fill="#4a5268" font-size="9" font-family="monospace">(all smaller, never be max)</text></svg>`,
    complexity:[
      {badge:'red',big:'O(nk)',label:'BRUTE FORCE',desc:'For each window, scan k elements to find max'},
      {badge:'green',big:'O(n)',label:'MONOTONIC DEQUE',desc:'Each element added/removed once'}
    ],
    meterWidth:'95%',
    code:{
      python:`<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># SLIDING WINDOW MAXIMUM — MONOTONIC DEQUE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Sliding window + need min/max</span>
<span class="cm"># TIME: O(n) | SPACE: O(k)</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="kw">from</span> collections <span class="kw">import</span> deque

<span class="kw">def</span> <span class="fn">maxSlidingWindow</span>(nums, k):
    dq = deque()  <span class="cm"># stores INDICES</span>
    result = []

    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(nums)):
        <span class="cm"># Remove indices outside window (from FRONT)</span>
        <span class="kw">while</span> dq <span class="kw">and</span> dq[<span class="nm">0</span>] &lt; i - k + <span class="nm">1</span>:
            dq.popleft()

        <span class="cm"># Remove smaller elements (from BACK)</span>
        <span class="cm"># They'll NEVER be max while current exists</span>
        <span class="kw">while</span> dq <span class="kw">and</span> nums[dq[-<span class="nm">1</span>]] &lt; nums[i]:
            dq.pop()

        dq.append(i)  <span class="cm"># Add current index</span>

        <span class="cm"># Start recording when window is full</span>
        <span class="kw">if</span> i &gt;= k - <span class="nm">1</span>:
            result.append(nums[dq[<span class="nm">0</span>]])  <span class="cm"># Front = max</span>

    <span class="kw">return</span> result

<span class="cm"># Example: [1,3,-1,-3,5,3,6,7], k=3</span>
<span class="cm"># Deque keeps decreasing order: [3,-1,-3]</span>
<span class="cm"># When 5 arrives: remove all smaller → [5]</span>`,
      java:`<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// SLIDING WINDOW MAXIMUM — MONOTONIC DEQUE</span>
<span class="cm">// TIME: O(n) | SPACE: O(k)</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">maxSlidingWindow</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> k) {
    <span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; deque = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[nums.length - k + <span class="nm">1</span>];

    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++) {
        <span class="cm">// Remove indices outside window</span>
        <span class="kw">while</span> (!deque.isEmpty() &amp;&amp; deque.peekFirst() &lt; i - k + <span class="nm">1</span>) {
            deque.pollFirst();
        }

        <span class="cm">// ⚠️ KEY: Remove smaller elements from back</span>
        <span class="cm">// They can NEVER be max while current exists</span>
        <span class="kw">while</span> (!deque.isEmpty() &amp;&amp; nums[deque.peekLast()] &lt; nums[i]) {
            deque.pollLast();
        }

        deque.offerLast(i);  <span class="cm">// Add current index</span>

        <span class="cm">// Record max when window is full</span>
        <span class="kw">if</span> (i &gt;= k - <span class="nm">1</span>) {
            result[i - k + <span class="nm">1</span>] = nums[deque.peekFirst()];
        }
    }

    <span class="kw">return</span> result;
}

<span class="cm">// ─── WHY DEQUE NOT HEAP? ───</span>
<span class="cm">// Heap: O(n log k) - can't remove arbitrary elements efficiently</span>
<span class="cm">// Deque: O(n) - remove from both ends in O(1)</span>`,
      csharp:`<span class="cm">// SLIDING WINDOW MAXIMUM — MONOTONIC DEQUE</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">MaxSlidingWindow</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> k) {
    <span class="kw">var</span> deque = <span class="kw">new</span> <span class="tp">LinkedList</span>&lt;<span class="tp">int</span>&gt;();
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[nums.Length - k + <span class="nm">1</span>];

    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.Length; i++) {
        <span class="kw">while</span> (deque.Count &gt; <span class="nm">0</span> &amp;&amp; deque.First.Value &lt; i - k + <span class="nm">1</span>) {
            deque.RemoveFirst();
        }

        <span class="kw">while</span> (deque.Count &gt; <span class="nm">0</span> &amp;&amp; nums[deque.Last.Value] &lt; nums[i]) {
            deque.RemoveLast();
        }

        deque.AddLast(i);

        <span class="kw">if</span> (i &gt;= k - <span class="nm">1</span>) {
            result[i - k + <span class="nm">1</span>] = nums[deque.First.Value];
        }
    }

    <span class="kw">return</span> result;
}`
    },
    memoryHack:{
      oneSentence:'Deque stores indices in decreasing value order — remove smaller from back (useless), remove old from front (out of window).',
      flowchart:{
        nodes:[
          {id:'start',label:'Init deque, result',type:'start',x:290,y:20},
          {id:'loop',label:'For each index i',type:'action',x:290,y:75},
          {id:'front',label:'Remove from front if outside window',type:'action',x:100,y:135},
          {id:'back',label:'Remove from back if smaller',type:'action',x:290,y:135},
          {id:'add',label:'Add i to deque',type:'action',x:480,y:135},
          {id:'check',label:'Window full?',type:'decision',x:290,y:195},
          {id:'record',label:'result[i-k+1] = nums[deque.front]',type:'action',x:480,y:255},
          {id:'next',label:'Next i',type:'action',x:100,y:255},
          {id:'end',label:'Return result',type:'end',x:290,y:315}
        ],
        edges:[
          {from:'start',to:'loop',label:''},
          {from:'loop',to:'front',label:''},
          {from:'front',to:'back',label:''},
          {from:'back',to:'add',label:''},
          {from:'add',to:'check',label:''},
          {from:'check',to:'record',label:'YES (i >= k-1)'},
          {from:'check',to:'next',label:'NO'},
          {from:'record',to:'next',label:''},
          {from:'next',to:'loop',label:'more elements'},
          {from:'next',to:'end',label:'done'}
        ]
      },
      title:'DECREASING DEQUE = MAX TRACKER',
      mnemonic:'FRONT = oldest candidate, BACK = newest candidate, always DECREASING',
      steps:[
        'Initialize deque (stores indices) and result array',
        'For each element: remove old indices from front (outside window)',
        'Remove smaller elements from back (they will never be max)',
        'Add current index to back',
        'Front of deque is always the max for current window'
      ],
      why:'WHEN TO USE: Sliding window + need min/max at each step. WHY DEQUE: Need to remove from BOTH ends - front for window boundary, back for maintaining decreasing order. Stack can only remove from one end. Heap is O(log k) per operation. Deque is O(1) for both ends, giving O(n) total. RECOGNITION: If you think "I need max in each sliding window" and see yourself scanning k elements repeatedly → monotonic deque optimizes from O(nk) to O(n).',
      annotatedCode:[
        {line:'    Deque<Integer> deque = new ArrayDeque<>();',stepId:'start',note:'Store INDICES in decreasing VALUE order',color:'#ef4444'},
        {line:'    for (int i = 0; i < nums.length; i++) {',stepId:'loop',note:'Process each element once',color:'#4a5268'},
        {line:'        while (!deque.isEmpty() && deque.peekFirst() < i-k+1)',stepId:'front',note:'FRONT removal: age check (out of window)',color:'#ffd600'},
        {line:'            deque.pollFirst();',stepId:'front',note:'Too old, remove from front',color:'#ffd600'},
        {line:'        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i])',stepId:'back',note:'BACK removal: value check (too small)',color:'#00ff88'},
        {line:'            deque.pollLast();',stepId:'back',note:'Smaller element = useless, remove',color:'#00ff88'},
        {line:'        deque.offerLast(i);',stepId:'add',note:'Add current index to back',color:'#a78bfa'},
        {line:'        if (i >= k-1)',stepId:'check',note:'Window full? Start recording',color:'#00cfff'},
        {line:'            result[i-k+1] = nums[deque.peekFirst()];',stepId:'record',note:'Front of deque = max for this window',color:'#00ff88'}
      ],
      stateSnapshots:[
        {label:'PATTERN RECOGNITION',art:`Sliding window + need max/min?
         ↓
O(nk) naive vs O(n) deque
         ↓
   Use Monotonic Deque!`,annotation:'Key trigger: window + extrema (max/min)'},
        {label:'Input: [1,3,-1,-3,5] k=3',art:`i=0: deque=[0]       (val=1)
i=1: 3>1 → remove 0
     deque=[1]       (val=3)
i=2: deque=[1,2]    (3,-1)
     Window full! max=3`,annotation:'Build decreasing deque'},
        {label:'i=3: Adding -3',art:`deque=[1,2,3]  (3,-1,-3)
All decreasing!
Max = nums[1] = 3`,annotation:'Deque maintains decreasing order'},
        {label:'i=4: Adding 5 (BIG!)',art:`5 > -3 → remove 3
5 > -1 → remove 2
5 > 3  → remove 1
deque=[4]      (val=5)
Max = 5 ✅`,annotation:'Bigger element clears smaller ones'},
        {label:'Why Deque Not Stack?',art:`Need to remove from:
- FRONT (old, out of window)
- BACK (small, useless)

Stack: only one end ❌
Deque: both ends ✅`,annotation:'Two-ended removal is essential'},
        {label:'Why Deque Not Heap?',art:`Heap: O(n log k)
- Remove arbitrary: hard
- Track window: complex

Deque: O(n)
- Remove both ends: O(1)
- Track window: easy`,annotation:'Deque is faster and simpler'}
      ],
      variations:[
        {name:'Sliding Window Median',desc:'Two heaps (or two deques) for median tracking',problem:'#480'},
        {name:'Shortest Subarray with Sum ≥ K',desc:'Monotonic deque on prefix sums',problem:'#862'},
        {name:'Jump Game VI',desc:'Sliding window DP with monotonic deque',problem:'#1696'},
        {name:'Longest Subarray Absolute Diff ≤ Limit',desc:'Two deques (one for min, one for max)',problem:'#1438'}
      ]
    },
    cheat:{
      trigger:'sliding window maximum, min max in window, fixed size window extrema',
      firstLine:'Deque<Integer> deque = new ArrayDeque<>();  // stores INDICES',
      gotcha:'Storing values instead of indices (need indices for window check!), or using i > k instead of i >= k-1 for window full check',
      pitch:"I'll use a monotonic decreasing deque. Remove old indices from front (out of window), remove smaller values from back (can't be max). Front of deque is always the max. O(n) since each element is added/removed at most once.",
      snippet:`<span class="cm">// Monotonic DECREASING deque</span>
<span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; dq = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();
<span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; n; i++) {
  <span class="kw">while</span> (!dq.isEmpty() &amp;&amp; dq.peekFirst() &lt; i-k+<span class="nm">1</span>)
    dq.pollFirst();  <span class="cm">// remove old</span>
  <span class="kw">while</span> (!dq.isEmpty() &amp;&amp; nums[dq.peekLast()] &lt; nums[i])
    dq.pollLast();   <span class="cm">// remove smaller</span>
  dq.offerLast(i);
  <span class="kw">if</span> (i &gt;= k-<span class="nm">1</span>) res[i-k+<span class="nm">1</span>] = nums[dq.peekFirst()];
}`
    }
  }
];
