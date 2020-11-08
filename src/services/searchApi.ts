import axios from "axios";
import { SearchRepositoriesResponse } from "./types";

const githubClient = axios.create({
  baseURL: "https://api.github.com",
});
githubClient.interceptors.response.use(function (response) {
  return response.data;
});

export const searchRepositories = async (
  repoName: string,
  page: number = 1
): Promise<SearchRepositoriesResponse> => {
  return await githubClient.get("/search/repositories", {
    params: {
      q: repoName,
      per_page: 10,
      page
    },
  });
};

export const searchUsers = async (name: string) => {
  return await githubClient.get("/search/users", {
    params: {
      q: name,
      per_page: 10
    },
  });
};
