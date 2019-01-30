import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import background from '../../background.jpg';
import logo from '../../logo.svg';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '',  firstName: '', lastName: ''};
  }

  recordEmail = event => {
    this.setState({ email: event.target.value });
    console.log('What is the user currently typing in the email input right now?', this.state.email);
  }

  recordPassword = event => {
    this.setState({ password: event.target.value });
    console.log('What is the user currently typing in the password input right now?', this.state.password);
  }
  recordFirstname = event => {
    this.setState({ firstName: event.target.value });
    console.log('What is the user currently typing in the first name input right now?', this.state.firstName);
  }
  recordLastname = event => {
    this.setState({ lastName: event.target.value });
    console.log('What is the user currently typing in the last name input right now?', this.state.lastName);
  }

  render() {
    return (
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
                <Image src={logo} /> Log-in to your account
        </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" onChange={this.recordEmail} />
                  <Form.Input
                    fluid
                    name="password"
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.recordPassword}
                  />

                  <Form.Input fluid  placeholder='First name' name="firstName" onChange={this.recordFirstname} />
                  <Form.Input fluid  placeholder='Last name' name="lastName" onChange={this.recordLastname} />

                  <Button type="submit" color='teal' fluid size='large'>
                    Login
            </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>

      </div>
    )
  }
}

export default SignupPage;