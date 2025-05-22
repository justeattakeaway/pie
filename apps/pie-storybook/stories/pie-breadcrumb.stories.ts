import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-breadcrumb';
import '@justeattakeaway/pie-breadcrumb/dist/pie-breadcrumb-item';
import { type BreadcrumbProps as BreadcrumbPropsBase, defaultProps, variants } from '@justeattakeaway/pie-breadcrumb';

import { type SlottedComponentProps } from '../types';
import { createStory, sanitizeAndRenderHTML } from '../utilities';

type BreadcrumbProps = SlottedComponentProps<BreadcrumbPropsBase>;
type BreadcrumbStoryMeta = Meta<BreadcrumbProps>;

const slot = `<pie-breadcrumb-item href="#">Breadcrumb 1</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Breadcrumb 2</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Breadcrumb 3</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Current Page</pie-breadcrumb-item>`;

const defaultArgs: BreadcrumbProps = {
    ...defaultProps,
    slot,
};

const breadcrumbStoryMeta: BreadcrumbStoryMeta = {
    title: 'Components/Breadcrumb',
    component: 'pie-breadcrumb',
    argTypes: {
        variant: {
            description: 'Set the variant of the breadcrumb.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isCompact: {
            description: 'When set to true, only the previous breadcrumb item is shown for quick navigation. If there\'s no item to go back to, the breadcrumb is hidden.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isCompact,
            },
        },
        slot: {
            description: 'The default slot is used to pass `pie-breadcrumb-item` elements. If only one item is provided, the breadcrumb is hidden.',
            control: 'text',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/46d9YJsbVPA9fEuC5C2EuT/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=314-23908&p=f&m=dev',
        },
    },
};

export default breadcrumbStoryMeta;

const Template = ({
    variant,
    isCompact,
    slot,
}: BreadcrumbProps) => html`
    <pie-breadcrumb
        ?isCompact="${isCompact}"
        variant="${ifDefined(variant)}">
            ${sanitizeAndRenderHTML(slot, { ALLOWED_TAGS: ['pie-breadcrumb-item'] })}
    </pie-breadcrumb>
`;

export const Default = createStory<BreadcrumbProps>(Template, defaultArgs)();
