import React from "react";
import { Button, Card, CardHeader, Col, Form, FormInput, ListGroup, ListGroupItem, Row } from "shards-react";

const UserProfileDetails = () => (
    <React.Fragment>
      <Card small className="mb-4">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
                className="rounded-circle"
                src=""
                alt="Oluwaseyi Adeogun"
                width="110"
            />
          </div>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="email">Email</label>
                      <FormInput id="email" placeholder="me@example.com" value="" />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <FormInput id="tel" placeholder="+2348175851897" value="" />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="address">Address</label>
                      <FormInput id="address" placeholder="City of Manchester" value="" />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="date_of_birth">Date of Birth</label>
                      <FormInput type="date" id="date_of_birth" value="" />
                    </Col>
                  </Row>
                  <Button pill theme="info" style={{ float: 'right'}}>
                    Update Profile
                  </Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </React.Fragment>
);

export default UserProfileDetails;
