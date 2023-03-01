import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconComponentsLarge',
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
            class: 'c-pieIcon c-pieIcon--componentsLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.539 9.21L16 3.662 10.453 9.21 16 14.757l5.548-5.547h-.01zM15.99 6.139l3.072 3.071-3.072 3.071-3.07-3.071 3.07-3.071z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M22.79 10.453L17.243 16l5.547 5.547L28.338 16l-5.548-5.547zM19.72 16l3.071-3.071L25.861 16l-3.07 3.071L19.718 16z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M9.21 10.444L3.663 15.99 9.21 21.54l5.548-5.548-5.548-5.547zM6.14 15.99L9.21 12.92l3.071 3.071-3.07 3.072-3.072-3.072z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10.453 22.781L16 28.33l5.548-5.548L16 17.234l-5.547 5.547zM16 25.853L12.93 22.78 16 19.71l3.071 3.071-3.07 3.072z',
                fill: '#242E30',
            },
        })]);
    },
};
