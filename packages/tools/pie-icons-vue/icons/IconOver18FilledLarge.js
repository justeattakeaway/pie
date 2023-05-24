import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOver18FilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--over18FilledLarge');
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
                d: 'M14.994 18.608c.807 0 1.461-.506 1.461-1.13 0-.623-.654-1.128-1.461-1.128s-1.461.505-1.461 1.129c0 .623.654 1.129 1.46 1.129Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15.431 14.973a1.11 1.11 0 0 1-.437.056 1.095 1.095 0 0 1-1.181-1.059 1.076 1.076 0 0 1 1.18-1.05 1.086 1.086 0 0 1 1.19 1.05 1.111 1.111 0 0 1-.752 1.002Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M24.75 4.625H7.25A2.625 2.625 0 0 0 4.625 7.25v17.5a2.625 2.625 0 0 0 2.625 2.625h17.5a2.625 2.625 0 0 0 2.625-2.625V7.25a2.625 2.625 0 0 0-2.625-2.625ZM10.102 19.894H8.44v-6.291l-1.365.507-.56-1.409 2.397-1.076h1.19v8.269Zm4.892.149c-2.17 0-3.211-1.13-3.211-2.424a2.021 2.021 0 0 1 1.426-1.969 2.02 2.02 0 0 1-1.111-1.829c0-1.198.988-2.345 2.896-2.345 1.907 0 2.905 1.146 2.905 2.345a2.056 2.056 0 0 1-1.129 1.829 2.03 2.03 0 0 1 1.444 1.969c0 1.295-1.05 2.424-3.22 2.424Zm9.756-3.168H23v1.75h-1.75v-1.75H19.5v-1.75h1.75v-1.75H23v1.75h1.75v1.75Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
