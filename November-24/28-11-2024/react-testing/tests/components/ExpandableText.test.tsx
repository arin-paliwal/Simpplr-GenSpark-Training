import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const long_text = "a".repeat(limit + 1);
  const truncated_text = long_text.slice(0, limit) + "...";
  it("should render full text if less than 255 character", () => {
    const short_text = "Hey! My name is John Doe";
    render(<ExpandableText text={short_text} />);
    expect(screen.getByText(short_text)).toBeInTheDocument();
  });

  it("should truncate text if longer than 255 characters", () => {
    render(<ExpandableText text={long_text} />);
    expect(screen.getByText(truncated_text)).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });

  it("should expand text when show more button clicked", async () => {
    render(<ExpandableText text={long_text} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText(long_text)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse text when show less button clicked", async () => {
    render(<ExpandableText text={long_text} />);
    const showMoreBtn = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreBtn);
    const showLessBtn = screen.getByRole("button", { name: /less/i });
    await user.click(showLessBtn);
    expect(screen.getByText(truncated_text)).toBeInTheDocument();
    expect(showLessBtn).toHaveTextContent(/more/i);
  });
});
