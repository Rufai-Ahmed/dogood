import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface iContainer
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
  className?: string;
}

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  lineColor?: string;
  width?: string;
  y?: string;
}

export interface iHero {
  h1?: string;
  img?: string;
}

export interface iGrid {
  p?: string;
  b?: string;
  img?: string;
}

export interface iVolunteer {
  name?: string;
  img?: string;
}

export interface iMobile {
  siderState?: boolean;
  handleMouseEnter?: (i: number) => void;
  handleMouseLeave?: () => void;
  hoverIndex?: number;
}
