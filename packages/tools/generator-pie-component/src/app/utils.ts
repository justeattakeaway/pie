import { startCase, snakeCase } from 'lodash';

function trim (str: string) {
    return str.replace(/ /g, '');
}

export function getComponentName (str: string) {
    return trim(startCase(str));
}

export function getComponentFilename (str:string) {
    return `${trim(str)}`;
}

export function getReadmeName (str: string) {
    return startCase(str);
}

export function getPercyComponentName (str: string) {
    return snakeCase(str).toUpperCase();
}
