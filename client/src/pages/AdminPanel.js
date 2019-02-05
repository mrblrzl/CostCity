import React from "react";
import API from "../utils/API";
import Layout from "../components/Layout";
import { Grid, Image, Button, List } from 'semantic-ui-react'

class AdminPanel extends React.Component {
  state={
  }

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
        <Button>Approve</Button>
        <Button>Delete</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
      <List.Content>Milk</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Approve</Button>
        <Button>Delete</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <List.Content>Half and Half</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Approve</Button>
        <Button>Delete</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/mark.png' />
      <List.Content>Bread</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Approve</Button>
        <Button>Delete</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/molly.png' />
      <List.Content>Eggs</List.Content>
    </List.Item>
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
