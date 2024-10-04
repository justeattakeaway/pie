import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { readFile } from 'fs/promises';
import { CookieBannerComponent } from 'test/helpers/page-object/pie-cookie-banner.page.ts';
import { ModalComponent } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.page.ts';
import { Language, Tenant } from 'C:/GitHub/pie/packages/components/pie-cookie-banner/src/defs.ts';

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
        { tenant: Tenant.UK, language: Language.ENGLISH },
        { tenant: Tenant.FRANCE, language: Language.ENGLISH },
        { tenant: Tenant.FRANCE, language: Language.FRENCH },
        { tenant: Tenant.DENMARK, language: Language.DANISH },
        { tenant: Tenant.SPAIN, language: Language.SPANISH },
        { tenant: Tenant.ITALY, language: Language.ITALIAN },
    ].forEach(({ tenant, language }) => {
        test(`should 'dynamically' update the locale when we reset the language-tenant 'en-gb' to ${language}-${tenant}`, async () => {
            // Arrange
            const locale = JSON.parse(await readFile(new URL(`../../locales/${language}-${tenant}.json`, import.meta.url), { encoding: 'utf-8' }));
            await pieCookieBannerComponent.load(); // en-gb is the default locale

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

    test('should not update the locale if tenant and language properties are unchanged', async () => {
        // Arrange
        await pieCookieBannerComponent.load();

        // Act
        await pieCookieBannerComponent.setProperty('tenant', Tenant.UK);
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

    test('should fallback to the global default language-tenant \'en-gb\' if the language and/or tenant is unsupported/invalid', async () => {
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

    [
        { tenant: Tenant.SPAIN, unsupportedLang: Language.ENGLISH, fallbackLang: Language.SPANISH },
        { tenant: Tenant.FRANCE, unsupportedLang: Language.SPANISH, fallbackLang: Language.FRENCH },
        { tenant: Tenant.UK, unsupportedLang: Language.SPANISH, fallbackLang: Language.ENGLISH },
    ].forEach((obj) => {
        test(`should fallback to the default language-tenant '${obj.fallbackLang}-${obj.tenant}' if the supplied language '${obj.unsupportedLang}' is unsupported`, async () => {
            // Arrange
            const fallbackLocale = JSON.parse(await readFile(new URL(`../../locales/${obj.fallbackLang}-${obj.tenant}.json`, import.meta.url), { encoding: 'utf-8' }));
            await pieCookieBannerComponent.load({ tenant: obj.tenant, language: obj.unsupportedLang }); // supply an unsupported language

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
