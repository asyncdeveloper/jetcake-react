import React, { Component } from "react";
import { Alert, Button, Col, Container, Form, FormGroup, FormInput, Row } from "shards-react";
import { connect } from "react-redux";
import { signIn } from "../redux/auth/auth.actions";
import { Redirect } from "react-router-dom";
import SpinnerButton from "./common/SpinnerButton";

class LoginPage extends Component {

   constructor(props) {
       super(props);
       this.state = {
           email: '',
           password: ''
       }
   }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    render() {
        const { authError, auth, isLoading } = this.props;
        if (auth.uid) return <Redirect to='/' />;

        return(
            <Container fluid className="px-4 pb-4">
                <Row>
                    <Col lg={{size: 6, offset: 3}} >
                        { authError ? (<Alert theme="danger">{authError}</Alert>) : null }

                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <label htmlFor="email">Email</label>
                                <FormInput type="email" id="email" placeholder="Email" value={this.state.email}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <FormInput type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="mr-0">
                                { isLoading
                                    ? (<SpinnerButton />)
                                    : (<Button pill theme="info" style={{float: 'right'}}> Login </Button> )
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
        signIn: (credentials) => dispatch(signIn(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)