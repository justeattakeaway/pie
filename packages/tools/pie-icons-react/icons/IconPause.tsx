import * as React from "react";
import { SVGProps } from "react";
const IconPause = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--pause" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M6.326 4H5v8h1.326V4Z" /><path fill="#242E30" d="M11 4H9.674v8H11V4Z" /></svg>;
};
export default IconPause;