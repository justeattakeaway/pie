import { create } from '@storybook/theming';
import darkLogo from '../static/images/logo--pie--dark.svg';
import lightLogo from '../static/images/logo--pie--light.svg';

const sharedThemeProperties = {
    brandTitle: 'PIE Design System',
    brandUrl: 'https://webc.pie.design/',
    brandTarget: '_self',
    fontBase: '"JETSansDigital", Arial, sans-serif',

    appBorderRadius: 8, // border radius for drop-down menus
};

// Create dark theme
const pieDarkTheme = create({
    base: 'dark',
    brandImage: darkLogo,

    colorSecondary: '#f36805', // used for highlights and accents in the storybook UI - set to color-interactive-brand

    appBg: '#1a1a19', // background for the left-hand sidebar (set on storybook <body> tag) - set to mozzarella-100
    appContentBg: '#1a1a19',
    appBorderColor: 'rgb(255,255,255,0.20)', // border color for separators inside menu dropdown - set to divider-inverse

    // Text colors
    textColor: '#fff', // text of sidebar list items
    textInverseColor: '#2a3846',
    textMutedColor: '#8c999b', // text colour for sidebar subheadings and placeholder text - set to charcoal-50

    barTextColor: '#fff', // text color for top menu bar items - set to whitebarHoverColor
    barSelectedColor: '#ff8000', // text selected color for top menu bar items - set to color-interactive-brand
    barHoverColor: '#e96302', // text hover color for top menu bar items
    barBg: '#1a1a19', // background for the top menu bar - set to mozzarella-100

    // Form colors
    // inputBg: '#1a1a19',
    inputBorder: '#9e9c9a',
    inputTextColor: '#fff',
    inputBorderRadius: 8,

    ...sharedThemeProperties
});

// Create light theme
const pieLightTheme = create({
  base: 'light',
  brandImage: lightLogo,

  colorSecondary: '#125fca', // used for highlights and accents in the storybook UI - set to color-support-info (blue)
  barHoverColor: '#094dac', // text hover color for top menu bar items

  ...sharedThemeProperties
});

// Export a function that returns the appropriate theme based on the theme parameter
export default function getTheme(theme = 'light') {
  return theme === 'dark' ? pieDarkTheme : pieLightTheme;
}


