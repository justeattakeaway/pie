import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlayCircleFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--playCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.043 16l-6.633 3.456-.026-6.93L20.043 16z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.194 5.814a12.25 12.25 0 1113.612 20.372A12.25 12.25 0 019.194 5.814zm4.688 15.366l7.56-3.964A1.46 1.46 0 0022.125 16a1.479 1.479 0 00-.7-1.234l-7.516-3.928a1.417 1.417 0 00-1.462-.088 1.46 1.46 0 00-.778 1.321v7.875a1.46 1.46 0 001.444 1.47c.274 0 .542-.083.77-.236z',
                fill: '#242E30'
            }
        })]);
    }
};
