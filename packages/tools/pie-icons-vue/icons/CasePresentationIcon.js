import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CasePresentationIcon',
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
      "class": "c-pieIcon c-pieIcon--casePresentation"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M27.125 3.5H0.875V5.25H2.625V17.5C2.625 18.1962 2.90156 18.8639 3.39384 19.3562C3.88613 19.8484 4.55381 20.125 5.25 20.125H13.125V22.4L9.30125 26.25H11.7688L14 23.9925L16.2312 26.25H18.69L14.875 22.3825V20.125H22.75C23.4462 20.125 24.1139 19.8484 24.6062 19.3562C25.0984 18.8639 25.375 18.1962 25.375 17.5V5.25H27.125V3.5ZM23.625 17.5C23.625 17.7321 23.5328 17.9546 23.3687 18.1187C23.2046 18.2828 22.9821 18.375 22.75 18.375H5.25C5.01794 18.375 4.79538 18.2828 4.63128 18.1187C4.46719 17.9546 4.375 17.7321 4.375 17.5V5.25H23.625V17.5ZM10.5 14.875H8.75V11.375H10.5V14.875ZM14.875 14.875H13.125V7.875H14.875V14.875ZM19.25 14.875H17.5V9.625H19.25V14.875Z"
      }
    })]);
  }
};