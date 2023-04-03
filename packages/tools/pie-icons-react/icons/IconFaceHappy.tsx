import * as React from "react";
import { SVGProps } from "react";
const IconFaceHappy = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--face-happy" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Z" /><path fill="#242E30" d="M5 6.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" /><path fill="#242E30" d="M9.5 6.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" /><path fill="#242E30" d="M11.125 9H9.751a1.846 1.846 0 0 1-3.377 0H5a3.168 3.168 0 0 0 6.125 0Z" /></svg>;
};
export default IconFaceHappy;