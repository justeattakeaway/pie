import { html, type TemplateResult } from 'lit';
import '@justeattakeaway/pie-webc/components/button';
import '@justeattakeaway/pie-webc-core/src/test/functions/dispatchCustomEvent/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/mixins/formControlMixin/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/mixins/delegatesFocusMixin/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/controllers/rovingTabindex/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/controllers/activeDescendant/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/controllers/selection/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/formField/FormFieldMock';
import '@justeattakeaway/pie-webc-core/src/test/formField/CheckboxMock';
import '@justeattakeaway/pie-webc-core/src/test/formField/RadioMock';
import '@justeattakeaway/pie-webc-core/src/test/formField/RadioGroupMock';
import '@justeattakeaway/pie-webc-core/src/test/formField/CheckboxGroupMock';
import '@justeattakeaway/pie-webc-core/src/test/formField/DemoFormMock';
import { EXPECTED_MOCK_EVENT_MESSAGE } from '@justeattakeaway/pie-webc-core/src/test/functions/dispatchCustomEvent/constants';
/**
 * Mock stories for testing pie-webc-core functionality
 */
export default {
    title: 'webc-core',
};

/**
 * Story for testing the dispatchCustomEvent functionality
 */
export const DispatchCustomEvent = () => {
    function onDispatchCustomEvent () {
        console.info(EXPECTED_MOCK_EVENT_MESSAGE);
    }

    return html`
    <dispatch-custom-event-mock
        @pie-mock-event="${onDispatchCustomEvent}"
    ></dispatch-custom-event-mock>
`;
};

DispatchCustomEvent.storyName = 'Dispatch Custom Event Mock';

/**
 * Story for testing the dispatchCustomEvent functionality
 */
export const InvalidEventNameEvent = () => html`
    <dispatch-custom-event-mock
        eventName="mock-event"
    ></dispatch-custom-event-mock>
`;

InvalidEventNameEvent.storyName = 'Invalid Event Name';

/**
 * Story for testing FormControlMixin with no form
 */
export const FormControlMixinMock = () => html`
    <form-control-mixin-mock></form-control-mixin-mock>
`;

FormControlMixinMock.storyName = 'Form Control Mixin Mock';

/**
 * Story for testing FormControlMixin with a complete form
 */
export const FormControlMixinInForm = () => html`
    <form id="testForm" action="/foo" method="POST">
        <input type="text" id="username" name="username" required>
        <input type="password" id="password" name="password" required>
        <form-control-mixin-mock></form-control-mixin-mock>
    </form>
`;

FormControlMixinInForm.storyName = 'Form Control Mixin - Inside Form';

/**
 * Story for testing FormControlMixin with a sibling form
 */
export const FormControlMixinOutsideForm = () => html`
    <form id="siblingForm" action="/foo" method="POST">
        <input type="text" id="username" name="username" required>
        <input type="password" id="password" name="password" required>
    </form>
    <form-control-mixin-mock></form-control-mixin-mock>
`;

FormControlMixinOutsideForm.storyName = 'Form Control Mixin - Outside Form';

/**
 * Story for testing the v property on PieElement derived classes
 */
export const PieElementVersionProperty = () => html`<pie-button data-test-id="pie-element">Test</pie-button>`;
PieElementVersionProperty.storyName = 'Pie Elements contain correct version number';

export const DelegatesFocusMixinElement = () => html`
    <button id="first-focusable">First Focusable Element</button>
    <delegates-focus-mixin-mock></delegates-focus-mixin-mock>
`;

/**
 * Renders a controller mock beneath a short, non-interactive set of usage
 * instructions. The instructions use only text elements (no buttons/links) so
 * that pressing `Tab` still moves focus directly onto the widget.
 */
const controllerStory = (instructions: string[], mock: TemplateResult) => html`
    <div style="display: flex; flex-direction: column; gap: 16px; font-family: sans-serif; max-width: 640px;">
        <div>
            <p style="margin: 0 0 4px; font-weight: bold;">How to use this story</p>
            <ul style="margin: 0; padding-inline-start: 20px;">
                ${instructions.map((instruction) => html`<li>${instruction}</li>`)}
            </ul>
        </div>
        ${mock}
    </div>
`;

/**
 * Story for testing RovingTabindexController with both axes and wrapping (defaults)
 */
