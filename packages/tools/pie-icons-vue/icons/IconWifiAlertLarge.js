import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWifiAlertLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28',
            },
            class: 'c-pieIcon c-pieIcon--wifiAlertLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.78 16.188A6.291 6.291 0 0014 14.874 6.65 6.65 0 008.864 17.5l1.356 1.111A4.917 4.917 0 0114 16.625a4.918 4.918 0 013.78 1.942l.359-.288a3.01 3.01 0 01-.42-1.523c.003-.19.024-.381.06-.569z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M17.447 4.777A15.006 15.006 0 0014 4.375a15.952 15.952 0 00-12.381 6.169l1.347 1.111A14.254 14.254 0 0114 6.125a13.23 13.23 0 013.622.525v-.411l-.122-1.33',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M23.809 7.963l-.184 2.17c.51.477.988.986 1.435 1.522l1.347-1.111a18.87 18.87 0 00-2.598-2.581z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M14 9.625a11.463 11.463 0 00-8.873 4.498l1.348 1.11A9.767 9.767 0 0114 11.376a8.864 8.864 0 014.191 1.076L18 10.43a10.5 10.5 0 00-4-.805z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M14 23.406a1.531 1.531 0 100-3.062 1.531 1.531 0 000 3.062z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M19.329 6.072a4.585 4.585 0 012.905 0l-.744 7.64h-1.418l-.743-7.64zm2.765 10.702a1.312 1.312 0 11-2.625 0 1.312 1.312 0 012.625 0z',
                fill: '#242E30',
            },
        })]);
    },
};
