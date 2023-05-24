import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconArrowDownCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--arrowDownCircleFilledLarge');
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
                d: 'M16.875 3.75v15.367l4.165-4.17 1.234 1.235-5.04 5.047a1.749 1.749 0 0 1-2.468 0l-5.04-5.047 1.234-1.235 4.165 4.17V3.75a12.244 12.244 0 0 0-8.239 4.038 12.275 12.275 0 0 0 .608 17.023 12.242 12.242 0 0 0 17.012 0 12.273 12.273 0 0 0 .608-17.023 12.244 12.244 0 0 0-8.239-4.038Z',
            },
        })]);
    },
};
