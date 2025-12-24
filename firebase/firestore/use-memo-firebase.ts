'use client';
import { useMemo } from 'react';
import { DocumentReference, Query } from 'firebase/firestore';

export function useMemoFirebase<T extends DocumentReference<any> | Query<any> | null>(
  factory: () => T,
  deps: React.DependencyList
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoized = useMemo(factory, deps);
  if (memoized) {
    (memoized as any).__memo = true;
  }
  return memoized;
}
