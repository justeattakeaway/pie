import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '@justeattakeaway/pie-divider';

const meta: Meta = {
    title: 'Foo',
    component: 'pie-divider',
};
export default meta;

type Story = StoryObj;

export const Variant1: Story = {
    // 👇 This story will not appear in Storybook's sidebar or docs page
    tags: ['dev', '!autodocs'],
    args: { variant: 1 },
};

export const Variant2: Story = {
    // 👇 This story will not appear in Storybook's sidebar or docs page
    tags: ['dev', '!autodocs'],
    args: { variant: 2 },
};

export const Combo: Story = {
    // 👇 This story should not be tested, but will appear in the sidebar and docs page
    tags: ['!dev'],
    render: () => html`
    <div>
      <pie-divider></pie-divider>
    </div>
  `,
};
