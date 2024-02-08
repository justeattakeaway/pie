
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieNotification, NotificationProps } from '../../src/index.ts';
import { variants, headingLevels } from '../../src/defs.ts';

const rootSelector = 'pie-notification';
const componentSelector = `[data-test-id="${rootSelector}"]`;
const iconCloseSelector = `[data-test-id="${rootSelector}-icon-close"]`;
const slottedIconSelector = `[data-test-id="${rootSelector}-icon-slotted"]`;
const headingIconInfoSelector = `[data-test-id="${rootSelector}-heading-icon-info"]`;
const headingIconSuccessSelector = `[data-test-id="${rootSelector}-heading-icon-success"]`;
const headingIconWarningSelector = `[data-test-id="${rootSelector}-heading-icon-warning"]`;
const headingIconErrorSelector = `[data-test-id="${rootSelector}-heading-icon-error"]`;
const headerSelector = `[data-test-id="${rootSelector}-header"]`;
const headingSelector = `[data-test-id="${rootSelector}-heading"]`;

const defaultProps: NotificationProps = {
    variant: 'neutral',
    isCompact: false,
    heading: 'Title',
    headingLevel: 'h2',
    hideIcon: false,
    isOpen: true,
};

const slotContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna. Cras fringilla sed ipsum nec dignissim. Aliquam sit amet ullamcorper ligula.';
const mockSlottedIcon = `<div slot="icon" data-test-id="${rootSelector}-icon-slotted">Mocked Icon Slot</div>`;

test.describe('PieNotification - Component tests', () => {
    test('should render successfully with default props', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: defaultProps,
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

    test('should correctly render the slot content', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: defaultProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const notification = page.locator(componentSelector);

        // Assert
        expect(notification).toBeVisible();
    });

    test('should not render the header if heading is not provided', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: { ...defaultProps, heading: undefined },
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

    test('should not render the close icon if compact is true ', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: { ...defaultProps, compact: true },
        });

        // Act
        const notification = page.locator(componentSelector);
        const iconClose = page.locator(iconCloseSelector);
        const header = page.locator(headerSelector);

        // Assert
        expect(notification).toBeVisible();
        expect(iconClose).not.toBeVisible();
        expect(header).toBeVisible();
    });

    test('should correctly render the slot content and an icon as named slot', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: defaultProps,
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

    test.describe('variants', () => {
        variants.forEach((variant) => {
            test(`should render when the variant is ${variant}`, async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        ...defaultProps,
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
                    ...defaultProps,
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
                    ...defaultProps,
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
                    ...defaultProps,
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

        // const headingIconErrorSelector = `[data-test-id="${rootSelector}-heading-"]`;
        test('should render icon-error when variant is error', async ({ mount, page }) => {
            // Arrange
            await mount(PieNotification, {
                props: {
                    ...defaultProps,
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

    test.describe('heading levels', () => {
        headingLevels.forEach((headingLevel) => {
            test(`should render successfully when heading level is ${headingLevel}`, async ({ mount, page }) => {
                // Arrange
                await mount(PieNotification, {
                    props: {
                        ...defaultProps,
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
