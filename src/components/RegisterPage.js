import React from "react";
import { Button, Col, Container, Form, FormGroup, FormInput, Row } from "shards-react";

const RegisterPage = () => (
    <Container fluid className="px-4 pb-4">
        <Row>
            <Col lg={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }} sm="12" >
                <Form>
                    <FormGroup>
                        <label htmlFor="#email">Email</label>
                        <FormInput type="email" id="#email" placeholder="me@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#password">Password</label>
                        <FormInput type="password" id="#password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#phone">Phone Number</label>
                        <FormInput type="tel" id="#phone" placeholder="+2348175851897" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#address">Address</label>
                        <FormInput type="text" id="#address" placeholder="United States" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#date_of_birth">Date of Birth</label>
                        <FormInput type="date" id="#date_of_birth" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#photo">Photo</label>
                        <FormInput type="file" id="#photo" inputProps={{ accept: 'image/*' }} />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#security_question_1">
                            Security Question 1 :
                            What is your favourite sports ?
                        </label>
                        <FormInput type="text" id="#security_question_1" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#security_question_2">
                            Security Question 2 :
                            What was your childhood nickname ?
                        </label>
                        <FormInput type="text" id="#security_question_2" />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#security_question_3">
                            Security Question 3 :
                            What city were you born ?
                        </label>
                        <FormInput type="text" id="#security_question_3" />
                    </FormGroup>
                    <FormGroup className="mr-0">
                        <Button pill theme="info" style={{ float: 'right'}}>
                            Register
                        </Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default RegisterPage;