export const RovingTabindexBoth = () => controllerStory(
    [
        'Press Tab to move focus onto the group (it lands on the first item).',
        'Arrow Up, Down, Left and Right all move between items (both axes are active).',
        'Home jumps to the first item; End jumps to the last.',
        'Focus wraps: moving past the last item returns to the first, and vice versa.',
    ],
    html`<roving-tabindex-mock></roving-tabindex-mock>`,
);
RovingTabindexBoth.storyName = 'Roving Tabindex - Both Orientations';

/**
 * Story for testing RovingTabindexController constrained to the horizontal axis
 */
export const RovingTabindexHorizontal = () => controllerStory(
    [
        'Press Tab to move focus onto the group (it lands on the first item).',
        'Arrow Left and Right move between items.',
        'Arrow Up and Down are ignored (horizontal orientation).',
        'Home jumps to the first item; End jumps to the last. Focus wraps at the ends.',
    ],
    html`<roving-tabindex-mock orientation="horizontal"></roving-tabindex-mock>`,
);
RovingTabindexHorizontal.storyName = 'Roving Tabindex - Horizontal';

/**
 * Story for testing RovingTabindexController constrained to the vertical axis
 */
export const RovingTabindexVertical = () => controllerStory(
    [
        'Press Tab to move focus onto the group (it lands on the first item).',
        'Arrow Up and Down move between items (items are laid out as a column).',
        'Arrow Left and Right are ignored (vertical orientation).',
        'Home jumps to the first item; End jumps to the last. Focus wraps at the ends.',
    ],
    html`<roving-tabindex-mock orientation="vertical"></roving-tabindex-mock>`,
);
RovingTabindexVertical.storyName = 'Roving Tabindex - Vertical';

/**
 * Story for testing RovingTabindexController with wrapping disabled
 */
export const RovingTabindexNoWrap = () => controllerStory(
    [
        'Press Tab to move focus onto the group (it lands on the first item).',
        'Arrow Left and Right move between items (horizontal orientation).',
        'Focus does NOT wrap: Arrow Left on the first item and Arrow Right on the last do nothing.',
        'Home jumps to the first item; End jumps to the last.',
    ],
    html`<roving-tabindex-mock orientation="horizontal" nowrap></roving-tabindex-mock>`,
);
RovingTabindexNoWrap.storyName = 'Roving Tabindex - No Wrap';

/**
 * Story for testing RovingTabindexController when items are nested in extra markup
 */
export const RovingTabindexNested = () => controllerStory(
    [
        'Each item is buried inside wrapper markup, not a direct child of the host.',
        'Press Tab to move focus onto the group, then use Arrow Left and Right to navigate.',
        'Navigation works regardless of how deeply the items are nested.',
    ],
    html`<roving-tabindex-mock orientation="horizontal" nested></roving-tabindex-mock>`,
);
RovingTabindexNested.storyName = 'Roving Tabindex - Nested Items';

/**
 * Story for testing RovingTabindexController with mirrored arrow keys in RTL.
 * The RTL context is forced via a story-level `writingDirection` global (read by
 * the `WritingDirection` decorator), so the story always renders RTL and the
 * Storybook toolbar control reflects it.
 */
export const RovingTabindexRtl = () => controllerStory(
    [
        'This story is pinned to RTL (see the Writing Direction toolbar control).',
        'Both axes are active. Arrow Left moves to the NEXT item (visually to the left in RTL); Arrow Right moves to the PREVIOUS item.',
        'Arrow Up and Down are NOT mirrored: Down moves to the next item, Up to the previous.',
        'Home and End always jump to the first and last items in DOM order.',
    ],
    html`<roving-tabindex-mock orientation="both"></roving-tabindex-mock>`,
);
RovingTabindexRtl.storyName = 'Roving Tabindex - RTL';
RovingTabindexRtl.globals = { writingDirection: 'rtl' };

/**
 * Story for testing ActiveDescendantController in a vertical listbox
 */
export const ActiveDescendantVertical = () => controllerStory(
    [
        'Press Tab to focus the listbox container (focus stays on it the whole time).',
        'Arrow Up and Down move the active option; the highlighted option is the active descendant.',
        'The listbox’s aria-activedescendant attribute points at the active option’s id.',
        'Home/End jump to the first/last option, and focus wraps at the ends.',
        'Clicking an option makes it active and keeps focus on the listbox.',
    ],
    html`<active-descendant-mock orientation="vertical"></active-descendant-mock>`,
);
ActiveDescendantVertical.storyName = 'Active Descendant - Vertical';

