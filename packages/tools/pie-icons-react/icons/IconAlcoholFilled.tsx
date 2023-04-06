import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconAlcoholFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--alcohol-filled", className, iconSize, "IconAlcoholFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M6.396 5.28V2.576c0-.419-.17-.82-.47-1.115A1.623 1.623 0 0 0 4.788 1h-.68c-.426 0-.834.166-1.136.462-.301.295-.47.696-.47 1.115v2.702a2.111 2.111 0 0 1-.533 1.424 4.668 4.668 0 0 0-.964 3.08v3.604c-.015.401.132.792.409 1.087.277.295.66.471 1.07.49h3.93a1.565 1.565 0 0 0 1.069-.49c.277-.295.424-.686.409-1.087V9.784a4.613 4.613 0 0 0-.918-3.054 2.113 2.113 0 0 1-.579-1.45ZM5.02 5.026v.252c-.008.797.268 1.571.78 2.19.161.225.302.463.423.711H2.677c.124-.248.268-.487.432-.712A3.427 3.427 0 0 0 3.88 5.28v-.225l1.139-.027Z" /><path fill="#242E30" d="M8.6 3.081v4c0 .713.249 1.405.705 1.96a3.196 3.196 0 0 0 1.802 1.094v3.514h-1.46V15h4.297v-1.351h-1.46v-3.514a3.205 3.205 0 0 0 1.806-1.093 3.098 3.098 0 0 0 .71-1.96v-4H8.6Z" /></svg>;
};
export default IconAlcoholFilled;