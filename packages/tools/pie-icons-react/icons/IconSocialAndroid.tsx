import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialAndroid = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--android", className, iconSize, "IconSocialAndroid");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g fill="#A4C639" clipPath="url(#prefix__clip0_4814_3490)"><path fillRule="evenodd" d="M7.563 1.394a4.079 4.079 0 0 0-2.346 1.005l-.7-1.215c-.026-.044-.078-.061-.122-.035-.044.026-.035.122-.035.122l.723 1.256c-.582.582-.938 1.339-.95 2.165h7.717c-.013-.825-.364-1.577-.938-2.156l.728-1.265c.026-.043.009-.096-.035-.122-.044-.026-.122.035-.122.035l-.705 1.224c-.609-.554-1.433-.926-2.358-1.014h-.857ZM6.415 3.599a.445.445 0 0 0 .438-.438.439.439 0 0 0-.446-.429.439.439 0 0 0-.438.438c0 .236.201.429.446.429Zm3.308 0a.445.445 0 0 0 .438-.438.44.44 0 0 0-.447-.429.439.439 0 0 0-.437.438c0 .236.201.429.446.429Z" clipRule="evenodd" /><path d="M9.076 11.806H6.924v2.197a.859.859 0 0 1-.858.857.859.859 0 0 1-.857-.857v-2.197h-.035c-.586 0-1.059-.49-1.059-1.085V5.06h7.779v5.661c0 .604-.473 1.085-1.059 1.085h-.044v2.197a.859.859 0 0 1-.857.857.859.859 0 0 1-.858-.857v-2.197Z" /><path d="M3.59 6.407a.859.859 0 0 0-.857-.857.859.859 0 0 0-.858.857v3.675c0 .473.385.858.857.858a.859.859 0 0 0 .858-.857V6.406Z" /><path d="M14.125 6.407a.859.859 0 0 0-.857-.857.859.859 0 0 0-.858.857v3.675c0 .473.385.858.857.858a.859.859 0 0 0 .858-.857V6.406Z" /></g><defs><clipPath id="prefix__clip0_4814_3490"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialAndroid;