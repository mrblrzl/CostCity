import React from "react";
import { Api } from "../services";
import Layout from "../components/Layout";

class Profile extends React.Component {
  state = {
    profile: {},
    user:{
      email: "",
      password: ""
    }
  }

  componentDidMount = () => {
    return Api.getUserInfo(this.props.match.params.userId)
      .then(user => {
        return this.setState({ user })
      })
  }

  render() {
    return (
      <Layout>
        <h1>email: {this.state.user.email}</h1>
        <h2>password: {this.state.user.password}</h2>
      </Layout>
    )
  }
}

export default Profile;
