import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconGoogleVoiceLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--google-voice-large", className, iconSize, "IconGoogleVoiceLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M21.967 20.445a1.872 1.872 0 0 0-2.712 0c-.525.534-.875.875-1.216 1.199a1.36 1.36 0 0 1-1.925 0l-5.705-5.845a1.391 1.391 0 0 1 0-1.916l1.015-1.068c1.023-1.059 1.05-1.75 0-2.835L7.6 6.112A1.96 1.96 0 0 0 6.182 5.5a2.056 2.056 0 0 0-1.557.735 7.376 7.376 0 0 0-1.75 4.909 14.639 14.639 0 0 0 2.852 8.575c3.177 4.488 7.07 7.988 12.61 9.161.733.157 1.48.24 2.23.245a7.245 7.245 0 0 0 5.312-2.179 1.349 1.349 0 0 0 .06-2.196c-1.312-1.453-2.642-2.879-3.972-4.305Zm-1.382 6.93a9.014 9.014 0 0 1-1.864-.21c-4.471-.945-8.129-3.631-11.541-8.461a12.88 12.88 0 0 1-2.555-7.552 5.618 5.618 0 0 1 1.312-3.77.289.289 0 0 1 .245-.132.227.227 0 0 1 .193.088L7.994 9l2.187 2.205.158.175c-.06.08-.125.155-.193.227-.472.482-.752.77-1.032 1.077a3.132 3.132 0 0 0 .052 4.375l5.705 5.792a3.062 3.062 0 0 0 2.214.937 3.106 3.106 0 0 0 2.17-.875l.175-.175 1.076-1.06a.14.14 0 0 1 .096-.043.121.121 0 0 1 .088.044c1.4 1.487 2.625 2.852 3.867 4.165a5.54 5.54 0 0 1-3.972 1.531Zm-2.223-24.5h-.113c-.928 0-1.287.333-1.295 1.269 0 3.316 0 6.632-.044 9.957 0 .709.306 1.006.997 1.006 1.663 0 8.295 0 9.958-.043.875 0 1.242-.368 1.234-1.243A11.156 11.156 0 0 0 18.362 2.875Zm4.734 10.5H18.67V4.677a9.38 9.38 0 0 1 8.706 8.698h-4.279Z" /></svg>;
};
export default IconGoogleVoiceLarge;