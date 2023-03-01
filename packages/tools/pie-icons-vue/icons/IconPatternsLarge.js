import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPatternsLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--patternsLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 27.375h9.87v-9.87h-9.87v9.87zm1.75-8.12h6.37v6.37h-6.37v-6.37z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M12.596 15.23a5.374 5.374 0 000-10.745 5.374 5.374 0 000 10.745zm0-8.995a3.63 3.63 0 013.623 3.622 3.63 3.63 0 01-3.623 3.623 3.63 3.63 0 01-3.622-3.623 3.63 3.63 0 013.622-3.622z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M21.46 9.857l-5.819 11.07H27.28L21.46 9.856zm0 3.763l2.922 5.556h-5.845l2.923-5.556z',
                fill: '#242E30',
            },
        })]);
    },
};
