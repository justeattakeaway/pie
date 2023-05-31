import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialMicrosoftCircleFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--microsoftCircleFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_2820_3487)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M7.71 11H5V8.285h2.726L7.71 11Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M11 11H8.274V8.285H11V11Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M7.71 7.715H5V5h2.726L7.71 7.715Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M11 7.715H8.274V5H11v2.715Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_2820_3487',
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
