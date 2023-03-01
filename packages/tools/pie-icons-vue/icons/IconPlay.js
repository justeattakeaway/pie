import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlay',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--play'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.596 4.299L11.544 8l-6.948 3.693V4.299zM4.255 2.75a.962.962 0 00-.971.963v8.557a.963.963 0 001.478.831l7.403-3.946a1.312 1.312 0 000-2.319L4.762 2.908a.945.945 0 00-.507-.158z',
                fill: '#242E30'
            }
        })]);
    }
};
