'use client';

import { useState, useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';

/**
 * مكون غير مرئي يراقب الأخطاء الأمنية ويبلغ النظام بها فوراً
 */
export function FirebaseErrorListener() {
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const handleError = (err: any) => {
      setError(err);
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  if (error) {
    throw error; // يلقي الخطأ ليتم التعامل معه عبر Next.js
  }

  return null;
}
