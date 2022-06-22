import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
// row componentin satırı demek
// bootstrap bir Row'u 12 parçaya ayırıyor. xs="3", xs="9" diyerek 3 lük kısmı categorylist için, 9 luk kısım productlist için ayırdık.

//ÖNEMLİ NOT:
//Dikkat ettiyseniz ana component olan App içerisinde <CategoryList> 'in içine props(property) yazdık.
//işte bu property'i CategoryList sayfasında kullanabilmemiz için CategoryList sayfasına gidip props olarak gönderdiğimiz
// propertyleri "this.props" diyerek çağırıyoruz

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  // *** NOT ! ***

  //alttaki fonksiyonda product bir array. ProductList componentinde  click eventiyle  gelen product listesi addtocart fonksiyonuna parametre
  //olarak giriyor. Yukarda state içerisinde oluşturduğumuz cart arrayini newCart diye yeni bir değişkene kopyalayıp product list componentinden gelen
  //liste newcart içerisinde yoksa new kart arayının içine ekle ve bu gelen listenin ismini product adlı property e aktar diyor.

  // *** NOT ! ***

  //javascriptte let newcart diyip yeni bir değişken oluşturup cart property sini yeni değişkene atadığımızda aslında birbirinden bağımsız iki nesne oluşturmuş olmuyoruz
  // çünkü newcarta eleman eklediğimizde otomatikmen cart property'sininede ekleniyor. dikkat ettiyseniz aşağıdaki this.setState içerisinde car : newCart dedik
  //aslında car diğer bir propery aktarmış olduk normalde yanlış yazdık o yüzden de çalışmaması lazımdı ama gel gör ki fonksiyon istenilen şekilde çalışıyor
  //sebebi dağdemin bahsettiğim olaydan kaynaklı

  addToCart = (productItem) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((c) => c.product.id === productItem.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({
        product: productItem,
        quantity: 1,
      });
    }

    this.setState({ car: newCart });

    alertify.success(productItem.productName + " Sepete Eklendi!", 2);
  };

  removeFromCart = (productItem) => {
    let newCart = this.state.cart.filter(
      (c) => c.product.id !== productItem.id
    );
    this.setState({ cart: newCart });
    alertify.error(productItem.productName + " Ürün Silindi!", 2);
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      productList={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                />
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      removeFromCart={this.removeFromCart}
                      cartList={this.state.cart}
                    />
                  }
                />
                <Route exact path="*" element={<NotFound />} />
                <Route exact path="/form1" element={<FormDemo1 />} />
                <Route exact path="/form2" element={<FormDemo2 />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
