import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconFriesLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--fries-large", className, iconSize, "IconFriesLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M25.826 12.8a.876.876 0 0 0-.875-.105l-.709.271.937-3.141a.874.874 0 0 0-.309-.96.876.876 0 0 0-.313-.151l-3.5-.875.324-2.993a.875.875 0 0 0-.131-.63.876.876 0 0 0-.613-.341l-3.56-.306a.875.875 0 0 0-.946.779l-.07.62a.875.875 0 0 0-.875-.612l-3.561.307a.875.875 0 0 0-.796.953l.131 1.278-3.194.674a.875.875 0 0 0-.691 1.076l1.146 4.497c-.402-.14-.796-.289-1.181-.446a.875.875 0 0 0-1.216.91l1.662 13.247a2.748 2.748 0 0 0 2.721 2.398h11.585a2.748 2.748 0 0 0 2.722-2.398l1.654-13.247a.875.875 0 0 0-.342-.805Zm-4.375-3.045 1.75.446-1.006 3.421c-.595.167-1.199.316-1.803.43l.123-1.165.936-3.132ZM17.75 5.398l1.82.157-.945 8.767c-.613.07-1.234.114-1.855.132l.98-9.056Zm-3.316.778.709 7-.14 1.278c-.342 0-.683 0-1.015-.07l-.902-3.632-.446-4.374 1.794-.202ZM9 9.125l1.75-.376.56 2.205v.166l.779 3.063a22.517 22.517 0 0 1-1.969-.412L9 9.125Zm13.773 17.5a.98.98 0 0 1-.98.875H10.207a.98.98 0 0 1-.98-.875l-1.48-11.786a25.165 25.165 0 0 0 16.503 0l-1.479 11.786Z" /></svg>;
};
export default IconFriesLarge;