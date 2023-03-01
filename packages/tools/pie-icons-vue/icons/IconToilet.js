import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconToilet',
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
            class: 'c-pieIcon c-pieIcon--toilet'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_2278)'
            }
        }, [h('path', {
            attrs: {
                d: 'M6.425 7.51a1.496 1.496 0 00-.954-.875l.14-.114A2.203 2.203 0 102.514 3.39a2.205 2.205 0 000 3.097l.14.114a1.496 1.496 0 00-.954.875L1 9.601a1.313 1.313 0 00.499 1.47l.35.271v2.783H3.16v-3.439l-.875-.674.691-2.09a.455.455 0 01.377-.14H4.84a.455.455 0 01.376.14l.648 2.1-.875.664v3.439h1.26v-2.783l.35-.27a1.312 1.312 0 00.525-1.47l-.7-2.092zM3.44 4.316A.875.875 0 114.684 5.55.875.875 0 013.44 4.316zm10.071 3.185a1.566 1.566 0 00-1.024-.875l.123-.096a2.188 2.188 0 10-3.097 0l.122.096a1.601 1.601 0 00-1.041.954l-1.05 4.865h1.242v1.68H10.1v-2.992h-.928l.683-3.203a.569.569 0 01.428-.149h1.558c.245 0 .402.114.402.07l.71 3.282h-.928v2.992h1.312v-1.68h1.243l-1.068-4.944zm-3.071-3.185a.876.876 0 111.244 1.235.876.876 0 01-1.244-1.235z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_2278'
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
