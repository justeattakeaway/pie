import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDineInLarge',
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
            class: 'c-pieIcon c-pieIcon--dineInLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_1452)',
            },
        }, [h('path', {
            attrs: {
                d: 'M28.757 7.25a4.445 4.445 0 10-8.89 0h-.726V9h10.343V7.25h-.727zm-4.445-2.625a2.704 2.704 0 012.695 2.625h-5.39a2.704 2.704 0 012.695-2.625zM12.5 10.313a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.25a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm6.125 8.46a.7.7 0 01-.805 0l-3.141-1.898h-3.23a8.854 8.854 0 00-7.953 4.891l-.875 1.628 1.558.814.875-1.645a7.079 7.079 0 013.5-3.334v2.686a4.804 4.804 0 002.248 4.043l.937.603a8.567 8.567 0 01-2.415 1.497l-5.382 2.537.753 1.575 5.355-2.52a10 10 0 003.202-2.109l1.873 1.234 2.695 5.959 1.592-.718-2.887-6.431-2.161-1.409a6.668 6.668 0 001.102-3.088l.403-3.5 1.04.62a2.45 2.45 0 002.827-.095l5.093-4.113h-2.774l-3.43 2.774zm-4.9 4.14a5.117 5.117 0 01-.823 2.318l-1.146-.744a3.063 3.063 0 01-1.444-2.572v-3.194a7.04 7.04 0 011.138-.096h2.747l-.472 4.288z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_1452',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
