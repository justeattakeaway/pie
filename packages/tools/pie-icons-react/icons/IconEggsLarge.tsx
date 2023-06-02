import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconEggsLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--eggs-large", className, iconSize, "IconEggsLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M19.874 4.614c-1.97 0-3.678 1.482-4.95 3.469-.741-.453-1.534-.715-2.37-.715-4.585 0-7.94 7.87-7.94 11.974 0 4.375 3.556 7.939 7.94 7.939 2.98 0 5.577-1.656 6.936-4.087.13 0 .253.017.384.017a7.43 7.43 0 0 0 7.425-7.424c0-4.096-3.06-11.164-7.425-11.164v-.009Zm-7.32 20.915a6.204 6.204 0 0 1-6.197-6.196c0-3.756 3.06-10.23 6.196-10.23.514 0 1.02.182 1.508.487.48.297.941.698 1.377 1.203 1.891 2.179 3.303 5.978 3.303 8.532 0 .67-.113 1.324-.314 1.925a6.197 6.197 0 0 1-.793 1.595 6.185 6.185 0 0 1-5.09 2.676l.01.008Zm7.642-4.087a8.004 8.004 0 0 0 .296-2.109c0-2.867-1.638-7.564-4.191-10.143 1.01-1.639 2.283-2.841 3.573-2.841 2.876 0 5.682 5.96 5.682 9.42 0 3.024-2.37 5.49-5.351 5.664l-.009.01Z" /><path fill="#242E30" d="m20.954 8.379-1.246 1.22c.872.898 1.708 2.248 2.336 3.8l1.612-.654c-.506-1.246-1.377-3.006-2.702-4.366Z" /><path fill="#242E30" d="M12.362 12.318c.95.976 1.847 2.44 2.527 4.122l1.612-.653c-.54-1.334-1.481-3.234-2.893-4.68l-1.246 1.211Z" /></svg>;
};
export default IconEggsLarge;