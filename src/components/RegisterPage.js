import React, { Component } from "react";
import { Alert, Button, Col, Container, Form, FormGroup, FormInput, Row } from "shards-react";

import { Redirect } from "react-router-dom";
import { signUp } from "../redux/auth/auth.actions";
import { connect } from "react-redux";
import SpinnerButton from "./common/SpinnerButton";

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            phoneNumber: '',
            address: '',
            dateOfBirth: '',
            question1: '',
            question2: '',
            question3: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    };

    render() {
        const { auth, authError, isLoading } = this.props;
        if (auth.uid) return <Redirect to='/' />;

        const { email, password, phoneNumber, address, dateOfBirth, question1, question2, question3 } = this.state;

        return(
            <Container fluid className="px-4 pb-4">
                <Row>
                    <Col lg={{size: 4, offset: 4}} md={{size: 4, offset: 4}} sm="12" >
                        { authError ? (<Alert theme="danger">{authError}</Alert>) : null }

                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <label htmlFor="email">Email</label>
                                <FormInput type="email" id="email" placeholder="me@example.com" value={email} required
                                   onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <FormInput type="password" id="password" value={password} onChange={this.handleChange}
                                   required/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <FormInput type="tel" id="phoneNumber" placeholder="+2348175851897" name="phoneNumber"
                                   value={phoneNumber} onChange={this.handleChange} required />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="address">Address</label>
                                <FormInput type="text" id="address" placeholder="United States of America" value={address}
                                   onChange={this.handleChange} required />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                <FormInput type="date" id="dateOfBirth" value={dateOfBirth} onChange={this.handleChange}
                                   required />
                            </FormGroup>
                            {/*<FormGroup>*/}
                            {/*    <label htmlFor="#photo">Photo</label>*/}
                            {/*    <FormInput type="file" id="#photo" inputProps={{accept: 'image/*'}} />*/}
                            {/*</FormGroup>*/}
                            <FormGroup>
                                <label htmlFor="question1">
                                    Security Question 1 : What is your favourite sports ?
                                </label>
                                <FormInput type="text" id="question1" value={question1} onChange={this.handleChange}
                                   required />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="question2">
                                    Security Question 2 : What was your childhood nickname ?
                                </label>
                                <FormInput type="text" id="question2" value={question2} onChange={this.handleChange}
                                   required />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="question3">
                                    Security Question 3 : What city were you born ?
                                </label>
                                <FormInput type="text" id="question3" value={question3} onChange={this.handleChange}
                                   required />
                            </FormGroup>
                            <FormGroup className="mr-0">
                                { isLoading
                                    ? (<SpinnerButton />)
                                    : (<Button pill theme="info" style={{float: 'right'}}> Register </Button> )
                                }
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
        isLoading: state.auth.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch(signUp(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
