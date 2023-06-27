import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChevronDoubleRightLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chevronDoubleRightLarge', 'IconChevronDoubleRightLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.979 26.124 24.46 16a.131.131 0 0 0 0-.096L13.961 5.84l1.225-1.216 10.5 10.063a1.907 1.907 0 0 1 0 2.624L15.178 27.376l-1.2-1.251Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.806 26.124 16.298 16a.131.131 0 0 0 0-.096L5.797 5.84l1.224-1.216 10.5 10.063a1.908 1.908 0 0 1 0 2.624L7.006 27.376l-1.199-1.251Z',
            },
        })]);
    },
};
