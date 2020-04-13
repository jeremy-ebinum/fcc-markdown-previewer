import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./App.scss";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="my-4">
          <h1 className="text-center">Markdown Previewer</h1>
          <Button variant="secondary">Help</Button>
        </Col>
        <Col xs={12} lg={6}>
          <textarea id="editor" className="w-100" />
        </Col>
        <Col xs={12} lg={6}>
          <textarea id="preview" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
