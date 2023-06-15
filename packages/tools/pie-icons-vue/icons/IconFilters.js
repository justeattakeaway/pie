import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFilters',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--filters', 'IconFilters');
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
                d: 'M15 3.844v1.312H6.031v1.532H4.72V5.155H1V3.844h3.719V2.313H6.03v1.53H15Zm-3.719 5.469H9.97v1.53H1v1.313h8.969v1.531h1.312v-1.53H15v-1.313h-3.719V9.313Z',
            },
        })]);
    },
};
