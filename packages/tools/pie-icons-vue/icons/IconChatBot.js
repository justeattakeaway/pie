import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChatBot',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chatBot');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9.907 1.481a5.915 5.915 0 0 0-3.92 11.156l.053 2.258.752-.122a8.602 8.602 0 0 0 7.044-5.898 5.923 5.923 0 0 0-3.929-7.394Zm2.67 7a7.2 7.2 0 0 1-5.25 4.839v-1.636l-.447-.14A4.611 4.611 0 0 1 8.175 2.53c.457.008.911.082 1.347.219a4.61 4.61 0 0 1 3.054 5.731Zm-3.422-.779L10.424 8A2.415 2.415 0 0 1 5.75 8l1.269-.324a1.102 1.102 0 0 0 2.135 0v.026Z',
            },
        })]);
    },
};
