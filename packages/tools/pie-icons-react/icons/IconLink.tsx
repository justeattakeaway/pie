import * as React from "react";
import { SVGProps } from "react";
const IconLink = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--link" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M2.531 8.438c-.01-.861.302-1.695.875-2.337a2.791 2.791 0 0 1 2.074-.945h1.645V3.844H5.48a4.121 4.121 0 0 0-3.036 1.365 4.813 4.813 0 0 0-1.225 3.229 4.445 4.445 0 0 0 4.26 4.593h1.646V11.72H5.48A3.133 3.133 0 0 1 2.53 8.438Z" /><path fill="#242E30" d="M10.52 3.844H8.875v1.312h1.645a3.133 3.133 0 0 1 2.949 3.282c.01.86-.302 1.694-.875 2.336a2.792 2.792 0 0 1-2.065.945H8.875v1.312h1.645a4.12 4.12 0 0 0 3.036-1.365 4.813 4.813 0 0 0 1.225-3.229 4.445 4.445 0 0 0-4.261-4.593Z" /><path fill="#242E30" d="M5.471 9.094h5.058l.603-1.313H4.867l.604 1.313Z" /></svg>;
};
export default IconLink;