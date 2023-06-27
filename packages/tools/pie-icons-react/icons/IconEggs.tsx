import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEggs = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--eggs", className, size, "IconEggs");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M7.996 14.808a5.387 5.387 0 0 1-5.384-5.384c0-2.97 2.221-8.084 5.384-8.084 3.162 0 5.384 5.244 5.384 8.084s-2.414 5.384-5.384 5.384Zm0-12.162c-2.065 0-4.078 4.287-4.078 6.778a4.082 4.082 0 0 0 4.078 4.078 4.082 4.082 0 0 0 4.077-4.078c0-2.491-2.013-6.777-4.077-6.777Z" /><path d="M7.996 14.808a5.387 5.387 0 0 1-5.384-5.384c0-2.97 2.221-8.084 5.384-8.084 3.162 0 5.384 5.244 5.384 8.084s-2.414 5.384-5.384 5.384Zm0-12.162c-2.065 0-4.078 4.287-4.078 6.778a4.082 4.082 0 0 0 4.078 4.078 4.082 4.082 0 0 0 4.077-4.078c0-2.491-2.013-6.777-4.077-6.777Z" /><path d="M9.233 8.065c-.253-.845-.689-1.76-1.142-2.387l1.055-.766c.531.74 1.045 1.803 1.332 2.779l-1.254.374h.009Z" /></svg>;
};
export default IconEggs;