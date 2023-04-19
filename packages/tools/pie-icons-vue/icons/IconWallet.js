import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconWallet',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--wallet');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_4814_3596)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                'fill-rule': 'evenodd',
                d: 'M8 2.75a.131.131 0 0 1 .079 0h.087a.201.201 0 0 1 .114.114l.096.227h1.418l-.298-.726a1.549 1.549 0 0 0-.875-.831 1.514 1.514 0 0 0-1.172 0l-3.693 1.54h3.43L8 2.75Zm4.857 8.584H12.2v1.584a.219.219 0 0 1-.218.218h-8.97a.219.219 0 0 1-.218-.218v-7a.219.219 0 0 1 .219-.22h8.969a.219.219 0 0 1 .218.22v1.478h1.313V5.918a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.531 1.531 0 0 0-1.426.989c-.065.17-.1.351-.105.534v7a1.531 1.531 0 0 0 1.532 1.54h8.969a1.53 1.53 0 0 0 1.53-1.531v-1.584h-.655Zm.612-2.625h.901v1.312h-3.036V8.71H13.469Z',
                'clip-rule': 'evenodd',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_4814_3596',
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
