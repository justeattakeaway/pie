import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/thumbnail';

import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {};

const listStoryMeta: ListStoryMeta = {
    title: 'Components/List',
    component: 'pie-list',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default listStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ListProps) => html`
    <div style="width: 400px">
        <h2>Single item list</h2>
        <pie-list>
            <pie-list-item primary-text="Primary text" secondary-text="Secondary text">
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="trailing">Meta text</span>
            </pie-list-item>
        </pie-list>

        <h2>Multi-item list</h2>
        <pie-list>
            <pie-list-item is-bold primary-text="Primary text" secondary-text="Secondary text">
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="trailing">Meta text</span>
            </pie-list-item>

            <pie-list-item is-bold primary-text="Primary text">
                <pie-thumbnail size="40" slot="leading" src="./static/images/pie-logo.svg"></pie-thumbnail>
                <span slot="trailing">Meta text</span>
            </pie-list-item>

            <pie-list-item is-compact primary-text="Primary text"">
                <span slot="trailing">Meta text</span>
            </pie-list-item>
        </pie-list>

        <h2>Radio group</h2>
        <pie-list>
            <pie-list-item>
                <label for="radio1">Radio 1</label>
                <input name="radios" type="radio" id="radio1" value="radio1" />
            </pie-list-item>
            <pie-list-item>
                <label for="radio2">Radio 2</label>
                <input name="radios" type="radio" id="radio2" value="radio2" />
            </pie-list-item>
            <pie-list-item>
                <label for="radio3">Radio 3</label>
                <input name="radios" type="radio" id="radio3" value="radio3" />
            </pie-list-item>
            <pie-list-item>
                <label for="radio4">Radio 4</label>
                <input name="radios" type="radio" id="radio4" value="radio4" />
            </pie-list-item>
            <pie-list-item>
                <label for="radio5">Radio 5</label>
                <input name="radios" type="radio" id="radio5" value="radio5" />
            </pie-list-item>
            <pie-list-item>
                <label for="radio6">Radio 6</label>
                <input name="radios" type="radio" id="radio6" value="radio6" />
            </pie-list-item>
        </pie-list>

        <h2>Checkbox group</h2>
        <pie-list>
            <pie-list-item>
                <label for="checkbox1">checkbox 1</label>
                <input name="checkboxes" type="checkbox" id="checkbox1" value="checkbox1" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox2">checkbox 2</label>
                <input name="checkboxes" type="checkbox" id="checkbox2" value="checkbox2" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox3">checkbox 3</label>
                <input name="checkboxes" type="checkbox" id="checkbox3" value="checkbox3" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox4">checkbox 4</label>
                <input name="checkboxes" type="checkbox" id="checkbox4" value="checkbox4" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox5">checkbox 5</label>
                <input name="checkboxes" type="checkbox" id="checkbox5" value="checkbox5" />
            </pie-list-item>
            <pie-list-item>
                <label for="checkbox6">checkbox 6</label>
                <input name="checkboxes" type="checkbox" id="checkbox6" value="checkbox6" />
            </pie-list-item>
        </pie-list>
    </div>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();
