import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowInCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowInCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 3.75a12.25 12.25 0 0 0-11.961 9.625H5.84a10.5 10.5 0 1 1 0 5.25H4.04A12.25 12.25 0 1 0 16 3.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm19.141 16.875-4.165 4.165 1.234 1.234 5.04-5.04c.085-.083.161-.173.227-.272a1.75 1.75 0 0 0 0-1.925 1.7 1.7 0 0 0-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H2.875v1.75h16.266Z',
            },
        })]);
    },
};
