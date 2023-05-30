import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPoliciesLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--policiesLarge');
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
                d: 'M18.625 3.75h-14v25.375h22.75V12.5a8.749 8.749 0 0 0-8.75-8.75Zm6.773 7h-5.023V5.728a7.044 7.044 0 0 1 5.023 5.022Zm.227 16.625H6.375V5.5h12.25v7h7v14.875Zm-10.5-14H10.75v-1.75h4.375v1.75Zm-4.375 7h7v1.75h-7v-1.75Zm0-4.375h10.5v1.75h-10.5V16Z',
            },
        })]);
    },
};
