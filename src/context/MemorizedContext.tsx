import { createContext, useContext, ReactNode } from 'react';
import { useMemorized } from '../hooks/useMemorized';

type MemorizedContextType = ReturnType<typeof useMemorized>;

const MemorizedContext = createContext<MemorizedContextType | null>(null);

export function MemorizedProvider({ children }: { children: ReactNode }) {
  const memorized = useMemorized();
  return (
    <MemorizedContext.Provider value={memorized}>
      {children}
    </MemorizedContext.Provider>
  );
}

export function useMemorizedContext() {
  const ctx = useContext(MemorizedContext);
  if (!ctx) throw new Error('useMemorizedContext must be used within MemorizedProvider');
  return ctx;
}
