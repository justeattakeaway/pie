import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowDownCircle',
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
            class: 'c-pieIcon c-pieIcon--arrowDownCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.344 1.577v7.167L5.445 6.845l-.945.928 2.713 2.712a1.084 1.084 0 001.54 0L11.5 7.773l-.945-.928-1.899 1.899V1.577H7.344z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.969 1.315V2.75a5.46 5.46 0 11-3.938 0V1.315a6.781 6.781 0 103.938 0z',
                fill: '#242E30'
            }
        })]);
    }
};
