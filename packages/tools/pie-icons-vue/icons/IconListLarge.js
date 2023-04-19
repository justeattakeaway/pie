import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconListLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--listLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M27.856 8.125H10.75v1.75h16.494l.612-1.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M5.5 24.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M25.406 15.125H10.75v1.75h14.044l.612-1.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M27.506 22.125H10.75v1.75h16.222l.534-1.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M5.5 17.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M5.5 10.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z',
            },
        })]);
    },
};
