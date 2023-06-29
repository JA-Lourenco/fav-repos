import { ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  width: string;
  height: string;
  bgcolor?: string;
  icon?: JSX.Element;
  $loading?: boolean;
}

export const Button = ({
  title,
  width,
  height,
  bgcolor,
  icon,
  $loading,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      bgcolor={bgcolor}
      $loading={$loading}
      {...rest}
    >
      {icon && icon}
      {title && title}
    </ButtonStyled>
  );
};
