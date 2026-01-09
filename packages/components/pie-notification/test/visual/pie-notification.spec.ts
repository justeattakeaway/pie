import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import {
    type NotificationProps,
    variants,
    headingLevels,
    positions,
    actionSizes,
} from '../../src/defs.ts';

export const screenWidths = {
    widths: [1450, 375],
};

variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
    const basePage = new BasePage(page, `notification--${variant}-prop-variations`);

    await basePage.load();

    await percySnapshot(page, `PIE Notification - Variant: ${variant}`, screenWidths);
}));

const initialValues: NotificationProps = {
    isOpen: true,
    isDismissible: true,
    heading: 'Pie Notification Title',
    leadingAction: {
        text: 'Confirm',
        ariaLabel: 'Button that confirm the action',
    },
};

test.describe('Props', () => {
    const secondaryAction = {
        text: 'Cancel',
        ariaLabel: 'Button that cancel the action',
    };

    test.describe('PieNotification headingLevels', () => {
        headingLevels.forEach((headingLevel) => {
            test(`should render correctly the ${headingLevel} headingLevel`, async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, `PieNotification - headingLevel = ${headingLevel} but font size remains the same`);
            });
        });
    });

    test.describe('Action buttons', () => {
        test.describe('leadingAction', () => {
            test('should render leadingAction when leadingAction is provided', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, 'PieNotification - leadingAction');
            });

            test('should not render leadingAction when leadingAction not is provided', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    leadingAction: undefined,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, 'PieNotification - leadingAction not provided');
            });
        });

        test.describe('supportingAction', () => {
            test('should not render supportingAction when leadingAction not is provided', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    leadingAction: undefined,
                    supportingAction: secondaryAction,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, 'PieNotification - leadingAction not provided and supportingAction is provided');
            });

            test('should render supportingAction when leadingAction and supportingAction is provided', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    supportingAction: secondaryAction,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, 'PieNotification - leadingAction is provided and supportingAction is provided');
            });
        });

        test.describe('Action button sizes', () => {
            actionSizes.forEach((size) => {
                test(`should render action buttons with ${size} size`, async ({ page }) => {
                    // Arrange
                    const basePage = new BasePage(page, 'notification');
                    const props: NotificationProps = {
                        ...initialValues,
                        leadingAction: {
                            text: 'Leading Action',
                            size,
                        },
                        supportingAction: {
                            text: 'Supporting Action',
                            size,
                        },
                    };

                    await basePage.load({ ...props });

                    // Assert
                    await percySnapshot(page, `PieNotification - Action buttons with ${size} size`);
                });
            });
        });

        test.describe('Link actions', () => {
            test('should render actions as links when href is provided', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification--notification-with-link-actions');

                await basePage.load();

                // Assert
                await percySnapshot(page, 'PieNotification - Actions rendered as links');
            });
        });

        test.describe('hasStackedActions', () => {
            test('should stack buttons on small screens', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    supportingAction: secondaryAction,
                    hasStackedActions: true,
                };

                await basePage.load({ ...props });
                await page.setViewportSize({ width: 375, height: 667 });

                // Assert
                await percySnapshot(page, 'PieNotification - hasStackedActions = true - should stack buttons on small screens');
            });

            test('should not stack buttons on small screens', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    supportingAction: secondaryAction,
                    hasStackedActions: false,
                };

                await basePage.load({ ...props });
                await page.setViewportSize({ width: 375, height: 667 });

                // Assert
                await percySnapshot(page, 'PieNotification - hasStackedActions = false - should not stack buttons on small screens');
            });

            test('should not stack buttons on large screens when hasStackedActions is true', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    supportingAction: secondaryAction,
                    hasStackedActions: true,
                };

                await basePage.load({ ...props });
                await page.setViewportSize({ width: 1275, height: 900 });

                // Assert
                await percySnapshot(page, 'PieNotification - hasStackedActions = true - should not stack buttons on large screens');
            });

            test('should not stack buttons on large screens when hasStackedActions is false', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    supportingAction: secondaryAction,
                    hasStackedActions: false,
                };

                await basePage.load({ ...props });
                await page.setViewportSize({ width: 1275, height: 900 });

                // Assert
                await percySnapshot(page, 'PieNotification - hasStackedActions = false - should not stack buttons on large screens');
            });

            test('should not stack buttons when hasStackedActions is true and isCompact is true regardless the screen size', async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    supportingAction: secondaryAction,
                    hasStackedActions: true,
                    isCompact: true,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, 'PieNotification - hasStackedActions = false, isCompact = true - should not stack buttons');
            });
        });
    });

    test.describe('PieNotification positions', () => {
        positions.forEach((positionValue) => {
            test(`should render correctly the ${positionValue} position`, async ({ page }) => {
                // Arrange
                const basePage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    ...initialValues,
                    position: positionValue,
                };

                await basePage.load({ ...props });

                // Assert
                await percySnapshot(page, `PieNotification - position = ${positionValue} border-radius`);
            });
        });
    });
});

test.describe('Reading direction - RTL - Right to Left', () => {
    test('should slots icons and buttons when the reading direction is RTL', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'notification--notification-rtl');
        const props: NotificationProps = {
            isOpen: true,
            isDismissible: true,
        };

        await basePage.load({ ...props }, { writingDirection: 'rtl' });

        // Assert
        await percySnapshot(page, 'PieNotification - Reading direction - RTL - Right to Left');
    });
});
