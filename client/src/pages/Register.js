import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { history } from '../index'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {

    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();


const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios.post('/api/users/register', newUser)
      .then(user => {
        if(user.data) {
          history.push('/profile');
        }
      })
      .catch(err => console.log('error registering user'));
      
    
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
  <Layout>
        <div
          style={{ height: "100vh", clear: "both", paddingTop: 120 }}
          className="landingPage animate-area"
        >
           <div className="login-form">
           <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' color='teal' textAlign='center'>
                  <Image /> Register
                </Header>
       
            <Form noValidate onSubmit={this.onSubmit} size = "large">
            <Segment stacked>
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                />
                <label htmlFor="name">Name</label>
  

                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              
                <Button type="submit" color='teal' fluid size='large'>
                  Sign up
                </Button>
                </Segment>
                </Form>

            <Message>
                Already have an account? <Link to="/">Log in</Link>
          </Message>
          </Grid.Column>
            </Grid>
          </div>
          </div>
      </Layout>
    );
  }
}
export default Register;