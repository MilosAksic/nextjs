import * as Yup from "yup";

const errorMsgEng = {
  email: {
    requiredEmail: "Email is required",
    mustBeEmail: "You must enter a valid email"
  },
  password: {
    requiredPassword: "Password is required",
    confirmPassword: "Passwords must be the same",
    passwordLength: "Password is too short",
    requiredMessage: "Message is required field",
    requiredName: "Name is required field"
  },
  mustBeString: "Must be a string"
};

const formValidation = Yup.object().shape({
  name: Yup.string(errorMsgEng.mustBeString).required("Must enter a name"),
  email: Yup.string(errorMsgEng.mustBeString)
    .email(errorMsgEng.email.mustBeMail)
    .required(errorMsgEng.email.requiredEmail),
  password: Yup.string(errorMsgEng.mustBeString)
    .min(5, errorMsgEng.password.passwordLength)
    .required(errorMsgEng.password.requiredPassword)
});

export { formValidation };