/**
 * Story for testing ActiveDescendantController in a horizontal listbox
 */
export const ActiveDescendantHorizontal = () => controllerStory(
    [
        'Press Tab to focus the container.',
        'Arrow Left and Right move the active option; Arrow Up and Down are ignored.',
        'Home/End jump to the first/last option. Focus wraps at the ends.',
    ],
    html`<active-descendant-mock orientation="horizontal"></active-descendant-mock>`,
);
ActiveDescendantHorizontal.storyName = 'Active Descendant - Horizontal';

/**
 * Story for testing ActiveDescendantController with wrapping disabled
 */
export const ActiveDescendantNoWrap = () => controllerStory(
    [
        'Press Tab to focus the container.',
        'Arrow Up and Down move the active option.',
        'Focus does NOT wrap: Arrow Up on the first option and Arrow Down on the last do nothing.',
    ],
    html`<active-descendant-mock orientation="vertical" nowrap></active-descendant-mock>`,
);
ActiveDescendantNoWrap.storyName = 'Active Descendant - No Wrap';

/**
 * Story for testing ActiveDescendantController with mirrored arrow keys in RTL.
 * The RTL context is forced via a story-level `writingDirection` global.
 */
export const ActiveDescendantRtl = () => controllerStory(
    [
        'This story is pinned to RTL (see the Writing Direction toolbar control).',
        'Both axes are active. Arrow Left moves to the NEXT option (visually to the left in RTL); Arrow Right moves to the PREVIOUS.',
        'Arrow Up and Down are NOT mirrored: Down moves to the next option, Up to the previous.',
        'Home and End always jump to the first and last options in DOM order.',
    ],
    html`<active-descendant-mock orientation="both"></active-descendant-mock>`,
);
ActiveDescendantRtl.storyName = 'Active Descendant - RTL';
ActiveDescendantRtl.globals = { writingDirection: 'rtl' };

/**
 * Story for testing SelectionController in a single-select listbox
 * (composed with ActiveDescendantController for navigation)
 */
export const SelectionSingle = () => controllerStory(
    [
        'Press Tab to focus the listbox, then Arrow Up/Down to move the active option.',
        'Press Enter or Space (or click) to select the active option.',
        'Single-select: selecting an option deselects the previous one.',
        'The selected option is shown in bold (aria-selected="true").',
    ],
    html`<selection-listbox-mock></selection-listbox-mock>`,
);
SelectionSingle.storyName = 'Selection - Single-select listbox';

/**
 * Story for testing SelectionController in a single-select listbox where
 * selection follows focus (selecting the active option as navigation moves)
 */
export const SelectionSingleFollowsFocus = () => controllerStory(
    [
        'Press Tab to focus the listbox; the active option is selected immediately.',
        'Arrow Up/Down move the active option AND select it as you go (selection follows focus).',
        'Only one option is ever selected (aria-selected="true").',
    ],
    html`<selection-listbox-mock follow-focus></selection-listbox-mock>`,
);
SelectionSingleFollowsFocus.storyName = 'Selection - Single-select (follows focus)';

/**
 * Story for testing SelectionController reflecting an option pre-selected in
 * markup (the host seeds its value from `[selected]`, the controller reflects it)
 */
export const SelectionPreSelected = () => controllerStory(
    [
        'The "Onion" option is marked selected in markup; the component seeds its value from it on load.',
        'It shows as selected (bold) from the start, with no interaction.',
        'Selecting another option replaces it as normal.',
    ],
    html`<selection-listbox-mock pre-selected="Onion"></selection-listbox-mock>`,
);
SelectionPreSelected.storyName = 'Selection - Pre-selected from markup';

/**
 * Story for testing SelectionController with a pre-selected option AND
 * selection-follows-focus: the host starts navigation on the selected option so
 * it isn't clobbered, then selection tracks the active option from there.
 */
export const SelectionFollowsFocusPreSelected = () => controllerStory(
    [
        '"Onion" is pre-selected in markup, and selection follows focus.',
        'On load, Onion is both selected and the active option (the host seeds the active item to the selection).',
        'Arrow Up/Down move from Onion and select as you go — the pre-selection is the starting point, not lost.',
    ],
    html`<selection-listbox-mock follow-focus pre-selected="Onion"></selection-listbox-mock>`,
);
SelectionFollowsFocusPreSelected.storyName = 'Selection - Single (follows focus + pre-selected)';

