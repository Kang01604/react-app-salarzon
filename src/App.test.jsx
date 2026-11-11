// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "./App";

it("renders the main heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
});
