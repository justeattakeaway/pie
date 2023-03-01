import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconInfoMarkerLarge',
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
            class: 'c-pieIcon c-pieIcon--infoMarkerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.75 3.024H7.25a2.625 2.625 0 00-2.625 2.625v15.75a2.625 2.625 0 002.625 2.625h3.439L16 29.335l5.311-5.311h3.439a2.625 2.625 0 002.625-2.625V5.649a2.625 2.625 0 00-2.625-2.625zm.875 18.375a.875.875 0 01-.875.875h-4.165L16 26.859l-4.585-4.585H7.25a.875.875 0 01-.875-.875V5.649a.875.875 0 01.875-.875h17.5a.875.875 0 01.875.875v15.75zm-10.5-9.774h1.75V19.5h-1.75v-7.875zm2.188-3.063a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.626 0z',
                fill: '#242E30'
            }
        })]);
    }
};
