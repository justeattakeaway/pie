import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialLinkedinCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--linkedinCircleLarge');
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
                d: 'M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'm16.779 14.784.105-.105a3.14 3.14 0 0 1 3.333-1.304 3.307 3.307 0 0 1 2.827 3.019c.055.397.084.797.087 1.199v5.013c0 .184 0 .245-.236.236H20.27c-.193 0-.245-.052-.245-.236v-4.681a3.806 3.806 0 0 0-.114-1.05 1.522 1.522 0 0 0-2.467-.761 1.855 1.855 0 0 0-.665 1.531v4.961c0 .193-.062.193-.21.193h-2.67c-.157 0-.218 0-.218-.21v-8.864c0-.184 0-.236.219-.236h2.677c.158 0 .202.043.202.201v1.094Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M11.992 18.17v4.375c0 .184 0 .254-.236.245H9.131c-.157 0-.219 0-.219-.21v-8.89c0-.157 0-.21.202-.201h2.695c.184 0 .21.061.21.218-.035 1.505-.027 2.984-.027 4.463Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                d: 'M10.461 9a1.61 1.61 0 0 1 1.68 2.039 1.75 1.75 0 0 1-2.065 1.146 1.585 1.585 0 0 1-1.251-2.161A1.662 1.662 0 0 1 10.461 9Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
