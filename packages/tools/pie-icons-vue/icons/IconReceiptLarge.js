import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconReceiptLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--receiptLarge', 'IconReceiptLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.25 15.125h-10.5v1.75h10.5v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M19.5 18.625h-7v1.75h7v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M19.5 11.625h-7v1.75h7v-1.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M22.939 6.471 19.5 4.494 16 6.463l-3.5-1.97-3.439 1.978L5.5 4.573v22.854l3.561-1.898 3.439 1.977 3.5-1.968 3.5 1.968 3.43-1.977 3.57 1.898V4.573L22.939 6.47Zm1.811 18.043-.989-.525a1.75 1.75 0 0 0-1.688 0l-2.625 1.479-2.625-1.488a1.75 1.75 0 0 0-1.75 0l-2.626 1.488-2.52-1.453a1.75 1.75 0 0 0-1.688 0l-.989.499V7.486l.989.525a1.75 1.75 0 0 0 1.688 0L12.5 6.506l2.625 1.488a1.75 1.75 0 0 0 1.75 0L19.5 6.506l2.625 1.479a1.75 1.75 0 0 0 1.689 0l.936-.499v17.028Z',
            },
        })]);
    },
};
