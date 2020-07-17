import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/actions";
import Form from "./Form";
import Smurfs from "./Smurfs";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <Form />
      <Smurfs />
    </div>
  );
};

export default connect(null, { fetchSmurfs })(App);
