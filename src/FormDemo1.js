import React, { Component } from 'react'

export default class FormDemo1 extends Component {

    state={userName:'',city:''}

    onChangeHandler=(event)=>{
       // this.setState({userName:event.target.value});
       let name=event.target.name;
       let value=event.target.value;
       this.setState({[name]:value}) // [key] : value gibi dinamik halde kullandık
    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        alert(this.state.userName);
    }
    render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>user name</h3>
            <input name="userName" onChange={this.onChangeHandler} type="text"/>
            <h3>user name is {this.state.userName}</h3>

            <h3>City</h3>
            <input name="city" onChange={this.onChangeHandler} type="text"/>
            <h3>City is {this.state.city}</h3>
            <input type="submit" value="kaydet" />
        </form>
      </div>
    )
  }
}
