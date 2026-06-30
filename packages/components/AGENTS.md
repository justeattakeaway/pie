# AGENTS.md - packages/components

Supplements the root `AGENTS.md`. Read that file first; this one adds guidance specific to writing browser tests for Lit web components.

## Playwright browser tests

### The async event chain

Browser tests run in a separate Node.js process (the test runner) that communicates with the browser via the Chrome DevTools Protocol (CDP) over a WebSocket. This means:

- `page.evaluate()` returns to Node.js **after the synchronous browser JS completes**, but **before** any async browser work (Lit update cycles, CustomEvent dispatch, `console.info(...)`) has been transmitted back.
- `page.on('console', ...)` listeners are called **asynchronously** — the CDP message may arrive milliseconds after `page.evaluate()` resolves, especially under CI load.

Asserting on any state populated by a console listener (or any CDP-sourced event) immediately after `page.evaluate()` is a race condition. It may pass locally and fail in CI.

### Preferred pattern: browser-side accumulation + `page.waitForFunction`

The strongest synchronisation strategy keeps as much as possible inside the browser process. Install a listener that accumulates state into a `window` variable, then use `page.waitForFunction` to poll that variable. The polling condition runs in the browser — no CDP round-trip on every check.

```ts
// 1. Install a browser-side listener once after the component attaches.
await page.evaluate(() => {
    window.__snapshots = [];
    document.querySelector('my-component').addEventListener('my-event', (e) => {
        window.__snapshots.push(structuredClone(e.detail));
    });
});

// 2. Read the current count BEFORE the action so the event can never be missed.
const countBefore = await page.evaluate(() => window.__snapshots?.length ?? 0);

// 3. Trigger the action.
await page.evaluate(() => { component.doSomething(); });

// 4. Wait in-browser until the count increases.
await page.waitForFunction(
    (count) => (window.__snapshots?.length ?? 0) > count,
    countBefore,
);

// 5. Read the result — guaranteed to have arrived.
const snapshots = await page.evaluate(() => window.__snapshots ?? []);
```

Benefits over console-based approaches:
- Listens to the component's own public API, not a story side-effect. Refactoring the story cannot silently break the test.
- `structuredClone` per snapshot means each captured state is independent. Later mutations cannot corrupt earlier captures.
- Accumulating every snapshot lets you assert on intermediate states, not just the final one.

### CDP `waitForEvent` — acceptable for browser → Node.js messages

When you genuinely need to wait for a specific message to arrive in the test process (e.g. a `console.info` from a click handler), `page.waitForEvent` is the right tool. Set it up **before** the action so it cannot miss the event.

```ts
// CORRECT — listener is active before the action fires
const received = page.waitForEvent(
    'console',
    (msg) => msg.type() === 'info' && msg.text() === 'expected message',
);
await button.click();
await received; // only now is the message guaranteed to have arrived

// INCORRECT — race condition; the event may have fired before this line
await button.click();
const received = page.waitForEvent('console', ...); // may already be missed
```

Prefer the browser-side polling pattern (above) over `waitForEvent('console', ...)` for observing component state. Reserve `waitForEvent` for interactions that genuinely produce a user-visible console output, such as button click handlers in stories.

### Lit update batching

Lit batches all synchronous property changes made within the same JS call stack into a single `updated()` lifecycle call (scheduled as a microtask). If a single `page.evaluate()` call makes several state mutations:

```ts
await page.evaluate(() => {
    component.createItem('a'); // sets _items = ['a']
    component.createItem('b'); // sets _items = ['a', 'b']
    component.clear();         // sets _items = []
});
```

Lit fires **one** `updated()` with the **final** state (`_items = []`). This means an assertion that the queue was populated before being cleared is **impossible** to make from a single evaluate — you will only ever see the final empty state.

**Split evaluate calls when testing distinct state transitions:**

```ts
// Step 1 — create items, wait for the populated snapshot
const countBefore = await page.evaluate(() => window.__snapshots?.length ?? 0);
await page.evaluate(() => { component.createItem('a'); component.createItem('b'); });
await page.waitForFunction((c) => (window.__snapshots?.length ?? 0) > c, countBefore);

// Step 2 — clear, wait for the empty snapshot
const countBeforeClear = await page.evaluate(() => window.__snapshots?.length ?? 0);
await page.evaluate(() => { component.clear(); });
await page.waitForFunction((c) => (window.__snapshots?.length ?? 0) > c, countBeforeClear);

const snapshots = await page.evaluate(() => window.__snapshots ?? []);
expect(snapshots[snapshots.length - 1]).toHaveLength(0);
```

### Avoid shared `let` variables for captured state

Variables declared at `test.describe` scope and populated by async listeners are the most common source of flakiness in this test suite. There are two ways to deal with them, in order of preference:

**Preferred — eliminate the shared variable entirely.** Return data directly from the synchronisation helper so each test owns its result as a local constant:

```ts
// Each test gets its own result — no shared state, no reset needed
const snapshot = await afterNextSnapshot(page, () => page.evaluate(() => { ... }));
expect(snapshot).toHaveLength(2);
```

**Acceptable — reset in `beforeEach` if a shared variable is unavoidable.** If you must keep a describe-scope variable (e.g. for a listener that accumulates across multiple steps), always reset it at the top of `beforeEach`:

```ts
let captured: Item[] = [];

test.beforeEach(() => {
    captured = []; // without this, stale data from the previous test bleeds in
});
```

### Waiting for post-click console messages

`element.click()` resolves after the browser processes the click, but `console.info(...)` in the click handler still travels asynchronously over CDP. Always set up the wait before clicking.

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
| Assert on a listener-populated variable immediately after `page.evaluate()` | CDP event arrives after assertion | Browser-side listener + `page.waitForFunction` |
| Using `page.waitForEvent('console', ...)` to observe component state | Couples tests to a story `console.info` side-effect; still relies on CDP timing | Install a browser-side CustomEvent listener; poll with `page.waitForFunction` |
| Shared `let` variable never reset in `beforeEach` | Previous test's data bleeds in | Eliminate shared state, or reset at top of `beforeEach` |
| All mutations in one `evaluate()`, then assert intermediate state | Lit batches them; only final state is observable | Split into separate `evaluate()` calls |
| `await element.click()` then immediately assert on a console-driven value | Same CDP delay applies | `waitForEvent` before click, await after |
| `forEach` on a listener-populated array that may still be `[]` | Loop body never executes; assertions silently pass | Assert `length > 0` before iterating, or use the browser-side accumulation pattern |
| Reading `boundingBox` immediately after `toBeVisible()` on an animated element | `toBeVisible` returns `true` mid-animation; position is transient | Wait for `getAnimations().map(a => a.finished)` before measuring |
