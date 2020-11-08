import React from "react";
import { render } from "@testing-library/react";
import RepoTypeahead from "./RepoTypeahead";

describe("RepoTypeahead", () => {
  it("renders without clashes", () => {
    expect(() => render(<RepoTypeahead />)).not.toThrow();
  });
<<<<<<< HEAD

  it('renders empty ui', () => {
    
  })
=======
>>>>>>> test ui markup
});
