import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCopyFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--copy-filled-large", className, iconSize, "IconCopyFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M12.596 2.079 25.844 4.37A2.424 2.424 0 0 1 27.82 7.18L24.75 24.811a2.388 2.388 0 0 1-.945 1.54V9.57a4.183 4.183 0 0 0-4.174-4.183H9.56l.227-1.33a2.38 2.38 0 0 1 .963-1.566 2.45 2.45 0 0 1 1.846-.411Z" /><path fill="#242E30" fillRule="evenodd" d="M6.183 7.136h13.44a2.433 2.433 0 0 1 2.432 2.433v17.885a2.432 2.432 0 0 1-2.433 2.432H6.182a2.432 2.432 0 0 1-2.432-2.432V9.569a2.433 2.433 0 0 1 2.433-2.433Zm2.344 6.93h8.75v1.75h-8.75v-1.75Zm8.75 3.78h-8.75v1.75h8.75v-1.75Zm-8.75 3.771h8.75v1.75h-8.75v-1.75Z" clipRule="evenodd" /></svg>;
};
export default IconCopyFilledLarge;