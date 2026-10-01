import test from 'node:test'; import assert from 'node:assert/strict'; import {runCommand} from './core.js';
test('unsafe command blocked',async()=>{const r=await runCommand('x',['node','-e','process.exit(0);'],{commands:[{name:'x',argv:['node','-e','process.exit(0);']}]});assert.equal(r.status,'blocked')});
test('allowlist command passes',async()=>{const r=await runCommand('v',['node','--version'],{commands:[{name:'v',argv:['node','--version']}]});assert.equal(r.status,'passed')});
