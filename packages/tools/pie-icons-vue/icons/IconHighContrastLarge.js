import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHighContrastLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--highContrastLarge');
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
                d: 'M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75Zm0 22.759c-5.793 0-10.509-4.716-10.509-10.509S10.207 5.491 16 5.491 26.509 10.207 26.509 16 21.793 26.509 16 26.509Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.241 16c0 4.83 3.929 8.759 8.759 8.759V7.24c-4.83 0-8.759 3.929-8.759 8.759Z',
            },
        })]);
    },
};
