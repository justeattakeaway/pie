import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconInfoCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--infoCircleLarge');
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
                d: 'M15.125 14.25h1.75v7.875h-1.75V14.25ZM16 9.875a1.313 1.313 0 1 0 0 2.625 1.313 1.313 0 0 0 0-2.625ZM28.25 16a12.25 12.25 0 1 1-24.499 0 12.25 12.25 0 0 1 24.499 0Zm-1.75 0a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0Z',
            },
        })]);
    },
};
