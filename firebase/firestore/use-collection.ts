'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, QuerySnapshot, DocumentData, CollectionReference, Query } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/lib/errors/FirestorePermissionError';

export function useCollection<T = any>(memoizedTarget: any) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!memoizedTarget) return;
    const unsubscribe = onSnapshot(memoizedTarget, 
      (snapshot) => {
        setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
      },
      (error) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: (memoizedTarget as any).path || 'query',
          operation: 'list'
        }));
      }
    );
    return () => unsubscribe();
  }, [memoizedTarget]);

  if (memoizedTarget && !memoizedTarget.__memo) {
    throw new Error('Object was not properly memoized using useMemoFirebase');
  }
  return { data, isLoading };
}
