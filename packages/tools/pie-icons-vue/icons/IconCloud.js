import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloud',
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
            class: 'c-pieIcon c-pieIcon--cloud'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_15_562)'
            }
        }, [h('path', {
            attrs: {
                d: 'M12.016 13.189H4.378A3.377 3.377 0 011 9.81 3.342 3.342 0 012.969 6.75a5.18 5.18 0 0110.176.682 2.992 2.992 0 01-1.129 5.758zM8 4.124a3.859 3.859 0 00-3.815 3.22l-.061.393-.385.114a2.039 2.039 0 00-1.426 1.96 2.065 2.065 0 002.065 2.065h7.638a1.68 1.68 0 00.359-3.316l-.499-.114V7.93A3.885 3.885 0 008 4.124z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_15_562'
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
