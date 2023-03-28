import * as React from "react";
import { SVGProps } from "react";
const IconAppSuccess = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--app-success" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11.5 1.219h-7A1.54 1.54 0 0 0 2.969 2.75v10.5A1.54 1.54 0 0 0 4.5 14.781h7a1.54 1.54 0 0 0 1.531-1.531V2.75A1.54 1.54 0 0 0 11.5 1.219Zm.219 12.031a.219.219 0 0 1-.219.219h-7a.219.219 0 0 1-.219-.219V2.75a.219.219 0 0 1 .219-.219h1.75l.429.954h2.668l.403-.954h1.75a.219.219 0 0 1 .219.219v10.5ZM9.75 5.786l.875.928L8 9.339a.656.656 0 0 1-.875 0L5.603 7.842l.927-.927 1.032 1.032 2.188-2.16Z" /></svg>;
};
export default IconAppSuccess;