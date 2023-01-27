import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'NavigationCollapseIcon',
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
            class: 'c-pieIcon c-pieIcon--navigationCollapse'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.32031 2.37341V13.4494H10.9596C11.3967 13.4505 11.8297 13.3654 12.2338 13.199C12.638 13.0325 13.0054 12.7879 13.3148 12.4793C13.6243 12.1706 13.8699 11.8039 14.0374 11.4002C14.205 10.9965 14.2912 10.5637 14.2912 10.1266V2.37341H2.32031ZM3.65829 3.70253H4.9874V12.1202H3.65829V3.70253ZM12.9621 10.1266C12.9621 10.6553 12.752 11.1624 12.3782 11.5363C12.0043 11.9102 11.4972 12.1202 10.9684 12.1202H6.31652V3.70253H12.9621V10.1266Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.7925 9.66581V6.16581L9.1874 7.99113L11.7925 9.66581Z',
                fill: '#242E30'
            }
        })]);
    }
};
