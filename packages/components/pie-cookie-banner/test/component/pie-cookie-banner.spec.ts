import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { CookieBannerComponent, type Level } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import {
    ON_COOKIE_BANNER_ACCEPT_ALL,
    ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS,
    ON_COOKIE_BANNER_PREFS_SAVED,
    preferences,
} from '../../src/defs.ts';

let pieCookieBannerComponent: CookieBannerComponent;

test.describe('PieCookieBanner - Component tests', () => {
    test.beforeEach(async ({ page }) => {
        pieCookieBannerComponent = new CookieBannerComponent(page);
    });

    test('should render successfully', async () => {
        // Arrange
        await pieCookieBannerComponent.load();

        // Act
        const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

        // Assert
        expect(isCookieBannerVisible).toBe(true);
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
        const level = elementLevel.name as Level;
        test(`should emit the correct event and close the cookie banner when "Accept all" is clicked via element ${elementLevel.name}`, async () => {
            // Arrange
            await pieCookieBannerComponent.load();
            await pieCookieBannerComponent.listenForEvent(ON_COOKIE_BANNER_ACCEPT_ALL);

            // Act
            await pieCookieBannerComponent.clickAcceptAll(level);

            const events = await pieCookieBannerComponent.getCapturedEvents();
            const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(isCookieBannerVisible).toBe(false);
            expect(events).toHaveLength(1);
        });
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
        const level = elementLevel.name as Level;
        test(`should emit the correct event and close the cookie banner when "Necessary only" is clicked via element = ${elementLevel.name}`, async () => {
        // Arrange
            await pieCookieBannerComponent.load();
            await pieCookieBannerComponent.listenForEvent(ON_COOKIE_BANNER_NECESSARY_ONLY);

            // Act
            await pieCookieBannerComponent.clickNecessaryOnlyAll(level);

            const events = await pieCookieBannerComponent.getCapturedEvents();
            const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(isCookieBannerVisible).toBe(false);
            expect(events).toHaveLength(1);
        });
    });

    [{ name: 'action' }, { name: 'body' }].forEach((elementLevel) => {
        const level = elementLevel.name as Level;
        test(`should emit the correct event, open the modal and hide the cookie banner when "Manage preferences" is clicked via element ${elementLevel.name}`, async () => {
            // Arrange
            await pieCookieBannerComponent.load();
            await pieCookieBannerComponent.listenForEvent(ON_COOKIE_BANNER_MANAGE_PREFS);

            // Act
            await pieCookieBannerComponent.clickManagePreferencesAll(level);

            const events = await pieCookieBannerComponent.getCapturedEvents();
            const isModalVisible = await pieCookieBannerComponent.modalComponent.isModalVisible();
            const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();

            // Assert
            expect.soft(isModalVisible).toBe(true);
            expect.soft(isCookieBannerVisible).toBe(false);
            expect(events).toHaveLength(1);
        });
    });

    test('should close the modal and re-display the cookie banner when the back button in "Manage preferences" is clicked', async () => {
        // Arrange
        await pieCookieBannerComponent.load();

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.modalComponent.clickBackModal();

        const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();
        const isModalVisible = await pieCookieBannerComponent.modalComponent.isModalVisible();

        // Assert
        expect.soft(isModalVisible).toBe(false);
        expect(isCookieBannerVisible).toBe(true);
    });

    test('should close the modal and cookie banner and emit the save event when the save button in "Manage preferences" is clicked', async () => {
        // Arrange
        await pieCookieBannerComponent.load();
        await pieCookieBannerComponent.listenForEvent(ON_COOKIE_BANNER_PREFS_SAVED);

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickButtonWithText('Save');

        const events = await pieCookieBannerComponent.getCapturedEvents();
        const isCookieBannerVisible = await pieCookieBannerComponent.isCookieBannerVisible();
        const isModalVisible = await pieCookieBannerComponent.modalComponent.isModalVisible();

        // Assert
        expect(isModalVisible).toBe(false);
        expect(isCookieBannerVisible).toBe(false);
        expect(events).toHaveLength(1);
    });

    test('should always toggle the `necessary` preference and set it to disabled', async () => {
        // Arrange
        await pieCookieBannerComponent.load();

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        const isNecessaryPreferenceToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('necessary');
        const isNecessaryPreferenceToggleDisabled = await pieCookieBannerComponent.isPreferenceToggleDisabled('necessary');

        // Assert
        expect(isNecessaryPreferenceToggleChecked).toBe(true);
        expect(isNecessaryPreferenceToggleDisabled).toBe(true);
    });

    test('should toggle all preferences if the `all` preference node is set to true', async () => {
        // Arrange
        await pieCookieBannerComponent.load({ defaultPreferences: null });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle('all');
        const results = await pieCookieBannerComponent.getAllCheckedPreferences(preferences);

        // Assert
        results.forEach((result) => {
            expect(result.isChecked).toBe(true);
        });
    });

    test('should toggle the `all` preference node if the other preferences are set to true manually', async () => {
        // Arrange
        await pieCookieBannerComponent.load({ defaultPreferences: null });

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

    test('should turn off all preferences if the `all` preference is set to false except for the necessary preference', async () => {
        // Arrange
        await pieCookieBannerComponent.load({ defaultPreferences: null });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle('all'); // turn on
        await pieCookieBannerComponent.clickPreferenceToggle('all'); // turn off
        const results = await pieCookieBannerComponent.getAllCheckedPreferences(preferences);

        // Assert
        results.forEach(({ id, isChecked }) => {
            expect(isChecked).toBe(id === 'necessary');
        });
    });

    test('should turn off the `all` preference node if at least one of the other preferences is set to false.', async () => {
        // Arrange
        await pieCookieBannerComponent.load({ defaultPreferences: null });

        // Act
        await pieCookieBannerComponent.clickManagePreferencesAction();
        await pieCookieBannerComponent.clickPreferenceToggle('all'); // turn on all nodes
        await pieCookieBannerComponent.clickPreferenceToggle('functional'); // turn off one of the preferences
        const isToggleAllSelectorChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('all');

        // Assert
        expect(isToggleAllSelectorChecked).toBe(false);
    });

    test.describe('`hasPrimaryActionsOnly` prop', () => {
        test('should set both buttons to primary when true', async () => {
            // Arrange & Act
            await pieCookieBannerComponent.load({ hasPrimaryActionsOnly: true });

            // Act
            const acceptAllButtonVariant = await pieCookieBannerComponent.getAcceptAllVariant();
            const necessaryOnlyButtonVariant = await pieCookieBannerComponent.getNecessaryOnlyButtonVariant();

            // Assert
            expect(acceptAllButtonVariant).toBe('primary');
            expect(necessaryOnlyButtonVariant).toBe('primary');
        });

        [false, undefined].forEach((hasPrimaryActionsOnly) => {
            test(`should not change button variants when ${hasPrimaryActionsOnly}`, async () => {
                // Arrange & Act
                await pieCookieBannerComponent.load({ hasPrimaryActionsOnly });

                // Act
                const acceptAllButtonVariant = await pieCookieBannerComponent.getAcceptAllVariant();
                const necessaryOnlyButtonVariant = await pieCookieBannerComponent.getNecessaryOnlyButtonVariant();

                // Assert
                expect(acceptAllButtonVariant).toBe('primary');
                expect(necessaryOnlyButtonVariant).toBe('outline-inverse');
            });
        });
    });

    test.describe('`cookieStatementLink` prop', () => {
        test.describe('when not populated', () => {
            test('should set a default cookie statement link of empty string within the banner description', async () => {
                // Arrange & Act
                await pieCookieBannerComponent.load({ cookieStatementLink: '' });

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe('');
            });

            test('should set a default cookie statement link of empty string within the modal description', async () => {
                // Arrange & Act
                await pieCookieBannerComponent.load({ cookieStatementLink: '' });

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getModalCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe('');
            });
        });

        // To be addressed in ticket DSW-2297
        test.describe.skip('when populated', () => {
            test('should set a cookie statement link correctly within the banner description', async () => {
                // Arrange & Act
                const cookieStatementUrl = 'en/FancyCookieStatementUrl';

                await pieCookieBannerComponent.load({ cookieStatementLink: cookieStatementUrl });

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe(cookieStatementUrl);
            });

            test('should set a cookie statement link correctly within the modal description', async () => {
                // Arrange & Act
                const cookieStatementUrl = 'en/FancyCookieStatementUrl';

                await pieCookieBannerComponent.load({ cookieStatementLink: cookieStatementUrl });

                // Act
                const cookieStatementLinkHref = await pieCookieBannerComponent.getModalCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieStatementLinkHref).toBe(cookieStatementUrl);
            });
        });
    });

    test.describe('`cookieTechnologiesLink` prop', () => {
        test.describe('when not populated', () => {
            test('should set a default cookie technology link of empty string within the description container', async () => {
                // Arrange & Act
                await pieCookieBannerComponent.load({ cookieStatementLink: '' });

                // Act
                const cookieTechnologyLinkHref = await pieCookieBannerComponent.getBannerCookieStatementLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLinkHref).toBe('');
            });

            test('should set a default cookie technology link of empty string within the modal container', async () => {
                // Arrange & Act
                await pieCookieBannerComponent.load({ cookieTechnologiesLink: '' });

                // Act
                const cookieTechnologyLinkHref = await pieCookieBannerComponent.getModalCookieTechnologiesLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLinkHref).toBe('');
            });
        });

        // To be addressed in ticket DSW-2297
        test.describe.skip('when populated', () => {
            test('should set a cookie technology link correctly within the modal description', async () => {
                // Arrange & Act
                const cookieTechnologyUrl = 'en/FancyCookieTechnologyUrl';

                await pieCookieBannerComponent.load({ cookieTechnologiesLink: cookieTechnologyUrl });

                // Act
                const cookieTechnologyLinkHref = await pieCookieBannerComponent.getModalCookieTechnologiesLinkAttribute('href');

                // Assert
                expect(cookieTechnologyLinkHref).toBe(cookieTechnologyUrl);
            });
        });
    });

    test.describe('`openLinksInNewTab` prop', () => {
        test.describe('when true (default)', () => {
            test('should set target="_blank" on the banner cookie statement link', async () => {
                // Arrange
                await pieCookieBannerComponent.load();

                // Act
                const target = await pieCookieBannerComponent.getBannerCookieStatementLinkTarget();

                // Assert
                expect(target).toBe('_blank');
            });

            test('should set target="_blank" on the modal cookie statement link', async () => {
                // Arrange
                await pieCookieBannerComponent.load();

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const target = await pieCookieBannerComponent.getModalCookieStatementLinkTarget();

                // Assert
                expect(target).toBe('_blank');
            });

            test('should set target="_blank" on the modal cookie technologies link', async () => {
                // Arrange
                await pieCookieBannerComponent.load();

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const target = await pieCookieBannerComponent.getModalCookieTechnologiesLinkTarget();

                // Assert
                expect(target).toBe('_blank');
            });
        });

        test.describe('when false', () => {
            test('should set target="_self" on the banner cookie statement link', async () => {
                // Arrange
                await pieCookieBannerComponent.load({ openLinksInNewTab: false });

                // Act
                const target = await pieCookieBannerComponent.getBannerCookieStatementLinkTarget();

                // Assert
                expect(target).toBe('_self');
            });

            test('should set target="_self" on the modal cookie statement link', async () => {
                // Arrange
                await pieCookieBannerComponent.load({ openLinksInNewTab: false });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const target = await pieCookieBannerComponent.getModalCookieStatementLinkTarget();

                // Assert
                expect(target).toBe('_self');
            });

            test('should set target="_self" on the modal cookie technologies link', async () => {
                // Arrange
                await pieCookieBannerComponent.load({ openLinksInNewTab: false });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const target = await pieCookieBannerComponent.getModalCookieTechnologiesLinkTarget();

                // Assert
                expect(target).toBe('_self');
            });
        });
    });

    test.describe('`defaultPreferences` : prop', () => {
        test.describe('when defaultPreferences are set to three values', () => {
            test('should toggle the position to `on` for all 3 properties', async () => {
                await pieCookieBannerComponent.load({
                    defaultPreferences: {
                        functional: true,
                        personalized: true,
                        analytical: true,
                    },
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

            test('should check `all` toggle when all three props are passed in', async () => {
                await pieCookieBannerComponent.load({
                    defaultPreferences: {
                        functional: true,
                        personalized: true,
                        analytical: true,
                    },
                });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const areAllTogglesChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('all');

                // Assert
                expect(areAllTogglesChecked).toBe(true);
            });
        });

        // To address in ticket DSW-2298
        test.describe.skip('when defaultPreferences are partially provided', () => {
            test('should toggle the position to `on` for property', async () => {
                await pieCookieBannerComponent.load({
                    defaultPreferences: {
                        functional: true,
                    },
                });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const isFunctionalToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('functional');

                // Assert
                expect(isFunctionalToggleChecked).toBe(true);
            });

            test('should not toggle the position to `on` for properties not included in the defaultPreferences list', async () => {
                await pieCookieBannerComponent.load({
                    defaultPreferences: {
                        functional: true,
                    },
                });

                // Act
                await pieCookieBannerComponent.clickManagePreferencesAction();
                const isAnalyticalToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('analytical');
                const isPersonalizedToggleChecked = await pieCookieBannerComponent.isPreferenceToggleChecked('personalized');

                // Assert
                expect(isAnalyticalToggleChecked).toBe(false);
                expect(isPersonalizedToggleChecked).toBe(false);
            });

            test('should not set the `all` toggle to `checked`', async () => {
                // Arrange
                await pieCookieBannerComponent.load({
                    defaultPreferences: {
                        functional: true,
                        personalized: true,
                    },
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
