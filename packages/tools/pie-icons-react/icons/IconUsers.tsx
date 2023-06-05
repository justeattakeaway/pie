import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconUsers = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--users", className, iconSize, "IconUsers");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m1.21 11.824.49-1.392a2.87 2.87 0 0 1 2.021-1.75 2.704 2.704 0 0 1-.481-.367 2.406 2.406 0 1 1 3.395 0 1.898 1.898 0 0 1-.324.271A2.905 2.905 0 0 1 8 9.085a2.94 2.94 0 0 1 1.697-.534 2.415 2.415 0 0 1-1.04-1.977 2.406 2.406 0 1 1 4.103 1.75c-.146.14-.308.263-.481.367a2.853 2.853 0 0 1 2.021 1.75l.49 1.391h-1.391l-.341-.953A1.584 1.584 0 0 0 11.5 9.855H9.75a1.584 1.584 0 0 0-1.523 1.015l-.34.954H6.46l.49-1.392c0-.122.105-.236.157-.35a1.654 1.654 0 0 0-.857-.227H4.5a1.584 1.584 0 0 0-1.523 1.015l-.34.954H1.21Zm8.75-5.25a1.094 1.094 0 1 0 .324-.77 1.084 1.084 0 0 0-.315.77H9.96Zm-6.125 0a1.094 1.094 0 1 0 .324-.77 1.085 1.085 0 0 0-.315.77h-.009Z" /></svg>;
};
export default IconUsers;