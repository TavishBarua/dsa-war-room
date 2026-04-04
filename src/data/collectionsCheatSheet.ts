// Collections Cheat Sheet — Quick reference for DSA problem solving
// Methods, parameters, and examples for all common data structures

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
    declaration: 'let str = "hello"; // or new String("hello")',
    methods: [
      {
        method: 'charAt(index)',
        syntax: 'str.charAt(i)',
        description: 'Get character at index i',
        example: '"hello".charAt(1) → "e"',
        returns: 'string (single character)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'indexOf(substring, fromIndex?)',
        syntax: 'str.indexOf(substr, start?)',
        description: 'Find first occurrence of substring, optionally starting from index',
        example: '"hello".indexOf("l") → 2\n"hello".indexOf("l", 3) → 3',
        returns: 'number (index or -1 if not found)',
        timeComplexity: 'O(n*m)'
      },
      {
        method: 'lastIndexOf(substring)',
        syntax: 'str.lastIndexOf(substr)',
        description: 'Find last occurrence of substring',
        example: '"hello".lastIndexOf("l") → 3',
        returns: 'number (index or -1 if not found)',
        timeComplexity: 'O(n*m)'
      },
      {
        method: 'substring(start, end?)',
        syntax: 'str.substring(start, end)',
        description: 'Extract substring from start (inclusive) to end (exclusive)',
        example: '"hello".substring(1, 4) → "ell"\n"hello".substring(2) → "llo"',
        returns: 'string',
        timeComplexity: 'O(n)'
      },
      {
        method: 'slice(start, end?)',
        syntax: 'str.slice(start, end)',
        description: 'Similar to substring but supports negative indices',
        example: '"hello".slice(-2) → "lo"\n"hello".slice(1, -1) → "ell"',
        returns: 'string',
        timeComplexity: 'O(n)'
      },
      {
        method: 'split(separator, limit?)',
        syntax: 'str.split(sep)',
        description: 'Split string into array by separator',
        example: '"a,b,c".split(",") → ["a", "b", "c"]\n"hello".split("") → ["h","e","l","l","o"]',
        returns: 'string[]',
        timeComplexity: 'O(n)'
      },
      {
        method: 'replace(search, replacement)',
        syntax: 'str.replace(old, new)',
        description: 'Replace first occurrence (use replaceAll for all)',
        example: '"hello".replace("l", "L") → "heLlo"',
        returns: 'string',
        timeComplexity: 'O(n)'
      },
      {
        method: 'toLowerCase() / toUpperCase()',
        syntax: 'str.toLowerCase()',
        description: 'Convert to lowercase/uppercase',
        example: '"HeLLo".toLowerCase() → "hello"',
        returns: 'string',
        timeComplexity: 'O(n)'
      },
      {
        method: 'trim()',
        syntax: 'str.trim()',
        description: 'Remove whitespace from both ends',
        example: '"  hello  ".trim() → "hello"',
        returns: 'string',
        timeComplexity: 'O(n)'
      },
      {
        method: 'startsWith(prefix) / endsWith(suffix)',
        syntax: 'str.startsWith(pre)',
        description: 'Check if string starts/ends with substring',
        example: '"hello".startsWith("he") → true',
        returns: 'boolean',
        timeComplexity: 'O(m)'
      },
      {
        method: 'includes(substring)',
        syntax: 'str.includes(substr)',
        description: 'Check if string contains substring',
        example: '"hello".includes("ll") → true',
        returns: 'boolean',
        timeComplexity: 'O(n*m)'
      },
      {
        method: 'length',
        syntax: 'str.length',
        description: 'Get length of string (property, not method)',
        example: '"hello".length → 5',
        returns: 'number',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Convert to array: str.split("")',
      'Reverse string: str.split("").reverse().join("")',
      'Check palindrome: str === str.split("").reverse().join("")',
      'Remove spaces: str.replace(/\\s/g, "")'
    ]
  },

  {
    name: 'Array',
    description: 'Dynamic list of elements',
    declaration: 'let arr = [1, 2, 3]; // or new Array(5)',
    methods: [
      {
        method: 'push(element)',
        syntax: 'arr.push(item)',
        description: 'Add element to end',
        example: '[1,2].push(3) → [1,2,3]',
        returns: 'number (new length)',
        timeComplexity: 'O(1) amortized'
      },
      {
        method: 'pop()',
        syntax: 'arr.pop()',
        description: 'Remove and return last element',
        example: '[1,2,3].pop() → 3, arr becomes [1,2]',
        returns: 'element (or undefined)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'shift()',
        syntax: 'arr.shift()',
        description: 'Remove and return first element',
        example: '[1,2,3].shift() → 1, arr becomes [2,3]',
        returns: 'element (or undefined)',
        timeComplexity: 'O(n)'
      },
      {
        method: 'unshift(element)',
        syntax: 'arr.unshift(item)',
        description: 'Add element to beginning',
        example: '[2,3].unshift(1) → [1,2,3]',
        returns: 'number (new length)',
        timeComplexity: 'O(n)'
      },
      {
        method: 'slice(start, end?)',
        syntax: 'arr.slice(start, end)',
        description: 'Extract subarray (does NOT modify original)',
        example: '[1,2,3,4].slice(1,3) → [2,3]',
        returns: 'new array',
        timeComplexity: 'O(n)'
      },
      {
        method: 'splice(start, deleteCount, ...items)',
        syntax: 'arr.splice(idx, count, newItems)',
        description: 'Remove/add elements (MODIFIES original)',
        example: '[1,2,3,4].splice(1,2) → [2,3], arr becomes [1,4]\n[1,2].splice(1,0,9) → [], arr becomes [1,9,2]',
        returns: 'array of removed elements',
        timeComplexity: 'O(n)'
      },
      {
        method: 'indexOf(element, fromIndex?)',
        syntax: 'arr.indexOf(item)',
        description: 'Find first index of element',
        example: '[1,2,3,2].indexOf(2) → 1',
        returns: 'number (index or -1)',
        timeComplexity: 'O(n)'
      },
      {
        method: 'includes(element)',
        syntax: 'arr.includes(item)',
        description: 'Check if array contains element',
        example: '[1,2,3].includes(2) → true',
        returns: 'boolean',
        timeComplexity: 'O(n)'
      },
      {
        method: 'join(separator)',
        syntax: 'arr.join(sep)',
        description: 'Join array elements into string',
        example: '[1,2,3].join("-") → "1-2-3"\n["h","i"].join("") → "hi"',
        returns: 'string',
        timeComplexity: 'O(n)'
      },
      {
        method: 'reverse()',
        syntax: 'arr.reverse()',
        description: 'Reverse array IN PLACE (modifies original)',
        example: '[1,2,3].reverse() → [3,2,1]',
        returns: 'same array (reversed)',
        timeComplexity: 'O(n)'
      },
      {
        method: 'sort(compareFn?)',
        syntax: 'arr.sort((a,b) => a-b)',
        description: 'Sort array IN PLACE (default: lexicographic)',
        example: '[3,1,2].sort() → [1,2,3]\n[10,2,1].sort() → [1,10,2] (strings!)\n[10,2,1].sort((a,b)=>a-b) → [1,2,10]',
        returns: 'same array (sorted)',
        timeComplexity: 'O(n log n)'
      },
      {
        method: 'map(callback)',
        syntax: 'arr.map(x => x*2)',
        description: 'Transform each element',
        example: '[1,2,3].map(x => x*2) → [2,4,6]',
        returns: 'new array',
        timeComplexity: 'O(n)'
      },
      {
        method: 'filter(callback)',
        syntax: 'arr.filter(x => x>2)',
        description: 'Keep elements that pass test',
        example: '[1,2,3,4].filter(x => x>2) → [3,4]',
        returns: 'new array',
        timeComplexity: 'O(n)'
      },
      {
        method: 'reduce(callback, initial)',
        syntax: 'arr.reduce((acc,x) => acc+x, 0)',
        description: 'Reduce array to single value',
        example: '[1,2,3].reduce((sum,x) => sum+x, 0) → 6',
        returns: 'any type',
        timeComplexity: 'O(n)'
      },
      {
        method: 'forEach(callback)',
        syntax: 'arr.forEach(x => console.log(x))',
        description: 'Execute function for each element',
        example: '[1,2,3].forEach(x => console.log(x))',
        returns: 'undefined',
        timeComplexity: 'O(n)'
      },
      {
        method: 'length',
        syntax: 'arr.length',
        description: 'Get/set array length (property)',
        example: '[1,2,3].length → 3',
        returns: 'number',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Stack: push() to add, pop() to remove from end',
      'Queue: push() to add, shift() to remove from front',
      'Create filled array: Array(n).fill(0)',
      'Create range: [...Array(n).keys()] → [0,1,2,...,n-1]',
      'Peek last: arr[arr.length - 1]',
      'Peek first: arr[0]'
    ]
  },

  {
    name: 'Set',
    description: 'Collection of unique values (no duplicates)',
    declaration: 'let set = new Set([1, 2, 3]);',
    methods: [
      {
        method: 'add(value)',
        syntax: 'set.add(item)',
        description: 'Add element to set (ignores duplicates)',
        example: 'set.add(5) → Set {1,2,3,5}',
        returns: 'Set (for chaining)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'has(value)',
        syntax: 'set.has(item)',
        description: 'Check if set contains element',
        example: 'set.has(2) → true',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'delete(value)',
        syntax: 'set.delete(item)',
        description: 'Remove element from set',
        example: 'set.delete(2) → true, set becomes {1,3}',
        returns: 'boolean (true if existed)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'clear()',
        syntax: 'set.clear()',
        description: 'Remove all elements',
        example: 'set.clear() → Set {}',
        returns: 'undefined',
        timeComplexity: 'O(n)'
      },
      {
        method: 'size',
        syntax: 'set.size',
        description: 'Get number of elements (property, not method)',
        example: 'set.size → 3',
        returns: 'number',
        timeComplexity: 'O(1)'
      },
      {
        method: 'values() / keys()',
        syntax: 'set.values()',
        description: 'Get iterator of values (keys same as values in Set)',
        example: 'for (let val of set.values()) {...}',
        returns: 'Iterator',
        timeComplexity: 'O(n) to iterate'
      },
      {
        method: 'forEach(callback)',
        syntax: 'set.forEach(val => ...)',
        description: 'Execute function for each element',
        example: 'set.forEach(x => console.log(x))',
        returns: 'undefined',
        timeComplexity: 'O(n)'
      }
    ],
    commonPatterns: [
      'Remove duplicates: new Set([1,1,2,3]) → Set {1,2,3}',
      'Convert to array: [...set] or Array.from(set)',
      'Check duplicates: arr.length !== new Set(arr).size',
      'Intersection: new Set([...setA].filter(x => setB.has(x)))',
      'Union: new Set([...setA, ...setB])'
    ]
  },

  {
    name: 'Map',
    description: 'Key-value pairs (keys can be any type)',
    declaration: 'let map = new Map([[key1, val1], [key2, val2]]);',
    methods: [
      {
        method: 'set(key, value)',
        syntax: 'map.set(key, val)',
        description: 'Add or update key-value pair',
        example: 'map.set("a", 1) → Map {"a" => 1}',
        returns: 'Map (for chaining)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'get(key)',
        syntax: 'map.get(key)',
        description: 'Get value for key (undefined if not exists)',
        example: 'map.get("a") → 1',
        returns: 'value or undefined',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'has(key)',
        syntax: 'map.has(key)',
        description: 'Check if key exists',
        example: 'map.has("a") → true',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'delete(key)',
        syntax: 'map.delete(key)',
        description: 'Remove key-value pair',
        example: 'map.delete("a") → true',
        returns: 'boolean (true if existed)',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'clear()',
        syntax: 'map.clear()',
        description: 'Remove all entries',
        example: 'map.clear() → Map {}',
        returns: 'undefined',
        timeComplexity: 'O(n)'
      },
      {
        method: 'size',
        syntax: 'map.size',
        description: 'Get number of entries (property)',
        example: 'map.size → 3',
        returns: 'number',
        timeComplexity: 'O(1)'
      },
      {
        method: 'keys()',
        syntax: 'map.keys()',
        description: 'Get iterator of keys',
        example: 'for (let key of map.keys()) {...}\n[...map.keys()] → array',
        returns: 'Iterator',
        timeComplexity: 'O(n) to iterate'
      },
      {
        method: 'values()',
        syntax: 'map.values()',
        description: 'Get iterator of values',
        example: 'for (let val of map.values()) {...}',
        returns: 'Iterator',
        timeComplexity: 'O(n) to iterate'
      },
      {
        method: 'entries()',
        syntax: 'map.entries()',
        description: 'Get iterator of [key, value] pairs',
        example: 'for (let [k,v] of map.entries()) {...}',
        returns: 'Iterator',
        timeComplexity: 'O(n) to iterate'
      },
      {
        method: 'forEach(callback)',
        syntax: 'map.forEach((val, key) => ...)',
        description: 'Execute function for each entry',
        example: 'map.forEach((v,k) => console.log(k,v))',
        returns: 'undefined',
        timeComplexity: 'O(n)'
      }
    ],
    commonPatterns: [
      'Frequency count: map.set(key, (map.get(key) || 0) + 1)',
      'Default value: map.get(key) || defaultValue',
      'Group by: items.reduce((map, item) => map.set(item.key, [...]), new Map())',
      'Convert to object: Object.fromEntries(map)',
      'Convert from object: new Map(Object.entries(obj))'
    ]
  },

  {
    name: 'Object (as HashMap)',
    description: 'Simple key-value pairs (keys are strings/symbols)',
    declaration: 'let obj = {}; // or new Object()',
    methods: [
      {
        method: 'obj[key] = value',
        syntax: 'obj[key] = val',
        description: 'Set property',
        example: 'obj["a"] = 1 → {a: 1}\nobj.a = 1 (dot notation)',
        returns: 'value',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'obj[key]',
        syntax: 'obj[key]',
        description: 'Get property (undefined if not exists)',
        example: 'obj["a"] → 1\nobj.a (dot notation)',
        returns: 'value or undefined',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'key in obj',
        syntax: 'key in obj',
        description: 'Check if key exists',
        example: '"a" in obj → true',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'delete obj[key]',
        syntax: 'delete obj[key]',
        description: 'Remove property',
        example: 'delete obj["a"] → true',
        returns: 'boolean',
        timeComplexity: 'O(1) average'
      },
      {
        method: 'Object.keys(obj)',
        syntax: 'Object.keys(obj)',
        description: 'Get array of keys',
        example: 'Object.keys({a:1, b:2}) → ["a", "b"]',
        returns: 'string[]',
        timeComplexity: 'O(n)'
      },
      {
        method: 'Object.values(obj)',
        syntax: 'Object.values(obj)',
        description: 'Get array of values',
        example: 'Object.values({a:1, b:2}) → [1, 2]',
        returns: 'any[]',
        timeComplexity: 'O(n)'
      },
      {
        method: 'Object.entries(obj)',
        syntax: 'Object.entries(obj)',
        description: 'Get array of [key, value] pairs',
        example: 'Object.entries({a:1, b:2}) → [["a",1], ["b",2]]',
        returns: '[string, any][]',
        timeComplexity: 'O(n)'
      }
    ],
    commonPatterns: [
      'Frequency count: obj[key] = (obj[key] || 0) + 1',
      'Check exists: obj.hasOwnProperty(key) or key in obj',
      'Iterate: for (let key in obj) {...}',
      'Safe access: obj[key] ?? defaultValue'
    ]
  },

  {
    name: 'Stack (using Array)',
    description: 'Last-In-First-Out (LIFO) data structure',
    declaration: 'let stack = []; // use array methods',
    methods: [
      {
        method: 'push(element)',
        syntax: 'stack.push(item)',
        description: 'Add element to top',
        example: 'stack.push(5)',
        returns: 'number (new length)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'pop()',
        syntax: 'stack.pop()',
        description: 'Remove and return top element',
        example: 'let top = stack.pop()',
        returns: 'element or undefined',
        timeComplexity: 'O(1)'
      },
      {
        method: 'peek (top)',
        syntax: 'stack[stack.length - 1]',
        description: 'View top element without removing',
        example: 'let top = stack[stack.length - 1]',
        returns: 'element or undefined',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty',
        syntax: 'stack.length === 0',
        description: 'Check if stack is empty',
        example: 'if (stack.length === 0) {...}',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Valid Parentheses: push opening brackets, pop when closing',
      'DFS: push nodes, pop to visit',
      'Monotonic stack: while (stack.length && arr[stack[stack.length-1]] < cur) stack.pop()'
    ]
  },

  {
    name: 'Queue (using Array)',
    description: 'First-In-First-Out (FIFO) data structure',
    declaration: 'let queue = []; // use array methods',
    methods: [
      {
        method: 'push(element)',
        syntax: 'queue.push(item)',
        description: 'Add element to back',
        example: 'queue.push(5)',
        returns: 'number (new length)',
        timeComplexity: 'O(1)'
      },
      {
        method: 'shift()',
        syntax: 'queue.shift()',
        description: 'Remove and return front element',
        example: 'let front = queue.shift()',
        returns: 'element or undefined',
        timeComplexity: 'O(n) - slow!'
      },
      {
        method: 'peek (front)',
        syntax: 'queue[0]',
        description: 'View front element without removing',
        example: 'let front = queue[0]',
        returns: 'element or undefined',
        timeComplexity: 'O(1)'
      },
      {
        method: 'isEmpty',
        syntax: 'queue.length === 0',
        description: 'Check if queue is empty',
        example: 'if (queue.length === 0) {...}',
        returns: 'boolean',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'BFS: queue.push(node), then queue.shift() to visit',
      'Level-order traversal: process queue.length nodes per level',
      'Sliding window: queue.shift() when window slides'
    ]
  },

  {
    name: 'Deque (Double-ended Queue)',
    description: 'Add/remove from both ends efficiently',
    declaration: 'let deque = []; // limited in JS, use array',
    methods: [
      {
        method: 'push(element)',
        syntax: 'deque.push(item)',
        description: 'Add to back',
        example: 'deque.push(5)',
        returns: 'number',
        timeComplexity: 'O(1)'
      },
      {
        method: 'pop()',
        syntax: 'deque.pop()',
        description: 'Remove from back',
        example: 'deque.pop()',
        returns: 'element',
        timeComplexity: 'O(1)'
      },
      {
        method: 'unshift(element)',
        syntax: 'deque.unshift(item)',
        description: 'Add to front',
        example: 'deque.unshift(5)',
        returns: 'number',
        timeComplexity: 'O(n) - slow!'
      },
      {
        method: 'shift()',
        syntax: 'deque.shift()',
        description: 'Remove from front',
        example: 'deque.shift()',
        returns: 'element',
        timeComplexity: 'O(n) - slow!'
      }
    ],
    commonPatterns: [
      'Sliding window maximum: monotonic deque',
      'Note: JS arrays are not true deques (shift/unshift are O(n))'
    ]
  },

  {
    name: 'Priority Queue (Heap)',
    description: 'Elements with priority (not native in JS)',
    declaration: '// Use library or implement with array',
    methods: [
      {
        method: 'push/insert',
        syntax: 'heap.push(item)',
        description: 'Add element and maintain heap property',
        example: 'minHeap.push(5)',
        returns: 'void',
        timeComplexity: 'O(log n)'
      },
      {
        method: 'pop/extract',
        syntax: 'heap.pop()',
        description: 'Remove and return min/max element',
        example: 'let min = minHeap.pop()',
        returns: 'element',
        timeComplexity: 'O(log n)'
      },
      {
        method: 'peek/top',
        syntax: 'heap[0]',
        description: 'View min/max without removing',
        example: 'let min = heap[0]',
        returns: 'element',
        timeComplexity: 'O(1)'
      }
    ],
    commonPatterns: [
      'Top K elements: use min-heap of size K',
      'Merge K sorted lists: min-heap with first elements',
      'JS implementation: heap[i] children at 2*i+1, 2*i+2; parent at Math.floor((i-1)/2)'
    ]
  },

  {
    name: 'Math Helpers',
    description: 'Common math operations for DSA',
    declaration: 'Math.* methods',
    methods: [
      {
        method: 'Math.max(...nums)',
        syntax: 'Math.max(a, b, c)',
        description: 'Get maximum value',
        example: 'Math.max(1, 5, 3) → 5\nMath.max(...[1,5,3]) → 5',
        returns: 'number',
        timeComplexity: 'O(n) for array'
      },
      {
        method: 'Math.min(...nums)',
        syntax: 'Math.min(a, b, c)',
        description: 'Get minimum value',
        example: 'Math.min(1, 5, 3) → 1',
        returns: 'number',
        timeComplexity: 'O(n) for array'
      },
      {
        method: 'Math.floor(x)',
        syntax: 'Math.floor(x)',
        description: 'Round down to integer',
        example: 'Math.floor(3.9) → 3\nMath.floor(-3.1) → -4',
        returns: 'number',
        timeComplexity: 'O(1)'
      },
      {
        method: 'Math.ceil(x)',
        syntax: 'Math.ceil(x)',
        description: 'Round up to integer',
        example: 'Math.ceil(3.1) → 4',
        returns: 'number',
        timeComplexity: 'O(1)'
      },
      {
        method: 'Math.abs(x)',
        syntax: 'Math.abs(x)',
        description: 'Absolute value',
        example: 'Math.abs(-5) → 5',
        returns: 'number',
        timeComplexity: 'O(1)'
      },
      {
        method: 'parseInt(str, radix)',
        syntax: 'parseInt(str, 10)',
        description: 'Parse string to integer',
        example: 'parseInt("123") → 123\nparseInt("1010", 2) → 10',
        returns: 'number',
        timeComplexity: 'O(n)'
      }
    ],
    commonPatterns: [
      'Integer division: Math.floor(a / b)',
      'Check if integer: n === Math.floor(n)',
      'Swap without temp: a = a + b; b = a - b; a = a - b;'
    ]
  }
];

// Export quick reference summary
export const QUICK_REFERENCE = {
  setVsMap: {
    Set: 'Stores unique VALUES only. Use for: checking existence, removing duplicates',
    Map: 'Stores KEY-VALUE pairs. Use for: counting, grouping, mapping one thing to another'
  },
  addVsSet: {
    'Set: set.add(value)': 'Adds a value to the set',
    'Map: map.set(key, value)': 'Adds/updates a key-value pair',
    'Array: arr.push(value)': 'Adds to end of array'
  },
  checkExistence: {
    'Set: set.has(value)': 'O(1) - Check if value exists',
    'Map: map.has(key)': 'O(1) - Check if key exists',
    'Array: arr.includes(value)': 'O(n) - Check if value exists',
    'Object: key in obj': 'O(1) - Check if key exists'
  },
  iterationPatterns: {
    'Array': 'for (let i = 0; i < arr.length; i++)',
    'Set': 'for (let val of set)',
    'Map': 'for (let [key, val] of map)',
    'Object': 'for (let key in obj) or Object.entries(obj)'
  }
};
