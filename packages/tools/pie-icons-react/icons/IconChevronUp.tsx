import * as React from "react";
import { SVGProps } from "react";
const IconChevronUp = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--chevron-up" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.18 10.97 8 5.615l-5.18 5.399-.962-.875 5.346-5.565a1.164 1.164 0 0 1 1.671 0l5.25 5.495-.945.901Z" /></svg>;
};
export default IconChevronUp;