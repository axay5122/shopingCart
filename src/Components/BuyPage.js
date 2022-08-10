import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./CardItem";
// import { random, commerce } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "563492ad6f9170000100000170fbda7bd0f44f96a344cecf229ee17e";

// const localurl = ""

const BuyPage = ({ AddInCart }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    var config = {
      method: "get",
      url: "https://api.pexels.com/v1/search?query=laptop&per_page=12&page=1",
      headers: {
        Authorization: apiKey,
      },
    };
    const data = await Axios(config);
    const photos = await data.data.photos;

    // console.log(photos);

    const allProducts = await photos.map((photo) => ({
      smallImage: photo.src?.medium,
      tinyImage: photo.src?.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));

    setProduct(allProducts);
    // console.log(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} AddInCart={AddInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
