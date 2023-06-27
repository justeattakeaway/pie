import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEmployeeSearchLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--employee-search-large", className, size, "IconEmployeeSearchLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M14.25 15.125a5.688 5.688 0 1 0-5.687-5.688 5.644 5.644 0 0 0 5.687 5.688Zm0-9.625a3.937 3.937 0 1 1-3.937 3.938A3.946 3.946 0 0 1 14.25 5.5Zm10.063 10.421a5.25 5.25 0 0 0-4.28 8.287L15.93 28.31l1.243 1.234 4.077-4.104a5.252 5.252 0 0 0 8.052-2.662 5.25 5.25 0 0 0-4.99-6.858Zm0 8.75a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-5.6-7.796-4.463 7-3.404-5.25a5.977 5.977 0 0 0-5.25 3.885l-1.382 3.911H2.359l1.575-4.471a7.744 7.744 0 0 1 7.376-5.075h.473l2.467 3.797 2.468-3.797h1.995Z" /></svg>;
};
export default IconEmployeeSearchLarge;