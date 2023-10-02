import { nothing } from 'lit';
import { html } from 'lit/static-html.js';
import {
    PieCardContainer, CardContainerProps as CardContainerPropsBase,
    variants, interactionTypes, padding,
} from '@justeattakeaway/pie-card-container';
import type { StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, staticSlot } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieCardContainer];

type CardContainerProps = SlottedComponentProps<CardContainerPropsBase>;
type CardContainerStoryMeta = StoryMeta<CardContainerProps>;

const defaultArgs: CardContainerProps = {
    interactionType: 'none',
    variant: 'default',
    href: '#',
    disabled: false,
    rel: '',
    target: '',
    aria: {
        label: 'Click to go to restaurant',
    },
    padding: '',
    isDraggable: false,
    // This is just an arbitrary example of some markup a user may pass into the card
    slot: `<div style="color: var(--card-color); font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-m-family); padding: var(--dt-spacing-b);">
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
        interactionType: {
            description: 'Set the interaction type of the card container.',
            control: 'select',
            options: interactionTypes,
            defaultValue: {
                summary: 'none',
            },
        },
        variant: {
            description: 'Set the variant of the card.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'default',
            },
        },
        padding: {
            description: 'Set the padding of the card.',
            control: {
                type: 'text',
            },
            options: padding,
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
            if: { arg: 'interactionType', eq: 'anchor' },
        },
        target: {
            description: 'Where to display the linked URL such as _self, _blank, _parent or _top (this will not take effect unless the card is a link).',
            control: 'text',
            if: { arg: 'interactionType', eq: 'anchor' },
        },
        rel: {
            description: 'What the relationship of the linked URL is (this will not take effect unless the card is a link).',
            control: 'text',
            if: { arg: 'interactionType', eq: 'anchor' },
        },
        slot: {
            description: 'Content to place within the card container',
            control: 'text',
        },
        aria: {
            description: 'The ARIA labels used for various parts of the card.',
            control: 'object',
        },
        isDraggable: {
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
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
    interactionType,
    href,
    target,
    rel,
    disabled,
    slot,
    aria,
    variant,
    padding,
    isDraggable,
}) => {
    const darkMode = variant.includes('inverse');

    return html`
    <div style="--card-color: var(--dt-color-content-${darkMode ? 'light' : 'default'})">
        <pie-card-container
            interactionType="${interactionType}"
            variant="${variant}"
            href="${href || nothing}"
            target="${target || nothing}"
            rel="${rel || nothing}"
            ?disabled="${disabled}"
            .aria="${aria}"
            padding="${padding || nothing}"
            ?isDraggable="${isDraggable}">
                ${staticSlot(slot)}
            </pie-card-container>
    </div>
    `;
};

const createCardContainerStory = createStory<CardContainerProps>(Template, defaultArgs);

export const Default = createCardContainerStory();
export const Outline = createCardContainerStory({ variant: 'outline' });
export const Inverse = createCardContainerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const OutlineInverse = createCardContainerStory({ variant: 'outline-inverse' }, { bgColor: 'dark (container-dark)' });
