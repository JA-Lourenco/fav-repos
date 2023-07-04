import styled from "styled-components";
import { rotate } from "../../global/styles";

interface LoadingProps {
  color?: string;
}

const defaultDisplay = {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
};

export const Container = styled.div`
  position: relative;

  max-width: 70%;
  height: 90vh;

  margin: 50px auto;
  padding: 30px;

  background-color: var(--white);

  border-radius: 5px;

  box-shadow: var(--box-shadow);
`;

export const Loading = styled.div<LoadingProps>`
  height: 100vh;

  color: ${({ color }) => color || "var(--white)"};

  ${defaultDisplay}

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
