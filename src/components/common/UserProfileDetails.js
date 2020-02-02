import React, { Component, Fragment } from "react";
import { Alert, Button, Card, CardHeader, Col, Form, FormInput, ListGroup, ListGroupItem, Row } from "shards-react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { updateUser } from "../../redux/auth/auth.actions";
import SpinnerButton from "./SpinnerButton";

class UserProfileDetails extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser(this.state);
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleFileChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image });
    }
  };

  componentWillReceiveProps(nextProps, prevState) {
    this.setState({ ...nextProps.user })
  }

  render() {
    const { user, auth, isLoading, successMessage } = this.props;

    if (! auth.uid) return <Redirect to='/login' />;

    if(isEmpty(user))
      return <SpinnerButton />;

    return(
        <Fragment>
          <Card small className="mb-4">
            {  successMessage ? (<Alert theme="success">{successMessage}</Alert>) : null }
            <CardHeader className="border-bottom text-center">
              <div className="mb-3 mx-auto">
                <img style={{ maxHeight: "300px", maxWidth: "100%" }} src={user.imageUrl}  alt="User profile image" />
              </div>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form onSubmit={this.handleSubmit}>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="address">Address</label>
                          <FormInput id="address" placeholder="City of Manchester" defaultValue={user.address}
                             onChange={this.handleChange} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <FormInput type="tel" id="phoneNumber" placeholder="+2348175851897" defaultValue={user.phoneNumber}
                             onChange={this.handleChange} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="dateOfBirth">Date of Birth</label>
                          <FormInput type="date" id="dateOfBirth" defaultValue={user.dateOfBirth} onChange={this.handleChange}
                           />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="question1"> Security Question 1 : What is your favourite sports ? </label>
                          <FormInput id="question1" defaultValue={user.question1 } onChange={this.handleChange} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="question2"> Security Question 2 : What was your childhood nickname ? </label>
                          <FormInput id="question2" defaultValue={user.question2 } onChange={this.handleChange} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="question3">  Security Question 3 : What city were you born ? </label>
                          <FormInput id="question3" defaultValue={user.question3 } onChange={this.handleChange} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="photo">Image</label>
                          <FormInput type="file" id="photo" inputprops={{accept: 'image/*'}} onChange={this.handleFileChange} />
                        </Col>
                      </Row>
                      { isLoading
                          ? (<SpinnerButton />)
                          : (<Button pill theme="info" style={{ float: 'right'}}>Update Profile </Button>)
                      }
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const auth = state.firebase.auth;
  const users = state.firestore.data.users;
  const user = users ? users[auth.uid] : null;
  return {
    auth,
    user,
    authError: state.auth.authError,
    isLoading: state.auth.isLoading,
    successMessage: state.auth.successMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props => [{ collection: 'users', doc: props.auth.uid }]),
)(UserProfileDetails);