import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
      );
      setProducts(res.data.data.products);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Fragment>
      <Row>
        {loading &&
          products.map((product) => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <Card className="my-3 p-3 rounded h-90">
                <Card.Img
                  style={{ objectFit: "contain" }}
                  variant="top"
                  src={product.imageURLs[0]}
                  alt={product.fulhausProductName}
                />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {product.fulhausProductName}
                  </Card.Title>
                </Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  <div>
                    <strong>Rating:</strong> {product.ratings}
                  </div>
                </Card.Subtitle>
                <Card.Text className="mb-2 text-muted">
                  <div>
                    <strong>Price:</strong> {product.retailPrice}
                  </div>
                </Card.Text>
                <div>
                  <button
                    style={{ borderRadius: "20px" }}
                    className="w-100"
                    variant="primary"
                  >
                    Add to Cart
                  </button>
                  <button
                    style={{ borderRadius: "20px" }}
                    className="w-100"
                    variant="primary"
                  >
                    Remove From Cart
                  </button>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </Fragment>
  );
};

export default Products;
