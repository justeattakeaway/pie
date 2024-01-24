import { nothing } from 'lit';
import { html } from 'lit/static-html.js';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-card';
import {
    CardProps as CardPropsBase, variants, tags, paddingValues,
} from '@justeattakeaway/pie-card';
/* eslint-enable import/no-duplicates */

import type { StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type CardProps = SlottedComponentProps<CardPropsBase>;
type CardStoryMeta = StoryMeta<CardProps>;

const defaultArgs: CardProps = {
    tag: 'button',
    variant: 'default',
    href: '#',
    padding: 'a',
    disabled: false,
    rel: '',
    target: '',
    aria: {
        label: 'Click to go to restaurant',
    },
    isDraggable: false,
    // This is just an arbitrary example of some markup a user may pass into the card
    slot: `<div style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-m-family);">
        <h2 style="margin-top: 0"> Card title </h2>
        <p> Card content </p>
        <p style="margin-bottom: 0"> Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Fugiat dolore dolorem maxime,
        quod, in minima esse fugit
        distinctio, officia et soluta
        dicta consequuntur commodi officiis
        tempora asperiores aspernatur atque quas.</p>
    </div>`,
};

const cardStoryMeta: CardStoryMeta = {
    title: 'Card',
    component: 'pie-card',
    argTypes: {
        tag: {
            description: 'Set the HTML tag of the card.',
            control: 'select',
            options: tags,
            defaultValue: {
                summary: 'button',
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
            description: `Set the padding of the card. <br/> Can be either a single value or two values separated by a comma (paddingX, paddingY) e.g 'a' or 'a,b'.
            <br /> valid values are: \`${paddingValues.filter((i) => !i.includes(',')).join(', ')}\``,
            control: {
                type: 'text',
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
            if: { arg: 'tag', eq: 'a' },
        },
        target: {
            description: 'Where to display the linked URL such as _self, _blank, _parent or _top (this will not take effect unless the card is a link).',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        rel: {
            description: 'What the relationship of the linked URL is (this will not take effect unless the card is a link).',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        slot: {
            description: 'Content to place within the card',
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

export default cardStoryMeta;

const Template: TemplateFunction<CardProps> = ({
    tag,
    href,
    target,
    rel,
    disabled,
    slot,
    aria,
    variant,
    padding,
    isDraggable,
}) => html`
        <pie-card
            tag="${tag}"
            variant="${variant}"
            href="${href || nothing}"
            target="${target || nothing}"
            rel="${rel || nothing}"
            ?disabled="${disabled}"
            .aria="${aria}"
            padding="${padding || nothing}"
            ?isDraggable="${isDraggable}">
                ${sanitizeAndRenderHTML(slot)}
            </pie-card>`;

const createCardStory = createStory<CardProps>(Template, defaultArgs);

export const Default = createCardStory();
export const Outline = createCardStory({ variant: 'outline' });
export const Inverse = createCardStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const OutlineInverse = createCardStory({ variant: 'outline-inverse' }, { bgColor: 'dark (container-dark)' });
