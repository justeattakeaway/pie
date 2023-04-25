import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconAlcohol = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--alcohol", className, iconSize, "IconAlcohol");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#242E30" d="M6.4 5.28V2.576c0-.419-.17-.82-.472-1.115A1.624 1.624 0 0 0 4.791 1h-.68c-.426 0-.835.166-1.137.462a1.561 1.561 0 0 0-.47 1.115v2.702a2.11 2.11 0 0 1-.534 1.45 4.613 4.613 0 0 0-.964 3.055v3.603c-.015.401.132.792.409 1.087.277.295.661.471 1.07.49h3.933a1.566 1.566 0 0 0 1.07-.49c.277-.295.424-.686.41-1.087V9.784a4.611 4.611 0 0 0-.92-3.054A2.112 2.112 0 0 1 6.4 5.28ZM3.881 2.576c0-.06.024-.117.067-.16a.232.232 0 0 1 .162-.066h.68c.061 0 .12.024.163.066.043.043.067.1.067.16v1.126h-1.14V2.577Zm1.14 2.477v.225a3.426 3.426 0 0 0 .77 2.19c.168.222.313.46.433.711H2.678c.12-.25.265-.489.432-.712a3.426 3.426 0 0 0 .772-2.189v-.225h1.14Zm1.497 8.333a.257.257 0 0 1-.101.226H2.485a.262.262 0 0 1-.101-.226V9.56H6.51v.225l.009 3.603ZM8.605 3.081v4c0 .713.249 1.405.705 1.96a3.198 3.198 0 0 0 1.803 1.094v3.514h-1.46V15h4.3v-1.351h-1.461v-3.514a3.198 3.198 0 0 0 1.803-1.093A3.088 3.088 0 0 0 15 7.082v-4H8.605Zm5.035 4c0 .478-.194.936-.538 1.274a1.856 1.856 0 0 1-1.3.528c-.487 0-.954-.19-1.3-.528a1.784 1.784 0 0 1-.537-1.274V4.432h3.675v2.65Z" /></svg>;
};
export default IconAlcohol;