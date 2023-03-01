import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBikeFilled',
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
            class: 'c-pieIcon c-pieIcon--bikeFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.138 7.405L11.01 4.159c0-.114 0-.228.167-.28l1.198-.447v-1.4l-1.627.613a1.523 1.523 0 00-.998 1.934l.36 1.015h-.36a2.433 2.433 0 00-1.925.962l-1.207 1.61-1.059-2.135h.691V4.72h-3.5V6.03h1.348l.717 1.461a2.87 2.87 0 00-.735-.105 2.826 2.826 0 102.827 2.818v-.201l1.968-2.66a1.111 1.111 0 01.875-.438h.832l.253.718a2.844 2.844 0 101.313-.219h-.009z',
                fill: '#242E30',
            },
        })]);
    },
};
