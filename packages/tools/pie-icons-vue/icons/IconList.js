import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconList',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--list');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.313 11.938a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.624Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.125 4.719h-8.75V6.03h8.348l.402-1.312Z',
            },
        }), h('path', {
            attrs: {
                d: 'M2.313 6.688a1.313 1.313 0 1 0 0-2.626 1.313 1.313 0 0 0 0 2.625Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.506 9.969H5.375v1.312h6.729l.402-1.312Z',
            },
        })]);
    },
};
