import React from "react";
import "./App.css";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import Colors from "./colors";

class App extends React.Component {
  state = {
    colors: [
      red[500],
      red[200],
      red[200],
      pink[500],
      pink[200],
      pink[900],
      purple[500],
      purple[200],
      purple[900],
      deepPurple[500],
      deepPurple[200],
      deepPurple[900],
      indigo[500],
      indigo[200],
      indigo[900],
      blue[500],
      blue[200],
      blue[900],
      teal[500],
      teal[200],
      teal[900],
      green[500],
      green[200],
      green[900],
    ]
  };
  render() {
    return (
      <div className="App">
        <Colors colorNames={this.state.colors} />
      </div>
    );
  }
}

export default App;
