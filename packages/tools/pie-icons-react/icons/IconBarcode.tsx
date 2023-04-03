import * as React from "react";
import { SVGProps } from "react";
const IconBarcode = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--barcode" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M3.188 12.375H1.875V2.75h1.313v9.625Zm10.5-9.625h-1.313v9.625h1.313V2.75Zm-2.626 0H9.75v7.875h1.313V2.75Zm-2.624 0H7.125v7.875h1.313V2.75Zm-2.626 0H4.5v7.875h1.313V2.75Z" /></svg>;
};
export default IconBarcode;