import React from "react";
import { formFields } from "../..//utils/testFormFields.data";
import SelectForms from "../select-forms/select-forms.component";
import { Link } from "react-router-dom";

const AddForm = ({ formCategory }) => {
  return (
    <>
      {formFields[formCategory] ? (
        <SelectForms formCategory={formCategory} />
      ) : (
        <>
          <h2>FORM CATEGORY NOT FOUND</h2>
          <Link to="/">Go to Dashboard</Link>
        </>
      )}
    </>
  );
};

export default AddForm;
