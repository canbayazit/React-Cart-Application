import React, { Component } from 'react'
import {Button, Table} from 'reactstrap'

export default class CartList extends Component {
    renderCart()
    {
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                        <td>Product ID</td>
                        <td>Category ID</td>
                        <td>Product Name</td>
                        <td>Unit Price</td>
                        <td>Units In Stock</td>
                        <td>Quantity</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(cartItem=>(
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>Ürünü Sil</Button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        )
    }
  render() {
    return (
      <div>
            {this.renderCart()}
      </div>
    )
  }
}
