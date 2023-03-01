import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOverFilled18',
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
            class: 'c-pieIcon c-pieIcon--overFilled18'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.497 9.304c.403 0 .73-.253.73-.565 0-.311-.327-.564-.73-.564-.404 0-.73.253-.73.564 0 .312.326.565.73.565z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.716 7.486a.555.555 0 01-.22.028.547.547 0 01-.59-.529.538.538 0 01.59-.525.542.542 0 01.596.525.555.555 0 01-.376.501z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M12.375 2.313h-8.75a1.313 1.313 0 00-1.313 1.312v8.75a1.313 1.313 0 001.313 1.313h8.75a1.313 1.313 0 001.313-1.313v-8.75a1.313 1.313 0 00-1.313-1.313zM5.051 9.947H4.22V6.8l-.682.254-.28-.704 1.198-.538h.595v4.134zm2.446.074c-1.085 0-1.606-.564-1.606-1.212a1.01 1.01 0 01.713-.984 1.01 1.01 0 01-.555-.914c0-.6.494-1.173 1.448-1.173s1.452.573 1.452 1.173a1.028 1.028 0 01-.564.914 1.015 1.015 0 01.722.984c0 .648-.525 1.212-1.61 1.212zm4.878-1.584H11.5v.876h-.875v-.876H9.75v-.874h.875v-.875h.875v.875h.875v.875z',
                fill: '#242E30'
            }
        })]);
    }
};
