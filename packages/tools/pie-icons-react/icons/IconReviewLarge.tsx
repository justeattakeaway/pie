import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconReviewLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--review-large", className, iconSize, "IconReviewLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m16 29.335-5.311-5.311H7.25a2.625 2.625 0 0 1-2.625-2.625V5.649A2.625 2.625 0 0 1 7.25 3.024h17.5a2.625 2.625 0 0 1 2.625 2.625v15.75a2.625 2.625 0 0 1-2.625 2.625h-3.439L16 29.335ZM7.25 4.774a.875.875 0 0 0-.875.875v15.75a.875.875 0 0 0 .875.875h4.165L16 26.859l4.585-4.585h4.165a.875.875 0 0 0 .875-.875V5.649a.875.875 0 0 0-.875-.875H7.25ZM19.413 19.5a.875.875 0 0 1-.412-.105L16 17.82l-3.001 1.575a.876.876 0 0 1-1.269-.919l.569-3.351-2.424-2.363a.875.875 0 0 1-.219-.875.875.875 0 0 1 .709-.603l3.351-.534 1.497-3.01a.875.875 0 0 1 1.575 0l1.496 3.01 3.36.481a.876.876 0 0 1 .709.604.875.875 0 0 1-.22.875l-2.432 2.415.569 3.343a.874.874 0 0 1-.341.875.875.875 0 0 1-.516.157ZM16 16c.144 0 .285.037.411.105l1.838.962-.35-2.047a.875.875 0 0 1 .253-.779l1.488-1.452-2.056-.298a.875.875 0 0 1-.665-.481L16 10.102l-.875 1.864a.874.874 0 0 1-.665.482l-2.056.297 1.487 1.453a.876.876 0 0 1 .254.778l-.35 2.048 1.838-.963A.876.876 0 0 1 16 16Z" /></svg>;
};
export default IconReviewLarge;