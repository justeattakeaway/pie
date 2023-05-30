import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialLinkedinCircle',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--linkedinCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_1611_785)',
            },
        }, [h('path', {
            attrs: {
                d: 'M5.808 4.772a.744.744 0 0 0-.363-.045.779.779 0 0 0-.77.464.744.744 0 0 0 .586 1.059.796.796 0 0 0 .989-.569.744.744 0 0 0-.442-.909Z',
            },
        }), h('path', {
            attrs: {
                d: 'm8.402 7.422.053-.052a1.479 1.479 0 0 1 1.557-.621 1.558 1.558 0 0 1 1.33 1.417c.013.187.013.374 0 .56v2.354c0 .088 0 .114-.113.114h-1.19c-.088 0-.114 0-.114-.114V8.884c.001-.166-.02-.33-.061-.49a.709.709 0 0 0-1.155-.35.875.875 0 0 0-.315.717v2.337c0 .087 0 .096-.105.096H7.055c-.079 0-.105 0-.105-.097V6.933c0-.078 0-.105.096-.105h1.269c.07 0 .096 0 .096.097l-.003.174c-.003.1-.006.218-.006.324Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.154 9.015v2.065c0 .088 0 .114-.114.114H4.806c-.079 0-.105 0-.105-.105V6.924c0-.07 0-.097.096-.097h1.27c.078 0 .095 0 .095.105-.008.692-.008 1.383-.008 2.083Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M8 1.081a6.875 6.875 0 1 0 0 13.75 6.875 6.875 0 0 0 0-13.75ZM2.625 7.956a5.375 5.375 0 1 1 10.75 0 5.375 5.375 0 0 1-10.75 0Z',
                'clip-rule': 'evenodd',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_785',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
