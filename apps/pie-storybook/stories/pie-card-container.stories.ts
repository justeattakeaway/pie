import { nothing } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import {
    PieCardContainer, CardContainerProps as CardContainerPropsBase, variants,
} from '@justeattakeaway/pie-card-container';
import type { StoryMeta, SlottedComponentProps } from '../types';
import { TemplateFunction } from '../types/StoryOptions';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieCardContainer];

type CardContainerProps = SlottedComponentProps<CardContainerPropsBase>;
type CardContainerStoryMeta = StoryMeta<CardContainerProps>;

const defaultArgs: CardContainerProps = {
    variant: 'default',
    href: '',
    disabled: false,
    rel: '',
    target: '',
    aria: {
        linkLabel: 'Click to go to restaurant',
    },
    // This is just an arbitrary example of some markup a user may pass into the card
    slot: `<div style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-m-family); padding: var(--dt-spacing-b);">
        <h2> Card title </h2>
        <p> Card content </p>
        <p> Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Fugiat dolore dolorem maxime,
        quod, in minima esse fugit
        distinctio, officia et soluta
        dicta consequuntur commodi officiis
        tempora asperiores aspernatur atque quas.</p>
    </div>`,
};

const cardContainerStoryMeta: CardContainerStoryMeta = {
    title: 'Card Container',
    component: 'pie-card-container',
    argTypes: {
        variant: {
            description: 'Set the variant of the card.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'default',
            },
        },
        disabled: {
            description: 'If `true`, disables the card.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        href: {
            description: 'The URL that the card should point to (this will not take effect unless the card is a link).',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        target: {
            description: 'Where to display the linked URL such as _self, _blank, _parent or _top (this will not take effect unless the card is a link).',
            control: 'text',
        },
        rel: {
            description: 'What the relationship of the linked URL is (this will not take effect unless the card is a link).',
            control: 'text',
        },
        slot: {
            description: 'Content to place within the card container',
            control: 'text',
        },
        aria: {
            description: 'The ARIA labels used for various parts of the card.',
            control: 'object',
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

export default cardContainerStoryMeta;

const Template: TemplateFunction<CardContainerProps> = ({
    href,
    target,
    rel,
    disabled,
    slot,
    aria,
    variant,
}) => html`
        <pie-card-container
            variant="${variant}"
            href="${href || nothing}"
            target="${target || nothing}"
            rel="${rel || nothing}"
            ?disabled="${disabled}"
            .aria="${aria}">
            ${unsafeStatic(slot)}
        </pie-card-container>
    `;

const createCardContainerStory = createStory<CardContainerProps>(Template, defaultArgs);

export const Default = createCardContainerStory();
