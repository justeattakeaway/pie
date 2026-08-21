import { type TagVariantToStatusMap } from '../interfaces/tag-variant-to-status-map';

export const tagVariantToStatusMap: TagVariantToStatusMap = {
    alpha: 'neutral',
    beta: 'brand-05',
    deprecated: 'error',
    removed: 'error',
    stable: 'success',
};
