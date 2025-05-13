import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-assistive-text';
import { type AssistiveTextProps as AssistiveTextBaseProps, variants, defaultProps } from '@justeattakeaway/pie-assistive-text';

import { type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type AssistiveTextProps = SlottedComponentProps<AssistiveTextBaseProps>;
type AssistiveTextStoryMeta = Meta<AssistiveTextProps>;

const defaultArgs: AssistiveTextProps = {
    ...defaultProps,
    slot: 'Assistive Text',
};

const assistiveTextStoryMeta: AssistiveTextStoryMeta = {
    title: 'Components/Assistive Text',
    component: 'pie-assistive-text',
    argTypes: {
        variant: {
            description: 'Set the variant of the assistive text.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isVisuallyHidden: {
            description: 'If true, hides the component visually but leaves it accessible for screen readers.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isVisuallyHidden,
            },
        },
        slot: {
            description: 'Content to place within the assistive-text',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OOgnT2oNMdGFytj5AanYvt/%5BCore%5D-Web-Component-Documentation-%5BPIE-3%5D?node-id=2%3A65908&mode=dev',
        },
    },
};

export default assistiveTextStoryMeta;

const Template : TemplateFunction<AssistiveTextProps> = ({
    variant,
    isVisuallyHidden,
    slot,
}) => html`
    <pie-assistive-text
        variant="${ifDefined(variant)}"
        ?isVisuallyHidden="${isVisuallyHidden}">
        ${sanitizeAndRenderHTML(slot)}
    </pie-assistive-text>
`;

const createAssistiveTextStory = createStory<AssistiveTextProps>(Template, defaultArgs);

export const Default = createAssistiveTextStory();
export const Success = createAssistiveTextStory({ variant: 'success' });
export const Error = createAssistiveTextStory({ variant: 'error' });
