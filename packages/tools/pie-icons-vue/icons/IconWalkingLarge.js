import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWalkingLarge',
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
            class: 'c-pieIcon c-pieIcon--walkingLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__a)',
            },
        }, [h('path', {
            attrs: {
                d: 'M16.219 9.061a3.404 3.404 0 1 0 0-6.808 3.404 3.404 0 0 0 0 6.808Zm0-5.057a1.654 1.654 0 1 1 0 3.308 1.654 1.654 0 0 1 0-3.308Z',
            },
        }), h('path', {
            attrs: {
                d: 'M25.73 15.178a8.9 8.9 0 0 1-6.029-4.848l-.201-.455h-4.095a10.255 10.255 0 0 0-9.214 5.688l-.997 1.872 1.548.814 1.007-1.934a8.54 8.54 0 0 1 4.322-4.051v4.27a5.181 5.181 0 0 0 2.302 4.322l.253.175a9.69 9.69 0 0 1-2.205 1.295l-5.845 2.756.744 1.584 5.819-2.739a11.57 11.57 0 0 0 3.001-1.872l2.739 1.872 2.808 6.502 1.61-.691L20.375 23a.876.876 0 0 0-.306-.376l-2.713-1.846a7.455 7.455 0 0 0 1.628-3.903L19.5 13.2a10.648 10.648 0 0 0 5.828 3.675l.507.122.402-1.706-.507-.114Zm-10.378 4.226a3.43 3.43 0 0 1-1.53-2.87v-4.786a8.602 8.602 0 0 1 1.583-.123h2.511l-.674 5.093a5.785 5.785 0 0 1-1.33 3.114l-.56-.428Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__a',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
