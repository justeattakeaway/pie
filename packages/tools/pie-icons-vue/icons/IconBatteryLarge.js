import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBatteryLarge',
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
            class: 'c-pieIcon c-pieIcon--batteryLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 12.5V9.875A2.625 2.625 0 0024.75 7.25H5.5a2.625 2.625 0 00-2.625 2.625v12.25A2.625 2.625 0 005.5 24.75h19.25a2.625 2.625 0 002.625-2.625V19.5h1.75v-7h-1.75zm-1.75 9.625a.875.875 0 01-.875.875H5.5a.875.875 0 01-.875-.875V9.875A.875.875 0 015.5 9h19.25a.875.875 0 01.875.875v12.25zM8.125 12.5h1.75v7h-1.75v-7zm4.375 0h1.75v7H12.5v-7zm4.375 0h1.75v7h-1.75v-7z',
                fill: '#242E30'
            }
        })]);
    }
};
