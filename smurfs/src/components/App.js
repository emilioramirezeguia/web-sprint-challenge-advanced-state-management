import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/actions";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>SHOW ME THE SMURFS!</h1>
      {props.isLoading && <h2>Looking for little blue guys...</h2>}
      {props.error && <p>Sorry, no little guys found ... {props.error}</p>}
      {props.smurfs.length &&
        props.smurfs.map((smurf) => {
          return (
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
