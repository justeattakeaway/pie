import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { readFile } from 'fs/promises';
import { CookieBannerComponent } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import { ModalComponent } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.page.ts';
import { Language, Country } from '@justeattakeaway/pie-cookie-banner/src/defs.ts';

function stripTags (str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

const englishLocale = JSON.parse(await readFile(new URL('../../locales/en-gb.json', import.meta.url), { encoding: 'utf-8' }));
let pieCookieBannerComponent: CookieBannerComponent;
let pieModalComponent: ModalComponent;

test.describe('PieCookieBanner - Country and Language Properties', () => {
    test.beforeEach(async ({ page }) => {
        pieCookieBannerComponent = new CookieBannerComponent(page);
        pieModalComponent = new ModalComponent(page);
    });

    test('should render text in the default (uk - english) language when unset', async () => {
        // Arrange
        const englishLocale = JSON.parse(await readFile(new URL('../../locales/en-gb.json', import.meta.url), { encoding: 'utf-8' }));
        await pieCookieBannerComponent.load();

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

    [
        { country: Country.GREAT_BRITAIN, language: Language.ENGLISH },
        { country: Country.FRANCE, language: Language.ENGLISH },
        { country: Country.FRANCE, language: Language.FRENCH },
        { country: Country.DENMARK, language: Language.DANISH },
        { country: Country.SPAIN, language: Language.SPANISH },
        { country: Country.ITALY, language: Language.ITALIAN },
        { country: 'es', language: 'CA' }, // Test case-insensitivity,
        { country: 'ES', language: 'ca' },
        { country: 'es', language: 'ca' },
        { country: 'ES', language: 'CA' },
    ].forEach(({ country, language }) => {
        test(`should 'dynamically' update the locale when we reset the language-country from 'en-gb' to ${language}-${country}`, async () => {
            // Arrange
            await pieCookieBannerComponent.load(); // en-gb is the default locale
            const locale = JSON.parse(await readFile(new URL(`../../locales/${language.toLowerCase()}-${country.toLowerCase()}.json`, import.meta.url), { encoding: 'utf-8' }));

            // Act
            await pieCookieBannerComponent.setProperty('country', country);
            await pieCookieBannerComponent.setProperty('language', language);
            await pieCookieBannerComponent.waitForLocaleUpdate();

            const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(acceptAllButtonText).toBe(locale.banner.cta.acceptAll);
            expect(necessaryOnlyButtonText).toBe(locale.banner.cta.necessaryOnly);
            expect(managePreferencesButtonText).toBe(locale.banner.cta.managePreferences);
            expect(componentDescriptionText).toBe(stripTags(locale.banner.description));
            expect(modalDescriptionText).toBe(stripTags(locale.preferencesManagement.description));
        });
    });

    test('should not update the locale if country and language properties are unchanged', async () => {
        // Arrange
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
        expect(acceptAllButtonText).toBe(englishLocale.banner.cta.acceptAll);
        expect(necessaryOnlyButtonText).toBe(englishLocale.banner.cta.necessaryOnly);
        expect(managePreferencesButtonText).toBe(englishLocale.banner.cta.managePreferences);
        expect(componentDescriptionText).toBe(stripTags(englishLocale.banner.description));
        expect(modalDescriptionText).toBe(stripTags(englishLocale.preferencesManagement.description));
    });

    test('should fallback to the global default language-country \'en-gb\' if the language and/or country is unsupported/invalid', async () => {
        // Arrange
        await pieCookieBannerComponent.load({ country: 'invalid', language: 'invalid' });

        // Act
        const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
        const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
        const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
        const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
        const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

        // Assert
        expect(acceptAllButtonText).toBe(englishLocale.banner.cta.acceptAll);
        expect(necessaryOnlyButtonText).toBe(englishLocale.banner.cta.necessaryOnly);
        expect(managePreferencesButtonText).toBe(englishLocale.banner.cta.managePreferences);
        expect(componentDescriptionText).toBe(stripTags(englishLocale.banner.description));
        expect(modalDescriptionText).toBe(stripTags(englishLocale.preferencesManagement.description));
    });

    [
        { country: Country.SPAIN, unsupportedLang: Language.ENGLISH, fallbackLang: Language.SPANISH },
        { country: Country.FRANCE, unsupportedLang: Language.SPANISH, fallbackLang: Language.FRENCH },
        { country: Country.GREAT_BRITAIN, unsupportedLang: Language.SPANISH, fallbackLang: Language.ENGLISH },
    ].forEach((obj) => {
        test(`should fallback to the default language-country '${obj.fallbackLang}-${obj.country}' if the supplied language '${obj.unsupportedLang}' is unsupported`, async () => {
            // Arrange
            const fallbackLocale = JSON.parse(await readFile(new URL(`../../locales/${obj.fallbackLang.toLowerCase()}-${obj.country.toLowerCase()}.json`, import.meta.url), { encoding: 'utf-8' }));
            await pieCookieBannerComponent.load({ country: obj.country, language: obj.unsupportedLang }); // supply an unsupported language

            // Act
            const acceptAllButtonText = await pieCookieBannerComponent.getAcceptAllTextContent();
            const necessaryOnlyButtonText = await pieCookieBannerComponent.getNecessaryOnlyTextContent();
            const managePreferencesButtonText = await pieCookieBannerComponent.getManagePreferencesTextContent();
            const componentDescriptionText = await pieCookieBannerComponent.getComponentDescriptionTextContent();
            const modalDescriptionText = await pieModalComponent.getDescriptionTextContent();

            // Assert
            expect(acceptAllButtonText)
                .toBe(fallbackLocale.banner.cta.acceptAll);

            expect(necessaryOnlyButtonText)
                .toBe(fallbackLocale.banner.cta.necessaryOnly);

            expect(managePreferencesButtonText)
                .toBe(fallbackLocale.banner.cta.managePreferences);

            expect(componentDescriptionText)
                .toBe(stripTags(fallbackLocale.banner.description));

            expect(modalDescriptionText)
                .toBe(stripTags(fallbackLocale.preferencesManagement.description));
        });
    });
});
