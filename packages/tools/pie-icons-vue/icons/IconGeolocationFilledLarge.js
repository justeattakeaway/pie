import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGeolocationFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--geolocationFilledLarge');
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
                d: 'M6.156 12.973v2.047l3.404.875a9.012 9.012 0 0 1 6.571 6.571l.875 3.404h2.048l6.405-19.329-19.303 6.431Z',
            },
        }), h('path', {
            attrs: {
                d: 'M19.027 25.844H16.98l-.875-3.404a9.012 9.012 0 0 0-6.571-6.571l-3.404-.875v-2.021L25.459 6.54l-6.432 19.303Z',
            },
        })]);
    },
};
