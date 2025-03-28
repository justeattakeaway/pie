declare module '@justeattakeaway/pie-cookie-banner/locales/*.js' {
    export interface CookieBannerLocale {
        banner: {
            title: string;
            description: string;
            cta: {
                managePreferences: string;
                necessaryOnly: string;
                acceptAll: string;
            };
        };
        preferencesManagement: {
            title: string;
            description: string;
            all: {
                title: string;
            };
            necessary: {
                title: string;
                description: string;
            };
            functional: {
                title: string;
                description: string;
            };
            analytical: {
                title: string;
                description: string;
            };
            personalized: {
                title: string;
                description: string;
            };
            cta: {
                save: {
                label: string;
                ariaLabel: string;
                };
            };
        };
    }

    const locale: CookieBannerLocale;
    export default locale;
}
