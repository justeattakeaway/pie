import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFingerprintLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--fingerprint-large", className, iconSize, "IconFingerprintLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="m11.1 5.343-.586-1.646A13.842 13.842 0 0 1 24.697 6.76L23.49 8.02A12.128 12.128 0 0 0 11.1 5.343Zm3.08 1.697a13.842 13.842 0 0 0-7.744 2.362l.98 1.453a12.092 12.092 0 0 1 17.894 5.32l1.61-.683A13.807 13.807 0 0 0 14.18 7.04Zm-.613 3.964a11.611 11.611 0 0 0-7.673 2.879l1.155 1.312a9.86 9.86 0 0 1 6.518-2.441 9.695 9.695 0 0 1 9.774 9.625h1.75a11.445 11.445 0 0 0-11.524-11.375Zm-.28 3.955a7.936 7.936 0 0 0-7 4.165l1.54.831a6.195 6.195 0 0 1 11.673 2.94 16.87 16.87 0 0 1-.875 5.031l1.645.604c.62-1.815.95-3.717.98-5.635a7.944 7.944 0 0 0-7.963-7.936Zm.71 3.92a4.76 4.76 0 0 0-5.452 3.902l1.75.35a3.01 3.01 0 0 1 3.386-2.537 2.625 2.625 0 0 1 1.75 1.268c.423.717.563 1.566.394 2.38a9.834 9.834 0 0 1-2.048 3.807l1.313 1.163a11.647 11.647 0 0 0 2.45-4.62 5.066 5.066 0 0 0-.613-3.63 4.376 4.376 0 0 0-2.93-2.083Zm-1.75 4.235a8.112 8.112 0 0 1-1.34 2.695l1.234 1.242a9.994 9.994 0 0 0 1.75-3.421l-1.645-.516Z" /></svg>;
};
export default IconFingerprintLarge;