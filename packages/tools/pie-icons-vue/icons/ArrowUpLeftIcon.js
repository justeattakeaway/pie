import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowUpLeftIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowUpLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.795 11.8675L5.58501 4.65747H10.24V3.34497H4.43875C4.14867 3.34497 3.87047 3.46021 3.66535 3.66532C3.46024 3.87044 3.345 4.14864 3.345 4.43872V10.24H4.65751V5.58498L11.8675 12.795L12.795 11.8675Z',
                fill: '#242E30'
            }
        })]);
    }
};
