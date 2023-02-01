import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortDescending',
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
            class: 'c-pieIcon c-pieIcon--sortDescending'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 9.23021H7.81686L7.26556 7.91779H1V9.23021ZM9.287 12.73H1V11.4176H8.7357L9.287 12.73ZM1 4.41799H5.78668L6.34673 5.73041H1V4.41799ZM13.9949 6.92034L12.1573 5.0742V10.3239H10.8446V5.0742L9.00697 6.92034L8.07939 5.94915L10.7046 3.3243C10.8049 3.22165 10.9247 3.14008 11.0569 3.08439C11.1891 3.0287 11.3312 3.00001 11.4747 3.00001C11.6182 3.00001 11.7602 3.0287 11.8925 3.08439C12.0247 3.14008 12.1445 3.22165 12.2448 3.3243L14.87 5.94915L13.9949 6.92034Z',
                fill: '#242E30'
            }
        })]);
    }
};
