import * as React from "react";
import { SVGProps } from "react";
const IconBag = (props: any) => {
  const {
    className,
    ...remainingProps
  } = props;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--bag" + (props.className ? ' ' + props.className : '') } width="1em" height="1em" {...remainingProps}><path fill="#242E30" d="M12.996 4.719h-2.371V2.53L9.313 1.22H6.688L5.375 2.53V4.72H3.004l-.429 8.452a1.523 1.523 0 0 0 1.531 1.61h7.788a1.522 1.522 0 0 0 1.531-1.61l-.429-8.452ZM6.688 2.53h2.625V4.72H6.688V2.53ZM12.05 13.4a.219.219 0 0 1-.157.07H4.106a.228.228 0 0 1-.218-.219l.358-7.21h7.508l.359 7.21a.22.22 0 0 1-.062.149Z" /></svg>;
};
export default IconBag;