import * as React from "react";
import { SVGProps } from "react";
const IconClockAlert = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--clock-alert" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M10.012 10.905 7.064 9.137V5.095h1.312v3.299l2.31 1.391-.674 1.12Z" /><path fill="#242E30" d="M8 1.219a6.772 6.772 0 0 0-6.344 4.418l.438-.166a3.553 3.553 0 0 1 1.181-.21 5.469 5.469 0 1 1 2.17 7.569c0 .452-.155.89-.438 1.242A6.772 6.772 0 1 0 8 1.22Z" /><path fill="#242E30" d="m3.791 11.063.429-4.376a2.669 2.669 0 0 0-.875-.13 2.625 2.625 0 0 0-.831.13l.42 4.375h.857Z" /><path fill="#242E30" d="M2.636 12.813a.753.753 0 1 0 .753-.753.761.761 0 0 0-.753.752Z" /></svg>;
};
export default IconClockAlert;