import React, { Component } from "react";
import { Card, Image } from 'semantic-ui-react'

class UserProfile extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }
  render() {
    return (
      <div
        style={{ height: "100vh", clear: "both", paddingTop: 120, textAlign: "center" }}
        className="landingPage"
      >

        {this.state.users.map(user => (
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>{user.first_name}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>{user.email}</Card.Description>
            </Card.Content>
            <Card.Content extra>
             {user.password}
            </Card.Content>
          </Card>
        ))}
          

      </div>
    )
  }
}

export default UserProfile;