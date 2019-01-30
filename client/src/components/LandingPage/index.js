import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import background from '../../background.jpg';
import logo from '../../logo.svg';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  recordEmail = event => {
    this.setState({email: event.target.value});
    console.log('What is the user currently typing in the email input right now?', this.state.email);
  }

  recordPassword = event => {
    this.setState({ password: event.target.value });
    console.log('What is the user currently typing in the password input right now?', this.state.password);
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
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" onChange={this.recordEmail}/>
                  <Form.Input
                    fluid
                    name="password"
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.recordPassword}
                  />

                  <Button type="submit" color='teal' fluid size='large'>
                    Login
            </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <Link to='/signup'>Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>

      </div>
    )
  }
}


// Presentation Component

// function LandingPage({ children }) {
//     return (
//       <div
//         style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//         className="jumbotron"
//       >
//         {children}
//       </div>
//     );
//   }
  
  export default LandingPage;