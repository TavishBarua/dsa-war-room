import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useProgress() {
  const [done, setDone] = useLocalStorage<Record<string, boolean>>('nc150_done', {});

  const toggleProblem = useCallback((key: string) => {
    setDone(prev => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
      }
      return next;
    });
  }, [setDone]);

  const doneCount = useMemo(() => Object.keys(done).length, [done]);
  const percentage = useMemo(() => Math.round((doneCount / 150) * 100), [doneCount]);

  return { done, toggleProblem, doneCount, percentage };
}
