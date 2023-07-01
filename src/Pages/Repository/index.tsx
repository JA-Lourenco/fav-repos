import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";

interface RepositoryProps {}

interface IssuesProps {}

export const Repository = () => {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { repo } = params;

  const getData = async () => {
    try {
      setLoading(true);

      const [{ data: repoData }, { data: issuesData }] = await Promise.all([
        api.get(`/repos/${repo}`),
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>{}</h1>

      <Link to="/">Main</Link>
    </>
  );
};
