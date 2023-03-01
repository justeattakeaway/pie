import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--alertCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 28.25a12.25 12.25 0 110-24.5 12.25 12.25 0 010 24.5zM16 5.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M14.547 10.111a4.584 4.584 0 012.905 0l-.743 7.639H15.29l-.744-7.639zm2.765 10.701a1.313 1.313 0 11-2.625 0 1.313 1.313 0 012.626 0z',
                fill: '#242E30',
            },
        })]);
    },
};
