import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserRepeat',
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
            class: 'c-pieIcon c-pieIcon--userRepeat',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.386 10.161l-.14.525h1.365l.044-.184a1.636 1.636 0 011.47-1.347h1.75a1.636 1.636 0 011.453 1.348l.043.183h1.365l-.14-.525a3.062 3.062 0 00-2.117-2.24c.052 0 .105-.079.157-.131a2.31 2.31 0 10-3.272 0l.157.131a3.063 3.063 0 00-2.135 2.24zm2.905-4.716A1.006 1.006 0 118.72 6.862a1.006 1.006 0 01-1.429-1.417zM14.781 8A6.781 6.781 0 111.22 8a6.711 6.711 0 01.971-3.5L1.15 3.485l3.404-.682-.464 3.622-.936-.945A5.469 5.469 0 108 2.531V1.22A6.79 6.79 0 0114.781 8z',
                fill: '#242E30',
            },
        })]);
    },
};
