import React from "react";
import { Button, Col, Container, Form, FormGroup, FormInput, Row } from "shards-react";

const LoginPage = () => (
    <Container fluid className="px-4 pb-4">
        <Row>
            <Col
                lg={{ size: 4, offset: 4 }}
                md={{ size: 4, offset: 4 }}
                sm="12" >
                <Form>
                    <FormGroup>
                        <label htmlFor="#email">Email</label>
                        <FormInput type="email" id="#email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#password">Password</label>
                        <FormInput type="password" id="#password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup className="mr-0">
                        <Button pill theme="info" style={{ float: 'right'}}> Login </Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default LoginPage;
