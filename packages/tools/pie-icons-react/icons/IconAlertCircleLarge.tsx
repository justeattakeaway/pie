import * as React from "react";
import { SVGProps } from "react";
const IconAlertCircleLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--alert-circle-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /><path fill="#242E30" d="M14.547 10.111a4.584 4.584 0 0 1 2.905 0l-.743 7.639H15.29l-.744-7.639Zm2.765 10.701a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Z" /></svg>;
};
export default IconAlertCircleLarge;