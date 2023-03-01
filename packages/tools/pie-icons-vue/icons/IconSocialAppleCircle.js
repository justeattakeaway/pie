import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialAppleCircle',
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
            class: 'c-pieIcon c-pieIcon--appleCircle'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_927_672)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm0 12.25A5.468 5.468 0 118 2.488a5.468 5.468 0 010 10.937z'
            }
        }), h('path', {
            attrs: {
                d: 'M10.45 9.33a1.636 1.636 0 01-.228-1.916c.087-.106.183-.203.29-.289.095-.096.2-.175.305-.271a1.33 1.33 0 00-.682-.604 1.943 1.943 0 00-1.155-.123c-.16.046-.314.104-.464.175a.928.928 0 01-.927 0 1.75 1.75 0 00-2.407.92 2.555 2.555 0 00-.2.953 4.541 4.541 0 001.215 3.159.875.875 0 00.657.367c.214.01.428-.036.62-.131a1.287 1.287 0 011.313 0 1.024 1.024 0 001.234-.175c.427-.444.752-.976.954-1.558a.47.47 0 010-.096 1.268 1.268 0 01-.525-.411z'
            }
        }), h('path', {
            attrs: {
                d: 'M8.28 5.979a1.479 1.479 0 001.059-.875c.118-.242.163-.512.13-.779h-.157A1.671 1.671 0 008 5.716c-.053.341-.061.333.28.263z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_927_672'
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
