import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWalking',
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
            class: 'c-pieIcon c-pieIcon--walking',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_751_191)',
            },
        }, [h('path', {
            attrs: {
                d: 'M12.646 7.125A4.086 4.086 0 019.89 4.937l-.14-.376h-.245a2.083 2.083 0 10-3.255.184A5.18 5.18 0 002.934 7.44L2.286 8.7l1.164.595L4.106 8a3.841 3.841 0 011.645-1.654v2.529a2.757 2.757 0 001.094 2.179 6.61 6.61 0 01-.787.42L3.23 12.777l.56 1.182 2.8-1.322a5.576 5.576 0 001.365-.875l1.138.77 1.146 2.687 1.207-.516-1.216-2.862a.666.666 0 00-.236-.28l-1.12-.717c.172-.25.315-.516.429-.796.133-.328.219-.673.253-1.024l.193-2.03a5.311 5.311 0 002.546 1.426l.639.184.35-1.269-.639-.21zM7.79 2.61a.77.77 0 110 1.54.77.77 0 010-1.54zm-.088 7.438a1.461 1.461 0 01-.638-1.173V5.909c.177-.013.356-.013.534 0h.97l-.306 2.966a2.625 2.625 0 01-.166.665c-.08.19-.18.372-.297.543l-.097-.036z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_751_191',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
