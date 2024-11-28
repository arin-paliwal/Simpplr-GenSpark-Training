import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should render with correct text and initial state", () => {
    render(<TermsAndConditions />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const btn = screen.getByRole("button", { name: "Submit" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/submit/i);
    expect(btn).toBeDisabled();
  });


  it('should enable the button when check box is checked', async () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByRole('checkbox');
    const user=userEvent.setup()
    await user.click(checkbox)

    const btn=screen.getByRole('button', { name: 'Submit' })
    expect(btn).toBeEnabled()
  })
});
