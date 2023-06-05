import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconDish = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--dish", className, iconSize, "IconDish");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.469 8a4.603 4.603 0 0 0-4.594-4.594V2.094A5.906 5.906 0 1 1 6.25 13.25v-1.496c.762.558 1.68.864 2.625.875A4.603 4.603 0 0 0 13.469 8ZM3.188 6.801a.665.665 0 0 0 .656-.656v-3.64l1.295-.63v4.27a.656.656 0 1 0 1.312 0v-3.64l1.313-.63v6.352a3.08 3.08 0 0 1-2.625 2.87v3.028H3.844v-3.027a3.08 3.08 0 0 1-2.625-2.87V2.61l1.312-.639v4.174a.665.665 0 0 0 .656.656Zm0 1.313A2.074 2.074 0 0 1 2.53 8v.236c0 1.164 1.391 1.636 1.969 1.636.577 0 1.969-.472 1.969-1.636V8c-.211.076-.433.117-.657.123A1.951 1.951 0 0 1 4.5 7.598c-.358.33-.826.513-1.313.516Z" /></svg>;
};
export default IconDish;