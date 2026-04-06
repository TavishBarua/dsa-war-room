import { DnaPattern } from './types';

export const DNA_PATTERNS: DnaPattern[] = [
  {
    icon: '🗂️', name: 'Arrays & Hashing', accent: '#00ff88',
    tagline: 'When you need O(1) lookup or counting',
    hook: "Imagine your mom tells you to find a red sock in a pile of 100 socks. You could check one by one — that takes forever! OR you could have a magic dresser where red socks are always in the R drawer, blue in the B drawer. Need a red sock? Go straight to drawer R. Done in one step! A HashMap IS that magic dresser. You give it a key, it gives you the answer instantly.",
    svg: `<svg viewBox="0 0 600 350" style="max-height:350px;width:100%"><style>@keyframes ah-scan{0%,100%{opacity:1}50%{opacity:.4}} @keyframes ah-arrow{0%{stroke-dashoffset:40}100%{stroke-dashoffset:0}} @keyframes ah-found{0%,60%{fill:#1a1d2e}70%,100%{fill:rgba(0,255,136,.2)}} .ah-s{animation:ah-scan 1s ease-in-out infinite alternate} .ah-a{stroke-dasharray:40;animation:ah-arrow 2s linear infinite} .ah-f{animation:ah-found 4s infinite}</style><rect width="600" height="350" fill="#0e1018" rx="8"/><text x="300" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">O(n) Linear Scan vs O(1) HashMap Lookup</text><text x="150" y="58" fill="#ff4d6d" text-anchor="middle" font-size="12" font-family="monospace">SLOW: Check one by one</text><rect x="50" y="70" width="40" height="40" fill="#1a1d2e" stroke="#ff4d6d" class="ah-s" style="animation-delay:0s"/><text x="70" y="96" fill="#ff4d6d" text-anchor="middle" font-size="14">3</text><rect x="100" y="70" width="40" height="40" fill="#1a1d2e" stroke="#ff4d6d" class="ah-s" style="animation-delay:.2s"/><text x="120" y="96" fill="#ff4d6d" text-anchor="middle" font-size="14">7</text><rect x="150" y="70" width="40" height="40" fill="#1a1d2e" stroke="#ff4d6d" class="ah-s" style="animation-delay:.4s"/><text x="170" y="96" fill="#ff4d6d" text-anchor="middle" font-size="14">2</text><rect x="200" y="70" width="40" height="40" fill="#1a1d2e" stroke="#ff4d6d" class="ah-s" style="animation-delay:.6s"/><text x="220" y="96" fill="#ff4d6d" text-anchor="middle" font-size="14">9</text><rect x="250" y="70" width="40" height="40" fill="rgba(0,255,136,.15)" stroke="#00ff88" class="ah-s" style="animation-delay:.8s"/><text x="270" y="96" fill="#00ff88" text-anchor="middle" font-size="14">5</text><text x="270" y="130" fill="#ff4d6d" font-size="11" text-anchor="middle" font-family="monospace">Found after 5 checks!</text><text x="450" y="58" fill="#00ff88" text-anchor="middle" font-size="12" font-family="monospace">FAST: HashMap instant lookup</text><rect x="350" y="70" width="80" height="35" fill="#1a1d2e" stroke="#00ff88" rx="4"/><text x="390" y="93" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace">key:5</text><line x1="430" y1="87" x2="470" y2="87" stroke="#00ff88" stroke-width="2" class="ah-a" marker-end="url(#ah-arr)"/><rect x="470" y="70" width="80" height="35" fill="rgba(0,255,136,.15)" stroke="#00ff88" rx="4"/><text x="510" y="93" fill="#00ff88" text-anchor="middle" font-size="11" font-family="monospace">idx:4 ✓</text><text x="450" y="130" fill="#00ff88" font-size="11" text-anchor="middle" font-family="monospace">Found in 1 step!</text><defs><marker id="ah-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#00ff88"/></marker></defs><rect x="50" y="160" width="500" height="170" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="185" fill="#fff" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">How HashMap Works</text><rect x="80" y="200" width="60" height="30" fill="#0e1018" stroke="#a78bfa" rx="4"/><text x="110" y="220" fill="#a78bfa" text-anchor="middle" font-size="11">key:3</text><rect x="80" y="240" width="60" height="30" fill="#0e1018" stroke="#00cfff" rx="4"/><text x="110" y="260" fill="#00cfff" text-anchor="middle" font-size="11">key:7</text><rect x="80" y="280" width="60" height="30" fill="#0e1018" stroke="#fbbf24" rx="4"/><text x="110" y="300" fill="#fbbf24" text-anchor="middle" font-size="11">key:5</text><text x="200" y="220" fill="#4a5268" font-size="20">→</text><text x="200" y="260" fill="#4a5268" font-size="20">→</text><text x="200" y="300" fill="#4a5268" font-size="20">→</text><text x="280" y="195" fill="#4a5268" text-anchor="middle" font-size="10" font-family="monospace">hash(key) % size</text><rect x="230" y="200" width="100" height="30" fill="#0e1018" stroke="#a78bfa" rx="4"/><text x="280" y="220" fill="#a78bfa" text-anchor="middle" font-size="11">bucket[0]: 3→idx0</text><rect x="230" y="240" width="100" height="30" fill="#0e1018" stroke="#00cfff" rx="4"/><text x="280" y="260" fill="#00cfff" text-anchor="middle" font-size="11">bucket[1]: 7→idx1</text><rect x="230" y="280" width="100" height="30" fill="#0e1018" stroke="#fbbf24" rx="4" class="ah-f"/><text x="280" y="300" fill="#fbbf24" text-anchor="middle" font-size="11">bucket[2]: 5→idx4</text><text x="420" y="260" fill="#00ff88" font-size="12" text-anchor="middle" font-family="monospace">Direct access = O(1)!</text></svg>`,
    complexity: [
      {badge:'red', big:'O(n²)', label:'BRUTE FORCE', desc:'Nested loops checking every pair'},
      {badge:'yellow', big:'O(n)', label:'HASHMAP PASS', desc:'Single pass with HashMap lookup'},
      {badge:'blue', big:'O(1)', label:'DIRECT LOOKUP', desc:'HashMap get/set is constant time'}
    ],
    meterWidth: '95%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># ARRAYS &amp; HASHING — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># WHEN TO USE: Find pair, duplicate, frequency, group by</span>
<span class="cm"># TIME: O(n) | SPACE: O(n)</span>
<span class="cm"># ═══════════════════════════════</span>

<span class="kw">def</span> <span class="fn">hashmap_pattern</span>(arr, target):
    <span class="cm"># SETUP: HashMap to store seen values</span>
    seen = {}

    <span class="cm"># MAIN LOOP: Single pass through array</span>
    <span class="kw">for</span> index, value <span class="kw">in</span> <span class="fn">enumerate</span>(arr):
        complement = target - value

        <span class="cm"># WHY: Check complement BEFORE adding current</span>
        <span class="cm"># to avoid using the same element twice</span>
        <span class="kw">if</span> complement <span class="kw">in</span> seen:
            <span class="kw">return</span> [seen[complement], index]

        <span class="cm"># Store value → index mapping</span>
        seen[value] = index

    <span class="kw">return</span> []

<span class="cm"># ─── REAL EXAMPLE: Two Sum ───</span>
<span class="cm"># Problem: Find two numbers that add up to target</span>
<span class="cm"># Input: nums=[2,7,11,15], target=9  Output: [0,1]</span>

<span class="kw">def</span> <span class="fn">twoSum</span>(nums, target):
    seen = {}  <span class="cm"># val → index</span>
    <span class="kw">for</span> i, num <span class="kw">in</span> <span class="fn">enumerate</span>(nums):
        need = target - num
        <span class="kw">if</span> need <span class="kw">in</span> seen:
            <span class="kw">return</span> [seen[need], i]
        seen[num] = i`,
      csharp: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// ARRAYS &amp; HASHING — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Find pair, duplicate, frequency, group by</span>
<span class="cm">// TIME: O(n) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">HashmapPattern</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> target) {
    <span class="kw">var</span> seen = <span class="kw">new</span> <span class="tp">Dictionary</span>&lt;<span class="tp">int</span>, <span class="tp">int</span>&gt;();

    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; arr.Length; i++) {
        <span class="tp">int</span> complement = target - arr[i];
        <span class="kw">if</span> (seen.ContainsKey(complement))
            <span class="kw">return new</span> <span class="tp">int</span>[] { seen[complement], i };
        seen[arr[i]] = i;
    }
    <span class="kw">return new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}

<span class="cm">// ─── REAL EXAMPLE: Two Sum ───</span>
<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">TwoSum</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> target) {
    <span class="kw">var</span> seen = <span class="kw">new</span> <span class="tp">Dictionary</span>&lt;<span class="tp">int</span>, <span class="tp">int</span>&gt;();
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.Length; i++) {
        <span class="tp">int</span> need = target - nums[i];
        <span class="kw">if</span> (seen.ContainsKey(need))
            <span class="kw">return new</span> <span class="tp">int</span>[] { seen[need], i };
        seen[nums[i]] = i;
    }
    <span class="kw">return new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}`,
      java: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// ARRAYS &amp; HASHING — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Find pair, duplicate, frequency, group by</span>
<span class="cm">// TIME: O(n) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">hashmapPattern</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> target) {
    <span class="cm">// SETUP: HashMap to store seen values</span>
    <span class="tp">Map</span>&lt;<span class="tp">Integer</span>, <span class="tp">Integer</span>&gt; seen = <span class="kw">new</span> <span class="tp">HashMap</span>&lt;&gt;();

    <span class="cm">// MAIN LOOP: Single pass through array</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; arr.length; i++) {
        <span class="tp">int</span> complement = target - arr[i];

        <span class="cm">// WHY: Check complement BEFORE adding current</span>
        <span class="cm">// to avoid using the same element twice</span>
        <span class="kw">if</span> (seen.containsKey(complement))
            <span class="kw">return new</span> <span class="tp">int</span>[] { seen.get(complement), i };

        <span class="cm">// Store value → index mapping</span>
        seen.put(arr[i], i);
    }
    <span class="kw">return new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}

<span class="cm">// ─── REAL EXAMPLE: Two Sum ───</span>
<span class="cm">// Problem: Find two numbers that add up to target</span>
<span class="cm">// Input: nums=[2,7,11,15], target=9  Output: [0,1]</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">twoSum</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> target) {
    <span class="tp">Map</span>&lt;<span class="tp">Integer</span>, <span class="tp">Integer</span>&gt; seen = <span class="kw">new</span> <span class="tp">HashMap</span>&lt;&gt;(); <span class="cm">// val → index</span>
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++) {
        <span class="tp">int</span> need = target - nums[i];
        <span class="kw">if</span> (seen.containsKey(need))
            <span class="kw">return new</span> <span class="tp">int</span>[] { seen.get(need), i };
        seen.put(nums[i], i);
    }
    <span class="kw">return new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}`
    },
    memoryHack: {
      oneSentence: 'Before storing each number, ask the hashmap if its complement already showed up.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'Init seen={}', type: 'start', x: 290, y: 20 },
          { id: 'loop', label: 'For each num', type: 'action', x: 290, y: 70 },
          { id: 'calc', label: 'Calc complement', type: 'action', x: 290, y: 120 },
          { id: 'check', label: 'In seen?', type: 'decision', x: 290, y: 170 },
          { id: 'found', label: 'Return pair', type: 'end', x: 100, y: 170 },
          { id: 'store', label: 'Store num:idx', type: 'action', x: 480, y: 170 },
          { id: 'next', label: 'Next iteration', type: 'action', x: 480, y: 70 }
        ],
        edges: [
          { from: 'start', to: 'loop', label: '' },
          { from: 'loop', to: 'calc', label: '' },
          { from: 'calc', to: 'check', label: '' },
          { from: 'check', to: 'found', label: 'YES' },
          { from: 'check', to: 'store', label: 'NO' },
          { from: 'store', to: 'next', label: '' },
          { from: 'next', to: 'loop', label: '' }
        ]
      },
      annotatedCode: [
        { line: 'int[] twoSum(int[] nums, int target) {', stepId: 'start', note: 'Entry point — takes array and target', color: '#5a5f70' },
        { line: '    Map<Integer,Integer> seen = new HashMap<>();', stepId: 'start', note: 'Hashmap stores {value: index}', color: '#00cfff' },
        { line: '    for (int i = 0; i < nums.length; i++) {', stepId: 'loop', note: 'Walk every element once — O(n)', color: '#00cfff' },
        { line: '        int comp = target - nums[i];', stepId: 'calc', note: 'What number do we NEED?', color: '#a78bfa' },
        { line: '        if (seen.containsKey(comp))', stepId: 'check', note: 'O(1) lookup — have we seen it?', color: '#ffd600' },
        { line: '            return new int[]{seen.get(comp), i};', stepId: 'found', note: 'Found! Return both indices', color: '#00ff88' },
        { line: '        seen.put(nums[i], i);', stepId: 'store', note: 'Not found yet — store for future', color: '#00cfff' },
        { line: '    } return new int[]{};', stepId: 'next', note: 'No pair found (edge case)', color: '#5a5f70' }
      ],
      stateSnapshots: [
        { label: 'Step 1', art: 'i=0  num=2  comp=7  seen={}         → 7 not in seen → seen={2:0}', annotation: 'First number stored, no match yet' },
        { label: 'Step 2', art: 'i=1  num=7  comp=2  seen={2:0}      → 2 IN seen!    → return [0,1]', annotation: 'Complement 2 found at index 0!' },
        { label: 'Alt Step 2', art: 'i=1  num=11 comp=-2 seen={2:0}   → -2 not in seen → seen={2:0,11:1}', annotation: 'If target was different, keep going' },
        { label: 'Alt Step 3', art: 'i=2  num=15 comp=-6 seen={2:0,11:1} → not found → seen grows', annotation: 'Still no match — hashmap grows' },
        { label: 'Alt Step 4', art: 'i=3  num=7  comp=2  seen={2:0,11:1,15:2} → 2 IN seen! → [0,3]', annotation: 'Eventually the complement appears' }
      ],
      variations: [
        { name: 'Two Sum', desc: 'Hashmap stores val→idx, check complement before inserting', problem: 'Two Sum (#1)' },
        { name: 'Group Anagrams', desc: 'Use sorted-string or char-count tuple as hashmap key', problem: 'Group Anagrams (#49)' },
        { name: 'Contains Duplicate', desc: 'Insert into set — if already present, duplicate found', problem: 'Contains Duplicate (#217)' },
        { name: 'Encode and Decode Strings', desc: 'Encode: prepend each string with its length + delimiter (e.g. "4#lint"). Decode: read length, extract substring', problem: 'Encode and Decode Strings (#271)' },
        { name: 'Valid Sudoku', desc: 'Use 3 HashSets (row, col, box) — box index = (r/3)*3 + c/3. Check duplicates per group', problem: 'Valid Sudoku (#36)' },
        { name: 'Longest Consecutive Sequence', desc: 'Put all in HashSet. Only start counting from sequence starts (num-1 not in set). Expand right.', problem: 'Longest Consecutive Sequence (#128)' }
      ],
      title: 'CHECK then STORE',
      mnemonic: 'CHECK then STORE — ask the map before you add to it',
      steps: ['Init seen={}','Calc complement = target - num','Check if complement in seen','If yes return, else store seen[num]=i'],
      why: 'A hashmap turns O(n²) brute-force into O(n) by remembering everything visited.'
    },
    cheat: {
      trigger: 'find pair, duplicate, frequency, group by, count occurrences',
      firstLine: 'Map<Integer, Integer> seen = new HashMap<>();',
      gotcha: 'Forgetting to check if complement exists BEFORE adding current element',
      pitch: "I'll use a HashMap to trade space for time, reducing from O(n²) to O(n) with single-pass lookup.",
      snippet: `<span class="cm">// WHY HashMap? Check complement in O(1) instead of O(n) inner loop</span>
