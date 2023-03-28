import * as React from "react";
import { SVGProps } from "react";
const IconClockFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--clock-filled-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm4.804 16.503-5.679-3.378V9h1.75v6.851l4.821 2.896-.892 1.506Z" /></svg>;
};
export default IconClockFilledLarge;