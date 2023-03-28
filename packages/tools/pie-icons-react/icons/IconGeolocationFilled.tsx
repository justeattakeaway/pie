import * as React from "react";
import { SVGProps } from "react";
const IconGeolocationFilled = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--geolocation-filled" + (props.className ? ' ' : '') + (props.className ?? '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M1.535 6.548V8l2.135.534a5.25 5.25 0 0 1 3.84 3.841l.535 2.135h1.408l3.964-11.926L1.535 6.548Z" /></svg>;
};
export default IconGeolocationFilled;