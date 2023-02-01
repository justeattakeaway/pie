import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconShekel',
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
            class: 'c-pieIcon c-pieIcon--shekel'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 5.15625H3.40625V13.25H2.09375V3.84375H8C8.63818 3.84375 9.25022 4.09726 9.70148 4.54852C10.1527 4.99978 10.4062 5.61182 10.4062 6.25V9.75H9.09375V6.25C9.09375 5.95992 8.97852 5.68172 8.7734 5.4766C8.56828 5.27148 8.29008 5.15625 8 5.15625ZM12.5938 3.625V11.7188H8C7.70992 11.7188 7.43172 11.6035 7.2266 11.3984C7.02148 11.1933 6.90625 10.9151 6.90625 10.625V7.125H5.59375V10.625C5.59375 11.2632 5.84726 11.8752 6.29852 12.3265C6.74978 12.7777 7.36182 13.0312 8 13.0312H13.9062V3.625H12.5938Z',
                fill: '#242E30'
            }
        })]);
    }
};
