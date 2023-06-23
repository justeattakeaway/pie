import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLaptopSuccess',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--laptopSuccess', 'IconLaptopSuccess');
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
                d: 'M13.031 9.479V3.625A1.54 1.54 0 0 0 11.5 2.094h-7a1.54 1.54 0 0 0-1.531 1.531v5.854l-1.75 1.75v1.146a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-1.146l-1.75-1.75Zm-8.75-5.854a.219.219 0 0 1 .219-.219h7a.219.219 0 0 1 .219.219v5.469H4.28V3.625Zm9.188 8.75a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-.604l1.365-1.365h8.208l1.365 1.365v.604ZM9.374 4.5l.927.875-2.957 2.992-1.645-1.653.927-.928.718.718L9.374 4.5Z',
            },
        })]);
    },
};
