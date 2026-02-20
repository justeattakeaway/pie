import { html } from 'lit';
import { type Meta, type StoryObj } from '@storybook/web-components';

// Import the pie-css styles
import '@justeattakeaway/pie-css/dist/index.css';

type RadioStaticArgs = {
    checked: boolean;
    disabled: boolean;
    error: boolean;
};

const defaultArgs: RadioStaticArgs = {
    checked: false,
    disabled: false,
    error: false,
};

const meta: Meta<RadioStaticArgs> = {
    title: 'CSS/Radio Static',
    argTypes: {
        checked: {
            description: 'Whether the radio appears checked',
            control: 'boolean',
        },
        disabled: {
            description: 'Whether the radio appears disabled',
            control: 'boolean',
        },
        error: {
            description: 'Whether the radio appears in error state',
            control: 'boolean',
        },
    },
    args: defaultArgs,
    parameters: {
        docs: {
            description: {
                component: 'Static radio button CSS classes for non-interactive display (receipts, confirmations, etc.). These are pure CSS classes that work on native <input type="radio"> elements.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<RadioStaticArgs>;

const Template = (args: RadioStaticArgs) => {
    const classes = [
        'c-radio-static',
        args.error && 'c-radio-static--error',
    ].filter(Boolean).join(' ');

    return html`
        <input 
            type="radio" 
            class="${classes}"
            ?checked="${args.checked}"
            ?disabled="${args.disabled}"
        />
    `;
};

export const Default: Story = {
    render: Template,
};

export const Checked: Story = {
    render: Template,
    args: {
        checked: true,
    },
};

export const Disabled: Story = {
    render: Template,
    args: {
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    render: Template,
    args: {
        checked: true,
        disabled: true,
    },
};

export const Error: Story = {
    render: Template,
    args: {
        error: true,
    },
};

export const ErrorChecked: Story = {
    render: Template,
    args: {
        checked: true,
        error: true,
    },
};

export const AllStates: Story = {
    render: () => html`
        <div style="display: flex; gap: 20px; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static" />
                <span style="font-size: 12px;">Unchecked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static" checked />
                <span style="font-size: 12px;">Checked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static" disabled />
                <span style="font-size: 12px;">Disabled</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static" checked disabled />
                <span style="font-size: 12px;">Checked + Disabled</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--error" />
                <span style="font-size: 12px;">Error</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--error" checked />
                <span style="font-size: 12px;">Checked + Error</span>
            </div>
        </div>
    `,
};
