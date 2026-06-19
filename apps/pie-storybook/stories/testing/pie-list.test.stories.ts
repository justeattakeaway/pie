import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/switch';
import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {};

const listStoryMeta: ListStoryMeta = {
    title: 'List',
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

const StaticListTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="static-list-label">Static list</h3>
    <pie-list data-test-id="pie-list" aria-labelledby="static-list-label">
        <pie-list-item data-test-id="item-1">Option 1</pie-list-item>
        <pie-list-item data-test-id="item-2">Option 2</pie-list-item>
        <pie-list-item data-test-id="item-3">Option 3</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const RadioVariantTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="radio-list-label">Radio list</h3>
    <pie-list data-test-id="pie-list" variant="radio" aria-labelledby="radio-list-label">
        <pie-list-item data-test-id="item-1">
            <input id="r-1" type="radio" name="r" value="r1" checked />
            <label for="r-1">Option 1</label>
        </pie-list-item>
        <pie-list-item data-test-id="item-2">
            <input id="r-2" type="radio" name="r" value="r2" />
            <label for="r-2">Option 2</label>
        </pie-list-item>
        <pie-list-item data-test-id="item-3">
            <input id="r-3" type="radio" name="r" value="r3" />
            <label for="r-3">Option 3</label>
        </pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const CheckboxVariantTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="checkbox-list-label">Checkbox list</h3>
    <pie-list data-test-id="pie-list" variant="checkbox" aria-labelledby="checkbox-list-label">
        <pie-list-item data-test-id="item-1">
            <input id="c-1" type="checkbox" value="c1" />
            <label for="c-1">Option 1</label>
        </pie-list-item>
        <pie-list-item data-test-id="item-2">
            <input id="c-2" type="checkbox" value="c2" />
            <label for="c-2">Option 2</label>
        </pie-list-item>
        <pie-list-item data-test-id="item-3">
            <input id="c-3" type="checkbox" value="c3" />
            <label for="c-3">Option 3</label>
        </pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const SwitchVariantTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="switch-list-label">Switch list</h3>
    <pie-list data-test-id="pie-list" variant="switch" aria-labelledby="switch-list-label">
        <pie-list-item data-test-id="item-1">
            <pie-switch id="s-1"></pie-switch>
            <label for="s-1">Option 1</label>
        </pie-list-item>
        <pie-list-item data-test-id="item-2">
            <pie-switch id="s-2"></pie-switch>
            <label for="s-2">Option 2</label>
        </pie-list-item>
        <pie-list-item data-test-id="item-3">
            <pie-switch id="s-3"></pie-switch>
            <label for="s-3">Option 3</label>
        </pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const AccessibilityTemplate = () => html`
    <h3 id="a11y-static-label">Static list</h3>
    <pie-list aria-labelledby="a11y-static-label">
        <pie-list-item>Option 1</pie-list-item>
        <pie-list-item>Option 2</pie-list-item>
        <pie-list-item>Option 3</pie-list-item>
    </pie-list>

    <h3 id="a11y-radio-label">Radio list</h3>
    <pie-list variant="radio" aria-labelledby="a11y-radio-label">
        <pie-list-item>
            <input id="ar-1" type="radio" name="ar" value="r1" checked />
            <label for="ar-1">Option 1</label>
        </pie-list-item>
        <pie-list-item>
            <input id="ar-2" type="radio" name="ar" value="r2" />
            <label for="ar-2">Option 2</label>
        </pie-list-item>
    </pie-list>

    <h3 id="a11y-checkbox-label">Checkbox list</h3>
    <pie-list variant="checkbox" aria-labelledby="a11y-checkbox-label">
        <pie-list-item>
            <input id="ac-1" type="checkbox" value="c1" />
            <label for="ac-1">Option 1</label>
        </pie-list-item>
    </pie-list>

    <h3 id="a11y-switch-label">Switch list</h3>
    <pie-list variant="switch" aria-labelledby="a11y-switch-label">
        <pie-list-item>
            <pie-switch id="as-1"></pie-switch>
            <label for="as-1">Option 1</label>
        </pie-list-item>
    </pie-list>
`;

export const Default = createStory<ListProps>(StaticListTemplate, defaultArgs)();
export const StaticList = createStory<ListProps>(StaticListTemplate, defaultArgs)();
export const RadioVariant = createStory<ListProps>(RadioVariantTemplate, defaultArgs)();
export const CheckboxVariant = createStory<ListProps>(CheckboxVariantTemplate, defaultArgs)();
export const SwitchVariant = createStory<ListProps>(SwitchVariantTemplate, defaultArgs)();
export const Accessibility = createStory<ListProps>(AccessibilityTemplate, defaultArgs)();
