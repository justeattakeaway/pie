import * as React from "react";
import { SVGProps } from "react";
const IconMinusLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--minus-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M27.375 16.875v-1.75H4.625v1.75h22.75Z" /></svg>;
};
export default IconMinusLarge;