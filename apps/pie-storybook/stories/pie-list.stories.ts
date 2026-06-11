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
            <h2 id="multi-list-label">Multi-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 2 (first selected). <br>
                Arrows move focus <em>without</em> changing selections, skipping disabled items. <br>
                Press <strong>Spacebar</strong> to toggle active selection states.
            </p>

            <pie-list data-test-id="pie-list" selection-type="multi" aria-labelledby="multi-list-label" @change=${logSelectionChange}>
                <pie-list-item id="list-item-m1" value="m1">Multi Option 1</pie-list-item>
                <pie-list-item id="list-item-m2" value="m2" selected>Multi Option 2 (Initial)</pie-list-item>
                <pie-list-item id="list-item-m3" value="m3" disabled>Multi Option 3 (Disabled)</pie-list-item>
                <pie-list-item id="list-item-m4" value="m4" selected>Multi Option 4 (Initial)</pie-list-item>
            </pie-list>
        </div>

        <div class="box">
            <h2 id="single-list-label">Single-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 3 (only selected). <br>
                Arrows move focus <strong>AND</strong> instantly select the new option while deselecting the old option,
                skipping disabled items. Spacebar is inactive.
            </p>

            <pie-list selection-type="single" aria-labelledby="single-list-label" @change=${logSelectionChange}>
                <pie-list-item id="list-item-s1" value="s1">Single Option 1</pie-list-item>
                <pie-list-item id="list-item-s2" value="s2" disabled>Single Option 2 (Disabled)</pie-list-item>
                <pie-list-item id="list-item-s3" value="s3" selected>Single Option 3 (Initial)</pie-list-item>
                <pie-list-item id="list-item-s4" value="s4">Single Option 4</pie-list-item>
            </pie-list>
        </div>

        <div class="box">
            <h2 id="undefined-list-label">Undefined Mode (Keyboard Disabled)</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Strategy is completely dormant. Keyboard navigation, focus roving, and focus
                rings do not engage. Completely skipped by Tab. The <code>disabled</code> prop is a no-op here.
            </p>

            <pie-list aria-labelledby="undefined-list-label">
                <pie-list-item id="list-item-u1">Plain Option 1</pie-list-item>
                <pie-list-item id="list-item-u2" disabled>Plain Option 2 (disabled prop ignored)</pie-list-item>
                <pie-list-item id="list-item-u3">Plain Option 3</pie-list-item>
            </pie-list>
        </div>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Interaction logs will stream here...</p>
    </div>
