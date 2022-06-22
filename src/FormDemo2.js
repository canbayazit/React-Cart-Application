import alertify from "alertifyjs";
import React, { Component } from "react";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " Veritabanına eklendi!", 2);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Giriniz..."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password Giriniz..."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Description Giriniz..."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
          <Label for="city">City</Label>
          <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
                <option>İstanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>

        
          
          
          
        </Form>
      </div>
    );
  }
}
