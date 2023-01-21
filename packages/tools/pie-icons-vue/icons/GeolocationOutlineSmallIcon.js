import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GeolocationOutlineSmallIcon',
  props: {},
  functional: true,
  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 14 14"
      },
      "class": "c-pieIcon c-pieIcon--geolocationOutlineSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.45244 13.4662H7.04369L6.50994 11.375C6.28789 10.4373 5.81203 9.57872 5.13448 8.89346C4.45694 8.2082 3.60385 7.72264 2.66869 7.48999L0.533691 6.99999V5.54749L12.4162 1.58374L8.45244 13.4662ZM2.80869 6.16874H2.98369C4.15022 6.46207 5.21436 7.06873 6.06104 7.92312C6.90771 8.7775 7.5047 9.8471 7.78744 11.0162V11.1912L10.2899 3.66624L2.80869 6.16874Z"
      }
    })]);
  }
};