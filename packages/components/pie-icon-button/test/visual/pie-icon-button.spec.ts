import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PropObject, Combination, getAllPropCombinations } from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieIconButton } from '@/index';
import { ICON_BUTTON_VARIANT } from '@/defs';
import { VisualTestCanvas } from './VisualTestCanvas';

/**
 * Splits an array of combinations by a particular property value.
 *
 * @param {Combination[]} combinations - The array of combinations to split.
 * @param {string} property - The property to split by.
 *
 * @returns {Record<string, Combination[]>} An object mapping each unique property value to the combinations that have it.
 */
// eslint-disable-next-line max-len
const splitByPropertyValue = (combinations: Combination[], property: string): Record<string, Combination[]> => combinations.reduce((splitCombinations: Record<string, Combination[]>, combination: Combination) => {
    // Get the value of the specified property in the current combination
    const propertyValue = combination[property];

    // Convert the propertyValue to string, as we are using it as a key in an object
    const propertyValueKey = String(propertyValue);

    // If this value has not been seen before, initialize a new array for it
    if (!(propertyValueKey in splitCombinations)) {
        splitCombinations[propertyValueKey] = [];
    }

    // Add the current combination to the array for its property value
    splitCombinations[propertyValueKey].push(combination);

    // Return the accumulator for the next iteration
    return splitCombinations;
}, {}); // Start with an empty object as the accumulator

/**
 * Converts an array of combinations into a string representation of a component.
 *
 * @param {Combination[]} combinations - The array of combinations to convert.
 * @param {string} componentName - The name of the component.
 *
 * @returns {string[]} An array of strings, where each string is a representation of a component with attributes.
 */
export const generateComponentStrings = (combinations: Combination[], componentName: string): string[] => combinations.map((combination) => {
    // Initialize a string with the opening tag of the component
    let componentString = `<${componentName}`;

    // For each property in the combination, add it as an attribute
    Object.keys(combination).forEach((property) => {
        const propertyValue = combination[property];

        // If the property is a boolean
        if (typeof propertyValue === 'boolean') {
            if (propertyValue) {
                // If the boolean is true, add just the property
                componentString += ` ${property}`;
            }
            // If the boolean is false, do not add the attribute
        } else {
            // Convert the property value to a string
            const propertyValueStr = String(propertyValue);

            // Add the attribute to the string
            componentString += ` ${property}="${propertyValueStr}"`;
        }
    });

    // Add the closing tag to the string
    componentString += `></${componentName}>`;

    // Return the string representation of the component
    return componentString;
});
const props: PropObject = {
    variant: Object.values(ICON_BUTTON_VARIANT),
    disabled: [true, false],
};

const combinations = getAllPropCombinations(props);
const splitCombos = splitByPropertyValue(combinations, 'variant');
const variantStringsPrimary = generateComponentStrings(splitCombos.primary, 'pie-icon-button').join('');
const variantStringsSecondary = generateComponentStrings(splitCombos.secondary, 'pie-icon-button').join('');
const variantStringsOutline = generateComponentStrings(splitCombos.outline, 'pie-icon-button').join('');
const variantStringsGhost = generateComponentStrings(splitCombos.ghost, 'pie-icon-button').join('');
const variantStringsGhostTertiary = generateComponentStrings(splitCombos['ghost-tertiary'], 'pie-icon-button').join('');

test('Render all prop variations', async ({ page, mount }) => {
    await mount(
        VisualTestCanvas,
        {
            props: { label: 'Variant: Primary' },
            slots: {
                default: `<div>${variantStringsPrimary}</div>`,
            },
        },
    );

    await mount(
        VisualTestCanvas,
        {
            props: { label: 'Variant: Secondary' },
            slots: {
                default: `<div>${variantStringsSecondary}</div>`,
            },
        },
    );

    await mount(
        VisualTestCanvas,
        {
            props: { label: 'Variant: Outline' },
            slots: {
                default: `<div>${variantStringsOutline}</div>`,
            },
        },
    );

    await mount(
        VisualTestCanvas,
        {
            props: { label: 'Variant: Ghost' },
            slots: {
                default: `<div>${variantStringsGhost}</div>`,
            },
        },
    );

    await mount(
        VisualTestCanvas,
        {
            props: { label: 'Variant: Ghost Tertiary' },
            slots: {
                default: `<div>${variantStringsGhostTertiary}</div>`,
            },
        },
    );

    await percySnapshot(page, 'PIE Icon Button - Visual Tests');
});
