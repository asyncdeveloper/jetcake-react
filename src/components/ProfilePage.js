import React from "react";
import { Col, Container, Row } from "shards-react";
import UserProfileDetails from "./common/UserProfileDetails";

const ProfilePage = () => (
    <Container fluid className="main-content-container px-4">
        <Row>
            <Col lg={{ size: 8, offset: 2 }}>
                <UserProfileDetails />
            </Col>
        </Row>
    </Container>
);

export default ProfilePage;
