export const PROBLEM_DESCRIPTIONS_2: Record<string, { desc: string; examples: string }> = {

  // ===================== WEEK 5: Heap / Priority Queue & Backtracking =====================

  'Kth Largest Element in a Stream': {
    desc: 'Design a class that finds the kth largest element in a stream of numbers.',
    examples: 'Input: k=3, nums=[4,5,8,2], add(3)\nOutput: 4'
  },

  'Last Stone Weight': {
    desc: 'Smash the two heaviest stones together repeatedly. If they differ, the remainder is the difference. Return the last remaining stone weight, or 0.',
    examples: 'Input: stones=[2,7,4,1,8,1]\nOutput: 1'
  },

  'K Closest Points to Origin': {
    desc: 'Given an array of points, return the k closest points to the origin (0,0).',
    examples: 'Input: points=[[1,3],[-2,2]], k=1\nOutput: [[-2,2]]'
  },

  'Kth Largest Element in Array': {
    desc: 'Find the kth largest element in an unsorted array. This is the kth largest in sorted order, not the kth distinct element.',
    examples: 'Input: nums=[3,2,1,5,6,4], k=2\nOutput: 5'
  },

  'Task Scheduler': {
    desc: 'Given tasks and a cooldown interval n, find the minimum number of intervals the CPU needs to finish all tasks.',
    examples: 'Input: tasks=["A","A","A","B","B","B"], n=2\nOutput: 8'
  },

  'Design Twitter': {
    desc: 'Design a simplified Twitter where users can post tweets, follow/unfollow, and retrieve the 10 most recent tweets in their feed.',
    examples: 'Input: postTweet(1,5), getNewsFeed(1)\nOutput: [5]'
  },

  'Find Median from Data Stream': {
    desc: 'Design a data structure that supports adding numbers and finding the median of all added numbers efficiently.',
    examples: 'Input: addNum(1), addNum(2), findMedian()\nOutput: 1.5'
  },

  'Subsets': {
    desc: 'Given an array of unique integers, return all possible subsets (the power set).',
    examples: 'Input: nums=[1,2,3]\nOutput: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]'
  },

  'Combination Sum': {
    desc: 'Given an array of distinct integers and a target, return all unique combinations that sum to the target. Numbers may be reused.',
    examples: 'Input: candidates=[2,3,6,7], target=7\nOutput: [[2,2,3],[7]]'
  },

  'Permutations': {
    desc: 'Given an array of distinct integers, return all possible permutations.',
    examples: 'Input: nums=[1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]'
  },

  'Subsets II': {
    desc: 'Given an array of integers that may contain duplicates, return all possible unique subsets.',
    examples: 'Input: nums=[1,2,2]\nOutput: [[],[1],[1,2],[1,2,2],[2],[2,2]]'
  },

  'Combination Sum II': {
    desc: 'Given an array of candidates (may have duplicates) and a target, find all unique combinations that sum to target. Each number used at most once.',
    examples: 'Input: candidates=[10,1,2,7,6,1,5], target=8\nOutput: [[1,1,6],[1,2,5],[1,7],[2,6]]'
  },

  'Word Search': {
    desc: 'Given an m x n board of characters and a word, determine if the word exists in the grid by moving to adjacent cells.',
    examples: 'Input: board=[["A","B"],["C","D"]], word="ABDC"\nOutput: true'
  },

  'Palindrome Partitioning': {
    desc: 'Given a string, partition it such that every substring is a palindrome. Return all possible palindrome partitionings.',
    examples: 'Input: s="aab"\nOutput: [["a","a","b"],["aa","b"]]'
  },

  'Letter Combinations of Phone Number': {
    desc: 'Given a string of digits 2-9, return all possible letter combinations that the number could represent on a phone keypad.',
    examples: 'Input: digits="23"\nOutput: ["ad","ae","af","bd","be","bf","cd","ce","cf"]'
  },

  'N-Queens': {
    desc: 'Place n queens on an n x n chessboard so that no two queens attack each other. Return all distinct solutions.',
    examples: 'Input: n=4\nOutput: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'
  },

  'N-Queens II': {
    desc: 'Return the number of distinct solutions to the n-queens puzzle.',
    examples: 'Input: n=4\nOutput: 2'
  },

  // ===================== WEEK 6: Tries & Graphs =====================

  'Implement Trie (Prefix Tree)': {
    desc: 'Implement a trie with insert, search, and startsWith methods.',
    examples: 'Input: insert("apple"), search("apple"), startsWith("app")\nOutput: null, true, true'
  },

  'Design Add and Search Words Data Structure': {
    desc: 'Design a data structure that supports adding words and searching with "." wildcards that match any letter.',
    examples: 'Input: addWord("bad"), search("b.d")\nOutput: null, true'
  },

  'Word Search II': {
    desc: 'Given an m x n board and a list of words, return all words that can be formed by sequentially adjacent cells on the board.',
    examples: 'Input: board=[["o","a"],["e","t"]], words=["oath","eat"]\nOutput: ["oath","eat"]'
  },

  'Number of Islands': {
    desc: 'Given a 2D grid of "1"s (land) and "0"s (water), count the number of islands.',
    examples: 'Input: grid=[["1","1","0"],["0","1","0"],["0","0","1"]]\nOutput: 2'
  },

  'Max Area of Island': {
    desc: 'Given a binary grid, return the maximum area of an island (connected 1s). Return 0 if no island.',
    examples: 'Input: grid=[[0,1,1],[0,1,0],[0,0,0]]\nOutput: 3'
  },

  'Clone Graph': {
    desc: 'Given a reference to a node in a connected undirected graph, return a deep copy of the graph.',
    examples: 'Input: adjList=[[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2,4],[1,3],[2,4],[1,3]]'
  },

  'Walls and Gates': {
    desc: 'Given a grid with walls (-1), gates (0), and empty rooms (INF), fill each empty room with the distance to its nearest gate.',
    examples: 'Input: rooms=[[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]\nOutput: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]'
  },

  'Rotting Oranges': {
    desc: 'Given a grid where 2=rotten, 1=fresh, 0=empty, return the minimum minutes until no fresh orange remains, or -1 if impossible.',
    examples: 'Input: grid=[[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4'
  },

  'Pacific Atlantic Water Flow': {
    desc: 'Given an island height map, find all cells where water can flow to both the Pacific (top/left) and Atlantic (bottom/right) oceans.',
    examples: 'Input: heights=[[1,2,3],[8,9,4],[7,6,5]]\nOutput: [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]'
  },

  'Surrounded Regions': {
    desc: 'Given an m x n board of "X" and "O", capture all regions of "O" that are completely surrounded by "X" (not connected to border).',
    examples: 'Input: board=[["X","X","X"],["X","O","X"],["X","X","X"]]\nOutput: [["X","X","X"],["X","X","X"],["X","X","X"]]'
  },

  'Course Schedule': {
    desc: 'Given numCourses and prerequisite pairs, determine if it is possible to finish all courses (detect cycle in directed graph).',
    examples: 'Input: numCourses=2, prerequisites=[[1,0]]\nOutput: true'
  },

  'Course Schedule II': {
    desc: 'Return a valid ordering of courses to finish all courses given prerequisites. Return empty array if impossible.',
    examples: 'Input: numCourses=4, prerequisites=[[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,1,2,3]'
  },

  'Graph Valid Tree': {
    desc: 'Given n nodes and a list of undirected edges, determine if these edges form a valid tree (connected, no cycles).',
    examples: 'Input: n=5, edges=[[0,1],[0,2],[0,3],[1,4]]\nOutput: true'
  },

  'Number of Connected Components': {
    desc: 'Given n nodes and a list of undirected edges, return the number of connected components in the graph.',
    examples: 'Input: n=5, edges=[[0,1],[1,2],[3,4]]\nOutput: 2'
  },

  'Redundant Connection': {
    desc: 'Given a graph that was a tree plus one extra edge, find and return the edge that can be removed to restore the tree.',
    examples: 'Input: edges=[[1,2],[1,3],[2,3]]\nOutput: [2,3]'
  },

  'Word Ladder': {
    desc: 'Given a begin word, end word, and dictionary, find the shortest transformation sequence length changing one letter at a time.',
    examples: 'Input: beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]\nOutput: 5'
  },

  'Reconstruct Itinerary': {
    desc: 'Given airline tickets as [from, to] pairs, reconstruct the itinerary starting from "JFK" in lexical order using all tickets.',
    examples: 'Input: tickets=[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]\nOutput: ["JFK","ATL","JFK","SFO","ATL","SFO"]'
  },

  'Min Cost to Connect All Points': {
    desc: 'Given an array of points, return the minimum cost to connect all points where cost is the Manhattan distance between two points.',
    examples: 'Input: points=[[0,0],[2,2],[3,10],[5,2],[7,0]]\nOutput: 20'
  },

  'Network Delay Time': {
    desc: 'Given a network of n nodes and weighted directed edges, find the time for a signal from node k to reach all nodes, or -1 if impossible.',
    examples: 'Input: times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2\nOutput: 2'
  },

  'Swim in Rising Water': {
    desc: 'Given an n x n elevation grid, find the minimum time t such that you can swim from top-left to bottom-right (can move when elevation <= t).',
    examples: 'Input: grid=[[0,2],[1,3]]\nOutput: 3'
  },

  'Alien Dictionary': {
    desc: 'Given a sorted list of words in an alien language, derive the order of characters in that language.',
    examples: 'Input: words=["wrt","wrf","er","ett","rftt"]\nOutput: "wertf"'
  },

  'Cheapest Flights Within K Stops': {
    desc: 'Find the cheapest flight price from src to dst with at most k stops, or -1 if no such route exists.',
    examples: 'Input: n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1\nOutput: 200'
  },

  // ===================== WEEK 7: Dynamic Programming =====================

  'Climbing Stairs': {
    desc: 'You can climb 1 or 2 steps at a time. How many distinct ways can you climb n steps?',
    examples: 'Input: n=3\nOutput: 3'
  },

  'Min Cost Climbing Stairs': {
    desc: 'Given an array of step costs, find the minimum cost to reach the top. You can start at step 0 or 1 and climb 1 or 2 steps.',
    examples: 'Input: cost=[10,15,20]\nOutput: 15'
  },

  'House Robber': {
    desc: 'Rob houses along a street without robbing two adjacent houses. Return the maximum amount you can rob.',
    examples: 'Input: nums=[2,7,9,3,1]\nOutput: 12'
  },

  'House Robber II': {
    desc: 'Houses are arranged in a circle. Rob non-adjacent houses to maximize profit, but the first and last houses are adjacent.',
    examples: 'Input: nums=[2,3,2]\nOutput: 3'
  },

  'Longest Palindromic Substring': {
    desc: 'Given a string, return the longest substring that is a palindrome.',
    examples: 'Input: s="babad"\nOutput: "bab"'
  },

  'Palindromic Substrings': {
    desc: 'Given a string, return the number of substrings that are palindromes.',
    examples: 'Input: s="abc"\nOutput: 3'
  },

  'Decode Ways': {
    desc: 'Given a string of digits, count the number of ways to decode it where "1"="A", "2"="B", ..., "26"="Z".',
    examples: 'Input: s="226"\nOutput: 3'
  },

  'Coin Change': {
    desc: 'Given coin denominations and an amount, return the fewest number of coins needed to make that amount, or -1 if impossible.',
    examples: 'Input: coins=[1,5,11], amount=11\nOutput: 1'
  },

  'Maximum Product Subarray': {
    desc: 'Given an integer array, find the contiguous subarray that has the largest product.',
    examples: 'Input: nums=[2,3,-2,4]\nOutput: 6'
  },

  'Word Break': {
    desc: 'Given a string and a dictionary, determine if the string can be segmented into space-separated dictionary words.',
    examples: 'Input: s="leetcode", wordDict=["leet","code"]\nOutput: true'
  },

  'Longest Increasing Subsequence': {
    desc: 'Given an integer array, return the length of the longest strictly increasing subsequence.',
    examples: 'Input: nums=[10,9,2,5,3,7,101,18]\nOutput: 4'
  },

  'Partition Equal Subset Sum': {
    desc: 'Given an integer array, determine if it can be partitioned into two subsets with equal sum.',
    examples: 'Input: nums=[1,5,11,5]\nOutput: true'
  },

  'Unique Paths': {
    desc: 'A robot starts at top-left of an m x n grid and can only move right or down. Count the number of unique paths to bottom-right.',
    examples: 'Input: m=3, n=7\nOutput: 28'
  },

  'Longest Common Subsequence': {
    desc: 'Given two strings, return the length of their longest common subsequence.',
    examples: 'Input: text1="abcde", text2="ace"\nOutput: 3'
  },

  'Best Time to Buy/Sell Stock w/ Cooldown': {
    desc: 'Buy and sell stock to maximize profit, but after selling you must wait one day before buying again.',
    examples: 'Input: prices=[1,2,3,0,2]\nOutput: 3'
  },

  'Coin Change II': {
    desc: 'Given coin denominations and an amount, return the number of combinations that make up that amount.',
    examples: 'Input: amount=5, coins=[1,2,5]\nOutput: 4'
  },

  'Target Sum': {
    desc: 'Given an array and a target, assign + or - to each element to make the sum equal to target. Return the number of ways.',
    examples: 'Input: nums=[1,1,1,1,1], target=3\nOutput: 5'
  },

  'Interleaving String': {
    desc: 'Given strings s1, s2, and s3, determine if s3 is formed by interleaving s1 and s2 while preserving order.',
    examples: 'Input: s1="aab", s2="axy", s3="aaxaby"\nOutput: true'
  },

  'Longest Increasing Path in Matrix': {
    desc: 'Given an m x n integer matrix, return the length of the longest increasing path. You can move in 4 directions.',
    examples: 'Input: matrix=[[9,9,4],[6,6,8],[2,1,1]]\nOutput: 4'
  },

  'Distinct Subsequences': {
    desc: 'Given strings s and t, return the number of distinct subsequences of s that equal t.',
    examples: 'Input: s="rabbbit", t="rabbit"\nOutput: 3'
  },

  'Edit Distance': {
    desc: 'Given two strings, return the minimum number of insert, delete, or replace operations to convert one string to the other.',
    examples: 'Input: word1="horse", word2="ros"\nOutput: 3'
  },

  'Burst Balloons': {
    desc: 'Given n balloons with values, burst them to maximize coins collected. Bursting balloon i earns nums[left]*nums[i]*nums[right].',
    examples: 'Input: nums=[3,1,5,8]\nOutput: 167'
  },

  'Regular Expression Matching': {
    desc: 'Implement regex matching with "." (matches any single char) and "*" (matches zero or more of the preceding element).',
    examples: 'Input: s="aa", p="a*"\nOutput: true'
  },

  // ===================== WEEK 8: Greedy, Intervals, Math & Bit Manipulation =====================

  'Maximum Subarray': {
    desc: 'Given an integer array, find the contiguous subarray with the largest sum.',
    examples: 'Input: nums=[-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6'
  },

  'Jump Game': {
    desc: 'Given an array where each element is the max jump length, determine if you can reach the last index starting from index 0.',
    examples: 'Input: nums=[2,3,1,1,4]\nOutput: true'
  },

  'Jump Game II': {
    desc: 'Given an array where each element is the max jump length, return the minimum number of jumps to reach the last index.',
    examples: 'Input: nums=[2,3,1,1,4]\nOutput: 2'
  },

  'Gas Station': {
    desc: 'Given gas and cost arrays for stations in a circle, return the starting station index to complete the circuit, or -1 if impossible.',
    examples: 'Input: gas=[1,2,3,4,5], cost=[3,4,5,1,2]\nOutput: 3'
  },

  'Hand of Straights': {
    desc: 'Given a hand of cards, determine if they can be rearranged into groups of size groupSize where each group is consecutive.',
    examples: 'Input: hand=[1,2,3,6,2,3,4,7,8], groupSize=3\nOutput: true'
  },

  'Merge Triplets to Form Target': {
    desc: 'Given 2D array of triplets and a target triplet, determine if the target can be formed by taking element-wise max of chosen triplets.',
    examples: 'Input: triplets=[[2,5,3],[1,8,4],[1,7,5]], target=[2,7,5]\nOutput: true'
  },

  'Partition Labels': {
    desc: 'Partition a string into as many parts as possible so that each letter appears in at most one part. Return the sizes.',
    examples: 'Input: s="ababcbacadefegdehijhklij"\nOutput: [9,7,8]'
  },

  'Valid Parenthesis String': {
    desc: 'Given a string with "(", ")", and "*" (which can be "(", ")", or empty), determine if it is valid.',
    examples: 'Input: s="(*)"\nOutput: true'
  },

  'Insert Interval': {
    desc: 'Given a sorted list of non-overlapping intervals and a new interval, insert and merge if necessary.',
    examples: 'Input: intervals=[[1,3],[6,9]], newInterval=[2,5]\nOutput: [[1,5],[6,9]]'
  },

  'Merge Intervals': {
    desc: 'Given an array of intervals, merge all overlapping intervals.',
    examples: 'Input: intervals=[[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]'
  },

  'Non-overlapping Intervals': {
    desc: 'Given an array of intervals, return the minimum number of intervals to remove to make the rest non-overlapping.',
    examples: 'Input: intervals=[[1,2],[2,3],[3,4],[1,3]]\nOutput: 1'
  },

  'Meeting Rooms': {
    desc: 'Given an array of meeting time intervals, determine if a person can attend all meetings (no overlaps).',
    examples: 'Input: intervals=[[0,30],[5,10],[15,20]]\nOutput: false'
  },

  'Meeting Rooms II': {
    desc: 'Given an array of meeting time intervals, find the minimum number of conference rooms required.',
    examples: 'Input: intervals=[[0,30],[5,10],[15,20]]\nOutput: 2'
  },

  'Min Interval to Include Each Query': {
    desc: 'Given intervals and queries, for each query find the size of the smallest interval containing that query, or -1.',
    examples: 'Input: intervals=[[1,4],[2,4],[3,6],[4,4]], queries=[2,3,4,5]\nOutput: [3,3,1,4]'
  },

  'Rotate Image': {
    desc: 'Rotate an n x n 2D matrix 90 degrees clockwise in-place.',
    examples: 'Input: matrix=[[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]'
  },

  'Spiral Matrix': {
    desc: 'Given an m x n matrix, return all elements in spiral order.',
    examples: 'Input: matrix=[[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]'
  },

  'Set Matrix Zeroes': {
    desc: 'Given an m x n matrix, if an element is 0, set its entire row and column to 0 in-place.',
    examples: 'Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]'
  },

  'Happy Number': {
    desc: 'Determine if a number is happy: repeatedly replace it with the sum of squares of its digits until it equals 1 or loops.',
    examples: 'Input: n=19\nOutput: true'
  },

  'Plus One': {
    desc: 'Given a number represented as an array of digits, increment it by one.',
    examples: 'Input: digits=[1,2,9]\nOutput: [1,3,0]'
  },

  'Pow(x, n)': {
    desc: 'Implement pow(x, n) which calculates x raised to the power n.',
    examples: 'Input: x=2.0, n=10\nOutput: 1024.0'
  },

  'Multiply Strings': {
    desc: 'Given two non-negative integers represented as strings, return their product as a string without using built-in BigInteger.',
    examples: 'Input: num1="123", num2="456"\nOutput: "56088"'
  },

  'Detect Squares': {
    desc: 'Design a data structure that supports adding points and counting axis-aligned squares that can be formed with a query point.',
    examples: 'Input: add([3,10]), add([11,2]), add([3,2]), count([11,10])\nOutput: null, null, null, 1'
  },

  'Single Number': {
    desc: 'Given an array where every element appears twice except one, find the element that appears only once.',
    examples: 'Input: nums=[2,2,1]\nOutput: 1'
  },

  'Number of 1 Bits': {
    desc: 'Return the number of set bits (1s) in the binary representation of an unsigned integer.',
    examples: 'Input: n=11 (binary: 1011)\nOutput: 3'
  },

  'Counting Bits': {
    desc: 'Given an integer n, return an array where ans[i] is the number of 1s in the binary representation of i for 0 <= i <= n.',
    examples: 'Input: n=5\nOutput: [0,1,1,2,1,2]'
  },

  'Reverse Bits': {
    desc: 'Reverse the bits of a given 32-bit unsigned integer.',
    examples: 'Input: n=00000010100101000001111010011100\nOutput: 964176192'
  },

  'Missing Number': {
    desc: 'Given an array containing n distinct numbers in the range [0, n], find the one missing number.',
    examples: 'Input: nums=[3,0,1]\nOutput: 2'
  },

  'Sum of Two Integers': {
    desc: 'Calculate the sum of two integers without using the + or - operators.',
    examples: 'Input: a=1, b=2\nOutput: 3'
  },

  'Reverse Integer': {
    desc: 'Given a signed 32-bit integer, return the integer with its digits reversed. Return 0 if the result overflows.',
    examples: 'Input: x=-123\nOutput: -321'
  }

};
