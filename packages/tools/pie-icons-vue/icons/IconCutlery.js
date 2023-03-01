import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCutlery',
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
            class: 'c-pieIcon c-pieIcon--cutlery'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_2024)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M4.719 7.134l1.312-.018-.07-5.591-1.304.63.062 4.979z'
            }
        }), h('path', {
            attrs: {
                d: 'M11.132 11.701l2.135.333c-.017 1.216-.122 2.196-.183 2.966h1.32c.32-4.002.375-8.022.167-12.031-.087-.963-.324-1.479-.779-1.672a1.137 1.137 0 00-1.356.43 13.869 13.869 0 00-2.24 8.75 1.216 1.216 0 00.936 1.224zM13.25 2.89v.201c.153 2.54.173 5.088.061 7.63l-1.811-.289c-.18-2.632.43-5.258 1.75-7.542z'
            }
        }), h('path', {
            attrs: {
                d: 'M3.336 1.525l-1.312.63v4.821a3.08 3.08 0 002.695 2.888V15H6.03V9.82a3.045 3.045 0 002.555-2.844V1.525l-1.312.63v4.821c0 1.164-1.392 1.636-1.97 1.636-.577 0-1.968-.472-1.968-1.636V1.525z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_2024'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
