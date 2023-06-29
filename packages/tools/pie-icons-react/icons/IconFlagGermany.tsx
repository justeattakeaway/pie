import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFlagGermany = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--germany", className, size, "IconFlagGermany");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M1.438 10.435a7.001 7.001 0 0 0 13.127 0L8 9.828l-6.563.607Z" /><path d="M8.001 1a7.001 7.001 0 0 0-6.563 4.567L8 6.174l6.564-.607A7.001 7.001 0 0 0 8 1Z" /><path d="M1.438 5.567a6.987 6.987 0 0 0 0 4.868h13.127a6.984 6.984 0 0 0 0-4.868H1.438Z" /></svg>;
};
export default IconFlagGermany;