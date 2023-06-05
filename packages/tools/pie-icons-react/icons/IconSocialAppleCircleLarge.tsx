import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialAppleCircleLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--apple-circle-large", className, iconSize, "IconSocialAppleCircleLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z" /><path fill="#242E30" d="M22.125 19.5a.999.999 0 0 0-.087.201 8.812 8.812 0 0 1-1.925 3.142 2.056 2.056 0 0 1-2.494.35 2.626 2.626 0 0 0-2.625 0 2.441 2.441 0 0 1-1.26.28 1.836 1.836 0 0 1-1.321-.753 9.16 9.16 0 0 1-2.538-6.361 4.917 4.917 0 0 1 .411-1.934 3.5 3.5 0 0 1 4.848-1.855 1.863 1.863 0 0 0 1.864 0c.3-.155.617-.279.945-.367a4.034 4.034 0 0 1 2.336.245 2.783 2.783 0 0 1 1.365 1.172c-.21.184-.411.35-.604.543-.23.188-.43.409-.595.656a3.299 3.299 0 0 0 .464 3.858c.316.388.739.674 1.216.823Z" /><path fill="#242E30" d="M18.958 8.528a2.72 2.72 0 0 1-.254 1.557 2.974 2.974 0 0 1-2.144 1.837c-.682.15-.665.158-.595-.533a3.386 3.386 0 0 1 2.66-2.835c.123-.018.228-.018.333-.026Z" /></svg>;
};
export default IconSocialAppleCircleLarge;