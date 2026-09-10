import { type Page } from '@playwright/test';

/**
 * The time to wait for the browser to define the PIE components on the page.
 * After this time, the test fails.
 */
const COMPONENT_TIMEOUT_MS = 5000;

/**
 * The tag prefixes of the PIE custom elements.
 *
 * The wait ignores all other elements. Therefore a third-party element that the page does
 * not register cannot block the wait.
 */
const PIE_TAG_PREFIXES = ['pie-', 'icon-'];

/**
 * This CSS stops all the CSS animations and transitions. It also stops the animations in
 * the shadow DOM.
 *
 * The CSS makes each animation end quickly. It does not remove the animations.
 * `animation: none` removes an animation. If that animation has
 * `animation-fill-mode: forwards`, the element goes back to the state before the animation.
 * For `pie-checkbox`, the `forwards` animation gives the tick its dimensions. Therefore
 * `animation: none` shows a checked checkbox with no tick.
 *
 * A short duration is different. Each animation goes to its end state. An animation that
 * repeats, such as the animation of `pie-spinner`, stops at the same frame each time. The
 * components use the same method in their `prefers-reduced-motion` rules.
 *
 * A transition always goes to its final value. Therefore it is safe to remove the
 * transitions, and the element goes to its final state immediately.
 */
const FREEZE_CSS = `*, *::before, *::after, *::backdrop {
    animation-delay: 0s !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition: none !important;
}`;

/**
 * This attribute identifies the stylesheets that `freezeAnimations` adds.
 *
 * If you call `freezeAnimations` again, it does not add a second stylesheet to each
 * shadow root.
 */
const FREEZE_STYLE_ATTRIBUTE = 'data-pie-test-freeze';

/**
 * Gets the names of the PIE custom elements that the browser did not define.
 *
 * The function looks in the light DOM and in all the shadow roots.
 */
async function findUnloadedComponents (page: Page): Promise<string[]> {
    return page.evaluate((tagPrefixes) => {
        const unloaded = new Set<string>();

        const walk = (root: Document | ShadowRoot) => {
            root.querySelectorAll('*').forEach((el) => {
                if (!el.matches(':defined') && tagPrefixes.some((prefix) => el.localName.startsWith(prefix))) {
                    unloaded.add(el.localName);
                }

                if (el.shadowRoot) {
                    walk(el.shadowRoot);
                }
            });
        };

        walk(document);

        return [...unloaded];
    }, PIE_TAG_PREFIXES)
        // The page can go to a new URL, or close, during the wait.
        .catch((): string[] => []);
}

/**
 * Waits until the browser defines all the PIE components on the page.
 *
 * If the browser does not define all of them, this function fails and shows their names.
 * The function must fail the test. If it does not fail the test, Percy gets a page that is
 * not complete, and the test run passes.
 */
async function waitForComponents (page: Page): Promise<void> {
    try {
        await page.waitForFunction((tagPrefixes) => {
            const hasUnloaded = (root: Document | ShadowRoot): boolean => Array.from(root.querySelectorAll('*')).some((el) => {
                if (!el.matches(':defined') && tagPrefixes.some((prefix) => el.localName.startsWith(prefix))) {
                    return true;
                }

                return el.shadowRoot ? hasUnloaded(el.shadowRoot) : false;
            });

            return !hasUnloaded(document);
        }, PIE_TAG_PREFIXES, { timeout: COMPONENT_TIMEOUT_MS });
    } catch (error) {
        // `waitForFunction` also fails if the page closes, or if the function in the browser
        // makes an error. Only a timeout shows that components are missing. Therefore the code
        // sends all the other errors to the caller.
        if (!(error instanceof Error) || error.name !== 'TimeoutError') {
            throw error;
        }

        const unloaded = await findUnloadedComponents(page);
        const names = unloaded.length ? `: ${unloaded.join(', ')}` : '';

        // The original error is a Playwright timeout. It does not give more data than the
        // message below. The code above sends all the other errors to the caller.
        throw new Error(`Timed out after ${COMPONENT_TIMEOUT_MS}ms waiting for components to load on ${page.url()}${names}`);
    }
}

