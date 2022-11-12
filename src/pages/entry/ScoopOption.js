import { Container, Image, Row, Col } from "react-bootstrap";

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
          <Image
            src={`http://localhost:3030/${imagePath}`}
            alt={`${name} scoop`}
            style={{ width: "75%" }}
          />
          <p>{name}</p>
        </Col>
      </Row>
    </Col>
  );
}
