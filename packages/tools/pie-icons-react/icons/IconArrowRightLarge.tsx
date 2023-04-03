import * as React from "react";
import { SVGProps } from "react";
const IconArrowRightLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--arrow-right-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M3.75 16.875h21.875l-7 7 1.234 1.234 7.875-7.875a1.748 1.748 0 0 0 0-2.477l-7.875-7.875-1.234 1.243 7 7H3.75v1.75Z" /></svg>;
};
export default IconArrowRightLarge;