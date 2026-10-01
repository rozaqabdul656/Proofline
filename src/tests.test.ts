import test from 'node:test'; import assert from 'node:assert/strict'; import {runCommand,overall} from './core.js';
const policy=(argv:string[])=>({commands:[{name:'x',argv,timeoutMs:1000,maxOutput:1000}]});
test('unsafe command blocked',async()=>{const r=await runCommand('x',['node','-e','process.exit(0);'],policy(['node','-e','process.exit(0);']));assert.equal(r.status,'blocked')});
test('allowlist command passes',async()=>{const r=await runCommand('v',['node','--version'],{commands:[{name:'v',argv:['node','--version']} ]});assert.equal(r.status,'passed')});
test('non-zero command fails',async()=>{const r=await runCommand('x',['node','-e','process.exit(2)'],policy(['node','-e','process.exit(2)']));assert.equal(r.status,'failed')});
test('status precedence is fail closed',()=>{const scope={files:[] as string[],dependencyChanges:[] as string[],assessment:'in-scope' as const}; assert.equal(overall([], [{id:'a',text:'a',status:'unverified'}],scope),'needs-review'); assert.equal(overall([{name:'x',argv:[],status:'blocked'}],[],scope),'blocked'); assert.equal(overall([{name:'x',argv:[],status:'failed'}],[],scope),'failed')});
