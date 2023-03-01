import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCopyFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--copyFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.596 2.079L25.844 4.37A2.424 2.424 0 0127.82 7.18L24.75 24.811a2.388 2.388 0 01-.945 1.54V9.57a4.183 4.183 0 00-4.174-4.183H9.56l.227-1.33a2.38 2.38 0 01.963-1.566 2.45 2.45 0 011.846-.411z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M6.183 7.136h13.44a2.433 2.433 0 012.432 2.433v17.885a2.432 2.432 0 01-2.433 2.432H6.182a2.432 2.432 0 01-2.432-2.432V9.569a2.433 2.433 0 012.433-2.433zm2.344 6.93h8.75v1.75h-8.75v-1.75zm8.75 3.78h-8.75v1.75h8.75v-1.75zm-8.75 3.771h8.75v1.75h-8.75v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
