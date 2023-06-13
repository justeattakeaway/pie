import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPaymentApplePay = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--apple-pay", className, iconSize, "IconPaymentApplePay");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M4.422 7.494c0-.548.446-.799.465-.817-.251-.372-.65-.418-.79-.427-.353-.019-.66.204-.827.204-.167 0-.427-.195-.706-.186-.362 0-.696.214-.882.539-.38.66-.102 1.625.27 2.155.176.26.399.557.677.539.27-.01.372-.177.697-.177.325 0 .418.177.706.167.297 0 .483-.26.66-.529.204-.297.288-.595.297-.604 0 0-.567-.223-.576-.873l.01.01Z" /><path fill="#242E30" d="M4.106 5.21a.936.936 0 0 0-.631.324c-.14.158-.26.418-.232.66.241.018.492-.12.64-.307.15-.185.251-.436.223-.687v.01Z" /><path fill="#242E30" d="m13.888 6.603-.725 2.34h-.01l-.724-2.34h-.64l1.04 2.88-.056.176c-.093.297-.25.408-.52.408-.047 0-.14 0-.177-.009v.474s.186.018.232.018c.604 0 .883-.232 1.124-.92l1.078-3.027h-.622Z" /><path fill="#242E30" d="M7.627 5.516H6.14v3.957h.613V8.117h.854c.78 0 1.32-.53 1.32-1.31s-.54-1.3-1.301-1.3v.009Zm-.167 2.09h-.706v-1.58h.706c.53 0 .836.289.836.78 0 .493-.307.79-.846.79l.01.01Z" /><path fill="#242E30" d="M10.386 6.556c-.65 0-1.134.372-1.152.883h.557c.047-.242.27-.41.585-.41.372 0 .586.177.586.502v.223l-.771.047c-.716.046-1.096.334-1.096.845 0 .511.399.855.966.855.39 0 .743-.195.91-.502h.01v.474h.566v-1.97c0-.575-.455-.938-1.161-.938v-.009Zm.566 1.84c0 .37-.316.631-.733.631-.326 0-.54-.158-.54-.4 0-.241.205-.39.586-.417l.687-.047v.232Z" /></svg>;
};
export default IconPaymentApplePay;