import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc';
import {
    variants,
    headingLevels,
    positions,
} from '../../src/defs.ts';
import { PieNotification, type NotificationProps } from '../../src/index.ts';

export const screenWidths = {
    widths: [1450, 375],
};

const slotContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna. Cras fringilla sed ipsum nec dignissim. Aliquam sit amet ullamcorper ligula.';
const slotContentRTL = 'هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.';
const titleRTL = 'عنوان';
const confirmRTL = 'يتأكد';
const denyRTL = 'ينكر';

const props: PropObject = {
    variant: variants,
    heading: ['Title', ''],
    isDismissible: [false, true],
    isCompact: [false, true],
    hideIcon: [false, true],
};

// Renders a <pie-notification> HTML string with the given prop values
const renderTestPieNotification = (propVals: WebComponentPropValues) => `<pie-notification 
        variant="${propVals.variant}" 
        ${propVals.isCompact ? 'isCompact' : ''}
        ${propVals.isDismissible ? 'isDismissible' : ''}
        ${propVals.hideIcon ? 'hideIcon' : ''}
        heading="${propVals.heading}">${slotContent}</pie-notification>`;

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the tag and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const tagComponent = await mount(PieNotification);
    await tagComponent.unmount();
    const iconComponent = await mount(IconHeartFilled);
    await iconComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const combo of componentPropsMatrixByVariant[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieNotification);

        const propKeyValues = `
            variant: ${testComponent.propValues.variant},
            isCompact: ${testComponent.propValues.isCompact},
            isDismissible: ${testComponent.propValues.isDismissible},
            hideIcon: ${testComponent.propValues.hideIcon},
            heading: ${testComponent.propValues.heading}
        `;

        const darkMode = ['neutral-alternative'].includes(variant);

        // eslint-disable-next-line no-await-in-loop
        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    // Follow up to remove in Jan
    await page.waitForTimeout(5000);

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
    const mainAction = {
        text: 'Confirm',
        ariaLabel: 'Button that confirm the action',
    };
    const secondaryAction = {
        text: 'Cancel',
        ariaLabel: 'Button that cancel the action',
    };

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

    test.describe('PieNotification positions', () => {
        positions.forEach((positionValue) => {
            test(`should render correctly the ${positionValue} position`, async ({ page, mount }) => {
                await mount(PieNotification, {
                    props: {
                        ...initialValues,
                        position: positionValue,
                    } as NotificationProps,
                    slots: { default: slotContent },
                });

                await percySnapshot(page, `PieNotification - position = ${positionValue} border-radius`);
            });
        });
    });
});

test.describe('Reading direction - RTL - Right to Left', () => {
    test('should slots icons and buttons when the reading direction is RTL', async ({ mount, page }) => {
        setRTL(page);

        const mainAction = {
            text: confirmRTL,
        };
        const secondaryAction = {
            text: denyRTL,
        };

        await mount(PieNotification, {
            props: {
                ...initialValues,
                heading: titleRTL,
                leadingAction: mainAction,
                supportingAction: secondaryAction,
            } as NotificationProps,
            slots: { default: slotContentRTL },
        });

        await percySnapshot(page, 'PieNotification - Reading direction - RTL - Right to Left');
    });
});
