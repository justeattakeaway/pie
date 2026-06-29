import { html } from 'lit';
import { action } from 'storybook/actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/cookie-banner';
import {
    type CookieBannerProps,
    Country,
    Language,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/cookie-banner';
import { createStory } from '../../utilities';

type CookieBannerStoryMeta = Meta<CookieBannerProps>;

const defaultArgs: CookieBannerProps = {
    ...defaultProps,
    cookieTechnologiesLink: `${Language.ENGLISH}/technologies`,
    cookieStatementLink: `${Language.ENGLISH}/cookiestatement`,
    defaultPreferences: {
        functional: false,
        personalized: false,
        analytical: false,
    },
    openLinksInSameTab: false,
};

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Cookie Banner',
    component: 'pie-cookie-banner',
    argTypes: {
        hasPrimaryActionsOnly: {
            description: 'When true, sets the variant to "primary" for the button which accepts necessary cookies only.',
            control: 'boolean',
        },
        country: {
            options: [...Object.values(Country), 'ru', 'pt', 'ES', 'invalid'], // Expanded to allow for unsupported value tests
            control: 'select',
            description: 'Assigns the country for the component',
            defaultValue: {
                summary: defaultProps.country,
            },
        },
        language: {
            options: [...Object.values(Language), 'ru', 'pt', 'CA', 'invalid'], // Expanded to allow for unsupported value tests
            control: 'select',
            description: 'Assigns the language for the component',
            defaultValue: {
                summary: defaultProps.language,
            },
        },
        defaultPreferences: {
            control: 'object',
        },
        openLinksInSameTab: {
            description: 'When true, external links will open in the same tab. When false (default), links open in a new browser tab.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.openLinksInSameTab,
            },
        },
        personalizedLabel: {
            description: 'An optional consumer override for the personalised preference label. When provided, this string replaces the locale-defined label for the personalised preference. Consumers can include plain text. When omitted or empty, the built-in locale string is used.',
            control: 'text',
            defaultValue: {
                summary: defaultProps.personalizedLabel,
            },
        },
        personalizedDescription: {
            description: 'An optional consumer override for the personalised preference description. Supports plain text or HTML anchor or `<pie-link>` tags (e.g. <a href="...">Privacy Policy</a>). When omitted or empty, the built-in locale string is used.',
            control: 'text',
            defaultValue: {
                summary: defaultProps.personalizedDescription,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
        componentStatusPosition: 'top',
    },
};

export default cookieBannerStoryMeta;

const necessaryOnlyAction = action('necessary-only');
const acceptAllAction = action('accept-all');
const managePrefsAction = action('manage-prefs');
const prefsSavedAction = action('prefs-saved');

const BaseStoryTemplate = (props: CookieBannerProps) => {
    const {
        hasPrimaryActionsOnly,
        country,
        language,
        cookieStatementLink,
        cookieTechnologiesLink,
        personalizedLabel,
        personalizedDescription,
        defaultPreferences,
        openLinksInSameTab,
    } = props;

    return html`
        <pie-cookie-banner
            country=${country}
            language=${language}
            .cookieStatementLink=${cookieStatementLink}
            .cookieTechnologiesLink=${cookieTechnologiesLink}
            .personalizedLabel=${personalizedLabel}
            .personalizedDescription=${personalizedDescription}
            ?hasPrimaryActionsOnly="${hasPrimaryActionsOnly}"
            .openLinksInSameTab="${openLinksInSameTab}"
            .defaultPreferences="${defaultPreferences}"
            @pie-cookie-banner-necessary-only="${necessaryOnlyAction}"
            @pie-cookie-banner-accept-all="${acceptAllAction}"
            @pie-cookie-banner-manage-prefs="${managePrefsAction}"
            @pie-cookie-banner-prefs-saved="${prefsSavedAction}"></pie-cookie-banner>`;
};

export const Default = createStory<CookieBannerProps>(BaseStoryTemplate, defaultArgs)();
