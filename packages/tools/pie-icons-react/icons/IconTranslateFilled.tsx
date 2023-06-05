import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconTranslateFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--translate-filled", className, iconSize, "IconTranslateFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm-.122 8.793a7.875 7.875 0 0 1-1.374-.875 7.568 7.568 0 0 1-2.126 1.243l-.324-.875a6.352 6.352 0 0 0 1.793-1.006 6.055 6.055 0 0 1-.77-1.007l.753-.463c.194.312.416.605.665.875.175-.205.336-.421.481-.648.194-.317.352-.654.473-1.006H3.993v-.875h2.09v-.56h.876v.56h2.109v.875h-.692a5.11 5.11 0 0 1-.621 1.418c-.181.29-.386.565-.612.822.334.268.695.503 1.076.7l-.341.822Zm3.692 1.33-.07-.288-.184-.482H9.41l-.298.77h-.875l.123-.288.28-.709.21-.516.131-.306.63-1.628.28-.682h.971l1.654 4.094-.945.035Z" /><path fill="#242E30" d="m10.021 9.006-.21.543-.114.289h1.287l-.648-1.654-.315.822Z" /></svg>;
};
export default IconTranslateFilled;