import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import formatUSD from "../../helpers/formatUSD";
import AlertBanner from "../common/AlertBanner";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const price = optionType === "Scoops" ? 2 : 1.5;
  const ItemComponent = optionType === "Scoops" ? ScoopOption : ToppingOption;

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  return (
    <div>
      <h2>{optionType}</h2>
      <p>{formatUSD(price)} each</p>
      <p>
        {optionType} total: ${formatUSD(2)}
      </p>
      <Container>
        <Row>
          {items.map((item) => {
            return (
              <ItemComponent
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
