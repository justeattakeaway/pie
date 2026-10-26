import { nothing } from 'lit';
import { html } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';
import { action } from 'storybook/actions';

import '@justeattakeaway/pie-webc/components/card';
import {
    type CardProps as CardPropsBase, variants, tags, paddingValues, defaultProps,
} from '@justeattakeaway/pie-webc/components/card';
import '@justeattakeaway/pie-webc/components/icon-button';
import '@justeattakeaway/pie-webc/components/link';
import '@justeattakeaway/pie-webc/components/modal';
import { type PieModal } from '@justeattakeaway/pie-webc/components/modal';
import '@justeattakeaway/pie-icons-webc/dist/IconHeart.js';
import '@justeattakeaway/pie-icons-webc/dist/IconHeartFilled.js';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

type CardProps = SlottedComponentProps<CardPropsBase>;
type CardStoryMeta = Meta<CardProps>;

const defaultArgs: CardProps = {
    ...defaultProps,
    href: '',
    padding: '' as CardProps['padding'],
    rel: '',
    target: '',
    aria: {
        label: 'Click to go to restaurant',
    },
    // This is just an arbitrary example of some markup a user may pass into the card
    slot: ` <div data-test-id="slot-content" style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
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
                summary: defaultProps.tag,
            },
        },
        variant: {
            description: 'Set the variant of the card.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
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
                summary: defaultProps.disabled,
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
            description: 'ARIA attributes applied to the card\'s interactive element (the overlay button when tag is "button", otherwise the anchor). Offers label, description, haspopup and expanded.',
            control: 'object',
        },
        isDraggable: {
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isDraggable,
            },
        },
    },
    args: defaultArgs,
};

export default cardStoryMeta;

const clickAction = action('clicked');

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
}) => {
    const isButton = tag === 'button';

    return html`
        <pie-card
            tag="${ifDefined(tag)}"
            variant="${ifDefined(variant)}"
            href="${href || nothing}"
            target="${target || nothing}"
            rel="${rel || nothing}"
            ?disabled="${disabled}"
            .aria="${aria}"
            padding="${padding || nothing}"
            ?isDraggable="${isDraggable}"
            @click="${isButton ? clickAction : nothing}">
                ${sanitizeAndRenderHTML(slot)}
            </pie-card>`;
};

const createCardStory = createStory<CardProps>(Template, defaultArgs);

export const Default = createCardStory();
export const Outline = createCardStory({ variant: 'outline' });
export const Inverse = createCardStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
export const OutlineInverse = createCardStory({ variant: 'outline-inverse' }, { bgColor: 'dark (container-dark)' });
export const CardWithImage = createCardStory({
    ...defaultArgs,
    slot: `<div data-test-id="slot-content" style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
        <h2 style="margin-top: 0"> Card title </h2>
        <p> Card content </p>
        <p style="margin-bottom: 0"> Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Fugiat dolore dolorem maxime,
        quod, in minima esse fugit
        distinctio, officia et soluta
        dicta consequuntur commodi officiis
        tempora asperiores aspernatur atque quas.</p>
        <img src="./static/images/pie-logo.svg" alt="PIE logo" />
    </div>`,
});

const WithSlottedControlsTemplate: TemplateFunction<CardProps> = ({ disabled }) => {
    const openRestaurantModal = () => {
        const modal = document.querySelector('#restaurant-modal') as PieModal | null;
        if (modal) modal.isOpen = true;
    };

    const toggleFavourited = (event: Event) => {
        const iconButton = event.currentTarget as HTMLElement & { aria?: { label?: string } };
        const outlineIcon = iconButton.querySelector('icon-heart');
        const filledIcon = iconButton.querySelector('icon-heart-filled');
        const isFavourited = iconButton.hasAttribute('data-is-favourited');

        if (outlineIcon && filledIcon) {
            outlineIcon.style.display = isFavourited ? '' : 'none';
            filledIcon.style.display = isFavourited ? 'none' : '';
        }

        iconButton.aria = { label: isFavourited ? 'Add to favourites' : 'Remove from favourites' };

        if (isFavourited) {
            iconButton.removeAttribute('data-is-favourited');
        } else {
            iconButton.setAttribute('data-is-favourited', 'true');
        }
    };

    return html`
        <pie-card
            tag="button"
            padding="c"
            ?disabled="${disabled}"
            .aria="${{
        label: 'View restaurant',
        description: 'Opens the restaurant details',
        haspopup: 'dialog',
    } as CardPropsBase['aria']}"
            @click="${openRestaurantModal}">
            <div data-test-id="slot-content" style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-l-family);">
                <h2 style="margin-top: 0"> Card title </h2>
                <p style="margin-bottom: 8px"> Card content with an action </p>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <pie-icon-button
                        data-test-id="card-action"
                        variant="ghost-secondary"
                        .aria="${{ label: 'Add to favourites' }}"
                        style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);"
                        @click="${toggleFavourited}">
                        <icon-heart data-test-id="icon-heart-outline"></icon-heart>
                        <icon-heart-filled data-test-id="icon-heart-filled" style="color: var(--dt-color-content-error); display: none;"></icon-heart-filled>
                    </pie-icon-button>
                    <pie-link
                        href="https://pie.design"
                        target="_blank"
                        style="position: relative; z-index: calc(var(--card-overlay-z-index) + 1);">
                        View menu
                    </pie-link>
                </div>
            </div>
        </pie-card>
        <pie-modal
            id="restaurant-modal"
            heading="Restaurant details"
            ?isDismissible="${true}">
            <p>This modal was opened by clicking the card, showing that the card's own click interaction remains independent of the slotted controls.</p>
        </pie-modal>`;
};

export const WithSlottedControls = WithSlottedControlsTemplate.bind({});
WithSlottedControls.parameters = {
    controls: {
        disable: true,
    },
};

const cssVariableStory = (variantList: ReadonlyArray<CardPropsBase['variant']>, styleOverrides: string) => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--dt-spacing-d);">
        ${variantList.map((variant) => html`
            <pie-card
                tag="button"
                variant="${ifDefined(variant)}"
                padding="c"
                .aria="${{ label: variant } as CardPropsBase['aria']}"
                style="${styleOverrides}">
                <h2>${variant}</h2>
            </pie-card>`)}
    </div>`;

