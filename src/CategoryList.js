import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
//super props'ı compenente göndermemize sağlıyor.
//this burda CategoryList temsil eder.
//bu constructor yapısı eski versiyonlarda kullanılıyor ProductList.js gittiğinizde this.props.title ı constructor yazmadan direk kullanabiliyoruz
//state = bir componentte veri tutmak istediğimizde ve o veri sadece o componente ait olan veri olsun dediğimizde state kullanıyoruz

export default class CategoryList extends Component {
  // Constructor'a mecbur değiliz yeni React versiyonlarında
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       categories: [
  //         { categoryId: 1, categoryName: "Beverages" },
  //         { categoryId: 2, categoryName: "Condiments" },
  //       ],
  //     };
  //   }

  // state = {
  //   categories: [
  //     { categoryId: 1, categoryName: "Beverages" },
  //     { categoryId: 2, categoryName: "Condiments" },
  //   ]

  // };

  state = {
    categories: []
  };
// yaşam döngüsünde öncce componentler yüklenir sonra veriler gelir. 
// componentDidMount ile componenti yüklemiş oluyoruz sonra ürünleri getir diyoruz.
  componentDidMount(){
    this.getCategories();
  }
  
  getCategories = ()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));
  }

 
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup >
          {this.state.categories.map((category) => (
            
            <ListGroupItem
              active={category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
