import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOfficeLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--officeLarge', 'IconOfficeLarge');
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
                d: 'M24.75 4.625H7.25A2.625 2.625 0 0 0 4.625 7.25v20.125h22.75V7.25a2.625 2.625 0 0 0-2.625-2.625Zm-10.5 21v-3.5h3.5v3.5h-3.5Zm11.375 0H19.5v-3.5h1.75v-1.75h-10.5v1.75h1.75v3.5H6.375V7.25a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v18.375ZM17.75 9.875h3.5v1.75h-3.5v-1.75Zm-7 0h3.5v1.75h-3.5v-1.75Zm7 5.25h3.5v1.75h-3.5v-1.75Zm-7 0h3.5v1.75h-3.5v-1.75Z',
            },
        })]);
    },
};
