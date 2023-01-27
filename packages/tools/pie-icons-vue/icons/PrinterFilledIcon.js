import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PrinterFilledIcon',
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
                d: 'M11.2812 3.84375V1.65625H4.71875V3.84375H11.2812Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.25 5.15625H2.75C2.3446 5.15855 1.95645 5.32061 1.66978 5.60728C1.38311 5.89395 1.22105 6.2821 1.21875 6.6875V12.5938H4.71875V9.96875H3.84375V8.65625H12.1562V9.96875H11.2812V12.5938H14.7812V6.6875C14.779 6.2821 14.6169 5.89395 14.3302 5.60728C14.0436 5.32061 13.6554 5.15855 13.25 5.15625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.03125 9.96875V14.3438H9.96V13.6875H9.96875V9.96875H6.03125Z',
                fill: '#242E30'
            }
        })]);
    }
};
