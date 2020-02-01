import React from "react";
import { Alert, Col, Container, Row } from "shards-react";

import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";
import Hero from "../components/common/HeroImage";
import { connect } from "react-redux";

export const DefaultLayout = ({ children, errorMessage }) => (

  <Container fluid>
    <Row>
      <Col className="main-content p-0" tag="main">
        <MainNavbar />

        <Hero number={100} />

        <Col> { errorMessage ? (<Alert theme="danger">{errorMessage}</Alert>) : null } </Col>

        {children}
      </Col>
    </Row>
    <Footer />
  </Container>
);

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
    }
};

export default connect(mapStateToProps)(DefaultLayout)
