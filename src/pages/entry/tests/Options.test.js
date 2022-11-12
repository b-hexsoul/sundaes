import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("Displays image for each scoop from the server", async () => {
  render(<Options optionType="Scoops" />);

  // Find Images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((x) => x.alt);
  // arrays/objects need to use toEqual
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each topping from the server", async () => {
  render(<Options optionType="Toppings" />);

  // Find Images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(2);

  const altText = toppingImages.map((x) => x.alt);
  // arrays/objects need to use toEqual
  expect(altText).toEqual(["Hot Fudge topping", "Gummi Bears topping"]);
});
