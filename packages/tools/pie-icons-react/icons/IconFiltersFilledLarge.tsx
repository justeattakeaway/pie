import * as React from "react";
import { SVGProps } from "react";
const IconFiltersFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--filters-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M14.25 9v-.875A2.625 2.625 0 0 0 11.625 5.5h-.875a2.625 2.625 0 0 0-2.625 2.625V9h-5.25v1.75h5.25v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625v-.875h14.875V9H14.25Z" /><path fill="#242E30" d="M23.875 20.375a2.625 2.625 0 0 0-2.625-2.625h-.875a2.625 2.625 0 0 0-2.625 2.625v.875H2.875V23H17.75v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625V23h5.25v-1.75h-5.25v-.875Z" /></svg>;
};
export default IconFiltersFilledLarge;