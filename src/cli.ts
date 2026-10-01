#!/usr/bin/env node
import {readFile} from 'node:fs/promises'; import {verify} from './core.js';
const a=process.argv.slice(2); const cmd=a[0];
if(cmd==='verify'){const task=a[1],pi=a.indexOf('--policy'),oi=a.indexOf('--out'); if(!task||pi<0||oi<0) {console.error('usage: proofline verify task.yaml --policy policy.yaml --out dir');process.exit(2)} try{const e=await verify(task,a[pi+1],a[oi+1]); console.log(`Proofline status: ${e.status}`); process.exitCode=e.status==='passed'?0:1}catch(err){console.error(String(err));process.exitCode=2}}
else if(cmd==='summarize'){const f=a[1]; if(!f){console.error('usage: proofline summarize evidence.json');process.exit(2)} const e=JSON.parse(await readFile(f,'utf8')); console.log(`Proofline status: ${e.status}\nCriteria: ${e.task.criteria.length}\nGaps: ${e.gaps.length}`)}
else {console.error('commands: verify, summarize');process.exitCode=2}
