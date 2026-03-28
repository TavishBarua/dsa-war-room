# Claude Code Prompt — DSA War Room: Pattern Visual Encyclopedia

## Context
I have an existing HTML file called `neetcode-battleplan.html` — a dark-themed, terminal-aesthetic DSA War Room built for a senior engineer preparing for FAANG interviews in 60 days. It already has:
- A hero section with countdown timer and progress tracking
- An 8-week battle plan with collapsible week cards and problem checklists (with localStorage persistence)
- 18 pattern "cheat code" cards with trigger phrases
- An interview simulator with a 45-min timer and random problem picker
- A rules/motivation section

## What I Want You To Build

Add a brand new section called **"PATTERN DNA"** — a permanent visual encyclopedia of all 18 DSA patterns. Insert it between the existing "Patterns" section and the "Battle Plan" section in the HTML.

---

## Design Requirements

Keep the **exact same aesthetic** as the existing file:
- Background: `#08090d` (near black)
- Font: Bebas Neue for headings, Space Mono for code/labels, DM Sans for body
- Neon green (`#00ff88`) as primary accent
- Scanline overlay effect already in body::before
- Card borders: `#1e2230`
- Same sticky progress bar at top
- Dark code blocks with syntax highlighting using colored spans

---

## For EACH of the 18 Patterns, Build a Card That Has These 5 Layers:

### Layer 1 — THE HOOK (Explain Like I'm 10)
Write 3-4 sentences explaining the pattern to a smart but non-technical 10-year-old. Use a real-world analogy. No jargon. Make it so sticky that they remember it forever.

**Examples of the tone I want:**
- HashMap: *"Imagine your mom tells you to find a red sock in a pile of 100 socks. You could check one by one (slow!) OR you could have a magic drawer where red socks are always in drawer R. HashMap is that magic drawer."*
- Binary Search: *"You're guessing a number between 1-100. Smart kid always guesses 50 first. Wrong? Go higher or lower. Never guess randomly — always cut the problem in half."*
- Sliding Window: *"Imagine a train with exactly 3 windows. As the train moves forward, the back window closes and a new front window opens. The 'view' (your subarray) always has 3 windows."*
- Two Pointers: *"Two friends start at opposite ends of a hallway walking toward each other. They stop when they find what they're looking for. Way faster than one person checking every spot alone."*

### Layer 2 — THE VISUAL DIAGRAM (Pure SVG or CSS Animation)
Build an **animated SVG or CSS diagram** that visually shows HOW the pattern works in motion. This is the most important part — make it memorable.

Requirements for each diagram:
- Must be ANIMATED (not static) — use CSS animations or SVG animations
- Must show the actual algorithm moving/working step by step
- Use the neon color palette
- Keep it under 400px height so it fits on screen
- Label every element (array indices, pointers, window, etc.)
- Loop the animation every 4-6 seconds so user can watch it repeatedly

**Specific diagrams to build:**

1. **Arrays & Hashing** — Show an array with elements, arrows pointing into a "hash table" boxes. Animate a lookup: key goes in → instant find. Show O(n) vs O(1) comparison side by side.

2. **Two Pointers** — Animated array where L pointer (green) starts left, R pointer (red) starts right. They move toward each other. Show sum comparison: too big → R moves left, too small → L moves right.

3. **Sliding Window** — Animated array with a highlighted "window" rectangle sliding right. Show elements entering from right, leaving from left. Show the window expanding and contracting.

4. **Stack** — Animated stack (vertical boxes). Push items going in from top, pop items coming out from top. Show LIFO with color-coded elements.

5. **Binary Search** — Sorted array, show lo/mid/hi pointers. Animate: check mid, eliminate half (gray out), repeat. Show the search space halving each step.

6. **Linked List** — Animated boxes connected by arrows. Show pointer manipulation: reverse operation where arrows flip direction one by one.

7. **Trees** — Animated tree with nodes. Show DFS path in one color (goes deep), BFS path in another (goes wide level by level). Animate the traversal order with numbered steps.

8. **Heap/Priority Queue** — Animated binary heap tree. Show insert (bubble up) and extract-min (sink down). Highlight that root is always the min.

9. **Backtracking** — Animated decision tree. Show path being built (green), hitting dead end (red), backtracking (arrows going back up), trying next option.

10. **Tries** — Animated prefix tree. Show words being inserted character by character. Show search: follow the path, reach end → found!

11. **Graphs (BFS)** — Animated grid/graph. BFS: show queue, nodes turning visited color in waves from start node outward (shortest path visualization).

12. **Graphs (DFS)** — Same grid but DFS: show it going deep first, backtracking, exploring new branches.

13. **Dynamic Programming** — Show a 1D dp array being filled left to right. Animate arrows from previous cells to current cell showing the recurrence. Use Fibonacci/stairs example.

14. **2D DP** — Show a grid being filled cell by cell. Animate arrows from top and left cells feeding into current cell.

15. **Greedy** — Show a sequence of choices. At each step, animate picking the locally best option (biggest/smallest). Show how local best → global best.

16. **Intervals** — Show colored interval bars on a timeline. Animate sorting by start time, then merging overlapping ones (bars merging visually).

17. **Advanced Graphs (Dijkstra)** — Show weighted graph, animate shortest path discovery. Nodes changing color as distances are updated.

18. **Bit Manipulation** — Show binary representation. Animate XOR operation: bits flipping. Show n & (n-1) removing lowest bit visually.

