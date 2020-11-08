import React from "react";
import { render } from "@testing-library/react";
import RepoTypeahead from "./RepoTypeahead";

describe("RepoTypeahead", () => {
  it("renders without clashes", () => {
    expect(() => render(<RepoTypeahead />)).not.toThrow();
  });

  it('renders empty ui', () => {
    
  })
});
