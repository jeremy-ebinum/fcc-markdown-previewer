import React, { useState, useRef, useEffect } from "react";
import hljs from "highlight.js";
import dompurify from "dompurify";
import marked from "marked";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./App.scss";
import HelpModal from "../HelpModal/HelpModal";

const sanitizer = dompurify.sanitize;

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight(code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: true,
  silent: true,
});

const placeholder = `# Overview

Enter headers with the # symbol:
# h1
## h2
### h3

You can add _italic_ and __bold__ text emphasis or even _**both**_

Use backticks to enter inline code:
 \`<p>spam and eggs</p>\`

Multiline code with syntax highlighting:

\`\`\`js
  function foo() {
    console.log("bar");
  }
\`\`\`

\`\`\`css
  .foo {
    color: #fff;
    background-color: #000;
    padding: 1rem;
  }
\`\`\`

All sorts of lists are supported:

- Item 1
- Item 2
  - Subitem 1
  - Subitem 2

1. Item 1
1. Item 2

- [X] this is a complete item
- [ ] this is an incomplete item


Blockquotes:
> This is
> a blockquote
>
> > Nested
> > Blockquote

Tables:

| Column 1 Heading | Column 2 Heading |
| ---------------- | ---------------- |
| Some content     | Other content    |

![Markdown logo](https://i.ibb.co/8mYHJ3W/iconfinder-205-Markdown-logo-logos-4373658-1.png)
---
Click the link to view [source code](https://github.com/jeremy-ebinum/fcc-markdown-previewer)
`;

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);
  const [output, setOutput] = useState(marked(markdown));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editorRef = useRef();

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  return (
    <Container fluid className="wrapper bg-dark">
      <Row className="py-4">
        <Col xs={12} className="my-4">
          <h1 className="heading text-center text-light">Markdown Previewer</h1>
          <Button variant="info" onClick={handleShow}>
            Help
          </Button>
        </Col>
        <Col xs={12} lg={6} className="mb-3">
          <div className="header">Editor</div>
          <textarea
            ref={editorRef}
            id="editor"
            className="editor"
            value={markdown}
            onChange={({ target }) => {
              setMarkdown(target.value);
              setOutput(marked(target.value));
            }}
            spellCheck={false}
          />
        </Col>
        <Col xs={12} lg={6}>
          <div className="header">Preview</div>
          <Container
            id="preview"
            className="preview bg-light text-dark"
            dangerouslySetInnerHTML={{ __html: sanitizer(output) }}
            fluid
          />
        </Col>
      </Row>

      <HelpModal show={show} handleClose={handleClose} />
    </Container>
  );
};

export default App;
