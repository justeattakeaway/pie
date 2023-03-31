import * as React from "react";
import { SVGProps } from "react";
const IconGeolocationFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--geolocation-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M6.156 12.973v2.047l3.404.875a9.012 9.012 0 0 1 6.571 6.571l.875 3.404h2.048l6.405-19.329-19.303 6.431Z" /><path fill="#242E30" d="M19.027 25.844H16.98l-.875-3.404a9.012 9.012 0 0 0-6.571-6.571l-3.404-.875v-2.021L25.459 6.54l-6.432 19.303Z" /></svg>;
};
export default IconGeolocationFilledLarge;