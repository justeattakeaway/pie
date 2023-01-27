import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'GridViewFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--gridViewFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 14.25H14.25V4.625H4.625V14.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M17.75 14.25H27.375V4.625H17.75V14.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.625 27.375H14.25V17.75H4.625V27.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M17.75 27.375H27.375V17.75H17.75V27.375Z',
                fill: '#242E30'
            }
        })]);
    }
};
