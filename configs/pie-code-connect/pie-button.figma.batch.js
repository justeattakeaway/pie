const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const trimEmptyLines = require('./utils/trim-empty-lines.js');

const componentNameHtml = figma.batch.id;
const componentNameReact = figma.batch.name;
const componentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentNameHtml;
const getInstanceProp = createGetInstanceProp(figma);

// Map figma props
const state = getInstanceProp('getPropertyValue', 'State');
const label = getInstanceProp('getString', '[𝐓] Label');
const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');
const hasTrailingIcon = getInstanceProp('getBoolean', 'Trailing icon');
const iconPlacement = hasTrailingIcon && !hasLeadingIcon ? 'trailing' : 'leading';

const variant = getInstanceProp('getEnum', 'Variant', {
    Primary: 'primary',
    'Primary - alternative': 'primary-alternative',
    'Primary - alternative dark': 'primary-alternative-dark',
    Secondary: 'secondary',
    Outline: 'outline',
    Ghost: 'ghost',
    'Ghost secondary': 'ghost',
    'Ghost dark': 'ghost-dark',
    Inverse: 'inverse',
    'Inverse outline': 'outline-inverse',
    'Inverse ghost': 'ghost-inverse',
    'Inverse ghost light': 'ghost-inverse-light',
    Destructive: 'destructive',
    'Destructive ghost': 'destructive-ghost',
});

const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    'Small - Expressive': 'small-expressive',
    'Small - Productive': 'small-productive',
    XSmall: 'xsmall',
});

const isDisabled = state === 'Disabled';
const isLoading = state === 'Loading';

// Icon slot instances
const leadingIconInstance = hasLeadingIcon ? getInstanceProp('getInstanceSwap', 'Replace leading icon') : null;
const trailingIconInstance = hasTrailingIcon ? getInstanceProp('getInstanceSwap', 'Replace trailing icon') : null;

const leadingIconSnippet = leadingIconInstance && leadingIconInstance.type === 'INSTANCE' && leadingIconInstance.hasCodeConnect()
    ? leadingIconInstance.executeTemplate().example
    : null;
const trailingIconSnippet = trailingIconInstance && trailingIconInstance.type === 'INSTANCE' && trailingIconInstance.hasCodeConnect()
    ? trailingIconInstance.executeTemplate().example
    : null;

// Define template
const template = `<${componentName}
    ${renderProp('variant', variant, 'primary')}
    ${renderProp('size', size, 'medium')}
    ${renderProp('disabled', isDisabled, false)}
    ${renderProp('isLoading', isLoading, false)}
    ${renderProp('iconPlacement', iconPlacement, 'leading')}
>
    ${leadingIconSnippet ? `<span slot="icon">${leadingIconSnippet}</span>` : ''}
    ${label}
    ${trailingIconSnippet ? `<span slot="icon">${trailingIconSnippet}</span>` : ''}
</${componentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentNameHtml, componentNameReact)],
    id: componentNameHtml,
};
