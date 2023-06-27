import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMolluscs',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--molluscs', 'IconMolluscs');
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
                'clip-path': 'url(#prefix__clip0_8387_3631)',
            },
        }, [h('path', {
            attrs: {
                d: 'M13.563 4.72a1.548 1.548 0 0 0-.854-.627 1.586 1.586 0 0 0-.523-.784c-.81-.662-1.9-1.159-2.988-1.35-.427-.08-.863.052-1.202.304a1.528 1.528 0 0 0-1.203-.305c-1.089.2-2.178.689-2.988 1.36-.252.208-.435.479-.522.783a1.548 1.548 0 0 0-.854.628 7.082 7.082 0 0 0-1.08 2.787c0 .053-.018.105-.018.149-.044.296-.07.6-.07.932v.305l2.335 1.995v.392a1.966 1.966 0 0 0 1.96 1.96h.793l.375.313c.366.34.827.514 1.29.514.46 0 .923-.174 1.262-.514l.401-.348h.854a1.978 1.978 0 0 0 1.942-1.969v-.418l2.257-1.925v-.305a7.068 7.068 0 0 0-1.168-3.868V4.72Zm-1.717 4.913-1.55 1.325-1.107.94-.81.689c-.218.218-.566.218-.819-.035l-.74-.636-.776-.662-3.485-2.97a5.55 5.55 0 0 1 .114-.802c.026-.131.06-.262.096-.392.034-.122.07-.244.104-.358.096-.26.288-.723.601-1.193.026-.035.07-.07.105-.105l1.62 3.494h1.438L4.546 4.415c.026-.043.043-.087.07-.104.635-.523 1.524-.924 2.395-1.08.087-.018.2.034.235.095l.053.096.017 5.506h1.307L8.605 3.5l.088-.148c.052-.087.165-.14.252-.122.863.157 1.76.558 2.396 1.08.035.027.07.079.087.14L9.372 8.937h1.438l1.611-3.52s.026.017.035.026c.331.497.871 1.498.941 2.849L11.82 9.633h.026Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_8387_3631',
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
