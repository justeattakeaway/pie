import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUploadLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--uploadLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.546 9.796l-1.233-1.234 4.453-4.453a1.75 1.75 0 012.468 0l4.453 4.453-1.233 1.234-3.579-3.57V19.5h-1.75V6.226l-3.579 3.57zM23 12.5h-3.5v1.75H23a.875.875 0 01.875.875V26.5a.875.875 0 01-.875.875H9a.875.875 0 01-.875-.875V15.125A.875.875 0 019 14.25h3.5V12.5H9a2.625 2.625 0 00-2.625 2.625V26.5A2.625 2.625 0 009 29.125h14a2.625 2.625 0 002.625-2.625V15.125A2.625 2.625 0 0023 12.5z',
                fill: '#242E30',
            },
        })]);
    },
};
