import React from "react";
import { mocked } from "ts-jest/utils";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import RepoTypeahead from "./RepoTypeahead";
import { searchRepositories } from "../services/searchApi";
import StubRepositories from "./StubRepositories.json";
import userEvent from "@testing-library/user-event";

jest.mock("../services/searchApi");

describe("RepoTypeahead", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("renders without clashes", () => {
    expect(() => render(<RepoTypeahead />)).not.toThrow();
  });

  it("renders input & search help ui", () => {
    render(<RepoTypeahead />);
    screen.getByLabelText("search-input");
    screen.getByText("Type at the top to search repositories.");
    expect(screen.queryByText('No result found!')).toBeNull()
  });

  it("call search api and display the result (also search help ui should disappear)", async () => {
    mocked(searchRepositories).mockResolvedValue(StubRepositories);
    render(<RepoTypeahead />);
    userEvent.type(screen.getByLabelText("search-input"), "react");
    expect(
      screen.queryByText("Type at the top to search repositories.")
    ).toBeNull();

    await waitForElementToBeRemoved(screen.getAllByTestId("loader"));

    expect(screen.getAllByTestId("repo-item")).toHaveLength(
      StubRepositories.items.length
    );
  });

  it("render no result ui if search not found", async () => {
    mocked(searchRepositories).mockResolvedValue({
      items: [],
      incomplete_results: false,
      total_count: 0,
    });

    render(<RepoTypeahead />);
    userEvent.type(screen.getByLabelText("search-input"), "whatever");

    await waitForElementToBeRemoved(screen.getAllByTestId("loader"));

    screen.getByText("No result found!")
  });
});
