import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import background from '../../background.jpg';
import Layout from "../Layout"
import logo from '../../logo.svg';
import {Api} from "../../services";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: '', password: '' }
    };
  }

  recordEmail = event => {
    this.setState({ email: event.target.value });
    // this.setState(pvSt => {
    //   return ({ user: { ...pvSt.user, email: event.target.value } })
    // })
    // console.log('What is the user currently typing in the email input right now?', this.state.email);
  }

  recordPassword = event => {
    this.setState({ password: event.target.value });
    // console.log('What is the user currently typing in the password input right now?', this.state.password);
  }
  showErrors = () => {

  }
  formIsValid = () => {
    return true
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.formIsValid()) {
      return Api.logInUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(userAndToken=>{
          console.log(userAndToken,"userandToken")
          const userId=userAndToken._id;
          if(userAndToken.role ==="admin"){
            this.props.history.push(`/admin/${userId}`)
          } else {
            this.props.history.push(`/users/${userId}`)
          }
        })
        .catch(err=>console.log(err.response.data))
    } else {
      return this.showErrors()
    }
  }

  render() {
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

                    <Button type="button" onClick={this.handleSubmit} color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href="/signup">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>

        </div>

      </Layout>
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