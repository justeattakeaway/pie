import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconThumbsUp',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--thumbsUp',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.072 7.878a1.512 1.512 0 00-.962-.753l-1.96-.481.49-2.415a1.75 1.75 0 00-.376-1.479 1.75 1.75 0 00-1.374-.656H8.875L6.372 7.239a.21.21 0 01-.183.105H1.875v1.312h2.739a12.513 12.513 0 00-.21 2.328 9.083 9.083 0 00.096 1.61H1.875v1.312h9.065a2.406 2.406 0 002.24-1.531l1.024-3.272a1.558 1.558 0 00-.132-1.225zm-1.12.822l-1.006 3.22a1.076 1.076 0 01-1.006.674H5.856a8.05 8.05 0 01-.14-1.61 10.99 10.99 0 01.236-2.328h.237a1.575 1.575 0 001.338-.787L9.75 3.406h.175a.473.473 0 01.455.56l-.761 3.64 3.176.814a.236.236 0 01.14.105.218.218 0 01.018.175z',
                fill: '#242E30',
            },
        })]);
    },
};
