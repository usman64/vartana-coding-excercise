import React, { createContext, useReducer } from "react";
import reducer from "./reducer.js";
import axios from "axios";
import {
  ADD_SELECTED_FORM,
  DELETE_SELECTED_FORM,
  ADD_FILLED_FORM,
  TOGGLE_EDIT_FORM_MODAL,
  SET_CURRENT_FORM_EDITING,
  SET_IS_AUTHENTICATED,
  GENERATE_INCOME_FORMS,
} from "./types";

const initialState = {
  userId: "",
  isAuthenticated: false,
  selectedForms: [],
  filledForms: [],
  currentFormEditing: "",
  isEditFormModelOpen: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addSelectedForm = (formType) => {
    dispatch({
      type: ADD_SELECTED_FORM,
      payload: formType,
    });
  };
  const deleteSelectedForm = (id) => {
    dispatch({
      type: DELETE_SELECTED_FORM,
      payload: id,
    });
  };

  const addFilledForm = (form) => {
    dispatch({
      type: ADD_FILLED_FORM,
      payload: form,
    });
  };

  const toggleEditFormModel = () => {
    dispatch({
      type: TOGGLE_EDIT_FORM_MODAL,
    });
  };

  const setCurrentFormEditing = (formType) => {
    dispatch({
      type: SET_CURRENT_FORM_EDITING,
      payload: formType,
    });
  };

  const setIsAuthenticated = (isAuth) => {
    dispatch({
      type: SET_IS_AUTHENTICATED,
      payload: isAuth,
    });
  };

  const genrateIncomeForms = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYwODRlNTBiNWEyNzkzM2ViNWVhNTJkIn0sImlhdCI6MTU5NDM3OTg1NiwiZXhwIjoxNTk0NzM5ODU2fQ.4F5WFzKUrGcTtUT3C_SgBvdgZm3eo_CImFaSuxhT2hE",
      },
    };
    try {
      const res = await axios.post(
        "/api/income-forms/generate",
        { forms: state.filledForms },
        config
      );
      console.log(res.data);

      // dispatch({
      //   type: "GENERATE_INCOME_FORMS_SUCCESS",
      // });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedForms: state.selectedForms,
        filledForms: state.filledForms,
        isEditFormModelOpen: state.isEditFormModelOpen,
        currentFormEditing: state.currentFormEditing,
        isAuthenticated: state.isAuthenticated,
        setIsAuthenticated,
        genrateIncomeForms,
        addSelectedForm,
        deleteSelectedForm,
        addFilledForm,
        toggleEditFormModel,
        setCurrentFormEditing,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
