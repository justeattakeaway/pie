import * as React from "react";
import { SVGProps } from "react";
const IconBookmark = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--bookmark" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><g clipPath="url(#prefix__clip0_7724_3883)"><path fill="#242E30" fillRule="evenodd" d="M3.835 1.84h8.321c1.085 0 1.969.884 1.969 1.969v10.57L8 11.465l-6.134 2.914V3.809c0-1.085.884-1.969 1.969-1.969Zm4.174 8.172 4.812 2.293V3.809a.661.661 0 0 0-.656-.657H3.844a.661.661 0 0 0-.657.657v8.496l4.822-2.293ZM8 4.492l.709 1.452 1.592.227L9.155 7.3l.271 1.584L8 8.13l-1.426.753.28-1.584-1.155-1.129 1.592-.227L8 4.49Z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0_7724_3883"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconBookmark;