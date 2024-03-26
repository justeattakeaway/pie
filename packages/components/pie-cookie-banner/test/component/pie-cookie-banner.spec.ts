
import { test, expect } from '@sand4rt/experimental-ct-web';
import { readFile } from 'fs/promises';
import { PieCookieBannerComponent, Level } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import { PieModalPage } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.page.ts';
import {
    ON_COOKIE_BANNER_ACCEPT_ALL, ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS, ON_COOKIE_BANNER_PREFS_SAVED,
    preferences,
} from '../../src/defs.ts';
import {
    PieCookieBanner, CookieBannerProps,
} from '../../src/index.ts';

const englishLocale = JSON.parse(await readFile(new URL('../../locales/en-gb.json', import.meta.url)));
const spanishLocale = JSON.parse(await readFile(new URL('../../locales/es-es.json', import.meta.url)));

function stripTags (str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

let pieCookieBannerComponent: PieCookieBannerComponent;
let pieModalComponent: PieModalPage;

test.describe('PieCookieBanner - Component tests', () => {
    test.beforeEach(async ({ page }) => {
        pieCookieBannerComponent = new PieCookieBannerComponent(page);
        pieModalComponent = new PieModalPage(page);
    });

    test('should render successfully', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

        // Assert
        expect(isCookieBannerVisible).toBe(true);
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
        const level = elementLevel.name as Level;
        test(`should emit the correct event and close the cookie banner when "Accept all" is clicked via element ${elementLevel.name}`, async ({ mount }) => {
            // Arrange
            const events : Array<Event> = [];

            await mount(PieCookieBanner, {
                props: {} as CookieBannerProps,

                on: {
                    [ON_COOKIE_BANNER_ACCEPT_ALL]: (event: Event) => events.push(event),
                },
            });

            // Act
            await pieCookieBannerComponent.clickAcceptAll(level);
            const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(isCookieBannerVisible).toBe(false);
            expect(events).toHaveLength(1);
        });
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
        const level = elementLevel.name as Level;
        test(`should emit the correct event and close the cookie banner when "Necessary only" is clicked via element = ${elementLevel.name}`, async ({ mount }) => {
        // Arrange
            const events : Array<Event> = [];

            await mount(PieCookieBanner, {
                props: {} as CookieBannerProps,

                on: {
                    [ON_COOKIE_BANNER_NECESSARY_ONLY]: (event: Event) => events.push(event),
                },
            });

            // Act
            await pieCookieBannerComponent.clickNecessaryOnlyAll(level);
            const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(isCookieBannerVisible).toBe(false);
            expect(events).toHaveLength(1);
        });
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
        const level = elementLevel.name as Level;
        test(`should emit the correct event, open the modal and hide the cookie banner when "Manage preferences" is clicked via element ${elementLevel.name}`, async ({ mount }) => {
        // Arrange
            const events : Array<Event> = [];

            await mount(PieCookieBanner, {
                props: {} as CookieBannerProps,

                on: {
                    [ON_COOKIE_BANNER_MANAGE_PREFS]: (event: Event) => events.push(event),
                },
            });

            // Act
            await pieCookieBannerComponent.clickManagePreferencesAll(level);

            const isModalVisible = await pieModalComponent.isModalVisible();
            const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(isModalVisible).toBe(true);
            expect.soft(isCookieBannerVisible).toBe(false);
            expect(events).toHaveLength(1);
        });
    });

    test('should close the modal and re-display the cookie banner when the back button in "Manage preferences" is clicked', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieModalComponent.clickBackModal();

        const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();
        const isModalVisible = await pieModalComponent.isModalVisible();

        // Assert
        expect.soft(isModalVisible).toBe(false);
        expect(isCookieBannerVisible).toBe(true);
    });

    test('should close the modal and cookie banner and emit the save event  when the save button in "Manage preferences" is clicked', async ({ mount }) => {
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

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickButtonWithText('Save');
        const [expectedCookieBannerPrefsSavedEvent] = preferences.filter(({ id }) => id !== 'all')
        .map(({ id, checked }) => ({ [id]: !!checked }));

        const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();
        const isModalVisible = await pieModalComponent.isModalVisible();

        // Assert
        expect(isModalVisible).toBe(false);
        expect(isCookieBannerVisible).toBe(false);
        expect(cookieBannerPrefsSavedEvent).toMatchObject(expectedCookieBannerPrefsSavedEvent);
    });

    test('should always toggle the `necessary` preference and set it to disabled', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        const isNecessaryPreferenceToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('necessary');
        const isNecessaryPreferenceToggleDisabled = await pieCookieBannerComponent.isPreferenceToggleDisabled('necessary');

        // Assert
        expect(isNecessaryPreferenceToggleChecked).toBe(true);
        expect(isNecessaryPreferenceToggleDisabled).toBe(true);
    });

    test('should toggle all preferences if the `all` preference node is set to true', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle('all');
        const elements = preferences.map(async ({ id }) => ({
            isChecked: await pieCookieBannerComponent.isPreferenceToggleChecked(id),
        }));
        const results = await Promise.all(elements);

        // Assert
        results.forEach((result) => {
            expect(result.isChecked).toBe(true);
        });
    });

    test('should toggle the `all` preference node if the other preferences are set to true manually', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        // eslint-disable-next-line no-restricted-syntax
        for (const preference of preferences) { // turn on all preferences
            if (preference.id !== 'all' && !preference.disabled) {
                // eslint-disable-next-line no-await-in-loop
                await pieCookieBannerComponent.clickPreferenceToggle(preference.id);
            }
        }
        const isToggleAllSelectorChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('all');

        // Assert
        expect(isToggleAllSelectorChecked).toBe(true);
    });

    test('should turn off all preferences if the `all` preference is set to false except for the necessary preference', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle('all'); // turn on
        await pieCookieBannerComponent.clickPreferenceToggle('all'); // turn off
        const elements = preferences.map(async ({ id }) => ({
            id,
            isChecked: await pieCookieBannerComponent.isPreferenceToggleChecked(id),
        }));
        const results = await Promise.all(elements);

        // Assert
        results.forEach(({ id, isChecked }) => {
            expect(isChecked).toBe(id === 'necessary');
        });
    });

    test('should turn off the `all` preference node if at least one of the other preferences is set to false.', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle('all'); // turn on all nodes
        await pieCookieBannerComponent.clickPreferenceToggle('functional'); // turn off one of the preferences
        const isToggleAllSelectorChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('all');

        // Assert
        expect(isToggleAllSelectorChecked).toBe(false);
    });

    test.describe('`locale` prop', () => {
        test('should render text in the default (English) language when the locale is not set', async ({ mount }) => {
            // Arrange
            await mount(PieCookieBanner, {});

            // Act
            const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(acceptAllButtonText)
                .toBe(englishLocale.banner.cta.acceptAll);

            expect(necessaryOnlyButtonText)
                .toBe(englishLocale.banner.cta.necessaryOnly);

            expect(managePreferencesButtonText)
                .toBe(englishLocale.banner.cta.managePreferences);

            expect(componentDescriptionText)
                .toBe(stripTags(englishLocale.banner.description));

            expect(modalDescriptionText)
                .toBe(stripTags(englishLocale.preferencesManagement.description));
        });

        test('should render the expected text when the locale prop is set', async ({ mount }) => {
            // Arrange
            await mount(PieCookieBanner, { props: { locale: spanishLocale } as CookieBannerProps });

            // Act
            const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(acceptAllButtonText)
                .toBe(spanishLocale.banner.cta.acceptAll);

            expect(necessaryOnlyButtonText)
                .toBe(spanishLocale.banner.cta.necessaryOnly);

            expect(managePreferencesButtonText)
                .toBe(spanishLocale.banner.cta.managePreferences);

            expect(componentDescriptionText)
                .toBe(stripTags(spanishLocale.banner.description));

            expect(modalDescriptionText)
                .toBe(stripTags(spanishLocale.preferencesManagement.description));
        });
    });

    test.describe('`hasPrimaryActionsOnly` prop', () => {
        test('should set both buttons to primary when true', async ({ mount }) => {
            // Arrange & Act
            await mount(
                PieCookieBanner,
                {
                    props: {
                        hasPrimaryActionsOnly: true,
                    },
                },
            );

            // Act
            const acceptAllButtonVariant = await pieCookieBannerComponent.getAcceptAllVariant('variant');
            const necessaryOnlyButtonVariant = await pieCookieBannerComponent.getNecessaryOnlyButtonVariant('variant');

            // Assert
            expect(acceptAllButtonVariant).toBe('primary');
            expect(necessaryOnlyButtonVariant).toBe('primary');
        });

        [false, undefined].forEach((hasPrimaryActionsOnly) => {
            test(`should not change button variants when ${hasPrimaryActionsOnly}`, async ({ mount }) => {
                // Arrange & Act
                await mount(
                    PieCookieBanner,
                    {
                        props: { hasPrimaryActionsOnly },
                    },
                );

                // Act
                const acceptAllButtonVariant = await pieCookieBannerComponent.getAcceptAllVariant('variant');
                const necessaryOnlyButtonVariant = await pieCookieBannerComponent.getNecessaryOnlyButtonVariant('variant');

                // Assert
                expect(acceptAllButtonVariant).toBe('primary');
                expect(necessaryOnlyButtonVariant).toBe('outline-inverse');
            });
        });
    });

    test.describe('`cookieStatementLink` prop', () => {
        test.describe('when not populated', () => {
            test('should set a default cookie statement link of empty string within the banner description', async ({ mount }) => {
                // Arrange & Act
                await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe('');
            });

            test('should set a default cookie statement link of empty string within the modal description', async ({ mount }) => {
                // Arrange & Act
                await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getModalCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe('');
            });
        });

        test.describe('when populated', () => {
            test('should set a cookie statement link correctly within the banner description', async ({ mount }) => {
                // Arrange & Act
                const cookieStatementUrl = 'en/FancyCookieStatementUrl';
                await mount(
                    PieCookieBanner,
                    {
                        props: {
                            cookieStatementLink: cookieStatementUrl,
                        },
                    },
                );

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe(cookieStatementUrl);
            });

            test('should set a cookie statement link correctly within the modal description', async ({ mount }) => {
                // Arrange & Act
                const cookieStatementUrl = 'en/FancyCookieStatementUrl';
                await mount(
                    PieCookieBanner,
                    {
                        props: {
                            cookieStatementLink: cookieStatementUrl,
                        },
                    },
                );

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getModalCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe(cookieStatementUrl);
            });
        });
    });

    test.describe('`cookieTechnologiesLink` prop', () => {
        test.describe('when not populated', () => {
            test('should set a default cookie technology link of empty string within the description container', async ({ mount }) => {
                // Arrange & Act
                await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieTechnologyLinkHref = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLinkHref).toBe('');
            });

            test('should set a default cookie technology link of empty string within the modal container', async ({ mount }) => {
                // Arrange & Act
                await mount(
                    PieCookieBanner,
                    {
                        props: {},
                    },
                );

                // Act
                const cookieTechnologyLinkHref = await pieCookieBannerComponent.getModalCookieTechnologiesLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLinkHref).toBe('');
            });
        });

        test.describe('when populated', () => {
            test('should set a cookie technology link correctly within the modal description', async ({ mount }) => {
                // Arrange & Act
                const cookieTechnologyUrl = 'en/FancyCookieTechnologyUrl';
                await mount(
                    PieCookieBanner,
                    {
                        props: {
                            cookieTechnologiesLink: cookieTechnologyUrl,
                        },
                    },
                );

                // Act
                const cookieTechnologyLinkHref = await pieCookieBannerComponent.getModalCookieTechnologiesLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLinkHref).toBe(cookieTechnologyUrl);
            });
        });
    });

    test.describe('`defaultPreferences` : prop', () => {
        test.describe('when defaultPreferences are set to three values', () => {
            test('should toggle the position to `on` for all 3 properties', async ({ mount }) => {
                await mount(PieCookieBanner, {
                    props: {
                        defaultPreferences: {
                            functional: true,
                            personalized: true,
                            analytical: true,
                        },
                    } as CookieBannerProps,
                });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();

                const isFunctionalToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('functional');
                const isPersonalizedToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('personalized');
                const isAnalyticalToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('analytical');

                // Assert
                expect(isFunctionalToggleChecked).toBe(true);
                expect(isPersonalizedToggleChecked).toBe(true);
                expect(isAnalyticalToggleChecked).toBe(true);
            });

            test('should check `all` toggle when all three props are passed in', async ({ mount }) => {
                await mount(PieCookieBanner, {
                    props: {
                        defaultPreferences: {
                            functional: true,
                            personalized: true,
                            analytical: true,
                        },
                    } as CookieBannerProps,
                });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const areAllTogglesChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('all');

                // Assert
                expect(areAllTogglesChecked).toBe(true);
            });
        });

        test.describe('when defaultPreferences are partially provided', () => {
            test('should toggle the position to `on` for property', async ({ mount }) => {
                await mount(PieCookieBanner, { props: { defaultPreferences: { functional: true } } as CookieBannerProps });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const isFunctionalToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('functional');

                // Assert
                expect(isFunctionalToggleChecked).toBe(true);
            });

            test('should not toggle the position to `on` for properties not included in the defaultPreferences list', async ({ mount }) => {
                await mount(PieCookieBanner, { props: { defaultPreferences: { functional: true } } as CookieBannerProps });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const isAnalyticalToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('analytical');
                const isPersonalizedToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('personalized');

                // Assert
                expect(isAnalyticalToggleChecked).toBe(false);
                expect(isPersonalizedToggleChecked).toBe(false);
            });

            test('should not set the `all` toggle to `checked`', async ({ mount }) => {
                // Arrange
                await mount(PieCookieBanner, {
                    props: {
                        defaultPreferences: { functional: true, personalized: true },
                    } as CookieBannerProps,
                });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const isAllPreferenceToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('all');

                // Assert
                expect(isAllPreferenceToggleChecked).toBe(false);
            });
        });
    });
});
