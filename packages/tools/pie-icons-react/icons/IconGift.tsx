import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconGift = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--gift", className, iconSize, "IconGift");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M10.329 3.333c.112-.013.226-.013.338 0V2.071a2.18 2.18 0 0 0-.338 0A2.969 2.969 0 0 0 8 3.138 2.969 2.969 0 0 0 5.671 2a2.071 2.071 0 0 0-.338.071v1.333c.113-.013.226-.013.338 0A1.68 1.68 0 0 1 7.333 4.96H2v4h.889v3.778a1.6 1.6 0 0 0 1.555 1.555h7.112a1.6 1.6 0 0 0 1.555-1.555V8.96H14v-4H8.667a1.671 1.671 0 0 1 1.662-1.627ZM7.333 12.96H4.444a.258.258 0 0 1-.222-.222V8.96h3.111v4Zm0-5.333h-4V6.293h4v1.334Zm4.445 5.075a.258.258 0 0 1-.258.258H8.667v-4h3.11v3.742Zm.889-6.409v1.334h-4V6.293h4Z" /></svg>;
};
export default IconGift;