<span class="tp">Map</span>&lt;<span class="tp">Integer</span>,<span class="tp">Integer</span>&gt; map = <span class="kw">new</span> <span class="fn">HashMap</span>&lt;&gt;();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; nums.length; i++) {
    <span class="kw">if</span> (map.<span class="fn">containsKey</span>(target - nums[i])) <span class="kw">return new</span> <span class="kw">int</span>[]{map.<span class="fn">get</span>(target - nums[i]), i};
    map.<span class="fn">put</span>(nums[i], i);  <span class="cm">// store val→idx for future lookups</span>
}`
    }
  },
  {
    icon: '🔤', name: 'Frequency Count / Anagrams', accent: '#f472b6',
    tagline: 'When you need to compare character fingerprints',
    hook: "Imagine you have two bags of Scrabble tiles. You want to know if they contain the exact same letters. You COULD sort both bags and compare — that works! But there's a faster trick: count every tile in the first bag, then for each tile in the second bag, subtract one. If every count hits zero, they're the same bag rearranged. That's the frequency count pattern — turn letters into numbers and just compare the numbers!",
    svg: `<svg viewBox="0 0 600 370" style="max-height:370px;width:100%"><style>@keyframes fc-pulse{0%,100%{opacity:1}50%{opacity:.5}} @keyframes fc-fill{0%{width:0}100%{width:100%}} .fc-p{animation:fc-pulse 2s ease-in-out infinite}</style><rect width="600" height="370" fill="#0e1018" rx="8"/><text x="300" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Frequency Count: Are these Anagrams?</text><text x="150" y="55" fill="#f472b6" text-anchor="middle" font-size="13" font-family="monospace">"listen"</text><text x="450" y="55" fill="#a78bfa" text-anchor="middle" font-size="13" font-family="monospace">"silent"</text><rect x="50" y="65" width="200" height="35" fill="#1a1d2e" stroke="#f472b6" rx="4"/><text x="70" y="88" fill="#f472b6" font-size="14" font-family="monospace">l:1 i:1 s:1 t:1 e:1 n:1</text><text x="300" y="88" fill="#4a5268" font-size="18">=</text><rect x="350" y="65" width="200" height="35" fill="#1a1d2e" stroke="#a78bfa" rx="4"/><text x="370" y="88" fill="#a78bfa" font-size="14" font-family="monospace">s:1 i:1 l:1 e:1 n:1 t:1</text><text x="300" y="125" fill="#00ff88" font-size="13" font-weight="bold" font-family="monospace">Same fingerprint = Anagram!</text><rect x="50" y="145" width="500" height="210" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="170" fill="#fff" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">Two Approaches</text><text x="70" y="195" fill="#ffd600" font-size="12" font-weight="bold" font-family="monospace">1. Sort &amp; Compare (Simple)</text><text x="70" y="215" fill="#e8eaf0" font-size="11" font-family="monospace">sort("listen") → "eilnst"</text><text x="70" y="232" fill="#e8eaf0" font-size="11" font-family="monospace">sort("silent") → "eilnst"  → Equal!</text><text x="70" y="260" fill="#f472b6" font-size="12" font-weight="bold" font-family="monospace">2. Frequency Array (Optimal)</text><text x="70" y="280" fill="#e8eaf0" font-size="11" font-family="monospace">count[26] for 'a'-'z'</text><text x="70" y="297" fill="#00ff88" font-size="11" font-family="monospace">+1 for each char in s1</text><text x="70" y="314" fill="#ff4d6d" font-size="11" font-family="monospace">-1 for each char in s2</text><text x="70" y="335" fill="#ffd600" font-size="11" font-family="monospace" class="fc-p">All zeros? → Anagram!</text></svg>`,
    complexity: [
      {badge:'red', big:'O(n²)', label:'BRUTE FORCE', desc:'Check every permutation of characters'},
      {badge:'yellow', big:'O(n log n)', label:'SORT & COMPARE', desc:'Sort both strings, compare directly'},
      {badge:'green', big:'O(n)', label:'FREQ COUNT', desc:'Count chars with array[26] or HashMap'}
    ],
    meterWidth: '90%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># FREQUENCY COUNT / ANAGRAMS — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════════════</span>
<span class="cm"># WHEN TO USE: Compare char composition, group by fingerprint</span>
<span class="cm"># TIME: O(n) | SPACE: O(1) for fixed alphabet</span>
<span class="cm"># ═══════════════════════════════════════</span>

<span class="cm"># ─── Pattern 1: Valid Anagram ───</span>
<span class="cm"># Are two strings rearrangements of each other?</span>
<span class="kw">def</span> <span class="fn">isAnagram</span>(s, t):
    <span class="kw">if</span> <span class="fn">len</span>(s) != <span class="fn">len</span>(t):
        <span class="kw">return</span> <span class="nm">False</span>
    count = [<span class="nm">0</span>] * <span class="nm">26</span>  <span class="cm"># fixed-size for a-z</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(s)):
        count[<span class="fn">ord</span>(s[i]) - <span class="fn">ord</span>(<span class="st">'a'</span>)] += <span class="nm">1</span>  <span class="cm"># +1 for s</span>
        count[<span class="fn">ord</span>(t[i]) - <span class="fn">ord</span>(<span class="st">'a'</span>)] -= <span class="nm">1</span>  <span class="cm"># -1 for t</span>
    <span class="kw">return</span> <span class="fn">all</span>(c == <span class="nm">0</span> <span class="kw">for</span> c <span class="kw">in</span> count)

<span class="cm"># ─── Pattern 2: Group Anagrams ───</span>
<span class="cm"># Group strings that are anagrams of each other</span>
<span class="kw">def</span> <span class="fn">groupAnagrams</span>(strs):
    groups = {}  <span class="cm"># canonical_key → list of anagrams</span>
    <span class="kw">for</span> s <span class="kw">in</span> strs:
        <span class="cm"># KEY INSIGHT: sorted string = canonical form</span>
        key = <span class="fn">tuple</span>(<span class="fn">sorted</span>(s))
        groups.setdefault(key, []).append(s)
    <span class="kw">return</span> <span class="fn">list</span>(groups.values())

<span class="cm"># ─── Alt key: frequency tuple (avoids sort) ───</span>
<span class="kw">def</span> <span class="fn">groupAnagramsFreq</span>(strs):
    groups = {}
    <span class="kw">for</span> s <span class="kw">in</span> strs:
        count = [<span class="nm">0</span>] * <span class="nm">26</span>
        <span class="kw">for</span> c <span class="kw">in</span> s:
            count[<span class="fn">ord</span>(c) - <span class="fn">ord</span>(<span class="st">'a'</span>)] += <span class="nm">1</span>
        key = <span class="fn">tuple</span>(count)  <span class="cm"># (0,0,0,...1,0,...) as key</span>
        groups.setdefault(key, []).append(s)
    <span class="kw">return</span> <span class="fn">list</span>(groups.values())`,
      csharp: `<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// FREQUENCY COUNT / ANAGRAMS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// WHEN TO USE: Compare char composition, group by fingerprint</span>
<span class="cm">// TIME: O(n) | SPACE: O(1) for fixed alphabet</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="cm">// ─── Pattern 1: Valid Anagram ───</span>
<span class="kw">public</span> <span class="tp">bool</span> <span class="fn">IsAnagram</span>(<span class="tp">string</span> s, <span class="tp">string</span> t) {
    <span class="kw">if</span> (s.Length != t.Length) <span class="kw">return</span> <span class="nm">false</span>;
    <span class="tp">int</span>[] count = <span class="kw">new</span> <span class="tp">int</span>[<span class="nm">26</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; s.Length; i++) {
        count[s[i] - <span class="st">'a'</span>]++;  <span class="cm">// +1 for s</span>
        count[t[i] - <span class="st">'a'</span>]--;  <span class="cm">// -1 for t</span>
    }
    <span class="kw">return</span> count.All(c =&gt; c == <span class="nm">0</span>);
}

<span class="cm">// ─── Pattern 2: Group Anagrams ───</span>
<span class="kw">public</span> <span class="tp">IList</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">string</span>&gt;&gt; <span class="fn">GroupAnagrams</span>(<span class="tp">string</span>[] strs) {
    <span class="kw">var</span> groups = <span class="kw">new</span> <span class="tp">Dictionary</span>&lt;<span class="tp">string</span>, <span class="tp">List</span>&lt;<span class="tp">string</span>&gt;&gt;();
    <span class="kw">foreach</span> (<span class="kw">var</span> s <span class="kw">in</span> strs) {
        <span class="cm">// Sorted string as canonical key</span>
        <span class="kw">var</span> key = <span class="kw">new</span> <span class="tp">string</span>(s.OrderBy(c =&gt; c).ToArray());
        <span class="kw">if</span> (!groups.ContainsKey(key))
            groups[key] = <span class="kw">new</span> <span class="tp">List</span>&lt;<span class="tp">string</span>&gt;();
        groups[key].Add(s);
    }
    <span class="kw">return new</span> <span class="tp">List</span>&lt;<span class="tp">IList</span>&lt;<span class="tp">string</span>&gt;&gt;(groups.Values);
}`,
      java: `<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// FREQUENCY COUNT / ANAGRAMS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════════════</span>
<span class="cm">// WHEN TO USE: Compare char composition, group by fingerprint</span>
<span class="cm">// TIME: O(n) | SPACE: O(1) for fixed alphabet</span>
<span class="cm">// ═══════════════════════════════════════</span>

<span class="cm">// ─── Pattern 1: Valid Anagram ───</span>
<span class="cm">// +1 for each char in s, -1 for each char in t</span>
<span class="cm">// If all zeros → same letters = anagram</span>
<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">isAnagram</span>(<span class="tp">String</span> s, <span class="tp">String</span> t) {
    <span class="kw">if</span> (s.length() != t.length()) <span class="kw">return</span> <span class="nm">false</span>;
    <span class="tp">int</span>[] count = <span class="kw">new</span> <span class="tp">int</span>[<span class="nm">26</span>];
    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; s.length(); i++) {
        count[s.charAt(i) - <span class="st">'a'</span>]++;  <span class="cm">// +1 for s</span>
        count[t.charAt(i) - <span class="st">'a'</span>]--;  <span class="cm">// -1 for t</span>
    }
    <span class="kw">for</span> (<span class="tp">int</span> c : count)
        <span class="kw">if</span> (c != <span class="nm">0</span>) <span class="kw">return</span> <span class="nm">false</span>;
    <span class="kw">return</span> <span class="nm">true</span>;
}

