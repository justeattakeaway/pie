import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/listbox';
import '@justeattakeaway/pie-webc/components/listbox-option';
import { type ListboxProps } from '@justeattakeaway/pie-webc/components/listbox';

import { createStory } from '../../utilities';

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';

type ListboxStoryMeta = Meta<ListboxProps>;

const defaultArgs: ListboxProps = {
    selectionMode: 'single',
};

const listboxStoryMeta: ListboxStoryMeta = {
    title: 'Listbox',
    component: 'pie-listbox',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default listboxStoryMeta;

function logSelectionChange (event: Event) {
    console.info(EXPECTED_CHANGE_EVENT_MESSAGE);
    const listbox = event.target as HTMLElement;
    const mode = listbox.getAttribute('selection-mode') || 'single';
    const logger = document.getElementById('logger');
    if (!logger) return;
    const entry = document.createElement('p');
    const timestamp = new Date().toLocaleTimeString();
    const selectedValues = Array.from(listbox.querySelectorAll('pie-listbox-option'))
        .filter((el) => (el as HTMLElement & { selected: boolean }).selected)
        .map((el) => (el as HTMLElement & { value: string }).value)
        .join(', ');
    entry.textContent = `[${timestamp}] [Mode: ${mode}] Selected: ${selectedValues || 'none'}`;
    logger.appendChild(entry);
    logger.scrollTop = logger.scrollHeight;
}

// eslint-disable-next-line no-empty-pattern
const Template = ({}: ListboxProps) => html`
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
        h2 { margin-top: 0; color: #111; font-size: 1.25rem; }
        p.instruction {
            font-size: 0.85rem;
            color: #666;
            line-height: 1.4;
            margin-bottom: 16px;
            background: #f5f5f5;
            padding: 8px 12px;
            border-radius: 4px;
        }
        button { padding: 8px 12px; margin-bottom: 12px; cursor: pointer; }
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

    <h1>Listbox Selection Modes</h1>
    <button id="start-focus">1. Focus Here First</button>
    <p><em>Then use your keyboard (Tab, Shift+Tab, Arrows, Space) to interact with the listboxes below.</em></p>

    <div class="demo-container">
        <div class="box">
            <h2 id="default-multi-label">Multi-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 2 (first selected). <br>
                Arrows move focus <em>without</em> changing selections. <br>
                Press <strong>Spacebar</strong> to toggle active selection states.
            </p>

            <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="default-multi-label" @change=${logSelectionChange}>
                <pie-listbox-option value="m1">Multi Option 1</pie-listbox-option>
                <pie-listbox-option value="m2" selected>Multi Option 2 (Initial)</pie-listbox-option>
                <pie-listbox-option value="m3">Multi Option 3</pie-listbox-option>
                <pie-listbox-option value="m4" selected>Multi Option 4 (Initial)</pie-listbox-option>
            </pie-listbox>
        </div>

        <div class="box">
            <h2 id="default-single-label">Single-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 3 (only selected). <br>
                Arrows move focus <strong>AND</strong> instantly select the new option while deselecting the old option.
                Spacebar is inactive.
            </p>

            <pie-listbox selection-mode="single" aria-labelledby="default-single-label" @change=${logSelectionChange}>
                <pie-listbox-option value="s1">Single Option 1</pie-listbox-option>
                <pie-listbox-option value="s2">Single Option 2</pie-listbox-option>
                <pie-listbox-option value="s3" selected>Single Option 3 (Initial)</pie-listbox-option>
                <pie-listbox-option value="s4">Single Option 4</pie-listbox-option>
            </pie-listbox>
        </div>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Interaction logs will stream here...</p>
    </div>
`;

const MultiSelectKeyboardNavigationTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="mk-listbox-label">Multi-select listbox</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="mk-listbox-label" @change=${logSelectionChange}>
        <pie-listbox-option id="mk-item-1" data-test-id="item-1" value="m1">Option 1</pie-listbox-option>
        <pie-listbox-option id="mk-item-2" data-test-id="item-2" value="m2" selected>Option 2</pie-listbox-option>
        <pie-listbox-option id="mk-item-3" data-test-id="item-3" value="m3">Option 3</pie-listbox-option>
        <pie-listbox-option id="mk-item-4" data-test-id="item-4" value="m4" selected>Option 4</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const MultiSelectNoneSelectedTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="mn-listbox-label">Multi-select listbox</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="mn-listbox-label" @change=${logSelectionChange}>
        <pie-listbox-option id="mn-item-1" data-test-id="item-1" value="m1">Option 1</pie-listbox-option>
        <pie-listbox-option id="mn-item-2" data-test-id="item-2" value="m2">Option 2</pie-listbox-option>
        <pie-listbox-option id="mn-item-3" data-test-id="item-3" value="m3">Option 3</pie-listbox-option>
        <pie-listbox-option id="mn-item-4" data-test-id="item-4" value="m4">Option 4</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const SingleSelectKeyboardNavigationTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="sk-listbox-label">Single-select listbox</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="single" aria-labelledby="sk-listbox-label" @change=${logSelectionChange}>
        <pie-listbox-option data-test-id="item-1" value="s1">Option 1</pie-listbox-option>
        <pie-listbox-option data-test-id="item-2" value="s2">Option 2</pie-listbox-option>
        <pie-listbox-option data-test-id="item-3" value="s3" selected>Option 3</pie-listbox-option>
        <pie-listbox-option data-test-id="item-4" value="s4">Option 4</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const SingleSelectNoneSelectedTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="sn-listbox-label">Single-select listbox</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="single" aria-labelledby="sn-listbox-label" @change=${logSelectionChange}>
        <pie-listbox-option data-test-id="item-1" value="s1">Option 1</pie-listbox-option>
        <pie-listbox-option data-test-id="item-2" value="s2">Option 2</pie-listbox-option>
        <pie-listbox-option data-test-id="item-3" value="s3">Option 3</pie-listbox-option>
        <pie-listbox-option data-test-id="item-4" value="s4">Option 4</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const EmptyListboxTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="empty-listbox-label">Empty listbox</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="empty-listbox-label" @change=${logSelectionChange}></pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const DynamicSlotsTemplate = () => {
    let counter = 1;

    const onAdd = () => {
        const listbox = document.querySelector('pie-listbox[data-test-id="pie-listbox"]');
        if (!listbox) return;
        counter += 1;
        const option = document.createElement('pie-listbox-option');
        option.setAttribute('value', `d${counter}`);
        option.setAttribute('data-test-id', `item-${counter}`);
        option.textContent = `Option ${counter}`;
        listbox.appendChild(option);
    };

    return html`
        <button data-test-id="btn-before">Before</button>
        <h3 id="dyn-listbox-label">Dynamic listbox</h3>
        <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="dyn-listbox-label" @change=${logSelectionChange}>
            <pie-listbox-option data-test-id="item-1" value="d1">Option 1</pie-listbox-option>
        </pie-listbox>
        <button data-test-id="btn-add" @click=${onAdd}>Add option</button>
        <button data-test-id="btn-after">After</button>
    `;
};

const AccessibilityTemplate = () => html`
    <h3 id="a11y-multi-label">Multi-select listbox</h3>
    <pie-listbox selection-mode="multiple" aria-labelledby="a11y-multi-label">
        <pie-listbox-option value="m1">Option 1</pie-listbox-option>
        <pie-listbox-option value="m2" selected>Option 2</pie-listbox-option>
        <pie-listbox-option value="m3">Option 3</pie-listbox-option>
    </pie-listbox>

    <h3 id="a11y-single-label">Single-select listbox</h3>
    <pie-listbox selection-mode="single" aria-labelledby="a11y-single-label">
        <pie-listbox-option value="s1">Option 1</pie-listbox-option>
        <pie-listbox-option value="s2" selected>Option 2</pie-listbox-option>
        <pie-listbox-option value="s3">Option 3</pie-listbox-option>
    </pie-listbox>
`;

const MultiSelectWithActiveDescendantTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="ad-listbox-label">Multi-select listbox with preset active descendant</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="ad-listbox-label" aria-activedescendant="item-3-id" @change=${logSelectionChange}>
        <pie-listbox-option id="item-1-id" data-test-id="item-1" value="m1">Option 1</pie-listbox-option>
        <pie-listbox-option id="item-2-id" data-test-id="item-2" value="m2" selected>Option 2</pie-listbox-option>
        <pie-listbox-option id="item-3-id" data-test-id="item-3" value="m3">Option 3</pie-listbox-option>
        <pie-listbox-option id="item-4-id" data-test-id="item-4" value="m4">Option 4</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const MultiSelectWithDisabledTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="md-listbox-label">Multi-select listbox with disabled options</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="md-listbox-label" @change=${logSelectionChange}>
        <pie-listbox-option id="md-item-1" data-test-id="item-1" value="m1">Option 1</pie-listbox-option>
        <pie-listbox-option id="md-item-2" data-test-id="item-2" value="m2" disabled>Option 2 (disabled)</pie-listbox-option>
        <pie-listbox-option id="md-item-3" data-test-id="item-3" value="m3">Option 3</pie-listbox-option>
        <pie-listbox-option id="md-item-4" data-test-id="item-4" value="m4" disabled>Option 4 (disabled)</pie-listbox-option>
        <pie-listbox-option id="md-item-5" data-test-id="item-5" value="m5">Option 5</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const SingleSelectWithDisabledTemplate = () => html`
    <button data-test-id="btn-before">Before</button>
    <h3 id="sd-listbox-label">Single-select listbox with disabled options</h3>
    <pie-listbox data-test-id="pie-listbox" selection-mode="single" aria-labelledby="sd-listbox-label" @change=${logSelectionChange}>
        <pie-listbox-option id="sd-item-1" data-test-id="item-1" value="s1">Option 1</pie-listbox-option>
        <pie-listbox-option id="sd-item-2" data-test-id="item-2" value="s2" disabled>Option 2 (disabled)</pie-listbox-option>
        <pie-listbox-option id="sd-item-3" data-test-id="item-3" value="s3" selected>Option 3</pie-listbox-option>
        <pie-listbox-option id="sd-item-4" data-test-id="item-4" value="s4" disabled>Option 4 (disabled)</pie-listbox-option>
        <pie-listbox-option id="sd-item-5" data-test-id="item-5" value="s5">Option 5</pie-listbox-option>
    </pie-listbox>
    <button data-test-id="btn-after">After</button>
`;

const RuntimeDisabledToggleTemplate = () => {
    const toggle = (testId: string) => {
        const option = document.querySelector(`pie-listbox-option[data-test-id="${testId}"]`);
        if (!option) return;
        (option as HTMLElement & { disabled: boolean }).disabled = !(option as HTMLElement & { disabled: boolean }).disabled;
    };

    return html`
        <button data-test-id="btn-before">Before</button>
        <h3 id="rd-listbox-label">Multi-select listbox with runtime-toggleable disabled</h3>
        <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="rd-listbox-label" @change=${logSelectionChange}>
            <pie-listbox-option id="rd-item-1" data-test-id="item-1" value="m1">Option 1</pie-listbox-option>
            <pie-listbox-option id="rd-item-2" data-test-id="item-2" value="m2">Option 2</pie-listbox-option>
            <pie-listbox-option id="rd-item-3" data-test-id="item-3" value="m3">Option 3</pie-listbox-option>
        </pie-listbox>
        <button data-test-id="btn-after">After</button>
        <button data-test-id="btn-toggle-item-2" @click=${() => toggle('item-2')}>Toggle item 2 disabled</button>
    `;
};

const RuntimeSelectionModeSwitchTemplate = () => {
    const setMode = (value: 'single' | 'multiple') => {
        const listbox = document.querySelector('pie-listbox[data-test-id="pie-listbox"]');
        if (!listbox) return;
        listbox.setAttribute('selection-mode', value);
    };

    return html`
        <button data-test-id="btn-before">Before</button>
        <h3 id="rt-listbox-label">Runtime-switchable listbox</h3>
        <pie-listbox data-test-id="pie-listbox" selection-mode="single" aria-labelledby="rt-listbox-label" @change=${logSelectionChange}>
            <pie-listbox-option id="rt-item-1" data-test-id="item-1" value="r1">Option 1</pie-listbox-option>
            <pie-listbox-option id="rt-item-2" data-test-id="item-2" value="r2">Option 2</pie-listbox-option>
            <pie-listbox-option id="rt-item-3" data-test-id="item-3" value="r3">Option 3</pie-listbox-option>
        </pie-listbox>
        <button data-test-id="btn-after">After</button>
        <button data-test-id="btn-set-multi" @click=${() => setMode('multiple')}>Multi-select</button>
        <button data-test-id="btn-set-single" @click=${() => setMode('single')}>Single-select</button>
    `;
};

export const Default = createStory<ListboxProps>(Template, defaultArgs)();
export const MultiSelectKeyboardNavigation = createStory<ListboxProps>(MultiSelectKeyboardNavigationTemplate, defaultArgs)();
export const MultiSelectNoneSelected = createStory<ListboxProps>(MultiSelectNoneSelectedTemplate, defaultArgs)();
export const SingleSelectKeyboardNavigation = createStory<ListboxProps>(SingleSelectKeyboardNavigationTemplate, defaultArgs)();
export const SingleSelectNoneSelected = createStory<ListboxProps>(SingleSelectNoneSelectedTemplate, defaultArgs)();
export const EmptyListbox = createStory<ListboxProps>(EmptyListboxTemplate, defaultArgs)();
export const DynamicSlots = createStory<ListboxProps>(DynamicSlotsTemplate, defaultArgs)();
export const RuntimeSelectionModeSwitch = createStory<ListboxProps>(RuntimeSelectionModeSwitchTemplate, defaultArgs)();
export const MultiSelectWithActiveDescendant = createStory<ListboxProps>(MultiSelectWithActiveDescendantTemplate, defaultArgs)();
export const MultiSelectWithDisabled = createStory<ListboxProps>(MultiSelectWithDisabledTemplate, defaultArgs)();
export const SingleSelectWithDisabled = createStory<ListboxProps>(SingleSelectWithDisabledTemplate, defaultArgs)();
export const RuntimeDisabledToggle = createStory<ListboxProps>(RuntimeDisabledToggleTemplate, defaultArgs)();
export const Accessibility = createStory<ListboxProps>(AccessibilityTemplate, defaultArgs)();
