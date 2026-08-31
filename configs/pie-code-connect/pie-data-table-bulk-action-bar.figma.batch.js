const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');

const getInstanceProp = createGetInstanceProp(figma);
const { id } = figma.batch;

const hasButton2 = getInstanceProp('getBoolean', 'Button 2');
const hasButton3 = getInstanceProp('getBoolean', 'Button 3');
const hasButton4 = getInstanceProp('getBoolean', 'Button 4');

// Find all connected pie-button instances within the toolbar
const allButtons = figma.selectedInstance.findConnectedInstances(() => true);

const btn1 = allButtons[0]?.type === 'INSTANCE' ? allButtons[0].executeTemplate().example : undefined;
const btn2 = hasButton2 && allButtons[1]?.type === 'INSTANCE' ? allButtons[1].executeTemplate().example : undefined;
const btn3 = hasButton3 && allButtons[2]?.type === 'INSTANCE' ? allButtons[2].executeTemplate().example : undefined;
const btn4 = hasButton4 && allButtons[3]?.type === 'INSTANCE' ? allButtons[3].executeTemplate().example : undefined;

const template = figma.code`${btn1}
${btn2 ? figma.code`${btn2}` : ''}
${btn3 ? figma.code`${btn3}` : ''}
${btn4 ? figma.code`${btn4}` : ''}`;

// Note: This mapping only provides extra context for the pie-data-table-header, as there's no equivalent component in engineering
export default {
    example: template,
    imports: [getImportStatement('pie-button', 'PieButton')],
    id,
};
