import * as React from "react";
import { SVGProps } from "react";
const IconSortLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--sort-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M18.625 20.125h-5.25v1.75h5.25v-1.75Z" /><path fill="#242E30" d="M5.5 6.375v1.75h22.75v-1.75H5.5Z" /><path fill="#242E30" d="M5.5 6.375H3.75v1.75H5.5v-1.75Z" /><path fill="#242E30" d="M23 13.25H9V15h14v-1.75Z" /></svg>;
};
export default IconSortLarge;