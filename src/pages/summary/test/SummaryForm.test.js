import { render, screen } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("Button enabled after agreeing to TOS, Disabled by unchecking", async () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const user = userEvent.setup();

  await user.click(checkbox);
  expect(button).toBeEnabled();

  await user.click(checkbox);
  expect(button).toBeDisabled();
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const termsAndConditions = screen.getByText(/terms and conditions/i);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    "No ice cream will actually be delivered"
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  await user.hover(termsAndConditions);
  const popover = screen.queryByText("No ice cream will actually be delivered");
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  const nullPopover2 = screen.queryByText(
    "No ice cream will actually be delivered"
  );
  expect(nullPopover).not.toBeInTheDocument();
});
