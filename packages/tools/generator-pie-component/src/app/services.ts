import {
    getComponentName,
    getComponentFilename,
    getReadmeName,
    getPercyComponentName,
} from './utils';

export type TransformedName = {
    componentName: string;
    defaultName: string;
    fileName: string;
    readme: string;
    percyComponentName: string;
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
        readme: getReadmeName(normalisedName), // e.g. Icon Button
        percyComponentName: getPercyComponentName(normalisedName), // e.g. ICON_BUTTON
    };
}
