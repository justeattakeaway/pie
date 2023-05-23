import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconInfoMarkerLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--info-marker-large", className, iconSize, "IconInfoMarkerLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M24.75 3.024H7.25a2.625 2.625 0 0 0-2.625 2.625v15.75a2.625 2.625 0 0 0 2.625 2.625h3.439L16 29.335l5.311-5.311h3.439a2.625 2.625 0 0 0 2.625-2.625V5.649a2.625 2.625 0 0 0-2.625-2.625Zm.875 18.375a.875.875 0 0 1-.875.875h-4.165L16 26.859l-4.585-4.585H7.25a.875.875 0 0 1-.875-.875V5.649a.875.875 0 0 1 .875-.875h17.5a.875.875 0 0 1 .875.875v15.75Zm-10.5-9.774h1.75V19.5h-1.75v-7.875Zm2.188-3.063a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Z" /></svg>;
};
export default IconInfoMarkerLarge;