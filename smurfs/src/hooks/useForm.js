import { useState } from "react";
import { addSmurf } from "../store/actions/actions";

export const useForm = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);

  const handleChanges = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  return [inputs, setInputs, handleChanges];
};
