import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'SwitzerlandIcon',
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
            class: 'c-pieIcon c-pieIcon--switzerland'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M11.6531 6.7832H9.21953V4.34961H6.7832V6.7832H4.34961V9.2168H6.7832V11.6504H9.2168V9.2168H11.6504L11.6531 6.7832Z',
                fill: '#EEEEEE'
            }
        })]);
    }
};