<span class="cm">// ─── Pattern 2: Group Anagrams ───</span>
<span class="cm">// KEY INSIGHT: All anagrams share the same sorted form</span>
<span class="cm">// "eat","tea","ate" → sorted = "aet" → same group!</span>
<span class="kw">public</span> <span class="tp">List</span>&lt;<span class="tp">List</span>&lt;<span class="tp">String</span>&gt;&gt; <span class="fn">groupAnagrams</span>(<span class="tp">String</span>[] strs) {
    <span class="tp">Map</span>&lt;<span class="tp">String</span>, <span class="tp">List</span>&lt;<span class="tp">String</span>&gt;&gt; groups = <span class="kw">new</span> <span class="tp">HashMap</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="tp">String</span> s : strs) {
        <span class="tp">char</span>[] chars = s.toCharArray();
        <span class="tp">Arrays</span>.sort(chars);
        <span class="tp">String</span> key = <span class="kw">new</span> <span class="tp">String</span>(chars);
        groups.computeIfAbsent(key, k -&gt; <span class="kw">new</span> <span class="tp">ArrayList</span>&lt;&gt;()).add(s);
    }
    <span class="kw">return new</span> <span class="tp">ArrayList</span>&lt;&gt;(groups.values());
}`
    },
    memoryHack: {
      oneSentence: 'Turn strings into a character fingerprint (count array or sorted form) — same fingerprint means anagram.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'Input strings', type: 'start', x: 290, y: 20 },
          { id: 'len', label: 'Same length?', type: 'decision', x: 290, y: 75 },
          { id: 'no', label: 'Return false', type: 'end', x: 100, y: 75 },
          { id: 'init', label: 'count[26] = {0}', type: 'action', x: 290, y: 130 },
          { id: 'loop', label: 'For each i', type: 'action', x: 290, y: 180 },
          { id: 'inc', label: '+1 for s[i]', type: 'action', x: 180, y: 230 },
          { id: 'dec', label: '-1 for t[i]', type: 'action', x: 400, y: 230 },
          { id: 'check', label: 'All zeros?', type: 'decision', x: 290, y: 285 },
          { id: 'yes', label: 'Anagram!', type: 'end', x: 100, y: 285 },
          { id: 'nope', label: 'Not anagram', type: 'end', x: 480, y: 285 }
        ],
        edges: [
          { from: 'start', to: 'len', label: '' },
          { from: 'len', to: 'no', label: 'NO' },
          { from: 'len', to: 'init', label: 'YES' },
          { from: 'init', to: 'loop', label: '' },
          { from: 'loop', to: 'inc', label: '' },
          { from: 'inc', to: 'dec', label: '' },
          { from: 'dec', to: 'loop', label: 'next i' },
          { from: 'loop', to: 'check', label: 'done' },
          { from: 'check', to: 'yes', label: 'YES' },
          { from: 'check', to: 'nope', label: 'NO' }
        ]
      },
      annotatedCode: [
        { line: 'boolean isAnagram(String s, String t) {', stepId: 'start', note: 'Entry — two strings to compare', color: '#5a5f70' },
        { line: '    if (s.length() != t.length()) return false;', stepId: 'len', note: 'Quick exit — different lengths can\'t be anagrams', color: '#ff4d6d' },
        { line: '    int[] count = new int[26];', stepId: 'init', note: 'Fixed-size array for a-z (only 26 slots!)', color: '#f472b6' },
        { line: '    for (int i = 0; i < s.length(); i++) {', stepId: 'loop', note: 'Single pass through both strings simultaneously', color: '#00cfff' },
        { line: '        count[s.charAt(i) - \'a\']++;', stepId: 'inc', note: '+1 for every char in s', color: '#00ff88' },
        { line: '        count[t.charAt(i) - \'a\']--;', stepId: 'dec', note: '-1 for every char in t — cancels out if same', color: '#ffd600' },
        { line: '    }', stepId: 'loop', note: 'End of single pass', color: '#5a5f70' },
        { line: '    for (int c : count) if (c != 0) return false;', stepId: 'check', note: 'Any non-zero means mismatch!', color: '#ff4d6d' },
        { line: '    return true;', stepId: 'yes', note: 'All zeros = perfect match = anagram!', color: '#00ff88' }
      ],
      stateSnapshots: [
        { label: 'Step 1', art: 's="anagram" t="nagaram"  count=[0]*26  len=7=7 ✓', annotation: 'Same length — proceed with counting' },
        { label: 'Step 2', art: 'i=0: s[0]=a(+1) t[0]=n(-1)  count: a=1, n=-1', annotation: 'a goes up, n goes down' },
        { label: 'Step 3', art: 'i=1: s[1]=n(+1) t[1]=a(-1)  count: a=0, n=0', annotation: 'n cancels out, a cancels out!' },
        { label: 'Step 4', art: '...after all 7 chars: count = [0,0,0,...,0]', annotation: 'Every letter appeared same # of times' },
        { label: 'Result', art: 'All zeros → return true → They ARE anagrams!', annotation: '+1/-1 cancellation = frequency match' }
      ],
      variations: [
        { name: 'Valid Anagram', desc: 'count[26]: +1 for s, -1 for t, check all zeros', problem: 'Valid Anagram (#242)' },
        { name: 'Group Anagrams', desc: 'Use sorted(s) or count-tuple as HashMap key to group', problem: 'Group Anagrams (#49)' },
        { name: 'Valid Anagram (Unicode)', desc: 'Use HashMap<Character,Integer> instead of int[26] for any charset', problem: 'Valid Anagram (#242 follow-up)' },
        { name: 'Find All Anagrams in a String', desc: 'Sliding window + frequency count on window of size p.length', problem: 'Find Anagrams (#438)' }
      ],
      title: 'FINGERPRINT & MATCH',
      mnemonic: 'FINGERPRINT & MATCH — same fingerprint means same letters, just rearranged',
      steps: ['Check lengths (quick exit if different)', 'Build count[26] frequency array', '+1 for each char in string s', '-1 for each char in string t', 'If all counts are zero → anagram!', 'For grouping: use sorted string or count-tuple as HashMap key'],
      why: 'Two strings are anagrams iff they have identical character frequencies. A count array captures this fingerprint in O(n) time with O(1) space.'
    },
    cheat: {
      trigger: 'anagram, character frequency, group by letters, same characters, rearrange string',
      firstLine: 'int[] count = new int[26];',
      gotcha: 'Forgetting to check length equality first — different lengths are never anagrams',
      pitch: "I'll use a frequency count array where +1 for each char in s and -1 for each char in t. If all zeros, they're anagrams. For grouping, sorted string becomes the HashMap key.",
      snippet: `<span class="cm">// WHY count[26]? Fixed-size fingerprint for a-z in O(n) time</span>
<span class="kw">int</span>[] count = <span class="kw">new int</span>[<span class="nm">26</span>];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; s.<span class="fn">length</span>(); i++) {
    count[s.<span class="fn">charAt</span>(i) - <span class="st">'a'</span>]++;  <span class="cm">// +1 for s</span>
    count[t.<span class="fn">charAt</span>(i) - <span class="st">'a'</span>]--;  <span class="cm">// -1 for t</span>
}
<span class="cm">// All zeros? → Anagram!</span>`
    }
  },
  {
    icon: '👉👈', name: 'Two Pointers', accent: '#00cfff',
    tagline: 'Two variables converging from both ends',
    hook: "Two friends stand at opposite ends of a long hallway. They walk toward each other. If the sum of their house numbers is too big, the friend on the right takes a step left (smaller number). Too small? The friend on the left steps right (bigger number). They meet exactly at the answer. Way faster than one person checking every pair of spots alone!",
    svg: `<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes tp-l{0%,100%{transform:translateX(0)}25%{transform:translateX(50px)}50%{transform:translateX(100px)}75%{transform:translateX(150px)}} @keyframes tp-r{0%,100%{transform:translateX(0)}25%{transform:translateX(-50px)}50%{transform:translateX(-50px)}75%{transform:translateX(-100px)}} @keyframes tp-flash{0%,90%{fill:#1a1d2e}95%,100%{fill:rgba(0,255,136,.2)}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Two Pointers: Find pair summing to 11</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Sorted array: [1, 3, 5, 7, 9, 11]</text><rect x="75" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="100" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">1</text><rect x="135" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="160" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">3</text><rect x="195" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="220" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">5</text><rect x="255" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="280" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">7</text><rect x="315" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="340" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">9</text><rect x="375" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="400" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">11</text><g style="animation:tp-l 5s ease-in-out infinite"><text x="100" y="60" fill="#00ff88" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">L ▼</text></g><g style="animation:tp-r 5s ease-in-out infinite"><text x="400" y="60" fill="#ff4d6d" text-anchor="middle" font-size="12" font-weight="bold" font-family="monospace">R ▼</text></g><rect x="50" y="130" width="500" height="150" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="155" fill="#00cfff" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">Step-by-Step</text><text x="70" y="180" fill="#00ff88" font-size="12" font-family="monospace">Step 1: L=1, R=11 → sum=12 > 11 → R moves left</text><text x="70" y="205" fill="#ffd600" font-size="12" font-family="monospace">Step 2: L=1, R=9  → sum=10 < 11 → L moves right</text><text x="70" y="230" fill="#a78bfa" font-size="12" font-family="monospace">Step 3: L=3, R=9  → sum=12 > 11 → R moves left</text><text x="70" y="255" fill="#00ff88" font-size="12" font-family="monospace" font-weight="bold">Step 4: L=3, R=7  → sum=10... L=5, R=7 → 12... L=5,R=9? → FOUND! ✓</text></svg>`,
    complexity: [
      {badge:'red', big:'O(n²)', label:'BRUTE FORCE', desc:'Nested loops checking every pair'},
      {badge:'yellow', big:'O(n log n)', label:'SORT FIRST', desc:'Sort array, then two pointer scan'},
      {badge:'green', big:'O(n)', label:'TWO POINTERS', desc:'Single pass with L and R pointers'}
    ],
    meterWidth: '85%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># TWO POINTERS — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># WHEN TO USE: Sorted array, pair sum, palindrome, two ends</span>
<span class="cm"># TIME: O(n) | SPACE: O(1)</span>
<span class="cm"># ═══════════════════════════════</span>

<span class="kw">def</span> <span class="fn">two_pointer_template</span>(arr, target):
    left, right = <span class="nm">0</span>, <span class="fn">len</span>(arr) - <span class="nm">1</span>

    <span class="kw">while</span> left &lt; right:
        current_sum = arr[left] + arr[right]

        <span class="kw">if</span> current_sum == target:
            <span class="kw">return</span> [left, right]
        <span class="kw">elif</span> current_sum &lt; target:
            left += <span class="nm">1</span>   <span class="cm"># Need bigger sum → move left right</span>
        <span class="kw">else</span>:
            right -= <span class="nm">1</span>  <span class="cm"># Need smaller sum → move right left</span>

    <span class="kw">return</span> []

<span class="cm"># ─── REAL EXAMPLE: Container With Most Water ───</span>
<span class="cm"># Input: height=[1,8,6,2,5,4,8,3,7]  Output: 49</span>

<span class="kw">def</span> <span class="fn">maxArea</span>(height):
    left, right = <span class="nm">0</span>, <span class="fn">len</span>(height) - <span class="nm">1</span>
    max_water = <span class="nm">0</span>

    <span class="kw">while</span> left &lt; right:
        w = right - left
        h = <span class="fn">min</span>(height[left], height[right])
        max_water = <span class="fn">max</span>(max_water, w * h)

        <span class="cm"># WHY: Move the shorter side — it's the bottleneck</span>
        <span class="kw">if</span> height[left] &lt; height[right]:
            left += <span class="nm">1</span>
        <span class="kw">else</span>:
            right -= <span class="nm">1</span>

    <span class="kw">return</span> max_water`,
      csharp: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// TWO POINTERS — THE TEMPLATE</span>
<span class="cm">// TIME: O(n) | SPACE: O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">TwoPointerTemplate</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> target) {
    <span class="tp">int</span> left = <span class="nm">0</span>, right = arr.Length - <span class="nm">1</span>;
    <span class="kw">while</span> (left &lt; right) {
        <span class="tp">int</span> sum = arr[left] + arr[right];
        <span class="kw">if</span> (sum == target) <span class="kw">return new</span>[] { left, right };
        <span class="kw">else if</span> (sum &lt; target) left++;
        <span class="kw">else</span> right--;
    }
    <span class="kw">return new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}

<span class="cm">// ─── REAL EXAMPLE: Container With Most Water ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">MaxArea</span>(<span class="tp">int</span>[] height) {
    <span class="tp">int</span> left = <span class="nm">0</span>, right = height.Length - <span class="nm">1</span>, maxWater = <span class="nm">0</span>;
    <span class="kw">while</span> (left &lt; right) {
        <span class="tp">int</span> w = right - left;
        <span class="tp">int</span> h = Math.Min(height[left], height[right]);
        maxWater = Math.Max(maxWater, w * h);
        <span class="kw">if</span> (height[left] &lt; height[right]) left++;
        <span class="kw">else</span> right--;
    }
    <span class="kw">return</span> maxWater;
}`,
      java: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// TWO POINTERS — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Sorted array pair, palindrome, container</span>
<span class="cm">// TIME: O(n) | SPACE: O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">twoPointerTemplate</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> target) {
    <span class="cm">// SETUP: Two pointers at opposite ends</span>
    <span class="tp">int</span> left = <span class="nm">0</span>, right = arr.length - <span class="nm">1</span>;

    <span class="kw">while</span> (left &lt; right) {
        <span class="tp">int</span> sum = arr[left] + arr[right];

        <span class="cm">// WHY: Sorted array lets us decide which pointer to move</span>
        <span class="cm">// Too big → move right inward (smaller). Too small → move left (bigger)</span>
        <span class="kw">if</span> (sum == target) <span class="kw">return new</span> <span class="tp">int</span>[] { left, right };
        <span class="kw">else if</span> (sum &lt; target) left++;
        <span class="kw">else</span> right--;
    }
    <span class="kw">return new</span> <span class="tp">int</span>[<span class="nm">0</span>];
}

