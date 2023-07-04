import styled from "styled-components";

export const Owner = styled.header`
  margin-bottom: 50px;

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

export const IssuesList = styled.ul`
  height: 400px;

  margin: 15px auto;

  list-style-type: none;

  li {
    padding: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    border-bottom: 1px solid var(--blue);

    img {
      width: 45px;
    }

    div {
      p {
        margin-bottom: 5px;
      }

      a {
        color: var(--blue);

        text-decoration: none;

        font-weight: 700;

        &:hover {
          color: var(--lightBlue);
          transition: 0.4s;
        }
      }
    }

    span {
      margin-right: 5px;
      padding: 5px;

      background-color: var(--blue);
      color: var(--white);

      font-size: 11px;

      border-radius: 5px;
    }
  }
`;

export const PageActions = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
