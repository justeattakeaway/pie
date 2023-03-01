import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialApple',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--apple'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.909 10.704c0 .061-.053.114-.07.166a7.068 7.068 0 01-1.558 2.546 1.671 1.671 0 01-2.021.28 2.135 2.135 0 00-2.144 0c-.31.17-.662.249-1.015.228a1.487 1.487 0 01-1.076-.613 7.368 7.368 0 01-1.978-5.119c.005-.539.118-1.071.333-1.566A2.844 2.844 0 017.3 5.121a1.531 1.531 0 001.514 0c.243-.124.498-.224.761-.297a3.246 3.246 0 011.925.201 2.17 2.17 0 011.111.945l-.49.437a2.766 2.766 0 00-.481.534 2.686 2.686 0 00.376 3.133c.238.284.545.501.893.63z',
                fill: '#000'
            }
        }), h('path', {
            attrs: {
                d: 'M10.38 1.875a2.31 2.31 0 01-.21 1.269A2.432 2.432 0 018.42 4.63c-.551.114-.543.123-.481-.437a2.739 2.739 0 012.178-2.319 2.42 2.42 0 01.263 0z',
                fill: '#000'
            }
        })]);
    }
};
