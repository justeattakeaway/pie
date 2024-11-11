import { type TemplateResult } from 'lit';
import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export const Language: {
    readonly [key: string]: string;
} = {
    BULGARIAN: 'bg',
    CATALAN: 'ca',
    DANISH: 'da',
    DUTCH: 'nl',
    ENGLISH: 'en',
    FRENCH: 'fr',
    GERMAN: 'de',
    HEBREW: 'he',
    ITALIAN: 'it',
    POLISH: 'pl',
    SLOVAK: 'sk',
    SPANISH: 'es',
};

export const Country: {
    readonly [key: string]: string;
} = {
    AUSTRALIA: 'au',
    AUSTRIA: 'at',
    BELGIUM: 'be',
    BULGARIA: 'bg',
    CANADA: 'ca',
    DENMARK: 'dk',
    FRANCE: 'fr',
    GERMANY: 'de',
    GREAT_BRITAIN: 'gb',
    IRELAND: 'ie',
    ISRAEL: 'il',
    ITALY: 'it',
    LUXEMBOURG: 'lu',
    NETHERLANDS: 'nl',
    POLAND: 'pl',
    SLOVAKIA: 'sk',
    SPAIN: 'es',
    SWITZERLAND: 'ch',
};

export type LanguageCode = typeof Language[keyof typeof Language];

export type CountryCode = typeof Country[keyof typeof Country];

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
            }
        };
    };
}

export interface CookieBannerProps {
    /**
     * When true, sets the variant to "primary" for the button which accepts necessary cookies only.
     */
    hasPrimaryActionsOnly: boolean;

    /**
     * The URL of the cookie statement page the banner should link to.
     */
    cookieStatementLink: string;

    /**
     * The URL for the cookie technology link.
     */
    cookieTechnologiesLink: string;

    /**
     * Assigns the country used for dynamically localising the component strings
     */
    country: CountryCode;

    /**
     * Assigns the language used for dynamically localising the component strings
     */
    language: LanguageCode;

    /**
     * Allows consumers to pass in specific preference(s) to the component which will toggle
     * the switch to be on by default (if set to `true`).
     *
     * e.g. { 'functional': true }
     * or { 'functional': true, 'personalized': true, 'analytical': true }
     */
    defaultPreferences?: Partial<Record<PreferenceIds, boolean>>;
}

/**
 * Event name for when all cookies are accepted.
 *
 * @constant
 */
export const ON_COOKIE_BANNER_ACCEPT_ALL = 'pie-cookie-banner-accept-all';

/**
 * Event name for when all only necessary cookies are accepted.
 *
 * @constant
 */
export const ON_COOKIE_BANNER_NECESSARY_ONLY = 'pie-cookie-banner-necessary-only';

/**
 * Event name for when a user clicks manage preferences.
 *
 * @constant
 */
export const ON_COOKIE_BANNER_MANAGE_PREFS = 'pie-cookie-banner-manage-prefs';

/**
 * Event name for when a user clicks save preferences.
 *
 * @constant
 */
export const ON_COOKIE_BANNER_PREFS_SAVED = 'pie-cookie-banner-prefs-saved';

export type PreferenceIds = 'all' | 'necessary' | 'functional' | 'analytical' | 'personalized';

export interface Preference {
    id: PreferenceIds;
    checked?: boolean;
    disabled?: boolean;
    hasDivider?: boolean;
    hasDescription?: boolean;
}

export const preferences: Preference[] = [
    {
        id: 'all',
        hasDivider: true,
        hasDescription: false,
    },
    {
        id: 'necessary',
        checked: true,
        disabled: true,
        hasDescription: true,
    },
    {
        id: 'functional',
        hasDescription: true,
    },
    {
        id: 'analytical',
        hasDescription: true,
    },
    {
        id: 'personalized',
        hasDescription: true,
    }
];

export interface CustomTagEnhancers {
    [key: string]: (tagContent: string) => TemplateResult;
}

export type DefaultProps = ComponentDefaultProps<CookieBannerProps>;

export const defaultProps: DefaultProps = {
    hasPrimaryActionsOnly: false,
    defaultPreferences: {},
    country: Country.GREAT_BRITAIN,
    language: Language.ENGLISH,
    cookieStatementLink: '',
    cookieTechnologiesLink: '',
};

