import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Logo from "./logo";
import SearchPanel from "./search-panel";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Grid container justify="space-around">
          <Logo />
          <SearchPanel />
        </Grid>
      </div>
    );
  }
}
