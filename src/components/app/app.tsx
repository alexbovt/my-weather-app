import React, { Component } from "react";

import Header from "../header";
import Content from "../content";

import './app.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
