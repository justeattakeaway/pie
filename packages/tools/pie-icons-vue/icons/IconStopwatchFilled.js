import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStopwatchFilled',
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
            class: 'c-pieIcon c-pieIcon--stopwatchFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 3.695A5.547 5.547 0 003.336 6.25H5.83a.665.665 0 01.656.656v4.821a.665.665 0 01-.656.657H3.433A5.546 5.546 0 0013.55 9.076 5.548 5.548 0 008 3.695zm2.398 6.44l-.727 1.094L7.344 9.67V6.705h1.312V8.97l1.742 1.164z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.179 2.514l-.315-1.295H6.136l-.315 1.295v.017h4.358v-.017z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.375 8.656V7.344H1l.438 1.312h3.937z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.375 11.281V9.97H2.531l.438 1.312h2.406z',
                fill: '#242E30'
            }
        })]);
    }
};
