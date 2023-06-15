import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconWorld',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--world', 'IconWorld');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.28a6.72 6.72 0 1 0 0 13.44A6.72 6.72 0 0 0 8 1.28Zm4.594 3.876c.206.346.377.713.507 1.094l-1.724 1.986V6.154l-1.12-.175a.386.386 0 0 1-.262-.175.543.543 0 0 1-.122-.429.367.367 0 0 1 .385-.245l2.336.026Zm-7-1.995v1.812l-1.488.813-.105.377-.875-.464A5.46 5.46 0 0 1 5.594 3.16Zm.455 5.495h.621l.586.49-.428 1.479a2.423 2.423 0 0 1-1.392-1.453l.613-.516ZM8 13.408A5.408 5.408 0 0 1 2.593 8c-.002-.35.034-.699.105-1.041l1.312.691c.122.227.288.426.49.586l-.446.377v.323c0 .097.114 2.345 3.019 3.194l.63.184 1.04-3.632-1.618-1.338H5.743a.569.569 0 0 1-.604-.368l.087-.306 1.68-.875V2.75h-.183A5.548 5.548 0 0 1 8 2.592a5.399 5.399 0 0 1 3.5 1.252h-1.242A1.636 1.636 0 0 0 8.595 5.12a1.811 1.811 0 0 0 .777 1.916c.197.123.419.204.65.237l.07 2.625 1.504.157L13.4 7.87a.963.963 0 0 1 0 .157A5.407 5.407 0 0 1 8 13.408Z',
            },
        })]);
    },
};
