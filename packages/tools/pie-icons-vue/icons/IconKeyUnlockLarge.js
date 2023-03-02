import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKeyUnlockLarge',
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
            class: 'c-pieIcon c-pieIcon--keyUnlockLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_2240)',
            },
        }, [h('path', {
            attrs: {
                d: 'M29.125 7.25v17.5a2.625 2.625 0 01-2.625 2.625h-9.625a2.625 2.625 0 01-2.625-2.625v-2.625H16v2.625a.875.875 0 00.875.875H26.5a.875.875 0 00.875-.875V7.25a.875.875 0 00-.875-.875h-9.625A.875.875 0 0016 7.25v2.625h-1.75V7.25a2.625 2.625 0 012.625-2.625H26.5a2.625 2.625 0 012.625 2.625zM15.23 20.148h-1.103l-.988-.998-.744.744a5.862 5.862 0 01-4.454 2.047 5.94 5.94 0 114.218-10.088h6.177L22.484 16l-4.148 4.148h-1.093l-1.007-1.007-1.006 1.007zm-.543-1.925l1.55-1.55 1.513 1.55L20.016 16l-2.406-2.398h-6.239l-.262-.306a4.192 4.192 0 100 5.408l2.039-2.039 1.54 1.558zM6.97 14.53a1.47 1.47 0 10.017 2.94 1.47 1.47 0 00-.017-2.94zm16.905-2.03v6.125h1.75V12.5h-1.75z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_2240',
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
