import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFoundationsLarge',
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
            class: 'c-pieIcon c-pieIcon--foundationsLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 27.375H15.1337V16.8663H4.625V27.375ZM6.375 18.6163H13.3837V25.625H6.375V18.6163Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.8663 16.8925V27.4013H27.375V16.8925H16.8663ZM25.625 25.6513H18.6163V18.6425H25.625V25.6513Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.75 4.625V15.1337H21.2588V4.625H10.75ZM12.5 13.3837V6.375H19.5087V13.3837H12.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
