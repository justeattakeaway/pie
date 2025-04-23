import { html } from 'lit';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { repeat } from 'lit/directives/repeat.js';
import { action } from '@storybook/addon-actions';

import '@justeattakeaway/pie-list';
import '@justeattakeaway/pie-list/dist/pie-list-item';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-radio';
import '@justeattakeaway/pie-checkbox';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

import { type ListProps } from '@justeattakeaway/pie-list';

// Default props
const defaultProps: ListProps = {
    variant: 'default',
    interactive: false,
    dividers: false,
    optimizeThreshold: 20,
};

// Main story definition
const meta: Meta<ListProps> = {
    title: 'List',
    component: 'pie-list',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'Specifies the layout variant of the list.',
            options: ['default', 'compact'],
            control: { type: 'select' },
        },
        interactive: {
            description: 'Whether the list has interactive items that respond to user interaction.',
            control: { type: 'boolean' },
        },
        dividers: {
            description: 'Whether to show dividers between list items.',
            control: { type: 'boolean' },
        },
        optimizeThreshold: {
            description: 'The threshold of items at which the component automatically switches to using the repeat directive for better performance.',
            control: { type: 'number' },
        },
    },
    args: defaultProps,
};

export default meta;
type Story = StoryObj<ListProps>;

//----------------------------------------------------------------------
// 1. VARIANTS
//----------------------------------------------------------------------

export const DefaultListItem: Story = {
    name: 'List Item - Default',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
        <pie-list>
            <pie-list-item>Primary text</pie-list-item>
        </pie-list>
    </div>
  `,
};

export const CompactListItem: Story = {
    name: 'List Item - Compact',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list variant="compact">
        <pie-list-item>Primary text</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const SecondaryTextListItem: Story = {
    name: 'List Item - Secondary Text',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item secondaryText="secondary text">Primary text</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const MetaTextListItem: Story = {
    name: 'List Item - Meta Text',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item trailingType="meta" primaryText="Primary text">
            <span slot="trailing">meta text</span>
        </pie-list-item>
      </pie-list>
    </div>
  `,
};

export const IconLeadingListItem: Story = {
    name: 'List Item - Icon Leading',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item leadingType="icon" primaryText="Primary text">
            <icon-plus-circle size="m" slot="leading"></icon-plus-circle>
        </pie-list-item>
      </pie-list>
    </div>
  `,
};

export const ThumbnailLeadingListItem: Story = {
    name: 'List Item - Thumbnail Leading',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item leadingType="thumbnail" primaryText="Primary text">
            <img slot="leading" src="https://placehold.co/40" alt="placeholder">
        </pie-list-item>
      </pie-list>
    </div>
  `,
};

export const RadioButtonLeadingListItem: Story = {
    name: 'List Item - Radio Button Leading',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item leadingType="radio" primaryText="Primary text">
            <pie-radio slot="leading"></pie-radio>
        </pie-list-item>
      </pie-list>
    </div>
  `,
};

export const CheckboxLeadingListItem: Story = {
    name: 'List Item - Checkbox Leading',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item leadingType="checkbox" primaryText="Primary text">
            <pie-checkbox slot="leading"></pie-checkbox>
        </pie-list-item>
      </pie-list>
    </div>
  `,
};

//----------------------------------------------------------------------
// 2. INTERACTIVITY (INTERACTIVE/NON-INTERACTIVE)
//----------------------------------------------------------------------

export const NonInteractiveList: Story = {
    name: 'Non-Interactive List',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const InteractiveList: Story = {
    name: 'Interactive List',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list
        interactive
        @pie-list-item-click=${(e: CustomEvent) => {
        // The listItem is already provided in the event detail
        action('list-item-click')({
            itemText: e.detail.item.textContent?.trim(),
            event: e.detail.originalEvent,
        });
    }}>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
      </pie-list>
    </div>
  `,
};

//----------------------------------------------------------------------
// 3. DIVIDERS
//----------------------------------------------------------------------

export const WithoutDividers: Story = {
    name: 'List Without Dividers',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const WithDividers: Story = {
    name: 'List With Dividers',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list dividers>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
        <pie-list-item>Primary text</pie-list-item>
      </pie-list>
    </div>
  `,
};

//----------------------------------------------------------------------
// 4. COMBINATIONS
//----------------------------------------------------------------------

export const CompactWithDividers: Story = {
    name: '(Compact) List With Dividers',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="width: 350px">
      <pie-list variant="compact" dividers>
        <pie-list-item>List Item 1</pie-list-item>
        <pie-list-item>List Item 2</pie-list-item>
        <pie-list-item>List Item 3</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const InteractiveCompact: Story = {
    name: 'Interactive Compact',
    parameters: {
        backgrounds: {
            default: 'background-subtle',
        },
    },
    render: () => html`
    <div style="max-width: 400px">
      <p>Interactive compact list</p>
      <pie-list variant="compact" interactive>
        <pie-list-item>List Item 1</pie-list-item>
        <pie-list-item>List Item 2</pie-list-item>
        <pie-list-item>List Item 3</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const InteractiveWithDividers: Story = {
    render: () => html`
    <div style="max-width: 400px">
      <p>Interactive list with dividers</p>
      <pie-list interactive dividers>
        <pie-list-item>List Item 1</pie-list-item>
        <pie-list-item>List Item 2</pie-list-item>
        <pie-list-item>List Item 3</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const FullFeatured: Story = {
    name: 'All Features (Interactive + Compact + Dividers)',
    render: () => html`
    <div style="max-width: 400px">
      <p>Compact interactive list with dividers</p>
      <pie-list variant="compact" interactive dividers>
        <pie-list-item>List Item 1</pie-list-item>
        <pie-list-item>List Item 2</pie-list-item>
        <pie-list-item>List Item 3</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const LongTextContent: Story = {
    render: () => html`
    <div style="max-width: 400px">
      <p>List with long text content</p>
      <pie-list>
        <pie-list-item>This is a list item with very long content that should wrap to the next line when it reaches the edge of its container.</pie-list-item>
        <pie-list-item>Another list item with long content to verify consistent spacing and alignment with the PIE design system guidelines and principles.</pie-list-item>
        <pie-list-item>A third list item with more reasonable length.</pie-list-item>
      </pie-list>
    </div>
  `,
};

export const EmptyList: Story = {
    render: () => html`
    <div style="max-width: 400px">
      <p>Empty list</p>
      <pie-list></pie-list>
    </div>
  `,
};

//----------------------------------------------------------------------
// 6. PERFORMANCE EXAMPLE
//----------------------------------------------------------------------

export const ManyItems: Story = {
    render: () => {
        const items = Array.from({ length: 25 }, (_, i) => ({
            id: `item-${i}`,
            text: `List Item ${i + 1}`,
        }));

        return html`
      <div style="max-width: 400px">
        <p>List with many items using repeat directive</p>
        <div style="max-height: 300px; overflow-y: auto; border: 1px solid #eee;">
          <pie-list dividers>
            ${repeat(
            items,
            (item) => item.id,
            (item) => html`<pie-list-item>${item.text}</<pie-list-item>`,
        )}
          </pie-list>
        </div>
      </div>
    `;
    },
};
