import React, { Component } from "react";
import { Grid, Image, Button, List } from 'semantic-ui-react'


class shoppingList extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
          todos: [
          {
            id: 1,
            text: "Kirkland Organic Peanut Butter",
            complete: false,
          }, 
          {
            id: 2,
            text: "2% Milk",
            complete: false,
          },
        ]
      }
    }
    
    addItem = (desc) => {
      if (desc) {
        this.setState( prevState => ({
          todos: [...prevState.todos, {id: Date.now(), text: desc, complete: false}]
        }))
      }
    }
    
    removeItem = (index) => {
      this.setState({
        todos: this.state.todos.filter(i => i.id != index) 
      })
    }
  
    render () {    
      const TodoComponents = this.state.todos.map(item => {
        return <Item key={item.id} id={item.id} desc={item.text} complete={item.complete} func={this.removeItem}/>
      })    
      
      return (
        <div>
          <Input func={this.addItem}/>
          <ul className="list-group">{TodoComponents}</ul>
        </div>
      )
    }
  };
  
  class Item extends React.Component {
    render() {
      return (
        <List>
        <li className="list-group-item" onClick={this.props.markDone}>
            <p style={{margin: 0}}>{this.props.desc}</p>
            <button className="btn btn-secondary input-group-addon" id="basic-addon1" onClick={() => this.props.func(this.props.id)}>X</button>
        </li>
        </List>
      )
    }
  }
  
  class Input extends React.Component {
    constructor(props) {
      super(props) 
        this.state = {
          inputText: ""
        }
    }
    
    handleChange = e => {
      this.setState({inputText: e.target.value})
    }
    
    render() {
      return (
        <div className="input-group">
          <input type="text" className="form-control" placeholder="i.e. Kirkland Brand Toilet Paper " aria-describedby="basic-addon1" onChange={this.handleChange}/>
          <Button color='teal' fluid size='small' id="basic-addon1" onClick={() => this.props.func(this.state.inputText)}>Add Item</Button>
        </div>
      )
    }
  }
  
 

export default shoppingList;