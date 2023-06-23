import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconVegetarianFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--vegetarianFilledLarge', 'IconVegetarianFilledLarge');
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
                d: 'm23.166 3.155-.428-.753-.762.473c-.463.262-11.375 6.562-13.125 12.924a9.905 9.905 0 0 0 3.316 10.281c.28-.131.57-.289.876-.446l.078-.044c.254-.149.481-.306.718-.473a10.818 10.818 0 0 0 1.522-1.294 2.922 2.922 0 0 0 .525-2.258 4.017 4.017 0 0 0-1.802-2.625l.971-1.461a5.933 5.933 0 0 1 2.424 3.202c.254-.564.46-1.15.612-1.75l.534-2.564 1.75.42-.639 2.547a12.627 12.627 0 0 1-2.992 5.486l-.271.262c-.314.31-.644.602-.99.875-.253.21-.524.412-.804.604-.28.193-.464.324-.709.473l-.158.087c.62.322 1.27.577 1.943.762.854.24 1.738.36 2.625.358a9.914 9.914 0 0 0 9.538-7.28c1.715-6.343-4.49-17.334-4.752-17.806Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.5 26.859v1.75a12.364 12.364 0 0 0 8.295-1.505A9.784 9.784 0 0 1 12.133 26a10.684 10.684 0 0 1-6.633.858Z',
            },
        })]);
    },
};
