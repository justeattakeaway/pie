import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChequeFilled',
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
            class: 'c-pieIcon c-pieIcon--chequeFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.1 6.81 8 7.125l.315-2.1 2.923-2.914a1.242 1.242 0 0 1 1.75 0 1.243 1.243 0 0 1 0 1.75L10.1 6.81Zm4.9-.56v7.875H1V6.25h5.819l-.341 2.398 4.243-.604 1.794-1.794H15ZM8.875 9.969h-5.25v1.312h5.25V9.97Zm3.5 0h-1.75v1.312h1.75V9.97Z',
            },
        })]);
    },
};
