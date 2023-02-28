import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFireLarge',
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
            class: 'c-pieIcon c-pieIcon--fireLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 11.625L16 5.5l-6.125 6.125a8.75 8.75 0 000 12.32 8.574 8.574 0 0012.198 0 8.75 8.75 0 00.052-12.32zM11.18 12.85L16 7.968l4.848 4.9a7 7 0 011.128 8.33c-1.75-1.75-3.5-3.544-5.31-5.25l-.622-.604-.613.612-5.355 5.338a7 7 0 011.077-8.427l.026-.017zM16 24.75a6.764 6.764 0 01-4.847-2.03l4.908-4.97a506.56 506.56 0 014.874 4.839l-.087.087A6.763 6.763 0 0116 24.75z',
                fill: '#242E30'
            }
        })]);
    }
};