<span class="cm">// ─── REAL EXAMPLE: Container With Most Water ───</span>
<span class="cm">// Input: height=[1,8,6,2,5,4,8,3,7]  Output: 49</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">maxArea</span>(<span class="tp">int</span>[] height) {
    <span class="tp">int</span> left = <span class="nm">0</span>, right = height.length - <span class="nm">1</span>;
    <span class="tp">int</span> maxWater = <span class="nm">0</span>;

    <span class="kw">while</span> (left &lt; right) {
        <span class="cm">// Area = width × min(heights)</span>
        <span class="tp">int</span> area = (right - left) * Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, area);

        <span class="cm">// Move the shorter side — it's the bottleneck</span>
        <span class="kw">if</span> (height[left] &lt; height[right]) left++;
        <span class="kw">else</span> right--;
    }
    <span class="kw">return</span> maxWater;
}`
    },
    memoryHack: {
      oneSentence: 'On a sorted array, squeeze two pointers inward — too small means move left up, too big means move right down.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'Init L=0 R=end', type: 'start', x: 290, y: 20 },
          { id: 'cond', label: 'L < R?', type: 'decision', x: 290, y: 75 },
          { id: 'sum', label: 'Calc sum', type: 'action', x: 290, y: 135 },
          { id: 'eq', label: '== target?', type: 'decision', x: 290, y: 195 },
          { id: 'ret', label: 'Return [L,R]', type: 'end', x: 100, y: 195 },
          { id: 'less', label: '< target?', type: 'decision', x: 480, y: 195 },
          { id: 'incL', label: 'L += 1', type: 'action', x: 400, y: 245 },
          { id: 'decR', label: 'R -= 1', type: 'action', x: 540, y: 245 },
          { id: 'none', label: 'Return -1', type: 'end', x: 100, y: 75 }
        ],
        edges: [
          { from: 'start', to: 'cond', label: '' },
          { from: 'cond', to: 'sum', label: 'YES' },
          { from: 'cond', to: 'none', label: 'NO' },
          { from: 'sum', to: 'eq', label: '' },
          { from: 'eq', to: 'ret', label: 'YES' },
          { from: 'eq', to: 'less', label: 'NO' },
          { from: 'less', to: 'incL', label: 'YES' },
          { from: 'less', to: 'decR', label: 'NO' },
          { from: 'incL', to: 'cond', label: '' },
          { from: 'decR', to: 'cond', label: '' }
        ]
      },
      annotatedCode: [
        { line: 'int[] twoSum(int[] arr, int target) {', stepId: 'start', note: 'Sorted array required', color: '#5a5f70' },
        { line: '    int left = 0, right = arr.length - 1;', stepId: 'start', note: 'Pointers at both extremes', color: '#00cfff' },
        { line: '    while (left < right) {', stepId: 'cond', note: 'They must not cross', color: '#ffd600' },
        { line: '        int total = arr[left] + arr[right];', stepId: 'sum', note: 'Sum the two pointed-at values', color: '#a78bfa' },
        { line: '        if (total == target)', stepId: 'eq', note: 'Exact match?', color: '#ffd600' },
        { line: '            return new int[]{left, right};', stepId: 'ret', note: 'Found the pair!', color: '#00ff88' },
        { line: '        else if (total < target)', stepId: 'less', note: 'Need bigger left value', color: '#ffd600' },
        { line: '            left++;', stepId: 'incL', note: 'Move left RIGHT to increase sum', color: '#00cfff' },
        { line: '        else', stepId: 'less', note: 'Need smaller right value', color: '#a78bfa' },
        { line: '            right--;', stepId: 'decR', note: 'Move right LEFT to decrease sum', color: '#00cfff' },
        { line: '    } return new int[]{};', stepId: 'none', note: 'Pointers crossed — no valid pair', color: '#5a5f70' }
      ],
      stateSnapshots: [
        { label: 'Init', art: '[1, 3, 5, 7, 9]  L=0(1) R=4(9)  sum=10', annotation: 'target=10. Found on first try!' },
        { label: 'Alt Step 1', art: '[1, 3, 5, 7, 9]  L=0(1) R=4(9)  sum=10 > 8', annotation: 'target=8. Too big — R moves left' },
        { label: 'Alt Step 2', art: '[1, 3, 5, 7, 9]  L=0(1) R=3(7)  sum=8 == 8', annotation: 'Sum matches! Return [0,3]' },
        { label: 'Alt2 Step 1', art: '[1, 3, 5, 7, 9]  L=0(1) R=4(9)  sum=10 > 4', annotation: 'target=4. Much too big — R shrinks' },
        { label: 'Alt2 Step 2', art: '[1, 3, 5, 7, 9]  L=0(1) R=1(3)  sum=4 == 4', annotation: 'Found! return [0,1]' }
      ],
      variations: [
        { name: 'Two Sum II (Sorted)', desc: 'Classic squeeze from both ends on a sorted array', problem: 'Two Sum II (#167)' },
        { name: 'Container With Most Water', desc: 'Move the shorter wall inward to potentially find more area', problem: 'Container With Most Water (#11)' },
        { name: 'Valid Palindrome', desc: 'Two pointers from ends — skip non-alphanumeric, compare chars', problem: 'Valid Palindrome (#125)' },
        { name: '3Sum', desc: 'Sort array. Fix one number, two-pointer squeeze on the rest. Skip duplicates to avoid repeat triplets.', problem: '3Sum (#15)' }
      ],
      title: 'Two Pointers — Squeeze Inward',
      mnemonic: 'TOO SMALL? Move left up. TOO BIG? Move right down.',
      steps: ['Set left=0 right=end','Compute sum','==target: return','<target: left++','>target: right--'],
      why: 'Sorting + two pointers eliminates pairs intelligently, reducing O(n²) to O(n).'
    },
    cheat: {
      trigger: 'sorted array, pair sum, palindrome, two ends, container water',
      firstLine: 'int left = 0, right = arr.length - 1;',
      gotcha: 'Forgetting array must be sorted first for sum-based problems',
      pitch: "Since the array is sorted, I'll use two pointers from both ends, narrowing based on the sum comparison in O(n).",
      snippet: `<span class="cm">// WHY two ends? Sorted → sum too small means left++, too big means right--</span>
<span class="kw">int</span> L = <span class="nm">0</span>, R = nums.length - <span class="nm">1</span>;
<span class="kw">while</span> (L &lt; R) {
    <span class="kw">int</span> sum = nums[L] + nums[R];
    <span class="kw">if</span> (sum == target) <span class="kw">return new</span> <span class="kw">int</span>[]{L, R};
    <span class="kw">else if</span> (sum &lt; target) L++;  <span class="cm">// need bigger → move left up</span>
    <span class="kw">else</span> R--;                    <span class="cm">// need smaller → move right down</span>
}`
    }
  },
  {
    icon: '🪟', name: 'Sliding Window', accent: '#a78bfa',
    tagline: 'A subarray/substring that moves forward',
    hook: "Imagine a train with exactly 3 windows. As the train moves forward, the back window closes and a new front window opens. The 'view' (your subarray) always has 3 windows, but you see new scenery each time. You never have to go BACK to look — just keep sliding forward. That's why it's O(n) instead of checking every possible group!",
    svg: `<svg viewBox="0 0 600 280" style="max-height:280px;width:100%"><style>@keyframes sw-slide{0%,15%{x:65}25%,40%{x:125}50%,65%{x:185}75%,90%{x:245}100%{x:65}} @keyframes sw-sum{0%,15%{opacity:1}16%,24%{opacity:0}25%,40%{opacity:1}41%,49%{opacity:0}50%,65%{opacity:1}66%,74%{opacity:0}75%,90%{opacity:1}91%,100%{opacity:0}}</style><rect width="600" height="280" fill="#0e1018" rx="8"/><text x="300" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Sliding Window: Max sum of size k=3</text><text x="300" y="48" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Array: [2, 1, 5, 1, 3, 2]</text><rect x="75" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="100" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">2</text><rect x="135" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="160" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">1</text><rect x="195" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="220" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">5</text><rect x="255" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="280" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">1</text><rect x="315" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="340" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">3</text><rect x="375" y="65" width="50" height="45" fill="#1a1d2e" stroke="#1e2230" rx="4"/><text x="400" y="93" fill="#e8eaf0" text-anchor="middle" font-size="18">2</text><rect style="animation:sw-slide 6s ease-in-out infinite" y="60" width="170" height="55" fill="none" stroke="#a78bfa" stroke-width="3" rx="8"/><rect x="50" y="140" width="500" height="120" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="300" y="165" fill="#a78bfa" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">Window slides → add right, remove left</text><text x="70" y="190" fill="#00ff88" font-size="12" font-family="monospace">Window [2,1,5] → sum=8</text><text x="70" y="210" fill="#ffd600" font-size="12" font-family="monospace">Window [1,5,1] → sum=7  (removed 2, added 1)</text><text x="70" y="230" fill="#00cfff" font-size="12" font-family="monospace">Window [5,1,3] → sum=9  ← MAX! ✓</text><text x="70" y="250" fill="#a78bfa" font-size="12" font-family="monospace">Window [1,3,2] → sum=6</text></svg>`,
    complexity: [
      {badge:'red', big:'O(n²)', label:'BRUTE FORCE', desc:'Check every possible subarray'},
      {badge:'green', big:'O(n)', label:'SLIDING WINDOW', desc:'Single pass, expand right, shrink left'}
    ],
    meterWidth: '90%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># SLIDING WINDOW — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># WHEN TO USE: Subarray, substring, consecutive, k elements</span>
<span class="cm"># TIME: O(n) | SPACE: O(1) or O(k)</span>
<span class="cm"># ═══════════════════════════════</span>

<span class="kw">def</span> <span class="fn">sliding_window_template</span>(arr, k):
    left = <span class="nm">0</span>
    window_sum = <span class="nm">0</span>
    max_sum = <span class="fn">float</span>(<span class="st">'-inf'</span>)

    <span class="kw">for</span> right <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(arr)):
        <span class="cm"># Expand: add right element to window</span>
        window_sum += arr[right]

        <span class="cm"># Shrink: when window exceeds size k</span>
        <span class="kw">if</span> right - left + <span class="nm">1</span> &gt; k:
            window_sum -= arr[left]
            left += <span class="nm">1</span>

        <span class="cm"># Update answer when window is valid</span>
        <span class="kw">if</span> right - left + <span class="nm">1</span> == k:
            max_sum = <span class="fn">max</span>(max_sum, window_sum)

    <span class="kw">return</span> max_sum

<span class="cm"># ─── REAL EXAMPLE: Longest Substring Without Repeating ───</span>
<span class="cm"># Input: s="abcabcbb"  Output: 3 ("abc")</span>

<span class="kw">def</span> <span class="fn">lengthOfLongestSubstring</span>(s):
    char_set = <span class="fn">set</span>()
    left = <span class="nm">0</span>
    max_len = <span class="nm">0</span>

    <span class="kw">for</span> right <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(s)):
        <span class="cm"># Shrink window until no duplicate</span>
        <span class="kw">while</span> s[right] <span class="kw">in</span> char_set:
            char_set.remove(s[left])
            left += <span class="nm">1</span>
        char_set.add(s[right])
        max_len = <span class="fn">max</span>(max_len, right - left + <span class="nm">1</span>)

    <span class="kw">return</span> max_len`,
      csharp: `<span class="cm">// SLIDING WINDOW TEMPLATE — O(n)</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">SlidingWindowTemplate</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> k) {
    <span class="tp">int</span> left = <span class="nm">0</span>, windowSum = <span class="nm">0</span>, maxSum = <span class="tp">int</span>.MinValue;
    <span class="kw">for</span> (<span class="tp">int</span> right = <span class="nm">0</span>; right &lt; arr.Length; right++) {
        windowSum += arr[right];
        <span class="kw">if</span> (right - left + <span class="nm">1</span> &gt; k) { windowSum -= arr[left]; left++; }
        <span class="kw">if</span> (right - left + <span class="nm">1</span> == k) maxSum = Math.Max(maxSum, windowSum);
    }
    <span class="kw">return</span> maxSum;
}

