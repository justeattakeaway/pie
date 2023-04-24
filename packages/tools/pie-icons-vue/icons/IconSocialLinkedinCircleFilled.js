import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialLinkedinCircleFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--linkedinCircleFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1611_781)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.14 1.411A6.615 6.615 0 1 0 14.755 8 6.624 6.624 0 0 0 8.14 1.411Zm-2.091 9.783H4.806c-.079 0-.105 0-.105-.105V6.924c0-.07 0-.096.096-.096h1.27c.078 0 .095 0 .095.105v4.147c0 .088-.017.114-.113.114Zm.2-5.513a.796.796 0 0 1-.988.569.744.744 0 0 1-.586-1.059.779.779 0 0 1 .77-.463.744.744 0 0 1 .805.953Zm5.05 5.513h-1.26c-.088 0-.114 0-.114-.114V8.884a1.88 1.88 0 0 0-.061-.49.709.709 0 0 0-1.155-.35.875.875 0 0 0-.315.717v2.336c0 .088 0 .097-.105.097H7.055c-.079 0-.105 0-.105-.097V6.934c0-.08 0-.105.096-.105h1.269c.07 0 .096 0 .096.096v.499l.053-.053a1.479 1.479 0 0 1 1.557-.621 1.558 1.558 0 0 1 1.33 1.417c.013.187.013.374 0 .56v2.354c.035.088.009.114-.079.114h.027Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_781',
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
