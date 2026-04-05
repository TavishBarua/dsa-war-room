import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useSDProgress() {
  const [studied, setStudied] = useLocalStorage<Record<string, boolean>>('sd_studied', {});

  const toggleStudied = useCallback((problemId: string) => {
    setStudied(prev => {
      const next = { ...prev };
      if (next[problemId]) {
        delete next[problemId];
      } else {
        next[problemId] = true;
      }
      return next;
    });
  }, [setStudied]);

  const studiedCount = useMemo(() => Object.keys(studied).length, [studied]);
  const percentage = useMemo(() => Math.round((studiedCount / 10) * 100), [studiedCount]);

  return { studied, toggleStudied, studiedCount, percentage };
}
