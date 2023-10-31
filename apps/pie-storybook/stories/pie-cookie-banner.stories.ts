import { html, TemplateResult } from 'lit';
import { action } from '@storybook/addon-actions';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-cookie-banner';
import { CookieBannerProps } from '@justeattakeaway/pie-cookie-banner';
/* eslint-enable import/no-duplicates */
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-modal';
import '@justeattakeaway/pie-switch';

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type CookieBannerStoryMeta = StoryMeta<CookieBannerProps>;

const defaultArgs: CookieBannerProps = {
    hasPrimaryActionsOnly: false,
};

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Cookie Banner',
    component: 'pie-cookie-banner',
    argTypes: {
        hasPrimaryActionsOnly: {
            description: 'When true, sets the variant to "primary" for the button which accepts necessary cookies only.',
            control: 'boolean',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default cookieBannerStoryMeta;

const necessaryOnlyAction = action('necessary-only');
const acceptAllAction = action('accept-all');
const managePrefsAction = action('manage-prefs');
const prefsSavedAction = action('prefs-saved');

const BaseStoryTemplate = (props: CookieBannerProps) : TemplateResult => {
    const { hasPrimaryActionsOnly } = props;
    return html`
        <pie-cookie-banner
            ?hasPrimaryActionsOnly="${hasPrimaryActionsOnly}"
            @pie-cookie-banner-necessary-only="${necessaryOnlyAction}"
            @pie-cookie-banner-accept-all="${acceptAllAction}"
            @pie-cookie-banner-manage-prefs="${managePrefsAction}"
            @pie-cookie-banner-prefs-saved="${prefsSavedAction}"></pie-cookie-banner>`;
};

/**
 * Creates a 'page' of scrollable HTML. Useful for testing scroll behaviours in a Story.
 */
const createScrollablePageHTML = () : TemplateResult => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p>Test copy</p>
        <ul>${items}</ul>`;
};

const ScrollablePageStoryTemplate = (props: CookieBannerProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createScrollablePageHTML()}`;

export const Default = createStory<CookieBannerProps>(BaseStoryTemplate, defaultArgs)();
export const ScrollablePage = createStory<CookieBannerProps>(ScrollablePageStoryTemplate, defaultArgs)();
