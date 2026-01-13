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

    /**
     * When true, external links (Cookie Statement, Cookie Technologies)
     * will open in the same tab (`target="_self"`).
     * When false (default), links open in a new browser tab (`target="_blank"`).
     */
    openLinksInSameTab?: boolean;
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
    openLinksInSameTab: false,
};

// Available locale files
export const availableLocales = new Set([
    `${Language.BULGARIAN}`,
    `${Language.DANISH}`,
    `${Language.ENGLISH}-${Country.FRANCE}`,
    `${Language.FRENCH}-${Country.FRANCE}`,
    `${Language.FRENCH}`,
    `${Language.GERMAN}`,
    `${Language.ENGLISH}`,
    `${Language.HEBREW}`,
    `${Language.ITALIAN}`,
    `${Language.DUTCH}`,
    `${Language.POLISH}`,
    `${Language.SLOVAK}`,
    `${Language.CATALAN}`,
    `${Language.SPANISH}`,
]);

// Map the default locale for each Country
export const defaultLocaleForCountry = new Map<CountryCode, string>([
    [Country.AUSTRALIA, `${Language.ENGLISH}`],
    [Country.AUSTRIA, `${Language.GERMAN}`],
    [Country.BELGIUM, `${Language.DUTCH}`],
    [Country.BULGARIA, `${Language.BULGARIAN}`],
    [Country.CANADA, `${Language.ENGLISH}`],
    [Country.DENMARK, `${Language.DANISH}`],
    [Country.FRANCE, `${Language.FRENCH}-${Country.FRANCE}`],
    [Country.GERMANY, `${Language.GERMAN}`],
    [Country.GREAT_BRITAIN, `${Language.ENGLISH}`],
    [Country.IRELAND, `${Language.ENGLISH}`],
    [Country.ISRAEL, `${Language.HEBREW}`],
    [Country.ITALY, `${Language.ITALIAN}`],
    [Country.LUXEMBOURG, `${Language.FRENCH}`],
    [Country.NETHERLANDS, `${Language.DUTCH}`],
    [Country.POLAND, `${Language.POLISH}`],
    [Country.SLOVAKIA, `${Language.SLOVAK}`],
    [Country.SPAIN, `${Language.SPANISH}`],
    [Country.SWITZERLAND, `${Language.GERMAN}`],
]);
