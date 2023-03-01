import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopHighlightLarge',
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
            class: 'c-pieIcon c-pieIcon--laptopHighlightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.346 8.125l1.558-3.106-1.558-.788-1.942 3.877.035.017h1.907z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.875 2.875h-1.75v5.25h1.75v-5.25z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.561 8.125l.035-.018-1.942-3.876-1.558.788 1.549 3.106h1.916z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.625 22.125V12.5A2.625 2.625 0 0023 9.875H9A2.625 2.625 0 006.375 12.5v9.625H3.75v3.5a2.625 2.625 0 002.625 2.625h19.25a2.625 2.625 0 002.625-2.625v-3.5h-2.625zM8.125 12.5A.875.875 0 019 11.625h14a.875.875 0 01.875.875v9.625H8.125V12.5zM26.5 25.625a.875.875 0 01-.875.875H6.375a.875.875 0 01-.875-.875v-1.75h7.875v.875h5.25v-.875H26.5v1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
