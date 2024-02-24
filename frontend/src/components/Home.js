import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col>
            <h2 className="text-center">List of Product</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>
              <Link to={"/product/add"} className="text-white">
                create new product
              </Link>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="table table-hover table-striped">
              <thead className="thead-dark">
                <th>name</th>
                <th>description</th>
                <th>categories</th>
              </thead>

              <tbody>
                {products.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <Link to={"/detail/" + p._id}> {p.name}</Link>
                    </td>
                    <td>{p.description}</td>
                    <td>{p.category.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
