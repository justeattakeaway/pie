import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCurry',
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
            class: 'c-pieIcon c-pieIcon--curry',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.834 3.52l-1.12-.691-2.048 3.325a2.388 2.388 0 00-1.916-.972 2.667 2.667 0 00-.455 0 2.398 2.398 0 00-4.375 0 2.667 2.667 0 00-.455 0A2.397 2.397 0 002.12 7.344h-.875v1.531a4.148 4.148 0 002.73 3.894l.262 1.137h7.578l.263-1.137a4.147 4.147 0 002.703-3.894V7.344H12.48l2.354-3.824zM5.06 6.652a.621.621 0 00.63 0 .683.683 0 00.359-.525 1.076 1.076 0 012.152 0 .683.683 0 00.359.525.621.621 0 00.63 0 1.111 1.111 0 011.619.692H3.44a1.111 1.111 0 011.619-.692zm8.409 2.223a2.834 2.834 0 01-2.135 2.739l-.385.105-.201.875H5.253l-.202-.875-.385-.105a2.835 2.835 0 01-2.135-2.739v-.219H13.47v.219z',
                fill: '#242E30',
            },
        })]);
    },
};
