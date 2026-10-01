import { readFile } from 'node:fs/promises';
import YAML from 'yaml';
import type { Policy } from './types.js';
export async function loadYaml<T>(path:string):Promise<T>{return YAML.parse(await readFile(path,'utf8')) as T}
export function validatePolicy(p:Policy):void { if(!p || !Array.isArray(p.commands)) throw new Error('invalid policy: commands required'); for(const c of p.commands){if(!c.name||!Array.isArray(c.argv)||c.argv.length===0) throw new Error('invalid command policy'); if(c.argv.some(a=>/[;&|`$<>]|\.\.|\x00/.test(a))) throw new Error('unsafe command policy');}}
