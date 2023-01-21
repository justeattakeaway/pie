import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FullscreenExitIcon',
  props: {},
  functional: true,
  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--fullscreenExit"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M19.25 2.1875L17.5 1.3125V10.5H26.632L25.6461 8.75H19.25V2.1875Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M2.35385 19.25L1.36794 17.5H10.5V26.6875L8.74998 25.8125V19.25H2.35385Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M26.6875 17.5L25.8125 19.25H19.25V25.6461L17.5 26.632V17.5H26.6875Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.75 2.35385L10.5 1.36794V10.5H1.3125L2.1875 8.74998H8.75V2.35385Z"
      }
    })]);
  }
};