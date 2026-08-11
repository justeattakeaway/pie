const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

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
const hasBackButton = getInstanceProp(['Header'], 'getBoolean', 'Back');
const isHeadingEmphasised = getInstanceProp(['Header'], 'getBoolean', 'Prominent');
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
const hideSupportingAction = getInstanceProp(['Footer'], 'getBoolean', 'Dual actions') === false;
const hasStackedActions = getInstanceProp(['Footer'], 'getEnum', 'CTA layout', {
    Stacked: true,
    'Side by side': false,
});

// Read props from the Footer buttons instance
const footerLeadingButtonText = isFooterEmpty ? '' : getInstanceProp(['Footer', 'Footer / Button 1'], 'getString', '[𝐓] Label');
const footerSupportingButtonText = hideSupportingAction ? '' : getInstanceProp(['Footer', 'Footer / Button 2'], 'getString', '[𝐓] Label');

// Map slot content
const slotInstance = figma.selectedInstance.getSlot('Modal content');
const slotContent = slotInstance.connectedInstances.map((action) => action.executeTemplate().example);

const props = [
    'isOpen',
    renderProp('heading', heading),
    renderProp('size', size, 'medium'),
    renderProp('backgroundColor', backgroundColor, 'default'),
    renderProp('hasBackButton', hasBackButton, false),
    renderProp('isDismissible', isDismissible, false),
    renderProp('isHeadingEmphasised', isHeadingEmphasised, false),
    isFooterEmpty ? '' : renderProp('isFooterPinned', isFooterPinned, true),
    isFooterEmpty ? '' : renderProp('leadingAction', { text: footerLeadingButtonText }),
    isFooterEmpty ? '' : renderProp('supportingAction', { text: footerSupportingButtonText }),
    isFooterEmpty ? '' : renderProp('hasStackedActions', hasStackedActions, null),
    renderProp('imageSlotMode', imageSlotMode),
    renderProp('imageSlotAspectRatio', imageSlotAspectRatio),
].filter(Boolean).join('\n    ');

// Define template
const template = figma.code`<${selectedComponentName}
    ${props}>
    ${imageSlotMode ? '<img slot="image" src="the-header-image-url.jpg">' : ''}
    ${slotContent.flat()}
    ${isFooterEmpty ? '<div slot="footer"></div>' : ''}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