### Layer 3 — COMPLEXITY LADDER
Show a visual "difficulty spectrum" for the pattern with 3-4 variants from simple to advanced:

Format:
```
O(n²) BRUTE FORCE     → [brief description of naive approach]
O(n)  OPTIMIZED       → [description of pattern-based approach]  
O(log n) ADVANCED     → [if applicable, describe further optimization]
```

Use colored badges: O(n²) = red, O(n) = yellow, O(log n) = green, O(1) = neon blue

Also show a simple "complexity meter" — a horizontal bar that fills up showing relative speed. O(1) is full green, O(n²) is mostly red.

### Layer 4 — THE CODE (3 Tabs: Python / C# / Java)
Provide clean, heavily-commented code with:

**Style requirements:**
- Write comments like you're explaining to a junior developer, not writing documentation
- Every non-obvious line gets a comment
- Use variable names that explain themselves: `leftPointer` not `l`, `currentWindowSum` not `s`
- Add a "// WHY:" comment for any tricky line explaining the reasoning
- Add "// PATTERN:" comment at the start of every function labeling which pattern variant it is
- Show the template first (abstract), then one concrete solved example below it

**Code structure for each pattern:**
```
// ═══════════════════════════════
// PATTERN NAME — THE TEMPLATE
// ═══════════════════════════════
// WHEN TO USE: [one line trigger]
// TIME: O(?) | SPACE: O(?)
// ═══════════════════════════════

function templateName(input) {
    // SETUP: initialize your variables
    // MAIN LOOP: the core logic
    // RETURN: what you give back
}

// ─── REAL EXAMPLE: [Problem Name] ───
// Problem: [one sentence description]
// Input: [example]  Output: [example]

function solvedExample(input) {
    // actual solved NeetCode 150 problem
}
```

### Layer 5 — INTERVIEW CHEAT STRIP
A compact horizontal strip at the bottom of each pattern card with:
- **TRIGGER WORDS** (keywords in problem that scream this pattern): e.g., "substring", "consecutive", "k elements"
- **FIRST LINE OF CODE** (literally the first thing you write when you recognize this pattern)
- **COMMON GOTCHA** (the #1 mistake people make with this pattern)
- **30-SECOND PITCH** (how you'd explain your approach to an interviewer in one sentence)

---

## Layout & Interaction

### Card Layout
Each pattern card should:
- Collapse/expand on click (same accordion style as existing week cards)
- Have a colored left border matching the pattern's accent color
- Show pattern name, icon, and "ELI10" tagline when collapsed
- When expanded, show all 5 layers in order with clear dividers between layers
- Have a "MARK AS MEMORIZED" button that saves to localStorage and shows a checkmark

### Section Header
The "PATTERN DNA" section header should match the existing style with:
- Section label: `// 02 — Pattern DNA`  
- Big Bebas Neue title: "PATTERN DNA"
- Subtitle: "18 patterns. Learn once. Recognize forever. Each one explained like you're 10, built like you're a FAANG engineer."
- A progress tracker: "X / 18 memorized" with a progress bar

### Navigation
Add these pattern names to the existing nav bar as quick-jump links.

---

## The 18 Patterns (in this exact order)
1. Arrays & Hashing (accent: #00ff88)
2. Two Pointers (accent: #00cfff)  
3. Sliding Window (accent: #a78bfa)
4. Stack (accent: #fb923c)
5. Binary Search (accent: #34d399)
6. Linked List (accent: #f472b6)
7. Trees / DFS (accent: #4ade80)
8. Heap / Priority Queue (accent: #fbbf24)
9. Backtracking (accent: #e879f9)
10. Tries (accent: #67e8f9)
11. Graphs — BFS/DFS (accent: #86efac)
12. Advanced Graphs (accent: #f87171)
13. 1D Dynamic Programming (accent: #fde68a)
14. 2D Dynamic Programming (accent: #c4b5fd)
15. Greedy (accent: #6ee7b7)
16. Intervals (accent: #93c5fd)
17. Math & Geometry (accent: #fca5a5)
18. Bit Manipulation (accent: #a5b4fc)

---

## Technical Notes
- Everything in a single HTML file (no external JS files, no build step)
- localStorage keys: `nc150_memorized` for the memorized pattern set
- All SVG animations must use `<animate>` or CSS `@keyframes` — no JavaScript animation libraries
- Code syntax highlighting: use `<span>` tags with these classes: `.kw` (keywords, #c792ea), `.fn` (functions, #82aaff), `.st` (strings, #c3e88d), `.cm` (comments, #4a5268), `.nm` (numbers, #f78c6c), `.tp` (types, #ffcb6b)
- Diagrams must be responsive — scale down gracefully on mobile
- Tab switching for code (Python/C#/Java) should be pure JS, no libraries
- Copy button on all code blocks using `navigator.clipboard.writeText()`

---

## Tone & Voice Throughout
- Talk to the user like a coach who believes in them
- Never condescending, always energizing
- Use phrases like "Here's the secret:", "Once you see this, you can't unsee it:", "This is the move that changes everything:"
- Senior-to-senior energy: assume they're smart, just need the pattern crystallized
- For the ELI10 sections: genuinely simple, fun analogies. If a 10-year-old would say "huh?", rewrite it.

---

## Final Output
Produce the complete updated `neetcode-battleplan.html` file with the new PATTERN DNA section fully integrated. The file should work by simply opening it in a browser — no server needed, no npm install, nothing.
