'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, DocumentReference } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/lib/errors/FirestorePermissionError';

export function useDocument<T = any>(memoizedDocRef: any) {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!memoizedDocRef) return;
    const unsubscribe = onSnapshot(memoizedDocRef, 
      (docSnapshot) => {
        setData(docSnapshot.exists() ? { ...docSnapshot.data(), id: docSnapshot.id } : null);
        setIsLoading(false);
      },
      (error) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: memoizedDocRef.path,
          operation: 'get'
        }));
      }
    );
    return () => unsubscribe();
  }, [memoizedDocRef]);

  if (memoizedDocRef && !memoizedDocRef.__memo) {
    throw new Error('Document was not properly memoized using useMemoFirebase');
  }
  return { data, isLoading };
}
