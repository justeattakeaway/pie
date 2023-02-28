import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIdCardLarge',
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
            class: 'c-pieIcon c-pieIcon--idCardLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 6.375h-21A2.625 2.625 0 002.875 9v14A2.625 2.625 0 005.5 25.625h21A2.625 2.625 0 0029.125 23V9A2.625 2.625 0 0026.5 6.375zM27.375 23a.875.875 0 01-.875.875h-21A.875.875 0 014.625 23V9a.875.875 0 01.875-.875h21a.875.875 0 01.875.875v14z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5 9.875H9A2.625 2.625 0 006.375 12.5V16A2.625 2.625 0 009 18.625h3.5A2.625 2.625 0 0015.125 16v-3.5A2.625 2.625 0 0012.5 9.875zM13.375 16a.875.875 0 01-.875.875H9A.875.875 0 018.125 16v-3.5A.875.875 0 019 11.625h3.5a.875.875 0 01.875.875V16z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M24.409 18.625l.875-1.75h-6.659v1.75h5.784z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.659 22.125l.875-1.75h-4.909v1.75h4.034z',
                fill: '#242E30'
            }
        })]);
    }
};
