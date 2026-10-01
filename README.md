# Proofline

Evidence before done. Portable DoneProof CLI for coding tasks.

## Quick start

```sh
npm install
npm run build
node dist/cli.js verify examples/sample-task.yaml --policy policies/default.yaml --out examples/out
node dist/cli.js summarize examples/out/evidence.json
```

Status precedence: blocked > failed > needs-review > passed. Commands require exact argv allowlist and run with `shell:false`. Git scope includes staged, modified, and untracked files. Core has no Hermes dependency.

See `docs/architecture.md`, `docs/evidence-schema.md`, `docs/policy-authoring.md`, `docs/hermes-integration.md`, `docs/improvement-loop.md`.
