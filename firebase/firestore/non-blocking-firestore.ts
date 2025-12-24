'use client';
import { setDoc, addDoc, updateDoc, deleteDoc, DocumentReference, CollectionReference } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/lib/errors/FirestorePermissionError';

export function setDocumentNonBlocking(docRef: DocumentReference, data: any) {
  setDoc(docRef, data).catch(err => {
    errorEmitter.emit('permission-error', new FirestorePermissionError({ path: docRef.path, operation: 'update' }));
  });
}

export function deleteDocumentNonBlocking(docRef: DocumentReference) {
  deleteDoc(docRef).catch(err => {
    errorEmitter.emit('permission-error', new FirestorePermissionError({ path: docRef.path, operation: 'delete' }));
  });
}
