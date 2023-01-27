import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'TrashFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--trashFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.9375 4.625H12.0625L11.1875 6.375H20.8125L19.9375 4.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M3.75 8.125V9.875H6.06875L7.67 26.745C7.7312 27.3979 8.03455 28.0042 8.52036 28.4447C9.00617 28.8852 9.63925 29.1279 10.295 29.125H21.7225C22.3783 29.1279 23.0113 28.8852 23.4971 28.4447C23.9829 28.0042 24.2863 27.3979 24.3475 26.745L25.9312 9.875H28.25V8.125H3.75ZM12.2113 14.25H13.9613L14.5913 22.125H12.8413L12.2113 14.25ZM19.1588 22.125H17.4088L18.0387 14.25H19.7887L19.1588 22.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
