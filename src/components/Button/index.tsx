import { ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  width: string;
  height: string;
  icon?: JSX.Element;
}

export const Button = ({
  title,
  width,
  height,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyled width={width} height={height} {...rest}>
      {icon && icon}
      {title && title}
    </ButtonStyled>
  );
};
