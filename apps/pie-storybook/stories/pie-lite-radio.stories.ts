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
        <h2>With slotted labels</h2>
        <div style="display: flex; flex-direction: column; gap: var(--dt-spacing-b);">
            <pie-lite-radio>
                <label for="radio1">Radio 1</label>
                <input name="options" id="radio1" type="radio" value="1">
            </pie-lite-radio>

            <pie-lite-radio isError>
                <input name="options" id="radio2" type="radio" value="2">
                <label for="radio2">Radio 2</label>
            </pie-lite-radio>

            <pie-lite-radio>
                <label for="radio3">Radio 3</label>
                <input disabled name="options" id="radio3" type="radio" value="3">
            </pie-lite-radio>

            <pie-lite-radio>
                <label for="radio4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, atque impedit! Fugit animi ullam sit. Maiores quibusdam ut eveniet laborum inventore libero ad optio fuga error, enim unde molestias voluptate?</label>
                <input disabled name="options" id="radio4" type="radio" value="4">
            </pie-lite-radio>

            <h2>Without labels</h2>
            <pie-lite-radio>
                <input name="options" id="radio5" type="radio" value="5">
            </pie-lite-radio>

            <pie-lite-radio isError>
                <input name="options" id="radio6" type="radio" value="6">
            </pie-lite-radio>

            <pie-lite-radio>
                <input disabled name="options" id="radio7" type="radio" value="7">
            </pie-lite-radio>
        </div>
    </form>

`;

export const Default = createStory<LiteRadioProps>(Template, defaultArgs)();
