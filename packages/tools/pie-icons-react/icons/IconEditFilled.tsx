import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconEditFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--edit-filled", className, iconSize, "IconEditFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.44 3.503 12.498 1.56a1.531 1.531 0 0 0-2.162 0L9.12 2.75l.928.928 2.257 2.248.464.473.464.464 1.207-1.217a1.522 1.522 0 0 0 0-2.143Z" /><path fill="#242E30" d="M11.378 6.889 8.193 3.704 2.068 9.829c-.267.259-.437.602-.482.971l-.455 4.077 4.07-.455c.357-.04.69-.2.944-.455l6.125-6.125-.464-.463-.428-.49Z" /></svg>;
};
export default IconEditFilled;