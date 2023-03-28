import * as React from "react";
import { SVGProps } from "react";
const IconCloseCircleFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--close-circle-filled-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16.25 4a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm4.996 16.004-1.242 1.242-3.754-3.762-3.754 3.762-1.242-1.242 3.762-3.754-3.762-3.754 1.242-1.242 3.754 3.762 3.754-3.762 1.242 1.242-3.762 3.754 3.762 3.754Z" /></svg>;
};
export default IconCloseCircleFilledLarge;