import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaymentTwint',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--twint', 'IconPaymentTwint');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('rect', {
            attrs: {
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                fill: '#000',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.75 10.077h-1.713v.412h.615v1.76h.485v-1.76h.613v-.412Zm-7.784 0H3.25v.412h.615v1.76h.485v-1.76h.616v-.412Zm4.96-.068c-.54 0-.84.346-.84.848v1.393h.48v-1.404c0-.218.128-.386.365-.386s.363.2.363.386v1.404h.48v-1.393c.002-.502-.308-.848-.848-.848Zm-1.81.068v2.173h.48v-2.173h-.48Zm-1.627.86.015.098.452 1.215h.195l.613-2.173h-.472L7 11.219l-.018.123-.024-.123-.391-1.142H6.41l-.39 1.142-.024.123-.016-.123-.292-1.142h-.474l.612 2.173h.196l.451-1.215.016-.097Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M10.355 7.616a.238.238 0 0 1-.109.186L8.152 9.02a.24.24 0 0 1-.217 0L5.84 7.802a.237.237 0 0 1-.108-.186V5.18c0-.069.048-.152.108-.186l2.095-1.218a.24.24 0 0 1 .217 0l2.095 1.218c.06.034.108.117.108.186v2.436Z',
            },
        }), h('path', {
            attrs: {
                fill: 'url(#prefix__paint0_radial_3973_4725)',
                d: 'm9.136 6.404-.548.807-.28-.431.323-.485a.638.638 0 0 0 .04-.65.67.67 0 0 0-1.219 0 .627.627 0 0 0 .037.641s.18.264.329.488l.242.354.366.563c.003.002.06.091.162.091.097 0 .157-.089.166-.097L9.61 6.41h-.474v-.006Zm-1.076.02s-.142-.218-.237-.37a.272.272 0 0 1 .237-.409c.226 0 .337.245.237.408-.091.153-.237.37-.237.37Z',
            },
        }), h('path', {
            attrs: {
                fill: 'url(#prefix__paint1_radial_3973_4725)',
                d: 'm7.535 7.185-.537-.758s-.142-.219-.236-.37a.272.272 0 0 1 .316-.397l.189-.348A.68.68 0 0 0 7 5.255a.674.674 0 0 0-.61.39.627.627 0 0 0 .037.641l.939 1.399c.008.011.068.1.168.1s.157-.086.166-.097l.282-.434-.242-.359-.206.29Z',
            },
        }), h('defs', [h('radialGradient', {
            attrs: {
                id: 'prefix__paint0_radial_3973_4725',
                cx: '0',
                cy: '0',
                r: '1',
                gradientTransform: 'matrix(10.7623 0 0 9.6294 5.383 4.495)',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#FC0',
            },
        }), h('stop', {
            attrs: {
                offset: '.092',
                'stop-color': '#FFC800',
            },
        }), h('stop', {
            attrs: {
                offset: '.174',
                'stop-color': '#FFBD00',
            },
        }), h('stop', {
            attrs: {
                offset: '.253',
                'stop-color': '#FFAB00',
            },
        }), h('stop', {
            attrs: {
                offset: '.33',
                'stop-color': '#FF9100',
            },
        }), h('stop', {
            attrs: {
                offset: '.405',
                'stop-color': '#FF7000',
            },
        }), h('stop', {
            attrs: {
                offset: '.479',
                'stop-color': '#FF4700',
            },
        }), h('stop', {
            attrs: {
                offset: '.55',
                'stop-color': '#FF1800',
            },
        }), h('stop', {
            attrs: {
                offset: '.582',
                'stop-color': 'red',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': 'red',
            },
        })]), h('radialGradient', {
            attrs: {
                id: 'prefix__paint1_radial_3973_4725',
                cx: '0',
                cy: '0',
                r: '1',
                gradientTransform: 'matrix(2.31436 0 0 3.52162 6.36 5.622)',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#00B4E6',
            },
        }), h('stop', {
            attrs: {
                offset: '.201',
                'stop-color': '#00B0E3',
            },
        }), h('stop', {
            attrs: {
                offset: '.39',
                'stop-color': '#01A5DB',
            },
        }), h('stop', {
            attrs: {
                offset: '.574',
                'stop-color': '#0292CD',
            },
        }), h('stop', {
            attrs: {
                offset: '.755',
                'stop-color': '#0377BA',
            },
        }), h('stop', {
            attrs: {
                offset: '.932',
                'stop-color': '#0455A1',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#054696',
            },
        })])])]);
    },
};
