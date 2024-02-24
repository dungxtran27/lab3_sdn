import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import AddProduct from "./components/AddProducts.js";
import Detail from "./components/ProductDetail.js";
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/detail/:pid" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
