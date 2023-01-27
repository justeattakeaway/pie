import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'SortIcon',
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
            class: 'c-pieIcon c-pieIcon--sort'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.75 11.7188H6.25V13.0312H9.75V11.7188Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.375 7.34375H3.625V8.65625H12.375V7.34375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15 2.96875H1V4.28125H15V2.96875Z',
                fill: '#242E30'
            }
        })]);
    }
};
