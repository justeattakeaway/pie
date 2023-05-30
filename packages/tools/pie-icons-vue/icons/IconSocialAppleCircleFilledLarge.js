import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialAppleCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--appleCircleFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1611_724)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 7.639a3.378 3.378 0 0 1 2.625-2.835h.315a2.722 2.722 0 0 1-.254 1.557 2.976 2.976 0 0 1-2.143 1.838c-.665.122-.648.131-.543-.56Zm6.125 8.111a1.005 1.005 0 0 0-.087.201 8.81 8.81 0 0 1-1.925 3.142 2.056 2.056 0 0 1-2.494.35 2.625 2.625 0 0 0-2.625 0 2.441 2.441 0 0 1-1.26.28 1.838 1.838 0 0 1-1.322-.753 9.161 9.161 0 0 1-2.537-6.361 4.917 4.917 0 0 1 .411-1.934 3.5 3.5 0 0 1 4.848-1.855 1.863 1.863 0 0 0 1.863 0c.302-.155.618-.279.945-.367a4.034 4.034 0 0 1 2.337.245 2.783 2.783 0 0 1 1.365 1.172c-.21.184-.411.35-.604.543-.23.188-.43.409-.595.656a3.298 3.298 0 0 0 .464 3.858c.316.388.739.674 1.216.823Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_724',
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
