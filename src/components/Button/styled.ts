import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  color: var(--white);
  background-color: var(--blue);

  border-radius: 5px;

  &:hover {
    color: var(--blue);
    background-color: var(--white);

    border: 1px solid var(--blue);

    transition: all 0.5s ease-out;
  }
`;
