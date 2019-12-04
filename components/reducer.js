import { setNestedObjectValues } from "./utils";
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALIUE":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload
        }
      };
    case "SET_FIELD_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload
        }
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload
      };
    case "SUBMIT_ATTEMPT":
      return {
        ...state,
        isSubmitting: true,
        touched: setNestedObjectValues(state.values, true)
      };
    case "SUBMIT_SUCCES":
      return {
        ...state,
        isSubmitting: false,
        submitError: "Post submited"
      };
    case "SUBMIT_FAILURE":
      return {
        ...state,
        isSubmitting: false,
        submitError: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
