import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'MenuExpandSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--menuExpandSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M0.930176 1.37341V12.4494H9.56942C10.4507 12.4494 11.2958 12.0993 11.919 11.4761C12.5421 10.853 12.8922 10.0078 12.8922 9.12658V1.37341H0.930176ZM2.25929 2.70253H5.36056V11.1202H2.25929V2.70253ZM11.5631 9.12658C11.5631 9.65533 11.353 10.1624 10.9792 10.5363C10.6053 10.9102 10.0982 11.1202 9.56942 11.1202H6.68967V2.70253H11.5631V9.12658Z'
            }
        }), h('path', {
            attrs: {
                d: 'M7.79727 8.66581L10.4023 6.8405L7.79727 5.16581'
            }
        })]);
    }
};
