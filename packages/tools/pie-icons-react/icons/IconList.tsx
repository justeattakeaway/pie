import * as React from "react";
import { SVGProps } from "react";
const IconList = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--list" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M2.313 11.938a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.624Z" /><path fill="#242E30" d="M14.125 4.719h-8.75V6.03h8.348l.402-1.312Z" /><path fill="#242E30" d="M2.313 6.688a1.313 1.313 0 1 0 0-2.626 1.313 1.313 0 0 0 0 2.625Z" /><path fill="#242E30" d="M12.506 9.969H5.375v1.312h6.729l.402-1.312Z" /></svg>;
};
export default IconList;