import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconArrowInCircle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--arrowInCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M1.639 8.595h7.166l-1.899 1.907.928.928 2.712-2.713a1.11 1.11 0 0 0 0-1.548L7.834 4.5l-.928.875 1.899 1.907H1.639v1.313Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.851 1.157A6.799 6.799 0 0 0 1.367 5.97H2.75a5.469 5.469 0 1 1 0 3.937H1.376a6.773 6.773 0 1 0 6.475-8.75Z',
            },
        })]);
    },
};
