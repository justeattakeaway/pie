import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOver21FilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--over21FilledLarge');
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
                d: 'M24.75 4.625H7.25A2.625 2.625 0 0 0 4.625 7.25v17.5a2.625 2.625 0 0 0 2.625 2.625h17.5a2.625 2.625 0 0 0 2.625-2.625V7.25a2.625 2.625 0 0 0-2.625-2.625ZM13.235 19.894H7.25v-1.146c0-1.602.928-2.276 2.258-2.984 1.33-.709 1.75-1.015 1.75-1.75 0-.735-.508-.954-1.234-.954a2.257 2.257 0 0 0-1.75.787l-.963-1.18a3.684 3.684 0 0 1 2.844-1.19c1.75 0 2.853.944 2.853 2.484 0 1.374-.875 2.214-2.302 2.905-1.286.648-1.75 1.006-1.75 1.444v.088H13.2l.035 1.496Zm4.707 0H16.28v-6.291l-1.365.507-.56-1.409 2.389-1.076h1.198v8.269Zm6.808-3.019H23v1.75h-1.75v-1.75H19.5v-1.75h1.75v-1.75H23v1.75h1.75v1.75Z',
            },
        })]);
    },
};
