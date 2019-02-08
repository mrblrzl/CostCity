import React, { Component } from "react";
import { Search, Card, Image } from 'semantic-ui-react';
import Layout from "../components/Layout";
import API from "../utils/API";

class UserProfile extends Component {
  state = {
    users: [],
    email: "",
  };

    // Load all users 
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data })
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
              <a href="/admin"><Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /></a>
              <Card.Content>
                <Card.Header>{user.username}</Card.Header>
                <Card.Meta>
                  <span className='date'>Payment method: $ </span>
                </Card.Meta>
                <Card.Description>{user.email}</Card.Description>
              </Card.Content>
              {/* <Card.Content extra>
                {user.password}
              </Card.Content> */}
            </Card>
          ))}
          {/* {this.state.user.isAdmin ?
            <button type="button"> Promote to Admin </button>
            : 
            null
          } */}
        </div>

      </Layout>
    )
  }
}

export default UserProfile;