/**
 * PoC: a fully-clickable card. The form-field IS the card (consumer styles the
 * host); label/description are read from [data-field-*] markers and applied as
 * aria on the control's native input via context. Clicking anywhere toggles it.
 */
export const FormFieldClickableCard = () => controllerStory(
    [
        'The form-field IS the card — click anywhere on it (label, description, padding) to toggle the checkbox.',
        'Label and description come from [data-field-label] / [data-field-description] in the consumer’s own markup, applied as aria-label / aria-description on the native <input> via context.',
        'The checkbox is fully controlled: it emits a change intent and the consumer (this story) sets `checked` — a real consumer could reject it (e.g. on a failed API call).',
    ],
    html`
        <form-field-mock
            style="display:flex; gap:12px; align-items:flex-start; inline-size:360px; padding:16px; border:1px solid #b3b3b3; border-radius:8px; cursor:pointer;"
        >
            <span style="flex:1;">
                <span data-field-label style="display:block; font-weight:bold;">Some label</span>
                <span data-field-description style="display:block; color:#555;">Some other longer text.</span>
                <span data-field-description style="display:block; color:#555;">more text</span>
            </span>
            <checkbox-mock
                value="card"
                @change=${(event: Event) => {
        const target = event.target as HTMLElement & { checked: boolean };
        target.checked = (event as CustomEvent<{ checked: boolean }>).detail.checked;
    }}
            ></checkbox-mock>
        </form-field-mock>
    `,
);
FormFieldClickableCard.storyName = 'Form Field - Fully clickable card';

/**
 * PoC: a traditional inline label + input. Clicking the label toggles the input;
 * aria-label is applied to the native input from the [data-field-label] marker.
 */
export const FormFieldTraditional = () => controllerStory(
    [
        'A traditional inline label + input. Click the label to toggle the checkbox.',
        'aria-label is applied to the native <input> from [data-field-label].',
        'The checkbox is fully controlled — it emits a change intent and the consumer (this story) sets `checked`.',
    ],
    html`
        <form-field-mock style="display:inline-flex; gap:8px; align-items:center; cursor:pointer;">
            <checkbox-mock
                value="terms"
                @change=${(event: Event) => {
        const target = event.target as HTMLElement & { checked: boolean };
        target.checked = (event as CustomEvent<{ checked: boolean }>).detail.checked;
    }}
            ></checkbox-mock>
            <span data-field-label>Accept terms and conditions</span>
        </form-field-mock>
    `,
);
FormFieldTraditional.storyName = 'Form Field - Traditional label + input';

/**
 * PoC: a radio group composing Roving + Selection controllers, with plain radios
 * that carry their own slotted label.
 */
export const RadioGroupPlain = () => controllerStory(
    [
        'Tab moves focus into the group (onto the first radio) — without selecting it.',
        'Arrow Up/Down/Left/Right move between radios AND select as you go (selection follows focus).',
        'Clicking a radio (or its label) selects it. Each input is named from its `label` prop.',
        'Option C is disabled — it is skipped by arrow navigation and cannot be selected.',
    ],
    html`
        <radio-group-mock aria-label="Plain radios">
            <radio-mock value="a" label="Option A"></radio-mock>
            <radio-mock value="b" label="Option B"></radio-mock>
            <radio-mock value="c" label="Option C (disabled)" disabled></radio-mock>
            <radio-mock value="d" label="Option D"></radio-mock>
        </radio-group-mock>
    `,
);
RadioGroupPlain.storyName = 'Radio Group - Plain radios';

/**
 * PoC: a radio group where each radio is wrapped in a fully-clickable form-field
 * card. Navigation (roving) works across the nested radios; the field provides
 * each radio's name/description via context; clicking anywhere on a card selects.
 */
export const RadioGroupCards = () => controllerStory(
    [
        'Each radio lives inside a fully-clickable form-field card with its own label + description.',
        'Arrow keys navigate across the cards (the controllers are nesting-agnostic).',
        'Clicking anywhere on a card selects its radio; the name/description come from the card markup via context.',
        'The "Scheduled" card is disabled — skipped by navigation and not selectable.',
    ],
    html`
        <radio-group-mock aria-label="Card radios" style="gap:12px;">
            ${['Standard', 'Express', 'Scheduled'].map((label, i) => html`
                <form-field-mock
                    style="display:flex; gap:12px; align-items:flex-start; inline-size:360px; padding:16px; border:1px solid #b3b3b3; border-radius:8px; cursor:pointer;"
                >
                    <span style="flex:1;">
                        <span data-field-label style="display:block; font-weight:bold;">${label} delivery</span>
                        <span data-field-description style="display:block; color:#555;">A short description of the ${label.toLowerCase()} option.</span>
                    </span>
                    <radio-mock value=${`opt-${i}`} ?disabled=${i === 2}></radio-mock>
                </form-field-mock>
            `)}
        </radio-group-mock>
    `,
);
RadioGroupCards.storyName = 'Radio Group - Fully clickable cards';

