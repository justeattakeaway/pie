import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@justeattakeaway/pie-assistive-text';
import { type AssistiveTextProps as AssistiveTextBaseProps, variants, defaultProps } from '@justeattakeaway/pie-assistive-text';

import { type Meta, type SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type AssistiveTextProps = SlottedComponentProps<AssistiveTextBaseProps>;
type AssistiveTextStoryMeta = Meta<AssistiveTextProps>;

const defaultArgs: AssistiveTextProps = {
    ...defaultProps,
    slot: 'Assistive Text',
};

const assistiveTextStoryMeta: AssistiveTextStoryMeta = {
    title: 'Assistive Text',
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
    slot,
}) => html`
    <pie-assistive-text
        variant="${ifDefined(variant)}">
        ${sanitizeAndRenderHTML(slot)}
    </pie-assistive-text>
`;

const createAssistiveTextStory = createStory<AssistiveTextProps>(Template, defaultArgs);

export const Default = createAssistiveTextStory();
export const Success = createAssistiveTextStory({ variant: 'success' });
export const Error = createAssistiveTextStory({ variant: 'error' });
