import * as React from "react";
import { SVGProps } from "react";
const IconPlusCircleFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--plus-circle-filled" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-1.391 5.451H8.656v2.748H7.344V8.656H4.596V7.344h2.748V4.596h1.312v2.748h2.748v1.312Z" /></svg>;
};
export default IconPlusCircleFilled;