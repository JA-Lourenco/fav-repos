import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Container, Loading } from "../../utils/components/styled";

import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { BackButton, Owner, IssuesList, PageActions } from "./styled";
import {
  FaSpinner,
  FaArrowLeft,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

interface RepositoryProps {
  name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssuesProps {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: {
    id: number;
    name: string;
  }[];
}

export const Repository = () => {
  const [repository, setRepository] = useState<RepositoryProps>(
    {} as RepositoryProps
  );
  const [issues, setIssues] = useState<IssuesProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { repo } = params;

  const handleBack = () => history.back();

  const handlePagination = (action: "previous" | "next") => {
    setPage(action === "previous" ? page - 1 : page + 1);
  };

  const getData = async () => {
    try {
      setLoading(true);

      const { data } = await api.get<RepositoryProps>(`/repos/${repo}`);

      setRepository(data);
    } catch (e) {
      console.error("getData Error: ", e);
      alert("Error to get Details!");
    } finally {
      setLoading(false);
    }
  };

  const getIssues = async () => {
    try {
      const { data } = await api.get<IssuesProps[]>(`/repos/${repo}/issues`, {
        params: {
          state: "open",
          per_page: 5,
          page,
        },
      });

      setIssues(data);
    } catch (e) {
      console.log("getIssues Error: ", e);
      alert("Error to get Issues!");
    }
  };

  const showIssues = () => {
    return issues.map(
      ({ id, html_url, title, user: { login, avatar_url }, labels }) => (
        <li key={id.toString()}>
          <img src={avatar_url} alt={login} />

          <div>
            <p>{login}</p>

            <p>
              <a href={html_url} target="blank">
                {title}
              </a>
            </p>

            <p>
              {labels.map((label) => (
                <span key={label.id}>{label.name}</span>
              ))}
            </p>
          </div>
        </li>
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getIssues();
  }, [page]);

  return (
    <>
      {loading ? (
        <Loading>
          <FaSpinner size={100} />
        </Loading>
      ) : (
        <Container>
          <BackButton>
            <Button
              type="button"
              width="35px"
              height="35px"
              icon={<FaArrowLeft size={15} />}
              onClick={handleBack}
            />
          </BackButton>

          <Owner>
            <img
              src={repository?.owner?.avatar_url}
              alt={repository?.owner?.login}
            />

            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>

          <IssuesList>{showIssues()}</IssuesList>

          <PageActions>
            <Button
              type="button"
              width="35px"
              height="35px"
              icon={<FaAngleLeft size={15} />}
              onClick={() => handlePagination("previous")}
              disabled={page <= 1}
            />

            <Button
              type="button"
              width="35px"
              height="35px"
              icon={<FaAngleRight size={15} />}
              onClick={() => handlePagination("next")}
            />
          </PageActions>
        </Container>
      )}
    </>
  );
};
