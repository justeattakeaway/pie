import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
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

function logSelectionChange (event: Event) {
    console.info('change logged');
    const list = event.target as HTMLElement;
    const type = list.getAttribute('selection-type') || 'undefined';
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
            <h2>Multi-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 2 (first selected). <br>
                Arrows move focus <em>without</em> changing selections. <br>
                Press <strong>Spacebar</strong> to toggle active selection states.
            </p>

            <pie-list data-test-id="pie-list" selection-type="multi" @change=${logSelectionChange}>
                <pie-list-item value="m1">Multi Option 1</pie-list-item>
                <pie-list-item value="m2" selected>Multi Option 2 (Initial)</pie-list-item>
                <pie-list-item value="m3">Multi Option 3</pie-list-item>
                <pie-list-item value="m4" selected>Multi Option 4 (Initial)</pie-list-item>
            </pie-list>
        </div>

        <div class="box">
            <h2>Single-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 3 (only selected). <br>
                Arrows move focus <strong>AND</strong> instantly select the new option while deselecting the old option.
                Spacebar is inactive.
            </p>

            <pie-list selection-type="single" @change=${logSelectionChange}>
                <pie-list-item value="s1">Single Option 1</pie-list-item>
                <pie-list-item value="s2">Single Option 2</pie-list-item>
                <pie-list-item value="s3" selected>Single Option 3 (Initial)</pie-list-item>
                <pie-list-item value="s4">Single Option 4</pie-list-item>
            </pie-list>
        </div>

        <div class="box">
            <h2>Undefined Mode (Keyboard Disabled)</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Strategy is completely dormant. Keyboard navigation, focus roving, and focus
                rings do not engage. Completely skipped by Tab.
            </p>

            <pie-list>
                <pie-list-item value="u1">Plain Option 1</pie-list-item>
                <pie-list-item value="u2">Plain Option 2</pie-list-item>
                <pie-list-item value="u3">Plain Option 3</pie-list-item>
            </pie-list>
        </div>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Interaction logs will stream here...</p>
    </div>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();
