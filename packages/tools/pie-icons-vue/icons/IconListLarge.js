import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconListLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--listLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.856 8.125H10.75v1.75h16.494l.612-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 24.575a1.575 1.575 0 100-3.15 1.575 1.575 0 000 3.15z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.406 15.125H10.75v1.75h14.044l.612-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.506 22.125H10.75v1.75h16.222l.534-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 17.575a1.575 1.575 0 100-3.15 1.575 1.575 0 000 3.15z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 10.575a1.575 1.575 0 100-3.15 1.575 1.575 0 000 3.15z',
                fill: '#242E30'
            }
        })]);
    }
};
