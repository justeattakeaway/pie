import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOver18Filled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--over18Filled', 'IconOver18Filled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.497 9.304c.403 0 .73-.253.73-.565 0-.311-.327-.564-.73-.564-.404 0-.73.253-.73.564 0 .312.326.565.73.565Z',
            },
        }), h('path', {
            attrs: {
                d: 'M7.716 7.486a.555.555 0 0 1-.22.028.547.547 0 0 1-.59-.529.538.538 0 0 1 .59-.525.542.542 0 0 1 .596.525.555.555 0 0 1-.376.501Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M12.375 2.313h-8.75a1.313 1.313 0 0 0-1.313 1.312v8.75a1.313 1.313 0 0 0 1.313 1.313h8.75a1.313 1.313 0 0 0 1.313-1.313v-8.75a1.313 1.313 0 0 0-1.313-1.313ZM5.051 9.947H4.22V6.8l-.682.254-.28-.704 1.198-.538h.595v4.134Zm2.446.074c-1.085 0-1.606-.564-1.606-1.212a1.01 1.01 0 0 1 .713-.984 1.01 1.01 0 0 1-.555-.914c0-.6.494-1.173 1.448-1.173s1.452.573 1.452 1.173a1.028 1.028 0 0 1-.564.914 1.015 1.015 0 0 1 .722.984c0 .648-.525 1.212-1.61 1.212Zm4.878-1.584H11.5v.876h-.875v-.876H9.75v-.874h.875v-.875h.875v.875h.875v.875Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
