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
    
  }

  render(){
    return (
      <div className='App'>
        Hello World
      </div>
    )
  }
}

export default App;
