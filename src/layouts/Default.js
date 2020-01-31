import React from "react";
import { Col, Container, Row } from "shards-react";

import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";
import Hero from "../components/common/HeroImage";

export const DefaultLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col className="main-content p-0" tag="main">
        <MainNavbar />

        <Hero number={100} />

        {children}
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default DefaultLayout;
