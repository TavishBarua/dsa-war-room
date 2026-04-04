// Collections Cheat Sheet — Quick reference for DSA problem solving (JAVA)
// Methods, parameters, and examples for all common data structures in Java

export interface MethodExample {
  method: string;
  syntax: string;
  description: string;
  example: string;
  returns: string;
  timeComplexity?: string;
}

export interface CollectionGuide {
  name: string;
  description: string;
  declaration: string;
  methods: MethodExample[];
  commonPatterns?: string[];
}

export const COLLECTIONS_CHEAT_SHEET: CollectionGuide[] = [
  {
    name: 'String',
    description: 'Immutable sequence of characters',
    declaration: 'String str = "hello";',
    methods: [
      {
        method: 'charAt(int index)',
        syntax: 'str.charAt(i)',
        description: 'Get character at index i',
        example: '"hello".charAt(1) → \'e\'',
        returns: 'char',
        timeComplexity: 'O(1)'
      },
      {
        method: 'indexOf(String str)',
        syntax: 'str.indexOf(substr)',
        description: 'Find first occurrence of substring',
        example: '"hello".indexOf("l") → 2\n"hello".indexOf("l", 3) → 3',
        returns: 'int (index or -1 if not found)',
        timeComplexity: 'O(n*m)'
      },
      {
        method: 'lastIndexOf(String str)',
        syntax: 'str.lastIndexOf(substr)',
        description: 'Find last occurrence of substring',
        example: '"hello".lastIndexOf("l") → 3',
        returns: 'int (index or -1 if not found)',
        timeComplexity: 'O(n*m)'
      },
      {
        method: 'substring(int start, int end)',
        syntax: 'str.substring(start, end)',
        description: 'Extract substring from start (inclusive) to end (exclusive)',
        example: '"hello".substring(1, 4) → "ell"\n"hello".substring(2) → "llo"',
        returns: 'String',
        timeComplexity: 'O(n)'
      },
      {
        method: 'split(String regex)',
        syntax: 'str.split(regex)',
        description: 'Split string into array by regex pattern',
        example: '"a,b,c".split(",") → ["a", "b", "c"]\n"hello".split("") → ["h","e","l","l","o"]',
        returns: 'String[]',
        timeComplexity: 'O(n)'
      },
      {
        method: 'replace(char old, char new)',
        syntax: 'str.replace(oldChar, newChar)',
        description: 'Replace all occurrences of character',
        example: '"hello".replace(\'l\', \'L\') → "heLLo"',
        returns: 'String',
        timeComplexity: 'O(n)'
      },
      {
        method: 'toLowerCase() / toUpperCase()',
        syntax: 'str.toLowerCase()',
        description: 'Convert to lowercase/uppercase',
        example: '"HeLLo".toLowerCase() → "hello"',
        returns: 'String',
        timeComplexity: 'O(n)'
      },
      {
        method: 'trim()',
        syntax: 'str.trim()',
        description: 'Remove whitespace from both ends',
        example: '"  hello  ".trim() → "hello"',
        returns: 'String',
        timeComplexity: 'O(n)'
      },
      {
        method: 'startsWith(String prefix)',
        syntax: 'str.startsWith(prefix)',
        description: 'Check if string starts with prefix',
        example: '"hello".startsWith("he") → true',
        returns: 'boolean',
        timeComplexity: 'O(m)'
      },
      {
        method: 'endsWith(String suffix)',
        syntax: 'str.endsWith(suffix)',
        description: 'Check if string ends with suffix',
        example: '"hello".endsWith("lo") → true',
        returns: 'boolean',
        timeComplexity: 'O(m)'
      },
      {
        method: 'contains(CharSequence s)',
        syntax: 'str.contains(substr)',
        description: 'Check if string contains substring',
        example: '"hello".contains("ll") → true',
        returns: 'boolean',
        timeComplexity: 'O(n*m)'
      },
      {
        method: 'length()',
        syntax: 'str.length()',
        description: 'Get length of string',
        example: '"hello".length() → 5',
        returns: 'int',
        timeComplexity: 'O(1)'
      },
      {
        method: 'toCharArray()',
        syntax: 'str.toCharArray()',
        description: 'Convert string to character array',
        example: '"hello".toCharArray() → [\'h\',\'e\',\'l\',\'l\',\'o\']',
        returns: 'char[]',
        timeComplexity: 'O(n)'
      }
    ],
    commonPatterns: [
      'Convert to array: str.toCharArray()',
      'Reverse string: new StringBuilder(str).reverse().toString()',
      'Check palindrome: str.equals(new StringBuilder(str).reverse().toString())',
      'Remove spaces: str.replaceAll("\\\\s+", "")'
    ]
  },

  {
    name: 'ArrayList',
    description: 'Dynamic resizable array (List interface)',
    declaration: 'ArrayList<Integer> list = new ArrayList<>();',
    methods: [
      {
        method: 'add(E element)',
        syntax: 'list.add(item)',
        description: 'Add element to end',
        example: 'list.add(5) → [1,2,3,5]',
        returns: 'boolean (always true)',
        timeComplexity: 'O(1) amortized'
      },
      {
        method: 'add(int index, E element)',
        syntax: 'list.add(index, item)',
        description: 'Insert element at specific index',
        example: 'list.add(1, 9) → [1,9,2,3]',
        returns: 'void',
        timeComplexity: 'O(n)'
      },
      {
        method: 'get(int index)',
        syntax: 'list.get(i)',
        description: 'Get element at index',
        example: 'list.get(1) → 2',
        returns: 'E (element type)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'set(int index, E element)',
        syntax: 'list.set(i, newVal)',
        description: 'Replace element at index',
        example: 'list.set(1, 99) → old value returned',
        returns: 'E (old value)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'remove(int index)',
        syntax: 'list.remove(i)',
        description: 'Remove element at index',
        example: 'list.remove(1) → removed element',
        returns: 'E (removed element)',
        timeComplexity: 'O(n)'
      },
      {
        method: 'remove(Object o)',
        syntax: 'list.remove(obj)',
        description: 'Remove first occurrence of object',
        example: 'list.remove(Integer.valueOf(2)) → true',
        returns: 'boolean',
        timeComplexity: 'O(n)'
      },
      {
        method: 'contains(Object o)',
        syntax: 'list.contains(obj)',
        description: 'Check if list contains element',
        example: 'list.contains(5) → true',
        returns: 'boolean',
        timeComplexity: 'O(n)'
      },
      {
        method: 'indexOf(Object o)',
        syntax: 'list.indexOf(obj)',
        description: 'Find first index of element',
        example: 'list.indexOf(2) → 1',
        returns: 'int (index or -1)',
        timeComplexity: 'O(n)'
      },
      {
        method: 'size()',
        syntax: 'list.size()',
        description: 'Get number of elements',
        example: 'list.size() → 4',
        returns: 'int',
        timeComplexity: 'O(1)'
      },
      {
        method: 'clear()',
        syntax: 'list.clear()',
        description: 'Remove all elements',
        example: 'list.clear() → []',
        returns: 'void',
        timeComplexity: 'O(n)'
      },
      {
        method: 'isEmpty()',
        syntax: 'list.isEmpty()',
        description: 'Check if list is empty',
        example: 'list.isEmpty() → false',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Create with values: new ArrayList<>(Arrays.asList(1,2,3))',
      'Convert to array: list.toArray(new Integer[0])',
      'Sort ascending: Collections.sort(list)',
      'Sort descending: Collections.sort(list, Collections.reverseOrder())',
      'Reverse: Collections.reverse(list)'
    ]
  },

  {
    name: 'HashSet',
    description: 'Unordered collection of unique elements (Set interface)',
    declaration: 'HashSet<Integer> set = new HashSet<>();',
    methods: [
      {
        method: 'add(E element)',
        syntax: 'set.add(item)',
        description: 'Add element to set (ignores duplicates)',
        example: 'set.add(5) → true (false if already exists)',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'contains(Object o)',
        syntax: 'set.contains(item)',
        description: 'Check if set contains element',
        example: 'set.contains(2) → true',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'remove(Object o)',
        syntax: 'set.remove(item)',
        description: 'Remove element from set',
        example: 'set.remove(2) → true (false if not found)',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'clear()',
        syntax: 'set.clear()',
        description: 'Remove all elements',
        example: 'set.clear() → {}',
        returns: 'void',
        timeComplexity: 'O(n)'
      },
      {
        method: 'size()',
        syntax: 'set.size()',
        description: 'Get number of elements',
        example: 'set.size() → 3',
        returns: 'int',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty()',
        syntax: 'set.isEmpty()',
        description: 'Check if set is empty',
        example: 'set.isEmpty() → false',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Remove duplicates: new HashSet<>(list)',
      'Convert to list: new ArrayList<>(set)',
      'Check duplicates: list.size() != new HashSet<>(list).size()',
      'Iterate: for (Integer num : set) {...}'
    ]
  },

  {
    name: 'HashMap',
    description: 'Key-value pairs with O(1) lookup (Map interface)',
    declaration: 'HashMap<String, Integer> map = new HashMap<>();',
    methods: [
      {
        method: 'put(K key, V value)',
        syntax: 'map.put(key, val)',
        description: 'Add or update key-value pair',
        example: 'map.put("a", 1) → null (or old value)',
        returns: 'V (old value or null)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'get(Object key)',
        syntax: 'map.get(key)',
        description: 'Get value for key',
        example: 'map.get("a") → 1 (or null)',
        returns: 'V (value or null)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'getOrDefault(K key, V defaultValue)',
        syntax: 'map.getOrDefault(key, def)',
        description: 'Get value or return default if not found',
        example: 'map.getOrDefault("x", 0) → 0',
        returns: 'V',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'containsKey(Object key)',
        syntax: 'map.containsKey(key)',
        description: 'Check if key exists',
        example: 'map.containsKey("a") → true',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'containsValue(Object value)',
        syntax: 'map.containsValue(val)',
        description: 'Check if value exists',
        example: 'map.containsValue(1) → true',
        returns: 'boolean',
        timeComplexity: 'O(n)'
      },
      {
        method: 'remove(Object key)',
        syntax: 'map.remove(key)',
        description: 'Remove key-value pair',
        example: 'map.remove("a") → 1 (or null)',
        returns: 'V (old value or null)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'clear()',
        syntax: 'map.clear()',
        description: 'Remove all entries',
        example: 'map.clear() → {}',
        returns: 'void',
        timeComplexity: 'O(n)'
      },
      {
        method: 'size()',
        syntax: 'map.size()',
        description: 'Get number of entries',
        example: 'map.size() → 3',
        returns: 'int',
        timeComplexity: 'O(1)'
      },
      {
        method: 'keySet()',
        syntax: 'map.keySet()',
        description: 'Get set of all keys',
        example: 'for (String key : map.keySet()) {...}',
        returns: 'Set<K>',
        timeComplexity: 'O(1) creation'
      },
      {
        method: 'values()',
        syntax: 'map.values()',
        description: 'Get collection of all values',
        example: 'for (Integer val : map.values()) {...}',
        returns: 'Collection<V>',
        timeComplexity: 'O(1) creation'
      },
      {
        method: 'entrySet()',
        syntax: 'map.entrySet()',
        description: 'Get set of key-value pairs',
        example: 'for (Map.Entry<K,V> e : map.entrySet()) {...}',
        returns: 'Set<Map.Entry<K,V>>',
        timeComplexity: 'O(1) creation'
      }
    ],
    commonPatterns: [
      'Frequency count: map.put(key, map.getOrDefault(key, 0) + 1)',
      'Iterate entries: for (Map.Entry<K,V> entry : map.entrySet()) {...}',
      'Check and update: if (map.containsKey(key)) {...}',
      'Get keys as list: new ArrayList<>(map.keySet())'
    ]
  },

  {
    name: 'Stack',
    description: 'Last-In-First-Out (LIFO) data structure',
    declaration: 'Stack<Integer> stack = new Stack<>();',
    methods: [
      {
        method: 'push(E element)',
        syntax: 'stack.push(item)',
        description: 'Add element to top',
        example: 'stack.push(5) → 5',
        returns: 'E (pushed element)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'pop()',
        syntax: 'stack.pop()',
        description: 'Remove and return top element',
        example: 'stack.pop() → 5',
        returns: 'E (throws EmptyStackException if empty)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'peek()',
        syntax: 'stack.peek()',
        description: 'View top element without removing',
        example: 'stack.peek() → 5',
        returns: 'E (throws EmptyStackException if empty)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty()',
        syntax: 'stack.isEmpty()',
        description: 'Check if stack is empty',
        example: 'stack.isEmpty() → false',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      },
      {
        method: 'search(Object o)',
        syntax: 'stack.search(item)',
        description: 'Get 1-based position from top',
        example: 'stack.search(5) → 1 (or -1 if not found)',
        returns: 'int',
        timeComplexity: 'O(n)'
      }
    ],
    commonPatterns: [
      'Valid Parentheses: push opening, pop when closing',
      'DFS: stack.push(node), then stack.pop() to visit',
      'Monotonic stack: while (!stack.isEmpty() && arr[stack.peek()] < cur) stack.pop()'
    ]
  },

  {
    name: 'Queue (LinkedList)',
    description: 'First-In-First-Out (FIFO) data structure',
    declaration: 'Queue<Integer> queue = new LinkedList<>();',
    methods: [
      {
        method: 'offer(E element)',
        syntax: 'queue.offer(item)',
        description: 'Add element to back (preferred over add)',
        example: 'queue.offer(5) → true',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      },
      {
        method: 'poll()',
        syntax: 'queue.poll()',
        description: 'Remove and return front element',
        example: 'queue.poll() → 1 (or null if empty)',
        returns: 'E (or null)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'peek()',
        syntax: 'queue.peek()',
        description: 'View front element without removing',
        example: 'queue.peek() → 1 (or null if empty)',
        returns: 'E (or null)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty()',
        syntax: 'queue.isEmpty()',
        description: 'Check if queue is empty',
        example: 'queue.isEmpty() → false',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      },
      {
        method: 'size()',
        syntax: 'queue.size()',
        description: 'Get number of elements',
        example: 'queue.size() → 3',
        returns: 'int',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'BFS: queue.offer(node), then queue.poll() to visit',
      'Level-order traversal: process queue.size() nodes per level',
      'Sliding window: queue.poll() when window slides'
    ]
  },

  {
    name: 'Deque (ArrayDeque)',
    description: 'Double-ended queue - add/remove from both ends',
    declaration: 'Deque<Integer> deque = new ArrayDeque<>();',
    methods: [
      {
        method: 'offerFirst(E e) / offerLast(E e)',
        syntax: 'deque.offerFirst(item)',
        description: 'Add to front/back',
        example: 'deque.offerFirst(5) → true',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      },
      {
        method: 'pollFirst() / pollLast()',
        syntax: 'deque.pollFirst()',
        description: 'Remove and return from front/back',
        example: 'deque.pollFirst() → 5',
        returns: 'E (or null)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'peekFirst() / peekLast()',
        syntax: 'deque.peekFirst()',
        description: 'View front/back without removing',
        example: 'deque.peekFirst() → 5',
        returns: 'E (or null)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty()',
        syntax: 'deque.isEmpty()',
        description: 'Check if deque is empty',
        example: 'deque.isEmpty() → false',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Sliding window maximum: monotonic deque',
      'Use as Stack: offerFirst()/pollFirst()',
      'Use as Queue: offerLast()/pollFirst()'
    ]
  },

  {
    name: 'PriorityQueue (Heap)',
    description: 'Min-heap by default, elements ordered by priority',
    declaration: 'PriorityQueue<Integer> pq = new PriorityQueue<>();',
    methods: [
      {
        method: 'offer(E element)',
        syntax: 'pq.offer(item)',
        description: 'Add element and maintain heap property',
        example: 'pq.offer(5) → true',
        returns: 'boolean',
        timeComplexity: 'O(log n)'
      },
      {
        method: 'poll()',
        syntax: 'pq.poll()',
        description: 'Remove and return min element',
        example: 'pq.poll() → 1',
        returns: 'E (or null)',
        timeComplexity: 'O(log n)'
      },
      {
        method: 'peek()',
        syntax: 'pq.peek()',
        description: 'View min element without removing',
        example: 'pq.peek() → 1',
        returns: 'E (or null)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty()',
        syntax: 'pq.isEmpty()',
        description: 'Check if heap is empty',
        example: 'pq.isEmpty() → false',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      },
      {
        method: 'size()',
        syntax: 'pq.size()',
        description: 'Get number of elements',
        example: 'pq.size() → 5',
        returns: 'int',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Max heap: new PriorityQueue<>(Collections.reverseOrder())',
      'Custom comparator: new PriorityQueue<>((a,b) -> a-b)',
      'Top K elements: use min-heap of size K',
      'Merge K sorted lists: min-heap with first elements'
    ]
  },

  {
    name: 'Arrays & Collections',
    description: 'Utility methods for arrays and collections',
    declaration: 'import java.util.Arrays; import java.util.Collections;',
    methods: [
      {
        method: 'Arrays.sort(arr)',
        syntax: 'Arrays.sort(arr)',
        description: 'Sort array in ascending order',
        example: 'Arrays.sort(new int[]{3,1,2}) → [1,2,3]',
        returns: 'void',
        timeComplexity: 'O(n log n)'
      },
      {
        method: 'Arrays.binarySearch(arr, key)',
        syntax: 'Arrays.binarySearch(arr, val)',
        description: 'Binary search in sorted array',
        example: 'Arrays.binarySearch(arr, 5) → index or -(insertion point)-1',
        returns: 'int',
        timeComplexity: 'O(log n)'
      },
      {
        method: 'Arrays.fill(arr, val)',
        syntax: 'Arrays.fill(arr, value)',
        description: 'Fill array with value',
        example: 'Arrays.fill(arr, 0) → all elements = 0',
        returns: 'void',
        timeComplexity: 'O(n)'
      },
      {
        method: 'Collections.sort(list)',
        syntax: 'Collections.sort(list)',
        description: 'Sort list in ascending order',
        example: 'Collections.sort(list)',
        returns: 'void',
        timeComplexity: 'O(n log n)'
      },
      {
        method: 'Collections.reverse(list)',
        syntax: 'Collections.reverse(list)',
        description: 'Reverse list in-place',
        example: 'Collections.reverse(list) → [3,2,1]',
        returns: 'void',
        timeComplexity: 'O(n)'
      },
      {
        method: 'Math.max(a, b)',
        syntax: 'Math.max(a, b)',
        description: 'Get maximum of two values',
        example: 'Math.max(5, 3) → 5',
        returns: 'int/double',
        timeComplexity: 'O(1)'
      },
      {
        method: 'Math.min(a, b)',
        syntax: 'Math.min(a, b)',
        description: 'Get minimum of two values',
        example: 'Math.min(5, 3) → 3',
        returns: 'int/double',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Sort with comparator: Arrays.sort(arr, (a,b) -> b-a)',
      'Convert array to list: Arrays.asList(arr)',
      'Copy array: Arrays.copyOf(arr, newLength)',
      'Integer division: Math.floorDiv(a, b)'
    ]
  }
];

// Export quick reference summary
export const QUICK_REFERENCE = {
  setVsMap: {
    Set: 'HashSet stores unique VALUES only. Use for: checking existence, removing duplicates',
    Map: 'HashMap stores KEY-VALUE pairs. Use for: counting frequency, grouping, mapping relationships'
  },
  addVsSet: {
    'HashSet: set.add(value)': 'Adds a value to the set, returns boolean',
    'HashMap: map.put(key, value)': 'Adds/updates a key-value pair, returns old value',
    'ArrayList: list.add(value)': 'Adds to end of list, returns boolean'
  },
  checkExistence: {
    'HashSet: set.contains(value)': 'O(1) average - Check if value exists',
    'HashMap: map.containsKey(key)': 'O(1) average - Check if key exists',
    'ArrayList: list.contains(value)': 'O(n) - Check if value exists (slow!)',
    'String: str.contains(substr)': 'O(n*m) - Check if substring exists'
  },
  iterationPatterns: {
    'ArrayList': 'for (int i = 0; i < list.size(); i++) {...}',
    'HashSet': 'for (Integer val : set) {...}',
    'HashMap': 'for (Map.Entry<K,V> entry : map.entrySet()) {...}',
    'Array': 'for (int num : arr) {...}'
  }
};
