import * as React from "react";
import { SVGProps } from "react";
const IconMenuLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--menu-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M28.25 9H3.75V7.25h24.5V9Zm0 14H3.75v1.75h24.5V23Zm0-7.875H3.75v1.75h24.5v-1.75Z" /></svg>;
};
export default IconMenuLarge;