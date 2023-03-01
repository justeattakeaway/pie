import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPrinterFilled',
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
            class: 'c-pieIcon c-pieIcon--printerFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.281 3.844V1.656H4.72v2.188h6.562z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.25 5.156H2.75a1.54 1.54 0 00-1.531 1.532v5.906h3.5V9.969h-.875V8.656h8.312V9.97h-.875v2.625h3.5V6.688a1.54 1.54 0 00-1.531-1.532z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.031 9.969v4.375H9.96v-.656h.009v-3.72H6.03z',
                fill: '#242E30'
            }
        })]);
    }
};
