import axios from "axios";
import { SearchRepoitoriesResponse } from "./types";

const githubClient = axios.create({
  baseURL: "https://api.github.com",
});
githubClient.interceptors.response.use(function (response) {
  return response.data;
});

export const searchRepositories = async (
  repoName: string
): Promise<SearchRepoitoriesResponse> => {
  return await githubClient.get("/search/repositories", {
    params: {
      q: repoName,
    },
  });
};

export const searchUsers = async (name: string) => {
  return await githubClient.get("/search/users", {
    params: {
      q: name,
    },
  });
};
