import type { Evidence } from './types.js';
export function validateEvidence(x:unknown): asserts x is Evidence {const e=x as Evidence;if(!e||e.schemaVersion!=='0.1'||!['passed','needs-review','failed','blocked'].includes(e.status)||!Array.isArray(e.task?.criteria)||!Array.isArray(e.validation))throw new Error('invalid evidence schema')}
