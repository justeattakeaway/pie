import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPercentage',
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
            class: 'c-pieIcon c-pieIcon--percentage',
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__a)',
            },
        }, [h('path', {
            attrs: {
                d: 'M10.835 2.75 3.58 13.25h1.593l7.262-10.5h-1.601Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.375 7.869a2.625 2.625 0 0 0-2.625 2.756 2.625 2.625 0 0 0 5.25 0 2.625 2.625 0 0 0-2.625-2.756Zm0 4.2a1.313 1.313 0 0 1-1.348-1.444 1.313 1.313 0 0 1 2.625 0 1.313 1.313 0 0 1-1.277 1.444Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.197 5.375a2.625 2.625 0 0 0-2.572-2.756A2.625 2.625 0 0 0 1 5.375a2.625 2.625 0 0 0 2.625 2.756 2.625 2.625 0 0 0 2.572-2.756Zm-3.92 0a1.313 1.313 0 1 1 2.625 0 1.313 1.313 0 0 1-2.625 0Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__a',
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
