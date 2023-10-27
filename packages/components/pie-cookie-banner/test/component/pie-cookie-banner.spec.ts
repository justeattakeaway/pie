
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieSwitch } from '@justeattakeaway/pie-switch';
import { readFile } from 'fs/promises';
import {
    ON_COOKIE_BANNER_ACCEPT_ALL, ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS, ON_COOKIE_BANNER_PREFS_SAVED,
    preferences, PreferenceIds,
} from '@/defs';
import {
    PieCookieBanner, CookieBannerProps,
} from '@/index';

const spanishLocale = JSON.parse(await readFile(new URL('../../locales/es-es.json', import.meta.url)));

const componentSelector = '[data-test-id="pie-cookie-banner"]';
const componentDescriptionSelector = '[data-test-id="banner-description"]';
const acceptAllSelector = '[data-test-id="actions-accept-all"]';
const necessaryOnlySelector = '[data-test-id="actions-necessary-only"]';
const managePreferencesSelector = '[data-test-id="actions-manage-prefs"]';
const bodyAcceptAllSelector = '[data-test-id="body-accept-all"]';
const bodyNecessaryOnlySelector = '[data-test-id="body-necessary-only"]';
const bodyManagePreferencesSelector = '[data-test-id="body-manage-prefs"]';
const modalSelector = '[data-test-id="pie-modal"]';
const modalDescriptionSelector = '[data-test-id="modal-description"]';
const modalBackButtonSelector = '[data-test-id="modal-back-button"]';
const modalSaveButtonSelector = '[data-test-id="modal-leading-action"]';
const getPreferenceItemSelector = (id: PreferenceIds) => `#${id} [data-test-id="switch-component"]`;

