import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useCountdown() {
  const [startDate] = useLocalStorage<number>('nc150_start', Date.now());

  const daysRemaining = useMemo(() => {
    const elapsed = Date.now() - startDate;
    const daysElapsed = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    return Math.max(0, 60 - daysElapsed);
  }, [startDate]);

  return daysRemaining;
}
