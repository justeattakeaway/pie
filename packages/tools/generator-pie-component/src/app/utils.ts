import { startCase, snakeCase } from 'lodash';
import { TransformedName } from './types';

function trim (str: string) {
    return str.replace(/\s/g, '');
}

function getComponentName (str: string) {
    return trim(startCase(str));
}

function getComponentFilename (str:string) {
    return `${trim(str)}`;
}

function getReadmeName (str: string) {
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
        componentName: getComponentName(normalisedName), // e.g IconButton,
        defaultName: name, // e.g. button
        fileName: getComponentFilename(normalisedName), // e.g. button.scss
        readmeName: getReadmeName(normalisedName), // e.g. Icon Button
        percyComponentName: getPercyComponentName(normalisedName), // e.g. ICON_BUTTON
    };
}
