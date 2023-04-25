import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconDocument = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--document", className, iconSize, "IconDocument");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M9.75 2.094H2.094V14.78h11.812V6.25A4.156 4.156 0 0 0 9.75 2.094Zm2.756 3.5h-2.1v-2.1a2.826 2.826 0 0 1 2.1 2.1Zm-9.1 7.875V3.406h5.688v3.5h3.5v6.563H3.406ZM8 7.78H5.375V6.47H8V7.78ZM5.375 9.094h5.25v1.312h-5.25V9.094Z" /></svg>;
};
export default IconDocument;