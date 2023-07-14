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

export type GeneratorDate = {
    day: string;
    month: string;
    year: string
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

/**
 * Get Today's date in Changelog format
 *
 * @returns Object - day/month/year values
 */
export function setDate (): GeneratorDate {
    const date = new Date();

    return {
        day: date.toLocaleString('en-GB', { day: 'numeric' }),
        month: date.toLocaleString('en-GB', { month: 'long' }),
        year: date.toLocaleString('en-GB', { year: 'numeric' }),
    };
}

