import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Button variant="contained" color="secondary">
          Hello World
        </Button>
        <Button variant="contained" color="default">
          Hello World
        </Button>
      </div>
    );
  }
}
