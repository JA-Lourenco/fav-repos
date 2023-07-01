import {
  useState,
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
} from "react";

import { Button } from "../../components/Button";
import { Container } from "../../utils/components/styled";

import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";

import { Title, Form, RepoList } from "./styled";

interface RepositoryProps {
  id: number;
  full_name: string;
  html_url: string;
}

export const Main = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [repositories, setRepositories] = useState<RepositoryProps[]>(
    JSON.parse(localStorage.getItem("localRepositories") || "[]")
  );

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

        const { data } = await api.get<RepositoryProps>(`/repos/${inputValue}`);

        const duplicated = repositories.find(
          ({ full_name }) => full_name === data.full_name
        );

        if (duplicated) {
          alert("Duplicated repositories!");
          setInputValue("");
          return;
        }

        setInputValue("");
        setRepositories([...repositories, data]);
      } catch (e: any) {
        console.error("submit Error: ", e);
        alert("Error while fetching repositories!");
      } finally {
        setLoading(false);
      }
    },
    [inputValue, repositories]
  );

  const deleteRepo = useCallback(
    (repoId: number) => {
      const updateRepos = repositories.filter(({ id }) => repoId !== id);
      setRepositories(updateRepos);
    },
    [repositories]
  );

  const showRepositories = () => {
    return repositories.map(({ id, full_name, html_url }) => (
      <li key={`${id} - ${Math.random()}`}>
        <a href={html_url} target="blank">
          {full_name}
        </a>

        <span>
          <Link to={`/repository/${encodeURIComponent(full_name)}`}>
            <Button
              type="button"
              width="35px"
              height="35px"
              icon={<FaBars size={15} />}
            />
          </Link>

          <Button
            type="button"
            width="35px"
            height="35px"
            bgcolor="var(--red)"
            icon={<FaTrash size={15} />}
            onClick={() => deleteRepo(id)}
          />
        </span>
      </li>
    ));
  };

  useEffect(() => {
    localStorage.setItem("localRepositories", JSON.stringify(repositories));
  }, [repositories]);

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

      <RepoList>{showRepositories()}</RepoList>
    </Container>
  );
};
