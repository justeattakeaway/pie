import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChartMarkerIcon',
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
            class: 'c-pieIcon c-pieIcon--chartMarker'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.84375 11.5H5.15625V15H3.84375V11.5ZM7.34375 15H8.65625V8.875H7.34375V15ZM10.8438 10.625V15H12.1562V10.625H10.8438ZM10.6862 5.87375L8 8L5.31375 5.87375C5.12914 5.7311 4.97956 5.54816 4.87644 5.33889C4.77332 5.12962 4.71939 4.89955 4.71875 4.66625V1.21875H11.2812V4.66625C11.2806 4.89955 11.2267 5.12962 11.1236 5.33889C11.0204 5.54816 10.8709 5.7311 10.6862 5.87375ZM9.96875 2.53125H6.03125V4.66625C6.03303 4.69987 6.04172 4.73275 6.05677 4.76286C6.07183 4.79297 6.09293 4.81966 6.11875 4.84125L8 6.29375L9.88125 4.84125C9.90707 4.81966 9.92817 4.79297 9.94323 4.76286C9.95828 4.73275 9.96697 4.69987 9.96875 4.66625V2.53125Z',
                fill: '#242E30'
            }
        })]);
    }
};
