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
 *
 * The modal uses `<dialog>.showModal()`, which places it in the browser's
 * top layer — a special layer that always renders above all regular CSS
 * stacking contexts, including `position: fixed` elements with high z-index.
 * The cookie banner uses `position: fixed` with `z-index`, so the modal
 * blocks access to it entirely.
 */
const ModalStackingIssueStoryTemplate = (props: CookieBannerProps) => html`
    ${BaseStoryTemplate(props)}
    <div style="padding: var(--dt-spacing-e);">
        <h1>Cookie Banner + Modal Stacking Issue (DSW-3700)</h1>
        <p>
            This story demonstrates the stacking context issue where a modal
            opens on a page that already has the cookie banner visible.
            The modal's <code>showModal()</code> places it in the browser's top layer,
            which always renders above <code>position: fixed</code> elements regardless
            of <code>z-index</code>. The cookie banner is hidden behind the modal.
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
        <p>The cookie banner is rendered on this page but hidden behind this modal
        because the browser's top layer always sits above <code>position: fixed</code>
        elements. There is no CSS workaround — <code>z-index</code> has no effect
        against the top layer.</p>
    </pie-modal>`;

export const Default = createStory<CookieBannerProps>(BaseStoryTemplate, defaultArgs)();
export const ScrollablePage = createStory<CookieBannerProps>(ScrollablePageStoryTemplate, defaultArgs)();
export const ModalStackingIssue = createStory<CookieBannerProps>(ModalStackingIssueStoryTemplate, defaultArgs)();

/**
 * Demonstrates the `nonModal` prop fix for DSW-3700.
 *
 * The modal uses `dialog.show()` instead of `dialog.showModal()`, keeping it
 * in the regular stacking context. The cookie banner's higher `z-index` (5000
 * vs the modal's 4000) means it naturally renders above the modal and its
 * custom backdrop, and is fully interactive.
 */
const ModalStackingFixStoryTemplate = (props: CookieBannerProps) => html`
    ${BaseStoryTemplate(props)}
    <div style="padding: var(--dt-spacing-e);">
        <h1>Cookie Banner + Modal Stacking Fix (DSW-3700)</h1>
        <p>
            The modal has <code>nonModal</code> set, so it uses
            <code>dialog.show()</code> instead of <code>dialog.showModal()</code>.
            This keeps the modal in the regular stacking context where
            <code>z-index</code> applies. The cookie banner (z-index 5000) appears
            above the modal (z-index 4000) and is fully interactive.
        </p>
    </div>
    <pie-modal
        heading="Example Modal"
        headingLevel="h2"
        ?isDismissible="${false}"
        ?isOpen="${true}"
        ?nonModal="${true}"
        .leadingAction=${{ text: 'Confirm', variant: 'primary' }}
        .supportingAction=${{ text: 'Cancel', variant: 'ghost' }}
        .aria=${{ close: 'Close', loading: 'Loading' }}>
        <p>This modal uses the <code>nonModal</code> prop. The cookie banner should
        be visible and interactive above the modal and its backdrop.</p>
    </pie-modal>`;

export const ModalStackingFix = createStory<CookieBannerProps>(ModalStackingFixStoryTemplate, defaultArgs)();
