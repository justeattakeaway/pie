import '@justeattakeaway/pie-icons-webc';
import * as icons from '@justeattakeaway/pie-icons-webc';
import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';

export default {
    title: 'Icons',
    // component: 'icon-alcohol',
    argTypes: {
        size: {
            control: 'select',
            options: ['s', 'm', 'l', 'xl'],
        },

    },
    args: {
        size: 'm',
    },
} as Meta;

const Template = ({
    size,
} : any): TemplateResult => html`
        <icon-alcohol></icon-alcohol>
        `;

const toKebabCase = (str: string) => {
    const result = str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    return result.startsWith('-') ? unsafeStatic(result.slice(1)) : unsafeStatic(result);
};

const Template2 = ({ size } : any): TemplateResult => html`
    <div style="display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 1.5rem;
    justify-items: center;
    margin: 0;
    padding: 0;
    grid-auto-rows: 1fr;
">
        ${Object.keys(icons).map((iconName) => {
    const kebabIconName = toKebabCase(iconName);
    return html`
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <${kebabIconName} size=${size}></${kebabIconName}>
                    <div style="margin-top: 10px;">${iconName}</div>
                </div>
            `;
})}
    </div>
`;

const defaultArgs = {
    size: 'm',
};

export const Primary: Story<any> = (args: any) => Template2(args);
Primary.args = {
    ...defaultArgs,
};
