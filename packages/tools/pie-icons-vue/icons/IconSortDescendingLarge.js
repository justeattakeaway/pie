import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortDescendingLarge',
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
            class: 'c-pieIcon c-pieIcon--sortDescendingLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.033 22.91H2V24.66H18.7681L18.033 22.91ZM2 10.66H12.8695L13.6046 12.41H2V10.66ZM2 16.785H15.4512L16.1864 18.535H2V16.785ZM27.896 13.6438L23.879 9.5663V21.16H22.1287V9.6363L18.1117 13.6438L16.8777 12.41L21.8049 7.47505C22.1295 7.1699 22.5583 7 23.0039 7C23.4494 7 23.8782 7.1699 24.2028 7.47505L29.13 12.41L27.896 13.6438Z',
                fill: '#242E30'
            }
        })]);
    }
};
