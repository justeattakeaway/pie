import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCashCardFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--cash-card-filled", className, size, "IconCashCardFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M11.605 4.771v-.875a1.426 1.426 0 0 0-1.418-1.417H2.532a1.426 1.426 0 0 0-1.426 1.417v.875h10.5Z" /><path d="M3.284 6.749h8.321v-.665h-10.5V8.49a1.426 1.426 0 0 0 1.426 1.426h.753V6.75Z" /><path d="M4.596 8.061v5.793h10.08V8.06H4.596Zm5.04 3.973a1.077 1.077 0 1 1 0-2.154 1.077 1.077 0 0 1 0 2.154Z" /></svg>;
};
export default IconCashCardFilled;