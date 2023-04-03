import * as React from "react";
import { SVGProps } from "react";
const IconChevronRight = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--chevron-right" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M5.044 13.18 10.399 8 5 2.82l.875-.962 5.539 5.346a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z" /></svg>;
};
export default IconChevronRight;