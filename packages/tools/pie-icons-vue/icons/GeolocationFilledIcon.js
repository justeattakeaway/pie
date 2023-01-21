import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GeolocationFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--geolocationFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4.15613 10.9725V13.02L7.55988 13.895C9.14879 14.2901 10.6 15.1106 11.7578 16.2684C12.9155 17.4261 13.736 18.8774 14.1311 20.4663L15.0061 23.87H17.0536L23.4586 4.54126L4.15613 10.9725Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.0274 23.8438H14.9799L14.1049 20.44C13.7098 18.8511 12.8893 17.3998 11.7315 16.2421C10.5738 15.0844 9.12254 14.2639 7.53363 13.8688L4.12988 12.9938V10.9725L23.4586 4.54126L17.0274 23.8438Z"
      }
    })]);
  }
};