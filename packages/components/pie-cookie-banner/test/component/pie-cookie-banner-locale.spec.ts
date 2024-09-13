import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { readFile } from 'fs/promises';
import { CookieBannerComponent } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import { ModalComponent } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.page.ts';

function stripTags (str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}

const englishLocale = JSON.parse(await readFile(new URL('../../locales/en-gb.json', import.meta.url), { encoding: 'utf-8' }));
let pieCookieBannerComponent: CookieBannerComponent;
let pieModalComponent: ModalComponent;

test.describe('PieCookieBanner - Tenant and Language Properties', () => {
    test.beforeEach(async ({ page }) => {
        pieCookieBannerComponent = new CookieBannerComponent(page);
        pieModalComponent = new ModalComponent(page);
    });

    test('should load the correct locale based on tenant and language properties', async () => {
        // Arrange
        await pieCookieBannerComponent.load();

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
        { tenant: 'gb', language: 'en' },
        { tenant: 'fr', language: 'en' },
        { tenant: 'fr', language: 'fr' },
        { tenant: 'dk', language: 'da' },
        { tenant: 'es', language: 'es' },
        { tenant: 'it', language: 'it' },
    ].forEach(({ tenant, language }) => {
        test(`should update the locale when tenant is ${tenant} and language is ${language}`, async () => {
            // Arrange
            const locale = JSON.parse(await readFile(new URL(`../../locales/${language}-${tenant}.json`, import.meta.url), { encoding: 'utf-8' }));
            await pieCookieBannerComponent.load();

            // Act
            await pieCookieBannerComponent.setProperty('tenant', tenant);
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

    test('should fallback to default locale \'en-gb\' if the specified locale file is not found', async () => {
        // Arrange
        const unsupportedLocale = { tenant: 'us', language: 'en' };
        await pieCookieBannerComponent.load(unsupportedLocale);

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

    test('should not update the locale if tenant and language properties are unchanged', async () => {
        // Arrange
        await pieCookieBannerComponent.load();

        // Act
        await pieCookieBannerComponent.setProperty('tenant', 'gb');
        await pieCookieBannerComponent.setProperty('language', 'en');
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

    test('should handle errors gracefully when loading locale files', async () => {
        // Arrange
        await pieCookieBannerComponent.load({ tenant: 'invalid', language: 'invalid' });

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
});
