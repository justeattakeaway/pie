import * as React from "react";
import { SVGProps } from "react";
const IconPrinterFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--printer-filled" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M11.281 3.844V1.656H4.72v2.188h6.562Z" /><path fill="#242E30" d="M13.25 5.156H2.75a1.54 1.54 0 0 0-1.531 1.532v5.906h3.5V9.969h-.875V8.656h8.312V9.97h-.875v2.625h3.5V6.688a1.54 1.54 0 0 0-1.531-1.532Z" /><path fill="#242E30" d="M6.031 9.969v4.375H9.96v-.656h.009v-3.72H6.03Z" /></svg>;
};
export default IconPrinterFilled;