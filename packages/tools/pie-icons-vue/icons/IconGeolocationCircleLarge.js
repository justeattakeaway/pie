import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGeolocationCircleLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--geolocationCircleLarge', 'IconGeolocationCircleLarge');
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
                d: 'M17.479 22.44h-1.75l-.551-2.205a4.752 4.752 0 0 0-3.448-3.447l-2.205-.552v-1.75l11.917-3.929L17.48 22.44Zm-4.664-7.158a6.432 6.432 0 0 1 3.903 3.903l1.96-5.862-5.863 1.96ZM16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z',
            },
        })]);
    },
};
