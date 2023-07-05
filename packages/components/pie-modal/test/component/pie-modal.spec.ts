import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { renderTestPieModal } from '../helpers/index.ts';

import { PieModal } from '@/index';
import { headingLevels } from '@/defs';

// Mount any components that are used inside of pie-modal so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieIconButton,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-icon-button');
        element?.remove();
    });
});

headingLevels.forEach((headingLevel) => test(`should render the correct heading tag based on the value of headingLevel: ${headingLevel}`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        headingLevel,
    };

    const component = await mount(PieModal, { props });

    await expect(component.locator(`${props.headingLevel}.c-modal-heading`)).toContainText(props.heading);
}));

['span', 'section'].forEach((headingLevel) => test(`should render the fallback heading level 'h2' if invalid headingLevel: ${headingLevel} is passed`, async ({ mount }) => {
    const props = {
        heading: 'Modal Header',
        // assert type checking as we purposely provide incorrect value
        headingLevel,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore // Added this as we want to deliberately test with invalid headingLevel (which is an invalid type based on ModalProps)
    const component = await mount(PieModal, { props });

    // h2 is the default / fallback value
    await expect(component.locator('h2.c-modal-heading')).toContainText(props.heading);
}));

test.describe('`Pie Modal is closed`', () => {
    const closeButtonSelector = '[data-test-id="modal-close-button"]';

    test.describe('when via the close button click', () => {
        test('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            const messages: string[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                    },
                    on: {
                        click: (event: string) => messages.push(event),
                    },
                },
            );

            await page.locator(closeButtonSelector).click();

            expect(messages).toHaveLength(1);
        });
    });

    test.describe('when via the backdrop click', () => {
        test('should dispatch event `pie-modal-close`', async ({ mount, page }) => {
            const messages: string[] = [];
            await mount(
                PieModal,
                {
                    props: {
                        isOpen: true,
                    },
                    on: {
                        click: (event: string) => messages.push(event),
                    },
                },
            );

            await page.locator('#dialog').click();

            expect(messages).toHaveLength(1);
        });
    });

    test('should return focus to specified element', async ({ mount, page }) => {
        // Arrange
        const component = renderTestPieModal({
            returnFocusAfterCloseSelector: '#focus-me',
        });

        await mount(WebComponentTestWrapper, {
            props: {
                pageMode: true,
            },
            slots: {
                component,
                pageMarkup: `<div>
                    <button id="default"></button>
                    <button id="focus-me"></button>
                    <button id="not-me"></button>
                </div>`,
            },
        });

        // Act
        await page.locator(closeButtonSelector).click();

        const focusedElement = await page.locator(':focus');
        const focusedElementId = await focusedElement.getAttribute('id');

        // Assert
        expect(focusedElementId).toBe('focus-me');
    });

    test('should return focus to first matching element', async ({ page, mount }) => {
        // Arrange
        const component = renderTestPieModal({
            returnFocusAfterCloseSelector: '[data-test-id="focus-me"]',
        });

        await mount(WebComponentTestWrapper, {
            props: {
                pageMode: true,
            },
            slots: {
                component,
                pageMarkup: `<div>
                    <button id="default"></button>
                    <button data-test-id="focus-me" id="actual-focus"></button>
                    <button data-test-id="focus-me"></button>
                </div>`,
            },
        });

        // Act
        await page.locator(closeButtonSelector).click();

        const focusedElement = await page.locator(':focus');
        const focusedElementId = await focusedElement.getAttribute('id');

        // Assert
        expect(focusedElementId).toBe('actual-focus');
    });
});
