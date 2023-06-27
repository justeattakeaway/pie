import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEuro = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--euro", className, size, "IconEuro");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M11.885 11.815a3.928 3.928 0 0 1-3.063 1.339 4.078 4.078 0 0 1-3.98-2.748h4.033V9.094H4.5a5.765 5.765 0 0 1 0-.656 5.765 5.765 0 0 1 0-.657h4.375V6.47H4.841A4.078 4.078 0 0 1 8.822 3.72a4.016 4.016 0 0 1 3.072 1.348l.962-.875a5.25 5.25 0 0 0-4.034-1.75 5.451 5.451 0 0 0-5.39 4.025H1.876V7.78h1.304a6.17 6.17 0 0 0 0 1.313H1.875v1.312h1.558a5.451 5.451 0 0 0 5.39 4.06 5.252 5.252 0 0 0 4.042-1.75l-.98-.901Z" /></svg>;
};
export default IconEuro;