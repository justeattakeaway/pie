import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/switch';
import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../../utilities';

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';

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

function logSelectionChange (event: Event) {
    console.info(EXPECTED_CHANGE_EVENT_MESSAGE);
    const list = event.target as HTMLElement;
    const type = list.getAttribute('interaction-type') || 'none';
    const logger = document.getElementById('logger');
    if (!logger) return;
    const entry = document.createElement('p');
    const timestamp = new Date().toLocaleTimeString();
    const selectedValues = Array.from(list.querySelectorAll('pie-list-item'))
        .filter((el) => (el as HTMLElement & { selected: boolean }).selected)
        .map((el) => (el as HTMLElement & { value: string }).value)
        .join(', ');
    entry.textContent = `[${timestamp}] [Type: ${type}] Selected: ${selectedValues || 'none'}`;
    logger.appendChild(entry);
    logger.scrollTop = logger.scrollHeight;
}

// eslint-disable-next-line no-empty-pattern
const Template = ({}: ListProps) => html`
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            padding: 24px;
            background-color: #fcfcfc;
            color: #333;
        }
        .demo-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin-bottom: 32px;
        }
        .box {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        h2 {
            margin-top: 0;
            color: #111;
            font-size: 1.25rem;
        }
        p.instruction {
            font-size: 0.85rem;
            color: #666;
            line-height: 1.4;
            margin-bottom: 16px;
            background: #f5f5f5;
            padding: 8px 12px;
            border-radius: 4px;
        }
        button {
            padding: 8px 12px;
            margin-bottom: 12px;
            cursor: pointer;
        }
        #logger {
            background: #1e1e1e;
            color: #a6e22e;
            font-family: monospace;
            padding: 16px;
            border-radius: 6px;
            max-height: 200px;
            overflow-y: auto;
        }
        #logger p { margin: 4px 0; font-size: 0.9rem; }
    </style>

    <h1>Listbox Component Navigation Types</h1>
    <button id="start-focus">1. Focus Here First</button>
    <p><em>Then use your keyboard (Tab, Shift+Tab, Arrows, Space) to interact with the lists below.</em></p>

    <div class="demo-container">
        <div class="box">
            <h2 id="default-multi-label">Multi-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 2 (first selected). <br>
                Arrows move focus <em>without</em> changing selections. <br>
                Press <strong>Spacebar</strong> to toggle active selection states.
            </p>

            <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="default-multi-label" @change=${logSelectionChange}>
                <pie-list-item value="m1">Multi Option 1</pie-list-item>
                <pie-list-item value="m2" selected>Multi Option 2 (Initial)</pie-list-item>
                <pie-list-item value="m3">Multi Option 3</pie-list-item>
                <pie-list-item value="m4" selected>Multi Option 4 (Initial)</pie-list-item>
            </pie-list>
        </div>

        <div class="box">
            <h2 id="default-single-label">Single-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 3 (only selected). <br>
                Arrows move focus <strong>AND</strong> instantly select the new option while deselecting the old option.
                Spacebar is inactive.
            </p>

            <pie-list interaction-type="single-select" aria-labelledby="default-single-label" @change=${logSelectionChange}>
                <pie-list-item value="s1">Single Option 1</pie-list-item>
                <pie-list-item value="s2">Single Option 2</pie-list-item>
                <pie-list-item value="s3" selected>Single Option 3 (Initial)</pie-list-item>
                <pie-list-item value="s4">Single Option 4</pie-list-item>
            </pie-list>
        </div>

        <div class="box">
            <h2 id="default-undefined-label">Undefined Mode (Keyboard Disabled)</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Strategy is completely dormant. Keyboard navigation, focus roving, and focus
                rings do not engage. Completely skipped by Tab.
            </p>

            <pie-list aria-labelledby="default-undefined-label">
                <pie-list-item>Plain Option 1</pie-list-item>
                <pie-list-item>Plain Option 2</pie-list-item>
                <pie-list-item>Plain Option 3</pie-list-item>
            </pie-list>
        </div>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Interaction logs will stream here...</p>
    </div>
`;

const MultiSelectKeyboardNavigationTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="mk-list-label">Multi-select list</h3>
    <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="mk-list-label" @change=${logSelectionChange}>
        <pie-list-item id="mk-item-1" data-test-id="item-1" value="m1">Option 1</pie-list-item>
        <pie-list-item id="mk-item-2" data-test-id="item-2" value="m2" selected>Option 2</pie-list-item>
        <pie-list-item id="mk-item-3" data-test-id="item-3" value="m3">Option 3</pie-list-item>
        <pie-list-item id="mk-item-4" data-test-id="item-4" value="m4" selected>Option 4</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const MultiSelectNoneSelectedTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="mn-list-label">Multi-select list</h3>
    <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="mn-list-label" @change=${logSelectionChange}>
        <pie-list-item id="mn-item-1" data-test-id="item-1" value="m1">Option 1</pie-list-item>
        <pie-list-item id="mn-item-2" data-test-id="item-2" value="m2">Option 2</pie-list-item>
        <pie-list-item id="mn-item-3" data-test-id="item-3" value="m3">Option 3</pie-list-item>
        <pie-list-item id="mn-item-4" data-test-id="item-4" value="m4">Option 4</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const SingleSelectKeyboardNavigationTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="sk-list-label">Single-select list</h3>
    <pie-list data-test-id="pie-list" interaction-type="single-select" aria-labelledby="sk-list-label" @change=${logSelectionChange}>
        <pie-list-item data-test-id="item-1" value="s1">Option 1</pie-list-item>
        <pie-list-item data-test-id="item-2" value="s2">Option 2</pie-list-item>
        <pie-list-item data-test-id="item-3" value="s3" selected>Option 3</pie-list-item>
        <pie-list-item data-test-id="item-4" value="s4">Option 4</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const SingleSelectNoneSelectedTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="sn-list-label">Single-select list</h3>
    <pie-list data-test-id="pie-list" interaction-type="single-select" aria-labelledby="sn-list-label" @change=${logSelectionChange}>
        <pie-list-item data-test-id="item-1" value="s1">Option 1</pie-list-item>
        <pie-list-item data-test-id="item-2" value="s2">Option 2</pie-list-item>
        <pie-list-item data-test-id="item-3" value="s3">Option 3</pie-list-item>
        <pie-list-item data-test-id="item-4" value="s4">Option 4</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const NoneInteractionTypeTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="undef-list-label">Plain list</h3>
    <pie-list data-test-id="pie-list" aria-labelledby="undef-list-label" @change=${logSelectionChange}>
        <pie-list-item data-test-id="item-1">Option 1</pie-list-item>
        <pie-list-item data-test-id="item-2">Option 2</pie-list-item>
        <pie-list-item data-test-id="item-3">Option 3</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const EmptyListTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="empty-list-label">Empty list</h3>
    <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="empty-list-label" @change=${logSelectionChange}></pie-list>
    <button data-test-id="btn-after">After</button>
`;

const DynamicSlotsTemplate = () => {
    let counter = 1;

    const onAdd = () => {
        const list = document.querySelector('pie-list[data-test-id="pie-list"]');
        if (!list) return;
        counter += 1;
        const item = document.createElement('pie-list-item');
        item.setAttribute('value', `d${counter}`);
        item.setAttribute('data-test-id', `item-${counter}`);
        item.textContent = `Option ${counter}`;
        list.appendChild(item);
    };

    return html`
        <button data-test-id="btn-before">Before</button>
        <h3 id="dyn-list-label">Dynamic list</h3>
        <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="dyn-list-label" @change=${logSelectionChange}>
            <pie-list-item data-test-id="item-1" value="d1">Option 1</pie-list-item>
        </pie-list>
        <button data-test-id="btn-add" @click=${onAdd}>Add option</button>
        <button data-test-id="btn-after">After</button>
    `;
};

const RadioInteractionTypeTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="radio-list-label">Radio list</h3>
    <pie-list data-test-id="pie-list" interaction-type="radio" aria-labelledby="radio-list-label">
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

const CheckboxInteractionTypeTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="checkbox-list-label">Checkbox list</h3>
    <pie-list data-test-id="pie-list" interaction-type="checkbox" aria-labelledby="checkbox-list-label">
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

const SwitchInteractionTypeTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="switch-list-label">Switch list</h3>
    <pie-list data-test-id="pie-list" interaction-type="switch" aria-labelledby="switch-list-label">
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
    <h3 id="a11y-multi-label">Multi-select list</h3>
    <pie-list interaction-type="multi-select" aria-labelledby="a11y-multi-label">
        <pie-list-item value="m1">Option 1</pie-list-item>
        <pie-list-item value="m2" selected>Option 2</pie-list-item>
        <pie-list-item value="m3">Option 3</pie-list-item>
    </pie-list>

    <h3 id="a11y-single-label">Single-select list</h3>
    <pie-list interaction-type="single-select" aria-labelledby="a11y-single-label">
        <pie-list-item value="s1">Option 1</pie-list-item>
        <pie-list-item value="s2" selected>Option 2</pie-list-item>
        <pie-list-item value="s3">Option 3</pie-list-item>
    </pie-list>

    <h3 id="a11y-plain-label">Plain list</h3>
    <pie-list aria-labelledby="a11y-plain-label">
        <pie-list-item>Option 1</pie-list-item>
        <pie-list-item>Option 2</pie-list-item>
        <pie-list-item>Option 3</pie-list-item>
    </pie-list>
`;

const MultiSelectWithActiveDescendantTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="ad-list-label">Multi-select list with preset active descendant</h3>
    <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="ad-list-label" aria-activedescendant="item-3-id" @change=${logSelectionChange}>
        <pie-list-item id="item-1-id" data-test-id="item-1" value="m1">Option 1</pie-list-item>
        <pie-list-item id="item-2-id" data-test-id="item-2" value="m2" selected>Option 2</pie-list-item>
        <pie-list-item id="item-3-id" data-test-id="item-3" value="m3">Option 3</pie-list-item>
        <pie-list-item id="item-4-id" data-test-id="item-4" value="m4">Option 4</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const MultiSelectWithDisabledTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="md-list-label">Multi-select list with disabled items</h3>
    <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="md-list-label" @change=${logSelectionChange}>
        <pie-list-item id="md-item-1" data-test-id="item-1" value="m1">Option 1</pie-list-item>
        <pie-list-item id="md-item-2" data-test-id="item-2" value="m2" disabled>Option 2 (disabled)</pie-list-item>
        <pie-list-item id="md-item-3" data-test-id="item-3" value="m3">Option 3</pie-list-item>
        <pie-list-item id="md-item-4" data-test-id="item-4" value="m4" disabled>Option 4 (disabled)</pie-list-item>
        <pie-list-item id="md-item-5" data-test-id="item-5" value="m5">Option 5</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const SingleSelectWithDisabledTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="sd-list-label">Single-select list with disabled items</h3>
    <pie-list data-test-id="pie-list" interaction-type="single-select" aria-labelledby="sd-list-label" @change=${logSelectionChange}>
        <pie-list-item id="sd-item-1" data-test-id="item-1" value="s1">Option 1</pie-list-item>
        <pie-list-item id="sd-item-2" data-test-id="item-2" value="s2" disabled>Option 2 (disabled)</pie-list-item>
        <pie-list-item id="sd-item-3" data-test-id="item-3" value="s3" selected>Option 3</pie-list-item>
        <pie-list-item id="sd-item-4" data-test-id="item-4" value="s4" disabled>Option 4 (disabled)</pie-list-item>
        <pie-list-item id="sd-item-5" data-test-id="item-5" value="s5">Option 5</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const NoneInteractionTypeWithDisabledTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="ud-list-label">Plain list with disabled items</h3>
    <pie-list data-test-id="pie-list" aria-labelledby="ud-list-label" @change=${logSelectionChange}>
        <pie-list-item data-test-id="item-1">Option 1</pie-list-item>
        <pie-list-item data-test-id="item-2" disabled>Option 2 (disabled — but no-op)</pie-list-item>
        <pie-list-item data-test-id="item-3">Option 3</pie-list-item>
    </pie-list>
    <button data-test-id="btn-after">After</button>
