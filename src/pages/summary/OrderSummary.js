import { SummaryForm } from "./SummaryForm";

export function OrderSummary() {
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Scoops:</p>
      <p>Toppings:</p>
      <p>Total:</p>
      <SummaryForm />
    </div>
  );
}
