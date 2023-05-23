import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconComponentsLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--componentsLarge');
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
                d: 'M21.539 9.21 16 3.662 10.453 9.21 16 14.757l5.548-5.547h-.01ZM15.99 6.139l3.072 3.071-3.072 3.071-3.07-3.071 3.07-3.071Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M22.79 10.453 17.243 16l5.547 5.547L28.338 16l-5.548-5.547ZM19.72 16l3.071-3.071L25.861 16l-3.07 3.071L19.718 16Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M9.21 10.444 3.663 15.99 9.21 21.54l5.548-5.548-5.548-5.547ZM6.14 15.99 9.21 12.92l3.071 3.071-3.07 3.072-3.072-3.072Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.453 22.781 16 28.33l5.548-5.548L16 17.234l-5.547 5.547ZM16 25.853 12.93 22.78 16 19.71l3.071 3.071-3.07 3.072Z',
            },
        })]);
    },
};
