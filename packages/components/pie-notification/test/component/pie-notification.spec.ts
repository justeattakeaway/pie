
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieNotification } from '../../src/index.ts';
import {
    variants,
    headingLevels,
    type NotificationProps,
} from '../../src/defs.ts';

const rootSelector = 'pie-notification';
const componentSelector = `[data-test-id="${rootSelector}"]`;
const iconCloseSelector = `[data-test-id="${rootSelector}-icon-close"]`;
const slottedIconSelector = `[data-test-id="${rootSelector}-icon-slotted"]`;
const iconAreaSelector = `[data-test-id="${rootSelector}-heading-icon-area"]`;
const headingIconInfoSelector = `[data-test-id="${rootSelector}-heading-icon-info"]`;
const headingIconSuccessSelector = `[data-test-id="${rootSelector}-heading-icon-success"]`;
const headingIconWarningSelector = `[data-test-id="${rootSelector}-heading-icon-warning"]`;
const headingIconErrorSelector = `[data-test-id="${rootSelector}-heading-icon-error"]`;
const headerSelector = `[data-test-id="${rootSelector}-header"]`;
const headingSelector = `[data-test-id="${rootSelector}-heading"]`;
const footerSelector = `[data-test-id="${rootSelector}-footer"]`;
const leadingActionSelector = `[data-test-id="${rootSelector}-leading-action"]`;
const supportingActionSelector = `[data-test-id="${rootSelector}-supporting-action"]`;

const slotContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna. Cras fringilla sed ipsum nec dignissim. Aliquam sit amet ullamcorper ligula.';
const mockSlottedIcon = `<div slot="icon" data-test-id="${rootSelector}-icon-slotted">Mocked Icon Slot</div>`;

