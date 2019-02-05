import React, { Component } from "react";
import { Card, Image } from 'semantic-ui-react'
import background from '../../background.jpg';
import logo from '../../logo.svg';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    // Users is DUMMY DATA, replace it with the actual users from database
    this.state = { users:[ { email: 'bobo@bobo.com', password: '1234', first_name: 'Bobo', last_name: 'Kins' },
    { email: 'medie1@ebay.co.uk', password: 'QPUJAR1OwQ2i', first_name: 'Marlo', last_name: 'Edie',   },
    { email: 'psimony2@rambler.ru', password: 'Qped6xY', first_name: 'Perla', last_name: 'Simony',   },
    { email: 'cforrestor3@foxnews.com', password: '1NouRgEFKi8', first_name: 'Catlaina', last_name: 'Forrestor',  },
    { email: 'jfifoot4@arizona.edu', password: 'zm6Fhj4', first_name: 'Joana', last_name: 'Fifoot',   },
    { email: 'csandle5@zdnet.com', password: 'UWGcjEU8r', first_name: 'Coleen', last_name: 'Sandle',   },
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