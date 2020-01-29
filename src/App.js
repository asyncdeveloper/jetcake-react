import React from 'react';
import Header from "./component/Header";
import { Col, Container, Image, Row } from "react-bootstrap";
import './App.css';
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
          <Image src="https://asyncdeveloper.com/images/home-bg.jpg"  fluid />
          <h1 className="hero-text"> Hello</h1>
      </div>
      <Container>
        <Row>
                <Col>
                    <h1>Hello there !</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                </Col>
            </Row>
        <Row>
              <Col>
                  <h1>Hello there !</h1>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                  </p>
              </Col>
          </Row>
      </Container>
      <Footer>
          <p>Copyright All rights reserved</p>
      </Footer>
    </div>
  );
}

export default App;
