import {
  ADD_SELECTED_FORM,
  DELETE_SELECTED_FORM,
  ADD_FILLED_FORM,
  TOGGLE_EDIT_FORM_MODAL,
  SET_CURRENT_FORM_EDITING,
  SET_IS_AUTHENTICATED,
  GENERATE_INCOME_FORMS,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_SELECTED_FORM:
      return {
        ...state,
        selectedForms: [
          ...state.selectedForms,
          { id: state.selectedForms.length + 1, formType: action.payload },
        ],
      };
    case DELETE_SELECTED_FORM:
      return {
        ...state,
        selectedForms: state.selectedForms.filter(
          (form) => form.id !== action.payload
        ),
      };
    case ADD_FILLED_FORM:
      return {
        ...state,
        filledForms: [...state.filledForms, action.payload],
      };
    case TOGGLE_EDIT_FORM_MODAL:
      return {
        ...state,
        isEditFormModelOpen: !state.isEditFormModelOpen,
      };
    case SET_CURRENT_FORM_EDITING:
      return {
        ...state,
        currentFormEditing: action.payload,
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case GENERATE_INCOME_FORMS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
