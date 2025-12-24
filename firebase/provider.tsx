'use client';
import React, { createContext, useMemo, type ReactNode } from 'react';
import { initializeFirebase } from './client';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

export const FirebaseContext = createContext<any>(null);

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const services = useMemo(() => initializeFirebase(), []);

  return (
    <FirebaseContext.Provider value={services}>
      <FirebaseErrorListener />
      {children}
    </FirebaseContext.Provider>
  );
}
