import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopSuccess',
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
            class: 'c-pieIcon c-pieIcon--laptopSuccess',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.031 9.479V3.625A1.54 1.54 0 0011.5 2.094h-7a1.54 1.54 0 00-1.531 1.531v5.854l-1.75 1.75v1.146a1.54 1.54 0 001.531 1.531h10.5a1.54 1.54 0 001.531-1.531v-1.146l-1.75-1.75zm-8.75-5.854a.219.219 0 01.219-.219h7a.219.219 0 01.219.219v5.469H4.28V3.625zm9.188 8.75a.219.219 0 01-.219.219H2.75a.219.219 0 01-.219-.219v-.604l1.365-1.365h8.208l1.365 1.365v.604zM9.374 4.5l.927.875-2.957 2.992-1.645-1.653.927-.928.718.718L9.374 4.5z',
                fill: '#242E30',
            },
        })]);
    },
};
