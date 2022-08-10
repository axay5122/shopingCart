import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, AddInCart }) => {
  // console.log(product.smallImage);

  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          price: RS. {product.productPrice}
        </CardText>
        {/* {console.log(addInCart)} */}
        <Button color="success" onClick={() => AddInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
