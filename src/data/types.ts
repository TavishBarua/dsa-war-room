// Pattern Intuition Cards
export interface PatternCard {
  icon: string;
  name: string;
  count: number;
  accent: string;
  tagline: string;
  intuition: string;
  trigger: string;
  problems: { name: string; diff: 'Easy' | 'Medium' | 'Hard' }[];
}

// Weekly Schedule
export interface WeekDay {
  day: string;
  task: string;
  rest?: boolean;
}

export interface WeekProblem {
  name: string;
  diff: 'Easy' | 'Medium' | 'Hard';
  url: string;
  diagram?: string;
}

export interface Week {
  num: string;
  title: string;
  color: string;
  topics: string[];
  problems: number;
  perDay: string;
  schedule: WeekDay[];
  tip: string;
  problems_list: WeekProblem[];
}

// DNA Pattern types
export interface ComplexityStep {
  badge: string;
  big: string;
  label: string;
  desc: string;
}

export interface FlowchartNode {
  id: string;
  label: string;
  type: 'start' | 'action' | 'decision' | 'end';
  x: number;
  y: number;
}

export interface FlowchartEdge {
  from: string;
  to: string;
  label: string;
}

export interface FlowchartData {
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
}

export interface AnnotatedCodeLine {
  line: string;
  stepId: string;
  note: string;
  color: string;
}

export interface StateSnapshot {
  label: string;
  art: string;
  annotation: string;
}

export interface Variation {
  name: string;
  desc: string;
  problem: string;
}

export interface MemoryHack {
  oneSentence: string;
  flowchart: FlowchartData;
  annotatedCode: AnnotatedCodeLine[];
  stateSnapshots: StateSnapshot[];
  variations: Variation[];
  title: string;
  mnemonic: string;
  steps: string[];
  why: string;
}

export interface CheatStrip {
  trigger: string;
  firstLine: string;
  gotcha: string;
  pitch: string;
  snippet?: string;
}

// Schedule types
export interface ScheduleConfig {
  startDate: string;   // ISO "2026-04-01"
  endDate: string;     // ISO "2026-06-15"
  totalDays: number;
}

export interface PhaseSchedule {
  weekIndex: number;
  startDay: number;
  endDay: number;
  startDate: string;
  endDate: string;
  daysAllocated: number;
  problemDays: number[];       // problemDays[pi] = day offset within phase
  dnaPatternIndices: number[];
}

export interface DnaPattern {
  icon: string;
  name: string;
  accent: string;
  tagline: string;
  hook: string;
  svg: string;
  complexity: ComplexityStep[];
  meterWidth?: string;
  code: {
    java: string;
    python: string;
    csharp: string;
  };
  memoryHack: MemoryHack;
  cheat: CheatStrip;
}
