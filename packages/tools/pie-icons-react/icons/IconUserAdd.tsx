import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconUserAdd = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--user-add", className, iconSize, "IconUserAdd");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_18_2070)"><path fill="#242E30" d="M7.125 7.125a3.062 3.062 0 1 0 0-6.125 3.062 3.062 0 0 0 0 6.125Zm0-4.813a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm2.861 7.674a2.826 2.826 0 0 0-1.557-.455H5.804a2.555 2.555 0 0 0-2.45 1.566l-.455 1.278h-1.4l.639-1.75A3.868 3.868 0 0 1 5.82 8.219h2.625a4.182 4.182 0 0 1 2.267.656l-.727 1.111ZM15 13.031h-1.969V15H11.72v-1.969H9.75V11.72h1.969V9.75h1.312v1.969H15v1.312Z" /></g><defs><clipPath id="prefix__clip0_18_2070"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconUserAdd;