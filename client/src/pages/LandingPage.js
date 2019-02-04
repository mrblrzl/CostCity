import React, { Component } from "react";
import Layout from "../components/Layout";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import API from "../utils/API";
import axios from "axios";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };

    

  render() {
    const { errors } = this.state;
    return (
      <Layout>
        <div
          style={{ height: "100vh", clear: "both", paddingTop: 120, textAlign: "center" }}
          className="landingPage"
        >

          <div className='login-form'>
            {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image /> Log-in to your account
        </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" onChange={this.recordUsername} />
                    <Form.Input
                      fluid
                      username="password"
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      onChange={this.recordPassword}
                    />

                    <Button type="button" onClick={this.onSubmit} color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href="/register">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>

        </div>

      </Layout>
    )
  }
}



export default LandingPage;