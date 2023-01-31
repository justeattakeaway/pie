import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLawLarge',
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
            class: 'c-pieIcon c-pieIcon--lawLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M19.2109 19.255L17.9771 18.0212V18.0125L18.8259 17.1637L16.9184 15.2562L6.10338 26.0712L4.86963 24.8375L15.6759 14.0225L13.7946 12.1412L12.9459 12.99L11.7121 11.7562L18.6334 4.83496L19.8671 6.06871L19.0184 6.91746L24.0496 11.9487L24.8984 11.1L26.1321 12.3337L19.2109 19.255ZM17.7846 8.15996L15.0284 10.9162L20.0596 15.9387L22.8071 13.1912L17.7846 8.15996Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.08 23.14L25.6075 21.3987H17.1025L16.63 23.14H26.08Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.6923 25.4762H16.0086L15.5448 27.2262H27.1648L26.6923 25.4762Z',
                fill: '#242E30'
            }
        })]);
    }
};
