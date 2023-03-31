import * as React from "react";
import { SVGProps } from "react";
const IconRefresh = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--refresh" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M12.594 1.875v2.791L12.48 4.5a5.67 5.67 0 1 0 1.076 4.629l-1.286-.254a4.375 4.375 0 1 1-.875-3.553l.21.272h-2.73v1.312h3.938a1.094 1.094 0 0 0 1.093-1.093V1.874h-1.312Z" /></svg>;
};
export default IconRefresh;