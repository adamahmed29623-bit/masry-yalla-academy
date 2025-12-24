/**
 * هذا الملف هو "كود الحماية الملكي" الذي يحدد شكل الخطأ الأمني
 */
export type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete' | 'write';
  requestResourceData?: any;
};

export class FirestorePermissionError extends Error {
  public readonly request: any;

  constructor(context: SecurityRuleContext) {
    const message = `FirestoreError: Missing or insufficient permissions at ${context.path} during ${context.operation}`;
    super(message);
    this.name = 'FirestorePermissionError';
    this.request = context;
  }
}
