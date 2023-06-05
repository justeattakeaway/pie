import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFlagCanada = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--canada", className, iconSize, "IconFlagCanada");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" /><path fill="#D80027" d="M15 8a7 7 0 0 0-3.957-6.305v12.61A7 7 0 0 0 15 8ZM1 8a7 7 0 0 0 3.957 6.306V1.694A7 7 0 0 0 1 8Zm8.217.913 1.217-.612L9.827 8v-.61L8.61 8l.607-1.217H8.61L8 5.867l-.61.914h-.607l.607 1.216-1.217-.61V8l-.607.304 1.217.61-.306.61h1.222v.91h.602v-.91h1.22l-.304-.61Z" /></svg>;
};
export default IconFlagCanada;