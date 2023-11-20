import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";

const MovieCard = ({ movieInfo }) => {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#1a1a1a",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      <Card.Img
        variant="top"
        src={movieInfo.posterURL}
        alt={movieInfo.title}
        style={{
          height: "390px",
        }}
      />

      <Card.Body>
        <Card.Title>
          <h4>{movieInfo.title}</h4>
        </Card.Title>
        <Card.Text>{movieInfo.description}</Card.Text>
      </Card.Body>
      <Rating
        style={{ marginLeft: "20px" }}
        name="read-only"
        readOnly
        max={10}
        value={movieInfo.rating}
        emptyIcon
      />
      <br />
    </Card>
  );
};

export default MovieCard;
