import { type TagVariantToStatusMap } from '../interfaces/tag-variant-to-status-map';

export const tagVariantToStatusMap: TagVariantToStatusMap = {
    alpha: 'yellow',
    beta: 'yellow',
    deprecated: 'red',
    removed: 'red',
    stable: 'green',
};
