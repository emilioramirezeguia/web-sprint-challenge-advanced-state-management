import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../store/actions/actions";
import { useForm } from "../hooks/useForm";

function Form(props) {
  const emptyForm = {
    name: "",
    age: "",
    height: "",
  };

  const [inputs, setInputs, handleChanges] = useForm(emptyForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSmurf(inputs);
    setInputs(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Smurf!</h3>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="name"
        value={inputs.name}
        onChange={handleChanges}
      />
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        name="age"
        type="text"
        placeholder="age"
        value={inputs.age}
        onChange={handleChanges}
      />
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        type="text"
        placeholder="height (cm)"
        value={inputs.height}
        onChange={handleChanges}
      />
      <button>Add</button>
    </form>
  );
}

export default connect(null, { addSmurf })(Form);
