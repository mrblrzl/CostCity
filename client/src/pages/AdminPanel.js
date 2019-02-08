import React from "react";
import Layout from "../components/Layout";
import { Grid, List } from 'semantic-ui-react'
import Calendar from "../components/Calendar";
import ToDoList from "../components/ToDoList";

class AdminPanel extends React.Component {
  state={
  }

  componentDidMount =()=>{

  }

  render() {
    return (
      <Layout>

    {/* Table headers     */}
        <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
      <h1></h1>
      </Grid.Column>
      <Grid.Column width={10}>
      <h1>Current Shopping List:</h1>
      </Grid.Column>
      <Grid.Column width={3}>
      <h1>Shopping Dates:</h1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      {/* ***********************************/}
      
      <Grid.Column width={3}>
        {/* Future Development: Calculator */}
      </Grid.Column>

      <Grid.Column width={10}>
      <List divided verticalAlign='middle'>
      <ToDoList></ToDoList>
      </List>
      </Grid.Column>

      <Grid.Column width={3}>
        <Calendar></Calendar>
      </Grid.Column>
    </Grid.Row>
  </Grid>
        
      </Layout>
    )
  }
}

export default AdminPanel;
