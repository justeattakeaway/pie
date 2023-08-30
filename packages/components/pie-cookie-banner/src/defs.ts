// TODO - please remove the eslint disable comment below when you add props to this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CookieBannerProps {}

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
export const ON_COOKIE_BANNER_SAVE_PREFS = 'pie-cookie-banner-save-prefs';

export interface Preference {
    id: string;
    title: string;
    description?: string;
    isDisabled?: boolean,
    isChecked?: boolean,
    hasDivider?: boolean
}

export const TURN_ALL_PREFERENCES_ID = 'all';

export const PREFERENCES: Preference[] = [
    {
        id: TURN_ALL_PREFERENCES_ID,
        title: 'Turn on all',
        hasDivider: true,
    },
    {
        id: 'necessary',
        title: 'Necessary',
        description: 'These cookies are necessary to ensure that the website and its features function properly. Services you have asked for cannot be provided without these cookies.',
        isDisabled: true,
        isChecked: true,
    },
    {
        id: 'functional',
        title: 'Functional',
        description: 'These cookies allow the website to remember the choices you make to give you better functionality and personal features.',
    },
    {
        id: 'analytical',
        title: 'Analytical',
        description: 'These analytical cookies, including statistics, are used to understand how visitors interact with the website and we can measure and improve the performance of our website.',
    },
    {
        id: 'personalized',
        title: 'Personalized (targeting and advertising)',
        description: 'These marketing cookies are used to tailor the delivery of information to you based upon your interest and to measure the effectiveness of such advertisements, both on our website and our advertising partners\' websites.',
    }];
