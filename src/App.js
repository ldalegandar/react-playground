import React, { Component } from "react";
import AppBar from "./components/AppBar";
import Grid from "./components/Grid";
import Card from "./components/Card";
import "./Variables.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Grid container>
          <Grid item width={"two-thirds"} xs={12}>
            <Card title="Test 1" alignCenter>
              Test 1
            </Card>
          </Grid>

          <Grid item height="half" width={4} xs={6}>
            <Card title="Test 2" theme="1">
              Test 2
            </Card>
          </Grid>

          <Grid item height="half" width={4} xs={6}>
            <Card title="Test 3">Test 3</Card>
          </Grid>

          <Grid item height="double">
            <Card title="Test 4">Test 4</Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
