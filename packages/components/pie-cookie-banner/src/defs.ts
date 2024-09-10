import { type TemplateResult } from 'lit';
import { type ComponentDefaultProps } from '@justeattakeaway/pie-webc-core';

import defaultLocale from '../locales/en-gb.json' assert { type: 'json' };

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
    tenant: string;

    /**
     * Assigns the language used for dynamically localising the component strings
     */
    language: string;

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
    locale: defaultLocale,
    tenant: 'gb',
    language: 'en',
    cookieStatementLink: '',
    cookieTechnologiesLink: '',
};
