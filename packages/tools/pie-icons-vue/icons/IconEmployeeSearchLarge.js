import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEmployeeSearchLarge',
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
            class: 'c-pieIcon c-pieIcon--employeeSearchLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.25 15.125a5.688 5.688 0 10-5.687-5.688 5.644 5.644 0 005.687 5.688zm0-9.625a3.937 3.937 0 11-3.937 3.938A3.946 3.946 0 0114.25 5.5zm10.063 10.421a5.25 5.25 0 00-4.28 8.287L15.93 28.31l1.243 1.234 4.077-4.104a5.252 5.252 0 008.052-2.662 5.25 5.25 0 00-4.99-6.858zm0 8.75a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm-5.6-7.796l-4.463 7-3.404-5.25a5.977 5.977 0 00-5.25 3.885l-1.382 3.911H2.359l1.575-4.471a7.744 7.744 0 017.376-5.075h.473l2.467 3.797 2.468-3.797h1.995z',
                fill: '#242E30',
            },
        })]);
    },
};
