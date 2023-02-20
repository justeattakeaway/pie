import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckboxUnselected',
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
            class: 'c-pieIcon c-pieIcon--checkboxUnselected'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 13.906h-8.75c-.84 0-1.531-.691-1.531-1.531v-8.75c0-.84.691-1.531 1.531-1.531h8.75c.84 0 1.531.691 1.531 1.531v8.75c0 .84-.691 1.531-1.531 1.531zm-8.75-10.5a.217.217 0 00-.219.219v8.75c0 .123.096.219.219.219h8.75a.217.217 0 00.219-.219v-8.75a.217.217 0 00-.219-.219h-8.75z',
                fill: '#242E30'
            }
        })]);
    }
};
