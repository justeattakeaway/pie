import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/lite-radio';
import { type LiteRadioProps } from '@justeattakeaway/pie-webc/components/lite-radio';

import { createStory } from '../utilities';

type LiteRadioStoryMeta = Meta<LiteRadioProps>;

const defaultArgs: LiteRadioProps = {};

const liteRadioStoryMeta: LiteRadioStoryMeta = {
    title: 'Lite Components/Lite Radio',
    component: 'pie-lite-radio',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default liteRadioStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: LiteRadioProps) => html`
    <pie-lite-radio>raw text</pie-lite-radio>
    <pie-lite-radio><span>span tag</span></pie-lite-radio>
    <pie-lite-radio><p>p tag</p></pie-lite-radio>
    <pie-lite-radio><label>label tag</label></pie-lite-radio>
    <pie-lite-radio><input type="radio" /></pie-lite-radio>
    <pie-lite-radio><div>div tag</div></pie-lite-radio>
    <pie-lite-radio><div><p>nested p in div</p></div></pie-lite-radio>
    <pie-lite-radio><span aria-label="foo">aria-label span</span></pie-lite-radio>

`;

export const Default = createStory<LiteRadioProps>(Template, defaultArgs)();
