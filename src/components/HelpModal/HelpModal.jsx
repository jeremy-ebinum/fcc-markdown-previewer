import React from "react";
import PropTypes from "prop-types";

import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const HelpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cheat Sheet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Element</th>
              <th>Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heading</td>
              <td>
                <code>
                  # H1 <br />
                  ## H2 <br />
                  ### H3 <br />
                </code>
                <small className="text-muted">Up to H6</small>
              </td>
            </tr>
            <tr>
              <td>Bold</td>
              <td>
                <code>
                  **bold text** <br />
                  __bold text__
                </code>
              </td>
            </tr>
            <tr>
              <td>Italics</td>
              <td>
                <code>
                  *italicized text* <br />
                  _italicized text_
                </code>
              </td>
            </tr>
            <tr>
              <td>Strikethrough</td>
              <td>
                <code>~~text to strike~~</code>
              </td>
            </tr>
            <tr>
              <td>Blockquote</td>
              <td>
                <code>&gt; blockquote</code>
              </td>
            </tr>
            <tr>
              <td>Ordered List</td>
              <td>
                <code>
                  1. Item 1 <br />
                  2. Item 2 <br />
                  3. Item 3 <br />
                </code>
                <small className="text-muted">Numbers dont matter</small>
              </td>
            </tr>
            <tr>
              <td>Unordered List</td>
              <td>
                <code>
                  - Item 1 <br />
                  - Item 2 <br />
                  - Item 3 <br />
                </code>
              </td>
            </tr>
            <tr>
              <td>Task List</td>
              <td>
                <code>
                  - [X] Completed <br />
                  - [ ] Uncompleted <br />
                </code>
              </td>
            </tr>
            <tr>
              <td>Inline Code</td>
              <td>
                <code>`code`</code>
              </td>
            </tr>
            <tr>
              <td>Fenced Code Blocks</td>
              <td>
                <code>
                  ```language
                  <br />
                  function foo() {"{"} <br />
                  &nbsp;&nbsp;console.log(&quot;bar&quot;) <br />
                  {"}"}
                  <br />
                  ```
                  <br />
                </code>
                <small className="text-muted">
                  Set language for syntax highlighting
                </small>
              </td>
            </tr>
            <tr>
              <td>Horizontal Rule</td>
              <td>
                <code>---</code>
              </td>
            </tr>
            <tr>
              <td>Link</td>
              <td>
                <code>[title](http://site.com)</code>
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td>
                <code>![alt text](/path/to/image.jpg)</code>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

HelpModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default HelpModal;
