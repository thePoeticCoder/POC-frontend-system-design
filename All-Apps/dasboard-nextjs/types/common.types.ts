import { ReactElement } from "react";

type ReactChildren = {
  children: React.ReactNode | React.ReactNode[];
};
type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>;

type ReactButtonClickEvent = React.MouseEvent<HTMLButtonElement>;

type ReactDivClickEvent = React.MouseEvent<HTMLDivElement>;

type ReactInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type ReactJsxElement = ReactElement;

type voidFunctionType = () => void;

export type {
  ReactChildren,
  ReactChangeEvent,
  ReactButtonClickEvent,
  ReactDivClickEvent,
  ReactInputChangeEvent,
  ReactJsxElement,
  voidFunctionType,
};
