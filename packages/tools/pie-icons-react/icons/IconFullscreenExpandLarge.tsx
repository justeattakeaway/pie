import * as React from "react";
import { SVGProps } from "react";
const IconFullscreenExpandLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--fullscreen-expand-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M5.5 5.375h8.583l-.983 1.75H7.25v5.85l-1.75.983V5.375Z" /><path fill="#242E30" d="M18.9 7.125h5.85v5.848l1.75.981V5.375h-8.583l.983 1.75Z" /><path fill="#242E30" d="M26.5 26.375h-8.58l.982-1.75h5.848v-5.848l1.75-.982v8.58Z" /><path fill="#242E30" d="M5.5 26.375v-8.583l1.75.983v5.85h5.848l.981 1.75H5.5Z" /></svg>;
};
export default IconFullscreenExpandLarge;