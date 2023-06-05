import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconEditFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--edit-filled-large", className, iconSize, "IconEditFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m27.559 7.749-3.3-3.308a2.424 2.424 0 0 0-3.342 0l-1.82 1.829.613.621.665.621 4.165 4.166.621.612.621.621 1.82-1.829a2.338 2.338 0 0 0 0-3.333h-.043Z" /><path fill="#242E30" d="m18.476 8.125-.621-.613L5.92 19.448l.516.07.499.148c.298.094.59.205.875.333a7.946 7.946 0 0 1 4.174 4.156c.13.298.238.605.323.919 0 .14.097.28.132.428l.096.578 11.961-11.926-.612-.621-5.408-5.408Z" /><path fill="#242E30" d="M10.75 25.852c0-.113-.07-.218-.105-.332a6.125 6.125 0 0 0-4.165-4.165c-.123 0-.245-.088-.376-.114l-.604-.078-.963-.088a2.626 2.626 0 0 0-.183.674l-.735 6.615 6.623-.735a2.5 2.5 0 0 0 .71-.193c0-.297-.062-.621-.106-.953l-.096-.63Z" /></svg>;
};
export default IconEditFilledLarge;