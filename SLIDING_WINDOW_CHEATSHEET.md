# 🎯 Sliding Window - Ultimate Cheat Sheet

## The Two Types (Identify in 3 Seconds!)

### 1️⃣ STATIC Window (Fixed Size)
**Clue:** Size K is given in problem
**Trick:** Move 1 step → Remove LEFT, Add RIGHT

```java
for (int right = 0; right < arr.length; right++) {
    windowSum += arr[right];           // Add right

    if (right >= K - 1) {              // Window complete?
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[right - K + 1];  // Remove left
    }
}
```

**Examples:**
- "Maximum sum of K elements"
- "Average of subarrays size K"

---

### 2️⃣ DYNAMIC Window (Flexible Size)
**Clue:** Words like "longest", "shortest", "minimum", "maximum"

#### Type A: LONGEST/MAXIMUM Pattern
**Trick:** EXPAND → SHRINK when INVALID

```java
int left = 0, maxLength = 0;

for (int right = 0; right < arr.length; right++) {
    addToWindow(arr[right]);           // EXPAND

    while (windowIsINVALID()) {        // ❌ Bad? Shrink!
        removeFromWindow(arr[left]);
        left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
}
```

**When to use:**
- "LONGEST substring with..."
- "MAXIMUM consecutive..."
- Find the BIGGEST valid window

**Examples:**
- Longest substring with K distinct chars
- Max consecutive 1s after flipping K 0s

---

#### Type B: SHORTEST/MINIMUM Pattern
**Trick:** EXPAND → SHRINK while VALID (opposite!)

```java
int left = 0, minLength = Integer.MAX_VALUE;

for (int right = 0; right < arr.length; right++) {
    addToWindow(arr[right]);           // EXPAND

    while (windowIsVALID()) {          // ✅ Good? Try to minimize!
        minLength = Math.min(minLength, right - left + 1);
        removeFromWindow(arr[left]);
        left++;
    }
}
```

**When to use:**
- "SHORTEST substring with..."
- "MINIMUM window..."
- Find the SMALLEST valid window

**Examples:**
- Minimum Window Substring (your code!)
- Smallest subarray with sum ≥ K

---

## 🧠 The Master Trick

```
LONGEST  → Shrink when BAD  (while INVALID)
SHORTEST → Shrink when GOOD (while VALID)
```

Think of it like:
- **LONGEST:** "Get rid of bad stuff to make it valid again"
- **SHORTEST:** "Keep shrinking while it's still good"

---

## 🎯 Your Code Pattern (Minimum Window Substring)

### The Mental Model:
1. **EXPAND** right pointer until window is VALID (has all chars)
2. **SHRINK** left pointer while VALID to find SMALLEST
3. Track the minimum window found

### Key Variables:
```java
required = tCount.size()      // How many unique chars we need
formed = 0                    // How many we've satisfied

// When formed == required → Window is VALID! Try to shrink!
```

### The Core Logic:
```java
for (right: expand) {
    add arr[right]
    if (this completes a char) formed++

    while (formed == required) {    // VALID! Try to minimize
        updateAnswer()
        remove arr[left]
        if (this breaks a char) formed--
        left++
    }
}
```

---

## 🚀 Quick Identification Guide

| Problem Says | Pattern | While Loop |
|--------------|---------|------------|
| "Size K" / "K elements" | STATIC | `if (right >= K-1)` |
| "Longest" / "Maximum" | LONGEST | `while (INVALID)` |
| "Shortest" / "Minimum" | SHORTEST | `while (VALID)` |

---

## 💡 Common Window Validation Techniques

### For Character Problems:
```java
Map<Character, Integer> windowCount = new HashMap<>();
Map<Character, Integer> targetCount = new HashMap<>();

// Check if window contains all required chars
int required = targetCount.size();
int formed = 0;

// When adding char c:
if (windowCount.get(c).equals(targetCount.get(c))) {
    formed++;  // Satisfied one more char type
}

// Valid when: formed == required
```

### For Distinct Characters:
```java
Set<Character> window = new HashSet<>();

// Valid when: window.size() <= K
```

### For Sum Problems:
```java
int windowSum = 0;

// Valid when: windowSum >= target (or <= target, etc.)
```

---

## 🎓 Remember This Forever:

1. **STATIC** = Fixed ruler sliding
2. **LONGEST** = Expand greedy, shrink when broken
3. **SHORTEST** = Expand until valid, shrink to minimize

The window is like an **accordion**:
- Static: Accordion has fixed size
- Longest: Squeeze when too much bad stuff
- Shortest: Squeeze while still good

---

## ⚡ Speed Tip for Dry Running:

Don't trace every character! Focus on:
1. When does window become VALID?
2. When does window become INVALID?
3. What happens at these transition points?

Track only the KEY moments, not every iteration!

---

**You're now a Sliding Window EXPERT! 🎊**
