import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDineIn',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--dineIn');
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
                'clip-path': 'url(#prefix__clip0_18_1460)',
            },
        }, [h('path', {
            attrs: {
                d: 'm8.525 7.274.263.148a1.523 1.523 0 0 0 1.75-.07l2.878-2.415H11.36L9.698 6.32a.219.219 0 0 1-.228 0l-1.584-.945a2.406 2.406 0 1 0-4.042-1.75 2.362 2.362 0 0 0 .875 1.837A4.918 4.918 0 0 0 1.578 8l-.534 1.076 1.181.569.525-1.103A3.5 3.5 0 0 1 3.844 7.3v.875a2.721 2.721 0 0 0 1.277 2.292l.464.298c-.275.18-.568.329-.875.446L1.7 12.515l.534 1.199 2.975-1.339a6.013 6.013 0 0 0 1.557-.875l.604.385L8.77 15l1.199-.543-1.566-3.473-.718-.464c.369-.516.595-1.12.656-1.75l.184-1.496ZM7.038 8.647a2.354 2.354 0 0 1-.455 1.164l-.753-.49a1.4 1.4 0 0 1-.674-1.181V6.714a3.71 3.71 0 0 1 .823-.097h1.304l-.245 2.03ZM6.25 4.72a1.094 1.094 0 1 1 0-2.188 1.094 1.094 0 0 1 0 2.188ZM15 3.625h-4.375v-.289a2.161 2.161 0 0 1 4.314 0l.061.289Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_1460',
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
