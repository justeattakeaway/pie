import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowLeftIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 7.25005H3.35L7.11 3.49005L6.05 2.43005L1.37 7.12005C1.2539 7.23531 1.16175 7.37241 1.09887 7.52344C1.03599 7.67447 1.00362 7.83645 1.00362 8.00005C1.00362 8.16365 1.03599 8.32563 1.09887 8.47667C1.16175 8.6277 1.2539 8.76479 1.37 8.88005L6.05 13.5701L7.11 12.5101L3.35 8.75005H15V7.25005Z',
                fill: '#242E30'
            }
        })]);
    }
};
