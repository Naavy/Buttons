import React from "react";
import { render, screen } from "@testing-library/react";

import Buttons from "../components/Buttons";

test("Search Loader component renders properly", () => {
  render(<Buttons />);

  // Buttons renders properly
  const ButtonsNode = screen.getByTestId("buttons");
  expect(ButtonsNode).toBeInTheDocument();

  expect(ButtonsNode).toMatchSnapshot();
});
