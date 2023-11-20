import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({});

  const onChangeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const saveMovieHandler = () => {
    setMovies([...movies, newMovie]);
    handleClose();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",

        marginRight: "20px",
        marginTop: "70px",

        paddingBottom: "60px",
      }}
    >
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          backgroundColor: "#0d6efd",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          border: "none",
        }}
      >
        <FontAwesomeIcon icon={faPlus} beatFade size="xl" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "none",
          }}
          closeButton
        >
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "none",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter Movie Title"
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter your Description"
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ImageUrl</Form.Label>
              <Form.Control
                name="posterURL"
                type="text"
                placeholder="Enter your ImageUrl"
                onChange={onChangeHandler}
              />
              <br />
              <Form.Label>Rate the movie From 1 to 10</Form.Label>
            </Form.Group>

            <Rating
              name="simple-controlled"
              max={10}
              value={newMovie.rating}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>

        <Modal.Footer
          style={{
            backgroundColor: "#1a1a1a",
            color: "white",
            border: "none",
          }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveMovieHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
