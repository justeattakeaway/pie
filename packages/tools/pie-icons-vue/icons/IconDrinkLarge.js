import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDrinkLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--drinkLarge');
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
                d: 'M24.75 9.875h-7.875V6.13l4.655-1.505-.56-1.663-5.845 1.908v5.005H7.25v1.75h1.566l1.374 15.111a2.625 2.625 0 0 0 2.625 2.389h6.388a2.625 2.625 0 0 0 2.625-2.389l1.356-15.111h1.566v-1.75Zm-5.556 17.5h-6.388a.875.875 0 0 1-.875-.796l-.875-9.127a4.663 4.663 0 0 1 4.752.158 7.963 7.963 0 0 0 3.762 1.015c.41-.003.82-.038 1.225-.105l-.735 8.059a.875.875 0 0 1-.866.796Zm1.75-10.666a5.915 5.915 0 0 1-4.375-.674 6.23 6.23 0 0 0-5.679-.402l-.315-4.008h10.85l-.481 5.084Z',
            },
        })]);
    },
};
