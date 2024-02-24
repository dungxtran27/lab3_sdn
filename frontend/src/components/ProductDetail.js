import { useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  return (
    <Container>
      <Row className="text-left">
        <Row>ID: {pid}</Row>
      </Row>
      <Row>
        <Col xs={6}>
          <Row>
            <img
              src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png"
              className="img-fluid"
              alt="Big Image"
            />
          </Row>
          <Row className="mt-3 border-top ">
            <Col xs={4}>
              <img
                className="d-block w-100"
                src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png"
                alt="First slide"
              />
            </Col>
            <Col xs={4}>
              <img
                className="d-block w-100"
                src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png"
                alt="First slide"
              />
            </Col>
            <Col xs={4}>
              <img
                className="d-block w-100"
                src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png"
                alt="First slide"
              />
            </Col>
          </Row>
        </Col>

        <Col xs={6}>
          <Row>Name:</Row>
          <Row>Price:</Row>
        </Col>
      </Row>
      <Row>
        <Row>Description</Row>
      </Row>
      <Row>
        <Row> Comments</Row>
      </Row>
      <Row>
        <Row>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Enter your text..." />
            <Button>Submit</Button>
          </Form>
        </Row>
      </Row>
    </Container>
  );
};

export default Detail;
