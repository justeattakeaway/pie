import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFullscreenExpand',
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
            class: 'c-pieIcon c-pieIcon--fullscreenExpand'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.98947 3.40625L6.72683 2.09375H2.09375V6.72683L3.40625 5.98947V3.40625H5.98947Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.0105 3.40625H12.5938V5.9895L13.9063 6.72686V2.09375H9.27317L10.0105 3.40625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5938 10.0105V12.5938H10.0105L9.27319 13.9063H13.9063V9.27317L12.5938 10.0105Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M3.40625 10.0105L2.09375 9.27317V13.9063H6.72684L5.98948 12.5938H3.40625V10.0105Z',
                fill: '#242E30'
            }
        })]);
    }
};
