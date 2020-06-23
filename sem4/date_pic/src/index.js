import React, { Component } from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";
import moment from "moment";

import Info from "./Info";
import "./style.css";

class App extends Component {
  state = {
    val: ""
  };

  render() {
    return (
      <div>
        <Info val = {this.state.val} />
        <DatePicker        
        onChange={(n = null, date) => this.setState({val: moment().diff(moment(date), 'days')})}
          floatingLabelText="Выберите дату"
        />
      </div>
    );
  }
}

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

//console.log(moment().diff(moment('01-03-2020'), 'days'))
