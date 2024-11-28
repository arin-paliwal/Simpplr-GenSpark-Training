import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      btn: screen.getByRole("button", { name: "Submit" }),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, btn } = renderComponent();
    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(btn).toHaveTextContent(/submit/i);
    expect(btn).toBeDisabled();
  });

  it("should enable the button when check box is checked", async () => {
    const { checkbox, btn } = renderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(btn).toBeEnabled();
  });
});
