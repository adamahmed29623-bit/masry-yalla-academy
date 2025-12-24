'use client';
import { FirestorePermissionError } from '@/lib/errors/FirestorePermissionError';

type Events = {
  'permission-error': (error: FirestorePermissionError) => void;
};

class TypedEventEmitter {
  private listeners: { [key: string]: Function[] } = {};

  on(event: keyof Events, callback: Function): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  off(event: keyof Events, callback: Function): void {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter((l) => l !== callback);
  }

  emit(event: keyof Events, ...args: any[]): void {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((l) => l(...args));
  }
}

export const errorEmitter = new TypedEventEmitter();
