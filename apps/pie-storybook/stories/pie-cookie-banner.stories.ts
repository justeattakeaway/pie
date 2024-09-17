import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import '@justeattakeaway/pie-cookie-banner';
import { type CookieBannerProps, defaultProps } from '@justeattakeaway/pie-cookie-banner';
import pieCookieBannerLocales from '@justeattakeaway/pie-cookie-banner/locales';

import { type Meta } from '../types';
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

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Cookie Banner',
    component: 'pie-cookie-banner',
    argTypes: {
        hasPrimaryActionsOnly: {
            description: 'When true, sets the variant to "primary" for the button which accepts necessary cookies only.',
            control: 'boolean',
        },
        locale: {
            options: Object.keys(pieCookieBannerLocales),
            mapping: pieCookieBannerLocales,
            description: 'Assigns the data for localising the component strings',
            defaultValue: {
                summary: defaultProps.locale,
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
        locale,
        cookieStatementLink,
        cookieTechnologiesLink,
        defaultPreferences,
    } = props;

    return html`
        <pie-cookie-banner
            .locale=${locale}
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
