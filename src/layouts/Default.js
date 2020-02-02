import React, { Fragment } from "react";
import { Alert, Col } from "shards-react";

import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";
import Hero from "../components/common/HeroImage";
import { connect } from "react-redux";

export const DefaultLayout = ({ children, errorMessage }) => (
    <Fragment>
        <MainNavbar />

        <Hero number={100} />

        { errorMessage ? (<Col lg={{ size: 8, offset: 2 }}><Alert theme="danger">{errorMessage}</Alert></Col>) : null }

        {children}

        <Footer />
    </Fragment>
);

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
    }
};

export default connect(mapStateToProps)(DefaultLayout)
