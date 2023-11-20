import React from "react";
import { Navbar, Form, InputGroup, Row, Col } from "react-bootstrap/";
import "./Navbar.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Allura&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Martian+Mono:wght@100;200;300;400;500;600;700;800&family=Open+Sans:wght@600&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>;

const Nav = ({ handleSearch }) => {
  const onSearchChange = (e) => {
    const searchQuery = e.target.value;
    handleSearch(searchQuery);
  };
  return (
    <div>
      <Navbar className="custom-navbar justify-content-between ">
        <Form inline>
          <InputGroup>
            <img
              src="/zer.png"
              alt=""
              style={{
                width: "220px",
                height: "90px",
                marginLeft: "30px",
              }}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <Row style={{ marginRight: "30px" }}>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={onSearchChange}
              />
            </Col>
            <Col xs="auto"></Col>
          </Row>
        </Form>
      </Navbar>
    </div>
  );
};

export default Nav;
