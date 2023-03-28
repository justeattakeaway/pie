import * as React from "react";
import { SVGProps } from "react";
const IconSort = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--sort" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M9.75 11.719h-3.5v1.312h3.5V11.72Z" /><path fill="#242E30" d="M12.375 7.344h-8.75v1.312h8.75V7.344Z" /><path fill="#242E30" d="M15 2.969H1V4.28h14V2.97Z" /></svg>;
};
export default IconSort;