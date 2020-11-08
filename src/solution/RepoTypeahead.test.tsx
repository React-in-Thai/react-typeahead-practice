import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import RepoTypeahead from "./RepoTypeahead";
import userEvent from "@testing-library/user-event";
import StubRepositories from "./StubRepositories.json";
import { searchRepositories } from "../services/searchApi";
import { act } from "react-dom/test-utils";

jest.mock("../services/searchApi");

describe("RepoTypeahead", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
  });
  it("renders without clashes", () => {
    expect(() => render(<RepoTypeahead />)).not.toThrow();
  });

  it("renders empty ui & input", () => {
    render(<RepoTypeahead />);
    screen.getByText("Type at the top to search repositories.");
    screen.getByLabelText("search-input");
  });

  it("should display result after search with some text", async () => {
    mocked(searchRepositories).mockResolvedValue(StubRepositories);
    render(<RepoTypeahead />);

    userEvent.type(screen.getByLabelText("search-input"), "react");
    act(() => {
      jest.runAllTimers()
    })
    expect(
      screen.queryByText("Type at the top to search repositories.")
    ).toBeNull();

    await waitForElementToBeRemoved(screen.getAllByTestId("loader"));

    // api done
    expect(screen.getAllByTestId("repo-item")).toHaveLength(
      StubRepositories.items.length
    );
  });

  it('show no result ui', async () => {
    mocked(searchRepositories).mockResolvedValue({
      incomplete_results: true,
      items: [],
      total_count: 0,
    });
    render(<RepoTypeahead />);

    userEvent.type(screen.getByLabelText("search-input"), "whatever");
    act(() => {
      jest.runAllTimers()
    })

    await waitForElementToBeRemoved(screen.getAllByTestId("loader"));

    screen.getByText('No result found!')
  })
});