const BorderColorOverrideTemplate: TemplateFunction<CardProps> = () => cssVariableStory(
    ['outline', 'outline-inverse'],
    '--card-border-color: red;',
);

export const BorderColorOverride = BorderColorOverrideTemplate.bind({});
BorderColorOverride.parameters = {
    controls: {
        disable: true,
    },
};

const BoxShadowDisabledTemplate: TemplateFunction<CardProps> = () => cssVariableStory(
    ['default', 'inverse'],
    '--card-box-shadow: none;',
);

export const BoxShadowDisabled = BoxShadowDisabledTemplate.bind({});
BoxShadowDisabled.parameters = {
    controls: {
        disable: true,
    },
};

const variantSlotContent = '<div><h2>Card title</h2><p>Card content</p></div>';

const sharedVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    tag: ['a', 'button'],
    disabled: [true, false],
    slot: [variantSlotContent],
};

const defaultVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    variant: ['default'],
    ...sharedVariantProps,
};

const outlineVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    variant: ['outline'],
    ...sharedVariantProps,
};

const inverseVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    variant: ['inverse'],
    ...sharedVariantProps,
};

const outlineInverseVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    variant: ['outline-inverse'],
    ...sharedVariantProps,
};

const paddingAVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['a', 'a,a', 'a,b', 'a,c', 'a,d', 'a,e', 'a,f', 'a,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

const paddingBVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['b', 'b,a', 'b,b', 'b,c', 'b,d', 'b,e', 'b,f', 'b,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

const paddingCVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['c', 'c,a', 'c,b', 'c,c', 'c,d', 'c,e', 'c,f', 'c,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

const paddingDVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['d', 'd,a', 'd,b', 'd,c', 'd,d', 'd,e', 'd,f', 'd,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

const paddingEVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['e', 'e,a', 'e,b', 'e,c', 'e,d', 'e,e', 'e,f', 'e,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

const paddingFVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['f', 'f,a', 'f,b', 'f,c', 'f,d', 'f,e', 'f,f', 'f,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

const paddingGVariantProps: Partial<Record<keyof CardProps, unknown[]>> = {
    padding: ['g', 'g,a', 'g,b', 'g,c', 'g,d', 'g,e', 'g,f', 'g,g'],
    disabled: [false],
    tag: ['button'],
    slot: [variantSlotContent],
};

export const DefaultVariants = createVariantStory<CardProps>(Template, defaultVariantProps, {});
export const OutlineVariants = createVariantStory<CardProps>(Template, outlineVariantProps, {});
export const InverseVariants = createVariantStory<CardProps>(Template, inverseVariantProps, { bgColor: 'dark (container-dark)' });
export const OutlineInverseVariants = createVariantStory<CardProps>(Template, outlineInverseVariantProps, { bgColor: 'dark (container-dark)' });
export const PaddingAVariants = createVariantStory<CardProps>(Template, paddingAVariantProps, {});
export const PaddingBVariants = createVariantStory<CardProps>(Template, paddingBVariantProps, {});
export const PaddingCVariants = createVariantStory<CardProps>(Template, paddingCVariantProps, {});
export const PaddingDVariants = createVariantStory<CardProps>(Template, paddingDVariantProps, {});
export const PaddingEVariants = createVariantStory<CardProps>(Template, paddingEVariantProps, {});
export const PaddingFVariants = createVariantStory<CardProps>(Template, paddingFVariantProps, {});
export const PaddingGVariants = createVariantStory<CardProps>(Template, paddingGVariantProps, {});
