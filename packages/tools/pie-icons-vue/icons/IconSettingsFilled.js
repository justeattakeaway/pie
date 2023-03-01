import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSettingsFilled',
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
            class: 'c-pieIcon c-pieIcon--settingsFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.338 8a1.636 1.636 0 01.428-1.181l.875-.875-1.505-2.625-1.233.306a1.688 1.688 0 01-1.278-.236 1.645 1.645 0 01-.805-.963L9.505 1.22h-3.01l-.341 1.216a1.671 1.671 0 01-.779.962 1.68 1.68 0 01-1.277.228L2.88 3.31 1.376 5.935l.875.875c.287.328.434.755.412 1.19a1.636 1.636 0 01-.43 1.181l-.874.875 1.505 2.625 1.234-.306c.44-.094.9-.009 1.277.236.385.202.675.548.805.963l.341 1.207h2.984l.341-1.216c.138-.416.433-.762.823-.963a1.638 1.638 0 011.234-.227l1.216.306 1.505-2.625-.875-.875A1.637 1.637 0 0113.338 8zM9.313 8a1.313 1.313 0 11-2.625.002A1.313 1.313 0 019.313 8z',
                fill: '#242E30'
            }
        })]);
    }
};
