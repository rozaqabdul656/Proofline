import type {Task,Evidence} from './types.js';
export interface ProoflineAdapter { name:string; verify(input:Task):Promise<Evidence> }
export const hermesAdapter={name:'hermes',async verify():Promise<never>{throw new Error('Hermes adapter stub: invoke generic CLI')}};
