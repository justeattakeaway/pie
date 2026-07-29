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
        // A static list item (`selectionType` defaults to `none`) must not adopt the selectable
        // behaviours (presentation role and hidden text) that only apply for a radio/checkbox/switch
        // selection type. Uses the meta-text story so both the text and meta-text containers exist.
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

    test('should set the item role from selectionType', async ({ page }) => {
        await new BasePage(page, 'list--selection-types').load();

        // radio/checkbox are owned by a group, so the item becomes `presentation`.
        await expect(page.getByTestId('item-radio')).toHaveAttribute('role', 'presentation');
        await expect(page.getByTestId('item-checkbox')).toHaveAttribute('role', 'presentation');
        // `none` (default) and `switch` (no group) keep `listitem`.
        await expect(page.getByTestId('item-none')).toHaveAttribute('role', 'listitem');
        await expect(page.getByTestId('item-switch')).toHaveAttribute('role', 'listitem');
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

    test.describe('selectable item CSS classes and ARIA attributes', () => {
        test.beforeEach(async ({ page }) => {
            await new BasePage(page, 'list--selection-types').load();
        });

        test('should apply is-selectable class to radio, checkbox and switch items', async ({ page }) => {
            // `is-selectable` is the CSS hook that enables hover/active states and the row-click
            // forwarder. Verified for every selectable type so a future selectionType branching
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
            // selectable type so the disabled prop wires through correctly regardless of selectionType.
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
});