<span class="cm">// ─── Longest Substring Without Repeating ───</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">LengthOfLongestSubstring</span>(<span class="tp">string</span> s) {
    <span class="kw">var</span> set = <span class="kw">new</span> <span class="tp">HashSet</span>&lt;<span class="tp">char</span>&gt;();
    <span class="tp">int</span> left = <span class="nm">0</span>, maxLen = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">int</span> right = <span class="nm">0</span>; right &lt; s.Length; right++) {
        <span class="kw">while</span> (set.Contains(s[right])) { set.Remove(s[left]); left++; }
        set.Add(s[right]);
        maxLen = Math.Max(maxLen, right - left + <span class="nm">1</span>);
    }
    <span class="kw">return</span> maxLen;
}`,
      java: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// SLIDING WINDOW — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Subarray, substring, consecutive, k elements</span>
<span class="cm">// TIME: O(n) | SPACE: O(1) or O(k)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">slidingWindowTemplate</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> k) {
    <span class="tp">int</span> left = <span class="nm">0</span>, windowSum = <span class="nm">0</span>, maxSum = Integer.MIN_VALUE;

    <span class="kw">for</span> (<span class="tp">int</span> right = <span class="nm">0</span>; right &lt; arr.length; right++) {
        <span class="cm">// EXPAND: Add right element to window</span>
        windowSum += arr[right];

        <span class="cm">// SHRINK: When window exceeds size k</span>
        <span class="kw">if</span> (right - left + <span class="nm">1</span> &gt; k) {
            windowSum -= arr[left];
            left++;
        }

        <span class="cm">// UPDATE: Answer when window is valid</span>
        <span class="kw">if</span> (right - left + <span class="nm">1</span> == k)
            maxSum = Math.max(maxSum, windowSum);
    }
    <span class="kw">return</span> maxSum;
}

<span class="cm">// ─── REAL EXAMPLE: Longest Substring Without Repeating ───</span>
<span class="cm">// Input: s="abcabcbb"  Output: 3 ("abc")</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">lengthOfLongestSubstring</span>(<span class="tp">String</span> s) {
    <span class="tp">Set</span>&lt;<span class="tp">Character</span>&gt; set = <span class="kw">new</span> <span class="tp">HashSet</span>&lt;&gt;();
    <span class="tp">int</span> left = <span class="nm">0</span>, maxLen = <span class="nm">0</span>;

    <span class="kw">for</span> (<span class="tp">int</span> right = <span class="nm">0</span>; right &lt; s.length(); right++) {
        <span class="cm">// SHRINK: Remove left chars until no duplicate</span>
        <span class="kw">while</span> (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + <span class="nm">1</span>);
    }
    <span class="kw">return</span> maxLen;
}`
    },
    memoryHack: {
      oneSentence: 'Expand the window right to explore, shrink it left to restore the invariant, and track the best seen so far.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'Init L=0 seen={}', type: 'start', x: 290, y: 20 },
          { id: 'expand', label: 'Expand right', type: 'action', x: 290, y: 75 },
          { id: 'dup', label: 'Duplicate?', type: 'decision', x: 290, y: 135 },
          { id: 'shrink', label: 'Remove s[L] L++', type: 'action', x: 100, y: 135 },
          { id: 'add', label: 'Add s[R] to set', type: 'action', x: 480, y: 135 },
          { id: 'update', label: 'Update max', type: 'action', x: 480, y: 195 },
          { id: 'next', label: 'R < len?', type: 'decision', x: 290, y: 245 },
          { id: 'done', label: 'Return max', type: 'end', x: 100, y: 245 }
        ],
        edges: [
          { from: 'start', to: 'expand', label: '' },
          { from: 'expand', to: 'dup', label: '' },
          { from: 'dup', to: 'shrink', label: 'YES' },
          { from: 'shrink', to: 'dup', label: '' },
          { from: 'dup', to: 'add', label: 'NO' },
          { from: 'add', to: 'update', label: '' },
          { from: 'update', to: 'next', label: '' },
          { from: 'next', to: 'expand', label: 'YES' },
          { from: 'next', to: 'done', label: 'NO' }
        ]
      },
      annotatedCode: [
        { line: 'int lengthOfLongestSubstring(String s) {', stepId: 'start', note: 'Find longest substring with all unique chars', color: '#5a5f70' },
        { line: '    Set<Character> seen = new HashSet<>();', stepId: 'start', note: 'Tracks chars in current window', color: '#00cfff' },
        { line: '    int left = 0, result = 0;', stepId: 'start', note: 'Left boundary + best answer', color: '#00cfff' },
        { line: '    for (int right = 0; right < s.length(); right++) {', stepId: 'expand', note: 'Right pointer always advances', color: '#a78bfa' },
        { line: '        while (seen.contains(s.charAt(right))) {', stepId: 'dup', note: 'Invariant broken? Shrink!', color: '#ffd600' },
        { line: '            seen.remove(s.charAt(left));', stepId: 'shrink', note: 'Evict leftmost char', color: '#ff4d6d' },
        { line: '            left++;', stepId: 'shrink', note: 'Slide left forward', color: '#ff4d6d' },
        { line: '        }', stepId: 'dup', note: '', color: '#ffd600' },
        { line: '        seen.add(s.charAt(right));', stepId: 'add', note: 'Window is valid again', color: '#00ff88' },
        { line: '        result = Math.max(result, right - left + 1);', stepId: 'update', note: 'Window size = right - left + 1', color: '#00ff88' },
        { line: '    } return result;', stepId: 'done', note: 'Return longest valid window', color: '#5a5f70' }
      ],
      stateSnapshots: [
        { label: 'Step 1', art: 's="abcabcbb"  R=0  window=[a]       seen={a}       max=1', annotation: 'Window starts with "a"' },
        { label: 'Step 2', art: 's="abcabcbb"  R=1  window=[a,b]     seen={a,b}     max=2', annotation: 'Expand — "b" is unique' },
        { label: 'Step 3', art: 's="abcabcbb"  R=2  window=[a,b,c]   seen={a,b,c}   max=3', annotation: 'Expand — "c" is unique, max=3' },
        { label: 'Step 4', art: 's="abcabcbb"  R=3  s[R]="a" dup!  shrink L:0→1  seen={b,c}', annotation: '"a" duplicate — remove s[0], L becomes 1' },
        { label: 'Step 5', art: 's="abcabcbb"  R=3  window=[b,c,a]   seen={b,c,a}   max=3', annotation: 'Add "a" back — window valid, still max=3' }
      ],
      variations: [
        { name: 'Longest Unique Substring', desc: 'Grow right, shrink left on duplicate, track max window size', problem: 'Longest Substring Without Repeating (#3)' },
        {
          name: 'Longest Repeating Character Replacement',
          desc: `🎯 THE TRICK: Track max_frequency in window. Window is VALID when (window_size - max_freq) ≤ k.

WHY? In any window, you want to KEEP the most frequent character and REPLACE everything else. If you need to replace more than k characters, shrink the window.

FORMULA: replacements_needed = (right - left + 1) - max_freq
• If replacements_needed ≤ k → window is VALID ✅
• If replacements_needed > k → SHRINK from left ❌

EXAMPLE: s="AABABBA", k=1
Window [AABA]: size=4, maxFreq('A')=3 → need 4-3=1 replacement ✅
Window [AABAB]: size=5, maxFreq('A')=3 → need 5-3=2 replacements ❌ (shrink!)

CODE PATTERN:
int[] count = new int[26];
int maxFreq = 0, left = 0, result = 0;
for (int right = 0; right < s.length(); right++) {
    count[s.charAt(right) - 'A']++;
    maxFreq = Math.max(maxFreq, count[s.charAt(right) - 'A']);

    // If invalid window: too many replacements needed
    while ((right - left + 1) - maxFreq > k) {
        count[s.charAt(left) - 'A']--;
        left++;
    }
    result = Math.max(result, right - left + 1);
}`,
          problem: 'Longest Repeating Character Replacement (#424)'
        },
        { name: 'Minimum Window Substring', desc: 'Expand to satisfy all chars, then shrink to minimize', problem: 'Minimum Window Substring (#76)' },
        { name: 'Best Time to Buy/Sell', desc: 'Track min price (left) while scanning for max profit', problem: 'Best Time to Buy and Sell Stock (#121)' }
      ],
      title: 'Sliding Window — Expand & Shrink',
      mnemonic: 'EXPAND right, SHRINK left, RECORD the best',
      steps: ['Init left=0 seen=set()','For each right: expand','While broken: shrink left','Add s[right], update max'],
      why: 'The sliding window avoids re-examining elements — O(n) total.'
    },
    cheat: {
      trigger: 'subarray, substring, consecutive, k elements, longest/shortest',
      firstLine: 'int left = 0; for (int right = 0; right < s.length(); right++)',
      gotcha: 'Forgetting to shrink window when condition is violated',
      pitch: "I'll maintain a sliding window that expands right and contracts left, tracking the optimal subarray in O(n).",
      snippet: `<span class="cm">// WHY sliding window? Each element enters &amp; exits once → O(n)</span>
<span class="tp">Set</span>&lt;<span class="tp">Character</span>&gt; seen = <span class="kw">new</span> <span class="fn">HashSet</span>&lt;&gt;();
<span class="kw">int</span> left = <span class="nm">0</span>, max = <span class="nm">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> right = <span class="nm">0</span>; right &lt; s.<span class="fn">length</span>(); right++) {
    <span class="kw">while</span> (seen.<span class="fn">contains</span>(s.<span class="fn">charAt</span>(right))) seen.<span class="fn">remove</span>(s.<span class="fn">charAt</span>(left++)); <span class="cm">// shrink</span>
    seen.<span class="fn">add</span>(s.<span class="fn">charAt</span>(right));  <span class="cm">// expand</span>
    max = Math.<span class="fn">max</span>(max, right - left + <span class="nm">1</span>);
}`
    }
  },
  {
    icon: '📚', name: 'Stack', accent: '#fb923c',
    tagline: 'Last in, first out — when order matters',
    hook: "Think of a stack of plates in a cafeteria. You can only grab the TOP plate. When someone adds a plate, it goes on TOP. The last plate added is the first one taken — that's LIFO (Last In, First Out). Stacks are perfect when you need to remember 'what was the last thing I saw?' like matching opening and closing brackets!",
    svg: `<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes stk-push{0%{transform:translateY(-60px);opacity:0}30%{transform:translateY(0);opacity:1}100%{transform:translateY(0);opacity:1}} @keyframes stk-pop{0%,70%{transform:translateY(0);opacity:1}100%{transform:translateY(-60px);opacity:0}} @keyframes stk-in{0%,100%{opacity:1}50%{opacity:.5}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="170" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">PUSH (add to top)</text><text x="430" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">POP (remove from top)</text><rect x="120" y="220" width="100" height="35" fill="#1a1d2e" stroke="#fb923c" rx="4"/><text x="170" y="243" fill="#fb923c" text-anchor="middle" font-size="14" font-family="monospace">A</text><rect x="120" y="180" width="100" height="35" fill="#1a1d2e" stroke="#00cfff" rx="4"/><text x="170" y="203" fill="#00cfff" text-anchor="middle" font-size="14" font-family="monospace">B</text><rect x="120" y="140" width="100" height="35" fill="#1a1d2e" stroke="#a78bfa" rx="4" style="animation:stk-push 3s ease-out infinite"/><text x="170" y="163" fill="#a78bfa" text-anchor="middle" font-size="14" font-family="monospace">C ← NEW</text><text x="170" y="118" fill="#00ff88" font-size="11" text-anchor="middle" font-family="monospace">↓ Push C on top</text><line x1="100" y1="260" x2="240" y2="260" stroke="#fb923c" stroke-width="2"/><rect x="380" y="220" width="100" height="35" fill="#1a1d2e" stroke="#fb923c" rx="4"/><text x="430" y="243" fill="#fb923c" text-anchor="middle" font-size="14" font-family="monospace">A</text><rect x="380" y="180" width="100" height="35" fill="#1a1d2e" stroke="#00cfff" rx="4"/><text x="430" y="203" fill="#00cfff" text-anchor="middle" font-size="14" font-family="monospace">B</text><rect x="380" y="140" width="100" height="35" fill="#1a1d2e" stroke="#ff4d6d" rx="4" style="animation:stk-pop 3s ease-in infinite"/><text x="430" y="163" fill="#ff4d6d" text-anchor="middle" font-size="14" font-family="monospace">C → OUT</text><text x="430" y="118" fill="#ff4d6d" font-size="11" text-anchor="middle" font-family="monospace">↑ Pop C from top</text><line x1="360" y1="260" x2="500" y2="260" stroke="#fb923c" stroke-width="2"/><text x="300" y="290" fill="#fb923c" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold">LIFO: Last In, First Out</text></svg>`,
    complexity: [
      {badge:'red', big:'O(n²)', label:'BRUTE FORCE', desc:'Nested scan for next greater element'},
      {badge:'green', big:'O(n)', label:'MONOTONIC STACK', desc:'Single pass with stack tracking'}
    ],
    meterWidth: '88%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># STACK — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># WHEN TO USE: Matching brackets, next greater, undo ops</span>
<span class="cm"># TIME: O(n) | SPACE: O(n)</span>
<span class="cm"># ═══════════════════════════════</span>

<span class="kw">def</span> <span class="fn">stack_template</span>(arr):
    stack = []
    result = []

    <span class="kw">for</span> item <span class="kw">in</span> arr:
        <span class="cm"># Process: pop while condition met</span>
        <span class="kw">while</span> stack <span class="kw">and</span> condition(stack[-<span class="nm">1</span>], item):
            stack.pop()
        stack.append(item)

    <span class="kw">return</span> result

<span class="cm"># ─── REAL EXAMPLE: Valid Parentheses ───</span>
<span class="cm"># Input: "()[]{}"  Output: True</span>

<span class="kw">def</span> <span class="fn">isValid</span>(s):
    pairs = {<span class="st">')'</span>:<span class="st">'('</span>, <span class="st">']'</span>:<span class="st">'['</span>, <span class="st">'}'</span>:<span class="st">'{'</span>}
    stack = []
    <span class="kw">for</span> c <span class="kw">in</span> s:
        <span class="kw">if</span> c <span class="kw">in</span> pairs:
            <span class="kw">if not</span> stack <span class="kw">or</span> stack.pop() != pairs[c]:
                <span class="kw">return False</span>
        <span class="kw">else</span>:
            stack.append(c)
    <span class="kw">return</span> <span class="fn">len</span>(stack) == <span class="nm">0</span>`,
      csharp: `<span class="cm">// STACK TEMPLATE — O(n)</span>
<span class="kw">public</span> <span class="tp">bool</span> <span class="fn">IsValid</span>(<span class="tp">string</span> s) {
    <span class="kw">var</span> pairs = <span class="kw">new</span> <span class="tp">Dictionary</span>&lt;<span class="tp">char</span>,<span class="tp">char</span>&gt;{
        {<span class="st">')'</span>,<span class="st">'('</span>},{<span class="st">']'</span>,<span class="st">'['</span>},{<span class="st">'}'</span>,<span class="st">'{'</span>}};
    <span class="kw">var</span> stack = <span class="kw">new</span> <span class="tp">Stack</span>&lt;<span class="tp">char</span>&gt;();
    <span class="kw">foreach</span> (<span class="tp">char</span> c <span class="kw">in</span> s) {
        <span class="kw">if</span> (pairs.ContainsKey(c)) {
            <span class="kw">if</span> (stack.Count==<span class="nm">0</span>||stack.Pop()!=pairs[c]) <span class="kw">return false</span>;
        } <span class="kw">else</span> stack.Push(c);
    }
    <span class="kw">return</span> stack.Count==<span class="nm">0</span>;
}`,
      java: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// STACK — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Matching brackets, next greater, undo ops</span>
<span class="cm">// TIME: O(n) | SPACE: O(n)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">isValid</span>(<span class="tp">String</span> s) {
    <span class="cm">// SETUP: Map closer→opener for quick matching</span>
    <span class="tp">Map</span>&lt;<span class="tp">Character</span>,<span class="tp">Character</span>&gt; pairs = <span class="tp">Map</span>.of(<span class="st">')'</span>,<span class="st">'('</span>,<span class="st">']'</span>,<span class="st">'['</span>,<span class="st">'}'</span>,<span class="st">'{'</span>);
    <span class="tp">Deque</span>&lt;<span class="tp">Character</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;();

    <span class="kw">for</span> (<span class="tp">char</span> c : s.toCharArray()) {
        <span class="kw">if</span> (pairs.containsKey(c)) {
            <span class="cm">// CLOSING bracket: top must match its opener</span>
            <span class="kw">if</span> (stack.isEmpty() || stack.pop() != pairs.get(c))
                <span class="kw">return false</span>;
        } <span class="kw">else</span> {
            <span class="cm">// OPENING bracket: push and wait for closer</span>
            stack.push(c);
        }
    }
    <span class="cm">// Valid only if all openers matched</span>
    <span class="kw">return</span> stack.isEmpty();
}

<span class="cm">// ─── REAL EXAMPLE: Daily Temperatures ───</span>
<span class="cm">// Monotonic Stack — find next warmer day</span>
<span class="cm">// Input: temps=[73,74,75,71,69,72,76,73]  Output: [1,1,4,2,1,1,0,0]</span>

<span class="kw">public</span> <span class="tp">int</span>[] <span class="fn">dailyTemperatures</span>(<span class="tp">int</span>[] temps) {
    <span class="tp">int</span>[] result = <span class="kw">new</span> <span class="tp">int</span>[temps.length];
    <span class="tp">Deque</span>&lt;<span class="tp">Integer</span>&gt; stack = <span class="kw">new</span> <span class="tp">ArrayDeque</span>&lt;&gt;(); <span class="cm">// stores indices</span>

    <span class="kw">for</span> (<span class="tp">int</span> i = <span class="nm">0</span>; i &lt; temps.length; i++) {
        <span class="cm">// WHY: Pop all colder days — current is their answer</span>
        <span class="kw">while</span> (!stack.isEmpty() &amp;&amp; temps[i] &gt; temps[stack.peek()]) {
            <span class="tp">int</span> idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }
    <span class="kw">return</span> result;
}`
    },
    memoryHack: {
      oneSentence: 'Push every opener, and when you hit a closer, the top of the stack must be its exact match or the string is invalid.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'Init stack=[]', type: 'start', x: 290, y: 20 },
          { id: 'loop', label: 'For each char', type: 'action', x: 290, y: 70 },
          { id: 'close', label: 'Is closing?', type: 'decision', x: 290, y: 130 },
          { id: 'match', label: 'Top matches?', type: 'decision', x: 100, y: 130 },
          { id: 'pop', label: 'Pop stack', type: 'action', x: 100, y: 195 },
          { id: 'fail', label: 'Return False', type: 'end', x: 100, y: 30 },
          { id: 'push', label: 'Push to stack', type: 'action', x: 480, y: 130 },
          { id: 'empty', label: 'Stack empty?', type: 'decision', x: 290, y: 245 },
          { id: 'true', label: 'Return True', type: 'end', x: 480, y: 245 }
        ],
        edges: [
          { from: 'start', to: 'loop', label: '' },
          { from: 'loop', to: 'close', label: '' },
          { from: 'close', to: 'match', label: 'YES' },
          { from: 'close', to: 'push', label: 'NO' },
          { from: 'match', to: 'pop', label: 'YES' },
          { from: 'match', to: 'fail', label: 'NO' },
          { from: 'pop', to: 'loop', label: '' },
          { from: 'push', to: 'loop', label: '' },
          { from: 'loop', to: 'empty', label: '' },
          { from: 'empty', to: 'true', label: 'YES' },
          { from: 'empty', to: 'fail', label: 'NO' }
        ]
      },
      annotatedCode: [
        { line: 'boolean isValid(String s) {', stepId: 'start', note: 'Check if parentheses are valid', color: '#5a5f70' },
        { line: '    Deque<Character> stack = new ArrayDeque<>();', stepId: 'start', note: 'Stack holds unmatched openers', color: '#00cfff' },
        { line: '    // Map each closer to its opener: ) → ( , } → { , ] → [', stepId: 'start', note: 'Map closer to its opener', color: '#00cfff' },
        { line: '    for (char c : s.toCharArray()) {', stepId: 'loop', note: 'Process one char at a time', color: '#a78bfa' },
        { line: '        if (pairs.containsKey(c)) {', stepId: 'close', note: 'Is this a closing bracket?', color: '#ffd600' },
        { line: '            if (stack.isEmpty() || stack.peek() != pairs.get(c))', stepId: 'match', note: 'Stack empty OR top mismatch?', color: '#ffd600' },
        { line: '                return false;', stepId: 'fail', note: 'Mismatch — invalid', color: '#ff4d6d' },
        { line: '            stack.pop();', stepId: 'pop', note: 'Match found — remove opener', color: '#00ff88' },
        { line: '        } else {', stepId: 'close', note: 'Opening bracket', color: '#a78bfa' },
        { line: '            stack.push(c);', stepId: 'push', note: 'Push — wait for closer', color: '#00cfff' },
        { line: '    }} return stack.isEmpty();', stepId: 'empty', note: 'Valid only if all matched', color: '#00ff88' }
      ],
      stateSnapshots: [
        { label: 'Step 1', art: 'char="("   stack=["("]', annotation: 'Push opening paren' },
        { label: 'Step 2', art: 'char="{"   stack=["(", "{"]', annotation: 'Push opening brace' },
        { label: 'Step 3', art: 'char="["   stack=["(", "{", "["]', annotation: 'Push opening bracket' },
        { label: 'Step 4', art: 'char="]"   top="[" matches → pop!  stack=["(", "{"]', annotation: '"]" matches "[" — pop' },
        { label: 'Step 5', art: 'char="}"   top="{" matches → pop!  stack=["("]', annotation: '"}" matches "{" — pop' },
        { label: 'Step 6', art: 'char=")"   top="(" matches → pop!  stack=[]  → True', annotation: '")" matches "(" — stack empty, valid!' }
      ],
      variations: [
        { name: 'Valid Parentheses', desc: 'Push openers, pop and match closers, check stack empty', problem: 'Valid Parentheses (#20)' },
        { name: 'Daily Temperatures', desc: 'Monotonic stack — pop smaller temps when warmer arrives', problem: 'Daily Temperatures (#739)' },
        { name: 'Largest Rectangle', desc: 'Monotonic stack tracks increasing heights for max area', problem: 'Largest Rectangle in Histogram (#84)' }
      ],
      title: 'Stack — Push Open, Pop & Match',
      mnemonic: 'PUSH openers, POP on closers, MATCH or FAIL',
      steps: ['Init stack=[] and closer→opener map','Closing? Check top matches','Match: pop. Mismatch: False','Opening: push. End: stack empty?'],
      why: 'A stack models nesting — most recent opener must match next closer (LIFO).'
    },
    cheat: {
      trigger: 'matching brackets, next greater/smaller, undo, nested structure, monotonic',
      firstLine: 'Deque<Integer> stack = new ArrayDeque<>();',
      gotcha: 'Calling stack.pop() on an empty stack — always check length first',
      pitch: "I'll use a stack to track the most recent unmatched element, processing in O(n) with LIFO order.",
      snippet: `<span class="cm">// WHY stack? LIFO matches innermost bracket first — natural nesting</span>
<span class="tp">Deque</span>&lt;<span class="tp">Character</span>&gt; stack = <span class="kw">new</span> <span class="fn">ArrayDeque</span>&lt;&gt;();
<span class="kw">for</span> (<span class="kw">char</span> c : s.<span class="fn">toCharArray</span>()) {
    <span class="kw">if</span> (c == <span class="st">'('</span> || c == <span class="st">'{'</span> || c == <span class="st">'['</span>) stack.<span class="fn">push</span>(c);
    <span class="kw">else if</span> (stack.<span class="fn">isEmpty</span>() || !<span class="fn">matches</span>(stack.<span class="fn">pop</span>(), c)) <span class="kw">return false</span>;
}
<span class="kw">return</span> stack.<span class="fn">isEmpty</span>();  <span class="cm">// all openers matched?</span>`
    }
  },
  {
    icon: '🔍', name: 'Binary Search', accent: '#34d399',
    tagline: 'Eliminate half the search space every step',
    hook: "You're guessing a number between 1 and 100. A bad guesser goes 1, 2, 3... A smart kid ALWAYS guesses 50 first. Too high? Now you know it's 1-49 — guess 25. Too low? It's 26-49 — guess 37. Each guess cuts the possibilities in HALF. 100 items? Only 7 guesses needed. A million items? Just 20 guesses. That's the power of cutting in half!",
    svg: `<svg viewBox="0 0 600 300" style="max-height:300px;width:100%"><style>@keyframes bs-hi1{0%,20%{opacity:1}25%,100%{opacity:.15}} @keyframes bs-hi2{0%,45%{opacity:1}50%,100%{opacity:.15}} @keyframes bs-found{0%,65%{stroke:#1e2230}70%,95%{stroke:#00ff88}100%{stroke:#1e2230}}</style><rect width="600" height="300" fill="#0e1018" rx="8"/><text x="300" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Binary Search: Find target = 7</text><rect x="55" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi1 5s infinite"/><text x="80" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">1</text><rect x="115" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi1 5s infinite"/><text x="140" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">3</text><rect x="175" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi1 5s infinite"/><text x="200" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">5</text><rect x="235" y="55" width="50" height="40" fill="#1a1d2e" stroke="#ffd600" rx="4"/><text x="260" y="80" fill="#ffd600" text-anchor="middle" font-size="15">7</text><rect x="295" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi2 5s infinite"/><text x="320" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">9</text><rect x="355" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi1 5s infinite"/><text x="380" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">11</text><rect x="415" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi1 5s infinite"/><text x="440" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">13</text><rect x="475" y="55" width="50" height="40" fill="#1a1d2e" stroke="#1e2230" rx="4" style="animation:bs-hi1 5s infinite"/><text x="500" y="80" fill="#e8eaf0" text-anchor="middle" font-size="15">15</text><rect x="50" y="115" width="480" height="170" fill="#1a1d2e" rx="8" stroke="#1e2230"/><text x="290" y="140" fill="#34d399" text-anchor="middle" font-size="13" font-weight="bold" font-family="monospace">HALVING THE SEARCH SPACE</text><text x="70" y="165" fill="#ff4d6d" font-size="12" font-family="monospace">Step 1: lo=0 hi=7 mid=3 → arr[3]=7... wait, FOUND! ✓</text><text x="70" y="190" fill="#4a5268" font-size="11" font-family="monospace">But what if target=5?</text><text x="70" y="215" fill="#ffd600" font-size="12" font-family="monospace">Step 1: mid=3 → arr[3]=7 > 5 → search LEFT → hi=2</text><text x="70" y="240" fill="#00cfff" font-size="12" font-family="monospace">Step 2: mid=1 → arr[1]=3 &lt; 5 → search RIGHT → lo=2</text><text x="70" y="265" fill="#00ff88" font-size="12" font-family="monospace" font-weight="bold">Step 3: mid=2 → arr[2]=5 → FOUND at index 2! ✓</text></svg>`,
    complexity: [
      {badge:'yellow', big:'O(n)', label:'LINEAR SCAN', desc:'Check every element one by one'},
      {badge:'green', big:'O(log n)', label:'BINARY SEARCH', desc:'Halve search space each step'}
    ],
    meterWidth: '92%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># BINARY SEARCH — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># WHEN TO USE: Sorted, min/max valid, rotated search</span>
<span class="cm"># TIME: O(log n) | SPACE: O(1)</span>
<span class="cm"># ═══════════════════════════════</span>

<span class="kw">def</span> <span class="fn">binary_search</span>(arr, target):
    lo, hi = <span class="nm">0</span>, <span class="fn">len</span>(arr) - <span class="nm">1</span>

    <span class="kw">while</span> lo &lt;= hi:
        mid = lo + (hi - lo) // <span class="nm">2</span>  <span class="cm"># WHY: avoids overflow</span>

        <span class="kw">if</span> arr[mid] == target:
            <span class="kw">return</span> mid
        <span class="kw">elif</span> arr[mid] &lt; target:
            lo = mid + <span class="nm">1</span>
        <span class="kw">else</span>:
            hi = mid - <span class="nm">1</span>

    <span class="kw">return</span> -<span class="nm">1</span>

<span class="cm"># ─── REAL EXAMPLE: Search in Rotated Sorted Array ───</span>
<span class="cm"># Input: [4,5,6,7,0,1,2], target=0  Output: 4</span>

<span class="kw">def</span> <span class="fn">searchRotated</span>(nums, target):
    lo, hi = <span class="nm">0</span>, <span class="fn">len</span>(nums) - <span class="nm">1</span>
    <span class="kw">while</span> lo &lt;= hi:
        mid = lo + (hi - lo) // <span class="nm">2</span>
        <span class="kw">if</span> nums[mid] == target: <span class="kw">return</span> mid
        <span class="kw">if</span> nums[lo] &lt;= nums[mid]:  <span class="cm"># Left half sorted</span>
            <span class="kw">if</span> nums[lo] &lt;= target &lt; nums[mid]:
                hi = mid - <span class="nm">1</span>
            <span class="kw">else</span>: lo = mid + <span class="nm">1</span>
        <span class="kw">else</span>:  <span class="cm"># Right half sorted</span>
            <span class="kw">if</span> nums[mid] &lt; target &lt;= nums[hi]:
                lo = mid + <span class="nm">1</span>
            <span class="kw">else</span>: hi = mid - <span class="nm">1</span>
    <span class="kw">return</span> -<span class="nm">1</span>`,
      csharp: `<span class="cm">// BINARY SEARCH TEMPLATE — O(log n)</span>
<span class="kw">public</span> <span class="tp">int</span> <span class="fn">BinarySearch</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> target) {
    <span class="tp">int</span> lo = <span class="nm">0</span>, hi = arr.Length - <span class="nm">1</span>;
    <span class="kw">while</span> (lo &lt;= hi) {
        <span class="tp">int</span> mid = lo + (hi - lo) / <span class="nm">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] &lt; target) lo = mid + <span class="nm">1</span>;
        <span class="kw">else</span> hi = mid - <span class="nm">1</span>;
    }
    <span class="kw">return</span> -<span class="nm">1</span>;
}`,
      java: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// BINARY SEARCH — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Sorted array, search space, min/max answer</span>
<span class="cm">// TIME: O(log n) | SPACE: O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">binarySearch</span>(<span class="tp">int</span>[] arr, <span class="tp">int</span> target) {
    <span class="cm">// SETUP: Two pointers defining search space</span>
    <span class="tp">int</span> lo = <span class="nm">0</span>, hi = arr.length - <span class="nm">1</span>;

    <span class="kw">while</span> (lo &lt;= hi) {
        <span class="cm">// WHY: Avoid overflow with (lo + hi) / 2</span>
        <span class="tp">int</span> mid = lo + (hi - lo) / <span class="nm">2</span>;

        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] &lt; target) lo = mid + <span class="nm">1</span>;  <span class="cm">// target in right half</span>
        <span class="kw">else</span> hi = mid - <span class="nm">1</span>;                       <span class="cm">// target in left half</span>
    }
    <span class="kw">return</span> -<span class="nm">1</span>; <span class="cm">// not found</span>
}

<span class="cm">// ─── REAL EXAMPLE: Search Rotated Sorted Array ───</span>
<span class="cm">// Input: nums=[4,5,6,7,0,1,2], target=0  Output: 4</span>

<span class="kw">public</span> <span class="tp">int</span> <span class="fn">search</span>(<span class="tp">int</span>[] nums, <span class="tp">int</span> target) {
    <span class="tp">int</span> lo = <span class="nm">0</span>, hi = nums.length - <span class="nm">1</span>;

    <span class="kw">while</span> (lo &lt;= hi) {
        <span class="tp">int</span> mid = lo + (hi - lo) / <span class="nm">2</span>;
        <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;

        <span class="cm">// KEY: Determine which half is sorted</span>
        <span class="kw">if</span> (nums[lo] &lt;= nums[mid]) {
            <span class="cm">// Left half sorted — is target in it?</span>
            <span class="kw">if</span> (nums[lo] &lt;= target &amp;&amp; target &lt; nums[mid]) hi = mid - <span class="nm">1</span>;
            <span class="kw">else</span> lo = mid + <span class="nm">1</span>;
        } <span class="kw">else</span> {
            <span class="cm">// Right half sorted — is target in it?</span>
            <span class="kw">if</span> (nums[mid] &lt; target &amp;&amp; target &lt;= nums[hi]) lo = mid + <span class="nm">1</span>;
            <span class="kw">else</span> hi = mid - <span class="nm">1</span>;
        }
    }
    <span class="kw">return</span> -<span class="nm">1</span>;
}`
    },
    memoryHack: {
      oneSentence: 'Halve the search space every step — if middle is too small go right, too big go left, until the walls close in.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'Init L=0 R=end', type: 'start', x: 290, y: 20 },
          { id: 'cond', label: 'L <= R?', type: 'decision', x: 290, y: 80 },
          { id: 'mid', label: 'Calc mid', type: 'action', x: 290, y: 140 },
          { id: 'eq', label: '== target?', type: 'decision', x: 290, y: 195 },
          { id: 'found', label: 'Return mid', type: 'end', x: 100, y: 195 },
          { id: 'less', label: '< target?', type: 'decision', x: 480, y: 195 },
          { id: 'goR', label: 'L = mid + 1', type: 'action', x: 400, y: 245 },
          { id: 'goL', label: 'R = mid - 1', type: 'action', x: 540, y: 245 },
          { id: 'fail', label: 'Return -1', type: 'end', x: 100, y: 80 }
        ],
        edges: [
          { from: 'start', to: 'cond', label: '' },
          { from: 'cond', to: 'mid', label: 'YES' },
          { from: 'cond', to: 'fail', label: 'NO' },
          { from: 'mid', to: 'eq', label: '' },
          { from: 'eq', to: 'found', label: 'YES' },
          { from: 'eq', to: 'less', label: 'NO' },
          { from: 'less', to: 'goR', label: 'YES' },
          { from: 'less', to: 'goL', label: 'NO' },
          { from: 'goR', to: 'cond', label: '' },
          { from: 'goL', to: 'cond', label: '' }
        ]
      },
      annotatedCode: [
        { line: 'int binarySearch(int[] nums, int target) {', stepId: 'start', note: 'Classic binary search on sorted array', color: '#5a5f70' },
        { line: '    int left = 0, right = nums.length - 1;', stepId: 'start', note: 'Search space = entire array', color: '#00cfff' },
        { line: '    while (left <= right) {', stepId: 'cond', note: '<= because single element is valid', color: '#ffd600' },
        { line: '        int mid = left + (right - left) / 2;', stepId: 'mid', note: 'Avoids overflow vs (left+right)/2', color: '#a78bfa' },
        { line: '        if (nums[mid] == target)', stepId: 'eq', note: 'Exact match?', color: '#ffd600' },
        { line: '            return mid;', stepId: 'found', note: 'Found!', color: '#00ff88' },
        { line: '        else if (nums[mid] < target)', stepId: 'less', note: 'Too small — go right', color: '#ffd600' },
        { line: '            left = mid + 1;', stepId: 'goR', note: 'Discard left half', color: '#00cfff' },
        { line: '        else', stepId: 'less', note: 'Too big — go left', color: '#a78bfa' },
        { line: '            right = mid - 1;', stepId: 'goL', note: 'Discard right half', color: '#00cfff' },
        { line: '    } return -1;', stepId: 'fail', note: 'Not found', color: '#5a5f70' }
      ],
      stateSnapshots: [
        { label: 'Step 1', art: '[1, 3, 5, 7, 9, 11]  L=0 R=5  mid=2  nums[2]=5  5<7 → L=3', annotation: 'target=7. Mid too small — discard left' },
        { label: 'Step 2', art: '[1, 3, 5, 7, 9, 11]  L=3 R=5  mid=4  nums[4]=9  9>7 → R=3', annotation: 'Mid too big — discard right' },
        { label: 'Step 3', art: '[1, 3, 5, 7, 9, 11]  L=3 R=3  mid=3  nums[3]=7  FOUND!', annotation: 'Mid is 7 — return index 3' },
        { label: 'Not Found', art: '[1, 3, 5, 9, 11]  target=7  L=3 R=4 mid=3 → 9>7 R=2', annotation: 'L=3 > R=2 → return -1' }
      ],
      variations: [
        { name: 'Binary Search', desc: 'Halve sorted search space until found or empty', problem: 'Binary Search (#704)' },
        { name: 'Search Rotated Array', desc: 'Determine which half is sorted, search that half', problem: 'Search in Rotated Sorted Array (#33)' },
        { name: 'Find Min Rotated', desc: 'Compare mid to right — go toward smaller side', problem: 'Find Minimum in Rotated Sorted Array (#153)' }
      ],
      title: 'Binary Search — Halve the Space',
      mnemonic: 'LEFT wall, RIGHT wall, MIDDLE check — half disappears',
      steps: ['Set left=0 right=len-1','While left<=right calc mid','==target: return','<target: left=mid+1','>target: right=mid-1'],
      why: 'Each comparison eliminates half — O(log n).'
    },
    cheat: {
      trigger: 'sorted, minimum/maximum valid, search rotated, koko bananas',
      firstLine: 'int lo = 0, hi = arr.length - 1;',
      gotcha: 'Off-by-one: lo=mid+1 vs lo=mid, hi=mid-1 vs hi=mid',
      pitch: "The search space has a monotonic property, so I'll binary search it, halving each step for O(log n).",
      snippet: `<span class="cm">// WHY binary search? Sorted = halve search space each step → O(log n)</span>
<span class="kw">int</span> lo = <span class="nm">0</span>, hi = nums.length - <span class="nm">1</span>;
<span class="kw">while</span> (lo &lt;= hi) {
    <span class="kw">int</span> mid = lo + (hi - lo) / <span class="nm">2</span>;  <span class="cm">// overflow-safe mid</span>
    <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;
    <span class="kw">else if</span> (nums[mid] &lt; target) lo = mid + <span class="nm">1</span>;  <span class="cm">// go right</span>
    <span class="kw">else</span> hi = mid - <span class="nm">1</span>;                          <span class="cm">// go left</span>
}`
    }
  },
  {
    icon: '🔗', name: 'Linked List', accent: '#f472b6',
    tagline: 'Pointer manipulation — think before you move',
    hook: "Imagine a treasure hunt where each clue tells you where the NEXT clue is. You can't skip ahead — you MUST follow the chain. To reverse the hunt? Start collecting clues and point each one BACKWARDS. The secret weapon: a 'dummy' starting clue that simplifies everything because you never have to worry about the first clue being special.",
    svg: `<svg viewBox="0 0 600 280" style="max-height:280px;width:100%"><style>@keyframes ll-rev1{0%,30%{transform:scaleX(1)}40%,100%{transform:scaleX(-1)}} @keyframes ll-rev2{0%,50%{transform:scaleX(1)}60%,100%{transform:scaleX(-1)}} @keyframes ll-rev3{0%,70%{transform:scaleX(1)}80%,100%{transform:scaleX(-1)}}</style><rect width="600" height="280" fill="#0e1018" rx="8"/><text x="300" y="28" fill="#fff" text-anchor="middle" font-size="14" font-weight="bold" font-family="monospace">Linked List: Reverse Operation</text><text x="300" y="50" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">Before: 1 → 2 → 3 → null</text><rect x="100" y="65" width="60" height="40" fill="#1a1d2e" stroke="#f472b6" rx="6"/><text x="130" y="90" fill="#f472b6" text-anchor="middle" font-size="16" font-weight="bold">1</text><text x="185" y="90" fill="#f472b6" font-size="18">→</text><rect x="210" y="65" width="60" height="40" fill="#1a1d2e" stroke="#00cfff" rx="6"/><text x="240" y="90" fill="#00cfff" text-anchor="middle" font-size="16" font-weight="bold">2</text><text x="295" y="90" fill="#00cfff" font-size="18">→</text><rect x="320" y="65" width="60" height="40" fill="#1a1d2e" stroke="#a78bfa" rx="6"/><text x="350" y="90" fill="#a78bfa" text-anchor="middle" font-size="16" font-weight="bold">3</text><text x="395" y="90" fill="#4a5268" font-size="14">→ null</text><text x="300" y="130" fill="#00ff88" text-anchor="middle" font-size="13" font-family="monospace" font-weight="bold">↓ REVERSE: flip arrows one by one ↓</text><text x="300" y="155" fill="#4a5268" text-anchor="middle" font-size="11" font-family="monospace">After: null ← 1 ← 2 ← 3</text><text x="90" y="190" fill="#4a5268" font-size="14">null ←</text><rect x="130" y="170" width="60" height="40" fill="#1a1d2e" stroke="#f472b6" rx="6"/><text x="160" y="195" fill="#f472b6" text-anchor="middle" font-size="16" font-weight="bold">1</text><text x="205" y="195" fill="#00ff88" font-size="18">←</text><rect x="230" y="170" width="60" height="40" fill="#1a1d2e" stroke="#00cfff" rx="6"/><text x="260" y="195" fill="#00cfff" text-anchor="middle" font-size="16" font-weight="bold">2</text><text x="305" y="195" fill="#00ff88" font-size="18">←</text><rect x="330" y="170" width="60" height="40" fill="#1a1d2e" stroke="#a78bfa" rx="6"/><text x="360" y="195" fill="#a78bfa" text-anchor="middle" font-size="16" font-weight="bold">3</text><rect x="50" y="225" width="500" height="40" fill="#1a1d2e" rx="6" stroke="#1e2230"/><text x="300" y="250" fill="#f472b6" text-anchor="middle" font-size="12" font-family="monospace">prev=null → save next → curr.next=prev → prev=curr → curr=next</text></svg>`,
    complexity: [
      {badge:'yellow', big:'O(n)', label:'TRAVERSE', desc:'Walk the list once with pointer manipulation'},
      {badge:'blue', big:'O(1)', label:'POINTER OPS', desc:'Each pointer swap is constant time'}
    ],
    meterWidth: '80%',
    code: {
      python: `<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># LINKED LIST — THE TEMPLATE</span>
<span class="cm"># ═══════════════════════════════</span>
<span class="cm"># WHEN TO USE: Reverse, cycle, kth from end, merge</span>
<span class="cm"># TIME: O(n) | SPACE: O(1)</span>
<span class="cm"># ═══════════════════════════════</span>

<span class="kw">def</span> <span class="fn">reverseList</span>(head):
    prev = <span class="kw">None</span>
    curr = head

    <span class="kw">while</span> curr:
        next_node = curr.next  <span class="cm"># Save next before breaking link</span>
        curr.next = prev       <span class="cm"># Reverse the arrow</span>
        prev = curr            <span class="cm"># Move prev forward</span>
        curr = next_node       <span class="cm"># Move curr forward</span>

    <span class="kw">return</span> prev  <span class="cm"># New head</span>

<span class="cm"># ─── REAL EXAMPLE: Merge Two Sorted Lists ───</span>
<span class="cm"># Input: l1=[1,2,4], l2=[1,3,4]  Output: [1,1,2,3,4,4]</span>

<span class="kw">def</span> <span class="fn">mergeTwoLists</span>(l1, l2):
    dummy = ListNode(<span class="nm">0</span>)  <span class="cm"># WHY: avoids special case for head</span>
    curr = dummy
    <span class="kw">while</span> l1 <span class="kw">and</span> l2:
        <span class="kw">if</span> l1.val &lt;= l2.val:
            curr.next = l1; l1 = l1.next
        <span class="kw">else</span>:
            curr.next = l2; l2 = l2.next
        curr = curr.next
    curr.next = l1 <span class="kw">or</span> l2
    <span class="kw">return</span> dummy.next`,
      csharp: `<span class="cm">// LINKED LIST — REVERSE TEMPLATE</span>
<span class="kw">public</span> <span class="tp">ListNode</span> <span class="fn">ReverseList</span>(<span class="tp">ListNode</span> head) {
    <span class="tp">ListNode</span> prev = <span class="kw">null</span>, curr = head;
    <span class="kw">while</span> (curr != <span class="kw">null</span>) {
        <span class="tp">ListNode</span> next = curr.next;
        curr.next = prev;
        prev = curr; curr = next;
    }
    <span class="kw">return</span> prev;
}`,
      java: `<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// LINKED LIST — THE TEMPLATE</span>
<span class="cm">// ═══════════════════════════════</span>
<span class="cm">// WHEN TO USE: Reverse, cycle detect, merge, kth from end</span>
<span class="cm">// TIME: O(n) | SPACE: O(1)</span>
<span class="cm">// ═══════════════════════════════</span>

<span class="kw">public</span> <span class="tp">ListNode</span> <span class="fn">reverseList</span>(<span class="tp">ListNode</span> head) {
    <span class="cm">// SETUP: Three pointers for in-place reversal</span>
    <span class="tp">ListNode</span> prev = <span class="kw">null</span>, curr = head;

    <span class="kw">while</span> (curr != <span class="kw">null</span>) {
        <span class="tp">ListNode</span> next = curr.next; <span class="cm">// SAVE next before we break the link</span>
        curr.next = prev;           <span class="cm">// REVERSE the pointer</span>
        prev = curr;                <span class="cm">// ADVANCE prev</span>
        curr = next;                <span class="cm">// ADVANCE curr</span>
    }
    <span class="kw">return</span> prev; <span class="cm">// prev is the new head</span>
}

<span class="cm">// ─── REAL EXAMPLE: Merge Two Sorted Lists ───</span>
<span class="cm">// Input: l1=[1,2,4], l2=[1,3,4]  Output: [1,1,2,3,4,4]</span>

<span class="kw">public</span> <span class="tp">ListNode</span> <span class="fn">mergeTwoLists</span>(<span class="tp">ListNode</span> l1, <span class="tp">ListNode</span> l2) {
    <span class="cm">// WHY dummy: Avoids edge case of empty head</span>
    <span class="tp">ListNode</span> dummy = <span class="kw">new</span> <span class="tp">ListNode</span>(<span class="nm">0</span>);
    <span class="tp">ListNode</span> tail = dummy;

    <span class="kw">while</span> (l1 != <span class="kw">null</span> &amp;&amp; l2 != <span class="kw">null</span>) {
        <span class="cm">// Pick the smaller node and advance that list</span>
        <span class="kw">if</span> (l1.val &lt;= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } <span class="kw">else</span> {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    <span class="cm">// Attach remaining nodes</span>
    tail.next = (l1 != <span class="kw">null</span>) ? l1 : l2;
    <span class="kw">return</span> dummy.next;
}

<span class="cm">// ─── BONUS: Detect Cycle (Floyd's) ───</span>
<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">hasCycle</span>(<span class="tp">ListNode</span> head) {
    <span class="tp">ListNode</span> slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> &amp;&amp; fast.next != <span class="kw">null</span>) {
        slow = slow.next;       <span class="cm">// 1 step</span>
        fast = fast.next.next;  <span class="cm">// 2 steps</span>
        <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>; <span class="cm">// cycle!</span>
    }
    <span class="kw">return false</span>;
}`
    },
    memoryHack: {
      oneSentence: 'To reverse a linked list: save the next node, flip the arrow backward, then advance both pointers.',
      flowchart: {
        nodes: [
          { id: 'start', label: 'prev=None', type: 'start', x: 290, y: 20 },
          { id: 'init', label: 'curr=head', type: 'action', x: 290, y: 70 },
          { id: 'cond', label: 'curr != None?', type: 'decision', x: 290, y: 125 },
          { id: 'save', label: 'Save next', type: 'action', x: 290, y: 180 },
          { id: 'flip', label: 'Flip pointer', type: 'action', x: 450, y: 180 },
          { id: 'advP', label: 'prev = curr', type: 'action', x: 450, y: 125 },
          { id: 'advC', label: 'curr = next', type: 'action', x: 450, y: 70 },
          { id: 'ret', label: 'Return prev', type: 'end', x: 100, y: 125 }
        ],
        edges: [
          { from: 'start', to: 'init', label: '' },
          { from: 'init', to: 'cond', label: '' },
          { from: 'cond', to: 'save', label: 'YES' },
          { from: 'cond', to: 'ret', label: 'NO' },
          { from: 'save', to: 'flip', label: '' },
          { from: 'flip', to: 'advP', label: '' },
          { from: 'advP', to: 'advC', label: '' },
          { from: 'advC', to: 'cond', label: '' }
        ]
      },
      annotatedCode: [
        { line: 'ListNode reverseList(ListNode head) {', stepId: 'start', note: 'Reverse singly linked list in-place', color: '#5a5f70' },
        { line: '    ListNode prev = null;', stepId: 'start', note: 'Will become new tail', color: '#00cfff' },
        { line: '    ListNode curr = head;', stepId: 'init', note: 'Start at the head', color: '#00cfff' },
        { line: '    while (curr != null) {', stepId: 'cond', note: 'Walk until end', color: '#ffd600' },
        { line: '        ListNode next = curr.next;', stepId: 'save', note: 'SAVE — grab next before we break link', color: '#a78bfa' },
        { line: '        curr.next = prev;', stepId: 'flip', note: 'FLIP — reverse the arrow', color: '#ff4d6d' },
        { line: '        prev = curr;', stepId: 'advP', note: 'ADVANCE prev', color: '#00ff88' },
        { line: '        curr = next;', stepId: 'advC', note: 'ADVANCE curr to saved next', color: '#00ff88' },
        { line: '    } return prev;', stepId: 'ret', note: 'prev is new head', color: '#00ff88' }
      ],
      stateSnapshots: [
        { label: 'Initial', art: 'prev=null  curr=1  |  1 → 2 → 3 → null', annotation: 'Original list: 1→2→3→null' },
        { label: 'Step 1', art: 'next=2  flip: 1→null  prev=1  curr=2', annotation: 'Save 2, flip 1→null, advance' },
        { label: 'Step 2', art: 'next=3  flip: 2→1    prev=2  curr=3', annotation: 'Save 3, flip 2→1, advance' },
        { label: 'Step 3', art: 'next=null flip: 3→2  prev=3  curr=null', annotation: 'Save null, flip 3→2, loop ends' },
        { label: 'Result', art: 'Return prev=3  |  3 → 2 → 1 → null', annotation: 'Node 3 is new head of reversed list' }
      ],
      variations: [
        { name: 'Reverse Linked List', desc: 'Save, flip, advance — three-move loop', problem: 'Reverse Linked List (#206)' },
        { name: 'Merge Two Sorted Lists', desc: 'Dummy head, compare fronts, append smaller', problem: 'Merge Two Sorted Lists (#21)' },
        { name: 'Linked List Cycle', desc: 'Floyd\'s: slow 1 step, fast 2 — if they meet, cycle exists', problem: 'Linked List Cycle (#141)' }
      ],
      title: 'Linked List — Save, Flip, Advance',
      mnemonic: 'SAVE next, FLIP arrow, ADVANCE both',
      steps: ['prev=None curr=head','Save curr.next','Flip curr.next=prev','Move prev=curr, curr=saved next','Return prev'],
      why: 'Without saving next first, flipping loses the rest of the list.'
    },
    cheat: {
      trigger: 'reverse, cycle, kth from end, merge lists, in-place modify',
      firstLine: 'ListNode dummy = new ListNode(0); dummy.next = head;',
      gotcha: 'Losing reference to next node before reassigning pointers — save it first!',
      pitch: "I'll use a dummy head node and careful pointer manipulation, drawing the state at each step.",
      snippet: `<span class="cm">// WHY save-flip-advance? Without saving next, flipping loses the chain</span>
<span class="tp">ListNode</span> prev = <span class="kw">null</span>, curr = head;
<span class="kw">while</span> (curr != <span class="kw">null</span>) {
    <span class="tp">ListNode</span> next = curr.next;  <span class="cm">// 1. SAVE next</span>
    curr.next = prev;            <span class="cm">// 2. FLIP arrow</span>
    prev = curr;                 <span class="cm">// 3. ADVANCE prev</span>
    curr = next;                 <span class="cm">// 4. ADVANCE curr</span>
}
<span class="kw">return</span> prev;  <span class="cm">// new head</span>`
    }
  }
];
