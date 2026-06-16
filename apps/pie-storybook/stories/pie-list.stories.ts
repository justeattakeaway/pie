import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/list';
import '@justeattakeaway/pie-webc/components/list-item';
import '@justeattakeaway/pie-webc/components/switch';
import { type ListProps } from '@justeattakeaway/pie-webc/components/list';

import { createStory } from '../utilities';

type ListStoryMeta = Meta<ListProps>;

const defaultArgs: ListProps = {};

const listStoryMeta: ListStoryMeta = {
    title: 'Components/List',
    component: 'pie-list',
    argTypes: {
        variant: {
            control: 'select',
            options: ['static', 'radio', 'checkbox', 'switch'],
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

export default listStoryMeta;

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
        }
        pie-list-item:last-child { border-block-end: none; }
    </style>
`;

const slotControlStyles = html`
    <style>
        pie-list-item {
            padding-block: 8px;
            padding-inline: 12px;
        }
        pie-list-item input,
        pie-list-item pie-switch {
            vertical-align: middle;
            margin-inline-end: 8px;
        }
        pie-list-item pie-switch {
            display: inline-block;
        }
        pie-list-item label {
            cursor: pointer;
            vertical-align: middle;
        }
    </style>
`;

const StaticListTemplate = () => html`
    ${sharedStyles}
    <h2 id="static-sr-label">Ingredients</h2>
    <p class="instruction">
        Static (informational) list — <code>variant="static"</code> (default). Tab skips
        the list entirely; the list and its items expose
        <code>role="list"</code> / <code>"listitem"</code> to the screen reader.
    </p>

    <div class="nav">
        <button data-test-id="btn-before">Before list</button>
    </div>

    <pie-list data-test-id="pie-list" aria-labelledby="static-sr-label">
        <pie-list-item>Flour</pie-list-item>
        <pie-list-item>Tomato sauce</pie-list-item>
        <pie-list-item>Mozzarella</pie-list-item>
        <pie-list-item>Basil</pie-list-item>
        <pie-list-item>Olive oil</pie-list-item>
    </pie-list>

    <div class="nav">
        <button data-test-id="btn-after">After list</button>
    </div>
`;

const RadioGroupTemplate = () => html`
    ${sharedStyles}
    ${slotControlStyles}
    <h2 id="radio-sr-label">Choose a delivery slot</h2>
    <p class="instruction">
        <code>variant="radio"</code>. List exposes <code>role="radiogroup"</code>; items
        carry no role. Native radios handle their own keyboard navigation.
    </p>

    <pie-list variant="radio" aria-labelledby="radio-sr-label">
        <pie-list-item>
            <input id="slot-asap" type="radio" name="delivery-slot" value="asap" checked />
            <label for="slot-asap">As soon as possible</label>
        </pie-list-item>
        <pie-list-item>
            <input id="slot-1830" type="radio" name="delivery-slot" value="1830" />
            <label for="slot-1830">18:30 – 18:45</label>
        </pie-list-item>
        <pie-list-item>
            <input id="slot-1900" type="radio" name="delivery-slot" value="1900" />
            <label for="slot-1900">19:00 – 19:15</label>
        </pie-list-item>
    </pie-list>
`;

const CheckboxGroupTemplate = () => html`
    ${sharedStyles}
    ${slotControlStyles}
    <h2 id="checkbox-sr-label">Order preferences</h2>
    <p class="instruction">
        <code>variant="checkbox"</code>. List exposes <code>role="group"</code>; items
        carry no role. Each checkbox owns its own checked state and keyboard interaction.
    </p>

    <pie-list variant="checkbox" aria-labelledby="checkbox-sr-label">
        <pie-list-item>
            <input id="pref-cutlery" type="checkbox" name="pref" value="cutlery" checked />
            <label for="pref-cutlery">Include cutlery</label>
        </pie-list-item>
        <pie-list-item>
            <input id="pref-contactless" type="checkbox" name="pref" value="contactless" />
            <label for="pref-contactless">Contactless delivery</label>
        </pie-list-item>
        <pie-list-item>
            <input id="pref-leave-at-door" type="checkbox" name="pref" value="leave-at-door" />
            <label for="pref-leave-at-door">Leave at door</label>
        </pie-list-item>
    </pie-list>
`;

const SwitchGroupTemplate = () => html`
    ${sharedStyles}
    ${slotControlStyles}
    <h2 id="switch-sr-label">Notification settings</h2>
    <p class="instruction">
        <code>variant="switch"</code>. List exposes <code>role="group"</code>; items
        carry no role. Each <code>pie-switch</code> owns its own state and interactions; a
        sibling <code>&lt;label for&gt;</code> targets it via the element's <code>id</code>
        (works because <code>pie-switch</code> is form-associated).
    </p>

    <pie-list variant="switch" aria-labelledby="switch-sr-label">
        <pie-list-item>
            <pie-switch id="notif-orders" checked></pie-switch>
            <label for="notif-orders">Order updates</label>
        </pie-list-item>
        <pie-list-item>
            <pie-switch id="notif-promos"></pie-switch>
            <label for="notif-promos">Promotions and offers</label>
        </pie-list-item>
        <pie-list-item>
            <pie-switch id="notif-recs"></pie-switch>
            <label for="notif-recs">Restaurant recommendations</label>
        </pie-list-item>
    </pie-list>
`;

export const Default = createStory<ListProps>(StaticListTemplate, defaultArgs)();
export const StaticList = createStory<ListProps>(StaticListTemplate, defaultArgs)();
export const RadioGroup = createStory<ListProps>(RadioGroupTemplate, defaultArgs)();
export const CheckboxGroup = createStory<ListProps>(CheckboxGroupTemplate, defaultArgs)();
export const SwitchGroup = createStory<ListProps>(SwitchGroupTemplate, defaultArgs)();
