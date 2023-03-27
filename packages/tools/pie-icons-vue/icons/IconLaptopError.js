import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopError',
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
            class: 'c-pieIcon c-pieIcon--laptopError',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm8.919 6.25.971-.963-.928-.927L8 5.305l-.963-.945-.927.927.945.963h.07l-1.015.963.927.927L8 7.195l.962.945.928-.928-.945-.962h-.026Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M13.031 9.111V4.062a1.54 1.54 0 0 0-1.531-1.53h-7a1.54 1.54 0 0 0-1.531 1.53v5.05l-1.75 2.624v.201A1.54 1.54 0 0 0 2.75 13.47h10.5a1.54 1.54 0 0 0 1.531-1.531v-.202l-1.75-2.625Zm-8.75-5.049a.219.219 0 0 1 .219-.218h7a.219.219 0 0 1 .219.219v4.593H4.28V4.062Zm8.969 8.094H9.566l-.315-.717H6.75l-.315.717H2.75a.227.227 0 0 1-.175-.087l1.4-2.1h8.05l1.4 2.1a.228.228 0 0 1-.175.087Z',
            },
        })]);
    },
};
