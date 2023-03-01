import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWifi',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--wifi',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_15_321)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M11.832 10.231A5.023 5.023 0 008 8.333a5.023 5.023 0 00-3.833 1.898l-1.006-.875A6.326 6.326 0 018 7.02a6.326 6.326 0 014.839 2.363l-1.007.848z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.95 8.096A7.788 7.788 0 008 5.156a7.787 7.787 0 00-5.95 2.94l-1.006-.875a9.074 9.074 0 017-3.412 9.074 9.074 0 017 3.412l-1.094.875z',
            },
        }), h('path', {
            attrs: {
                d: 'M9.794 12.576a2.292 2.292 0 00-3.588 0L5.2 11.701A3.666 3.666 0 018 10.354a3.665 3.665 0 012.8 1.373l-1.006.85z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_15_321',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
