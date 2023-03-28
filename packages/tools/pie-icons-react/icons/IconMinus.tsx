import * as React from "react";
import { SVGProps } from "react";
const IconMinus = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--minus" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M14.125 7.344H1.875v1.312h12.25V7.344Z" /></svg>;
};
export default IconMinus;