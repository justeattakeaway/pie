import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-assistive-text';
import { AssistiveTextProps as AssistiveTextBaseProps, variants } from '@justeattakeaway/pie-assistive-text';
/* eslint-enable import/no-duplicates */

import { type StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction, sanitizeAndRenderHTML } from '../utilities';

type AssistiveTextProps = SlottedComponentProps<AssistiveTextBaseProps>;
type AssistiveTextStoryMeta = StoryMeta<AssistiveTextProps>;

const defaultArgs: AssistiveTextProps = {
    variant: 'default',
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
                summary: 'default',
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
        variant="${variant}">
        ${sanitizeAndRenderHTML(slot)}
    </pie-assistive-text>
`;

const createAssistiveTextStory = createStory<AssistiveTextProps>(Template, defaultArgs);

export const Default = createAssistiveTextStory();
export const Success = createAssistiveTextStory({ variant: 'success' });
export const Error = createAssistiveTextStory({ variant: 'error' });
