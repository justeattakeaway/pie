import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlayCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--playCircleFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.011 9.164L9.557 8 7.011 6.836v2.328z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zm3.141 7.498L6.82 10.695a.744.744 0 01-.333.079.726.726 0 01-.42-.149.78.78 0 01-.367-.656V6.014a.779.779 0 01.367-.639.77.77 0 01.753-.053L11.14 7.3a.788.788 0 010 1.435v-.018z',
                fill: '#242E30',
            },
        })]);
    },
};
