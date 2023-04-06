import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconPaymentPostFinance = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--post-finance", className, iconSize, "IconPaymentPostFinance");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"    {...allProps}><path fill="#FC0" fillRule="evenodd" d="M2 14h12V2H2v12Z" clipRule="evenodd" /><path fill="red" fillRule="evenodd" d="M11.23 6.8c.13-.688.291-1.348.416-2.017-.037-.005-.055-.014-.074-.014H9.006c-.083 0-.106.037-.125.116L8.355 7.34c-.004.032-.023.102-.023.102h.683c.014-.056.286-1.311.411-1.902.028-.134.032-.134.17-.134.36 0 1.168.005 1.224.01l-.434 2.03h2.036c0 .037-.162.785-.227 1.136-.018.106-.069.129-.166.129h-1.768c-.138 0-.138 0-.166.138l-.346 1.616c-.032.156-.032.156-.19.156H8.389c-.213 0-.217 0-.263.208-.033.139-.06.282-.093.434.065 0 1.445.01 2.096.01.138 0 .138 0 .17-.134.084-.379.333-1.551.383-1.773h1.865c.194 0 .166.014.208-.17.157-.725.489-2.304.498-2.387h-2.03l.009-.009Z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="m2.803 9.666-.341 1.592h4.68l.373-1.592H2.803Z" clipRule="evenodd" /><path fill="#000" fillRule="evenodd" d="M5.812 7.377c-.143-.346-.433-.522-.789-.559-.318-.032-.641-.023-.964-.027h-.296c-.208.964-.554 2.538-.757 3.498h.776c.032-.134.166-.886.193-1.015.019-.083.051-.116.134-.116.162 0 .328 0 .49-.009.489-.032.867-.258 1.112-.683.194-.346.254-.715.101-1.09ZM4.525 8.512c-.125.01-.25 0-.388 0l.203-.978c.014-.065.042-.106.12-.102.11.01.222 0 .332.01.199.018.319.143.333.341.032.41-.194.688-.605.725l.005.004Z" clipRule="evenodd" /><path fill="#000" fillRule="evenodd" d="M6.482 6.805h-.074l-.01.046c-.106.475-.216.997-.313 1.472-.111.522-.3 1.435-.406 1.966h.775c.078-.355.185-.867.258-1.218l.028-.106c.032 0 .679.004.937 0l.01-.056c.045-.184.078-.35.124-.558h-.928c.046-.222.097-.637.139-.84l.013-.079h.984s.009-.023.013-.05c.047-.18.088-.374.13-.554v-.033H6.49l-.01.01Z" clipRule="evenodd" /></svg>;
};
export default IconPaymentPostFinance;