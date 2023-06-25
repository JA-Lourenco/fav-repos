import { useState, ChangeEvent, FormEvent, useCallback } from "react";

import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";

import { Container, Title, Form } from "./styled";

interface RepositoryProps {}

export const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        if (!inputValue) {
          alert("You must provide a value!");
          return;
        }

        setLoading(true);

        const { data } = await api.get(`/repos/${inputValue}`);

        setInputValue("");
        setRepositories([...repositories, data]);
      } catch (e: any) {
        console.error("submit Error: ", e);
      } finally {
        setLoading(false);
      }
    },
    [inputValue, repositories]
  );

  return (
    <Container>
      <Title>
        <FaGithub size={50} />
        Favorite Github Repositories
      </Title>

      <Form onSubmit={submit}>
        <input
          type="text"
          placeholder="Example: facebook/react"
          value={inputValue}
          onChange={handleInputChange}
          disabled={loading}
        />

        <Button
          type="submit"
          width="10%"
          height="100%"
          icon={loading ? <FaSpinner size={20} /> : <FaPlus size={20} />}
          $loading={loading}
          disabled={loading}
        />
      </Form>
    </Container>
  );
};
