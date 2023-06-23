import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCookiePolicyLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--cookie-policy-large", className, iconSize, "IconCookiePolicyLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path fillRule="evenodd" d="M16 28.25C9.245 28.25 3.75 22.755 3.75 16S9.245 3.75 16 3.75c.831 0 1.654.087 2.459.245l.376 1.54c-.656.534-1.041 1.304-1.041 2.135a2.752 2.752 0 0 0 2.747 2.748l.02-.003c.053-.008.1-.015.155-.015l.875 1.164c-.114.323-.175.63-.175.918a2.752 2.752 0 0 0 2.748 2.748c1.111 0 2.152-.543 2.213-.989h1.733c.096.665.14 1.216.14 1.759 0 6.755-5.495 12.25-12.25 12.25ZM16 5.5C10.207 5.5 5.5 10.207 5.5 16S10.207 26.5 16 26.5s10.255-4.462 10.491-10.045c-.7.35-1.54.525-2.327.525a4.507 4.507 0 0 1-4.498-4.498c0-.13 0-.262.018-.402a4.507 4.507 0 0 1-3.64-4.419c0-.761.192-1.496.56-2.152A13.903 13.903 0 0 0 16 5.49V5.5Zm-4.568 8.444a1.846 1.846 0 1 0 0-3.693 1.846 1.846 0 0 0 0 3.693Zm6.073 7.656a1.846 1.846 0 1 1-3.693 0 1.846 1.846 0 0 1 3.693 0Zm-.639-4.646a1.208 1.208 0 1 0 0-2.415 1.208 1.208 0 0 0 0 2.415Zm-5.661 1.4a1.207 1.207 0 1 1-2.415 0 1.207 1.207 0 0 1 2.415 0Zm10.343 2.424a1.207 1.207 0 1 0 0-2.415 1.207 1.207 0 0 0 0 2.415Zm4.33-12.39a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.415 0Z" clipRule="evenodd" /></svg>;
};
export default IconCookiePolicyLarge;