test.describe('PieNotification - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieNotification);
        await component.unmount();
    });

    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieNotification);
        await component.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: {} as NotificationProps,
            slots: { default: slotContent },
        });

        // Act
        const notification = page.locator(componentSelector);

        // Assert
        expect(notification).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('variants', () => {
            variants.forEach((variant) => {
                test(`should render when the variant is ${variant}`, async ({ mount, page }) => {
                    // Arrange
                    await mount(PieNotification, {
                        props: {
                            variant,
                        },
                    });

                    // Act
                    const notification = page.locator(componentSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(notification).toHaveAttribute('variant', variant);
                });
            });

            test('should render icon-info when variant is info', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        variant: 'info',
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const icon = page.locator(headingIconInfoSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(icon).toBeVisible();
            });

            test('should render icon-success when variant is success', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        variant: 'success',
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const icon = page.locator(headingIconSuccessSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(icon).toBeVisible();
            });

            test('should render icon-warning when variant is warning', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        variant: 'warning',
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const icon = page.locator(headingIconWarningSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(icon).toBeVisible();
            });

            test('should render icon-error when variant is error', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        variant: 'error',
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const icon = page.locator(headingIconErrorSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(icon).toBeVisible();
            });
        });

        test.describe('isCompact', () => {
            test('should not render the close icon if isCompact is true ', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: { isCompact: true },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).not.toBeVisible();
            });
        });

        test.describe('heading', () => {
            test('should not render the header if heading is not provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: { heading: undefined },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);
                const header = page.locator(headerSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).toBeVisible();
                expect(header).not.toBeVisible();
            });

            test('should render the header when heading is provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: { heading: 'Title' },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);
                const header = page.locator(headerSelector);
                const heading = page.locator(`h2${headingSelector}`);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).toBeVisible();
                expect(header).toBeVisible();
                expect(heading).toBeVisible();
                expect(heading).toHaveText('Title');
            });
        });

        test.describe('headingLevel', () => {
            test.describe('heading levels', () => {
                headingLevels.forEach((headingLevel) => {
                    test(`should render successfully when heading level is ${headingLevel}`, async ({ mount, page }) => {
                        // Arrange
                        await mount(PieNotification, {
                            props: {
                                headingLevel,
                                heading: `Title using ${headingLevel}`,
                            },
                        });

                        // Act
                        const heading = page.locator(`${headingLevel}${headingSelector}`);
                        const header = page.locator(headerSelector);

                        // Assert
                        expect(header).toBeVisible();
                        expect(heading).toBeVisible();
                        expect(heading).toHaveText(`Title using ${headingLevel}`);
                    });
                });
            });
        });

        test.describe('hideIcon', () => {
            const variantsWithDefaultIcon = ['info', 'success', 'warning', 'error'];
            variants.filter((variant) => variantsWithDefaultIcon.includes(variant)).forEach((variant) => {
                test(`should not render the default icon when the variant is ${variant} and hideIcon is true`, async ({ mount, page }) => {
                    // Arrange
                    await mount(PieNotification, {
                        props: {
                            variant,
                            hideIcon: true,
                        },
                    });

                    // Act
                    const notification = page.locator(componentSelector);
                    const iconArea = page.locator(iconAreaSelector);
                    const iconSelector = page.locator(`[data-test-id="${rootSelector}-heading-icon-${variant}"]`);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(notification).toHaveAttribute('variant', variant);
                    expect(iconSelector).not.toBeVisible();
                    expect(iconArea).not.toBeVisible();
                });
            });
        });

        test.describe('isDismissible', () => {
            test('should not show the close icon if isDismissible is false', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        isDismissible: false,
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).not.toBeVisible();
            });

            test('should not show the close icon if isDismissible is false and isCompact is false', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        isDismissible: false,
                        isCompact: false,
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).not.toBeVisible();
            });

            test('should not show the close icon if isDismissible is true and isCompact is true', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        isDismissible: true,
                        isCompact: true,
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).not.toBeVisible();
            });

            test('should show the close icon if isDismissible is true', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        isDismissible: true,
                    },
                });

                // Act
                const notification = page.locator(componentSelector);
                const iconClose = page.locator(iconCloseSelector);

                // Assert
                expect(notification).toBeVisible();
                expect(iconClose).toBeVisible();
            });
        });

        test.describe('Action buttons', () => {
            const mainAction = {
                text: 'Confirm',
                ariaLabel: 'Button that confirm the action',
            };
            const secondaryAction = {
                text: 'Cancel',
                ariaLabel: 'Button that cancel the action',
            };

            test.describe('leadingAction', () => {
                test('should not show the footer if leadingAction is not provided', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieNotification);

                    // Act
                    const notification = page.locator(componentSelector);
                    const footer = page.locator(footerSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(footer).not.toBeVisible();
                });

                test('should show the footer if leadingAction is provided', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieNotification, {
                        props: {
                            isDismissible: true,
                            leadingAction: mainAction,
                        } as NotificationProps,
                    });

                    // Act
                    const notification = page.locator(componentSelector);
                    const footer = page.locator(footerSelector);
                    const actionLeading = page.locator(leadingActionSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(footer).toBeVisible();
                    expect(actionLeading).toBeVisible();
                });
            });

            test.describe('supportingAction', () => {
                test('should not show the footer nor leadingAction if only supportingAction is provided', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieNotification, {
                        props: {
                            isDismissible: true,
                            supportingAction: secondaryAction,
                        } as NotificationProps,
                    });

                    // Act
                    const notification = page.locator(componentSelector);
                    const footer = page.locator(footerSelector);
                    const actionLeading = page.locator(leadingActionSelector);
                    const actionSupporting = page.locator(supportingActionSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(footer).not.toBeVisible();
                    expect(actionLeading).not.toBeVisible();
                    expect(actionSupporting).not.toBeVisible();
                });

                test('should the leadingAction and supportingAction when both are provided', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieNotification, {
                        props: {
                            isDismissible: true,
                            leadingAction: mainAction,
                            supportingAction: secondaryAction,
                        } as NotificationProps,
                    });

                    // Act
                    const notification = page.locator(componentSelector);
                    const footer = page.locator(footerSelector);
                    const actionLeading = page.locator(leadingActionSelector);
                    const actionSupporting = page.locator(supportingActionSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(footer).toBeVisible();
                    expect(actionLeading).toBeVisible();
                    expect(actionSupporting).toBeVisible();
                });
            });

            test.describe('hasStackedActions', () => {
                test('should stack buttons on small screens', async ({ mount, page }) => {
                    // Arrange
                    await page.setViewportSize({ width: 375, height: 667 });
                    await mount(PieNotification, {
                        props: {
                            isDismissible: true,
                            leadingAction: mainAction,
                            supportingAction: secondaryAction,
                            hasStackedActions: true,
                        } as NotificationProps,
                    });

                    // Act
                    const notification = page.locator(componentSelector);
                    const footer = page.locator(footerSelector);
                    const actionLeading = page.locator(leadingActionSelector);
                    const actionSupporting = page.locator(supportingActionSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(footer).toBeVisible();
                    expect(actionLeading).toBeVisible();
                    expect(actionSupporting).toBeVisible();

                    expect(footer).toHaveCSS('flex-direction', 'column');
                    // 295px is the size of the button when the viewport size is 375px
                    expect(actionLeading).toHaveCSS('width', '295px');
                    expect(actionSupporting).toHaveCSS('width', '295px');
                });

                test('should not stack buttons on large screens', async ({ mount, page }) => {
                    // Arrange
                    await page.setViewportSize({ width: 1275, height: 900 });
                    await mount(PieNotification, {
                        props: {
                            isDismissible: true,
                            leadingAction: mainAction,
                            supportingAction: secondaryAction,
                            hasStackedActions: true,
                        } as NotificationProps,
                    });

                    // Act
                    const notification = page.locator(componentSelector);
                    const footer = page.locator(footerSelector);
                    const actionLeading = page.locator(leadingActionSelector);
                    const actionSupporting = page.locator(supportingActionSelector);

                    // Assert
                    expect(notification).toBeVisible();
                    expect(footer).toBeVisible();
                    expect(actionLeading).toBeVisible();
                    expect(actionSupporting).toBeVisible();

                    expect(footer).toHaveCSS('flex-direction', 'row');
                });
            });
        });
    });

    test.describe('Slots', () => {
        test('should correctly render the slot content and an icon as named slot', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                slots: {
                    default: slotContent,
                    icon: mockSlottedIcon,
                },
            });

            // Act
            const notification = page.locator(componentSelector);
            const slottedIcon = page.locator(slottedIconSelector);

            // Assert
            expect(notification).toBeVisible();
            expect(slottedIcon).toBeVisible();
            expect(slottedIcon).toHaveText('Mocked Icon Slot');
        });
    });
});