// Mount any components that are used inside pie-cookie-banner so that
// they have been registered with the browser before the tests run.
// There is likely a nicer way to do this but this will temporarily
// unblock tests.
test.beforeEach(async ({ mount }) => {
    await (await mount(PieButton)).unmount();
    await (await mount(PieLink)).unmount();
    await (await mount(PieModal)).unmount();
    await (await mount(PieIconButton)).unmount();
    await (await mount(PieSwitch)).unmount();
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

    [acceptAllSelector, bodyAcceptAllSelector].forEach((elementSelector) => {
        test(`should emit the correct event and close the cookie banner when "Accept all" is clicked via element ${elementSelector}`, async ({ mount, page }) => {
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
            await page.click(elementSelector);

            // Assert
            expect(events).toHaveLength(1);
            expect(cookieBanner).not.toBeVisible();
        });
    });

    [necessaryOnlySelector, bodyNecessaryOnlySelector].forEach((elementSelector) => {
        test(`should emit the correct event and close the cookie banner when "Necessary only" is clicked via element = ${elementSelector}`, async ({ mount, page }) => {
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
            await page.click(elementSelector);

            // Assert
            expect(events).toHaveLength(1);
            expect(cookieBanner).not.toBeVisible();
        });
    });

    [managePreferencesSelector, bodyManagePreferencesSelector].forEach((elementSelector) => {
        test(`should emit the correct event, open the modal and hide the cookie banner when "Manage preferences" is clicked via element ${elementSelector}`, async ({ mount, page }) => {
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
            await page.click(elementSelector);
            const modal = page.locator(modalSelector);

            // Assert
            expect(modal).toBeVisible();
            expect(cookieBanner).not.toBeVisible();
            expect(events).toHaveLength(1);
        });
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
        const modal = page.locator(modalSelector);

        // Assert
        expect(modal).not.toBeVisible();
        expect(cookieBanner).toBeVisible();
    });

    test('should close the modal and cookie banner and emit the save event  when the save button in "Manage preferences" is clicked', async ({ mount, page }) => {
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
        const modal = page.locator(modalSelector);
        const [expectedCookieBannerPrefsSavedEvent] = preferences.filter(({ id }) => id !== 'all')
        .map(({ id, isChecked }) => ({ [id]: !!isChecked }));

        // Assert
        expect(modal).not.toBeVisible();
        expect(cookieBanner).not.toBeVisible();
        expect(cookieBannerPrefsSavedEvent).toMatchObject(expectedCookieBannerPrefsSavedEvent);
    });

    test('should always toggle the `necessary` preference and set it to disabled', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await page.click(managePreferencesSelector);
        const isChecked = await page.locator(getPreferenceItemSelector('necessary')).isChecked();
        const isDisabled = await page.locator(getPreferenceItemSelector('necessary')).isDisabled();

        // Assert
        expect(isChecked).toBe(true);
        expect(isDisabled).toBe(true);
    });

    test('should toggle all preferences if the `all` preference node is set to true', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await page.click(managePreferencesSelector);
        await page.click(getPreferenceItemSelector('all'));
        const elements = preferences.map(async ({ id }) => ({
            isChecked: await page.locator(getPreferenceItemSelector(id)).isChecked(),
        }));
        const results = await Promise.all(elements);

        // Assert
        results.forEach((result) => {
            expect(result.isChecked).toBe(true);
        });
    });

    test('should toggle the `all` preference node if the other preferences are set to true manually', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await page.click(managePreferencesSelector);
        // eslint-disable-next-line no-restricted-syntax
        for (const preference of preferences) { // turn on all preferences
            if (preference.id !== 'all' && !preference.isDisabled) {
                // eslint-disable-next-line no-await-in-loop
                await page.click(getPreferenceItemSelector(preference.id));
            }
        }
        const isToggleAllChecked = await page.locator(getPreferenceItemSelector('all')).isChecked();

        // Assert
        expect(isToggleAllChecked).toBe(true);
    });

    test('should turn off all preferences if the `all` preference is set to false except for the necessary preference', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await page.click(managePreferencesSelector);
        await page.click(getPreferenceItemSelector('all')); // turn on
        await page.click(getPreferenceItemSelector('all')); // turn off
        const elements = preferences.map(async ({ id }) => ({
            id,
            isChecked: await page.locator(getPreferenceItemSelector(id)).isChecked(),
        }));
        const results = await Promise.all(elements);

        // Assert
        results.forEach(({ id, isChecked }) => {
            expect(isChecked).toBe(id === 'necessary');
        });
    });

    test('should turn off the `all` preference node if at least one of the other preferences is set to false.', async ({ mount, page }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await page.click(managePreferencesSelector);
        await page.click(getPreferenceItemSelector('all')); // turn on all nodes
        await page.click(getPreferenceItemSelector('functional')); // turn off one of the preferences
        const isToggleAllChecked = await page.locator(getPreferenceItemSelector('all')).isChecked();

        // Assert
        expect(isToggleAllChecked).toBe(false);
    });

    test.describe('`locale` prop', () => {
        test('should render text in the default (English) language when the locale is not set', async ({ mount, page }) => {
            // Arrange
            await mount(PieCookieBanner, {});

            // Act
            const acceptAllButton = page.locator(acceptAllSelector);
            const necessaryOnlyButton = page.locator(necessaryOnlySelector);
            const managePreferencesButton = page.locator(managePreferencesSelector);
            const componentDescription = page.locator(componentDescriptionSelector);
            const modalDescription = page.locator(modalDescriptionSelector);

            // Assert
            expect(await acceptAllButton.textContent()).toContain('Accept all');
            expect(await necessaryOnlyButton.textContent()).toContain('Necessary only');
            expect(await managePreferencesButton.textContent()).toContain('Manage preferences');
            expect(await componentDescription.textContent()).toContain('We use our own and third party cookies and other tech to enhance and personalise your user experience, optimize analytics, and show ads with third parties (read our Statement). Necessary cookies are always set. Click Necessary only to continue without accepting more. Click Manage preferences to share your preferences or Accept all.');
            expect(await modalDescription.textContent()).toContain('You can find all the information in the Cookie Statement and Cookie technology list.');
        });

        test('should render the expected text when the locale prop is set', async ({ mount, page }) => {
            // Arrange
            await mount(PieCookieBanner, { props: { locale: spanishLocale } as CookieBannerProps });

            // Act
            const acceptAllButton = page.locator(acceptAllSelector);
            const necessaryOnlyButton = page.locator(necessaryOnlySelector);
            const managePreferencesButton = page.locator(managePreferencesSelector);
            const componentDescription = page.locator(componentDescriptionSelector);
            const modalDescription = page.locator(modalDescriptionSelector);

            // Assert
            expect(await acceptAllButton.textContent()).toContain(spanishLocale.banner.cta.acceptAll);
            expect(await necessaryOnlyButton.textContent()).toContain(spanishLocale.banner.cta.necessaryOnly);
            expect(await managePreferencesButton.textContent()).toContain(spanishLocale.banner.cta.managePreferences);
            expect(await componentDescription.textContent()).toContain('Usamos nuestras propias cookies y de terceros, así como otra tecnología para mejorar y personalizar tu experiencia de usuario, optimizar el análisis y mostrar anuncios con terceros (lee nuestra Declaración). Siempre se establecen las cookies necesarias. Haz clic en Sólo necesarias para seguir sin aceptar más. Haz clic en Gestionar preferencias para compartir tus preferencias o Aceptarlas todas.');
            expect(await modalDescription.textContent()).toContain('Puedes encontrar toda la información en la Declaración sobre cookies y la Lista de tecnología de cookies.');
        });
    });

    test.describe('`hasPrimaryActionsOnly` prop', () => {
        test('should set both buttons to primary when true', async ({ mount }) => {
            // Arrange & Act
            const component = await mount(
                PieCookieBanner,
                {
                    props: {
                        hasPrimaryActionsOnly: true,
                    },
                },
            );

            // Act
            const acceptAllButton = await component.locator('[data-test-id="actions-accept-all"]');
            const necessaryOnlyButton = await component.locator('[data-test-id="actions-necessary-only"]');

            // Assert
            expect(await acceptAllButton.getAttribute('variant')).toBe('primary');
            expect(await necessaryOnlyButton.getAttribute('variant')).toBe('primary');
        });

        [false, undefined].forEach((hasPrimaryActionsOnly) => {
            test(`should not change button variants when ${hasPrimaryActionsOnly}`, async ({ mount }) => {
                // Arrange & Act
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: { hasPrimaryActionsOnly },
                    },
                );

                // Act
                const acceptAllButton = await component.locator('[data-test-id="actions-accept-all"]');
                const necessaryOnlyButton = await component.locator('[data-test-id="actions-necessary-only"]');

                // Assert
                expect(await acceptAllButton.getAttribute('variant')).toBe('primary');
                expect(await necessaryOnlyButton.getAttribute('variant')).toBe('outline-inverse');
            });
        });
    });
});
