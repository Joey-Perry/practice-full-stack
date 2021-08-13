import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
    }
  }

  getHeroes = () => {
    axios.get('/api/heroes')
      .then(res => {
        this.setState({ data: res.data })
      }).catch(err => {
        console.log(err);
      })
  }

  render(){
    return (
      <div className='App'>
        Hello World
        <h1>Get Data</h1>
        <button onClick={this.getHeroes}>GET</button>
        <ul>
          {this.state.data.map(heroes => {
            <li key={heroes.id}><h2>{heroes.name}</h2></li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
