import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-cookie-banner';
import { type CookieBannerProps, defaultProps } from '@justeattakeaway/pie-cookie-banner';
import { Tenant, Language } from '@justeattakeaway/pie-cookie-banner/src/defs';
import { createStory } from '../utilities';

type CookieBannerStoryMeta = Meta<CookieBannerProps>;

const defaultArgs: CookieBannerProps = {
    ...defaultProps,
    cookieTechnologiesLink: 'en/technologies',
    cookieStatementLink: 'en/cookiestatement',
    defaultPreferences: {
        functional: true,
        personalized: true,
        analytical: true,
    },
};

const TenantReverseMapping = Object.fromEntries(Object.entries(Tenant).map(([key, value]) => [value, key]));

const LanguageReverseMapping = Object.fromEntries(Object.entries(Language).map(([key, value]) => [value, key]));

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Cookie Banner',
    component: 'pie-cookie-banner',
    argTypes: {
        hasPrimaryActionsOnly: {
            description: 'When true, sets the variant to "primary" for the button which accepts necessary cookies only.',
            control: 'boolean',
        },
        tenant: {
            options: Tenant,
            control: 'select',
            description: 'Assigns the country for the component',
            defaultValue: {
                summary: TenantReverseMapping[defaultProps.tenant],
            },
        },
        language: {
            options: Language,
            control: 'select',
            description: 'Assigns the language for the component',
            defaultValue: {
                summary: LanguageReverseMapping[defaultProps.language],
            },
        },
        defaultPreferences: {
            control: 'object',
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
        tenant,
        language,
        cookieStatementLink,
        cookieTechnologiesLink,
        defaultPreferences,
    } = props;

    return html`
        <pie-cookie-banner
            .tenant=${tenant}
            .language=${language}
            .cookieStatementLink=${cookieStatementLink}
            .cookieTechnologiesLink=${cookieTechnologiesLink}
            ?hasPrimaryActionsOnly="${hasPrimaryActionsOnly}"
            .defaultPreferences="${defaultPreferences}"
            @pie-cookie-banner-necessary-only="${necessaryOnlyAction}"
            @pie-cookie-banner-accept-all="${acceptAllAction}"
            @pie-cookie-banner-manage-prefs="${managePrefsAction}"
            @pie-cookie-banner-prefs-saved="${prefsSavedAction}"></pie-cookie-banner>`;
};

/**
 * Creates a 'page' of scrollable HTML. Useful for testing scroll behaviours in a Story.
 */
const createScrollablePageHTML = () => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p>Test copy</p>
        <ul>${items}</ul>`;
};

const ScrollablePageStoryTemplate = (props: CookieBannerProps) => html`
    ${BaseStoryTemplate(props)}
    ${createScrollablePageHTML()}`;

export const Default = createStory<CookieBannerProps>(BaseStoryTemplate, defaultArgs)();
export const ScrollablePage = createStory<CookieBannerProps>(ScrollablePageStoryTemplate, defaultArgs)();
