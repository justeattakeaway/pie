import { type TemplateResult } from 'lit';
import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

export enum Language {
    BULGARIAN = 'bg',
    CATALAN = 'ca',
    DANISH = 'da',
    DUTCH = 'nl',
    ENGLISH = 'en',
    FRENCH = 'fr',
    GERMAN = 'de',
    HEBREW = 'he',
    ITALIAN = 'it',
    POLISH = 'pl',
    SLOVAK = 'sk',
    SPANISH = 'es',
}

export enum Tenant {
    BULGARIA = 'bg',
    DENMARK = 'dk',
    FRANCE = 'fr',
    GERMANY = 'de',
    GREAT_BRITAIN = 'gb',
    ISRAEL = 'il',
    ITALY = 'it',
    NETHERLANDS = 'nl',
    POLAND = 'pl',
    SLOVAKIA = 'sk',
    SPAIN = 'es',
    UK = 'gb',
}

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
     * Assigns the tenant used for dynamically localising the component strings
     */
    tenant: Tenant;

    /**
     * Assigns the language used for dynamically localising the component strings
     */
    language: Language;

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
    tenant: Tenant.GREAT_BRITAIN,
    language: Language.ENGLISH,
    cookieStatementLink: '',
    cookieTechnologiesLink: '',
};

export const getDefaultLanguageForTenant = (tenant: Tenant): Language => {
    switch (tenant) {
        case Tenant.GREAT_BRITAIN:
            return Language.ENGLISH;
        case Tenant.FRANCE:
            return Language.FRENCH;
        case Tenant.DENMARK:
            return Language.DANISH;
        case Tenant.SPAIN:
            return Language.SPANISH;
        case Tenant.ITALY:
            return Language.ITALIAN;
        case Tenant.NETHERLANDS:
            return Language.DUTCH;
        case Tenant.POLAND:
            return Language.POLISH;
        case Tenant.SLOVAKIA:
            return Language.SLOVAK;
        case Tenant.BULGARIA:
            return Language.BULGARIAN;
        case Tenant.GERMANY:
            return Language.GERMAN;
        case Tenant.ISRAEL:
            return Language.HEBREW;
        default:
            return defaultProps.language;
    }
};
