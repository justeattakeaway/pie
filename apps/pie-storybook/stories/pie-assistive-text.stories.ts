import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/assistive-text';
import { type AssistiveTextProps, variants, defaultProps } from '@justeattakeaway/pie-webc/components/assistive-text';

import { createStory, type TemplateFunction } from '../utilities';

type AssistiveTextStoryMeta = Meta<AssistiveTextProps>;

const defaultArgs: AssistiveTextProps = {
    ...defaultProps,
    message: 'Assistive Text',
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
        message: {
            description: 'The assistive message text.',
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
    message,
    isVisuallyHidden,
}) => html`
    <pie-assistive-text
        variant="${ifDefined(variant)}"
        message="${ifDefined(message)}"
        ?isVisuallyHidden="${isVisuallyHidden}">
    </pie-assistive-text>
`;

const createAssistiveTextStory = createStory<AssistiveTextProps>(Template, defaultArgs);

export const Default = createAssistiveTextStory();
export const Success = createAssistiveTextStory({ variant: 'success' });
export const Error = createAssistiveTextStory({ variant: 'error' });
