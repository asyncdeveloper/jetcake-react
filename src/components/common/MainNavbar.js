import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "shards-react";

import routes from "../../routes";

export default class MainNavbar extends Component {
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

    render() {
        return (
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="#"> JetCake </NavbarBrand>

                <NavbarToggler onClick={this.toggleNavbar} />

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        {
                         routes.map((item, idx) => (
                             <NavItem key={idx}>
                                 <NavLink href={item.path}>
                                     {item.alias}
                                 </NavLink>
                             </NavItem>
                         ))
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}