import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { checkboxGroup } from '../helpers/page-object/selectors.ts';
import { statusTypes } from '../../src/defs.ts';
import type { CheckboxGroupProps } from '../../src/defs.ts';

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';

// Reads the `checked` property directly off a pie-checkbox host by test id.
const isCheckboxChecked = (page: Page, testId: string) => page.evaluate(
    (id) => (document.querySelector(`[data-test-id="${id}"]`) as HTMLInputElement | null)?.checked ?? false,
    testId,
);

// Reads an ARIA attribute from a checkbox's internal input (where its name/description are applied).
const getInputAria = (page: Page, testId: string, attribute: string) => page.evaluate(
    ({ id, attr }) => document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot?.querySelector('input')?.getAttribute(attr) ?? null,
    { id: testId, attr: attribute },
);

test.describe('PieCheckboxGroup - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
        await checkboxGroupPage.load();

        // Act
        const checkboxGroupComponent = page.getByTestId(checkboxGroup.selectors.container.dataTestId);

        // Assert
        await expect(checkboxGroupComponent).toBeVisible();
    });

    test.describe('assistiveText', () => {
        test('should not render the assistive text component if the prop is not provided', async ({ page }) => {
            // Arrange
            const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
            await checkboxGroupPage.load();

            // Act
            const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

            // Assert
            await expect(assistiveText).not.toBeVisible();
        });

        test('should apply the "default" variant attribute if no status is provided', async ({ page }) => {
            // Arrange
            const props : CheckboxGroupProps = {
                assistiveText: 'Assistive text',
            };
            const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
            await checkboxGroupPage.load({ ...props });

            // Act
            const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

            // Assert
            await expect(assistiveText).toBeVisible();
            await expect(assistiveText).toHaveAttribute('variant', 'default');
            await expect(assistiveText).toHaveText('Assistive text');
        });

        test.describe('Assistive text: Status', () => {
            statusTypes.forEach((status) => {
                test(`should render the assistive text component with the ${status} variant`, async ({ page }) => {
                    // Arrange
                    const props : CheckboxGroupProps = {
                        assistiveText: 'Assistive text',
                        status,
                    };
                    const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                    await checkboxGroupPage.load({ ...props });

                    // Act
                    const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

                    // Assert
                    await expect(assistiveText).toBeVisible();
                    await expect(assistiveText).toHaveAttribute('variant', status);
                    await expect(assistiveText).toHaveText('Assistive text');
                });
            });
        });

        test.describe('Assistive test ID attribute', () => {
            test('should contain an ID associated with the checkbox group element for a11y', async ({ page }) => {
                // Arrange
                const props : CheckboxGroupProps = {
                    assistiveText: 'Assistive text',
                };
                const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                await checkboxGroupPage.load({ ...props });

                // Act
                const checkboxGroupFieldset = page.getByTestId(checkboxGroup.selectors.fieldset.dataTestId);
                const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                await expect(checkboxGroupFieldset).toHaveAttribute('aria-describedby', 'assistive-text');
            });
        });
    });

    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the slotted component', async ({ page }) => {
                    // Arrange
                    const props : CheckboxGroupProps = {
                        disabled: true,
                    };
                    const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                    await checkboxGroupPage.load({ ...props });

                    // Act
                    const checkboxComponents = page.locator('pie-checkbox');
                    const checkboxCount = await checkboxComponents.count();

                    // Assert
                    await Promise.all(Array.from({ length: checkboxCount }, (_, i) => expect(checkboxComponents.nth(i).locator('input')).toBeDisabled()));
                });
            });
            test.describe('when false', () => {
                test('the slotted checkbox component should not be disabled if checkbox itself is not disabled', async ({ page }) => {
                    // Arrange
                    const props : CheckboxGroupProps = {
                        disabled: false,
                    };
                    const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                    await checkboxGroupPage.load({ ...props });

                    // Act
                    const checkboxComponents = page.locator('pie-checkbox');
                    const checkboxCount = await checkboxComponents.count();

                    // Assert
                    await Promise.all(Array.from({ length: checkboxCount }, (_, i) => expect(checkboxComponents.nth(i).locator('input')).not.toBeDisabled()));
                });
            });
            test('the slotted checkbox component should be disabled if checkbox itself is disabled', async ({ page }) => {
                // Arrange
                const props : CheckboxGroupProps = {
                    disabled: false,
                };

                const checkboxGroupPage = new BasePage(page, 'checkbox-group--disabled-slotted-checkbox');
                await checkboxGroupPage.load({ ...props });

                // Act
                // Hardcoded `disable` attribute on the first checkbox
                const checkbox1 = page.locator('pie-checkbox', { hasText: 'checkbox 1' }).locator('input');
                const checkbox2 = page.locator('pie-checkbox', { hasText: 'checkbox 2' }).locator('input');

                // Assert
                await expect(checkbox1).toBeDisabled();
                await expect(checkbox2).not.toBeDisabled();
            });
        });
    });

    test.describe('with list items', () => {
        const selectors = {
            items: {
                1: 'item-1', 2: 'item-2', 3: 'item-3', 4: 'item-4',
            },
            checkboxes: {
                1: 'checkbox-1', 2: 'checkbox-2', 3: 'checkbox-3', 4: 'checkbox-4',
            },
        };

        test.beforeEach(async ({ page }) => {
            const checkboxGroupPage = new BasePage(page, 'checkbox-group--with-list-items');
            await checkboxGroupPage.load();
            await expect(page.getByTestId(selectors.checkboxes[1])).toBeVisible();
        });

        test('should render list items with a presentation role', async ({ page }) => {
            await expect(page.getByTestId(selectors.items[1])).toHaveAttribute('role', 'presentation');
        });

        test('should mirror the item text onto the checkbox input ARIA', async ({ page }) => {
            // primaryText becomes the accessible name; secondaryText and metaText the description
            // (combined when both present), applied to the internal input.

            // Both secondary and meta text.
            await expect.poll(() => getInputAria(page, selectors.checkboxes[1], 'aria-label')).toBe('Cheese');
            await expect.poll(() => getInputAria(page, selectors.checkboxes[1], 'aria-description')).toBe('Extra mature. Free');

            // Secondary text only.
            await expect.poll(() => getInputAria(page, selectors.checkboxes[2], 'aria-label')).toBe('Pepperoni');
            await expect.poll(() => getInputAria(page, selectors.checkboxes[2], 'aria-description')).toBe('Spicy');

            // Neither secondary nor meta text.
            await expect.poll(() => getInputAria(page, selectors.checkboxes[3], 'aria-label')).toBe('Mushrooms');
            await expect.poll(() => getInputAria(page, selectors.checkboxes[3], 'aria-description')).toBeNull();

            // Meta text only.
            await expect.poll(() => getInputAria(page, selectors.checkboxes[4], 'aria-label')).toBe('Olives');
            await expect.poll(() => getInputAria(page, selectors.checkboxes[4], 'aria-description')).toBe('£0.50');
        });

        test('should hide the visible item text from assistive technology', async ({ page }) => {
            await expect.poll(() => page.evaluate((id) => {
                const root = document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot;
                return {
                    text: root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden') ?? null,
                    meta: root?.querySelector('.c-listItem-metaText')?.getAttribute('aria-hidden') ?? null,
                };
            }, selectors.items[1])).toEqual({ text: 'true', meta: 'true' });
        });

        test('should toggle a checkbox when its row is clicked', async ({ page }) => {
            await page.getByTestId(selectors.items[1]).click();
            await expect.poll(() => isCheckboxChecked(page, selectors.checkboxes[1])).toBe(true);

            // Clicking the row again unchecks it.
            await page.getByTestId(selectors.items[1]).click();
            await expect.poll(() => isCheckboxChecked(page, selectors.checkboxes[1])).toBe(false);
        });

        test('should allow multiple checkboxes to be selected independently', async ({ page }) => {
            await page.getByTestId(selectors.items[1]).click();
            await page.getByTestId(selectors.items[2]).click();

            await expect.poll(() => isCheckboxChecked(page, selectors.checkboxes[1])).toBe(true);
            await expect.poll(() => isCheckboxChecked(page, selectors.checkboxes[2])).toBe(true);
        });

        test('should toggle exactly once when the checkbox itself is clicked', async ({ page }) => {
            // Clicking the checkbox directly must toggle it once (end checked), not twice (end
            // unchecked). This guards against a double toggle between the native `<label for>`,
            // the checkbox's own host click forwarder, and the list item's row-click forwarder.
            await page.getByTestId(selectors.checkboxes[1]).click();

            await expect.poll(() => isCheckboxChecked(page, selectors.checkboxes[1])).toBe(true);
        });

        test('should fire a change event when a row is clicked', async ({ page }) => {
            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'info') {
                    consoleMessages.push(message.text());
                }
            });

            await page.getByTestId(selectors.items[2]).click();

            await expect.poll(() => consoleMessages).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
        });

        test('should not toggle a disabled row when it is clicked', async ({ page }) => {
            await page.getByTestId(selectors.items[3]).click();

            expect(await isCheckboxChecked(page, selectors.checkboxes[3])).toBe(false);
        });

        test('should mark the row disabled from the item\'s `disabled` prop', async ({ page }) => {
            const isRowDisabled = (testId: string) => page.getByTestId(testId)
                .evaluate((el) => el.shadowRoot?.querySelector('.c-listItem-container')?.classList.contains('is-disabled') ?? false);

            // item-3 sets `disabled`; item-1 does not.
            expect(await isRowDisabled(selectors.items[3])).toBe(true);
            expect(await isRowDisabled(selectors.items[1])).toBe(false);
        });
    });

    test.describe('with list items in a disabled group', () => {
        const selectors = {
            items: {
                1: 'item-1', 4: 'item-4',
            },
            checkboxes: {
                1: 'checkbox-1',
            },
        };

        test.beforeEach(async ({ page }) => {
            const checkboxGroupPage = new BasePage(page, 'checkbox-group--with-list-items-group-disabled');
            await checkboxGroupPage.load();
            await expect(page.getByTestId(selectors.checkboxes[1])).toBeVisible();
        });

        test('should not toggle a row when the group is disabled', async ({ page }) => {
            await page.getByTestId(selectors.items[1]).click();

            expect(await isCheckboxChecked(page, selectors.checkboxes[1])).toBe(false);
        });
    });
});
