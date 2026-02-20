import { html } from 'lit';
import { type Meta, type StoryObj } from '@storybook/web-components';

// Import the pie-css styles
import '@justeattakeaway/pie-css/dist/index.css';

// Import demo SCSS styles for interactive card example
import './pie-css-radio-static-demo.scss';

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
                component: 'Static radio button CSS classes for non-interactive display (receipts, confirmations, etc.). These are pure CSS classes that work on native <input type="radio"> elements. Includes optional interactive state modifiers available as both SCSS mixins (@include) and CSS classes for parent container interactions. For comprehensive documentation with usage examples, see the [Radio Static Styling guide](/docs/additional-libraries-pie-css-radio-static-styling--docs).',
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

/* Interactive State Modifiers */

export const HoverState: Story = {
    render: () => html`
        <div style="display: flex; gap: 20px; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--hover" />
                <span style="font-size: 12px;">Hover Unchecked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--hover" checked />
                <span style="font-size: 12px;">Hover Checked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--hover c-radio-static--error" checked />
                <span style="font-size: 12px;">Hover Checked + Error</span>
            </div>
        </div>
    `,
};

export const ActiveState: Story = {
    render: () => html`
        <div style="display: flex; gap: 20px; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--active" />
                <span style="font-size: 12px;">Active Unchecked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--active" checked />
                <span style="font-size: 12px;">Active Checked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--active c-radio-static--error" checked />
                <span style="font-size: 12px;">Active Checked + Error</span>
            </div>
        </div>
    `,
};

export const FocusState: Story = {
    render: () => html`
        <div style="display: flex; gap: 20px; align-items: center;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--focus" />
                <span style="font-size: 12px;">Focus Unchecked</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <input type="radio" class="c-radio-static c-radio-static--focus" checked />
                <span style="font-size: 12px;">Focus Checked</span>
            </div>
        </div>
    `,
};

export const ParentInteractionDemo: Story = {
    render: () => {
        // Track selected option for demo
        const selectedOption = 'option2';

        const handleCardClick = (e: Event, optionId: string) => {
            const card = e.currentTarget as HTMLElement;
            const radio = card.querySelector('input[type="radio"]') as HTMLInputElement;

            // Update checked state
            if (radio) {
                radio.checked = true;
            }

            // Update card selection state
            const allCards = card.parentElement?.querySelectorAll('.interactive-card');
            allCards?.forEach((c) => c.classList.remove('is-selected'));
            card.classList.add('is-selected');
        };

        return html`
            <div class="demo-container">
                <div class="demo-instructions">
                    <strong>Try it out:</strong> Hover over the cards to see the radio buttons respond to parent container interaction using SCSS <code>@include</code> mixins.
                    Click a card to select it and see the expanded content.
                </div>
                
                <div 
                    class="interactive-card" 
                    tabindex="0"
                    role="button"
                    @click="${(e: Event) => handleCardClick(e, 'option1')}"
                >
                    <input type="radio" class="c-radio-static" name="demo-options" id="option1" />
                    
                    <div class="card-content">
                        <h3 class="card-title">Free delivery</h3>
                        <p class="card-description">Valid until 30 November 2024</p>
                    </div>
                    
                    <div class="card-icon" aria-hidden="true">
                        🍴
                    </div>
                </div>
                
                <div 
                    class="interactive-card is-selected" 
                    tabindex="0"
                    role="button"
                    @click="${(e: Event) => handleCardClick(e, 'option2')}"
                >
                    <input type="radio" class="c-radio-static" name="demo-options" id="option2" checked />
                    
                    <div class="card-content">
                        <h3 class="card-title">Free delivery & extend</h3>
                        <p class="card-description">
                            Extend for another 90 days<br />
                            Valid until 30 November 2024
                        </p>
                        
                        <div class="card-expanded-content">
                            Keep your <strong>£0 delivery fee</strong> with Just Eat+ Premium! This option adds another 90 days for <strong>£5.99</strong>
                        </div>
                    </div>
                    
                    <div class="card-icon" aria-hidden="true">
                        🍴
                    </div>
                </div>
                
                <div 
                    class="interactive-card" 
                    tabindex="0"
                    role="button"
                    @click="${(e: Event) => handleCardClick(e, 'option3')}"
                >
                    <input type="radio" class="c-radio-static" name="demo-options" id="option3" />
                    
                    <div class="card-content">
                        <h3 class="card-title">Standard delivery</h3>
                        <p class="card-description">Pay per delivery with standard rates</p>
                    </div>
                    
                    <div class="card-icon" aria-hidden="true">
                        🚚
                    </div>
                </div>
            </div>
            
            <div class="demo-explanation">
                <h4>How it works with SCSS mixins</h4>
                <p>
                    The card styles use SCSS <code>@include</code> to apply radio state mixins when the parent container is interacted with.
                    This keeps your code DRY and maintainable.
                </p>
                <p>
                    <strong>SCSS implementation:</strong>
                </p>
                <pre><code>@use '@justeattakeaway/pie-css/scss/helpers/radio';

.interactive-card {
    // Apply hover state to nested radio
    &:hover .c-radio-static {
        @include radio.radio-static-hover;
    }
    
    // Apply active state
    &:active .c-radio-static {
        @include radio.radio-static-active;
    }
    
    // Apply focus state
    &:focus-visible .c-radio-static {
        @include radio.radio-static-focus;
    }
}</code></pre>
                <p>
                    <strong>Benefits:</strong> No CSS duplication, automatic updates when design tokens change, and works with any SASS/SCSS build process.
                </p>
            </div>
        `;
    },
};
