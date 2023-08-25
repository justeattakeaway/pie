
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { ON_COOKIE_BANNER_ACCEPT_ALL, ON_COOKIE_BANNER_NECESSARY_ONLY, ON_COOKIE_BANNER_MANAGE_PREFS } from '@/defs';
import {
    PieCookieBanner, CookieBannerProps,
} from '@/index';

const componentSelector = '[data-test-id="pie-cookie-banner"]';
const acceptAllSelector = '[data-test-id="accept-all"]';
const necessaryOnlySelector = '[data-test-id="necessary-only"]';
const managePreferencesSelector = '[data-test-id="manage-prefs"]';
const modalSelector = '[data-test-id="pie-modal"]';
const modalBackButtonSelector = '[data-test-id="modal-back-button"]';
const modalSaveButtonSelector = '[data-test-id="modal-leading-action"]';

// Mount any components that are used inside pie-cookie-banner so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieLink)).unmount();
    await (await mount(PieModal)).unmount();
    await (await mount(PieIconButton)).unmount();
});

test.describe('PieCookieBanner - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        const cookieBanner = page.locator(componentSelector);

        // Assert
        expect(cookieBanner).toBeVisible();
    });

    test('should emit the correct event and close the cookie banner when "Accept all" is clicked', async ({ mount, page }) => {
        // Arrange
        const events : Array<Event> = [];

        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,

            on: {
                [ON_COOKIE_BANNER_ACCEPT_ALL]: (event: Event) => events.push(event),
            },
        });

        const cookieBanner = await page.locator(componentSelector);

        // Act
        await page.click(acceptAllSelector);

        // Assert
        expect(events).toHaveLength(1);
        expect(cookieBanner).not.toBeVisible();
    });

    test('should emit the correct event and close the cookie banner when "Necessary only" is clicked', async ({ mount, page }) => {
        // Arrange
        const events : Array<Event> = [];

        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,

            on: {
                [ON_COOKIE_BANNER_NECESSARY_ONLY]: (event: Event) => events.push(event),
            },
        });

        const cookieBanner = await page.locator(componentSelector);

        // Act
        await page.click(necessaryOnlySelector);

        // Assert
        expect(events).toHaveLength(1);
        expect(cookieBanner).not.toBeVisible();
    });

    test('should emit the correct event, open the modal and hide the cookie banner when "Manage preferences" is clicked', async ({ mount, page }) => {
        // Arrange
        const events : Array<Event> = [];

        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,

            on: {
                [ON_COOKIE_BANNER_MANAGE_PREFS]: (event: Event) => events.push(event),
            },
        });

        const cookieBanner = await page.locator(componentSelector);

        // Act
        await page.click(managePreferencesSelector);

        // Assert
        const modal = await page.locator(modalSelector);

        expect(modal).toBeVisible();
        expect(cookieBanner).not.toBeVisible();
        expect(events).toHaveLength(1);
    });

    test('should close the modal and re-display the cookie banner when the back button in "Manage preferences" is clicked', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        const cookieBanner = await page.locator(componentSelector);

        // Act
        await page.click(managePreferencesSelector);
        await page.click(modalBackButtonSelector);

        // Assert
        const modal = await page.locator(modalSelector);

        expect(modal).not.toBeVisible();
        expect(cookieBanner).toBeVisible();
    });

    // TODO: Once we add preference saving logic we should update this test to ensure it behaves as expected
    test('should close the modal and cookie banner when the save button in "Manage preferences"is clicked', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        const cookieBanner = await page.locator(componentSelector);

        // Act
        await page.click(managePreferencesSelector);
        await page.click(modalSaveButtonSelector);

        // Assert
        const modal = await page.locator(modalSelector);

        expect(modal).not.toBeVisible();
        expect(cookieBanner).not.toBeVisible();
    });
});
