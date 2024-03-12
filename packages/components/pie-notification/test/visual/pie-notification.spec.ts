
import { test, expect } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieNotification, type NotificationProps } from '../../src/index.ts';
import {
    variants,
    headingLevels,
} from '../../src/defs.ts';

const rootSelector = 'pie-notification';
const componentSelector = `[data-test-id="${rootSelector}"]`;

const initialValues: NotificationProps = {
    isOpen: true,
    isDismissible: true,
    heading: 'Pie Notification Title',
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Button that confirm the action',
        onClick: () => { console.info('confirmAction'); },
    },
};
const slotContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna. Cras fringilla sed ipsum nec dignissim. Aliquam sit amet ullamcorper ligula.';

test.describe('PieNotification - Visual tests`', () => {
    test('should display the PieNotification component successfully', async ({ page, mount }) => {
        // Arrange
        await mount(PieNotification, {
            props: initialValues as NotificationProps,
            slots: { default: slotContent },
        });

        // Act
        const notification = page.locator(componentSelector);

        // Assert
        await expect.soft(notification).toBeVisible();
        await percySnapshot(page, 'PieNotification - Visual Test');
    });
});

test.describe('Props', () => {
    const confirmAction = () => { console.info('confirmAction'); };
    const cancelAction = () => { console.info('cancelAction'); };
    const mainAction = {
        text: 'Confirm',
        ariaLabel: 'Button that confirm the action',
        onClick: confirmAction,
    };
    const secondaryAction = {
        text: 'Cancel',
        ariaLabel: 'Button that cancel the action',
        onClick: cancelAction,
    };

    test.describe('isOpen', () => {
        test('should not display the PieNotification component when isOpen is false', async ({ page, mount }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    isOpen: false,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            // Act
            const notification = page.locator(componentSelector);

            // Assert
            await expect.soft(notification).not.toBeVisible();
            await percySnapshot(page, 'PieNotification - isOpen = false');
        });
    });

    test.describe('PieNotification variants', () => {
        variants.forEach((variant) => {
            test(`should render correctly the ${variant} variant`, async ({ page, mount }) => {
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        variant,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, `PieNotification - variant = ${variant}`);
            });
        });
    });

    test.describe('PieNotification headingLevels', () => {
        headingLevels.forEach((headingLevel) => {
            test(`should render correctly the ${headingLevel} headingLevel`, async ({ page, mount }) => {
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        headingLevel,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, `PieNotification - headingLevel = ${headingLevel} but font size remains the same`);
            });
        });
    });

    test.describe('isCompact', () => {
        test('should not render the close icon if isCompact is true ', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    isCompact: true,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            await percySnapshot(page, 'PieNotification - isCompact = true');
        });

        test('action buttons should render in the same row as the title and content when isCompact is true', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    leadingAction: mainAction,
                    supportingAction: secondaryAction,
                    isCompact: true,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            await percySnapshot(page, 'PieNotification - isCompact = true - Action buttons');
        });
    });

    test.describe('hideIcon', () => {
        const variantsWithDefaultIcon = ['info', 'success', 'warning', 'error'];
        variants.filter((variant) => variantsWithDefaultIcon.includes(variant)).forEach((variant) => {
            test(`should not render the default icon when the variant is ${variant} and hideIcon is true`, async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        hideIcon: true,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, `PieNotification - hideIcon = true, variant = ${variant}`);
            });
        });
    });

    test.describe('isDismissible', () => {
        test('should not show the close icon if isDismissible is false', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    isDismissible: false,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            await percySnapshot(page, 'PieNotification - isDismissible = false - Should not show the close icon');
        });

        test('should not show the close icon if isDismissible is false and isCompact is false', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    isDismissible: false,
                    isCompact: false,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            await percySnapshot(page, 'PieNotification - isDismissible = false, isCompact = false - Should not show the close icon');
        });

        test('should not show the close icon if isDismissible is true and isCompact is true', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    isDismissible: true,
                    isCompact: true,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            await percySnapshot(page, 'PieNotification - isDismissible = true, isCompact = true - Should not show the close icon');
        });

        test('should show the close icon if isDismissible is true', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...initialValues,
                    isDismissible: true,
                } as NotificationProps,
                slots: { default: slotContent },
            });

            await percySnapshot(page, 'PieNotification - isDismissible = true - Should show the close icon');
        });
    });

    test.describe('Action buttons', () => {
        test.describe('leadingAction', () => {
            test('should render leadingAction when leadingAction is provided', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 375, height: 667 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, 'PieNotification - leadingAction');
            });

            test('should not render leadingAction when leadingAction not is provided', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 375, height: 667 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: undefined,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, 'PieNotification - leadingAction not provided');
            });
        });

        test.describe('supportingAction', () => {
            test('should not render supportingAction when leadingAction not is provided', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 375, height: 667 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: undefined,
                        supportingAction: secondaryAction,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, 'PieNotification - leadingAction not provided and supportingAction is provided');
            });

            test('should render supportingAction when leadingAction and supportingAction is provided', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 375, height: 667 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, 'PieNotification - leadingAction is provided and supportingAction is provided');
            });
        });

        test.describe('hasStackedActions', () => {
            test('should stack buttons on small screens', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 375, height: 667 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: true,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, 'PieNotification - hasStackedActions = true - should stack buttons on small screens');
            });

            test('should not stack buttons on small screens', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 375, height: 667 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: false,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, 'PieNotification - hasStackedActions = false - should not stack buttons on small screens');
            });

            test('should not stack buttons on large screens when hasStackedActions is true', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 1275, height: 900 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: true,
                    } as NotificationProps,
                });

                await percySnapshot(page, 'PieNotification - hasStackedActions = true - should not stack buttons on large screens');
            });

            test('should not stack buttons on large screens when hasStackedActions is false', async ({ mount, page }) => {
                // Arrange
                await page.setViewportSize({ width: 1275, height: 900 });
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: false,
                    } as NotificationProps,
                });

                await percySnapshot(page, 'PieNotification - hasStackedActions = false - should not stack buttons on large screens');
            });

            test('should not stack buttons when hasStackedActions is true and isCompact is true regardless the screen size', async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: true,
                        isCompact: true,
                    } as NotificationProps,
                });

                await percySnapshot(page, 'PieNotification - hasStackedActions = false, isCompact = true - should not stack buttons');
            });
        });
    });
});
