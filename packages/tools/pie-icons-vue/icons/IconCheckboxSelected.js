import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckboxSelected',
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
            class: 'c-pieIcon c-pieIcon--checkboxSelected'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.094h-8.75c-.84 0-1.531.691-1.531 1.531v8.75c0 .84.691 1.531 1.531 1.531h8.75c.84 0 1.531-.691 1.531-1.531v-8.75c0-.84-.691-1.531-1.531-1.531zm.219 10.281a.217.217 0 01-.219.219h-8.75a.217.217 0 01-.219-.219v-8.75c0-.123.096-.219.219-.219h8.75c.123 0 .219.096.219.219v8.75zm-2.45-6.799l.962.893-3.36 3.622a.979.979 0 01-.726.315c-.271 0-.534-.114-.726-.315L4.955 8.586l.98-.875L7.02 8.936l3.124-3.369v.01z',
                fill: '#242E30'
            }
        })]);
    }
};
