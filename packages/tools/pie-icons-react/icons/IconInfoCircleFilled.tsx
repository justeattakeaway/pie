import * as React from "react";
import { SVGProps } from "react";
const IconInfoCircleFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--info-circle-filled" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219ZM7.344 7.29h1.312v3.334H7.344V7.291Zm1.531-1.916a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z" /></svg>;
};
export default IconInfoCircleFilled;