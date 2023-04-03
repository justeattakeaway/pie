import * as React from "react";
import { SVGProps } from "react";
const IconGeolocation = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--geolocation" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M9.452 14.466H8.044l-.534-2.091A5.25 5.25 0 0 0 3.669 8.49L1.534 8V6.547l11.882-3.963-3.964 11.882ZM3.81 7.17h.175a6.598 6.598 0 0 1 4.803 4.847v.175l2.503-7.525L3.809 7.17Z" /></svg>;
};
export default IconGeolocation;