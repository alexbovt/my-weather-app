import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import "./content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Grid container justify="center">
          Hello From Content
        </Grid>
      </div>
    );
  }
}
