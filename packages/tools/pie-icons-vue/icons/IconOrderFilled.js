import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOrderFilled',
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
            class: 'c-pieIcon c-pieIcon--orderFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.094h-8.75a1.54 1.54 0 00-1.531 1.531v10.64l3.193-1.444a.202.202 0 01.176 0L8 13.967l2.537-1.146a.202.202 0 01.175 0l3.194 1.444V3.625a1.54 1.54 0 00-1.531-1.531zm-1.75 4.812h-5.25V5.594h5.25v1.312zM9.75 9.531h-3.5V8.22h3.5V9.53z',
                fill: '#242E30'
            }
        })]);
    }
};
