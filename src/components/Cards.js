import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import CardsData from "./CardsData";
import { ADD } from "../redux/Actions/Action";

function Cards() {
  const [data, setData] = useState(CardsData);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-align-center">Our Menu</h2>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((card) => {
          return (
            <Card
              className="bs mx-2 mt-5"
              style={{ width: "22rem", border: "none", cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={card.imgdata}
                style={{ height: "16rem" }}
              />
              <Card.Body>
                <Card.Title>{card.rname}</Card.Title>
                <Card.Text>Price : ₹{card.price}</Card.Text>
                <Button
                  variant="primary"
                  className="col-lg-12"
                  onClick={() => send(card)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      ;
    </>
  );
}

export default Cards;