`;

const RuntimeDisabledToggleTemplate = () => {
    const toggle = (testId: string) => {
        const item = document.querySelector(`pie-list-item[data-test-id="${testId}"]`);
        if (!item) return;
        (item as HTMLElement & { disabled: boolean }).disabled = !(item as HTMLElement & { disabled: boolean }).disabled;
    };

    return html`
        <button data-test-id="btn-before">Before</button>
        <h3 id="rd-list-label">Multi-select list with runtime-toggleable disabled</h3>
        <pie-list data-test-id="pie-list" interaction-type="multi-select" aria-labelledby="rd-list-label" @change=${logSelectionChange}>
            <pie-list-item id="rd-item-1" data-test-id="item-1" value="m1">Option 1</pie-list-item>
            <pie-list-item id="rd-item-2" data-test-id="item-2" value="m2">Option 2</pie-list-item>
            <pie-list-item id="rd-item-3" data-test-id="item-3" value="m3">Option 3</pie-list-item>
        </pie-list>
        <button data-test-id="btn-after">After</button>
        <button data-test-id="btn-toggle-item-2" @click=${() => toggle('item-2')}>Toggle item 2 disabled</button>
    `;
};

const RuntimeInteractionTypeSwitchTemplate = () => {
    const setType = (value: string) => {
        const list = document.querySelector('pie-list[data-test-id="pie-list"]');
        if (!list) return;
        if (value === '') {
            list.removeAttribute('interaction-type');
        } else {
            list.setAttribute('interaction-type', value);
        }
    };

    return html`
        <button data-test-id="btn-before">Before</button>
        <h3 id="rt-list-label">Runtime-switchable list</h3>
        <pie-list data-test-id="pie-list" aria-labelledby="rt-list-label" @change=${logSelectionChange}>
            <pie-list-item id="rt-item-1" data-test-id="item-1" value="r1">Option 1</pie-list-item>
            <pie-list-item id="rt-item-2" data-test-id="item-2" value="r2">Option 2</pie-list-item>
            <pie-list-item id="rt-item-3" data-test-id="item-3" value="r3">Option 3</pie-list-item>
        </pie-list>
        <button data-test-id="btn-after">After</button>
        <button data-test-id="btn-set-multi" @click=${() => setType('multi-select')}>Multi-select</button>
        <button data-test-id="btn-set-single" @click=${() => setType('single-select')}>Single-select</button>
        <button data-test-id="btn-set-none" @click=${() => setType('')}>None</button>
    `;
};

export const Default = createStory<ListProps>(Template, defaultArgs)();
export const MultiSelectKeyboardNavigation = createStory<ListProps>(MultiSelectKeyboardNavigationTemplate, defaultArgs)();
export const MultiSelectNoneSelected = createStory<ListProps>(MultiSelectNoneSelectedTemplate, defaultArgs)();
export const SingleSelectKeyboardNavigation = createStory<ListProps>(SingleSelectKeyboardNavigationTemplate, defaultArgs)();
export const SingleSelectNoneSelected = createStory<ListProps>(SingleSelectNoneSelectedTemplate, defaultArgs)();
export const NoneInteractionType = createStory<ListProps>(NoneInteractionTypeTemplate, defaultArgs)();
export const RadioInteractionType = createStory<ListProps>(RadioInteractionTypeTemplate, defaultArgs)();
export const CheckboxInteractionType = createStory<ListProps>(CheckboxInteractionTypeTemplate, defaultArgs)();
export const SwitchInteractionType = createStory<ListProps>(SwitchInteractionTypeTemplate, defaultArgs)();
export const EmptyList = createStory<ListProps>(EmptyListTemplate, defaultArgs)();
export const DynamicSlots = createStory<ListProps>(DynamicSlotsTemplate, defaultArgs)();
export const RuntimeInteractionTypeSwitch = createStory<ListProps>(RuntimeInteractionTypeSwitchTemplate, defaultArgs)();
export const MultiSelectWithActiveDescendant = createStory<ListProps>(MultiSelectWithActiveDescendantTemplate, defaultArgs)();
export const MultiSelectWithDisabled = createStory<ListProps>(MultiSelectWithDisabledTemplate, defaultArgs)();
export const SingleSelectWithDisabled = createStory<ListProps>(SingleSelectWithDisabledTemplate, defaultArgs)();
export const NoneInteractionTypeWithDisabled = createStory<ListProps>(NoneInteractionTypeWithDisabledTemplate, defaultArgs)();
export const RuntimeDisabledToggle = createStory<ListProps>(RuntimeDisabledToggleTemplate, defaultArgs)();
export const Accessibility = createStory<ListProps>(AccessibilityTemplate, defaultArgs)();
