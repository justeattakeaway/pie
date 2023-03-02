import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSettingsFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--settingsFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.564 16.044v-.097a3.412 3.412 0 01.875-2.423l1.409-1.453-2.529-4.375-2.012.517a3.5 3.5 0 01-2.582-.455 3.43 3.43 0 01-1.654-1.987L18.53 3.75h-5.057l-.57 2.004a3.5 3.5 0 01-1.68 2.004 3.5 3.5 0 01-2.554.437l-2.013-.516-2.529 4.375 1.374 1.47c.597.662.912 1.532.875 2.424v.104a3.412 3.412 0 01-.875 2.424L4.126 19.93l2.53 4.375 2.012-.516a3.5 3.5 0 012.625.454 3.43 3.43 0 011.654 1.987l.525 2.021h5.057l.569-2.004a3.78 3.78 0 014.235-2.441l2.012.516 2.529-4.375-1.374-1.47a3.421 3.421 0 01-.936-2.432zM19.063 16a3.028 3.028 0 01-.875 2.17 3.132 3.132 0 01-4.323 0 3.063 3.063 0 115.25-2.17h-.052z',
                fill: '#242E30',
            },
        })]);
    },
};
