import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconVegetarian = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--vegetarian", className, iconSize, "IconVegetarian");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path fillRule="evenodd" d="m10.844 1.044.324.568c.007.016.025.048.05.097.43.798 3.179 5.91 2.33 8.986a5.18 5.18 0 0 1-4.97 3.806 4.96 4.96 0 0 1-1.374-.192 4.86 4.86 0 0 1-1.059-.42 6.606 6.606 0 0 1-2.992.735A6.414 6.414 0 0 1 2 14.509v-1.334a5.197 5.197 0 0 0 2.938-.179A5.18 5.18 0 0 1 3.625 8c.857-3.23 6.186-6.36 6.629-6.62l.021-.013.569-.323Zm-.367 11.644a3.859 3.859 0 0 0 1.81-2.325v-.01c.552-2.03-.997-5.678-1.942-7.498C8.604 3.94 5.375 6.25 4.859 8.35a3.85 3.85 0 0 0 1.312 4.025 5.163 5.163 0 0 0 2.03-2.984l1.269.359a6.431 6.431 0 0 1-2.048 3.255l.132.052a3.859 3.859 0 0 0 2.923-.37Z" clipRule="evenodd" /></svg>;
};
export default IconVegetarian;