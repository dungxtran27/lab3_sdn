import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    categories: "",
    images: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const filesArray = Array.from(e.target.files);

      const updatedImages = filesArray.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({
              image: URL.createObjectURL(file),
              imageName: file.name,
              imageSize: file.size,
              imageBase64: reader.result,
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      Promise.all(updatedImages).then((images) => {
        setFormData({
          ...formData,
          images: images,
        });
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9999/product/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    } catch (error) {
      console.log(" deo on roi");
      console.log(error.toString());
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center pt-200">
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required={true}
                type="text"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required={true}
                type="number"
                name="price"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                required={true}
                name="description"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="categories">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="categories"
                onChange={handleChange}
              >
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Kitchen</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="images">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required={true}
                name="image"
                onChange={handleChange}
                multiple
              />{" "}
              {formData.images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img.imageBase64}
                    alt="Uploaded"
                    style={{ maxWidth: "100px", marginTop: "10px" }}
                  />
                </div>
              ))}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
