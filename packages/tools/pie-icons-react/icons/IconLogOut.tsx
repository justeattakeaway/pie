import * as React from "react";
import { SVGProps } from "react";
const IconLogOut = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--log-out" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M13.906 8a5.906 5.906 0 1 1-8.531-5.25v1.487a4.594 4.594 0 1 0 5.25 0V2.75A5.915 5.915 0 0 1 13.906 8Zm-5.25-7H7.344v5.25h1.312V1Z" /></svg>;
};
export default IconLogOut;