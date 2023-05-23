import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconUserGroup = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--user-group", className, iconSize, "IconUserGroup");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.527 10.126a2.73 2.73 0 0 0-1.338-1.592 2.503 2.503 0 0 0 0-3.5 2.564 2.564 0 0 0-3.562 0 2.424 2.424 0 0 0-.367.481 2.791 2.791 0 0 0-2.433 0c-.099-.17-.22-.325-.358-.464a2.625 2.625 0 0 0-3.605 0 2.546 2.546 0 0 0 0 3.57 2.73 2.73 0 0 0-1.356 1.496L1 11.5h1.417l.333-.963a1.496 1.496 0 0 1 1.418-1.006h1.75c.056.085.12.164.192.237l.175.148a2.948 2.948 0 0 0-1.75 2.013l-.42 1.321H5.48l.271-.963a1.54 1.54 0 0 1 1.374-1.216h1.75a1.54 1.54 0 0 1 1.391 1.216l.271.963h1.365l-.402-1.33a2.956 2.956 0 0 0-1.75-2.004l.175-.148c.071-.073.136-.152.192-.237h1.82a1.452 1.452 0 0 1 1.313 1.006l.35.963H15l-.473-1.374Zm-2.292-4.2a1.207 1.207 0 0 1-1.549 1.838 2.572 2.572 0 0 0-.428-1.383c.055-.17.148-.325.27-.455a1.225 1.225 0 0 1 1.707 0Zm-3.255.945a1.391 1.391 0 1 1-1.96 0 1.435 1.435 0 0 1 1.96 0Zm-5.25-.945a1.269 1.269 0 0 1 1.75 0c.115.116.201.257.254.412a2.695 2.695 0 0 0-.464 1.505 1.277 1.277 0 0 1-1.54-.175 1.234 1.234 0 0 1 0-1.75v.008Z" /></svg>;
};
export default IconUserGroup;