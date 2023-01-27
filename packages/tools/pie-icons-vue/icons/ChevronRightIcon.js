import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChevronRightIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--chevronRight'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.20001 24.1237L18.7 14C18.7036 13.968 18.7036 13.9357 18.7 13.9038L8.20001 3.87625L9.43376 2.625L19.9338 12.6875C20.2678 13.0429 20.4538 13.5123 20.4538 14C20.4538 14.4877 20.2678 14.9571 19.9338 15.3125L9.41626 25.375L8.20001 24.1237Z'
            }
        })]);
    }
};
