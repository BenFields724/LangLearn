import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./home.css";
import Manager from "./wordManager";
import Tester from "./tester";

import withAuthorization from './withAuthorization';
//import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    var test = localStorage.getItem('user');
    //console.log(test)
    ReactDOM.render(<h1>Welcome {test}</h1>, document.getElementById('Welcome'));

  }

  renderWords = () =>{
    ReactDOM.render(<Manager/>, document.getElementById('WorkSpace'));
  }

  renderTest = () => {
    ReactDOM.render(<Tester/>, document.getElementById('WorkSpace'));
  }

  render() {
    
    return (
      <div className="home">
        <div id="Welcome"></div>
        <button id="wordButton" type="button" onClick={this.renderWords}>Word Management</button>
        <button id="quizButton" type="button" onClick={this.renderTest}>Take Quiz</button>
        <hr/>
        <div id="WorkSpace">

        </div>
      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);