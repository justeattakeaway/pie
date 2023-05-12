import { create } from '@storybook/theming/create';
import logo from '../public/logo--pie.svg';

export default create({
    base: 'light',
    brandTitle: 'PIE Storybook',
    brandUrl: 'https://pie.design/',
    brandImage: logo,

    // Fonts
    fontBase: '"JETSansDigital", Arial, sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: '#242e30'
});
