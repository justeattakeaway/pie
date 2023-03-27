import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--geolocationCircleFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.359 9.164 9.12 6.88l-2.284.761c.65.343 1.18.874 1.523 1.523Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M8 1.42a6.58 6.58 0 1 0 0 13.16A6.58 6.58 0 0 0 8 1.42ZM5.68 8.613l-1.33-.333V7.064l6.878-2.249-2.293 6.878H7.764l-.333-1.33a2.345 2.345 0 0 0-1.75-1.75Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
