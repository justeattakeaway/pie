import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/cookie-banner';
import {
    type CookieBannerProps,
    Country,
    Language,
    defaultProps,
} from '@justeattakeaway/pie-webc/components/cookie-banner';

import '@justeattakeaway/pie-webc/components/modal';

import { createStory } from '../utilities';

type CookieBannerStoryMeta = Meta<CookieBannerProps>;

const defaultArgs: CookieBannerProps = {
    ...defaultProps,
    cookieTechnologiesLink: `${Language.ENGLISH}/technologies`,
    cookieStatementLink: `${Language.ENGLISH}/cookiestatement`,
    defaultPreferences: {
        functional: true,
        personalized: true,
        analytical: true,
    },
    openLinksInSameTab: false,
};

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Components/Cookie Banner',
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
        defaultPreferences,
        openLinksInSameTab,
    } = props;

    return html`
        <pie-cookie-banner
            country=${country}
            language=${language}
            .cookieStatementLink=${cookieStatementLink}
            .cookieTechnologiesLink=${cookieTechnologiesLink}
            ?hasPrimaryActionsOnly="${hasPrimaryActionsOnly}"
            .openLinksInSameTab="${openLinksInSameTab}"
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

/**
 * Demonstrates the stacking context issue (DSW-3700) where a pie-modal
 * opens on a page that already has pie-cookie-banner rendered.
 * The modal's top-layer stacking causes it to appear above the cookie banner,
 * preventing users from interacting with cookie preferences.
 */
const ModalStackingIssueStoryTemplate = (props: CookieBannerProps) => html`
    ${BaseStoryTemplate(props)}
    <div style="padding: var(--dt-spacing-e);">
        <h1>Cookie Banner + Modal Stacking Issue</h1>
        <p>
            This story demonstrates the stacking context issue where a modal
            opens on a page that already has the cookie banner visible.
            The modal appears above the cookie banner, preventing users from
            interacting with cookie preferences.
        </p>
    </div>
    <pie-modal
        heading="Example Modal"
        headingLevel="h2"
        ?isDismissible="${false}"
        ?isOpen="${true}"
        .leadingAction=${{ text: 'Confirm', variant: 'primary' }}
        .supportingAction=${{ text: 'Cancel', variant: 'ghost' }}
        .aria=${{ close: 'Close', loading: 'Loading' }}>
        <p>This modal content should appear below the cookie banner in the stacking context,
        but currently the modal's top-layer positioning causes it to render above the cookie banner.</p>
    </pie-modal>`;

export const Default = createStory<CookieBannerProps>(BaseStoryTemplate, defaultArgs)();
export const ScrollablePage = createStory<CookieBannerProps>(ScrollablePageStoryTemplate, defaultArgs)();
export const ModalStackingIssue = createStory<CookieBannerProps>(ModalStackingIssueStoryTemplate, defaultArgs)();
