import React from "react";
import { Button, Input, ErrorMsg } from "./styledComponents";
import useFormik from "./useFormik";
import { formValidation } from "./validation";

const NameForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatedPassword: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: values => {
      let errors = {};
      formValidation
        .validate(values, { abortEarly: false })
        .then(() => {})
        .catch(err => {
          err.inner.map(item => {
            errors[item.path] = item.errors[0];
          });
        });
      return errors;
    }
  });
  const { handleSubmit, getFieldProps, touched, errors, submitError } = formik;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {submitError && <div> {submitError} </div>}
        <label>
          Name:
          <Input type="text" {...getFieldProps("name")}></Input>
          {errors.name && touched.name && <ErrorMsg> {errors.name}</ErrorMsg>}
        </label>
        <br />

        <label>
          Email:
          <Input type="email" {...getFieldProps("email")}></Input>
          {errors.email && touched.email && (
            <ErrorMsg> {errors.email}</ErrorMsg>
          )}
        </label>
        <br />
        <label>
          Password:
          <Input type="password" {...getFieldProps("password")}></Input>
          {errors.password && touched.password && (
            <ErrorMsg> {errors.password}</ErrorMsg>
          )}
        </label>
        <br />
        <label>
          Repeat Password:
          <Input type="password" {...getFieldProps("repeatedPassword")}></Input>
          {errors.repeatedPassword && touched.repeatedPassword && (
            <ErrorMsg> {errors.repeatedPassword}</ErrorMsg>
          )}
        </label>
        <br />

        <Button type="submit" primary>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NameForm;
