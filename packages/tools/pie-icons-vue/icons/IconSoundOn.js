import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSoundOn',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--soundOn',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.5 1.219l-.193.183A21.624 21.624 0 019.348 3.1a23.625 23.625 0 01-2.406 1.619H4.5A1.54 1.54 0 002.969 6.25v3.5A1.54 1.54 0 004.5 11.281h2.441c.837.487 1.64 1.028 2.407 1.619a22.87 22.87 0 011.986 1.697l.192.184h1.505V1.22H11.5zM4.281 9.75v-3.5a.219.219 0 01.219-.219h1.969V9.97H4.5a.219.219 0 01-.219-.219zm7.438 3.412c-.508-.463-1.033-.875-1.566-1.312a26.812 26.812 0 00-2.372-1.601V5.75c.82-.49 1.61-1.024 2.372-1.601.533-.411 1.058-.875 1.566-1.313v10.325z',
                fill: '#242E30',
            },
        })]);
    },
};
