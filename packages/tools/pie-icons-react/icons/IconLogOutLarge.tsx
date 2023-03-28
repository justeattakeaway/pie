import * as React from "react";
import { SVGProps } from "react";
const IconLogOutLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--log-out-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M27.375 16.875a11.375 11.375 0 1 1-15.75-10.5v1.934a9.625 9.625 0 1 0 8.75 0V6.375a11.375 11.375 0 0 1 7 10.5Zm-10.5-14h-1.75v10.5h1.75v-10.5Z" /></svg>;
};
export default IconLogOutLarge;