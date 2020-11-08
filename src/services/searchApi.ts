import axios from "axios";
import { SearchRepoitoriesResponse } from "./types";

const githubClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});
githubClient.interceptors.response.use(function (response) {
  return response.data;
});

export const searchRepositories = async (
  repoName: string,
  page: number = 1,
): Promise<SearchRepoitoriesResponse> => {
  return await githubClient.get("/search/repositories", {
    params: {
      q: repoName,
      per_page: 10,
      page,
    },
  });
};

export const searchUsers = async (name: string) => {
  return await githubClient.get("/search/users", {
    params: {
      q: name,
      per_page: 10,
    },
  });
};
