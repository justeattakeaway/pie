import * as React from "react";
import { SVGProps } from "react";
const IconRadioSelected = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--radio-selected" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8 1.219C4.264 1.219 1.219 4.264 1.219 8c0 3.736 3.045 6.781 6.781 6.781 3.736 0 6.781-3.045 6.781-6.781 0-3.736-3.045-6.781-6.781-6.781Zm0 12.25A5.47 5.47 0 0 1 2.531 8 5.47 5.47 0 0 1 8 2.531 5.47 5.47 0 0 1 13.469 8 5.47 5.47 0 0 1 8 13.469ZM10.625 8A2.621 2.621 0 0 1 8 10.625 2.621 2.621 0 0 1 5.375 8 2.621 2.621 0 0 1 8 5.375 2.621 2.621 0 0 1 10.625 8Z" /></svg>;
};
export default IconRadioSelected;