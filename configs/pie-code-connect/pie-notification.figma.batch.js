const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const hasTitle = getInstanceProp('getBoolean', 'Title');
const heading = hasTitle && getInstanceProp('getString', '[𝐓] Title');
const supportText = getInstanceProp('getString', '[𝐓] Supporting text');

const variant = getInstanceProp('getEnum', 'Variant', {
    Neutral: 'neutral',
    'Neutral alternative': 'neutral-alternative',
    Info: 'info',
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
    Translucent: 'translucent',
}) || 'neutral';

const position = getInstanceProp('getEnum', 'Position', {
    'Inline with content': 'inline-content',
    'Full width': 'full-width',
});

const size = getInstanceProp('getEnum', 'Size (only in Narrow)', {
    Large: 'large',
    Small: 'small',
});

const isCompact = getInstanceProp('getPropertyValue', 'Compact') === 'True';
const isDismissible = isCompact === false && getInstanceProp('getBoolean', 'Close');
const hideIcon = getInstanceProp('getBoolean', 'Leading icon') === false;
const hasActions = getInstanceProp('getPropertyValue', 'Actions') === 'True';

// Read action button labels from the Actions nested component
const hasDualActions = hasActions && getInstanceProp(['Actions'], 'getBoolean', 'Dual actions');
const hasStackedActions = hasActions && !isCompact && getInstanceProp(['Actions'], 'getBoolean', 'Stacked');
const leadingActionText = getInstanceProp(['Actions', 'Button 1'], 'getString', '[𝐓] Label');
const supportingActionText = getInstanceProp(['Actions', 'Button 2'], 'getString', '[𝐓] Label');

const props = [
    'isOpen',
    renderProp('heading', heading),
    renderProp('variant', variant, 'neutral'),
    renderProp('position', position, 'inline-content'),
    renderProp('size', size, 'large'),
    renderProp('isDismissible', isDismissible, false),
    renderProp('hideIcon', hideIcon, false),
    renderProp('isCompact', isCompact, false),
    renderProp('hasStackedActions', hasStackedActions, false),
    hasActions ? renderProp('leadingAction', { text: leadingActionText }) : '',
    hasDualActions ? renderProp('supportingAction', { text: supportingActionText }) : '',
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
  ${supportText}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
