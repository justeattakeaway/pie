import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'SortAscendingIcon',
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
            class: 'c-pieIcon c-pieIcon--sortAscending'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 7.34375H7.81625L7.265 8.65625H1V7.34375ZM9.28625 3.84375H1V5.15625H8.735L9.28625 3.84375ZM1 12.1563H5.78625L6.34625 10.8438H1V12.1563ZM13.9938 9.65375L12.1562 11.5V6.25H10.8438V11.5L9.00625 9.65375L8.07875 10.625L10.7038 13.25C10.804 13.3527 10.9238 13.4342 11.056 13.4899C11.1882 13.5456 11.3303 13.5743 11.4738 13.5743C11.6172 13.5743 11.7593 13.5456 11.8915 13.4899C12.0237 13.4342 12.1435 13.3527 12.2438 13.25L14.8688 10.625L13.9938 9.65375Z',
                fill: '#242E30'
            }
        })]);
    }
};
