import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBrandHighlightLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--brand-highlight-large", className, iconSize, "IconBrandHighlightLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M10.453 29.125a.875.875 0 0 1-.875-.726C9.394 27.27 9.184 24.75 9 21.25v-.21a.63.63 0 0 0-.464-.429l-.988-.175a.874.874 0 0 1-.587-1.33 25.988 25.988 0 0 1 8.348-8.155 1.391 1.391 0 0 1 1.426 0 15.515 15.515 0 0 1 2.835 2.494l.875.875.227-1.627a.875.875 0 0 1 .972-.744h.105c.081-.008.163-.008.245 0a.875.875 0 0 1 .761.744c.048.444.069.891.061 1.338 0 .63 0 1.339.088 2.056v.386l.113.166.858.954c.441.46.845.954 1.207 1.478a.875.875 0 0 1-.612 1.304l-.971.166a.621.621 0 0 0-.473.482v.227c-.245 4.375-.463 6.291-.604 7.105a.875.875 0 0 1-.875.726l-11.086.044h-.008ZM9.149 18.984a2.354 2.354 0 0 1 1.601 1.89v.271c.149 2.756.315 4.944.473 6.23h9.624c.114-.971.29-2.8.473-6.186v-.263a2.371 2.371 0 0 1 1.47-1.907l-.21-.236a12.977 12.977 0 0 1-.875-1.042l-.315-.437a.874.874 0 0 1-.131-.289.875.875 0 0 1-.753-.236l-2.056-1.995A18.377 18.377 0 0 0 16 12.57a23.765 23.765 0 0 0-6.851 6.414Zm7.726-16.109h-1.75V7.95h1.75V2.875Zm7.429 3.885-1.444-.997-2.774 4.007 1.444.98 2.774-3.99ZM11.94 9.796 9.131 5.763l-1.435.997 2.809 4.034 1.435-.998Z" /></svg>;
};
export default IconBrandHighlightLarge;