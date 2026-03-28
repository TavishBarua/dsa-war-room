import { useMemo, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { ScheduleConfig, PhaseSchedule } from '../data/types';
import { WEEKS } from '../data/weeks';

const PROBLEM_COUNTS = WEEKS.map(w => w.problems);
const TOTAL_PROBLEMS = PROBLEM_COUNTS.reduce((a, b) => a + b, 0);

// DNA pattern index → week index mapping
const WEEK_DNA_MAP: Record<number, number[]> = {
  0: [0, 1],       // Arrays & Hashing, Two Pointers
  1: [2, 3],       // Sliding Window, Stack
  2: [4, 5],       // Binary Search, Linked List
  3: [6],          // Trees / DFS
  4: [7, 8],       // Heap, Backtracking
  5: [9, 10, 11],  // Tries, Graphs, Advanced Graphs
  6: [12, 13],     // 1D DP, 2D DP
  7: [14, 15, 16, 17], // Greedy, Intervals, Math, Bit Manipulation
};

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  return Math.round((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
}

export function computeSchedule(config: ScheduleConfig): PhaseSchedule[] {
  const { startDate, totalDays } = config;

  // Allocate days proportionally, minimum 2 per phase
  const raw = PROBLEM_COUNTS.map(c => Math.max(2, Math.round((c / TOTAL_PROBLEMS) * totalDays)));
  let sum = raw.reduce((a, b) => a + b, 0);
  // Adjust last phase to absorb rounding
  raw[raw.length - 1] += totalDays - sum;
  // If last phase went below 2, steal from largest
  if (raw[raw.length - 1] < 2) {
    const largest = raw.indexOf(Math.max(...raw.slice(0, -1)));
    raw[largest] -= (2 - raw[raw.length - 1]);
    raw[raw.length - 1] = 2;
  }

  let currentDay = 0;
  return raw.map((days, i) => {
    const startDay = currentDay;
    const endDay = currentDay + days - 1;
    const count = PROBLEM_COUNTS[i];

    // Spread problems across days within phase
    const problemDays = Array.from({ length: count }, (_, pi) =>
      Math.floor(pi * days / count)
    );

    const phase: PhaseSchedule = {
      weekIndex: i,
      startDay,
      endDay,
      startDate: addDays(startDate, startDay),
      endDate: addDays(startDate, endDay),
      daysAllocated: days,
      problemDays,
      dnaPatternIndices: WEEK_DNA_MAP[i] || [],
    };

    currentDay += days;
    return phase;
  });
}

export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function getTodayStr(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

export function useSchedule() {
  const [config, setConfig] = useLocalStorage<ScheduleConfig | null>('nc150_schedule', null);

  const schedule = useMemo(() => {
    if (!config) return null;
    return computeSchedule(config);
  }, [config]);

  const setScheduleRange = useCallback((start: string, end: string) => {
    const total = daysBetween(start, end) + 1;
    if (total < 20) return;
    setConfig({ startDate: start, endDate: end, totalDays: total });
  }, [setConfig]);

  const clearSchedule = useCallback(() => setConfig(null), [setConfig]);

  const todayInfo = useMemo(() => {
    if (!config || !schedule) return null;
    const today = getTodayStr();
    const offset = daysBetween(config.startDate, today);
    const currentPhaseIndex = schedule.findIndex(p => offset >= p.startDay && offset <= p.endDay);
    return {
      dayOffset: offset,
      currentPhaseIndex,
      isBeforeStart: offset < 0,
      isPastEnd: offset > config.totalDays - 1,
      todayStr: today,
    };
  }, [config, schedule]);

  return { config, schedule, setScheduleRange, clearSchedule, todayInfo };
}
