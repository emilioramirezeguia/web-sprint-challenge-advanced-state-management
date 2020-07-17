import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

function Smurfs(props) {
  return (
    <div className="smurfs">
      {props.isLoading && <h2>Looking for little blue guys...</h2>}
      {props.error && <p>Sorry, no little guys found ... {props.error}</p>}
      {props.smurfs.length &&
        props.smurfs.map((smurf) => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Smurfs);
