import { create } from '@storybook/theming/create';
import logo from '../public/pie-logo.png';
import designTokens from '@justeat/pie-design-tokens/dist/tokens.json';

const jetDesignTokens = designTokens.theme.jet;

// All the variables we can override:
// {
//     base: 'light' | 'dark';
//     colorPrimary?: string;
//     colorSecondary?: string;
//     appBg?: string;
//     appContentBg?: string;
//     appBorderColor?: string;
//     appBorderRadius?: number;
//     fontBase?: string;
//     fontCode?: string;
//     textColor?: string;
//     textInverseColor?: string;
//     textMutedColor?: string;
//     barTextColor?: string;
//     barSelectedColor?: string;
//     barBg?: string;
//     buttonBg?: string;
//     buttonBorder?: string;
//     booleanBg?: string;
//     booleanSelectedBg?: string;
//     inputBg?: string;
//     inputBorder?: string;
//     inputTextColor?: string;
//     inputBorderRadius?: number;
//     brandTitle?: string;
//     brandUrl?: string;
//     brandImage?: string;
//     brandTarget?: string;
//     gridCellSize?: number;
// }

export default create({
    // Side bar background
    appBg: jetDesignTokens.color.alias.default['background-default'],
    // Controls background
    // appContentBg: 'hotpink',

    base: 'light',
    brandTitle: 'PIE Storybook',
    brandUrl: 'https://pie.design/',
    brandImage: logo,
    // barBg: '#1A1A19',
    // colorPrimary: 'blue',
    // colorSecondary: '#F36805',
    barTextColor: '#5C6F73',
    barSelectedColor: '#242E30',
    inputBorder: '#DBD9D7',
    inputBorderRadius: '8px',

    booleanBg: jetDesignTokens.color.alias.default['container-strong'],
    booleanSelectedBg: jetDesignTokens.color.alias.default['container-default'],

    // Fonts
    fontBase: '"JETSansDigital", Arial, sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: jetDesignTokens.color.alias.default['content-default'],
});
