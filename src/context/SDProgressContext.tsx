import { createContext, useContext, ReactNode } from 'react';
import { useSDProgress } from '../hooks/useSDProgress';

type SDProgressContextType = ReturnType<typeof useSDProgress>;

const SDProgressContext = createContext<SDProgressContextType | null>(null);

export function SDProgressProvider({ children }: { children: ReactNode }) {
  const progress = useSDProgress();
  return (
    <SDProgressContext.Provider value={progress}>
      {children}
    </SDProgressContext.Provider>
  );
}

export function useSDProgressContext() {
  const ctx = useContext(SDProgressContext);
  if (!ctx) throw new Error('useSDProgressContext must be used within SDProgressProvider');
  return ctx;
}
