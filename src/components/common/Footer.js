import React from "react";
import { Container, Row } from "shards-react";

const Footer = () => (
  <footer className="main-footer p-2 px-3 bg-white border-top">
    <Container>
      <Row>
        <span className="copyright ml-auto mr-auto">
          Copyright © {new Date().getFullYear()} Jetcake
        </span>
      </Row>
    </Container>
  </footer>
);

export default Footer;
