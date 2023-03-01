import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKeyUnlock',
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
            class: 'c-pieIcon c-pieIcon--keyUnlock'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.781 3.625v8.75a1.54 1.54 0 01-1.531 1.531H8.875a1.54 1.54 0 01-1.531-1.531V11.5h1.312v.875a.219.219 0 00.219.219h4.375a.22.22 0 00.219-.219v-8.75a.219.219 0 00-.22-.219H8.876a.219.219 0 00-.219.219V4.5H7.344v-.875a1.54 1.54 0 011.53-1.531h4.376a1.54 1.54 0 011.531 1.531zM7.667 10.38l-.437-.446-.175.219a3.317 3.317 0 11-2.511-5.478c.858.001 1.682.34 2.292.945h3.211L12.427 8l-2.38 2.38h-.735l-.437-.446-.446.446h-.762zM7.24 8.07l.805.805.83-.796.806.796.875-.875-1.05-1.067H6.25l-.201-.228a1.986 1.986 0 00-1.505-.718 2.013 2.013 0 000 4.025 1.951 1.951 0 001.146-.376L7.239 8.07zm-2.975-.875A.796.796 0 105.06 8a.796.796 0 00-.796-.796v-.009z',
                fill: '#242E30'
            }
        })]);
    }
};
