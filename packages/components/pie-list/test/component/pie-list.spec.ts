import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';

// Reads the `checked` state off a pie-switch host by test id.
const isSwitchChecked = (page: Page, testId: string) => page.evaluate(
    (id) => (document.querySelector(`[data-test-id="${id}"]`) as HTMLInputElement | null)?.checked ?? false,
    testId,
);

// Reads an ARIA attribute from a switch's internal input (where its name/description are applied).
const getSwitchInputAria = (page: Page, testId: string, attribute: string) => page.evaluate(
    ({ id, attr }) => document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot?.querySelector('input')?.getAttribute(attr) ?? null,
    { id: testId, attr: attribute },
);

test.describe('PieList - Component tests', () => {
    test('should render the list and its items with the correct ARIA roles', async ({ page }) => {
        // Arrange
        await new BasePage(page, 'list--text-only').load();

        // Act
        const list = page.getByRole('list');
        const items = page.getByRole('listitem');

        // Assert
        await expect(list).toBeVisible();
        await expect(items).toHaveCount(4);
    });

    test('should not apply selectable behaviours to items in a static list', async ({ page }) => {
        // A static list item (`interactionType` defaults to `none`) must not adopt the selectable
        // behaviours (presentation role and hidden text) that only apply for a radio/checkbox/switch
        // interaction type. Uses the meta-text story so both the text and meta-text containers exist.
        await new BasePage(page, 'list--meta-text').load();

        await expect(page.getByRole('listitem').first()).toBeVisible();

        // No item should be demoted to presentation.
        await expect(page.locator('pie-list-item[role="presentation"]')).toHaveCount(0);

        // Neither the primary/secondary text nor the meta text should be hidden from
        // assistive technology in a static list.
        const hidden = await page.evaluate(() => {
            const root = document.querySelector('pie-list-item')?.shadowRoot;
            return {
                text: root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden'),
                meta: root?.querySelector('.c-listItem-metaText')?.getAttribute('aria-hidden'),
            };
        });

        expect(hidden.text).toBeNull();
        expect(hidden.meta).toBeNull();
    });

    test('should set the item role from interactionType', async ({ page }) => {
        await new BasePage(page, 'list--selection-types').load();

        // radio/checkbox are owned by a group, so the item becomes `presentation`.
        await expect(page.getByTestId('item-radio')).toHaveAttribute('role', 'presentation');
        await expect(page.getByTestId('item-checkbox')).toHaveAttribute('role', 'presentation');
        // `none` (default) and `switch` (no group) keep `listitem`.
        await expect(page.getByTestId('item-none')).toHaveAttribute('role', 'listitem');
        await expect(page.getByTestId('item-switch')).toHaveAttribute('role', 'listitem');
    });

    test('should not overwrite a role the consumer adds after connection', async ({ page }) => {
        await new BasePage(page, 'list--text-only').load();

        // Confirm the component has set its managed role first.
        const item = page.getByRole('listitem').first();
        await expect(item).toHaveAttribute('role', 'listitem');

        // Consumer adds their own role after connection.
        await page.evaluate(() => {
            document.querySelector('pie-list-item')?.setAttribute('role', 'option');
        });

        // Trigger a Lit update so `_applyRole` runs again.
        await page.evaluate(() => {
            (document.querySelector('pie-list-item') as HTMLElement & { primaryText: string }).primaryText = 'Updated';
        });

        // The component must not overwrite the consumer's role.
        await expect.poll(() => page.evaluate(() => document.querySelector('pie-list-item')?.getAttribute('role'))).toBe('option');
    });

    test('should restore its managed role when the consumer removes their explicit role', async ({ page }) => {
        await new BasePage(page, 'list--text-only').load();

        // Consumer sets an explicit role, then removes it.
        await page.evaluate(() => {
            document.querySelector('pie-list-item')?.setAttribute('role', 'option');
        });
        await page.evaluate(() => {
            document.querySelector('pie-list-item')?.removeAttribute('role');
        });

        // Trigger a Lit update so `_applyRole` re-runs and restores the managed role.
        await page.evaluate(() => {
            (document.querySelector('pie-list-item') as HTMLElement & { primaryText: string }).primaryText = 'Updated';
        });

        await expect.poll(() => page.evaluate(() => document.querySelector('pie-list-item')?.getAttribute('role'))).toBe('listitem');
    });

    test.describe('with a switch selection list', () => {
        test.beforeEach(async ({ page }) => {
            await new BasePage(page, 'list--switch-selection').load();
            await expect(page.getByTestId('switch-1')).toBeVisible();
        });

        test('should name each switch input from the item text', async ({ page }) => {
            // primaryText becomes the accessible name; secondaryText and metaText the description
            // (combined when both present), applied to the switch's internal input (its host is
            // role-less). Switches consume the same context radio and checkbox do.

            // Both secondary and meta text.
            await expect.poll(() => getSwitchInputAria(page, 'switch-1', 'aria-label')).toBe('Email');
            await expect.poll(() => getSwitchInputAria(page, 'switch-1', 'aria-description')).toBe('Order updates and receipts. Weekly');

            // Secondary text only.
            await expect.poll(() => getSwitchInputAria(page, 'switch-2', 'aria-label')).toBe('Push notifications');
            await expect.poll(() => getSwitchInputAria(page, 'switch-2', 'aria-description')).toBe('Offers and reminders');

            // Neither secondary nor meta text.
            await expect.poll(() => getSwitchInputAria(page, 'switch-3', 'aria-label')).toBe('SMS');
            await expect.poll(() => getSwitchInputAria(page, 'switch-3', 'aria-description')).toBeNull();

            // Meta text only.
            await expect.poll(() => getSwitchInputAria(page, 'switch-4', 'aria-label')).toBe('Post');
            await expect.poll(() => getSwitchInputAria(page, 'switch-4', 'aria-description')).toBe('Rarely');
        });

        test('should hide the visible item text from assistive technology', async ({ page }) => {
            await expect.poll(() => page.evaluate((id) => {
                const root = document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot;
                return root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden') ?? null;
            }, 'item-1')).toBe('true');
        });

        test('should toggle the switch when its row is clicked', async ({ page }) => {
            await page.getByTestId('item-1').click();
            await expect.poll(() => isSwitchChecked(page, 'switch-1')).toBe(true);

            // Clicking the row again toggles it back off.
            await page.getByTestId('item-1').click();
            await expect.poll(() => isSwitchChecked(page, 'switch-1')).toBe(false);
        });

        test('should toggle exactly once when the switch itself is clicked', async ({ page }) => {
            // Guards against a double toggle between the switch's own host click forwarder and the
            // list item's row-click forwarder (which would end up back in the off state).
            await page.getByTestId('switch-1').click();

            await expect.poll(() => isSwitchChecked(page, 'switch-1')).toBe(true);
        });

        test('should fire a change event when a row is clicked', async ({ page }) => {
            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'info') {
                    consoleMessages.push(message.text());
                }
            });

            await page.getByTestId('item-4').click();

            await expect.poll(() => consoleMessages).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
        });

        test('should not toggle a disabled switch row when it is clicked', async ({ page }) => {
            await page.getByTestId('item-3').click();

            expect(await isSwitchChecked(page, 'switch-3')).toBe(false);
        });
    });

    test.describe('with a link list', () => {
        test.beforeEach(async ({ page }) => {
            await new BasePage(page, 'list--link-list').load();
            await expect(page.getByTestId('item-1')).toBeVisible();
        });

        test('should name the slotted anchor from the item text', async ({ page }) => {
            // The item names its (empty) slotted anchor: primaryText is the accessible name and
            // secondaryText + metaText the description (combined when both present).

            // Both secondary and meta text.
            await expect.poll(() => page.getByTestId('link-1').getAttribute('aria-label')).toBe('Orders');
            await expect.poll(() => page.getByTestId('link-1').getAttribute('aria-description')).toBe('View and manage live orders. 12 active');

            // Secondary text only.
            await expect.poll(() => page.getByTestId('link-2').getAttribute('aria-label')).toBe('Menu');
            await expect.poll(() => page.getByTestId('link-2').getAttribute('aria-description')).toBe('Edit items and prices');

            // Meta text only.
            await expect.poll(() => page.getByTestId('link-3').getAttribute('aria-label')).toBe('Payouts');
            await expect.poll(() => page.getByTestId('link-3').getAttribute('aria-description')).toBe('Weekly');

            // Neither secondary nor meta text.
            await expect.poll(() => page.getByTestId('link-4').getAttribute('aria-label')).toBe('Restaurant settings');
            await expect.poll(() => page.getByTestId('link-4').getAttribute('aria-description')).toBeNull();
        });

        test('should not override a consumer-provided name or description on the anchor', async ({ page }) => {
            // item-5's anchor carries its own aria-label and aria-description. The item must leave
            // them untouched rather than replacing them with its primaryText/secondaryText.
            await expect(page.getByTestId('link-5')).toHaveAttribute('aria-label', 'Visit the help centre');
            await expect(page.getByTestId('link-5')).toHaveAttribute('aria-description', 'Guides and FAQs');
        });

        test('should hide the visible item text from assistive technology', async ({ page }) => {
            await expect.poll(() => page.evaluate((id) => {
                const root = document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot;
                return root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden') ?? null;
            }, 'item-1')).toBe('true');
        });

        test('should keep the row as a listitem and expose the anchor as a link', async ({ page }) => {
            await expect(page.getByTestId('item-1')).toHaveAttribute('role', 'listitem');
            await expect(page.getByRole('link', { name: 'Orders' })).toBeVisible();
        });

        test('should navigate when anywhere on the row is clicked', async ({ page }) => {
            // The empty anchor is stretched over the whole row, so clicking the row body (not the
            // anchor element itself) still activates the link.
            await page.getByTestId('item-1').click();

            await expect.poll(() => page.evaluate(() => window.location.hash)).toBe('#orders');
        });

        test('should remove aria attributes from the anchor when interactionType changes away from link', async ({ page }) => {
            // Guard: confirm the attributes are present before we change the prop.
            await expect.poll(() => page.getByTestId('link-1').getAttribute('aria-label')).toBe('Orders');
            await expect.poll(() => page.getByTestId('link-1').getAttribute('aria-description')).toBe('View and manage live orders. 12 active');

            // Change interactionType to 'none' — the item is no longer a link row.
            await page.evaluate(() => {
                const item = document.querySelector('[data-test-id="item-1"]') as HTMLElement & { interactionType: string };
                item.interactionType = 'none';
            });

            // The anchor must no longer carry the aria attributes we set.
            await expect.poll(() => page.getByTestId('link-1').getAttribute('aria-label')).toBeNull();
            await expect.poll(() => page.getByTestId('link-1').getAttribute('aria-description')).toBeNull();
        });
    });

    test.describe('with a button list', () => {
        const EXPECTED_BUTTON_ACTIVATED_MESSAGE = 'Button activated';

        // The item renders its own native `<button>` in its shadow root (nothing is slotted).
        // Reads an ARIA attribute from that element.
        const actionAria = (page: Page, id: string, attribute: string) => page.evaluate(
            ({ itemId, attr }) => document.querySelector(`[data-test-id="${itemId}"]`)?.shadowRoot?.querySelector('.c-listItem-action')?.getAttribute(attr) ?? null,
            { itemId: id, attr: attribute },
        );

        // Moves keyboard focus onto a row's internal action button (shadow DOM, so not reachable via
        // a test id).
        const focusAction = (page: Page, id: string) => page.evaluate(
            (itemId) => (document.querySelector(`[data-test-id="${itemId}"]`)?.shadowRoot?.querySelector('.c-listItem-action') as HTMLElement | null)?.focus(),
            id,
        );

        // Whether the row container matches `:active` (which drives the pointer pressed tint).
        const containerActive = (page: Page, id: string) => page.evaluate(
            (itemId) => document.querySelector(`[data-test-id="${itemId}"]`)?.shadowRoot?.querySelector('.c-listItem-container')?.matches(':active') ?? null,
            id,
        );

        // The row container's computed background colour (transparent when idle, tinted when pressed).
        const containerBg = (page: Page, id: string) => page.evaluate(
            (itemId) => {
                const container = document.querySelector(`[data-test-id="${itemId}"]`)?.shadowRoot?.querySelector('.c-listItem-container');
                return container ? getComputedStyle(container).backgroundColor : null;
            },
            id,
        );

        // Waits for the story's activation log, set up before the action so it cannot be missed.
        const expectActivation = (page: Page) => page.waitForEvent(
            'console',
            (message) => message.type() === 'info' && message.text() === EXPECTED_BUTTON_ACTIVATED_MESSAGE,
        );

        test.beforeEach(async ({ page }) => {
            await new BasePage(page, 'list--button-list').load();
            await expect(page.getByTestId('item-1')).toBeVisible();
        });

        test('should name the action button from the item text', async ({ page }) => {
            // The item names the button it renders: primaryText is the accessible name and
            // secondaryText + metaText the description (combined when both present).

            // Both secondary and meta text.
            await expect.poll(() => actionAria(page, 'item-1', 'aria-label')).toBe('Edit profile');
            await expect.poll(() => actionAria(page, 'item-1', 'aria-description')).toBe('Update your name and photo. New');

            // Secondary text only.
            await expect.poll(() => actionAria(page, 'item-2', 'aria-label')).toBe('Change password');
            await expect.poll(() => actionAria(page, 'item-2', 'aria-description')).toBe('Keep your account secure');

            // Meta text only.
            await expect.poll(() => actionAria(page, 'item-3', 'aria-label')).toBe('Sign out');
            await expect.poll(() => actionAria(page, 'item-3', 'aria-description')).toBe('This device');

            // Neither secondary nor meta text.
            await expect.poll(() => actionAria(page, 'item-4', 'aria-label')).toBe('Delete account');
            await expect.poll(() => actionAria(page, 'item-4', 'aria-description')).toBeNull();
        });

        test('should hide the visible item text from assistive technology', async ({ page }) => {
            await expect.poll(() => page.evaluate((id) => {
                const root = document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot;
                return root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden') ?? null;
            }, 'item-1')).toBe('true');
        });

        test('should keep the row as a listitem and expose the action as a button', async ({ page }) => {
            await expect(page.getByTestId('item-1')).toHaveAttribute('role', 'listitem');
            await expect(page.getByRole('button', { name: 'Edit profile' })).toBeVisible();
        });

        test('should activate when anywhere on the row is clicked', async ({ page }) => {
            // The invisible action button is stretched over the whole row, so clicking the row body
            // activates it. The item fires a native click that bubbles; the story logs on activation.
            const activated = expectActivation(page);

            await page.getByTestId('item-1').click();

            await activated;
        });

        test('should activate when Enter is pressed on the focused row', async ({ page }) => {
            await focusAction(page, 'item-1');

            const activated = expectActivation(page);
            await page.keyboard.press('Enter');
            await activated;
        });

        test('should activate when Space is pressed on the focused row', async ({ page }) => {
            await focusAction(page, 'item-1');

            const activated = expectActivation(page);
            await page.keyboard.press('Space'); // native button activates on Space key-up
            await activated;
        });

        test('should show the pressed styles while the row is pressed with a pointer', async ({ page }) => {
            // Pointer press tints the row via CSS `:active` (no JS): the container is an ancestor of
            // the pressed button, so it matches `:active` too.
            const item = page.getByTestId('item-1');

            // Idle: the row is not active.
            expect(await containerActive(page, 'item-1')).toBe(false);

            await item.hover();
            await page.mouse.down();

            await expect.poll(() => containerActive(page, 'item-1')).toBe(true);

            await page.mouse.up();
        });

        test('should show the pressed styles while Space is held on the focused row', async ({ page }) => {
            // A native button is `:active` while Space is held; that does not reach the container, so
            // the tint comes from `:has(.c-listItem-action:active)` on the container (still no JS).
            await focusAction(page, 'item-1');

            // Idle (focused, no pointer over it): not tinted.
            expect(await containerBg(page, 'item-1')).toBe('rgba(0, 0, 0, 0)');

            await page.keyboard.down('Space');
            await expect.poll(() => containerBg(page, 'item-1')).not.toBe('rgba(0, 0, 0, 0)');

            await page.keyboard.up('Space');
        });

        test('should not render aria-haspopup on the action button when aria prop is not set', async ({ page }) => {
            // The story loads with no aria prop — the attribute must be completely absent,
            // not rendered as an empty string or the literal "undefined".
            await expect.poll(() => actionAria(page, 'item-1', 'aria-haspopup')).toBeNull();
        });

        test('should forward aria.button.haspopup to the internal action button', async ({ page }) => {
            // Set the aria prop on the item and verify it reaches the shadow <button>.
            await page.evaluate(() => {
                const item = document.querySelector('[data-test-id="item-1"]') as any;
                item.aria = { button: { haspopup: 'dialog' } };
            });

            await expect.poll(() => actionAria(page, 'item-1', 'aria-haspopup')).toBe('dialog');
        });
    });

    test.describe('selectable item CSS classes and ARIA attributes', () => {
        test.beforeEach(async ({ page }) => {
            await new BasePage(page, 'list--selection-types').load();
        });

        test('should apply is-selectable class to radio, checkbox and switch items', async ({ page }) => {
            // `is-selectable` is the CSS hook that enables hover/active states and the row-click
            // forwarder. Verified for every selectable type so a future interactionType branching
            // cannot silently drop the class for one of them.
            const classes = await page.evaluate(() => {
                const getClass = (id: string) => document
                    .querySelector(`[data-test-id="${id}"]`)
                    ?.shadowRoot?.querySelector('.c-listItem-container')?.className ?? '';
                return {
                    radio: getClass('item-radio'),
                    checkbox: getClass('item-checkbox'),
                    switch: getClass('item-switch'),
                    none: getClass('item-none'),
                };
            });

            expect(classes.radio, 'radio').toContain('is-selectable');
            expect(classes.checkbox, 'checkbox').toContain('is-selectable');
            expect(classes.switch, 'switch').toContain('is-selectable');
            expect(classes.none, 'none').not.toContain('is-selectable');
        });

        test('should apply is-disabled class to disabled radio, checkbox and switch items', async ({ page }) => {
            // `is-disabled` suppresses hover/active states and the pointer cursor. Tested for every
            // selectable type so the disabled prop wires through correctly regardless of interactionType.
            const classes = await page.evaluate(() => {
                const getClass = (id: string) => document
                    .querySelector(`[data-test-id="${id}"]`)
                    ?.shadowRoot?.querySelector('.c-listItem-container')?.className ?? '';
                return {
                    radio: getClass('item-radio-disabled'),
                    checkbox: getClass('item-checkbox-disabled'),
                    switch: getClass('item-switch-disabled'),
                };
            });

            expect(classes.radio, 'radio').toContain('is-disabled');
            expect(classes.checkbox, 'checkbox').toContain('is-disabled');
            expect(classes.switch, 'switch').toContain('is-disabled');
        });

        test('should hide metaText from assistive technology for radio, checkbox and switch items', async ({ page }) => {
            // In a selectable item metaText is provided to the slotted control via ariaContext. The
            // visible span must be aria-hidden so screen readers do not announce it twice.
            const ariaHidden = await page.evaluate(() => {
                const getAriaHidden = (id: string) => document
                    .querySelector(`[data-test-id="${id}"]`)
                    ?.shadowRoot?.querySelector('.c-listItem-metaText')?.getAttribute('aria-hidden') ?? null;
                return {
                    radio: getAriaHidden('item-radio'),
                    checkbox: getAriaHidden('item-checkbox'),
                    switch: getAriaHidden('item-switch'),
                    none: getAriaHidden('item-none'),
                };
            });

            expect(ariaHidden.radio, 'radio').toBe('true');
            expect(ariaHidden.checkbox, 'checkbox').toBe('true');
            expect(ariaHidden.switch, 'switch').toBe('true');
            expect(ariaHidden.none, 'none').toBeNull();
        });
    });

    test.describe('primaryText', () => {
        test('should still render the item when primaryText is not provided', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--no-primary-text').load();

            // Act
            const item = page.locator('pie-list-item');
            const primaryText = item.locator('.c-listItem-primaryText');

            // Assert
            await expect(item).toHaveCount(1);
            // The item renders as normal; the primary text span is present but empty (the component
            // no longer short-circuits to rendering nothing when primaryText is missing).
            await expect(primaryText).toHaveCount(1);
            await expect(primaryText).toHaveText('');
        });
    });

    test.describe('metaText', () => {
        test('should render metaText and not the trailing slot when both are provided', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--meta-text-with-trailing').load();

            // Act
            const metaText = page.locator('.c-listItem-metaText');
            const trailingContent = page.locator('pie-tag[slot="trailing"]');

            // Assert
            await expect(metaText).toHaveText('Meta text');
            await expect(trailingContent).toBeHidden(); // no trailing slot is rendered, so it cannot project
        });
    });

    test.describe('slotted media (has-media)', () => {
        test('should display slotted media when has-media is set', async ({ page }) => {
            // Arrange
            await new BasePage(page, 'list--media').load();

            // Act
            const thumbnail = page.locator('pie-thumbnail').first();

            // Assert
            await expect(thumbnail).toBeVisible();
        });
    });

    test.describe('item height', () => {
        // Returns the rendered offsetHeight (integer px) of the shadow-root container for
        // every `pie-list-item` on the page. offsetHeight is used rather than
        // getBoundingClientRect so sub-pixel values are always rounded to whole pixels.
        const getItemHeights = (page: Page) => page.evaluate(() => Array.from(document.querySelectorAll('pie-list-item')).map((item) => (item.shadowRoot?.querySelector('.c-listItem-container') as HTMLElement | null)?.offsetHeight ?? 0));

        test('should render compact items (primary text only) at 48px', async ({ page }) => {
            await new BasePage(page, 'list--item-height-compact').load();

            const heights = await getItemHeights(page);

            expect(heights.length).toBeGreaterThan(0);
            heights.forEach((height, i) => expect(height, `item ${i + 1}`).toBe(48));
        });

        test('should render default items with primary and secondary text at 76px', async ({ page }) => {
            await new BasePage(page, 'list--item-height-primary-and-secondary').load();

            const heights = await getItemHeights(page);

            expect(heights.length).toBeGreaterThan(0);
            heights.forEach((height, i) => expect(height, `item ${i + 1}`).toBe(76));
        });

        test('should render default items (primary text only) at 56px', async ({ page }) => {
            await new BasePage(page, 'list--item-height-primary-only').load();

            const heights = await getItemHeights(page);

            expect(heights.length).toBeGreaterThan(0);
            heights.forEach((height, i) => expect(height, `item ${i + 1}`).toBe(56));
        });

        test('should render compact items (primary text only) at 48px when hasDivider is false', async ({ page }) => {
            await new BasePage(page, 'list--item-height-compact-no-divider').load();

            const heights = await getItemHeights(page);

            expect(heights.length).toBeGreaterThan(0);
            heights.forEach((height, i) => expect(height, `item ${i + 1}`).toBe(48));
        });

        test('should render default items with primary and secondary text at 76px when hasDivider is false', async ({ page }) => {
            await new BasePage(page, 'list--item-height-primary-and-secondary-no-divider').load();

            const heights = await getItemHeights(page);

            expect(heights.length).toBeGreaterThan(0);
            heights.forEach((height, i) => expect(height, `item ${i + 1}`).toBe(76));
        });

        test('should render default items (primary text only) at 56px when hasDivider is false', async ({ page }) => {
            await new BasePage(page, 'list--item-height-primary-only-no-divider').load();

            const heights = await getItemHeights(page);

            expect(heights.length).toBeGreaterThan(0);
            heights.forEach((height, i) => expect(height, `item ${i + 1}`).toBe(56));
        });
    });

    test.describe('pie-tag disabled behaviour', () => {
        // Reads the className of the inner `.c-tag` element inside a pie-tag's shadow root.
        const getTagClass = (page: Page, testId: string) => page.evaluate(
            (id) => document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot?.querySelector('.c-tag')?.className ?? '',
            testId,
        );

        test.beforeEach(async ({ page }) => {
            await new BasePage(page, 'list--disabled-tag-behaviour').load();
        });

        test.describe('individual disabled rows', () => {
            test('should NOT apply is-dimmed to a tag when the list-item is disabled but isDimmed is not set', async ({ page }) => {
                // A disabled list-item must not propagate its disabled state to slotted tags.
                expect(await getTagClass(page, 'tag-disabled-no-dimmed')).not.toContain('is-dimmed');
            });
        });

        test.describe('group-disabled rows — context propagates automatically', () => {
            test('should apply is-dimmed to a tag inside a disabled pie-radio-group', async ({ page }) => {
                // The group broadcasts parentDisabledContext; pie-tag consumes it directly without
                // needing isDimmed set on the tag.
                expect(await getTagClass(page, 'tag-group-disabled-1')).toContain('is-dimmed');
            });

            test('should NOT apply is-dimmed to a tag inside an enabled pie-radio-group', async ({ page }) => {
                expect(await getTagClass(page, 'tag-group-enabled-1')).not.toContain('is-dimmed');
            });
        });
    });
});
