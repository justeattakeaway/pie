import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPlayCircleFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--playCircleFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.011 9.164 9.557 8 7.011 6.836v2.328Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm3.141 7.498L6.82 10.695a.744.744 0 0 1-.333.079.726.726 0 0 1-.42-.149.78.78 0 0 1-.367-.656V6.014a.779.779 0 0 1 .367-.639.77.77 0 0 1 .753-.053L11.14 7.3a.788.788 0 0 1 0 1.435v-.018Z',
            },
        })]);
    },
};
