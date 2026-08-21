const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getIconSnippet = require('./utils/get-icon-snippet.js');
const getImportStatement = require('./utils/get-import-statement.js');
const createGetSlotContent = require('./utils/get-slot-content.js');

const getInstanceProp = createGetInstanceProp(figma);
const getSlotContent = createGetSlotContent(figma);
const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;

const isOpen = getInstanceProp('getEnum', 'Expanded', { True: true, False: false });
const isEmphasisReduced = getInstanceProp('getEnum', 'Low emphasis', { True: true, False: false });

// Note: the "size" prop has the default value "auto" that fits most scenarios, overriding it should be a consumer decision.
// The Figma component exposes only "wide" and "narrow" as there's no such concept of responsivity.

const headingLabel = getInstanceProp('getString', '[𝐓] Primary text');
const hasSecondaryText = getInstanceProp('getBoolean', 'Secondary text');
const secondaryLabel = hasSecondaryText ? getInstanceProp('getString', '[𝐓] Secondary text') : undefined;

const hasLeadingIcon = getInstanceProp('getBoolean', 'Leading icon');
const iconInstance = hasLeadingIcon ? getInstanceProp('getInstanceSwap', 'Replace leading icon') : null;
const iconSnippet = hasLeadingIcon ? getIconSnippet(iconInstance, (code) => code.replace('></', ' slot="icon"></')) : '';

const isDividerHidden = !getInstanceProp('getBoolean', 'Divider');

const slotContent = getSlotContent('Accordion content');

const props = [
    renderProp('headingLabel', headingLabel, ''),
    renderProp('secondaryLabel', secondaryLabel),
    renderProp('isOpen', isOpen, false),
    renderProp('isEmphasisReduced', isEmphasisReduced, false),
    renderProp('isDividerHidden', isDividerHidden, false),
].filter(Boolean).join('\n    ');

const template = figma.code`<${selectedComponentName}
    ${props}>
    ${iconSnippet}
    ${slotContent}
</${selectedComponentName}>`;

export default {
    example: template,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
