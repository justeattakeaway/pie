import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FullscreenExpandSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--fullscreenExpandSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.98947 2.40625L5.72683 1.09375H1.09375V5.72683L2.40625 4.98947V2.40625H4.98947Z'
            }
        }), h('path', {
            attrs: {
                d: 'M9.01053 2.40625H11.5938V4.9895L12.9063 5.72686V1.09375H8.27317L9.01053 2.40625Z'
            }
        }), h('path', {
            attrs: {
                d: 'M11.5938 9.01053V11.5938H9.01055L8.27319 12.9063H12.9063V8.27317L11.5938 9.01053Z'
            }
        }), h('path', {
            attrs: {
                d: 'M2.40625 9.01053L1.09375 8.27317V12.9063H5.72684L4.98948 11.5938H2.40625V9.01053Z'
            }
        })]);
    }
};
