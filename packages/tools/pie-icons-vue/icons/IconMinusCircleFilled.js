import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--minusCircleFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.795 3.205a6.781 6.781 0 100 9.625 6.792 6.792 0 000-9.625zm-1.391 5.451H4.596V7.344h6.808v1.312z',
                fill: '#242E30',
            },
        })]);
    },
};
