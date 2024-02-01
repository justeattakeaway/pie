
import { test, expect } from '@sand4rt/experimental-ct-web';
import { readFile } from 'fs/promises';
import {
    ON_COOKIE_BANNER_ACCEPT_ALL, ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS, ON_COOKIE_BANNER_PREFS_SAVED,
    preferences, PreferenceIds,
} from '../../src/defs.ts';
import {
    PieCookieBanner, CookieBannerProps,
} from '../../src/index.ts';

const englishLocale = JSON.parse(await readFile(new URL('../../locales/en-gb.json', import.meta.url)));
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

function stripTags (str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

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
        .map(({ id, checked }) => ({ [id]: !!checked }));

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
            if (preference.id !== 'all' && !preference.disabled) {
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
            expect(String(await acceptAllButton.textContent()).trim())
                .toBe(englishLocale.banner.cta.acceptAll);

            expect(String(await necessaryOnlyButton.textContent()).trim())
                .toBe(englishLocale.banner.cta.necessaryOnly);

            expect(String(await managePreferencesButton.textContent()).trim())
                .toBe(englishLocale.banner.cta.managePreferences);

            expect(String(await componentDescription.textContent()).trim())
                .toBe(stripTags(englishLocale.banner.description));

            expect(String(await modalDescription.textContent()).trim())
                .toBe(stripTags(englishLocale.preferencesManagement.description));
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
            expect(String(await acceptAllButton.textContent()).trim())
                .toBe(spanishLocale.banner.cta.acceptAll);

            expect(String(await necessaryOnlyButton.textContent()).trim())
                .toBe(spanishLocale.banner.cta.necessaryOnly);

            expect(String(await managePreferencesButton.textContent()).trim())
                .toBe(spanishLocale.banner.cta.managePreferences);

            expect(String(await componentDescription.textContent()).trim())
                .toBe(stripTags(spanishLocale.banner.description));

            expect(String(await modalDescription.textContent()).trim())
                .toBe(stripTags(spanishLocale.preferencesManagement.description));
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
            const acceptAllButton = component.locator('[data-test-id="actions-accept-all"]');
            const necessaryOnlyButton = component.locator('[data-test-id="actions-necessary-only"]');

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
                const acceptAllButton = component.locator('[data-test-id="actions-accept-all"]');
                const necessaryOnlyButton = component.locator('[data-test-id="actions-necessary-only"]');

                // Assert
                expect(await acceptAllButton.getAttribute('variant')).toBe('primary');
                expect(await necessaryOnlyButton.getAttribute('variant')).toBe('outline-inverse');
            });
        });
    });

    test.describe('`cookieStatementLink` prop', () => {
        test.describe('when not populated', () => {
            test('should set a default cookie statement link of empty string within the banner description', async ({ mount }) => {
                // Arrange & Act
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieStatementLink = component.locator('[data-test-id="banner-description"] [data-test-id="cookie-statement-link"]');

                // Assert
                expect(await cookieStatementLink.getAttribute('href')).toBe('');
            });

            test('should set a default cookie statement link of empty string within the modal description', async ({ mount }) => {
                // Arrange & Act
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieStatementLink = component.locator('[data-test-id="modal-description"] [data-test-id="cookie-statement-link"]');

                // Assert
                expect(await cookieStatementLink.getAttribute('href')).toBe('');
            });
        });

        test.describe('when populated', () => {
            test('should set a cookie statement link correctly within the banner description', async ({ mount }) => {
                // Arrange & Act
                const cookieStatementUrl = 'en/FancyCookieStatementUrl';
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {
                            cookieStatementLink: cookieStatementUrl,
                        },
                    },
                );

                // Act
                const cookieStatementLink = component.locator('[data-test-id="banner-description"] [data-test-id="cookie-statement-link"]');

                // Assert
                expect(await cookieStatementLink.getAttribute('href')).toBe(cookieStatementUrl);
            });

            test('should set a cookie statement link correctly within the modal description', async ({ mount }) => {
                // Arrange & Act
                const cookieStatementUrl = 'en/FancyCookieStatementUrl';
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {
                            cookieStatementLink: cookieStatementUrl,
                        },
                    },
                );

                // Act
                const cookieStatementLink = component.locator('[data-test-id="modal-description"] [data-test-id="cookie-statement-link"]');

                // Assert
                expect(await cookieStatementLink.getAttribute('href')).toBe(cookieStatementUrl);
            });
        });
    });

    test.describe('`cookieTechnologiesLink` prop', () => {
        test.describe('when not populated', () => {
            test('should set a default cookie technology link of empty string within the description container', async ({ mount }) => {
                // Arrange & Act
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieTechnologyLink = component.locator('[data-test-id="banner-description"] [data-test-id="cookie-statement-link"]');

                // Assert
                expect(await cookieTechnologyLink.getAttribute('href')).toBe('');
            });

            test('should set a default cookie technology link of empty string within the modal container', async ({ mount }) => {
                // Arrange & Act
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieTechnologyLink = component.locator('[data-test-id="modal-description"] [data-test-id="cookie-statement-link"]');

                // Assert
                expect(await cookieTechnologyLink.getAttribute('href')).toBe('');
            });
        });

        test.describe('when populated', () => {
            test('should set a cookie technology link correctly within the modal description', async ({ mount }) => {
                // Arrange & Act
                const cookieTechnologyUrl = 'en/FancyCookieTechnologyUrl';
                const component = await mount(
                    PieCookieBanner,
                    {
                        props: {
                            cookieTechnologiesLink: cookieTechnologyUrl,
                        },
                    },
                );

                // Act
                const cookieTechnologyLink = component.locator('[data-test-id="modal-description"] [data-test-id="cookie-technology-link"]');

                // Assert
                expect(await cookieTechnologyLink.getAttribute('href')).toBe(cookieTechnologyUrl);
            });
        });
    });

    test.describe('`defaultPreferences` : prop', () => {
        const propsList = [
            { functional: true, personalized: true, analytical: true },
        ];

        propsList.forEach((props) => {
            test.describe(`when defaultPreferences are set to three values`, () => {
                test('should toggle the position to `on`', async ({mount, page}) => {
                    await mount(PieCookieBanner, {props: { defaultPreferences: props } as CookieBannerProps});

                    // Act
                    await page.click(managePreferencesSelector);

                    // Assert
                    for (const propKey in props) {
                        const output = await page.locator(getPreferenceItemSelector(propKey)).isChecked();
                        expect(output).toBe(true);
                    }
                });

                test('should check `all` toggle when all three props are passed in', async ({mount, page}) => {
                    await mount(PieCookieBanner, {
                        props: {
                            defaultPreferences: props
                        } as CookieBannerProps
                    });

                    // Act
                    await page.click(managePreferencesSelector);
                    const output = await page.locator(getPreferenceItemSelector('all')).isChecked();

                    // Assert
                    expect(output).toBe(true);
                });
            });
        });

        test.describe(`when defaultPreferences are partially provided`, () => {
            const propsList = [
                { functional: true, personalized: true },
            ];

            propsList.forEach((props) => {
                test('should toggle the position to `on`', async ({ mount, page}) => {
                    await mount(PieCookieBanner, {props: { defaultPreferences: props } as CookieBannerProps});

                    // Act
                    await page.click(managePreferencesSelector);

                    // Assert
                    for (const propKey in props) {
                        const output = await page.locator(getPreferenceItemSelector(propKey)).isChecked();
                        expect(output).toBe(true);
                    }
                });
            });

            test('should not set the `all` toggle to `checked`', async ({mount, page}) => {
                await mount(PieCookieBanner, {
                    props: {
                        defaultPreferences: { functional: true, personalized: true }
                    } as CookieBannerProps
                });

                // Act
                await page.click(managePreferencesSelector);
                const output = await page.locator(getPreferenceItemSelector('all')).isChecked();

                // Assert
                expect(output).toBe(false);
            })
        });
    });
});
