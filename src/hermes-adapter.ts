import type { ProoflineAdapter } from './adapter-contract.js'; import { evaluate } from './evaluate.js';
export const hermesAdapter:ProoflineAdapter={name:'hermes',verify:(task,policy)=>{if(!policy) throw new Error('policy required'); return evaluate(task,policy)}};
