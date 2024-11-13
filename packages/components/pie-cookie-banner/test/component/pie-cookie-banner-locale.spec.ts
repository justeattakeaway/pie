import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { CookieBannerComponent } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import { ModalComponent } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.page.ts';
import { Language, Country } from '@justeattakeaway/pie-cookie-banner/src/defs.ts';

function stripTags (str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

const defaultLocale = 'en';
let pieCookieBannerComponent: CookieBannerComponent;
let pieModalComponent: ModalComponent;

test.describe('PieCookieBanner - Country and Language Properties', () => {
    test.beforeEach(async ({ page }) => {
        pieCookieBannerComponent = new CookieBannerComponent(page);
        pieModalComponent = new ModalComponent(page);
    });

    test('should render text in the default language-country \'en-gb\' when unset', async () => {
        // Arrange
        const expectedLocale = (await import(`@justeattakeaway/pie-cookie-banner/locales/${defaultLocale}.js`)).default;
        await pieCookieBannerComponent.load();

        // Act
        const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
        const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
        const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
        const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
        const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

        // Assert
        expect(acceptAllButtonText).toBe(expectedLocale.banner.cta.acceptAll);
        expect(necessaryOnlyButtonText).toBe(expectedLocale.banner.cta.necessaryOnly);
        expect(managePreferencesButtonText).toBe(expectedLocale.banner.cta.managePreferences);
        expect(componentDescriptionText).toBe(stripTags(expectedLocale.banner.description));
        expect(modalDescriptionText).toBe(stripTags(expectedLocale.preferencesManagement.description));
    });

    test('should not update the locale if country and language properties are unchanged', async () => {
        // Arrange
        const expectedLocale = (await import(`@justeattakeaway/pie-cookie-banner/locales/${defaultLocale}.js`)).default;
        await pieCookieBannerComponent.load();

        // Act
        await pieCookieBannerComponent.setProperty('country', Country.GREAT_BRITAIN);
        await pieCookieBannerComponent.setProperty('language', Language.ENGLISH);
        await pieCookieBannerComponent.waitForLocaleUpdate();

        const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
        const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
        const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
        const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
        const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

        // Assert
        expect(acceptAllButtonText).toBe(expectedLocale.banner.cta.acceptAll);
        expect(necessaryOnlyButtonText).toBe(expectedLocale.banner.cta.necessaryOnly);
        expect(managePreferencesButtonText).toBe(expectedLocale.banner.cta.managePreferences);
        expect(componentDescriptionText).toBe(stripTags(expectedLocale.banner.description));
        expect(modalDescriptionText).toBe(stripTags(expectedLocale.preferencesManagement.description));
    });

    [
        { language: Language.FRENCH, country: Country.FRANCE, expectedLocale: 'fr-fr' }, // Test for exact/bespoke translations
        { language: Language.ENGLISH, country: Country.FRANCE, expectedLocale: 'en-fr' }, // Test for exact/bespoke translations
        { language: 'invalid', country: 'invalid', expectedLocale: 'en' }, // Test for invalid settings
        { language: Language.SPANISH, country: 'invalid', expectedLocale: 'es' }, // Test for invalid settings
        { language: 'invalid', country: Country.SPAIN, expectedLocale: 'es' }, // Test for invalid settings
        { language: Language.SLOVAK, country: Country.SLOVAKIA, expectedLocale: 'sk' },
        { language: Language.ENGLISH, country: Country.GERMANY, expectedLocale: 'en' }, // Test for alternative language in country
        { language: Language.GERMAN, country: Country.GERMANY, expectedLocale: 'de' },
        { language: Language.DANISH, country: Country.DENMARK, expectedLocale: 'da' },
        { language: Language.ENGLISH, country: Country.CANADA, expectedLocale: 'en' }, // Test for alternative language in country
        { language: Language.FRENCH, country: Country.CANADA, expectedLocale: 'fr' }, // Test for alternative language in country
        { language: Language.ITALIAN, country: Country.ITALY, expectedLocale: 'it' },
        { language: Language.SPANISH, country: Country.SPAIN, expectedLocale: 'es' },
        { language: 'CA', country: 'es', expectedLocale: 'ca' }, // Test case-insensitivity
        { language: 'ca', country: 'ES', expectedLocale: 'ca' }, // Test case-insensitivity
        { language: 'ca', country: 'es', expectedLocale: 'ca' }, // Test case-insensitivity
        { language: 'CA', country: 'ES', expectedLocale: 'ca' }, // Test case-insensitivity
        { language: 'pt', country: Country.SPAIN, expectedLocale: 'es' }, // Test for unsupported language
        { language: 'ru', country: Country.FRANCE, expectedLocale: 'fr-fr' }, // Test for unsupported language
        { language: 'es', country: 'pt', expectedLocale: 'es' }, // Test for unspported country
        { language: 'fr', country: 'ru', expectedLocale: 'fr' }, // Test for unspported country
    ].forEach((obj) => {
        test(`should load the correct locale [${obj.expectedLocale}] given language [${obj.language}] & country [${obj.country}]`, async () => {
            // Arrange
            const expectedLocale = (await import(`@justeattakeaway/pie-cookie-banner/locales/${obj.expectedLocale}.js`)).default;
            await pieCookieBannerComponent.load({ country: obj.country, language: obj.language });

            // Act
            const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(acceptAllButtonText).toBe(expectedLocale.banner.cta.acceptAll);
            expect(necessaryOnlyButtonText).toBe(expectedLocale.banner.cta.necessaryOnly);
            expect(managePreferencesButtonText).toBe(expectedLocale.banner.cta.managePreferences);
            expect(componentDescriptionText).toBe(stripTags(expectedLocale.banner.description));
            expect(modalDescriptionText).toBe(stripTags(expectedLocale.preferencesManagement.description));
        });
    });
});
