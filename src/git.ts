import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const exec=promisify(execFile);
export async function collectScope(cwd:string){try{const {stdout}=await exec('git',['status','--porcelain=v1'],{cwd}); const files=stdout.split('\n').filter(Boolean).map(x=>x.slice(3)); const dependencyChanges=files.filter(x=>/^(package(-lock)?\.json|npm-shrinkwrap\.json|yarn\.lock|pnpm-lock\.yaml)$/.test(x)); return {files,dependencyChanges,assessment:dependencyChanges.length?'review-needed':'in-scope'} as const}catch{return {files:[],dependencyChanges:[],assessment:'review-needed'} as const}}
