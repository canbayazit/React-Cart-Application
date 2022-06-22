//rcc yazarak class component oluşturuyor.
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  Collapse,
  NavbarToggler,
  DropdownMenu,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";
// export public anlamına geliyor diğer taraflardan erişebilir anlamına geliyor
//extend inheritance demek yani Navi class'ı Component den miras alıyor

// class componentlerin şöyle bir güzelliği var içeriden yazdığın fonksiyonu ,
// render içerisindeki return içerisinden çağırabileceksin.
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Northwind</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/form1/">Form Demo 1</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/form2/">Form Demo 2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
           
            </Nav>
            <CartSummary
              cart={this.props.cart}
              removeFromCart={this.props.removeFromCart}
            />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
