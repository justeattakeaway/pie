import * as React from "react";
import { SVGProps } from "react";
const IconCloseLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--close-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m23.42 24.663 1.242-1.243L17.234 16l7.428-7.429-1.242-1.233L16 14.766 8.57 7.338 7.337 8.57 14.767 16l-7.43 7.42 1.234 1.242L16 17.235l7.42 7.428Z" /></svg>;
};
export default IconCloseLarge;