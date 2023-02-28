import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialAndroidCircle',
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
            class: 'c-pieIcon c-pieIcon--androidCircle'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_4814_3493)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M6.637 5.144c.298-.28.7-.468 1.149-.513h.42a1.96 1.96 0 011.155.518l.345-.625s.038-.031.06-.018c.021.014.03.04.017.063l-.357.645c.282.295.454.679.46 1.1h-3.78c.006-.422.18-.808.465-1.105l-.354-.64s-.004-.05.017-.063c.022-.013.047-.004.06.018l.343.62zm.802.389c0 .12-.099.223-.215.223a.22.22 0 01-.218-.219.22.22 0 01.214-.223.22.22 0 01.219.219zm1.62 0c0 .12-.099.223-.215.223a.22.22 0 01-.218-.219.22.22 0 01.214-.223.22.22 0 01.219.219z'
            }
        }), h('path', {
            attrs: {
                d: 'M7.473 9.942h1.054v1.12a.43.43 0 00.42.438.43.43 0 00.42-.437v-1.12h.022c.287 0 .518-.246.518-.554V6.5h-3.81V9.39c0 .303.232.553.519.553h.017v1.12a.43.43 0 00.42.438.43.43 0 00.42-.437v-1.12z'
            }
        }), h('path', {
            attrs: {
                d: 'M5.84 7.189a.43.43 0 00-.42-.438.43.43 0 00-.42.438v1.874a.43.43 0 00.42.438.43.43 0 00.42-.438V7.19z'
            }
        }), h('path', {
            attrs: {
                d: 'M10.58 6.751a.43.43 0 01.42.438v1.874a.43.43 0 01-.42.438.43.43 0 01-.42-.438V7.19a.43.43 0 01.42-.438z'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M4.237 2.315A6.781 6.781 0 018 1.175 6.79 6.79 0 0114.78 8 6.781 6.781 0 114.237 2.315zm.72 10.185a5.468 5.468 0 106.086-9.087A5.468 5.468 0 004.957 12.5z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_4814_3493'
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
