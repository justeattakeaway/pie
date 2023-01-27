import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'FlagSwitzerlandIcon',
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
            class: 'c-pieIcon c-pieIcon--flagSwitzerland'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M10.6531 5.7832H8.21953V3.34961H5.7832V5.7832H3.34961V8.2168H5.7832V10.6504H8.2168V8.2168H10.6504L10.6531 5.7832Z',
                fill: '#EEEEEE'
            }
        })]);
    }
};