/**
 * Waits until the page is complete. First each Lit element ends its render. Then each image
 * and each web font loads.
 *
 * The function waits for the renders first. Therefore it also waits for an image or a font
 * that a render adds.
 *
 * The function looks in all the shadow roots. Therefore it also waits for a component that
 * is inside the shadow root of a different component.
 */
async function waitForRender (page: Page): Promise<void> {
    await page.evaluate(async () => {
        /**
         * The maximum number of renders to wait for.
         *
         * Lit sets `updateComplete` to `false` if the update that ends starts a new update.
         * Therefore you must wait more than one time for a component that renders from
         * `updated()`. The limit makes sure that a component that renders many times cannot
         * stop the test.
         */
        const MAX_RENDER_PASSES = 10;

        const walk = (root: Document | ShadowRoot, visit: (el: Element) => void) => {
            root.querySelectorAll('*').forEach((el) => {
                visit(el);

                if (el.shadowRoot) {
                    walk(el.shadowRoot, visit);
                }
            });
        };

        type Updatable = { updateComplete: Promise<unknown> };

        const isUpdatable = (el: Element): el is Element & Updatable => (
            typeof (el as Element & Partial<Updatable>).updateComplete?.then === 'function'
        );

        const updatables: Updatable[] = [];
        walk(document, (el) => {
            if (isUpdatable(el)) {
                updatables.push(el);
            }
        });

        // If the render of one component makes an error, the other components on the page
        // must continue.
        await Promise.all(updatables.map(async (el) => {
            try {
                for (let pass = 0; pass < MAX_RENDER_PASSES; pass += 1) {
                    // eslint-disable-next-line no-await-in-loop
                    if (await el.updateComplete !== false) {
                        return;
                    }
                }
            } catch {
                // The code ignores this error. Refer to the comment above.
            }
        }));

        const images: HTMLImageElement[] = [];
        walk(document, (el) => {
            if (el instanceof HTMLImageElement && !el.complete) {
                images.push(el);
            }
        });

        await Promise.all(images.map((img) => new Promise<void>((resolve) => {
            // The image can load during the wait for the renders. Then the `load` event
            // occurs before this line, and a listener that you add now does not get it.
            if (img.complete) {
                resolve();
                return;
            }

            // Use `addEventListener` and not `onload`. Therefore the code keeps a handler
            // that the page sets.
            img.addEventListener('load', () => resolve(), { once: true });
            img.addEventListener('error', () => resolve(), { once: true });
        })));

        await document.fonts.ready;
    });
}

/**
 * Stops all the CSS animations and transitions on the page. It also stops the animations in
 * the shadow DOM.
 *
 * The `reducedMotion` option of Playwright does not go into the shadow DOM. Percy also does
 * not go into the shadow DOM. Therefore, without this function, Percy gets a different frame
 * of an element such as `pie-spinner` each time.
 *
 * Percy copies these stylesheets with the other parts of the DOM. Therefore Percy shows the
 * same state as the browser.
 *
 * This function does not change a shadow root that the page makes later. Call the function
 * again after an action that adds new components.
 */
export async function freezeAnimations (page: Page): Promise<void> {
    await page.evaluate(([css, marker]) => {
        const inject = (root: Document | ShadowRoot) => {
            const target = root instanceof Document ? root.head : root;

            if (!target.querySelector(`style[${marker}]`)) {
                const style = document.createElement('style');
                style.setAttribute(marker, 'true');
                style.textContent = css;
                target.appendChild(style);
            }

            root.querySelectorAll('*').forEach((el) => {
                if (el.shadowRoot) {
                    inject(el.shadowRoot);
                }
            });
        };

        inject(document);
    }, [FREEZE_CSS, FREEZE_STYLE_ATTRIBUTE]);

    // Two frames give the animations sufficient time to go to their end state. The browser
    // then shows this state before a test makes a snapshot.
    await page.evaluate(() => new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    }));
}

/**
 * Waits until the page loads and renders, then stops all the movement.
 *
 * `BasePage.open` calls this function. Therefore each test that uses a page object gets the
 * same page each time, and the test does not need its own delay.
 */
export async function settlePage (page: Page): Promise<void> {
    await waitForComponents(page);
    await waitForRender(page);
    await freezeAnimations(page);
}
