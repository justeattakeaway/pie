import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPinAtHomeFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--pin-at-home-filled-large", className, iconSize, "IconPinAtHomeFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M17.461 4.109a3.15 3.15 0 0 0-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V12.797a130.695 130.695 0 0 1 2.248 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511ZM9.438 20.375a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Zm4.375 0a1.312 1.312 0 1 1 0-2.624 1.312 1.312 0 0 1 0 2.624Z" /></svg>;
};
export default IconPinAtHomeFilledLarge;