import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'DragLargeIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--dragLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.25 11.1875H3.75V12.9375H28.25V11.1875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M28.25 19.0625H3.75V20.8125H28.25V19.0625Z',
                fill: '#242E30'
            }
        })]);
    }
};
