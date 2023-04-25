import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLocationPinLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--locationPinLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M24.75 26.5c0 2.406-4.533 3.5-8.75 3.5-4.218 0-8.75-1.094-8.75-3.5 0-1.313 1.339-2.214 3.15-2.765l1.426 1.435C9.875 25.625 9 26.237 9 26.5c0 .446 2.406 1.75 7 1.75 4.594 0 7-1.304 7-1.75 0-.262-.875-.875-2.826-1.33l1.426-1.435c1.811.551 3.15 1.453 3.15 2.765ZM8.746 19.605a10.255 10.255 0 1 1 14.508 0L16 26.859l-7.254-7.254Zm-1.251-7.254a8.478 8.478 0 0 0 2.485 6.02l6.02 6.02 6.02-6.02a8.513 8.513 0 1 0-14.525-6.02Zm4.13.149a4.376 4.376 0 1 1 8.751 0 4.376 4.376 0 0 1-8.751 0Zm1.75 0a2.624 2.624 0 1 0 5.248 0 2.624 2.624 0 0 0-5.248 0Z',
            },
        })]);
    },
};
