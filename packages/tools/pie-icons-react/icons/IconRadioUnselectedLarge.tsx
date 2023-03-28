import * as React from "react";
import { SVGProps } from "react";
const IconRadioUnselectedLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--radio-unselected-large" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75Zm0 22.75c-5.793 0-10.5-4.707-10.5-10.5S10.207 5.5 16 5.5 26.5 10.207 26.5 16 21.793 26.5 16 26.5Z" /></svg>;
};
export default IconRadioUnselectedLarge;