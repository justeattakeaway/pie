---
"pie-monorepo": minor
---

[Added] - Functionality to only run visual tests against changed components on pull requests
[Removed] - `--filter` argument in run-script action. This argument is now passed as part of the build script argument:

```yml
      - name: Run Visual Tests
        if: contains(github.ref_name, 'main')
        uses: ./.github/actions/run-script
        with:
          script-name: "test:visual:ci --filter=[HEAD^1] --force"
          concurrency: 1
```
