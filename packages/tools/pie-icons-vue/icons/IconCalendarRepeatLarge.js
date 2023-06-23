import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCalendarRepeatLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--calendarRepeatLarge', 'IconCalendarRepeatLarge');
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
                d: 'M22.125 6.375v-1.75h-1.75v1.75h-8.75v-1.75h-1.75v1.75h-5.25v21H23A4.375 4.375 0 0 0 27.375 23V6.375h-5.25ZM25.625 23A2.625 2.625 0 0 1 23 25.625H6.375v-17.5h3.5V9h1.75v-.875h8.75V9h1.75v-.875h3.5V23Zm-3.938-5.688a5.688 5.688 0 1 1-10.727-2.625l-1.383.438L9 13.506l4.375-1.54 1.531 4.375-1.645.578-.612-1.75a3.902 3.902 0 0 0-.613 2.1A3.937 3.937 0 1 0 16 13.375v-1.75a5.696 5.696 0 0 1 5.688 5.688Z',
            },
        })]);
    },
};
