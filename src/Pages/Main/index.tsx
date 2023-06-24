import { useState } from "react";

import { FaGithub, FaPlus } from "react-icons/fa";

import { Container, Title, Form } from "./styled";
import { Button } from "../../components/Button";

export const Main = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <Title>
        <FaGithub size={50} />
        Favorite Github Repositories
      </Title>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Insert ..." value={inputValue} />

        <Button
          type="submit"
          width="10%"
          height="100%"
          icon={<FaPlus size={20} />}
        />
      </Form>
    </Container>
  );
};
