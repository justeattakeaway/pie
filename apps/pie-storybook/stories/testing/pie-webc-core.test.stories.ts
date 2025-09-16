import { html } from 'lit';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-webc-core/src/test/functions/dispatchCustomEvent/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/mixins/formControlMixin/MockComponent';
import '@justeattakeaway/pie-webc-core/src/test/mixins/delegatesFocusMixin/MockComponent';
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
