# Visual regression instructions

Make sure you have Docker installed and running.

Set the `BRANCH_NAME` environment variable to the name of the branch you want to test.
For now this will always be tested relative to `main`.

Spin up the two branches in separate Docker containers:
```bash
docker compose up --build
```

Then in another console tab, run the test which generates the screenshots:
```bash
npx playwright test visual-docker.spec.js
```

Now to calculate the diff with `resemblejs`:
```bash
node resemble.js
```

This creates a diff.png which shows the diff (if any).
The console log will say if a diff was detected or not.
