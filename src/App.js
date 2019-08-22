import React from "react";
import "./App.css";
import {PersonList }from './Components/PersonList';


class App extends React.Component {
 
  render() {
    return(
      <div>
        <PersonList/>
      </div>
    )
  }
}

export default App;

