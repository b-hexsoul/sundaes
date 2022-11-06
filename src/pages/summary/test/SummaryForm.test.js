import { fireEvent, render, screen } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("Button enabled after agreeing to TOS, Disabled by unchecking", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
