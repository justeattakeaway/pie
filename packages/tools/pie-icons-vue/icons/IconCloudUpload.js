import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCloudUpload',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cloudUpload');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_15_723)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 10.205a2.983 2.983 0 0 1-2.984 2.984h-1.942v-1.313h1.942a1.679 1.679 0 0 0 .359-3.316l-.499-.114V7.93a3.868 3.868 0 0 0-7.682-.586l-.07.393-.385.123a2.021 2.021 0 0 0-1.426 1.951 2.065 2.065 0 0 0 2.065 2.065h1.548v1.313H4.378a3.377 3.377 0 0 1-1.41-6.449 5.189 5.189 0 0 1 10.186.691A2.983 2.983 0 0 1 15 10.205Zm-4.786.332.927-.927-2.406-2.398a1.033 1.033 0 0 0-1.47 0L4.859 9.61l.927.928L7.344 8.98v4.27h1.312V8.98l1.558 1.557Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_15_723',
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
