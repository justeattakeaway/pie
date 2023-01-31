import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationExpand',
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
            class: 'c-pieIcon c-pieIcon--navigationExpand'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.93018 2.37341V13.4494H10.5694C11.4507 13.4494 12.2958 13.0993 12.919 12.4761C13.5421 11.853 13.8922 11.0078 13.8922 10.1266V2.37341H1.93018ZM3.25929 3.70253H6.36056V12.1202H3.25929V3.70253ZM12.5631 10.1266C12.5631 10.6553 12.353 11.1624 11.9792 11.5363C11.6053 11.9102 11.0982 12.1202 10.5694 12.1202H7.68967V3.70253H12.5631V10.1266Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.79727 9.66581L11.4023 7.8405L8.79727 6.16581',
                fill: '#242E30'
            }
        })]);
    }
};
