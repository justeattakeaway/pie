import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPaymentTwint = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--twint", className, iconSize, "IconPaymentTwint");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><rect width={12} height={12} x={2} y={2} fill="#000" /><path fill="#fff" d="M12.75 10.077h-1.713v.412h.615v1.76h.485v-1.76h.613v-.412Zm-7.784 0H3.25v.412h.615v1.76h.485v-1.76h.616v-.412Zm4.96-.068c-.54 0-.84.346-.84.848v1.393h.48v-1.404c0-.218.128-.386.365-.386s.363.2.363.386v1.404h.48v-1.393c.002-.502-.308-.848-.848-.848Zm-1.81.068v2.173h.48v-2.173h-.48Zm-1.627.86.015.098.452 1.215h.195l.613-2.173h-.472L7 11.219l-.018.123-.024-.123-.391-1.142H6.41l-.39 1.142-.024.123-.016-.123-.292-1.142h-.474l.612 2.173h.196l.451-1.215.016-.097Z" /><path fill="#fff" d="M10.355 7.616a.238.238 0 0 1-.109.186L8.152 9.02a.24.24 0 0 1-.217 0L5.84 7.802a.237.237 0 0 1-.108-.186V5.18c0-.069.048-.152.108-.186l2.095-1.218a.24.24 0 0 1 .217 0l2.095 1.218c.06.034.108.117.108.186v2.436Z" /><path fill="url(#prefix__paint0_radial_3973_4725)" d="m9.136 6.404-.548.807-.28-.431.323-.485a.638.638 0 0 0 .04-.65.67.67 0 0 0-1.219 0 .627.627 0 0 0 .037.641s.18.264.329.488l.242.354.366.563c.003.002.06.091.162.091.097 0 .157-.089.166-.097L9.61 6.41h-.474v-.006Zm-1.076.02s-.142-.218-.237-.37a.272.272 0 0 1 .237-.409c.226 0 .337.245.237.408-.091.153-.237.37-.237.37Z" /><path fill="url(#prefix__paint1_radial_3973_4725)" d="m7.535 7.185-.537-.758s-.142-.219-.236-.37a.272.272 0 0 1 .316-.397l.189-.348A.68.68 0 0 0 7 5.255a.674.674 0 0 0-.61.39.627.627 0 0 0 .037.641l.939 1.399c.008.011.068.1.168.1s.157-.086.166-.097l.282-.434-.242-.359-.206.29Z" /><defs><radialGradient id="prefix__paint0_radial_3973_4725" cx={0} cy={0} r={1} gradientTransform="matrix(10.7623 0 0 9.6294 5.383 4.495)" gradientUnits="userSpaceOnUse"><stop stopColor="#FC0" /><stop offset={0.092} stopColor="#FFC800" /><stop offset={0.174} stopColor="#FFBD00" /><stop offset={0.253} stopColor="#FFAB00" /><stop offset={0.33} stopColor="#FF9100" /><stop offset={0.405} stopColor="#FF7000" /><stop offset={0.479} stopColor="#FF4700" /><stop offset={0.55} stopColor="#FF1800" /><stop offset={0.582} stopColor="red" /><stop offset={1} stopColor="red" /></radialGradient><radialGradient id="prefix__paint1_radial_3973_4725" cx={0} cy={0} r={1} gradientTransform="matrix(2.31436 0 0 3.52162 6.36 5.622)" gradientUnits="userSpaceOnUse"><stop stopColor="#00B4E6" /><stop offset={0.201} stopColor="#00B0E3" /><stop offset={0.39} stopColor="#01A5DB" /><stop offset={0.574} stopColor="#0292CD" /><stop offset={0.755} stopColor="#0377BA" /><stop offset={0.932} stopColor="#0455A1" /><stop offset={1} stopColor="#054696" /></radialGradient></defs></svg>;
};
export default IconPaymentTwint;