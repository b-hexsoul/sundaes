import Options from "./Options";

export default function OrderEntry() {
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="Scoops" />
      <Options optionType="Toppings" />
      <h2>Grand Total: </h2>
      <button>Order Sundae!</button>
    </div>
  );
}
