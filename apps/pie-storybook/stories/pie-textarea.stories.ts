import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-textarea';
import { TextareaProps, defaultProps, sizes } from '@justeattakeaway/pie-textarea';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type TextareaStoryMeta = StoryMeta<TextareaProps>;

const defaultArgs: TextareaProps = { ...defaultProps };

const textareaStoryMeta: TextareaStoryMeta = {
    title: 'Textarea',
    component: 'pie-textarea',
    argTypes: {
        disabled: {
            description: 'If true, disables the textarea field.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        size: {
            description: 'The size of the textarea field. Can be `small`, `medium` or `large`. Defaults to `medium`.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/aD4m0j97Ruw8Q4S5lED2Bl/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?m=auto&node-id=1573-114527&t=t5zmveNU4ztOqlCs-1',
        },
    },
};

const Template = ({
    disabled,
    size,
}: TextareaProps) => html`
        <pie-textarea
                ?disabled="${disabled}"
                size="${ifDefined(size)}">
        </pie-textarea>
    `;

export const Default = createStory<TextareaProps>(Template, defaultArgs)();

export default textareaStoryMeta;
