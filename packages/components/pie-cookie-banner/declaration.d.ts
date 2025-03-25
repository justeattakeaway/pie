declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss?inline' {
    const content: Record<string, string>;
    export default content;
}

// This is a placeholder value that is swapped out
// with the component package.json version at build time by Vite.
declare const __PACKAGE_VERSION__: string;

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
