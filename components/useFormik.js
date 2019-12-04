import React from "react";
import reducer from "./reducer";

const useFormik = props => {
  if (!props.onSubmit) {
    throw new Error("You forgot to pass on submit to useFormik");
  }
  const [state, dispatch] = React.useReducer(reducer, {
    values: props.initialValues,
    errors: {},
    touched: {},
    isSubmitting: false
  });

  React.useEffect(() => {
    if (props.validate) {
      const errors = props.validate(state.values);
      dispatch({ type: "SET_ERRORS", payload: errors });
    }
  }, [state.values]);

  const handleChange = fieldName => event => {
    event.persist();
    dispatch({
      type: "SET_FIELD_VALIUE",
      payload: { [fieldName]: event.target.value }
    });
  };

  const handleBlur = fieldName => event => {
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: { [fieldName]: true }
    });
  };

  const getFieldProps = fieldName => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName)
  });
  const handleSubmit = async event => {
    event.preventDefault();
    dispatch({ type: "SUBMIT_ATTEMPT" });
    //validate
    const errors = props.validate(state.values);
    if (!Object.keys(errors).length) {
      try {
        await props.onSubmit(state.values);
        dispatch({ type: "SUBMIT_SUCCES" });
      } catch (submitError) {
        dispatch({ type: "SUBMIT_FAILURE", payload: "API mistake" });
      }
    } else {
      dispatch({ type: "SET_ERRORS", payload: errors });
      dispatch({ type: "SUBMIT_FAILURE", payload: "Submit failed" });
    }
    //mark each field as touched
  };

  return { handleChange, handleBlur, handleSubmit, getFieldProps, ...state };
};

export default useFormik;
