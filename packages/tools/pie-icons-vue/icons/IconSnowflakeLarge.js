import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSnowflakeLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--snowflakeLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm27.707 17.942-3.456 1.803L17.75 16l6.501-3.745 3.456 1.802.814-1.548-3.395-1.777.158-3.823-1.75-.08-.158 3.912-6.501 3.745V6.98l3.299-2.083-.936-1.487L16 5.465l-3.238-2.056-.936 1.487 3.299 2.083v7.507l-6.501-3.745-.158-3.911-1.75.079.158 3.823-3.395 1.777.814 1.548 3.456-1.802L14.25 16l-6.501 3.745-3.456-1.803-.814 1.55 3.395 1.775-.158 3.824 1.75.079.158-3.911 6.501-3.745v7.507l-3.299 2.091.936 1.48L16 26.534l3.238 2.056.936-1.479-3.299-2.09v-7.508l6.501 3.745.158 3.91 1.75-.078-.158-3.824 3.395-1.776-.814-1.549Z',
            },
        })]);
    },
};