/**
 * PoC: a checkbox group composing Roving + Selection (multiple) controllers,
 * with plain checkboxes carrying their own label. Several may be selected.
 */
export const CheckboxGroupPlain = () => controllerStory(
    [
        'Each checkbox is individually tabbable (no roving) — Tab moves between them, Space toggles. Several can be selected at once.',
        'Clicking a checkbox (or its label) also toggles it.',
        '"Anchovies" is disabled — removed from the tab order and not selectable.',
        'Each checkbox is fully controlled: the group owns the value array and reflects `checked` back.',
    ],
    html`
        <checkbox-group-mock aria-label="Toppings">
            ${[
        { value: 'pepperoni', label: 'Pepperoni' },
        { value: 'mushroom', label: 'Mushroom' },
        { value: 'anchovies', label: 'Anchovies (disabled)', disabled: true },
        { value: 'olives', label: 'Olives' },
    ].map((topping) => html`
                <form-field-mock style="display:inline-flex; gap:8px; align-items:center; cursor:pointer;">
                    <checkbox-mock value=${topping.value} ?disabled=${topping.disabled ?? false}></checkbox-mock>
                    <span data-field-label>${topping.label}</span>
                </form-field-mock>
            `)}
        </checkbox-group-mock>
    `,
);
CheckboxGroupPlain.storyName = 'Checkbox Group - Plain checkboxes';

/**
 * PoC: a checkbox group where each checkbox is wrapped in a fully-clickable card.
 */
export const CheckboxGroupCards = () => controllerStory(
    [
        'Each checkbox lives inside a fully-clickable card with its own label + description.',
        'Each card is tabbable (no roving); Space or clicking a card toggles its checkbox.',
        'The "SMS" card is disabled — its checkbox is out of the tab order and not selectable.',
    ],
    html`
        <checkbox-group-mock aria-label="Notifications" style="gap:12px;">
            ${[
        { value: 'email', label: 'Email', disabled: false },
        { value: 'push', label: 'Push', disabled: false },
        { value: 'sms', label: 'SMS', disabled: true },
    ].map((channel) => html`
                <form-field-mock
                    style="display:flex; gap:12px; align-items:flex-start; inline-size:360px; padding:16px; border:1px solid #b3b3b3; border-radius:8px; cursor:pointer;"
                >
                    <span style="flex:1;">
                        <span data-field-label style="display:block; font-weight:bold;">${channel.label}</span>
                        <span data-field-description style="display:block; color:#555;">Receive notifications via ${channel.label.toLowerCase()}.</span>
                    </span>
                    <checkbox-mock value=${channel.value} ?disabled=${channel.disabled}></checkbox-mock>
                </form-field-mock>
            `)}
        </checkbox-group-mock>
    `,
);
CheckboxGroupCards.storyName = 'Checkbox Group - Fully clickable cards';

/**
 * PoC: a complex form stress-testing the form-field + controllers pattern across
 * many control types (text input, textarea, radio group in cards, checkbox group,
 * single checkbox), mixed layouts, disabled options, required fields and live
 * validation. The form is the consumer — it owns every value (shown live).
 */
export const ComplexForm = () => html`<demo-form-mock></demo-form-mock>`;
ComplexForm.storyName = 'Complex form (stress test)';

/**
 * Story for testing SelectionController in a multi-select listbox
 */
export const SelectionMultiple = () => controllerStory(
    [
        'Press Tab to focus the listbox, then Arrow Up/Down to move the active option.',
        'Press Space (or click) to toggle the active option on/off.',
        'Shift+click extends a contiguous range from the last selected option.',
        'Multi-select: several options can be selected at once (aria-multiselectable="true").',
    ],
    html`<selection-listbox-mock multiple></selection-listbox-mock>`,
);
SelectionMultiple.storyName = 'Selection - Multi-select listbox';
