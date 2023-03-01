import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLock',
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
            class: 'c-pieIcon c-pieIcon--lock'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.344 11.5V8.875h1.312V11.5H7.344z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M3.844 5.375v1.094h-1.75v6.221l.245.201A9.362 9.362 0 008 14.781a9.205 9.205 0 005.661-1.89l.245-.201V6.469h-1.75V5.375a4.156 4.156 0 10-8.312 0zm7 0v1.094H5.156V5.375a2.844 2.844 0 115.688 0zm-7.438 6.676A8.094 8.094 0 008 13.47a7.945 7.945 0 004.594-1.418v-4.27H3.406v4.27z',
                fill: '#242E30'
            }
        })]);
    }
};
