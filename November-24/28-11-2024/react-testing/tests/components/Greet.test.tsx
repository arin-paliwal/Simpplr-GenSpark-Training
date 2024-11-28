import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render hello with the name when name is provided", () => {
    render(<Greet name="Arin Paliwal" />);

    const heading=screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/arin paliwal/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet/>);

    const button=screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
