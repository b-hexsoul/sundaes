import { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

export function SummaryForm() {
  const [tosChecked, setTosChecked] = useState(false);

  const popover = (
    <Popover id="tos-popover">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group className="mb-3" controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          id="tos-checkbox"
          label={checkboxLabel}
          checked={tosChecked}
          onChange={() => setTosChecked(!tosChecked)}
        />
      </Form.Group>
      <Button type="submit" disabled={!tosChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
