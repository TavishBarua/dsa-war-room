export const PROBLEM_DESCRIPTIONS: Record<string, { desc: string; examples: string }> = {

  // ============================================================
  // WEEK 1 — Arrays & Hashing + Two Pointers (14 problems)
  // ============================================================

  'Contains Duplicate': {
    desc: 'Given an integer array nums, return true if any value appears at least twice.',
    examples: 'Input: nums = [1,2,3,1]\nOutput: true'
  },

  'Valid Anagram': {
    desc: 'Given two strings s and t, return true if t is an anagram of s.',
    examples: 'Input: s = "anagram", t = "nagaram"\nOutput: true'
  },

  'Two Sum': {
    desc: 'Given an array of integers and a target, return the indices of two numbers that add up to the target.',
    examples: 'Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]'
  },

  'Group Anagrams': {
    desc: 'Given an array of strings, group the anagrams together. Return the groups in any order.',
    examples: 'Input: strs = ["eat","tea","tan","ate","nat","bat"]\nOutput: [["eat","tea","ate"],["tan","nat"],["bat"]]'
  },

  'Top K Frequent Elements': {
    desc: 'Given an integer array and an integer k, return the k most frequent elements in any order.',
    examples: 'Input: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]'
  },

  'Product of Array Except Self': {
    desc: 'Given an integer array nums, return an array where each element is the product of all elements except itself. Solve without division in O(n) time.',
    examples: 'Input: nums = [1,2,3,4]\nOutput: [24,12,8,6]'
  },

  'Valid Sudoku': {
    desc: 'Determine if a 9x9 Sudoku board is valid. Only filled cells need to be validated according to row, column, and 3x3 box rules.',
    examples: 'Input: board = [["5","3",".",...],["6",".",".","1","9","5",...],...]  \nOutput: true'
  },

  'Encode and Decode Strings': {
    desc: 'Design an algorithm to encode a list of strings into a single string and decode it back to the original list.',
    examples: 'Input: ["lint","code","love","you"]\nEncoded: "4#lint4#code4#love3#you"\nDecoded: ["lint","code","love","you"]'
  },

  'Longest Consecutive Sequence': {
    desc: 'Given an unsorted array of integers, find the length of the longest consecutive element sequence in O(n) time.',
    examples: 'Input: nums = [100,4,200,1,3,2]\nOutput: 4  (sequence: [1,2,3,4])'
  },

  'Valid Palindrome': {
    desc: 'Given a string, determine if it is a palindrome considering only alphanumeric characters and ignoring case.',
    examples: 'Input: s = "A man, a plan, a canal: Panama"\nOutput: true'
  },

  'Two Sum II': {
    desc: 'Given a 1-indexed sorted array, find two numbers that add up to the target. Return their indices.',
    examples: 'Input: numbers = [2,7,11,15], target = 9\nOutput: [1,2]'
  },

  '3Sum': {
    desc: 'Given an integer array, return all unique triplets [a, b, c] such that a + b + c = 0.',
    examples: 'Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]'
  },

  'Container With Most Water': {
    desc: 'Given an array of heights, find two lines that together with the x-axis form a container holding the most water.',
    examples: 'Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49'
  },

  'Trapping Rain Water': {
    desc: 'Given an elevation map where each bar has width 1, compute how much water can be trapped after raining.',
    examples: 'Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6'
  },

  // ============================================================
  // WEEK 2 — Sliding Window + Stack (13 problems)
  // ============================================================

  'Best Time to Buy and Sell Stock': {
    desc: 'Given an array of stock prices, find the maximum profit from one buy and one sell. You must buy before you sell.',
    examples: 'Input: prices = [7,1,5,3,6,4]\nOutput: 5  (buy at 1, sell at 6)'
  },

  'Longest Substring Without Repeating Chars': {
    desc: 'Given a string, find the length of the longest substring without repeating characters.',
    examples: 'Input: s = "abcabcbb"\nOutput: 3  ("abc")'
  },

  'Longest Repeating Character Replacement': {
    desc: 'Given a string s and integer k, find the length of the longest substring with the same letter after replacing at most k characters.\n\n🎯 TRICK: Track max frequency in window. Valid when (window_size - max_freq) ≤ k. Why? Keep the most frequent char, replace everything else.',
    examples: 'Input: s = "AABABBA", k = 1\nOutput: 4  ("AABA" -> "AAAA")\n\nWindow [AABA]: size=4, maxFreq(A)=3, need 4-3=1 replacement ✅'
  },

  'Permutation in String': {
    desc: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1 as a substring.',
    examples: 'Input: s1 = "ab", s2 = "eidbaooo"\nOutput: true  ("ba" is a permutation of "ab")'
  },

  'Minimum Window Substring': {
    desc: 'Given strings s and t, return the shortest substring of s that contains all characters of t (including duplicates).',
    examples: 'Input: s = "ADOBECODEBANC", t = "ABC"\nOutput: "BANC"'
  },

  'Sliding Window Maximum': {
    desc: 'Given an array and a sliding window of size k, return the max value in each window position as the window slides left to right.',
    examples: 'Input: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]'
  },

  'Valid Parentheses': {
    desc: 'Given a string containing only parentheses characters (){}[], determine if the input string is valid (correctly opened and closed in order).',
    examples: 'Input: s = "()[]{}"  \nOutput: true'
  },

  'Min Stack': {
    desc: 'Design a stack that supports push, pop, top, and retrieving the minimum element, all in O(1) time.',
    examples: 'MinStack s; s.push(-2); s.push(0); s.push(-3);\ns.getMin() -> -3; s.pop(); s.getMin() -> -2'
  },

  'Evaluate Reverse Polish Notation': {
    desc: 'Evaluate an arithmetic expression given in Reverse Polish Notation (postfix). Valid operators are +, -, *, /.',
    examples: 'Input: tokens = ["2","1","+","3","*"]\nOutput: 9  ((2+1)*3)'
  },

  'Generate Parentheses': {
    desc: 'Given n pairs of parentheses, generate all combinations of well-formed parentheses.',
    examples: 'Input: n = 3\nOutput: ["((()))","(()())","(())()","()(())","()()()"]'
  },

  'Daily Temperatures': {
    desc: 'Given an array of daily temperatures, return an array where each element is the number of days until a warmer temperature. If none, use 0.',
    examples: 'Input: temps = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]'
  },

  'Car Fleet': {
    desc: 'N cars head toward a target. A car that catches another forms a fleet traveling at the slower speed. Return the number of fleets arriving at the target.',
    examples: 'Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]\nOutput: 3'
  },

  'Largest Rectangle in Histogram': {
    desc: 'Given an array of bar heights representing a histogram, find the area of the largest rectangle that fits entirely within the histogram.',
    examples: 'Input: heights = [2,1,5,6,2,3]\nOutput: 10  (5x2 rectangle at indices 2-3)'
  },

  // ============================================================
  // WEEK 3 — Binary Search + Linked Lists (18 problems)
  // ============================================================

  'Binary Search': {
    desc: 'Given a sorted array of integers and a target, return the index of the target or -1 if not found.',
    examples: 'Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4'
  },

  'Search a 2D Matrix': {
    desc: 'Search for a target in an m x n matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.',
    examples: 'Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\nOutput: true'
  },

  'Koko Eating Bananas': {
    desc: 'Koko has n piles of bananas and h hours. Find the minimum eating speed k (bananas/hour) so she can eat all bananas within h hours.',
    examples: 'Input: piles = [3,6,7,11], h = 8\nOutput: 4'
  },

  'Find Min in Rotated Sorted Array': {
    desc: 'Given a sorted array that has been rotated between 1 and n times, find the minimum element in O(log n) time.',
    examples: 'Input: nums = [3,4,5,1,2]\nOutput: 1'
  },

  'Search in Rotated Sorted Array': {
    desc: 'Given a rotated sorted array with unique values, search for a target and return its index or -1 in O(log n) time.',
    examples: 'Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4'
  },

  'Time Based Key-Value Store': {
    desc: 'Design a key-value store that stores multiple values for the same key at different timestamps and retrieves the value at or before a given timestamp.',
    examples: 'set("foo","bar",1); set("foo","bar2",4);\nget("foo",4) -> "bar2"; get("foo",3) -> "bar"'
  },

  'Median of Two Sorted Arrays': {
    desc: 'Given two sorted arrays nums1 and nums2, return the median of the combined sorted array in O(log(m+n)) time.',
    examples: 'Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.0'
  },

  'Reverse Linked List': {
    desc: 'Given the head of a singly linked list, reverse the list and return the new head.',
    examples: 'Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]'
  },

  'Merge Two Sorted Lists': {
    desc: 'Merge two sorted linked lists into one sorted linked list by splicing their nodes together.',
    examples: 'Input: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]'
  },

  'Reorder List': {
    desc: 'Given a linked list L0->L1->...->Ln, reorder it to L0->Ln->L1->Ln-1->L2->Ln-2->... in-place.',
    examples: 'Input: head = [1,2,3,4]\nOutput: [1,4,2,3]'
  },

  'Remove Nth Node From End': {
    desc: 'Given a linked list, remove the nth node from the end and return the head.',
    examples: 'Input: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]'
  },

  'Copy List with Random Pointer': {
    desc: 'Deep copy a linked list where each node has a next pointer and a random pointer that can point to any node or null.',
    examples: 'Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: deep copy of the same structure'
  },

  'Add Two Numbers': {
    desc: 'Given two non-empty linked lists representing non-negative integers in reverse order, return their sum as a linked list.',
    examples: 'Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]  (342 + 465 = 807)'
  },

  'Linked List Cycle': {
    desc: 'Given the head of a linked list, determine if the linked list has a cycle in it.',
    examples: 'Input: head = [3,2,0,-4], pos = 1 (tail connects to index 1)\nOutput: true'
  },

  'Find the Duplicate Number': {
    desc: 'Given an array of n+1 integers where each integer is in [1,n], find the one repeated number without modifying the array and using O(1) space.',
    examples: 'Input: nums = [1,3,4,2,2]\nOutput: 2'
  },

  'LRU Cache': {
    desc: 'Design a data structure that follows Least Recently Used eviction policy with O(1) get and put operations.',
    examples: 'LRUCache(2); put(1,1); put(2,2); get(1)->1;\nput(3,3); get(2)->-1  (evicted)'
  },

  'Merge K Sorted Lists': {
    desc: 'Merge k sorted linked lists into one sorted linked list.',
    examples: 'Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]'
  },

  'Reverse Nodes in K-Group': {
    desc: 'Given a linked list, reverse the nodes k at a time and return the modified list. Leftover nodes at the end stay as-is.',
    examples: 'Input: head = [1,2,3,4,5], k = 2\nOutput: [2,1,4,3,5]'
  },

  // ============================================================
  // WEEK 4 — Trees (15 problems)
  // ============================================================

  'Invert Binary Tree': {
    desc: 'Given the root of a binary tree, invert it so that every left child swaps with the right child at every level.',
    examples: 'Input: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]'
  },

  'Maximum Depth of Binary Tree': {
    desc: 'Given the root of a binary tree, return its maximum depth (number of nodes along the longest root-to-leaf path).',
    examples: 'Input: root = [3,9,20,null,null,15,7]\nOutput: 3'
  },

  'Diameter of Binary Tree': {
    desc: 'Given the root of a binary tree, return the length of the diameter — the longest path between any two nodes (measured in edges).',
    examples: 'Input: root = [1,2,3,4,5]\nOutput: 3  (path: 4->2->1->3)'
  },

  'Balanced Binary Tree': {
    desc: 'Given a binary tree, determine if it is height-balanced (the depth of the two subtrees of every node never differs by more than one).',
    examples: 'Input: root = [3,9,20,null,null,15,7]\nOutput: true'
  },

  'Same Tree': {
    desc: 'Given the roots of two binary trees, determine if they are structurally identical with the same node values.',
    examples: 'Input: p = [1,2,3], q = [1,2,3]\nOutput: true'
  },

  'Subtree of Another Tree': {
    desc: 'Given the roots of two binary trees, determine if the second tree is a subtree of the first tree.',
    examples: 'Input: root = [3,4,5,1,2], subRoot = [4,1,2]\nOutput: true'
  },

  'Lowest Common Ancestor of BST': {
    desc: 'Given a BST and two nodes, find the lowest common ancestor (the deepest node that is an ancestor of both).',
    examples: 'Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6'
  },

  'Binary Tree Level Order Traversal': {
    desc: 'Given the root of a binary tree, return the level order traversal of its node values (left to right, level by level).',
    examples: 'Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]'
  },

  'Binary Tree Right Side View': {
    desc: 'Given the root of a binary tree, return the values of the nodes visible when looking at the tree from the right side.',
    examples: 'Input: root = [1,2,3,null,5,null,4]\nOutput: [1,3,4]'
  },

  'Count Good Nodes in Binary Tree': {
    desc: 'Given a binary tree, count the nodes where no node on the path from root to that node has a value greater than the node itself.',
    examples: 'Input: root = [3,1,4,3,null,1,5]\nOutput: 4  (nodes 3, 3, 4, 5 are "good")'
  },

  'Validate Binary Search Tree': {
    desc: 'Given the root of a binary tree, determine if it is a valid BST (left subtree values < node < right subtree values, recursively).',
    examples: 'Input: root = [5,1,4,null,null,3,6]\nOutput: false  (4 is in right subtree but < 5 has child 3)'
  },

  'Kth Smallest Element in BST': {
    desc: 'Given the root of a BST and an integer k, return the kth smallest value (1-indexed) in the tree.',
    examples: 'Input: root = [3,1,4,null,2], k = 1\nOutput: 1'
  },

  'Construct Binary Tree from Preorder/Inorder': {
    desc: 'Given preorder and inorder traversal arrays of a binary tree, construct and return the tree.',
    examples: 'Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\nOutput: [3,9,20,null,null,15,7]'
  },

  'Binary Tree Maximum Path Sum': {
    desc: 'Given the root of a binary tree, return the maximum path sum of any non-empty path. A path can start and end at any node.',
    examples: 'Input: root = [-10,9,20,null,null,15,7]\nOutput: 42  (path: 15->20->7)'
  },

  'Serialize and Deserialize Binary Tree': {
    desc: 'Design an algorithm to serialize a binary tree to a string and deserialize that string back to the original tree structure.',
    examples: 'Input: root = [1,2,3,null,null,4,5]\nSerialize: "1,2,null,null,3,4,null,null,5,null,null"\nDeserialize: [1,2,3,null,null,4,5]'
  },

};
