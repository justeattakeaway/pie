import * as React from "react";
import { SVGProps } from "react";
const IconGridViewFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--grid-view-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M4.625 14.25h9.625V4.625H4.625v9.625Z" /><path fill="#242E30" d="M17.75 14.25h9.625V4.625H17.75v9.625Z" /><path fill="#242E30" d="M4.625 27.375h9.625V17.75H4.625v9.625Z" /><path fill="#242E30" d="M17.75 27.375h9.625V17.75H17.75v9.625Z" /></svg>;
};
export default IconGridViewFilledLarge;