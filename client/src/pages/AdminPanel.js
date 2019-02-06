import React from "react";
import API from "../utils/API";
import Layout from "../components/Layout";
import { Grid, Image, Button, List } from 'semantic-ui-react';
import axios from "axios";
import User from "../utils/API";


class AdminPanel extends React.Component {
  state={
    
  }

  // load items is being called by the add button currently
  LoadItems() {
    axios.get("/api/users/users")
      .then(function (req,res) {
        console.log(res.body)
      })
      .catch(function (err) {
        console.log(err)
      })

      //this.setState({User: itemlist})
    
    };
  componentDidMount =()=>{
    // return Api.getUserInfo(this.props.match.params.userId)
  }

  render() {
    return (
      <Layout>
        
        <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
      <h1>Welcome Captain! </h1>
      </Grid.Column>
      <Grid.Column width={10}>
      <h1>Current Shopping List:</h1>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        Calculator
      </Grid.Column>

      <Grid.Column width={10}>
      <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={this.LoadItems}>Approve</Button>
        <Button>Delete</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
      <List.Content>Milk</List.Content>
    </List.Item>
    <label>
      <input></input>
    </label>
    <button>submit</button>
  </List>
      </Grid.Column>

      <Grid.Column width={3}>
        Calendar?
      </Grid.Column>
    </Grid.Row>
  </Grid>
        
      </Layout>
    )
  }
}

export default AdminPanel;
