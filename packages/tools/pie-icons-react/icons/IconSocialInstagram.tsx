import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialInstagram = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--instagram", className, iconSize, "IconSocialInstagram");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_889_607)"><path fill="url(#prefix__paint0_radial_889_607)" d="M3.628 1.634a3.298 3.298 0 0 0-1.193.777c-.374.372-.604.75-.776 1.19-.167.426-.279.915-.312 1.632-.033.716-.04.946-.04 2.772 0 1.827.007 2.057.04 2.773.033.716.148 1.206.312 1.633.172.443.402.817.776 1.192a3.3 3.3 0 0 0 1.193.776c.426.167.916.28 1.632.312.716.033.946.041 2.773.041 1.826 0 2.056-.008 2.772-.041.717-.033 1.206-.148 1.633-.312a3.299 3.299 0 0 0 1.192-.776c.375-.375.604-.75.776-1.192.167-.427.28-.916.312-1.633.033-.716.041-.946.041-2.773 0-1.826-.008-2.056-.04-2.772-.034-.717-.148-1.206-.313-1.633a3.315 3.315 0 0 0-.773-1.19 3.298 3.298 0 0 0-1.192-.776c-.427-.166-.917-.279-1.633-.311-.716-.033-.946-.041-2.773-.041-1.826 0-2.056.008-2.772.04-.72.03-1.209.146-1.635.312Zm7.123.897c.656.03 1.011.14 1.25.233.314.123.538.268.773.503s.38.46.503.774c.093.237.203.593.233 1.25.033.707.038.92.038 2.717 0 1.797-.008 2.01-.038 2.718-.03.656-.14 1.012-.233 1.25a2.095 2.095 0 0 1-.503.774c-.235.235-.46.38-.774.503-.238.093-.593.202-1.25.232-.707.033-.92.038-2.717.038-1.797 0-2.01-.008-2.718-.038-.657-.03-1.012-.14-1.25-.232a2.095 2.095 0 0 1-.774-.503 2.096 2.096 0 0 1-.503-.774c-.093-.238-.202-.594-.232-1.25-.033-.708-.039-.921-.039-2.718 0-1.796.009-2.01.039-2.718.03-.656.14-1.012.232-1.25.123-.314.268-.538.503-.773s.46-.38.774-.503c.238-.093.593-.203 1.25-.233.708-.033.921-.038 2.718-.038 1.796 0 2.01.005 2.718.038Z" /><path fill="url(#prefix__paint1_radial_889_607)" d="M4.58 8.008a3.454 3.454 0 1 0 6.906 0 3.454 3.454 0 0 0-6.907 0Zm5.695 0a2.242 2.242 0 1 1-4.484.001 2.242 2.242 0 0 1 4.484 0Z" /><path fill="#654C9F" d="M11.626 5.225a.807.807 0 1 0 0-1.614.807.807 0 0 0 0 1.614Z" /></g><defs><radialGradient id="prefix__paint0_radial_889_607" cx={0} cy={0} r={1} gradientTransform="matrix(19.42334 -1.01796 .86526 16.50964 1.55 13.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#FED576" /><stop offset={0.263} stopColor="#F47133" /><stop offset={0.609} stopColor="#BC3081" /><stop offset={1} stopColor="#4C63D2" /></radialGradient><radialGradient id="prefix__paint1_radial_889_607" cx={0} cy={0} r={1} gradientTransform="rotate(-2.999 258.565 -22.855) scale(19.4537 16.5321)" gradientUnits="userSpaceOnUse"><stop stopColor="#FED576" /><stop offset={0.263} stopColor="#F47133" /><stop offset={0.609} stopColor="#BC3081" /><stop offset={1} stopColor="#4C63D2" /></radialGradient><clipPath id="prefix__clip0_889_607"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialInstagram;