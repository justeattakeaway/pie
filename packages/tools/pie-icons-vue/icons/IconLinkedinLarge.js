import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLinkedinLarge',
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
            class: 'c-pieIcon c-pieIcon--linkedinLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4 5.71921C4 4.76997 4.79402 4 5.77355 4H26.2264C27.2059 4 28 4.76997 28 5.71921V26.2808C28 27.2303 27.2059 28 26.2264 28H5.77355C4.79402 28 4 27.2303 4 26.2808V5.71921Z',
                fill: '#006699'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M11.2744 24.0905V13.2532H7.64941V24.0905H11.2744ZM9.46189 11.7735C10.726 11.7735 11.5128 10.9413 11.5128 9.90132C11.4892 8.83792 10.726 8.02882 9.48587 8.02882C8.24587 8.02882 7.43512 8.83792 7.43512 9.90132C7.43512 10.9413 8.22175 11.7735 9.43826 11.7735H9.46189Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M13.2803 24.0905H16.9053V18.0385C16.9053 17.7146 16.9288 17.391 17.0246 17.1595C17.2866 16.5123 17.8831 15.8421 18.8845 15.8421C20.1962 15.8421 20.7209 16.8359 20.7209 18.2928V24.0905H24.3456V17.8765C24.3456 14.5478 22.5572 12.9989 20.1722 12.9989C18.2167 12.9989 17.3581 14.085 16.8812 14.8249H16.9054V13.2532H13.2804C13.328 14.2701 13.2803 24.0905 13.2803 24.0905Z',
                fill: 'white'
            }
        })]);
    }
};
