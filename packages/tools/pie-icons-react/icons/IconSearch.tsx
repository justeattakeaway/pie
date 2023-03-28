import * as React from "react";
import { SVGProps } from "react";
const IconSearch = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={"pie-icon pie-icon--search " + (props.extraClass ?? '') } width="1em" height="1em" {...props}><path fill="#242E30" d="M14.125 13.162 11.15 10.18a5.049 5.049 0 1 0-.936.936l2.948 3.01.963-.963Zm-7-2.318a3.718 3.718 0 1 1 3.719-3.719 3.728 3.728 0 0 1-3.72 3.719Z" /></svg>;
export default IconSearch;