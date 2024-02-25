import { useEffect, useState } from "react";
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
  const [images, setIMG] = useState([]);
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState("");
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:9999/product/${pid}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIMG(data.images);
        setComment(data.comments);
      });
  }, [refresh]);

  // if (product.images.length > 0) {
  // setIMG(product.images);
  // console.log(images);
  // console.log(product);
  const postData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:9999/comment"; // Update the URL with your API endpoint

    const data = {
      content: content,
      pid: pid,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      refresh == 1 ? setRefresh(2) : setRefresh(1);
      setContent("");
    } catch (error) {
      alert(error.toString());
    }
  };

  return (
    <Container>
      <Row className="text-left">
        <Row>ID: {pid}</Row>
      </Row>
      <Row>
        <Col xs={6}>
          <Row>
            <img
              src={
                images.length > 0
                  ? images[0].url
                  : "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png"
              }
              className="img-fluid"
              alt="Big Image"
            />
          </Row>
          <Row className="mt-3 border-top ">
            {images.map((img) => (
              <Col xs={4} key={img._id}>
                <img
                  className="d-block w-100"
                  src={img.url}
                  // src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png"
                  alt="First slide"
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={6}>
          <Row>Name: {product.name}</Row>
          <Row>Price: {product.price}</Row>
        </Col>
      </Row>
      <Row>
        <Row>Description: {product.description}</Row>
      </Row>

      <Row> Comments:</Row>

      {comment.map((cmt) => (
        <Row key={cmt._id}>
          <Row>{cmt.author} :</Row>
          <Row className="content">{cmt.text}</Row>
        </Row>
      ))}

      <Row>
        <Row>
          <Form className="d-flex" onSubmit={postData}>
            <FormControl
              type="text"
              placeholder="Enter your text..."
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit">send</Button>
          </Form>
        </Row>
      </Row>
    </Container>
  );
};

export default Detail;
