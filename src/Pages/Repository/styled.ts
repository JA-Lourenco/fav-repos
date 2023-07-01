import styled from "styled-components";

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;

    margin-bottom: 25px;
    padding: 4px;

    border-radius: 5px;

    box-shadow: 0px 25px 20px -20px var(--blue);
  }

  h1 {
    color: var(--blue);
    text-transform: uppercase;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;
