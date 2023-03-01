import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 6.375V9h-1.75V6.375h-8.75V9h-1.75V6.375h-5.25v21H23A4.375 4.375 0 0027.375 23V6.375h-5.25zM15.799 19.5h-.875v-1.488h.831c.787 0 1.225-.393 1.225-.962s-.63-.963-1.286-.963a2.343 2.343 0 00-1.689.736l-1.024-1.164a3.71 3.71 0 012.853-1.112c1.75 0 2.931 1.024 2.931 2.31a2.012 2.012 0 01-1.199 1.82 2.048 2.048 0 011.514 1.952c0 1.365-1.172 2.423-3.281 2.423a3.85 3.85 0 01-2.966-1.084l1.023-1.182a2.562 2.562 0 001.829.726c.98 0 1.601-.376 1.601-1.058 0-.683-.604-.954-1.487-.954zm6.877-8.75l-.875 1.75H10.313l-.876-1.75h13.24z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.625 4.625h-1.75v1.75h1.75v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.125 4.625h-1.75v1.75h1.75v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
