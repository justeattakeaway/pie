import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconOver21Filled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--over-21-filled", className, iconSize, "IconOver21Filled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.375 2.313h-8.75a1.313 1.313 0 0 0-1.313 1.312v8.75a1.313 1.313 0 0 0 1.313 1.313h8.75a1.313 1.313 0 0 0 1.313-1.313v-8.75a1.313 1.313 0 0 0-1.313-1.313ZM6.617 9.947H3.625v-.573c0-.8.464-1.138 1.129-1.492.665-.354.875-.508.875-.875 0-.368-.254-.477-.617-.477a1.129 1.129 0 0 0-.875.394l-.481-.59a1.842 1.842 0 0 1 1.421-.596c.875 0 1.427.473 1.427 1.243 0 .687-.438 1.107-1.15 1.452-.644.324-.876.503-.876.722v.044H6.6l.018.748Zm2.354 0H8.14V6.8l-.683.254-.28-.704 1.195-.538h.6v4.134Zm3.404-1.51H11.5v.876h-.875v-.876H9.75v-.874h.875v-.875h.875v.875h.875v.875Z" /></svg>;
};
export default IconOver21Filled;