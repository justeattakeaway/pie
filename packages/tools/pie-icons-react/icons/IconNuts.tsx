import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconNuts = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--nuts", className, iconSize, "IconNuts");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_8387_3604)"><path fill="#242E30" d="M14.695 9.102a4.806 4.806 0 0 0-.157-.871 5.523 5.523 0 0 0-1.376-2.344L11.62 4.345c.252-.47.2-1.054-.2-1.455a4.464 4.464 0 0 0-6.3 0l-.417.419c-.767-.636-2.013-1.455-3.39-1.403v1.368c.907-.052 1.813.522 2.414 1.02l-.34.339A4.421 4.421 0 0 0 2.08 7.787a4.42 4.42 0 0 0 1.307 3.153c.235.236.54.366.871.366.21 0 .401-.07.584-.165l1.516 1.515a5.415 5.415 0 0 0 2.317 1.368c.279.079.566.14.871.166.131.008.262.017.392.017.697 0 1.438-.165 2.152-.496l1.499-.715.583-1.272c.418-.862.601-1.768.532-2.605l-.009-.017ZM3.387 7.778c0-.845.331-1.63.923-2.23l1.734-1.734a3.169 3.169 0 0 1 2.23-.924c.81 0 1.569.288 2.178.872L4.267 9.947a3.122 3.122 0 0 1-.871-2.178l-.009.009Zm9.592 3.371-.392.854-1.063.505c-.636.288-1.29.41-1.873.358a3.633 3.633 0 0 1-.627-.114 4.11 4.11 0 0 1-1.76-1.036L5.8 10.252l4.931-4.922 1.49 1.49a4.138 4.138 0 0 1 1.045 1.777c.061.2.096.41.114.627.052.601-.088 1.263-.41 1.934l.009-.009Z" /></g><defs><clipPath id="prefix__clip0_8387_3604"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconNuts;