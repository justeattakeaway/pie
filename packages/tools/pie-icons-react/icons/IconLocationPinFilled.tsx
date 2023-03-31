import * as React from "react";
import { SVGProps } from "react";
const IconLocationPinFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--location-pin-filled" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11.938 3.135a5.574 5.574 0 0 0-7.875 7.875L8 15l3.938-3.938a5.575 5.575 0 0 0 0-7.927Zm-2.844 3.99a1.094 1.094 0 1 1-2.188 0 1.094 1.094 0 0 1 2.188 0Z" /></svg>;
};
export default IconLocationPinFilled;