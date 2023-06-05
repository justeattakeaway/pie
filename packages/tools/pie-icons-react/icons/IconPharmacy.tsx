import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPharmacy = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--pharmacy", className, iconSize, "IconPharmacy");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M4.842 7.711h1.312v.928h.928V9.95h-.928v.928H4.842V9.95h-.92V8.64h.92V7.71Z" /><path fill="#242E30" fillRule="evenodd" d="m12.892 5.926.113.114 1.47 1.872-.06 4.42c0 .463-.185.91-.526 1.25-.35.35-.814.543-1.304.543H10.31c-.446 0-.875-.166-1.207-.464-.306.289-.691.464-1.103.464H2.995a1.58 1.58 0 0 1-1.163-.516 1.776 1.776 0 0 1-.464-1.339l.472-6.737a1.515 1.515 0 0 1-.55-1.164V4.28c0-.84.682-1.531 1.53-1.531h5.364c.84 0 1.531.683 1.531 1.531v.088c0 .463-.218.884-.55 1.163l.104 1.462.919-1.033c.026-.026.079-.07.079-.07v-1.26h2.625v1.295Zm-1.313.726a.542.542 0 0 0-.411.175V6.82L9.794 8.367v.342h3.36V8.35l-1.181-1.505a.506.506 0 0 0-.394-.192ZM2.82 4.063a.217.217 0 0 0-.218.22v.087c0 .122.096.219.218.219h5.364a.217.217 0 0 0 .219-.22v-.087a.217.217 0 0 0-.219-.218H2.82ZM8 12.805a.297.297 0 0 0 .21-.097v.01a.485.485 0 0 0 .114-.35l-.446-6.423H3.127l-.447 6.422a.485.485 0 0 0 .114.35.293.293 0 0 0 .21.088H8Zm4.585 0c.15 0 .28-.053.377-.149h-.01a.478.478 0 0 0 .14-.332l.036-2.293H9.794v2.284c0 .131.053.254.14.341a.508.508 0 0 0 .376.149h2.275Z" clipRule="evenodd" /></svg>;
};
export default IconPharmacy;