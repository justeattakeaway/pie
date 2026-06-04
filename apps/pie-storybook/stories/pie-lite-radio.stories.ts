import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/lite-radio';
import { type LiteRadioProps } from '@justeattakeaway/pie-webc/components/lite-radio';

import { createStory } from '../utilities';

type LiteRadioStoryMeta = Meta<LiteRadioProps>;

const defaultArgs: LiteRadioProps = {};

const liteRadioStoryMeta: LiteRadioStoryMeta = {
    title: 'Lite Components/Lite Radio',
    component: 'pie-lite-radio',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default liteRadioStoryMeta;

// eslint-disable-next-line no-empty-pattern
const Template = ({}: LiteRadioProps) => html`
        <h2>With slotted labels</h2>
        <div style="display: flex; flex-direction: column; gap: var(--dt-spacing-b);">
            <pie-lite-radio>
                <label for="radio1">Radio 1</label>
                <input name="options" id="radio1" type="radio" value="1">
            </pie-lite-radio>

            <pie-lite-radio isError>
                <input name="options" id="radio2" type="radio" value="2">
                <label for="radio2">Radio 2</label>
            </pie-lite-radio>

            <pie-lite-radio>
                <label for="radio3">Radio 3</label>
                <input disabled name="options" id="radio3" type="radio" value="3">
            </pie-lite-radio>

            <pie-lite-radio>
                <label for="radio4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, atque impedit! Fugit animi ullam sit. Maiores quibusdam ut eveniet laborum inventore libero ad optio fuga error, enim unde molestias voluptate?</label>
                <input disabled name="options" id="radio4" type="radio" value="4">
            </pie-lite-radio>

            <h2>Without labels</h2>
            <pie-lite-radio>
                <input name="options" id="radio5" type="radio" value="5">
            </pie-lite-radio>

            <pie-lite-radio isError>
                <input name="options" id="radio6" type="radio" value="6">
            </pie-lite-radio>

            <pie-lite-radio>
                <input disabled name="options" id="radio7" type="radio" value="7">
            </pie-lite-radio>
        </div>
    </form>

`;

export const Default = createStory<LiteRadioProps>(Template, defaultArgs)();

// eslint-disable-next-line no-empty-pattern
const FormTemplate = ({}: LiteRadioProps) => html`
    <form id="liteRadioForm" style="display: flex; flex-direction: column; gap: var(--dt-spacing-d); max-width: 360px;">
        <fieldset style="border: 1px solid var(--dt-color-border-default); padding: var(--dt-spacing-d); border-radius: 4px;">
            <legend>Favourite option</legend>
            <div style="display: flex; flex-direction: column; gap: var(--dt-spacing-b); margin-top: var(--dt-spacing-b);">
                <pie-lite-radio>
                    <label for="formRadio1">Option A</label>
                    <input name="choice" id="formRadio1" type="radio" value="a">
                </pie-lite-radio>
                <pie-lite-radio>
                    <label for="formRadio2">Option B</label>
                    <input name="choice" id="formRadio2" type="radio" checked value="b">
                </pie-lite-radio>
                <pie-lite-radio isError>
                    <label for="formRadio3">Option C (error state)</label>
                    <input name="choice" required id="formRadio3" type="radio" value="c">
                </pie-lite-radio>
                <pie-lite-radio>
                    <label for="formRadio4">Option D (disabled)</label>
                    <input name="choice" id="formRadio4" type="radio" value="d" disabled>
                </pie-lite-radio>
            </div>
        </fieldset>

        <div style="display: flex; gap: var(--dt-spacing-b);">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </div>

        <pre id="liteRadioOutput" style="padding: var(--dt-spacing-b); background-color: var(--dt-color-container-subtle); border-radius: 4px; min-height: 48px; margin: 0; font-size: 0.875rem;">Awaiting submission…</pre>
    </form>

    <script>
        // var is used to prevent storybook from erroring when the script is re-run
        var liteRadioForm = document.querySelector('#liteRadioForm');
        var liteRadioOutput = document.querySelector('#liteRadioOutput');

        liteRadioForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var formData = new FormData(liteRadioForm);
            var result = {};
            formData.forEach(function (value, key) { result[key] = value; });
            liteRadioOutput.textContent = JSON.stringify(result, null, 2);
        });

        liteRadioForm.addEventListener('reset', function () {
            liteRadioOutput.textContent = '(form reset)';
        });
    </script>
`;

export const ExampleForm = createStory<LiteRadioProps>(FormTemplate, defaultArgs)();
