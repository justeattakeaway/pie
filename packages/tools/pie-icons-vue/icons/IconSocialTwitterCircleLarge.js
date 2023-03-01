import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialTwitterCircleLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--twitterCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.984 21.835a8.34 8.34 0 01-3.224.622l-.07-.052a8.365 8.365 0 01-4.532-1.321 5.889 5.889 0 004.375-1.225 2.949 2.949 0 01-2.756-2.048c.181.035.366.053.55.053.264.001.526-.034.78-.105a2.957 2.957 0 01-2.363-2.896c.408.225.864.351 1.33.367a2.958 2.958 0 01-.875-3.946 8.347 8.347 0 006.125 3.088 2.949 2.949 0 014.053-3.374c.373.163.709.4.987.697a5.784 5.784 0 001.872-.718 2.984 2.984 0 01-1.294 1.637 5.748 5.748 0 001.688-.464 6.124 6.124 0 01-1.47 1.531v.377a8.337 8.337 0 01-5.176 7.777z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.194 26.186a12.25 12.25 0 1013.612-20.37 12.25 12.25 0 00-13.612 20.37zm.972-18.916a10.5 10.5 0 1111.667 17.46A10.5 10.5 0 0110.167 7.27z',
                fill: '#242E30',
            },
        })]);
    },
};
