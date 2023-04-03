import * as React from "react";
import { SVGProps } from "react";
const IconPauseLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--pause-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11 9h1.75v14H11V9Zm8.25 0H21v14h-1.75V9Z" /></svg>;
};
export default IconPauseLarge;