import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopSuccessLarge',
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
            class: 'c-pieIcon c-pieIcon--laptopSuccessLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 19.141V7.25A2.625 2.625 0 0023 4.625H9A2.625 2.625 0 006.375 7.25v11.891l-3.5 3.5v2.109A2.625 2.625 0 005.5 27.375h21a2.625 2.625 0 002.625-2.625v-2.109l-3.5-3.5zM8.125 7.25A.875.875 0 019 6.375h14a.875.875 0 01.875.875v11.375H8.125V7.25zm19.25 17.5a.875.875 0 01-.875.875h-21a.875.875 0 01-.875-.875v-1.391l2.984-2.984H24.39l2.984 2.984v1.391zM19.062 9.254l1.243 1.242-5.617 5.609-2.993-2.984 1.242-1.242 1.75 1.75 4.376-4.375zm-.358 12.871l.7 1.75h-6.808l.7-1.75h5.408z',
                fill: '#242E30'
            }
        })]);
    }
};
