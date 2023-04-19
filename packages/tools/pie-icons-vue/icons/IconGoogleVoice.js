import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGoogleVoice',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--googleVoice');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_1955)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M12.147 10.126a1.007 1.007 0 0 0-.743-.324 1.032 1.032 0 0 0-.727.307l-.717.7a.788.788 0 0 1-.534.219.796.796 0 0 1-.551-.228L5.664 7.562a.77.77 0 0 1 0-1.076l.586-.595c.577-.595.595-.997 0-1.584l-2.17-2.16a1.12 1.12 0 0 0-1.654.052 4.095 4.095 0 0 0-.997 2.765 8.076 8.076 0 0 0 1.61 4.786c1.75 2.511 3.98 4.471 7.105 5.119.41.088.83.135 1.25.14a4.102 4.102 0 0 0 2.993-1.216.745.745 0 0 0 0-1.234 83.951 83.951 0 0 0-2.24-2.433Zm-.752 3.562a4.514 4.514 0 0 1-.989-.114C8 13.066 5.98 11.614 4.106 8.98A6.781 6.781 0 0 1 2.75 4.964a2.809 2.809 0 0 1 .551-1.75L4.09 4l1.076 1.094c-.193.201-.333.341-.464.49a2.065 2.065 0 0 0 0 2.896l3.211 3.238a2.048 2.048 0 0 0 1.514.656c.54 0 1.057-.21 1.444-.586l.096-.088.429-.42 1.75 1.873a2.791 2.791 0 0 1-1.75.534ZM9.032 1.227h-.06c-.508 0-.71.174-.71.7V7.44c0 .394.167.56.552.56h5.53c.498 0 .682-.201.682-.683a6.177 6.177 0 0 0-5.994-6.09Zm4.14 5.442H9.548V2.575a4.857 4.857 0 0 1 4.068 4.086l-.446.009Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_1955',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
