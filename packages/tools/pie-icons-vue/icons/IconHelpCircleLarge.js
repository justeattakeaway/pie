import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHelpCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--helpCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.313 20.813a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.626 0zM16.192 9.35a4.489 4.489 0 00-2.923.998l-.07.06 1.269 1.26.061-.043a2.669 2.669 0 011.61-.508 1.75 1.75 0 011.89 1.69c0 1.224-1.068 2.152-2.783 2.423h-.122l.219 2.52h1.391l.14-1.4h.122a3.955 3.955 0 003.09-3.666c.026-1.68-1.19-3.334-3.895-3.334zM28.25 16a12.25 12.25 0 11-24.499 0 12.25 12.25 0 0124.499 0zm-1.75 0a10.5 10.5 0 10-21 0 10.5 10.5 0 0021 0z',
                fill: '#242E30'
            }
        })]);
    }
};
