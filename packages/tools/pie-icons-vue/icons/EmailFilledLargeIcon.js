import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'EmailFilledLargeIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--emailFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.81 24.225C29.0133 23.8485 29.1214 23.4279 29.125 23V9.00001C29.1238 8.64535 29.0525 8.29444 28.915 7.96751L20.0775 16.1488L28.81 24.225Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.7912 17.3387L16.7 19.2637C16.5386 19.4148 16.3261 19.4992 16.105 19.5C15.8881 19.4994 15.6792 19.4184 15.5187 19.2725L13.375 17.33L4.47625 25.415C4.79997 25.5529 5.14812 25.6243 5.5 25.625H26.5C26.8494 25.6282 27.1955 25.5566 27.515 25.415L18.7912 17.3387Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.105 17.435L27.7163 6.69C27.3423 6.4881 26.925 6.38 26.5 6.375H5.50002C5.10128 6.37729 4.70865 6.4732 4.35377 6.655L16.105 17.435Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M3.12001 7.90625C2.95783 8.24801 2.87412 8.62171 2.87501 9V23C2.88001 23.4249 2.9881 23.8423 3.19001 24.2162L12.08 16.1488L3.12001 7.90625Z',
                fill: '#242E30'
            }
        })]);
    }
};
