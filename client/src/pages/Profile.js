// import React from "react";
// import { Api } from "../services";
// import Layout from "../components/Layout";

// class Profile extends React.Component {
//   state = {
//     profile: {},
//     user:{
//       email: "",
//       password: ""
//     }
//   }

//   componentDidMount = () => {
//     return Api.getUserInfo(this.props.match.params.userId)
//       .then(user => {
//         return this.setState({ user })
//       })
//   }

//   render() {
//     return (
//       <Layout>
//         <h1>email: {this.state.user.email}</h1>
//         <h2>password: {this.state.user.password}</h2>
//       </Layout>
//     )
//   }
// }

// export default Profile;

import React, { Component } from "react";
import { Search, Card, Image } from 'semantic-ui-react';
import Layout from "../components/Layout";
import API from "../utils/API";

class UserProfile extends Component {
  state = {
    users: [],
    email: "",

  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, email: "", username: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Layout>
        <div
          style={{ height: "100vh", clear: "both", paddingTop: 120, textAlign: "center" }}
          className="landingPage"
        >
          <Search
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            // results={results}
            // value={value}
            {...this.props}
          /> 
          {this.state.users.map(user => (

            <Card style={{ display: "inline-block", marginRight: 75 }} >
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
              <Card.Content>
                <Card.Header>{user.username}</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>{user.email}</Card.Description>
              </Card.Content>
              {/* <Card.Content extra>
                {user.password}
              </Card.Content> */}
            </Card>
          ))}
        </div>

      </Layout>
    )
  }
}

export default UserProfile;
