import styled, { css } from "styled-components";
import { rotate } from "../../global/styles";

interface ButtonProps {
  width: string;
  height: string;
  bgcolor?: string;
  $loading?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  color: var(--white);
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "var(--blue)")};

  border: 1px solid ${({ bgcolor }) => (bgcolor ? bgcolor : "var(--blue)")};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.7;
        `
      : css<ButtonProps>`
          &:hover {
            color: ${({ bgcolor }) => bgcolor || "var(--blue)"};
            background-color: var(--white);

            transition: all 0.5s ease-out;
          }
        `}

  ${({ $loading }) =>
    $loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `};
`;
