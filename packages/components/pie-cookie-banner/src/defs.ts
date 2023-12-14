import {
    TemplateResult,
} from 'lit';

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
     * Assigns the data for localising the component strings
     */
    locale: CookieBannerLocale;
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
    isDisabled?: boolean;
    checked?: boolean;
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
        isDisabled: true,
        checked: true,
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