`;

const sharedStyles = html`
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            padding: 24px;
            background-color: #fcfcfc;
            color: #333;
            max-width: 480px;
        }
        h2 { color: #111; font-size: 1.25rem; }
        p.instruction {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.4;
            background: #f5f5f5;
            padding: 8px 12px;
            border-radius: 4px;
            margin-bottom: 16px;
        }
        button { padding: 8px 12px; margin: 4px; }
        .nav { margin-top: 16px; }

        /* Placeholder list styling for testing — not production-ready. */
        pie-list {
            border: 1px solid #d0d0d0;
            border-radius: 6px;
            background: #fff;
            overflow: hidden;
            margin: 12px 0;
        }
        pie-list-item {
            position: relative;
            border-block-end: 1px solid #ececec;
            transition: background-color 0.12s ease;
            padding-inline-start: 2rem;
        }
        pie-list-item:last-child { border-block-end: none; }
        pie-list[selection-type] pie-list-item:not([disabled]):hover {
            background-color: #f5f8ff;
        }
        pie-list-item[selected]::before {
            content: "✓";
            color: #1a73e8;
            font-weight: bold;
            position: absolute;
            inset-inline-start: 0.6rem;
            inset-block-start: 50%;
            transform: translateY(-50%);
        }
        pie-list-item[data-active] {
            outline: 2px solid #1a73e8;
            outline-offset: -2px;
        }
        pie-list-item[disabled] {
            color: #999;
            font-style: italic;
        }
    </style>
`;

const MultiSelectTemplate = () => html`
    ${sharedStyles}
    <h2 id="multi-sr-label">Choose your toppings</h2>
    <p class="instruction">
        Multi-select list. Tab moves focus into the list. Arrow keys move the active option without
        changing selection; Space toggles the active option. Disabled options are skipped by arrows
        but remain reachable to the screen reader cursor (e.g. VoiceOver swipe).
    </p>

    <div class="nav">
        <button data-test-id="btn-before">Before list</button>
    </div>

    <pie-list selection-type="multi" aria-labelledby="multi-sr-label" @change=${logSelectionChange}>
        <pie-list-item id="topping-cheese" value="cheese" selected>Extra cheese</pie-list-item>
        <pie-list-item id="topping-pepperoni" value="pepperoni">Pepperoni</pie-list-item>
        <pie-list-item id="topping-anchovies" value="anchovies" disabled>Anchovies (out of stock)</pie-list-item>
        <pie-list-item id="topping-mushrooms" value="mushrooms">Mushrooms</pie-list-item>
        <pie-list-item id="topping-pineapple" value="pineapple" disabled>Pineapple (out of stock)</pie-list-item>
        <pie-list-item id="topping-olives" value="olives" selected>Olives</pie-list-item>
    </pie-list>

    <div class="nav">
        <button data-test-id="btn-after">After list</button>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Selection changes will stream here...</p>
    </div>
`;

const SingleSelectTemplate = () => html`
    ${sharedStyles}
    <h2 id="single-sr-label">Choose a payment method</h2>
    <p class="instruction">
        Single-select list. Tab moves focus into the list and onto the currently selected option.
        Arrow keys move <strong>and</strong> select; Space is a no-op. Disabled options are skipped
        by arrows but remain reachable to the screen reader cursor.
    </p>

    <div class="nav">
        <button data-test-id="btn-before">Before list</button>
    </div>

    <pie-list selection-type="single" aria-labelledby="single-sr-label" @change=${logSelectionChange}>
        <pie-list-item id="pay-card" value="card" selected>Credit or debit card</pie-list-item>
        <pie-list-item id="pay-paypal" value="paypal">PayPal</pie-list-item>
        <pie-list-item id="pay-applepay" value="applepay" disabled>Apple Pay (unavailable on this device)</pie-list-item>
        <pie-list-item id="pay-cash" value="cash">Cash on delivery</pie-list-item>
        <pie-list-item id="pay-voucher" value="voucher" disabled>Voucher (no eligible voucher)</pie-list-item>
    </pie-list>

    <div class="nav">
        <button data-test-id="btn-after">After list</button>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Selection changes will stream here...</p>
    </div>
`;

const StaticListTemplate = () => html`
    ${sharedStyles}
    <h2 id="static-sr-label">Ingredients</h2>
    <p class="instruction">
        Static (informational) list — no <code>selection-type</code>. Tab skips the list entirely; the
        list and its items expose <code>role="list"</code> / <code>"listitem"</code> to the screen reader.
        The <code>disabled</code> property has no effect here (no <code>aria-disabled</code>, no styling).
    </p>

    <div class="nav">
        <button data-test-id="btn-before">Before list</button>
    </div>

    <pie-list aria-labelledby="static-sr-label">
        <pie-list-item value="flour">Flour</pie-list-item>
        <pie-list-item value="tomato">Tomato sauce</pie-list-item>
        <pie-list-item value="mozzarella" disabled>Mozzarella (disabled attr — should have no visible/SR effect)</pie-list-item>
        <pie-list-item value="basil">Basil</pie-list-item>
        <pie-list-item value="oil">Olive oil</pie-list-item>
    </pie-list>

    <div class="nav">
        <button data-test-id="btn-after">After list</button>
    </div>
`;

export const Default = createStory<ListProps>(Template, defaultArgs)();
export const MultiSelect = createStory<ListProps>(MultiSelectTemplate, defaultArgs)();
export const SingleSelect = createStory<ListProps>(SingleSelectTemplate, defaultArgs)();
export const StaticList = createStory<ListProps>(StaticListTemplate, defaultArgs)();
