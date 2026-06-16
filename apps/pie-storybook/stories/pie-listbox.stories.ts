import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/listbox';
import '@justeattakeaway/pie-webc/components/listbox-option';
import { type ListboxProps } from '@justeattakeaway/pie-webc/components/listbox';

import { createStory } from '../utilities';

type ListboxStoryMeta = Meta<ListboxProps>;

const defaultArgs: ListboxProps = {
    selectionMode: 'single',
};

const listboxStoryMeta: ListboxStoryMeta = {
    title: 'Components/Listbox',
    component: 'pie-listbox',
    argTypes: {
        selectionMode: {
            control: 'select',
            options: ['single', 'multiple'],
        },
    },
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

        /* Placeholder listbox styling for testing — not production-ready. */
        pie-listbox {
            border: 1px solid #d0d0d0;
            border-radius: 6px;
            background: #fff;
            overflow: hidden;
            margin: 12px 0;
        }
        pie-listbox-option {
            position: relative;
            border-block-end: 1px solid #ececec;
            transition: background-color 0.12s ease;
            padding-inline-start: 2rem;
        }
        pie-listbox-option:last-child { border-block-end: none; }
        pie-listbox-option:not([disabled]):hover {
            background-color: #f5f8ff;
        }
        pie-listbox-option[selected]::before {
            content: "✓";
            color: #1a73e8;
            font-weight: bold;
            position: absolute;
            inset-inline-start: 0.6rem;
            inset-block-start: 50%;
            transform: translateY(-50%);
        }
        pie-listbox-option[disabled] {
            color: #999;
            font-style: italic;
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
`;

const MultiSelectTemplate = () => html`
    ${sharedStyles}
    <h2 id="multi-sr-label">Choose your toppings</h2>
    <p class="instruction">
        <code>selection-mode="multiple"</code>. Tab moves focus into the listbox.
        Arrow keys move the active option without changing selection;
        Space toggles the active option. Disabled options are skipped by
        arrows but remain reachable to the screen reader cursor (e.g. VoiceOver swipe).
    </p>

    <div class="nav">
        <button data-test-id="btn-before">Before listbox</button>
    </div>

    <pie-listbox selection-mode="multiple" aria-labelledby="multi-sr-label" @change=${logSelectionChange}>
        <pie-listbox-option id="topping-cheese" value="cheese" selected>Extra cheese</pie-listbox-option>
        <pie-listbox-option id="topping-pepperoni" value="pepperoni">Pepperoni</pie-listbox-option>
        <pie-listbox-option id="topping-anchovies" value="anchovies" disabled>Anchovies (out of stock)</pie-listbox-option>
        <pie-listbox-option id="topping-mushrooms" value="mushrooms">Mushrooms</pie-listbox-option>
        <pie-listbox-option id="topping-pineapple" value="pineapple" disabled>Pineapple (out of stock)</pie-listbox-option>
        <pie-listbox-option id="topping-olives" value="olives" selected>Olives</pie-listbox-option>
    </pie-listbox>

    <div class="nav">
        <button data-test-id="btn-after">After listbox</button>
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
        <code>selection-mode="single"</code> (default). Tab moves focus into the
        listbox and onto the currently selected option. Arrow keys move
        <strong>and</strong> select; Space is a no-op. Disabled options are skipped
        by arrows but remain reachable to the screen reader cursor.
    </p>

    <div class="nav">
        <button data-test-id="btn-before">Before listbox</button>
    </div>

    <pie-listbox aria-labelledby="single-sr-label" @change=${logSelectionChange}>
        <pie-listbox-option id="pay-card" value="card" selected>Credit or debit card</pie-listbox-option>
        <pie-listbox-option id="pay-paypal" value="paypal">PayPal</pie-listbox-option>
        <pie-listbox-option id="pay-applepay" value="applepay" disabled>Apple Pay (unavailable on this device)</pie-listbox-option>
        <pie-listbox-option id="pay-cash" value="cash">Cash on delivery</pie-listbox-option>
        <pie-listbox-option id="pay-voucher" value="voucher" disabled>Voucher (no eligible voucher)</pie-listbox-option>
    </pie-listbox>

    <div class="nav">
        <button data-test-id="btn-after">After listbox</button>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Selection changes will stream here...</p>
    </div>
`;

const OverviewTemplate = () => html`
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
            <h2 id="multi-listbox-label">Multi-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 2 (first selected). <br>
                Arrows move focus <em>without</em> changing selections, skipping disabled options. <br>
                Press <strong>Spacebar</strong> to toggle active selection states.
            </p>

            <pie-listbox data-test-id="pie-listbox" selection-mode="multiple" aria-labelledby="multi-listbox-label" @change=${logSelectionChange}>
                <pie-listbox-option id="listbox-option-m1" value="m1">Multi Option 1</pie-listbox-option>
                <pie-listbox-option id="listbox-option-m2" value="m2" selected>Multi Option 2 (Initial)</pie-listbox-option>
                <pie-listbox-option id="listbox-option-m3" value="m3" disabled>Multi Option 3 (Disabled)</pie-listbox-option>
                <pie-listbox-option id="listbox-option-m4" value="m4" selected>Multi Option 4 (Initial)</pie-listbox-option>
            </pie-listbox>
        </div>

        <div class="box">
            <h2 id="single-listbox-label">Single-Select Mode</h2>
            <p class="instruction">
                <strong>Behavior:</strong> Tab focuses Option 3 (only selected). <br>
                Arrows move focus <strong>AND</strong> instantly select the new option while deselecting the old option,
                skipping disabled options. Spacebar is inactive.
            </p>

            <pie-listbox selection-mode="single" aria-labelledby="single-listbox-label" @change=${logSelectionChange}>
                <pie-listbox-option id="listbox-option-s1" value="s1">Single Option 1</pie-listbox-option>
                <pie-listbox-option id="listbox-option-s2" value="s2" disabled>Single Option 2 (Disabled)</pie-listbox-option>
                <pie-listbox-option id="listbox-option-s3" value="s3" selected>Single Option 3 (Initial)</pie-listbox-option>
                <pie-listbox-option id="listbox-option-s4" value="s4">Single Option 4</pie-listbox-option>
            </pie-listbox>
        </div>
    </div>

    <h3>Live Event Log</h3>
    <div id="logger">
        <p style="color: #888;">> Interaction logs will stream here...</p>
    </div>
`;

export const Default = createStory<ListboxProps>(OverviewTemplate, defaultArgs)();
export const SingleSelect = createStory<ListboxProps>(SingleSelectTemplate, defaultArgs)();
export const MultiSelect = createStory<ListboxProps>(MultiSelectTemplate, defaultArgs)();
