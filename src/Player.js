import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Age:{age}</Card.Text>
          <Card.Text>Team:{team}</Card.Text>
          <Card.Text>Nationality:{nationality}</Card.Text>
          <Card.Text>JerseyNumber:{jerseyNumber}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
