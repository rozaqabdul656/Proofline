import type {Task,Evidence,Policy} from './types.js';
export interface ProoflineAdapter { name:string; verify(input:Task, policy?:Policy):Promise<Evidence> }
