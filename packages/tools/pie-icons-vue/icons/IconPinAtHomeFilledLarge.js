import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPinAtHomeFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pinAtHomeFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.461 4.109a3.15 3.15 0 0 0-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V12.797a130.695 130.695 0 0 1 2.248 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511ZM9.438 20.375a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Z',
            },
        })]);
    },
};
