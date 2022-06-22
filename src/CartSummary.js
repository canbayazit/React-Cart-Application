import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavbarText,
  DropdownMenu,
  Badge,
} from "reactstrap";
import { Link} from "react-router-dom";

export default class CartSummary extends Component {
  
    renderSummary() {
    return (
      <NavbarText>
        <UncontrolledDropdown>
          <DropdownToggle caret nav>
            <i class="bi bi-cart"></i> Sepetim{" "}
            <Badge color="badge rounded-pill bg-primary">{this.props.cart.length}</Badge>
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <div
                   style={{
                    alignItems:"center"
                    
                  }}
                >
                  <div style={{ float: "left" ,marginRight:"100px"}}>
                  
                      {cartItem.product.productName}
                  
                  </div>
                  <div style={{ float: "right" }}>
                    
                      <Badge color="success">{cartItem.quantity}</Badge>{" "}
                      <Badge
                        color="danger"
                        onClick={() =>
                          this.props.removeFromCart(cartItem.product)
                        }
                        style={{ textAlign: "right" }}
                      >
                        <i
                          class="bi bi-trash"
                          style={{ textAlign: "right" }}
                        ></i>
                      </Badge>
                    
                  </div>
                </div>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>
                <Link to="cart">Sepete Git</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavbarText>
    );
  }
  renderEmptyCart() {
    return (
      <NavbarText>
        <UncontrolledDropdown>
          <DropdownToggle caret nav>
            <i class="bi bi-cart"></i> Sepet Boş <Badge color="danger"></Badge>
          </DropdownToggle>
        </UncontrolledDropdown>
      </NavbarText>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
