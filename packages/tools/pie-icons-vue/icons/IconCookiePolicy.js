import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCookiePolicy',
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
            class: 'c-pieIcon c-pieIcon--cookiePolicy'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_5014_3343)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 14.563A6.565 6.565 0 011.437 8 6.565 6.565 0 018 1.437a6.7 6.7 0 011.321.132l.28 1.155a1.21 1.21 0 00-.464.945c0 .674.552 1.225 1.226 1.225h.07l.656.866a1.22 1.22 0 00-.079.411c0 .674.551 1.225 1.225 1.225.429 0 .814-.218 1.041-.586l1.208.245a6.565 6.565 0 01-6.492 7.508H8zM8 2.75A5.254 5.254 0 002.75 8 5.254 5.254 0 008 13.25a5.254 5.254 0 005.224-4.742 2.54 2.54 0 01-3.526-2.336v-.053A2.536 2.536 0 017.99 2.74L8 2.75z'
            }
        }), h('path', {
            attrs: {
                d: 'M5.839 7.37a.805.805 0 100-1.61.805.805 0 000 1.61z'
            }
        }), h('path', {
            attrs: {
                d: 'M5.839 11.106a.805.805 0 100-1.61.805.805 0 000 1.61z'
            }
        }), h('path', {
            attrs: {
                d: 'M9.426 11.106a.805.805 0 100-1.61.805.805 0 000 1.61z'
            }
        }), h('path', {
            attrs: {
                d: 'M12.279 4.692a.805.805 0 100-1.61.805.805 0 000 1.61z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_5014_3343'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
