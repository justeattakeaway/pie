import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.25 15.1249H6.375L13.375 8.12495L12.1675 6.88245L4.2925 14.7574C4.12979 14.92 4.00072 15.113 3.91265 15.3254C3.82458 15.5379 3.77925 15.7656 3.77925 15.9956C3.77925 16.2255 3.82458 16.4533 3.91265 16.6657C4.00072 16.8782 4.12979 17.0712 4.2925 17.2337L12.1675 25.1087L13.375 23.8749L6.375 16.8749H28.25V15.1249Z',
                fill: '#242E30'
            }
        })]);
    }
};
