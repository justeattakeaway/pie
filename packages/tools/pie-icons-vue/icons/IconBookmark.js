import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconBookmark',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--bookmark');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7724_3883)',
            },
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M3.835 1.84h8.321c1.085 0 1.969.884 1.969 1.969v10.57L8 11.465l-6.134 2.914V3.809c0-1.085.884-1.969 1.969-1.969Zm4.174 8.172 4.812 2.293V3.809a.661.661 0 0 0-.656-.657H3.844a.661.661 0 0 0-.657.657v8.496l4.822-2.293ZM8 4.492l.709 1.452 1.592.227L9.155 7.3l.271 1.584L8 8.13l-1.426.753.28-1.584-1.155-1.129 1.592-.227L8 4.49Z',
                'clip-rule': 'evenodd',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7724_3883',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
