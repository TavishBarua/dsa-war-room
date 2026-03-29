import { PatternCard } from './types';

export const PATTERNS: PatternCard[] = [
  {
    icon: '🗂️', name: 'Arrays & Hashing', count: 8,
    accent: '#00ff88',
    tagline: 'When you need O(1) lookup or counting',
    intuition: 'As a senior dev, you already use HashMaps daily. In DSA, they\'re your first weapon. When brute force is O(n²) and you need to make it O(n) — a HashMap is probably involved.',
    trigger: 'When you see: "find pair/duplicate/missing", "count frequencies", "group by property"\n→ Your brain should scream: HASHMAP',
    problems: [
      {name:'Contains Duplicate', diff:'Easy'}, {name:'Valid Anagram', diff:'Easy'},
      {name:'Two Sum', diff:'Easy'}, {name:'Group Anagrams', diff:'Medium'},
      {name:'Product of Array Except Self', diff:'Medium'},
      {name:'Valid Sudoku', diff:'Medium'}, {name:'Encode and Decode Strings', diff:'Medium'},
      {name:'Longest Consecutive Sequence', diff:'Medium'}
    ]
  },
  {
    icon: '👉👈', name: 'Two Pointers', count: 5,
    accent: '#00cfff',
    tagline: 'Two variables moving toward each other',
    intuition: 'When the array is sorted (or can be sorted) and you\'re looking for pairs or subarrays. One pointer at start, one at end. Move them based on conditions. Eliminates the O(n²) nested loop.',
    trigger: 'When you see: sorted array, find pairs summing to target, reverse something, palindrome check\n→ Left pointer + Right pointer, move inward',
    problems: [
      {name:'Valid Palindrome', diff:'Easy'}, {name:'Two Sum II - Input Array Is Sorted', diff:'Medium'},
      {name:'3Sum', diff:'Medium'}, {name:'Container With Most Water', diff:'Medium'},
      {name:'Trapping Rain Water', diff:'Hard'}
    ]
  },
  {
    icon: '🪟', name: 'Sliding Window', count: 6,
    accent: '#a78bfa',
    tagline: 'A subarray/substring that moves forward',
    intuition: 'Think of it as a camera frame sliding across the array. You add from the right and remove from the left. The "window" maintains some condition. Never use nested loops when a window works.',
    trigger: 'When you see: "longest/shortest subarray/substring", "max sum of size k", "contains all chars"\n→ Two pointers (left, right) forming a window',
    problems: [
      {name:'Best Time to Buy and Sell Stock', diff:'Easy'},
      {name:'Longest Substring Without Repeating Characters', diff:'Medium'},
      {name:'Longest Repeating Character Replacement', diff:'Medium'},
      {name:'Permutation in String', diff:'Medium'},
      {name:'Minimum Window Substring', diff:'Hard'},
      {name:'Sliding Window Maximum', diff:'Hard'}
    ]
  },
  {
    icon: '📚', name: 'Stack', count: 7,
    accent: '#fb923c',
    tagline: 'When order matters and you need last-in-first-out',
    intuition: 'Stack solves "what was the last thing I saw" problems. Parentheses matching, temperature questions ("when is next warmer day"), monotonic stacks for histogram problems.',
    trigger: 'When you see: matching brackets, "next greater element", "calculate at end", undo operations\n→ Push when valid, pop when condition met',
    problems: [
      {name:'Valid Parentheses', diff:'Easy'}, {name:'Min Stack', diff:'Medium'},
      {name:'Evaluate Reverse Polish Notation', diff:'Medium'}, {name:'Generate Parentheses', diff:'Medium'},
      {name:'Daily Temperatures', diff:'Medium'}, {name:'Car Fleet', diff:'Medium'},
      {name:'Largest Rectangle in Histogram', diff:'Hard'}
    ]
  },
  {
    icon: '🔍', name: 'Binary Search', count: 7,
    accent: '#34d399',
    tagline: 'Eliminate half the search space every step',
    intuition: 'Not just for sorted arrays. Binary search any time the answer has a monotonic property — if X works, then X-1 works too. The "creative binary search" on the answer value is a game changer.',
    trigger: 'When you see: sorted array, "find minimum/maximum valid value", "search in rotated"\n→ lo, hi, mid — eliminate half each iteration',
    problems: [
      {name:'Binary Search', diff:'Easy'}, {name:'Search a 2D Matrix', diff:'Medium'},
      {name:'Koko Eating Bananas', diff:'Medium'}, {name:'Find Minimum in Rotated Sorted Array', diff:'Medium'},
      {name:'Search in Rotated Sorted Array', diff:'Medium'}, {name:'Time Based Key-Value Store', diff:'Medium'},
      {name:'Median of Two Sorted Arrays', diff:'Hard'}
    ]
  },
  {
    icon: '🔗', name: 'Linked List', count: 10,
    accent: '#f472b6',
    tagline: 'Pointer manipulation — think before you move',
    intuition: 'Draw it on paper every time. Literally draw the boxes and arrows. The fast/slow pointer (Floyd\'s cycle detection) solves half these problems. Dummy head node prevents edge case hell.',
    trigger: 'When you see: cycle detection, kth from end, merge/reverse, "modify in-place"\n→ Draw it. Use dummy head. Consider fast/slow pointers.',
    problems: [
      {name:'Reverse Linked List', diff:'Easy'}, {name:'Merge Two Sorted Lists', diff:'Easy'},
      {name:'Reorder List', diff:'Medium'}, {name:'Remove Nth Node From End of List', diff:'Medium'},
      {name:'Copy List with Random Pointer', diff:'Medium'}, {name:'Add Two Numbers', diff:'Medium'},
      {name:'Linked List Cycle', diff:'Easy'}, {name:'Find the Duplicate Number', diff:'Medium'},
      {name:'LRU Cache', diff:'Medium'}, {name:'Reverse Nodes in K-Group', diff:'Hard'}
    ]
  },
  {
    icon: '🌳', name: 'Trees', count: 15,
    accent: '#4ade80',
    tagline: 'DFS or BFS — almost always one of these two',
    intuition: 'Trees are just graphs with no cycles. 90% of tree problems are DFS (recursion). Think: what do I need from my left child? What from my right? What do I return to my parent?',
    trigger: 'When you see: depth/height, path sum, LCA, validate BST\n→ DFS recursion (return value carries the answer up)\n→ BFS for level-order anything',
    problems: [
      {name:'Invert Binary Tree', diff:'Easy'}, {name:'Maximum Depth of Binary Tree', diff:'Easy'},
      {name:'Diameter of Binary Tree', diff:'Easy'}, {name:'Balanced Binary Tree', diff:'Easy'},
      {name:'Same Tree', diff:'Easy'}, {name:'Subtree of Another Tree', diff:'Easy'},
      {name:'Lowest Common Ancestor of BST', diff:'Medium'}, {name:'Binary Tree Level Order Traversal', diff:'Medium'},
      {name:'Binary Tree Right Side View', diff:'Medium'}, {name:'Count Good Nodes in Binary Tree', diff:'Medium'},
      {name:'Validate Binary Search Tree', diff:'Medium'}, {name:'Kth Smallest Element in BST', diff:'Medium'},
      {name:'Construct Binary Tree from Preorder/Inorder', diff:'Medium'},
      {name:'Binary Tree Maximum Path Sum', diff:'Hard'}, {name:'Serialize and Deserialize Binary Tree', diff:'Hard'}
    ]
  },
  {
    icon: '⛏️', name: 'Heap / Priority Queue', count: 9,
    accent: '#fbbf24',
    tagline: 'Always get the min or max in O(log n)',
    intuition: 'Heap = priority queue. Use it whenever you need "the k largest/smallest" or "stream of numbers, get median". Python has heapq (min-heap). For max-heap, negate the values.',
    trigger: 'When you see: "k largest/smallest", "median of stream", "sort nearly sorted"\n→ Min/Max Heap. Size k heap gives k-th largest.',
    problems: [
      {name:'Kth Largest Element in a Stream', diff:'Easy'}, {name:'Last Stone Weight', diff:'Easy'},
      {name:'K Closest Points to Origin', diff:'Medium'}, {name:'Kth Largest Element in an Array', diff:'Medium'},
      {name:'Top K Frequent Elements', diff:'Medium'}, {name:'Task Scheduler', diff:'Medium'},
      {name:'Design Twitter', diff:'Medium'}, {name:'Merge K Sorted Lists', diff:'Hard'},
      {name:'Find Median from Data Stream', diff:'Hard'}
    ]
  },
  {
    icon: '🌿', name: 'Backtracking', count: 10,
    accent: '#e879f9',
    tagline: 'Try everything, undo when stuck',
    intuition: 'Backtracking = DFS on a decision tree. At each step you make a choice, recurse, then undo that choice. The key insight: you\'re building a tree of all possibilities and pruning dead branches early.',
    trigger: 'When you see: "find all combinations/permutations/subsets", "generate all valid X"\n→ Make choice → Recurse → Undo choice (backtrack)',
    problems: [
      {name:'Subsets', diff:'Medium'}, {name:'Combination Sum', diff:'Medium'},
      {name:'Permutations', diff:'Medium'}, {name:'Subsets II', diff:'Medium'},
      {name:'Combination Sum II', diff:'Medium'}, {name:'Word Search', diff:'Medium'},
      {name:'Palindrome Partitioning', diff:'Medium'}, {name:'Letter Combinations of a Phone Number', diff:'Medium'},
      {name:'N-Queens', diff:'Hard'}, {name:'N-Queens II', diff:'Hard'}
    ]
  },
  {
    icon: '🌲', name: 'Tries', count: 3,
    accent: '#67e8f9',
    tagline: 'Prefix tree — fast string prefix lookups',
    intuition: 'A Trie is a tree where each node is a character. It\'s the data structure behind autocomplete. Build it as a nested dict (Python) or class. Word exists? Walk the trie. Prefix exists? Same walk.',
    trigger: 'When you see: autocomplete, prefix matching, multiple string lookups\n→ Build a Trie node class with children dict + isEnd flag',
    problems: [
      {name:'Implement Trie (Prefix Tree)', diff:'Medium'},
      {name:'Design Add and Search Words Data Structure', diff:'Medium'},
      {name:'Word Search II', diff:'Hard'}
    ]
  },
  {
    icon: '🗺️', name: 'Graphs', count: 13,
    accent: '#86efac',
    tagline: 'DFS/BFS on connected nodes',
    intuition: 'Grids are graphs. Islands are graphs. Dependencies are graphs. BFS = shortest path. DFS = connectivity/cycles. Union-Find = grouping components. These three cover 90% of graph problems.',
    trigger: 'When you see: grid traversal, connected components, shortest path, detect cycle\n→ BFS (queue) for shortest path\n→ DFS (stack/recursion) for connectivity\n→ Union-Find for component grouping',
    problems: [
      {name:'Number of Islands', diff:'Medium'}, {name:'Max Area of Island', diff:'Medium'},
      {name:'Clone Graph', diff:'Medium'}, {name:'Walls and Gates', diff:'Medium'},
      {name:'Rotting Oranges', diff:'Medium'}, {name:'Pacific Atlantic Water Flow', diff:'Medium'},
      {name:'Surrounded Regions', diff:'Medium'}, {name:'Course Schedule', diff:'Medium'},
      {name:'Course Schedule II', diff:'Medium'}, {name:'Graph Valid Tree', diff:'Medium'},
      {name:'Number of Connected Components', diff:'Medium'}, {name:'Redundant Connection', diff:'Medium'},
      {name:'Word Ladder', diff:'Hard'}
    ]
  },
  {
    icon: '🔥', name: 'Advanced Graphs', count: 6,
    accent: '#f87171',
    tagline: "Dijkstra, Prim's, Kahn's — the heavy artillery",
    intuition: "These are named algorithms you must know by heart. Dijkstra = weighted shortest path. Prim's/Kruskal = minimum spanning tree. Topological sort = dependency ordering. Practice each template until it's automatic.",
    trigger: 'When you see: weighted shortest path → Dijkstra\nMinimum cost to connect all → Prim/Kruskal\nTask ordering → Topological Sort (Kahn\'s BFS)',
    problems: [
      {name:'Reconstruct Itinerary', diff:'Hard'}, {name:'Min Cost to Connect All Points', diff:'Medium'},
      {name:'Network Delay Time', diff:'Medium'}, {name:'Swim in Rising Water', diff:'Hard'},
      {name:'Alien Dictionary', diff:'Hard'}, {name:'Cheapest Flights Within K Stops', diff:'Medium'}
    ]
  },
  {
    icon: '🎯', name: '1-D Dynamic Programming', count: 12,
    accent: '#fde68a',
    tagline: 'Cache answers to subproblems',
    intuition: 'DP = recursion + memoization. If you\'re solving the same subproblem multiple times, cache it. The pattern: define dp[i] = "answer for subproblem i", figure out how dp[i] relates to dp[i-1], dp[i-2].',
    trigger: 'When you see: "maximum/minimum", "count ways", "can you achieve X"\n→ Define state. Find recurrence. dp[i] = f(dp[i-1], dp[i-2]...)',
    problems: [
      {name:'Climbing Stairs', diff:'Easy'}, {name:'Min Cost Climbing Stairs', diff:'Easy'},
      {name:'House Robber', diff:'Medium'}, {name:'House Robber II', diff:'Medium'},
      {name:'Longest Palindromic Substring', diff:'Medium'}, {name:'Palindromic Substrings', diff:'Medium'},
      {name:'Decode Ways', diff:'Medium'}, {name:'Coin Change', diff:'Medium'},
      {name:'Maximum Product Subarray', diff:'Medium'}, {name:'Word Break', diff:'Medium'},
      {name:'Longest Increasing Subsequence', diff:'Medium'}, {name:'Partition Equal Subset Sum', diff:'Medium'}
    ]
  },
  {
    icon: '📐', name: '2-D Dynamic Programming', count: 11,
    accent: '#c4b5fd',
    tagline: 'dp[i][j] — grid of subproblems',
    intuition: '2D DP is when your state depends on TWO variables — usually two strings, two arrays, or a grid. dp[i][j] = answer considering first i chars of s1 and first j chars of s2. Draw the grid on paper.',
    trigger: 'When you see: two strings compared (LCS, Edit Distance), grid path problems\n→ dp[i][j] table. Fill row by row. Answer at dp[m][n].',
    problems: [
      {name:'Unique Paths', diff:'Medium'}, {name:'Longest Common Subsequence', diff:'Medium'},
      {name:'Best Time to Buy/Sell Stock w/ Cooldown', diff:'Medium'}, {name:'Coin Change II', diff:'Medium'},
      {name:'Target Sum', diff:'Medium'}, {name:'Interleaving String', diff:'Medium'},
      {name:'Longest Increasing Path in Matrix', diff:'Hard'}, {name:'Distinct Subsequences', diff:'Hard'},
      {name:'Edit Distance', diff:'Medium'}, {name:'Burst Balloons', diff:'Hard'},
      {name:'Regular Expression Matching', diff:'Hard'}
    ]
  },
  {
    icon: '💰', name: 'Greedy', count: 8,
    accent: '#6ee7b7',
    tagline: 'Make the locally optimal choice each step',
    intuition: 'Greedy works when a local optimal choice leads to a global optimal. No backtracking needed. The hard part is PROVING greedy works — think "if I don\'t take the best available now, can I do better later?"',
    trigger: 'When you see: "minimum steps", "reach the end", "minimum cost", interval scheduling\n→ Sort by some criteria, then greedily pick',
    problems: [
      {name:'Maximum Subarray', diff:'Medium'}, {name:'Jump Game', diff:'Medium'},
      {name:'Jump Game II', diff:'Medium'}, {name:'Gas Station', diff:'Medium'},
      {name:'Hand of Straights', diff:'Medium'}, {name:'Merge Triplets to Form Target Triplet', diff:'Medium'},
      {name:'Partition Labels', diff:'Medium'}, {name:'Valid Parenthesis String', diff:'Medium'}
    ]
  },
  {
    icon: '📅', name: 'Intervals', count: 6,
    accent: '#93c5fd',
    tagline: 'Sort by start time, then merge or count',
    intuition: 'All interval problems start the same way: sort by start time. Then it\'s a scan. Overlapping? Merge. Non-overlapping? Count or split. Meeting rooms = how many intervals overlap at peak.',
    trigger: 'When you see: intervals, meetings, time ranges, "merge overlapping"\n→ Sort by start. Scan with current interval. Compare end times.',
    problems: [
      {name:'Insert Interval', diff:'Medium'}, {name:'Merge Intervals', diff:'Medium'},
      {name:'Non-overlapping Intervals', diff:'Medium'}, {name:'Meeting Rooms', diff:'Easy'},
      {name:'Meeting Rooms II', diff:'Medium'}, {name:'Minimum Interval to Include Each Query', diff:'Hard'}
    ]
  },
  {
    icon: '🔢', name: 'Math & Geometry', count: 8,
    accent: '#fca5a5',
    tagline: 'Pattern recognition + clever math tricks',
    intuition: 'These problems have elegant mathematical solutions. Rotate matrix = transpose + reverse rows. Spiral matrix = simulate with direction vectors. Happy number = Floyd\'s cycle on digit sums.',
    trigger: 'When you see: matrix rotation, spiral traversal, digit operations\n→ Look for the mathematical pattern before coding',
    problems: [
      {name:'Rotate Image', diff:'Medium'}, {name:'Spiral Matrix', diff:'Medium'},
      {name:'Set Matrix Zeroes', diff:'Medium'}, {name:'Happy Number', diff:'Easy'},
      {name:'Plus One', diff:'Easy'}, {name:'Pow(x, n)', diff:'Medium'},
      {name:'Multiply Strings', diff:'Medium'}, {name:'Detect Squares', diff:'Medium'}
    ]
  },
  {
    icon: '💾', name: 'Bit Manipulation', count: 7,
    accent: '#a5b4fc',
    tagline: 'XOR, shifts, masks — the raw power',
    intuition: 'XOR is magic: a^a=0, a^0=a. Missing number? XOR all indices with all values. Single number? XOR everything (duplicates cancel). Count bits? Brian Kernighan\'s trick: n & (n-1) removes lowest set bit.',
    trigger: 'When you see: single unique element, missing number, count set bits, "without + or -"\n→ XOR or bit mask. Think binary representation.',
    problems: [
      {name:'Single Number', diff:'Easy'}, {name:'Number of 1 Bits', diff:'Easy'},
      {name:'Counting Bits', diff:'Easy'}, {name:'Reverse Bits', diff:'Easy'},
      {name:'Missing Number', diff:'Easy'}, {name:'Sum of Two Integers', diff:'Medium'},
      {name:'Reverse Integer', diff:'Medium'}
    ]
  }
];
