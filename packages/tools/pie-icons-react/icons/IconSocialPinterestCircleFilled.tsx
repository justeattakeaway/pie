import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialPinterestCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--pinterest-circle-filled", className, iconSize, "IconSocialPinterestCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_1611_690)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm3.211 8.671a2.975 2.975 0 0 1-2.144 1.426 1.88 1.88 0 0 1-1.522-.385.583.583 0 0 1-.131-.122 1.417 1.417 0 0 1-.123-.14l-.044.131c-.105.42-.21.831-.332 1.251a5.04 5.04 0 0 1-.998 1.812l-.105.14v-.053a6.125 6.125 0 0 1 0-2.117c.22-.98.455-1.96.683-2.932a.464.464 0 0 0 0-.245 2.223 2.223 0 0 1 0-1.487 1.164 1.164 0 0 1 .63-.762.761.761 0 0 1 1.076.665c.01.297-.031.593-.122.875-.114.412-.245.823-.36 1.234a.875.875 0 0 0 .893 1.173 1.637 1.637 0 0 0 1.348-.814c.33-.525.512-1.13.525-1.75a2.722 2.722 0 0 0-.245-1.391A2.25 2.25 0 0 0 8.726 5.12a2.835 2.835 0 0 0-2.572.49 2.573 2.573 0 0 0-.552 3.447.324.324 0 0 1 .053.22c-.044.218-.105.428-.158.647-.052.218-.087.157-.218.096a1.978 1.978 0 0 1-.875-.875 3.5 3.5 0 0 1 .48-3.859 3.806 3.806 0 0 1 2.53-1.304 4.533 4.533 0 0 1 2.108.202 3.5 3.5 0 0 1 2.345 3.5 4.288 4.288 0 0 1-.656 2.161Z" /></g><defs><clipPath id="prefix__clip0_1611_690"><rect width={14} height={14} transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialPinterestCircleFilled;