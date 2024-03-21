---
"pie-monorepo": patch
---

[Changed] - Reverted `turbo` back to `1.10.16`. Our current caused a bug that resulted in the `check-change-type` CI job not corretly detecting changes in the repo, resulting in deployments not being triggered.
