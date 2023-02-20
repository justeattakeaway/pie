import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialAppleCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--appleCircleFilledLarge'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1611_724)'
            }
        }, [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm0 7.639a3.378 3.378 0 012.625-2.835h.315a2.722 2.722 0 01-.254 1.557 2.976 2.976 0 01-2.143 1.838c-.665.122-.648.131-.543-.56zm6.125 8.111a1.005 1.005 0 00-.087.201 8.81 8.81 0 01-1.925 3.142 2.056 2.056 0 01-2.494.35 2.625 2.625 0 00-2.625 0 2.441 2.441 0 01-1.26.28 1.838 1.838 0 01-1.322-.753 9.161 9.161 0 01-2.537-6.361 4.917 4.917 0 01.411-1.934 3.5 3.5 0 014.848-1.855 1.863 1.863 0 001.863 0c.302-.155.618-.279.945-.367a4.034 4.034 0 012.337.245 2.783 2.783 0 011.365 1.172c-.21.184-.411.35-.604.543-.23.188-.43.409-.595.656a3.298 3.298 0 00.464 3.858c.316.388.739.674 1.216.823z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_724'
            }
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)'
            }
        })])])]);
    }
};
