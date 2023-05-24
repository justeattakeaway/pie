import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHouseFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--houseFilledLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.488 5.027a2.993 2.993 0 0 0-3.002 0c-4.375 2.8-11.305 10.098-11.611 10.37l1.269 1.207s.918-.954 2.231-2.249v13.02h19.25v-13.02a102.43 102.43 0 0 1 2.214 2.249l1.286-1.208c-.306-.271-7.245-7.569-11.637-10.369Zm-3.054 16.914a1.566 1.566 0 1 1 3.132 0v3.684h-3.132v-3.684Z',
            },
        })]);
    },
};
