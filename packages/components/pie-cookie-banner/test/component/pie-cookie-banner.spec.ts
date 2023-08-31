
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch';
import {
    ON_COOKIE_BANNER_ACCEPT_ALL, ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS, ON_COOKIE_BANNER_PREFS_SAVED,
    preferences, PreferenceIds,
} from '@/defs';
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
const getPreferenceItemSelector = (id: PreferenceIds) => `#${id} [data-test-id="toggle-switch-component"]`;

// Mount any components that are used inside pie-cookie-banner so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieLink)).unmount();
    await (await mount(PieModal)).unmount();
    await (await mount(PieIconButton)).unmount();
    await (await mount(PieToggleSwitch)).unmount();
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

        const cookieBanner = page.locator(componentSelector);

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

        const cookieBanner = page.locator(componentSelector);

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

        const cookieBanner = page.locator(componentSelector);

        // Act
        await page.click(managePreferencesSelector);

        // Assert
        const modal = page.locator(modalSelector);

        expect(modal).toBeVisible();
        expect(cookieBanner).not.toBeVisible();
        expect(events).toHaveLength(1);
    });

    test('should close the modal and re-display the cookie banner when the back button in "Manage preferences" is clicked', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        const cookieBanner = page.locator(componentSelector);

        // Act
        await page.click(managePreferencesSelector);
        await page.click(modalBackButtonSelector);

        // Assert
        const modal = page.locator(modalSelector);

        expect(modal).not.toBeVisible();
        expect(cookieBanner).toBeVisible();
    });

    test('should close the modal and cookie banner and emit the save event  when the save button in "Manage preferences"is clicked', async ({ mount, page }) => {
        // Arrange
        let cookieBannerPrefsSavedEvent : Partial<Event> = {};
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
            on: {
                [ON_COOKIE_BANNER_PREFS_SAVED]: (event: Event) => {
                    cookieBannerPrefsSavedEvent = event;
                },
            },
        });

        const cookieBanner = page.locator(componentSelector);

        // Act
        await page.click(managePreferencesSelector);
        await page.click(modalSaveButtonSelector);

        // Assert
        const modal = page.locator(modalSelector);

        expect(modal).not.toBeVisible();
        expect(cookieBanner).not.toBeVisible();

        const [expectedCookieBannerPrefsSavedEvent] = preferences.filter(({ id }) => id !== 'all')
        .map(({ id, isChecked }) => ({ [id]: !!isChecked }));
        expect(cookieBannerPrefsSavedEvent).toMatchObject(expectedCookieBannerPrefsSavedEvent);
    });

    test('should always set the `necessary` preference to on and disabled states', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await page.click(managePreferencesSelector);

        // Assert
        const preference = await page.locator(getPreferenceItemSelector('necessary')).isChecked();
        expect(preference).toBe(true);
        expect(preference).toBe(true);
    });

    test('should turn on all preferences if the `all` preference is set to true', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await page.click(managePreferencesSelector);

        // Assert
        await page.click(getPreferenceItemSelector('all'));

        const elements = preferences.map(async ({ id }) => ({
            isChecked: await page.locator(getPreferenceItemSelector(id)).isChecked(),
        }));

        const results = await Promise.all(elements);

        results.forEach((result) => {
            expect(result.isChecked).toBe(true);
        });
    });

    test('should turn off all preferences if the `all` preference is set to false except of the necessary preference', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await page.click(managePreferencesSelector);

        // Assert
        await page.click(getPreferenceItemSelector('all')); // turn on
        await page.click(getPreferenceItemSelector('all')); // turn off

        const elements = preferences.map(async ({ id }) => ({
            id,
            isChecked: await page.locator(getPreferenceItemSelector(id)).isChecked(),
        }));

        const results = await Promise.all(elements);

        results.forEach(({ id, isChecked }) => {
            expect(isChecked).toBe(id === 'necessary');
        });
    });
});
