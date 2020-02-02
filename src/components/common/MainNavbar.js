import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "shards-react";

import routes from "../../routes";
import { connect } from "react-redux";
import { signOut } from "../../redux/auth/auth.actions";

class MainNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseOpen: false
        };
    }

    toggleNavbar = () =>  {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };

    handleLogout = () => {
        this.props.signOut();
    };

    render() {
        const { isLoggedIn } = this.props;
        const headerLinks = routes.map((item, idx) => {
            if (!(item.hideOnLogin && isLoggedIn)) {
                //Hide certain routes for loggedIn users
                return (
                    <NavItem key={idx}>
                        <NavLink href={item.path}>
                            {item.alias}
                        </NavLink>
                    </NavItem>
                )
            }
            return null;
        });

        return (
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/"> JetCake </NavbarBrand>

                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        { headerLinks }

                        { isLoggedIn ? (<NavLink onClick={this.handleLogout}> Logout </NavLink>) : null }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: !!state.firebase.auth.uid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);