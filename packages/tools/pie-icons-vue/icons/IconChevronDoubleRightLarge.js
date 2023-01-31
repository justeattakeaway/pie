import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDoubleRightLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleRightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.9787 26.1237L24.4612 16C24.4734 15.9691 24.4734 15.9347 24.4612 15.9038L13.9612 5.84125L15.1862 4.625L25.6862 14.6875C26.0223 15.0419 26.2096 15.5116 26.2096 16C26.2096 16.4884 26.0223 16.9581 25.6862 17.3125L15.1775 27.375L13.9787 26.1237Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.80624 26.1237L16.2975 16C16.3097 15.9691 16.3097 15.9347 16.2975 15.9038L5.79749 5.84125L7.02248 4.625L17.5225 14.6875C17.8585 15.0419 18.0458 15.5116 18.0458 16C18.0458 16.4884 17.8585 16.9581 17.5225 17.3125L7.00498 27.375L5.80624 26.1237Z',
                fill: '#242E30'
            }
        })]);
    }
};
