import React, { Component } from 'react';
import logo from './logo.svg';
import DateForm from './DateForm'
import NumberForm from './NumberForm'
import CheckBox from './CheckBox'
import Submit from './Submit'
import './App.css';
class App extends Component {
  render() {
    return (
      
      <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        <header className="App-header">
          <h2 className="title">Book Hotel</h2>
          <form id="form">
            <DateForm></DateForm>
            <br></br>
            <NumberForm></NumberForm>
            <br></br>
            <CheckBox></CheckBox>
            <br></br>
            <Submit></Submit>
            <br></br>
          </form>
        </header>
      </div>

    );
  }
}

export default App;
