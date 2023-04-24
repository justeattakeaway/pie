import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUserPartnership',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--userPartnership');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.865 7.598a2.424 2.424 0 1 0-2.091-.132 3.106 3.106 0 0 0-1.829 1.409L8 10.293l-.936-1.418a3.133 3.133 0 0 0-1.838-1.374 2.389 2.389 0 1 0-2.091.132 3.089 3.089 0 0 0-1.916 2.808v3.684H2.53v-3.684a1.811 1.811 0 0 1 1.838-1.75 1.846 1.846 0 0 1 1.583.875L8 12.707l2.047-3.176a1.854 1.854 0 0 1 1.584-.875 1.812 1.812 0 0 1 1.838 1.75v3.719h1.312v-3.684a3.088 3.088 0 0 0-1.916-2.843ZM4.062 4.28a1.094 1.094 0 1 1 0 2.188 1.094 1.094 0 0 1 0-2.188Zm7.875 0a1.094 1.094 0 1 1 0 2.188 1.094 1.094 0 0 1 0-2.188ZM4.72 11.5H6.03v2.625H4.72V11.5Zm5.25 0h1.312v2.625H9.97V11.5Z',
            },
        })]);
    },
};
