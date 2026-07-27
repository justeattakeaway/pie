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
const isDismissible = getInstanceProp('getBoolean', 'Close');
const hideIcon = getInstanceProp('getBoolean', 'Leading icon') === false;
const heading = getInstanceProp('getString', '[𝐓] Title');
const hasActions = getInstanceProp('getPropertyValue', 'Actions') === 'True';

// Read action button labels from the Actions nested component
const leadingActionText = getInstanceProp(['Actions', 'Button 1'], 'getString', '[𝐓] Label');
const supportingActionText = getInstanceProp(['Actions', 'Button 2'], 'getString', '[𝐓] Label');

// Define template
const template = `<${componentName}
    isOpen
    heading="${heading}"
    ${renderProp('variant', variant, 'neutral')}
    ${renderProp('position', position, 'inline-content')}
    ${renderProp('size', size, 'large')}
    ${renderProp('isCompact', isCompact, false)}
    ${renderProp('isDismissible', isDismissible, false)}
    ${renderProp('hideIcon', hideIcon, false)}
    ${renderProp('leadingAction', { text: hasActions ? leadingActionText : '' })}
    ${renderProp('supportingAction', { text: hasActions ? supportingActionText : '' })}
>
</${componentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentNameHtml, componentNameReact)],
    id: componentNameHtml,
};
