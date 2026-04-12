// Comprehensive Time & Space Complexity reference for all 150 NeetCode problems

export interface ProblemComplexity {
  name: string;
  number: string;
  pattern: string;
  timeOptimal: string;
  timeNaive?: string;
  spaceOptimal: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  notes?: string;
}

export const PROBLEM_COMPLEXITIES: ProblemComplexity[] = [
  // ==================== ARRAYS & HASHING ====================
  { name: 'Contains Duplicate', number: '#217', pattern: 'Arrays & Hashing', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(n)', difficulty: 'Easy', notes: 'HashSet for O(1) lookup' },
  { name: 'Valid Anagram', number: '#242', pattern: 'Arrays & Hashing', timeOptimal: 'O(n)', timeNaive: 'O(n log n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'HashMap or char array' },
  { name: 'Two Sum', number: '#1', pattern: 'Arrays & Hashing', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(n)', difficulty: 'Easy', notes: 'HashMap for complement lookup' },
  { name: 'Group Anagrams', number: '#49', pattern: 'Arrays & Hashing', timeOptimal: 'O(n·k)', timeNaive: 'O(n·k log k)', spaceOptimal: 'O(n·k)', difficulty: 'Medium', notes: 'k = avg string length' },
  { name: 'Top K Frequent Elements', number: '#347', pattern: 'Arrays & Hashing', timeOptimal: 'O(n)', timeNaive: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Bucket sort or heap' },
  { name: 'Product of Array Except Self', number: '#238', pattern: 'Prefix/Suffix', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Prefix/suffix without extra array' },
  { name: 'Valid Sudoku', number: '#36', pattern: 'Arrays & Hashing', timeOptimal: 'O(1)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: '9x9 board = constant' },
  { name: 'Encode and Decode Strings', number: '#271', pattern: 'Arrays & Hashing', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Length-prefix encoding' },
  { name: 'Longest Consecutive Sequence', number: '#128', pattern: 'Arrays & Hashing', timeOptimal: 'O(n)', timeNaive: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'HashSet for O(1) lookup' },

  // ==================== TWO POINTERS ====================
  { name: 'Valid Palindrome', number: '#125', pattern: 'Two Pointers', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Two pointers from both ends' },
  { name: 'Two Sum II', number: '#167', pattern: 'Two Pointers', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Sorted array enables two pointers' },
  { name: '3Sum', number: '#15', pattern: 'Two Pointers', timeOptimal: 'O(n²)', timeNaive: 'O(n³)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Sort + two pointers for each element' },
  { name: 'Container With Most Water', number: '#11', pattern: 'Two Pointers', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Greedy two pointers' },
  { name: 'Trapping Rain Water', number: '#42', pattern: 'Prefix/Suffix or Two Pointers', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Hard', notes: 'Two pointers optimal, prefix/suffix O(n) space' },

  // ==================== SLIDING WINDOW ====================
  { name: 'Best Time to Buy and Sell Stock', number: '#121', pattern: 'Sliding Window', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Track min price as we scan' },
  { name: 'Longest Substring Without Repeating Characters', number: '#3', pattern: 'Sliding Window', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(min(n,m))', difficulty: 'Medium', notes: 'm = charset size' },
  { name: 'Longest Repeating Character Replacement', number: '#424', pattern: 'Sliding Window', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Window with char frequency' },
  { name: 'Permutation in String', number: '#567', pattern: 'Sliding Window', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Fixed window = s1.length' },
  { name: 'Minimum Window Substring', number: '#76', pattern: 'Sliding Window', timeOptimal: 'O(n+m)', spaceOptimal: 'O(m)', difficulty: 'Hard', notes: 'Expand/contract window' },
  { name: 'Sliding Window Maximum', number: '#239', pattern: 'Monotonic Deque', timeOptimal: 'O(n)', timeNaive: 'O(nk)', spaceOptimal: 'O(k)', difficulty: 'Hard', notes: 'Deque beats heap O(n log k)' },

  // ==================== STACK ====================
  { name: 'Valid Parentheses', number: '#20', pattern: 'Stack', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Easy', notes: 'Stack for matching pairs' },
  { name: 'Min Stack', number: '#155', pattern: 'Stack', timeOptimal: 'O(1)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Two stacks or paired min values' },
  { name: 'Evaluate Reverse Polish Notation', number: '#150', pattern: 'Stack', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Stack for operands' },
  { name: 'Generate Parentheses', number: '#22', pattern: 'Backtracking', timeOptimal: 'O(4^n / √n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Catalan number solutions' },
  { name: 'Daily Temperatures', number: '#739', pattern: 'Monotonic Stack', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Decreasing stack of indices' },
  { name: 'Car Fleet', number: '#853', pattern: 'Monotonic Stack', timeOptimal: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Sort + stack of arrival times' },
  { name: 'Largest Rectangle in Histogram', number: '#84', pattern: 'Monotonic Stack', timeOptimal: 'O(n)', timeNaive: 'O(n²)', spaceOptimal: 'O(n)', difficulty: 'Hard', notes: 'Increasing stack, width calculation trick' },

  // ==================== BINARY SEARCH ====================
  { name: 'Binary Search', number: '#704', pattern: 'Binary Search', timeOptimal: 'O(log n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Classic binary search' },
  { name: 'Search a 2D Matrix', number: '#74', pattern: 'Binary Search', timeOptimal: 'O(log(m·n))', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Treat as 1D sorted array' },
  { name: 'Koko Eating Bananas', number: '#875', pattern: 'Binary Search', timeOptimal: 'O(n log m)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Binary search on answer, m=max pile' },
  { name: 'Find Minimum in Rotated Sorted Array', number: '#153', pattern: 'Binary Search', timeOptimal: 'O(log n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Modified binary search' },
  { name: 'Search in Rotated Sorted Array', number: '#33', pattern: 'Binary Search', timeOptimal: 'O(log n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Find rotation point first' },
  { name: 'Time Based Key-Value Store', number: '#981', pattern: 'Binary Search', timeOptimal: 'O(log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Binary search on timestamps' },
  { name: 'Median of Two Sorted Arrays', number: '#4', pattern: 'Binary Search', timeOptimal: 'O(log(min(m,n)))', timeNaive: 'O(m+n)', spaceOptimal: 'O(1)', difficulty: 'Hard', notes: 'Binary search on smaller array' },

  // ==================== LINKED LIST ====================
  { name: 'Reverse Linked List', number: '#206', pattern: 'Linked List', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Iterative with 3 pointers' },
  { name: 'Merge Two Sorted Lists', number: '#21', pattern: 'Linked List', timeOptimal: 'O(n+m)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Two pointers' },
  { name: 'Reorder List', number: '#143', pattern: 'Linked List', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Find mid + reverse + merge' },
  { name: 'Remove Nth Node From End', number: '#19', pattern: 'Linked List', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Two pointers n apart' },
  { name: 'Copy List with Random Pointer', number: '#138', pattern: 'Linked List', timeOptimal: 'O(n)', spaceOptimal: 'O(n) or O(1)', difficulty: 'Medium', notes: 'HashMap or interweaving trick' },
  { name: 'Add Two Numbers', number: '#2', pattern: 'Linked List', timeOptimal: 'O(max(n,m))', spaceOptimal: 'O(max(n,m))', difficulty: 'Medium', notes: 'Track carry digit' },
  { name: 'Linked List Cycle', number: '#141', pattern: 'Linked List', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Floyd\'s tortoise & hare' },
  { name: 'Find the Duplicate Number', number: '#287', pattern: 'Linked List Cycle', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Treat as linked list cycle' },
  { name: 'LRU Cache', number: '#146', pattern: 'Linked List + HashMap', timeOptimal: 'O(1)', spaceOptimal: 'O(capacity)', difficulty: 'Medium', notes: 'Doubly linked list + HashMap' },
  { name: 'Merge k Sorted Lists', number: '#23', pattern: 'Heap', timeOptimal: 'O(n log k)', timeNaive: 'O(nk)', spaceOptimal: 'O(k)', difficulty: 'Hard', notes: 'Min heap of k elements' },
  { name: 'Reverse Nodes in k-Group', number: '#25', pattern: 'Linked List', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Hard', notes: 'Iterative reversal in groups' },

  // ==================== TREES ====================
  { name: 'Invert Binary Tree', number: '#226', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Easy', notes: 'Recursive or iterative DFS' },
  { name: 'Maximum Depth of Binary Tree', number: '#104', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Easy', notes: 'DFS: 1 + max(left, right)' },
  { name: 'Diameter of Binary Tree', number: '#543', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Easy', notes: 'Max of left height + right height' },
  { name: 'Balanced Binary Tree', number: '#110', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Easy', notes: 'Check height difference ≤ 1' },
  { name: 'Same Tree', number: '#100', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Easy', notes: 'Compare nodes recursively' },
  { name: 'Subtree of Another Tree', number: '#572', pattern: 'Trees/DFS', timeOptimal: 'O(n·m)', spaceOptimal: 'O(h)', difficulty: 'Easy', notes: 'Check all nodes of main tree' },
  { name: 'Lowest Common Ancestor of BST', number: '#235', pattern: 'Trees/BST', timeOptimal: 'O(h)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Use BST property' },
  { name: 'Binary Tree Level Order Traversal', number: '#102', pattern: 'Trees/BFS', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'BFS with queue' },
  { name: 'Binary Tree Right Side View', number: '#199', pattern: 'Trees/BFS', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'BFS, take last of each level' },
  { name: 'Count Good Nodes in Binary Tree', number: '#1448', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Medium', notes: 'Track max so far' },
  { name: 'Validate Binary Search Tree', number: '#98', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Medium', notes: 'Pass valid range down' },
  { name: 'Kth Smallest Element in BST', number: '#230', pattern: 'Trees/BST', timeOptimal: 'O(h+k)', spaceOptimal: 'O(h)', difficulty: 'Medium', notes: 'Inorder traversal' },
  { name: 'Construct Binary Tree from Preorder and Inorder', number: '#105', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Recursive with index map' },
  { name: 'Binary Tree Maximum Path Sum', number: '#124', pattern: 'Trees/DFS', timeOptimal: 'O(n)', spaceOptimal: 'O(h)', difficulty: 'Hard', notes: 'Global max tracking' },
  { name: 'Serialize and Deserialize Binary Tree', number: '#297', pattern: 'Trees/DFS or BFS', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Hard', notes: 'Preorder with null markers' },

  // ==================== TRIES ====================
  { name: 'Implement Trie', number: '#208', pattern: 'Trie', timeOptimal: 'O(m)', spaceOptimal: 'O(m)', difficulty: 'Medium', notes: 'm = word length' },
  { name: 'Design Add and Search Words Data Structure', number: '#211', pattern: 'Trie', timeOptimal: 'O(m)', spaceOptimal: 'O(m)', difficulty: 'Medium', notes: 'DFS for wildcard search' },
  { name: 'Word Search II', number: '#212', pattern: 'Trie + Backtracking', timeOptimal: 'O(m·n·4^L)', spaceOptimal: 'O(w·L)', difficulty: 'Hard', notes: 'w=words, L=max length' },

  // ==================== HEAP / PRIORITY QUEUE ====================
  { name: 'Kth Largest Element in Stream', number: '#703', pattern: 'Heap', timeOptimal: 'O(log k)', spaceOptimal: 'O(k)', difficulty: 'Easy', notes: 'Min heap of size k' },
  { name: 'Last Stone Weight', number: '#1046', pattern: 'Heap', timeOptimal: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Easy', notes: 'Max heap simulation' },
  { name: 'K Closest Points to Origin', number: '#973', pattern: 'Heap', timeOptimal: 'O(n log k)', spaceOptimal: 'O(k)', difficulty: 'Medium', notes: 'Max heap of size k' },
  { name: 'Kth Largest Element in Array', number: '#215', pattern: 'Heap', timeOptimal: 'O(n log k)', timeNaive: 'O(n log n)', spaceOptimal: 'O(k)', difficulty: 'Medium', notes: 'Min heap or quickselect O(n) avg' },
  { name: 'Task Scheduler', number: '#621', pattern: 'Heap', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Max heap + cooldown queue' },
  { name: 'Design Twitter', number: '#355', pattern: 'Heap', timeOptimal: 'O(k log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Merge k sorted lists with heap' },
  { name: 'Find Median from Data Stream', number: '#295', pattern: 'Heap', timeOptimal: 'O(log n)', spaceOptimal: 'O(n)', difficulty: 'Hard', notes: 'Two heaps (max + min)' },

  // ==================== BACKTRACKING ====================
  { name: 'Subsets', number: '#78', pattern: 'Backtracking', timeOptimal: 'O(2^n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Generate all combinations' },
  { name: 'Combination Sum', number: '#39', pattern: 'Backtracking', timeOptimal: 'O(2^t)', spaceOptimal: 'O(t)', difficulty: 'Medium', notes: 't = target/min' },
  { name: 'Permutations', number: '#46', pattern: 'Backtracking', timeOptimal: 'O(n!)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'All permutations' },
  { name: 'Subsets II', number: '#90', pattern: 'Backtracking', timeOptimal: 'O(2^n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Skip duplicates' },
  { name: 'Combination Sum II', number: '#40', pattern: 'Backtracking', timeOptimal: 'O(2^n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Each element once' },
  { name: 'Word Search', number: '#79', pattern: 'Backtracking', timeOptimal: 'O(m·n·4^L)', spaceOptimal: 'O(L)', difficulty: 'Medium', notes: 'L = word length' },
  { name: 'Palindrome Partitioning', number: '#131', pattern: 'Backtracking', timeOptimal: 'O(2^n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Generate all partitions' },
  { name: 'Letter Combinations of a Phone Number', number: '#17', pattern: 'Backtracking', timeOptimal: 'O(4^n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'n = digits length' },
  { name: 'N-Queens', number: '#51', pattern: 'Backtracking', timeOptimal: 'O(n!)', spaceOptimal: 'O(n²)', difficulty: 'Hard', notes: 'Constraint propagation' },

  // ==================== GRAPHS ====================
  { name: 'Number of Islands', number: '#200', pattern: 'Graphs/DFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Medium', notes: 'DFS or BFS on grid' },
  { name: 'Clone Graph', number: '#133', pattern: 'Graphs/DFS', timeOptimal: 'O(V+E)', spaceOptimal: 'O(V)', difficulty: 'Medium', notes: 'DFS with HashMap' },
  { name: 'Max Area of Island', number: '#695', pattern: 'Graphs/DFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Medium', notes: 'DFS tracking area' },
  { name: 'Pacific Atlantic Water Flow', number: '#417', pattern: 'Graphs/DFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Medium', notes: 'DFS from both oceans' },
  { name: 'Surrounded Regions', number: '#130', pattern: 'Graphs/DFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Medium', notes: 'DFS from border' },
  { name: 'Rotting Oranges', number: '#994', pattern: 'Graphs/BFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Medium', notes: 'Multi-source BFS' },
  { name: 'Walls and Gates', number: '#286', pattern: 'Graphs/BFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Medium', notes: 'Multi-source BFS' },
  { name: 'Course Schedule', number: '#207', pattern: 'Graphs/Topological Sort', timeOptimal: 'O(V+E)', spaceOptimal: 'O(V+E)', difficulty: 'Medium', notes: 'Detect cycle in directed graph' },
  { name: 'Course Schedule II', number: '#210', pattern: 'Graphs/Topological Sort', timeOptimal: 'O(V+E)', spaceOptimal: 'O(V+E)', difficulty: 'Medium', notes: 'DFS or Kahn\'s algorithm' },
  { name: 'Redundant Connection', number: '#684', pattern: 'Graphs/Union Find', timeOptimal: 'O(n·α(n))', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'α = inverse Ackermann' },
  { name: 'Number of Connected Components', number: '#323', pattern: 'Graphs/Union Find', timeOptimal: 'O(n·α(n))', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Union find or DFS' },
  { name: 'Graph Valid Tree', number: '#261', pattern: 'Graphs/Union Find', timeOptimal: 'O(n·α(n))', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'No cycles + connected' },
  { name: 'Word Ladder', number: '#127', pattern: 'Graphs/BFS', timeOptimal: 'O(n·m²)', spaceOptimal: 'O(n·m)', difficulty: 'Hard', notes: 'n=words, m=word length' },

  // ==================== ADVANCED GRAPHS ====================
  { name: 'Reconstruct Itinerary', number: '#332', pattern: 'Graphs/DFS', timeOptimal: 'O(E log E)', spaceOptimal: 'O(E)', difficulty: 'Hard', notes: 'Eulerian path' },
  { name: 'Min Cost to Connect All Points', number: '#1584', pattern: 'Graphs/MST', timeOptimal: 'O(n² log n)', spaceOptimal: 'O(n²)', difficulty: 'Medium', notes: 'Prim\'s or Kruskal\'s' },
  { name: 'Network Delay Time', number: '#743', pattern: 'Graphs/Dijkstra', timeOptimal: 'O(E log V)', spaceOptimal: 'O(V+E)', difficulty: 'Medium', notes: 'Dijkstra with min heap' },
  { name: 'Swim in Rising Water', number: '#778', pattern: 'Graphs/Dijkstra', timeOptimal: 'O(n² log n)', spaceOptimal: 'O(n²)', difficulty: 'Hard', notes: 'Modified Dijkstra' },
  { name: 'Alien Dictionary', number: '#269', pattern: 'Graphs/Topological Sort', timeOptimal: 'O(C)', spaceOptimal: 'O(1)', difficulty: 'Hard', notes: 'C = total chars in all words' },
  { name: 'Cheapest Flights Within K Stops', number: '#787', pattern: 'Graphs/BFS', timeOptimal: 'O(n·E)', spaceOptimal: 'O(V)', difficulty: 'Medium', notes: 'Modified BFS or Bellman-Ford' },

  // ==================== 1-D DYNAMIC PROGRAMMING ====================
  { name: 'Climbing Stairs', number: '#70', pattern: 'DP', timeOptimal: 'O(n)', timeNaive: 'O(2^n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Fibonacci sequence' },
  { name: 'Min Cost Climbing Stairs', number: '#746', pattern: 'DP', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'DP with 2 variables' },
  { name: 'House Robber', number: '#198', pattern: 'DP', timeOptimal: 'O(n)', timeNaive: 'O(2^n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'DP: rob[i] vs rob[i-1]' },
  { name: 'House Robber II', number: '#213', pattern: 'DP', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Two passes (skip first or last)' },
  { name: 'Longest Palindromic Substring', number: '#5', pattern: 'DP', timeOptimal: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Expand around center' },
  { name: 'Palindromic Substrings', number: '#647', pattern: 'DP', timeOptimal: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Expand around center' },
  { name: 'Decode Ways', number: '#91', pattern: 'DP', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'DP with 2 variables' },
  { name: 'Coin Change', number: '#322', pattern: 'DP', timeOptimal: 'O(n·m)', timeNaive: 'O(m^n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'n=amount, m=coins' },
  { name: 'Maximum Product Subarray', number: '#152', pattern: 'DP', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Track min and max' },
  { name: 'Word Break', number: '#139', pattern: 'DP', timeOptimal: 'O(n·m·k)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'k=avg word length' },
  { name: 'Longest Increasing Subsequence', number: '#300', pattern: 'DP', timeOptimal: 'O(n log n)', timeNaive: 'O(n²)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Binary search on tails array' },
  { name: 'Partition Equal Subset Sum', number: '#416', pattern: 'DP', timeOptimal: 'O(n·sum)', spaceOptimal: 'O(sum)', difficulty: 'Medium', notes: 'Subset sum = total/2' },

  // ==================== 2-D DYNAMIC PROGRAMMING ====================
  { name: 'Unique Paths', number: '#62', pattern: 'DP', timeOptimal: 'O(m·n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'dp[i][j] = dp[i-1][j] + dp[i][j-1]' },
  { name: 'Longest Common Subsequence', number: '#1143', pattern: 'DP', timeOptimal: 'O(m·n)', spaceOptimal: 'O(min(m,n))', difficulty: 'Medium', notes: 'Classic 2D DP' },
  { name: 'Best Time to Buy and Sell Stock With Cooldown', number: '#309', pattern: 'DP', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'State machine DP' },
  { name: 'Coin Change II', number: '#518', pattern: 'DP', timeOptimal: 'O(n·m)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Unbounded knapsack' },
  { name: 'Target Sum', number: '#494', pattern: 'DP', timeOptimal: 'O(n·sum)', spaceOptimal: 'O(sum)', difficulty: 'Medium', notes: 'Convert to subset sum' },
  { name: 'Interleaving String', number: '#97', pattern: 'DP', timeOptimal: 'O(m·n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: '2D DP checking both strings' },
  { name: 'Longest Increasing Path in Matrix', number: '#329', pattern: 'DP + DFS', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m·n)', difficulty: 'Hard', notes: 'DFS with memoization' },
  { name: 'Distinct Subsequences', number: '#115', pattern: 'DP', timeOptimal: 'O(m·n)', spaceOptimal: 'O(n)', difficulty: 'Hard', notes: 'Count subsequences matching pattern' },
  { name: 'Edit Distance', number: '#72', pattern: 'DP', timeOptimal: 'O(m·n)', spaceOptimal: 'O(min(m,n))', difficulty: 'Hard', notes: 'Levenshtein distance' },
  { name: 'Burst Balloons', number: '#312', pattern: 'DP', timeOptimal: 'O(n³)', spaceOptimal: 'O(n²)', difficulty: 'Hard', notes: 'Interval DP' },
  { name: 'Regular Expression Matching', number: '#10', pattern: 'DP', timeOptimal: 'O(m·n)', spaceOptimal: 'O(n)', difficulty: 'Hard', notes: '2D DP with * and .' },

  // ==================== GREEDY ====================
  { name: 'Maximum Subarray', number: '#53', pattern: 'Greedy/DP', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Kadane\'s algorithm' },
  { name: 'Jump Game', number: '#55', pattern: 'Greedy', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Track max reachable' },
  { name: 'Jump Game II', number: '#45', pattern: 'Greedy', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'BFS-like greedy' },
  { name: 'Gas Station', number: '#134', pattern: 'Greedy', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'One pass tracking surplus' },
  { name: 'Hand of Straights', number: '#846', pattern: 'Greedy', timeOptimal: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Sort + greedy grouping' },
  { name: 'Merge Triplets to Form Target', number: '#1899', pattern: 'Greedy', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Track max reachable for each position' },
  { name: 'Partition Labels', number: '#763', pattern: 'Greedy', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Track last occurrence' },
  { name: 'Valid Parenthesis String', number: '#678', pattern: 'Greedy', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Track min/max open count' },

  // ==================== INTERVALS ====================
  { name: 'Insert Interval', number: '#57', pattern: 'Intervals', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Three phases: before, merge, after' },
  { name: 'Merge Intervals', number: '#56', pattern: 'Intervals', timeOptimal: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Sort by start time' },
  { name: 'Non-overlapping Intervals', number: '#435', pattern: 'Intervals', timeOptimal: 'O(n log n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Greedy: sort by end time' },
  { name: 'Meeting Rooms', number: '#252', pattern: 'Intervals', timeOptimal: 'O(n log n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Sort and check overlaps' },
  { name: 'Meeting Rooms II', number: '#253', pattern: 'Intervals', timeOptimal: 'O(n log n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'Min heap or sweep line' },
  { name: 'Minimum Interval to Include Each Query', number: '#1851', pattern: 'Intervals + Heap', timeOptimal: 'O(n log n + q log q)', spaceOptimal: 'O(n+q)', difficulty: 'Hard', notes: 'Sort intervals and queries' },

  // ==================== MATH & GEOMETRY ====================
  { name: 'Rotate Image', number: '#48', pattern: 'Math', timeOptimal: 'O(n²)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Transpose then reverse rows' },
  { name: 'Spiral Matrix', number: '#54', pattern: 'Math', timeOptimal: 'O(m·n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Four pointers tracking boundaries' },
  { name: 'Set Matrix Zeroes', number: '#73', pattern: 'Math', timeOptimal: 'O(m·n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Use first row/col as markers' },
  { name: 'Happy Number', number: '#202', pattern: 'Math', timeOptimal: 'O(log n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Cycle detection' },
  { name: 'Plus One', number: '#66', pattern: 'Math', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Handle carry' },
  { name: 'Pow(x, n)', number: '#50', pattern: 'Math', timeOptimal: 'O(log n)', timeNaive: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Binary exponentiation' },
  { name: 'Multiply Strings', number: '#43', pattern: 'Math', timeOptimal: 'O(m·n)', spaceOptimal: 'O(m+n)', difficulty: 'Medium', notes: 'Digit-by-digit multiplication' },
  { name: 'Detect Squares', number: '#2013', pattern: 'Math', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Medium', notes: 'HashMap for point counting' },

  // ==================== BIT MANIPULATION ====================
  { name: 'Single Number', number: '#136', pattern: 'Bit Manipulation', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'XOR all numbers' },
  { name: 'Number of 1 Bits', number: '#191', pattern: 'Bit Manipulation', timeOptimal: 'O(1)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Count set bits' },
  { name: 'Counting Bits', number: '#338', pattern: 'Bit Manipulation', timeOptimal: 'O(n)', spaceOptimal: 'O(n)', difficulty: 'Easy', notes: 'DP: bits[i] = bits[i>>1] + (i&1)' },
  { name: 'Reverse Bits', number: '#190', pattern: 'Bit Manipulation', timeOptimal: 'O(1)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'Shift and accumulate' },
  { name: 'Missing Number', number: '#268', pattern: 'Bit Manipulation', timeOptimal: 'O(n)', spaceOptimal: 'O(1)', difficulty: 'Easy', notes: 'XOR or sum formula' },
  { name: 'Sum of Two Integers', number: '#371', pattern: 'Bit Manipulation', timeOptimal: 'O(1)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'XOR for sum, AND for carry' },
  { name: 'Reverse Integer', number: '#7', pattern: 'Math', timeOptimal: 'O(log n)', spaceOptimal: 'O(1)', difficulty: 'Medium', notes: 'Check overflow' },
];
