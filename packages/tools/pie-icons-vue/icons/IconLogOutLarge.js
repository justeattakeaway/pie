import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLogOutLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--logOutLarge', 'IconLogOutLarge');
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
                d: 'M27.375 16.875a11.375 11.375 0 1 1-15.75-10.5v1.934a9.625 9.625 0 1 0 8.75 0V6.375a11.375 11.375 0 0 1 7 10.5Zm-10.5-14h-1.75v10.5h1.75v-10.5Z',
            },
        })]);
    },
};
