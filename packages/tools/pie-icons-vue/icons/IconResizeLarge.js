import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconResizeLarge',
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
            class: 'c-pieIcon c-pieIcon--resizeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.7262 2.2425V1L1 22.735H2.2425L22.7262 2.2425Z',
                fill: 'black'
            }
        }), h('path', {
            attrs: {
                d: 'M2.2425 22.735H3.47625L22.7262 3.47625V2.2425L2.2425 22.735Z',
                fill: 'black'
            }
        }), h('path', {
            attrs: {
                d: 'M14.0987 22.735H15.3325L22.7262 15.3325V14.0987L14.0987 22.735Z',
                fill: 'black'
            }
        }), h('path', {
            attrs: {
                d: 'M14.0987 22.735L22.7262 14.0987V12.865L12.865 22.735H14.0987Z',
                fill: 'black'
            }
        })]);
    }
};
