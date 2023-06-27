import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialAndroidCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--android-circle-filled", className, size, "IconSocialAndroidCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><g clipPath="url(#prefix__clip0_5394_3957)"><path d="M7.439 5.533c0 .12-.099.223-.215.223a.22.22 0 0 1-.218-.219.22.22 0 0 1 .214-.223.22.22 0 0 1 .219.219Z" /><path d="M9.059 5.533c0 .12-.099.223-.215.223a.22.22 0 0 1-.218-.219.22.22 0 0 1 .214-.223.22.22 0 0 1 .219.219Z" /><path fillRule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm2.4 2.83c.298-.28.7-.469 1.149-.514h.42a1.96 1.96 0 0 1 1.155.518l.345-.625s.038-.031.06-.018c.021.014.03.04.017.063l-.357.645c.282.295.454.679.46 1.1h-3.78c.006-.422.18-.808.465-1.105l-.354-.64s-.004-.05.017-.063c.022-.013.047-.004.06.018l.343.62Zm.836 4.797h1.054v1.12a.43.43 0 0 0 .42.438.43.43 0 0 0 .42-.437v-1.12h.022c.287 0 .518-.246.518-.554V6.5h-3.81V9.39c0 .303.232.553.519.553h.017v1.12a.43.43 0 0 0 .42.438.43.43 0 0 0 .42-.437v-1.12ZM5.84 7.19a.43.43 0 0 0-.42-.438.43.43 0 0 0-.42.438v1.874a.43.43 0 0 0 .42.438.43.43 0 0 0 .42-.438V7.19Zm4.74-.438a.43.43 0 0 1 .42.438v1.874a.43.43 0 0 1-.42.438.43.43 0 0 1-.42-.438V7.19a.43.43 0 0 1 .42-.438Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_5394_3957"><rect width={14} height={14} transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialAndroidCircleFilled;