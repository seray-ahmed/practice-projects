import { useState } from "react";

import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  const productName = "Buzdolabi";
  return (
    <div>
      {/* <Product productName="Shoes" price={300} />
      <hr />
      <Product productName="Skirt" price={100} />
      <hr />
      <Product productName={productName} price={1500} />*/}

      <Container>
        <Product productName="Shoes" price={300} />
      </Container>
    </div>
  );
}

export default App;
