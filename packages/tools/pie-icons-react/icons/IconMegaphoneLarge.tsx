import * as React from "react";
import { SVGProps } from "react";
const IconMegaphoneLarge = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={"pie-icon pie-icon--megaphone-large" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M28.25 14.25a4.524 4.524 0 0 0-4.375-4.506V2.875h-2.354l-.271.201a46.213 46.213 0 0 1-4.008 2.94A47.948 47.948 0 0 1 12.116 9H5.5a2.625 2.625 0 0 0-2.625 2.625v5.25A2.625 2.625 0 0 0 5.5 19.5h.236l1.4 7.683h4.375l1.243-7.298a48.465 48.465 0 0 1 4.497 2.625c1.384.9 2.72 1.872 3.999 2.914l.245.201h2.38v-6.869a4.524 4.524 0 0 0 4.375-4.506ZM4.625 16.875v-5.25a.875.875 0 0 1 .875-.875h6.125v7H5.5a.875.875 0 0 1-.875-.875Zm3.973 8.558L7.52 19.5h3.544l-1.015 5.933H8.597Zm13.527-1.558a46.084 46.084 0 0 0-3.894-2.835 52.012 52.012 0 0 0-4.856-2.835V10.33a49.054 49.054 0 0 0 4.856-2.809c1.348-.875 2.625-1.837 3.894-2.835v19.189Zm1.75-6.851V11.51a2.756 2.756 0 0 1 0 5.513Z" /></svg>;
};
export default IconMegaphoneLarge;