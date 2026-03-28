import { useState, useRef, useCallback } from 'react';

export function useTimer(initialMinutes: number) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setSeconds(prev => {
        if (prev <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback((minutes?: number) => {
    stop();
    setSeconds((minutes ?? initialMinutes) * 60);
  }, [stop, initialMinutes]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const status = seconds <= 0 ? 'done' : seconds < 120 ? 'danger' : seconds < 300 ? 'warning' : 'normal';

  return { seconds, isRunning, start, stop, reset, display, status };
}
