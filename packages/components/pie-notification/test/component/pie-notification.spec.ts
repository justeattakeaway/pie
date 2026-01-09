import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type NotificationProps, headingLevels, variants } from '../../src/defs.ts';

import { notification } from '../helpers/page-object/selectors.ts';

test.describe('PieNotification - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const notificationPage = new BasePage(page, 'notification');
        await notificationPage.load();

        // Act
        const notificationComponent = page.locator(notification.selectors.container.dataTestId);

        // Assert
        await expect(notificationComponent).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('variants', () => {
            variants.forEach((variant) => {
                test(`should render when the variant is ${variant}`, async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');
                    const props: NotificationProps = {
                        variant,
                    };

                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                });
            });

            test('should render icon-info when variant is info', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    variant: 'info',
                };

                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const icon = notificationComponent.getByTestId(notification.selectors.headingIconInfo.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(icon).toBeVisible();
            });

            test('should render icon-success when variant is success', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');

                const props: NotificationProps = {
                    variant: 'success',
                };

                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const icon = notificationComponent.getByTestId(notification.selectors.headingIconSuccess.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(icon).toBeVisible();
            });

            test('should render icon-warning when variant is warning', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    variant: 'warning',
                };

                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const icon = notificationComponent.getByTestId(notification.selectors.headingIconWarning.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(icon).toBeVisible();
            });

            test('should render icon-error when variant is error', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    variant: 'error',
                };

                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const icon = notificationComponent.getByTestId(notification.selectors.headingIconError.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(icon).toBeVisible();
            });
        });

        test.describe('isCompact', () => {
            test('should not render the close icon if isCompact is true ', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    isCompact: true,
                };

                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const iconClose = notificationComponent.getByTestId(notification.selectors.iconClose.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(iconClose).not.toBeVisible();
            });
        });

        test.describe('heading', () => {
            test('should render the header when heading is provided', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');
                const props: NotificationProps = {
                    heading: 'Title',
                };

                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const heading = notificationComponent.locator('h2');

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(heading).toBeVisible();
                await expect(heading).toHaveText('Title');
            });
        });

        test.describe('headingLevel', () => {
            test.describe('heading levels', () => {
                headingLevels.forEach((headingLevel) => {
                    test(`should render successfully when heading level is ${headingLevel}`, async ({ page }) => {
                        // Arrange
                        const notificationPage = new BasePage(page, 'notification');

                        const props: NotificationProps = {
                            headingLevel,
                            heading: `Title using ${headingLevel}`,
                        };
                        await notificationPage.load({ ...props });

                        // Act
                        const heading = page.locator(`${headingLevel}`);

                        // Assert
                        await expect(heading).toBeVisible();
                        await expect(heading).toHaveText(`Title using ${headingLevel}`);
                    });
                });
            });
        });

        test.describe('hideIcon', () => {
            const variantsWithDefaultIcon = ['info', 'success', 'warning', 'error'];
            variants.filter((variant) => variantsWithDefaultIcon.includes(variant)).forEach((variant) => {
                test(`should not render the default icon when the variant is ${variant} and hideIcon is true`, async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps & { iconSlot: string } = {
                        variant,
                        iconSlot: 'Placeholder',
                        hideIcon: true,
                    };
                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const iconSelector = page.locator(`[data-test-id="${notification.selectors.container.dataTestId}-heading-icon-${variant}"]`);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(notificationComponent).toHaveAttribute('variant', variant);
                    await expect(iconSelector).not.toBeVisible();
                });
            });
        });

        test.describe('isDismissible', () => {
            test('should not show the close icon if isDismissible is false', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');

                const props: NotificationProps = {
                    isDismissible: false,
                };
                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const iconClose = notificationComponent.getByTestId(notification.selectors.iconClose.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(iconClose).not.toBeVisible();
            });

            test('should not show the close icon if isDismissible is false and isCompact is false', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');

                const props: NotificationProps = {
                    isDismissible: false,
                    isCompact: false,
                };
                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const iconClose = notificationComponent.getByTestId(notification.selectors.iconClose.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(iconClose).not.toBeVisible();
            });

            test('should not show the close icon if isDismissible is true and isCompact is true', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');

                const props: NotificationProps = {
                    isDismissible: true,
                    isCompact: true,
                };
                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const iconClose = notificationComponent.getByTestId(notification.selectors.iconClose.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(iconClose).not.toBeVisible();
            });

            test('should show the close icon if isDismissible is true', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');

                const props: NotificationProps = {
                    isDismissible: true,
                };
                await notificationPage.load({ ...props });

                // Act
                const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                const iconClose = notificationComponent.getByTestId(notification.selectors.iconClose.dataTestId);

                // Assert
                await expect(notificationComponent).toBeVisible();
                await expect(iconClose).toBeVisible();
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
                test('should not show the footer if leadingAction is not provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        leadingAction: undefined,
                    };
                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const footer = notificationComponent.getByTestId(notification.selectors.footer.dataTestId);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(footer).not.toBeVisible();
                });

                test('should show the footer if leadingAction is provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        isDismissible: true,
                        leadingAction: mainAction,
                    };
                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const footer = notificationComponent.getByTestId(notification.selectors.footer.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(footer).toBeVisible();
                    await expect(actionLeading).toBeVisible();
                });
            });

            test.describe('supportingAction', () => {
                test('should not show the footer nor leadingAction if only supportingAction is provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        isDismissible: true,
                        leadingAction: undefined,
                        supportingAction: secondaryAction,
                    };
                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const footer = notificationComponent.getByTestId(notification.selectors.footer.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(footer).not.toBeVisible();
                    await expect(actionLeading).not.toBeVisible();
                    await expect(actionSupporting).not.toBeVisible();
                });

                test('should the leadingAction and supportingAction when both are provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        isDismissible: true,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                    };
                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const footer = notificationComponent.getByTestId(notification.selectors.footer.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(footer).toBeVisible();
                    await expect(actionLeading).toBeVisible();
                    await expect(actionSupporting).toBeVisible();
                });
            });

            test.describe('hasStackedActions', () => {
                test('should stack buttons on small screens', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        isDismissible: true,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: true,
                    };
                    await notificationPage.load({ ...props });

                    await page.setViewportSize({ width: 375, height: 667 });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const footer = notificationComponent.getByTestId(notification.selectors.footer.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(footer).toBeVisible();
                    await expect(actionLeading).toBeVisible();
                    await expect(actionSupporting).toBeVisible();

                    await expect(footer).toHaveCSS('flex-direction', 'column-reverse');
                });

                test('should not stack buttons on large screens', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        isDismissible: true,
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                        hasStackedActions: true,
                    };
                    await notificationPage.load({ ...props });

                    await page.setViewportSize({ width: 1275, height: 900 });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const footer = notificationComponent.getByTestId(notification.selectors.footer.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);

                    // Assert
                    expect(notificationComponent).toBeVisible();
                    expect(footer).toBeVisible();
                    expect(actionLeading).toBeVisible();
                    expect(actionSupporting).toBeVisible();

                    await expect(footer).toHaveCSS('flex-direction', 'row');
                });
            });

            test.describe('Link actions', () => {
                test('should render actions as buttons when href is not provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        leadingAction: mainAction,
                        supportingAction: secondaryAction,
                    };
                    await notificationPage.load({ ...props });

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);
                    const leadingButton = actionLeading.locator('button');
                    const supportingButton = actionSupporting.locator('button');

                    // Assert
                    await expect(notificationComponent).toBeVisible();
                    await expect(leadingButton).toBeVisible();
                    await expect(leadingButton).toHaveAttribute('type', 'button');
                    await expect(supportingButton).toBeVisible();
                    await expect(supportingButton).toHaveAttribute('type', 'button');
                });

                test('should render actions as links when href is provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification--notification-with-link-actions');
                    await notificationPage.load();

                    // Act
                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const actionLeading = notificationComponent.getByTestId(notification.selectors.leadingAction.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);
                    const leadingAnchor = actionLeading.locator('a');
                    const supportingAnchor = actionSupporting.locator('a');

                    // Assert
                    await expect(notificationComponent).toBeVisible();

                    // Leading action should be a link with correct attributes
                    await expect(leadingAnchor).toHaveAttribute('href', 'https://example.com');
                    await expect(leadingAnchor).toHaveAttribute('target', '_blank');
                    await expect(leadingAnchor).toHaveAttribute('rel', 'noopener noreferrer');

                    // Supporting action should be a link with download attribute
                    await expect(supportingAnchor).toHaveAttribute('href', '/static/images/logo--pie--dark.svg');
                    await expect(supportingAnchor).toHaveAttribute('download', 'pie-logo.svg');
                });

                test('should trigger a file download when clicking the supporting action with download attribute', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification--notification-with-link-actions');
                    await notificationPage.load();

                    const notificationComponent = page.locator(notification.selectors.container.dataTestId);
                    const actionSupporting = notificationComponent.getByTestId(notification.selectors.supportingAction.dataTestId);
                    const supportingAnchor = actionSupporting.locator('a');

                    // Act
                    const downloadPromise = page.waitForEvent('download');
                    await supportingAnchor.click();
                    const download = await downloadPromise;

                    // Assert
                    expect(download.suggestedFilename()).toBe('pie-logo.svg');
                    expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
                });
            });
        });

        test.describe('Aria attributes', () => {
            test('should assign role="region"', async ({ page }) => {
                // Arrange
                const notificationPage = new BasePage(page, 'notification');
                await notificationPage.load();

                const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);

                // Act & Assert
                await expect(notificationComponent).toHaveAttribute('role', 'region');
            });

            test.describe('aria-label', () => {
                test('should only be set if there is no heading to ensure the region is announced with a title', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const ariaLabel = 'Notification heading';
                    const props: NotificationProps = {
                        aria: {
                            label: ariaLabel,
                        },
                    };
                    await notificationPage.load({ ...props });

                    const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);
                    const heading = page.locator('h2');

                    // Act & Assert
                    await expect(notificationComponent).toHaveAttribute('aria-label', ariaLabel);
                    await expect(heading).not.toBeVisible();
                });

                test('should be ignored if heading is provided as the title will be used as the region title', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const ariaLabel = 'Notification heading';
                    const props: NotificationProps = {
                        aria: {
                            label: ariaLabel,
                        },
                        heading: 'Heading',
                    };
                    await notificationPage.load({ ...props });

                    const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);
                    const heading = page.locator('h2');

                    // Act & Assert
                    await expect(notificationComponent).not.toHaveAttribute('aria-label', ariaLabel);
                    await expect(heading).toBeVisible();
                });
            });

            test.describe('aria-labelledby', () => {
                test('should only be set if heading is provided to ensure the region is announced with a title', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const ariaLabel = 'Notification heading';
                    const props: NotificationProps = {
                        aria: {
                            label: ariaLabel,
                        },
                        heading: 'Heading',
                    };
                    await notificationPage.load({ ...props });

                    const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);

                    // Act & Assert
                    await expect(notificationComponent).toHaveAttribute('aria-labelledby', `${notification.selectors.heading.dataTestId}`);
                });

                test('should be ignored if heading is not provided', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const ariaLabel = 'Notification heading';
                    const props: NotificationProps = {
                        aria: {
                            label: ariaLabel,
                        },
                    };
                    await notificationPage.load({ ...props });

                    const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);

                    // Act & Assert
                    await expect(notificationComponent).not.toHaveAttribute('aria-labelledby', `${notification.selectors.heading.dataTestId}`);
                });
            });

            test.describe('aria-live', () => {
                test('should be set to `polite` by default', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    await notificationPage.load();

                    const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);

                    // Act & Assert
                    await expect(notificationComponent).toHaveAttribute('aria-live', 'polite');
                });

                test('should be set to `assertive` for the error variant', async ({ page }) => {
                    // Arrange
                    const notificationPage = new BasePage(page, 'notification');

                    const props: NotificationProps = {
                        variant: 'error',
                    };

                    await notificationPage.load({ ...props });

                    const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);

                    // Act & Assert
                    await expect(notificationComponent).toHaveAttribute('aria-live', 'assertive');
                });
            });
        });
    });

    test.describe('Slots', () => {
        test('should correctly render the slot content and an icon as named slot', async ({ page }) => {
            // Arrange
            const notificationPage = new BasePage(page, 'notification--notification-with-slot');

            await notificationPage.load();

            // Act
            const notificationComponent = page.getByTestId(notification.selectors.container.dataTestId);
            const slottedIcon = page.getByTestId(notification.selectors.slottedIcon.dataTestId);

            // Assert
            await expect(notificationComponent).toBeVisible();
            await expect(slottedIcon).toBeVisible();
            await expect(slottedIcon).toHaveText('Mocked Icon Slot');
        });
    });
});
