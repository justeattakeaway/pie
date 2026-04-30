# AGENTS.md - packages/components

Supplements the root `AGENTS.md`. Read that file first; this one adds guidance specific to writing browser tests for Lit web components.

## Playwright browser tests

### The async event chain

Browser tests run in a separate Node.js process (the test runner) that communicates with the browser via the Chrome DevTools Protocol (CDP) over a WebSocket. This means:

- `page.evaluate()` returns to Node.js **after the synchronous browser JS completes**, but **before** any async browser work (Lit update cycles, CustomEvent dispatch, `console.info(...)`) has been transmitted back.
- `page.on('console', ...)` listeners are called **asynchronously** — the CDP message may arrive milliseconds after `page.evaluate()` resolves, especially under CI load.

Asserting on any state populated by a console listener (or any CDP-sourced event) immediately after `page.evaluate()` is a race condition. It may pass locally and fail in CI.

### Required pattern: listen → act → await → assert

Always register the wait **before** the action that triggers it, then `await` it before asserting.

```ts
// CORRECT — listener is active before the action fires
const queueUpdated = page.waitForEvent(
    'console',
    (msg) => msg.text().includes('my marker'),
);
await page.evaluate(() => { /* triggers console.info */ });
const result = await queueUpdated; // only now is the data guaranteed to have arrived

// INCORRECT — race condition; the event may arrive before this line is reached
await page.evaluate(() => { /* triggers console.info */ });
const queueUpdated = page.waitForEvent('console', ...); // may already be missed
```

### Lit update batching

Lit batches all synchronous property changes made within the same JS call stack into a single `updated()` lifecycle call (scheduled as a microtask). If a single `page.evaluate()` call makes several state mutations:

```ts
await page.evaluate(() => {
    component.createItem('a'); // sets _items = ['a']
    component.createItem('b'); // sets _items = ['a', 'b']
    component.clear();         // sets _items = []
});
```

Lit fires **one** `updated()` with the **final** state (`_items = []`). This means:

- One CDP console event arrives, carrying `[]`.
- An assertion that the queue was populated before being cleared is **impossible** to make with a single evaluate.
- The test may pass trivially (asserting `length === 0` on a queue that never visibly had items).

**Split evaluate calls when testing distinct state transitions:**

```ts
// Verify items were actually enqueued
const populated = page.waitForEvent('console', (m) => m.text().includes('marker'));
await page.evaluate(() => { component.createItem('a'); component.createItem('b'); });
await populated;

// Verify clear actually clears
const cleared = page.waitForEvent('console', (m) => m.text().includes('marker'));
await page.evaluate(() => { component.clear(); });
const result = await cleared;
expect(result).toHaveLength(0);
```

### Reset shared state in `beforeEach`

Variables declared at `test.describe` scope are shared across all tests in that suite and across `--repeat-each` repetitions. Never rely on their initial value inside a test — reset them at the top of `beforeEach`.

```ts
let queue: Item[] = [];

test.beforeEach(() => {
    queue = []; // without this, stale data from the previous test bleeds in
});
```

### Capturing the event payload directly

Prefer returning the value directly from the `waitForEvent` promise rather than relying on a side-effectful listener to update a shared variable. The listener fires asynchronously — by the time your assertion runs, it may not have completed its own `await` yet.

```ts
// PREFERRED — data flows explicitly from the wait to the assertion
const msg = await page.waitForEvent('console', (m) => m.text().includes('queue:'));
const queue = await msg.args()[1].jsonValue();
expect(queue).toHaveLength(2);

// FRAGILE — the listener's internal await may not have resolved yet
page.on('console', async (msg) => { sharedQueue = await msg.args()[1].jsonValue(); });
await someAction();
expect(sharedQueue).toHaveLength(2); // sharedQueue may still be stale
```

### Waiting for post-click console messages

`sectionButton.click()` resolves after the browser processes the click, but `console.info(...)` in the click handler still travels asynchronously over CDP. Always set up the wait before clicking.

```ts
const received = page.waitForEvent(
    'console',
    (msg) => msg.type() === 'info' && msg.text() === 'expected message',
);
await button.click();
await received; // guarantees the message arrived before asserting
```

## Common flakiness patterns to avoid

| Pattern | Why it fails under CI load | Fix |
|---|---|---|
| `await page.evaluate(...)` then immediately read a listener-populated variable | CDP event arrives after assertion | Set up `waitForEvent` before evaluate, await after |
| Shared `let` variable never reset in `beforeEach` | Previous test's data bleeds in | Reset at top of `beforeEach` |
| All mutations in one `evaluate()`, then assert intermediate state | Lit batches them; only final state is observable | Split into separate `evaluate()` calls |
| `await element.click()` then immediately assert on a console-driven value | Same CDP delay applies | `waitForEvent` before click, await after |
| `forEach` on a listener-populated array that may still be `[]` | Loop body never executes; assertions silently pass | Ensure data has arrived (await) before iterating |
