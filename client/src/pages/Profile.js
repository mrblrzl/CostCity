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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    // Users is DUMMY DATA, replace it with the actual users from database
    this.state = { users:[ { email: 'bobo@bobo.com', password: '1234', first_name: 'Bobo', username: 'Kins' },
    { email: 'medie1@ebay.co.uk', password: 'QPUJAR1OwQ2i', first_name: 'Marlo', username: 'Edie',   },
    { email: 'psimony2@rambler.ru', password: 'Qped6xY', first_name: 'Perla', last_name: 'Simony',   },
    { email: 'cforrestor3@foxnews.com', password: '1NouRgEFKi8', first_name: 'Catlaina', last_name: 'Forrestor',  },
    { email: 'dtreker6@washingtonpost.com', password: 'xyPY3xJKj', first_name: 'Dianemarie', last_name: 'Treker',  },
    { email: 'bbrakewell7@com.com', password: 'I1vCMIgUfcv', first_name: 'Bessie', last_name: 'Brakewell',   },
    { email: 'mvoff8@nps.gov', password: 'CsBUxSQ8', first_name: 'Milt', last_name: 'Voff', }] 
    }
  }

  componentDidMount() {
    // This is where you call your database and retrieve those users that are gonna be displayed on this page 

  }

 

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
      
      </Layout>
    )
  }
}

export default UserProfile;
