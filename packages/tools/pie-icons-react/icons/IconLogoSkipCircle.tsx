import * as React from "react";
import { SVGProps } from "react";
const IconLogoSkipCircle = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--skip-circle" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7Zm0 12.645a5.645 5.645 0 1 1 0-11.29 5.645 5.645 0 0 1 0 11.29Z" /><path fill="#242E30" fillRule="evenodd" d="M8.86 7.368c-.268-.315-.442-.54-.401-.786.05-.307.263-.617.637-.617.412 0 .518.087.75.2a.18.18 0 0 0 .257-.108l.338-1.204-.234-.114-.035-.017-.01-.005a2.082 2.082 0 0 0-.882-.182c-1.276 0-2.436.961-2.627 2.142-.134.827.37 1.41.737 1.836l.032.036c.265.3.452.533.406.803-.076.469-.442.623-.747.623-.484 0-.625-.08-.892-.211-.038-.019-.108-.053-.168-.033a.183.183 0 0 0-.119.123l-.322 1.161-.042.149s.635.34 1.369.34c1.087 0 2.026-.44 2.584-1.5.14-.27.222-.566.243-.87.028-.774-.542-1.382-.873-1.766Z" clipRule="evenodd" /></svg>;
};
export default IconLogoSkipCircle;