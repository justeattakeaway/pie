import * as React from "react";
import { SVGProps } from "react";
const IconGeolocationCircleFilledLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--geolocation-circle-filled-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="m16.718 19.185 1.96-5.862-5.863 1.96a6.431 6.431 0 0 1 3.903 3.902Z" /><path fill="#242E30" d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm1.479 18.69h-1.75l-.551-2.205a4.752 4.752 0 0 0-3.448-3.447l-2.205-.552v-1.75l11.917-3.929L17.48 22.44Z" /></svg>;
};
export default IconGeolocationCircleFilledLarge;