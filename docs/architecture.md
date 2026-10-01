# Architecture

Portable core has five boundaries: YAML input validation, allowlisted argv execution, Git scope collection, fail-closed evaluation, and canonical JSON/Markdown output. Adapters translate native agent runs to `Task` and consume `Evidence`; core imports no agent platform.
