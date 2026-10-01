# Policy authoring

Use `commands` with exact `argv` arrays and optional timeout/output limits. `requiredCommands` names entries to run. Never use shell metacharacters, path traversal, pipelines, redirects, network or destructive commands. YAML is boundary-validated.
