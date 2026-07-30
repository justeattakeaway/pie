const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const trimEmptyLines = require('./utils/trim-empty-lines.js');

const getInstanceProp = createGetInstanceProp(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

// Map figma props
const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
}) || 'medium';

const subtleColorSuffix = figma.batch.isSubtle ? '-subtle' : '';

const backgroundColor = getInstanceProp('getEnum', 'Variant', {
    'Neutral-alternative': 'default',
    '02 Orange subtle': 'brand-02',
    '03 Cupcake': `brand-03${subtleColorSuffix}`,
    '04 Berry': `brand-04${subtleColorSuffix}`,
    '05 Turmeric': `brand-05${subtleColorSuffix}`,
    '06 Aubergine': `brand-06${subtleColorSuffix}`,
    '08 Latte': `brand-08${subtleColorSuffix}`,
});

// Sub Components props mapping
// Read props from the Header instance
const heading = getInstanceProp(['Header'], 'getString', '[𝐓] Title');
const isDismissible = getInstanceProp(['Header'], 'getBoolean', 'Close');
const hasBackButton = getInstanceProp(['Header'], 'getPropertyValue', 'Back') === 'True'; // It's not boolean because it's declared as variant
const isHeadingEmphasised = getInstanceProp(['Header'], 'getPropertyValue', 'Prominent') === 'True'; // It's not boolean because it's declared as variant
const imageSlotMode = getInstanceProp(['Header'], 'getEnum', 'Header content', {
    None: undefined,
    Image: 'image',
    Illustration: 'illustration',
});
const imageSlotAspectRatio = imageSlotMode === 'image' && getInstanceProp(['Header', 'Image header'], 'getEnum', 'Size', {
    'Small (4:1)': 'small',
    'Medium (3:1)': 'medium',
    'Large (21:9)': 'large',
});

// Read props from the Footer instance
const isFooterPinned = getInstanceProp(['Footer'], 'getBoolean', 'Fixed');
const isFooterEmpty = getInstanceProp(['Footer'], 'getBoolean', 'Empty');
const hasFooterDualActions = getInstanceProp(['Footer'], 'getBoolean', 'Dual actions'); // "false" display only the Leading action
const hideSupportingAction = hasFooterDualActions === false && isFooterEmpty === false;

// Read props from the Footer buttons instance
const footerLeadingButtonText = getInstanceProp(['Footer', 'Footer / Button 1'], 'getString', '[𝐓] Label');
const footerSupportingButtonText = getInstanceProp(['Footer', 'Footer / Button 2'], 'getString', '[𝐓] Label');

// Define template
const template = `<${selectedComponentName}
    isOpen
    heading="${heading}"
    ${renderProp('size', size, 'medium')}
    ${renderProp('backgroundColor', backgroundColor, 'default')}
    ${renderProp('hasBackButton', hasBackButton, false)}
    ${renderProp('isDismissible', isDismissible, false)}
    ${renderProp('isHeadingEmphasised', isHeadingEmphasised, false)}
    ${renderProp('isFooterPinned', isFooterPinned, true)}
    ${renderProp('leadingAction', { text: footerLeadingButtonText })}
    ${hideSupportingAction ? '' : renderProp('supportingAction', { text: footerSupportingButtonText })}
    ${renderProp('imageSlotMode', imageSlotMode)}
    ${renderProp('imageSlotAspectRatio', imageSlotAspectRatio)}
>
    ${isFooterEmpty && hasFooterDualActions ? '<div slot="footer"></div>' : ''}
    ${imageSlotMode ? '<img slot="image" src="the-header-image-url.jpg">' : ''}
</${selectedComponentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
