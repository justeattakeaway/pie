import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMoreVerticalLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--moreVerticalLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.969 7.688a1.969 1.969 0 1 1-3.938 0 1.969 1.969 0 0 1 3.938 0ZM16 14.03a1.97 1.97 0 1 0 0 3.938 1.97 1.97 0 0 0 0-3.938Zm0 8.313a1.969 1.969 0 1 0 0 3.938 1.969 1.969 0 0 0 0-3.938Z',
            },
        })]);
    },
};