// Available locale files
export const availableLocales = new Set([
    `${Language.BULGARIAN}-${Country.BULGARIA}`,
    `${Language.DANISH}-${Country.DENMARK}`,
    `${Language.ENGLISH}-${Country.FRANCE}`,
    `${Language.FRENCH}-${Country.FRANCE}`,
    `${Language.GERMAN}-${Country.GERMANY}`,
    `${Language.ENGLISH}-${Country.GREAT_BRITAIN}`,
    `${Language.HEBREW}-${Country.ISRAEL}`,
    `${Language.ITALIAN}-${Country.ITALY}`,
    `${Language.DUTCH}-${Country.NETHERLANDS}`,
    `${Language.POLISH}-${Country.POLAND}`,
    `${Language.SLOVAK}-${Country.SLOVAKIA}`,
    `${Language.CATALAN}-${Country.SPAIN}`,
    `${Language.SPANISH}-${Country.SPAIN}`,
]);

// Map of preferred default locales for each language
export const preferredLocaleForLanguage = new Map<LanguageCode, string>([
    [Language.BULGARIAN, `${Language.BULGARIAN}-${Country.BULGARIA}`],
    [Language.CATALAN, `${Language.CATALAN}-${Country.SPAIN}`],
    [Language.DANISH, `${Language.DANISH}-${Country.DENMARK}`],
    [Language.DUTCH, `${Language.DUTCH}-${Country.NETHERLANDS}`],
    [Language.ENGLISH, `${Language.ENGLISH}-${Country.GREAT_BRITAIN}`],
    [Language.FRENCH, `${Language.FRENCH}-${Country.FRANCE}`],
    [Language.GERMAN, `${Language.GERMAN}-${Country.GERMANY}`],
    [Language.HEBREW, `${Language.HEBREW}-${Country.ISRAEL}`],
    [Language.ITALIAN, `${Language.ITALIAN}-${Country.ITALY}`],
    [Language.POLISH, `${Language.POLISH}-${Country.POLAND}`],
    [Language.SLOVAK, `${Language.SLOVAK}-${Country.SLOVAKIA}`],
    [Language.SPANISH, `${Language.SPANISH}-${Country.SPAIN}`],
]);

// Map of preferred default locales for each Country
export const preferredLocaleForCountry = new Map<CountryCode, string>([
    [Country.AUSTRALIA, `${Language.ENGLISH}-${Country.GREAT_BRITAIN}`],
    [Country.AUSTRIA, `${Language.GERMAN}-${Country.GERMANY}`],
    [Country.BELGIUM, `${Language.FRENCH}-${Country.FRANCE}`],
    [Country.BULGARIA, `${Language.BULGARIAN}-${Country.BULGARIA}`],
    [Country.CANADA, `${Language.ENGLISH}-${Country.GREAT_BRITAIN}`],
    [Country.DENMARK, `${Language.DANISH}-${Country.DENMARK}`],
    [Country.FRANCE, `${Language.FRENCH}-${Country.FRANCE}`],
    [Country.GERMANY, `${Language.GERMAN}-${Country.GERMANY}`],
    [Country.GREAT_BRITAIN, `${Language.ENGLISH}-${Country.GREAT_BRITAIN}`],
    [Country.IRELAND, `${Language.ENGLISH}-${Country.GREAT_BRITAIN}`],
    [Country.ISRAEL, `${Language.HEBREW}-${Country.ISRAEL}`],
    [Country.ITALY, `${Language.ITALIAN}-${Country.ITALY}`],
    [Country.LUXEMBOURG, `${Language.FRENCH}-${Country.FRANCE}`],
    [Country.NETHERLANDS, `${Language.DUTCH}-${Country.NETHERLANDS}`],
    [Country.POLAND, `${Language.POLISH}-${Country.POLAND}`],
    [Country.SLOVAKIA, `${Language.SLOVAK}-${Country.SLOVAKIA}`],
    [Country.SPAIN, `${Language.SPANISH}-${Country.SPAIN}`],
    [Country.SWITZERLAND, `${Language.GERMAN}-${Country.GERMANY}`],
]);
