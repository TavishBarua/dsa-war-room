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
  }
];
