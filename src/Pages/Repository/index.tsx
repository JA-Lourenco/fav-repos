import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Container, Loading } from "../../utils/components/styled";

import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { BackButton, Owner } from "./styled";
import { FaSpinner, FaArrowLeft } from "react-icons/fa";

interface RepositoryProps {
  name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssuesProps {}

export const Repository = () => {
  const [repository, setRepository] = useState<RepositoryProps>(
    {} as RepositoryProps
  );
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { repo } = params;

  const getData = async () => {
    try {
      setLoading(true);

      const [{ data: repoData }, { data: issuesData }] = await Promise.all([
        api.get<RepositoryProps>(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      setRepository(repoData);
      setIssues(issuesData);
    } catch (e) {
      console.error("getData Error: ", e);
      alert("Error to get Details!");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => history.back();

  useEffect(() => {
    getData();
  }, []);

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
        </Container>
      )}
    </>
  );
};
