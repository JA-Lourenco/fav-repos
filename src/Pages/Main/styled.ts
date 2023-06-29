import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  height: 700px;

  margin: 50px auto;
  padding: 30px;

  background-color: var(--white);

  border-radius: 5px;

  box-shadow: var(--box-shadow);
`;

export const Title = styled.h1`
  font-size: 28px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  height: 50px;

  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    flex: 1;

    margin-right: 5px;
    padding: 15px;

    font-size: 18px;

    color: var(--blue);

    border-bottom: 2px solid var(--black);
  }
`;

export const RepoList = styled.ul`
  list-style-type: none;

  margin-top: 20px;

  padding: 10px 0;

  li {
    width: 100%;

    padding: 5px 0;

    border-bottom: 1px solid var(--blue);

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;

      font-size: 16px;
      color: var(--blue);
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
