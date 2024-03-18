
import { test, expect } from '@sand4rt/experimental-ct-web';
import { readFile } from 'fs/promises';
import { PieCookieBannerComponent } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import { PieModalPage } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.page.ts';
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

const getPreferenceItemSelector = (id: PreferenceIds) => `#${id} [data-test-id="switch-component"]`;

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
        const cookieBanner = await pieCookieBannerComponent.isCookieBannerVisible();

        // Assert
        expect(cookieBanner).toBeTruthy();
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
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
            await pieCookieBannerComponent.clickAcceptAll(elementLevel.name);
            const cookieBanner = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(cookieBanner).toBeFalsy();
            expect(events).toHaveLength(1);
        });
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
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
            await pieCookieBannerComponent.clickNecessaryOnlyAll(elementLevel.name);
            const cookieBanner = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(cookieBanner).toBeFalsy();
            expect(events).toHaveLength(1);
        });
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
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
            await pieCookieBannerComponent.clickManagePreferencesAll(elementLevel.name);

            const modal = pieModalComponent.isModalVisible();
            const cookieBanner = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(modal).toBeTruthy();
            expect.soft(cookieBanner).toBeFalsy();
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

        const cookieBanner = await pieCookieBannerComponent.isCookieBannerVisible();
        const modal = await pieModalComponent.isModalVisible();

        // Assert
        expect.soft(modal).toBeFalsy();
        expect(cookieBanner).toBeTruthy();
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

        const cookieBanner = await pieCookieBannerComponent.isCookieBannerVisible();
        const modal = await pieModalComponent.isModalVisible();

        // Assert
        expect(modal).toBeFalsy();
        expect(cookieBanner).toBeFalsy();
        expect(cookieBannerPrefsSavedEvent).toMatchObject(expectedCookieBannerPrefsSavedEvent);
    });

    test('should always toggle the `necessary` preference and set it to disabled', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        const necessaryPreferenceToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('necessary'));
        const necessaryPreferenceToggleDisabled = await pieCookieBannerComponent.isPreferenceToggleDisabled(getPreferenceItemSelector('necessary'));

        // Assert
        await expect(necessaryPreferenceToggleChecked).toBeTruthy();
        await expect(necessaryPreferenceToggleDisabled).toBeTruthy();
    });

    test('should toggle all preferences if the `all` preference node is set to true', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, {
            props: {} as CookieBannerProps,
        });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle(getPreferenceItemSelector('all'));
        const elements = preferences.map(async ({ id }) => ({
            isChecked: await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector(id)),
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
                await pieCookieBannerComponent.clickPreferenceToggle(getPreferenceItemSelector(preference.id));
            }
        }
        const toggleAllSelector = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('all'));

        // Assert
        await expect(toggleAllSelector).toBeTruthy();
    });

    test('should turn off all preferences if the `all` preference is set to false except for the necessary preference', async ({ mount }) => {
        // Arrange
        await mount(PieCookieBanner, { props: {} as CookieBannerProps });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle(getPreferenceItemSelector('all')); // turn on
        await pieCookieBannerComponent.clickPreferenceToggle(getPreferenceItemSelector('all')); // turn off
        const elements = preferences.map(async ({ id }) => ({
            id,
            isChecked: await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector(id)),
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
        await pieCookieBannerComponent.clickPreferenceToggle(getPreferenceItemSelector('all')); // turn on all nodes
        await pieCookieBannerComponent.clickPreferenceToggle(getPreferenceItemSelector('functional')); // turn off one of the preferences
        const toggleAllSelector = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('all'));

        // Assert
        await expect(toggleAllSelector).toBeFalsy();
    });

    test.describe('`locale` prop', () => {
        test('should render text in the default (English) language when the locale is not set', async ({ mount }) => {
            // Arrange
            await mount(PieCookieBanner, {});

            // Act
            const acceptAllButton = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButton = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButton = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescription = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescription = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(await acceptAllButton)
                .toBe(englishLocale.banner.cta.acceptAll);

            expect(await necessaryOnlyButton)
                .toBe(englishLocale.banner.cta.necessaryOnly);

            expect(await managePreferencesButton)
                .toBe(englishLocale.banner.cta.managePreferences);

            expect(await componentDescription)
                .toBe(stripTags(englishLocale.banner.description));

            expect(await modalDescription)
                .toBe(stripTags(englishLocale.preferencesManagement.description));
        });

        test('should render the expected text when the locale prop is set', async ({ mount }) => {
            // Arrange
            await mount(PieCookieBanner, { props: { locale: spanishLocale } as CookieBannerProps });

            // Act
            const acceptAllButton = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButton = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButton = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescription = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescription = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(acceptAllButton)
                .toBe(spanishLocale.banner.cta.acceptAll);

            expect(necessaryOnlyButton)
                .toBe(spanishLocale.banner.cta.necessaryOnly);

            expect(managePreferencesButton)
                .toBe(spanishLocale.banner.cta.managePreferences);

            expect(componentDescription)
                .toBe(stripTags(spanishLocale.banner.description));

            expect(modalDescription)
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
            const acceptAllButton = await pieCookieBannerComponent.getAcceptAllAttribute('variant');
            const necessaryOnlyButton = await pieCookieBannerComponent.getNecessaryOnlyButtonAttribute('variant');

            // Assert
            expect(acceptAllButton).toBe('primary');
            expect(necessaryOnlyButton).toBe('primary');
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
                const acceptAllButton = await pieCookieBannerComponent.getAcceptAllAttribute('variant');
                const necessaryOnlyButton = await pieCookieBannerComponent.getNecessaryOnlyButtonAttribute('variant');

                // Assert
                expect(acceptAllButton).toBe('primary');
                expect(necessaryOnlyButton).toBe('outline-inverse');
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
                const cookieBannerDescription = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieBannerDescription).toBe('');
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
                const cookieStatementLink = await pieCookieBannerComponent.getModalCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLink).toBe('');
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
                const cookieStatementLink = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLink).toBe(cookieStatementUrl);
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
                const cookieStatementLink = await pieCookieBannerComponent.getModalCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLink).toBe(cookieStatementUrl);
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
                const cookieTechnologyLink = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLink).toBe('');
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
                const cookieTechnologyLink = await pieCookieBannerComponent.getModalCookieTechnologiesLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLink).toBe('');
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
                const cookieTechnologyLink = await pieCookieBannerComponent.getModalCookieTechnologiesLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLink).toBe(cookieTechnologyUrl);
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

                const functionalToggle = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('functional'));
                const personalizedToggle = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('personalized'));
                const analyticalToggle = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('analytical'));

                // Assert
                expect(functionalToggle).toBeTruthy();
                expect(personalizedToggle).toBeTruthy();
                expect(analyticalToggle).toBeTruthy();
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
                const output = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('all'));

                // Assert
                expect(output).toBeTruthy();
            });
        });

        test.describe('when defaultPreferences are partially provided', () => {
            test('should toggle the position to `on` for property', async ({ mount }) => {
                await mount(PieCookieBanner, { props: { defaultPreferences: { functional: true } } as CookieBannerProps });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const output = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('functional'));

                // Assert
                expect(output).toBeTruthy();
            });

            test('should not toggle the position to `on` for properties not included in the defaultPreferences list', async ({ mount }) => {
                await mount(PieCookieBanner, { props: { defaultPreferences: { functional: true } } as CookieBannerProps });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const analyticalToggle = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('analytical'));
                const personalizedToggle = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('personalized'));

                // Assert
                expect(analyticalToggle).toBeFalsy();
                expect(personalizedToggle).toBeFalsy();
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
                const allPreferenceToggle = await pieCookieBannerComponent.isPreferenceToggleChecked(getPreferenceItemSelector('all'));

                // Assert
                expect(allPreferenceToggle).toBeFalsy();
            });
        });
    });
});
