import { startCase, snakeCase, camelCase } from 'lodash';
import { TransformedName } from './types';

function trim (str: string) {
    return str.replace(/\s/g, '');
}

function getComponentNameStartCase (str: string) {
    return trim(startCase(str));
}

function getComponentNameCamelCase (str: string) {
    return trim(camelCase(str));
}

function getComponentFilename (str:string) {
    return `${trim(str)}`;
}

function getDisplayName (str: string) {
    return startCase(str);
}

function getPercyComponentName (str: string) {
    return snakeCase(str).toUpperCase();
}

/**
 *
 * @param {string} name – String input during prompts for the name of the component
 * @returns Object – transformed group of names to be used in the generator template files
 */
export function transformName (name: string): TransformedName {
    const normalisedName = name.toLowerCase();

    return {
        componentName: getComponentNameStartCase(normalisedName), // e.g IconButton,
        componentNameCamelCase: getComponentNameCamelCase(normalisedName), // e.g iconButton,
        defaultName: name, // e.g. button
        fileName: getComponentFilename(normalisedName), // e.g. button.scss
        displayName: getDisplayName(normalisedName), // e.g. Icon Button
        percyComponentName: getPercyComponentName(normalisedName), // e.g. ICON_BUTTON
    };
}
