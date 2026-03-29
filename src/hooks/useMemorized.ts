import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useMemorized() {
  const [memorized, setMemorized] = useLocalStorage<Record<string, boolean>>('nc150_memorized', {});

  const toggleMemorized = useCallback((index: number) => {
    setMemorized(prev => {
      const next = { ...prev };
      const key = String(index);
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
      }
      return next;
    });
  }, [setMemorized]);

  const memorizedCount = useMemo(() => Object.keys(memorized).length, [memorized]);
  const percentage = useMemo(() => Math.round((memorizedCount / 30) * 100), [memorizedCount]);

  return { memorized, toggleMemorized, memorizedCount, percentage };
}
