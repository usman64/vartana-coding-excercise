import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "@material-ui/core";
import { GlobalContext } from "../../context/globalState";
import { formFields } from "../..//utils/testFormFields.data";
import SelectedFormsCollection from "../selected-forms-collection./selected-forms-collection.component";

const SelectForms = ({ formCategory }) => {
  const {
    addSelectedForm,
    selectedForms,
    filledForms,
    genrateIncomeForms,
  } = useContext(GlobalContext);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Autocomplete
          id="combo-box-demo"
          options={Object.keys(formFields[formCategory])}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onChange={(ev, val) => {
            if (val !== null) {
              addSelectedForm(val);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select form" variant="outlined" />
          )}
        />
      </div>

      <div>
        <h3>Selected Forms</h3>
        <SelectedFormsCollection />
      </div>

      <Button
        color="secondary"
        variant="contained"
        onClick={() => genrateIncomeForms()}
        disabled={
          selectedForms.length === filledForms.length &&
          selectedForms.length !== 0
            ? false
            : true
        }
      >
        GENERATE FORMS
      </Button>
    </div>
  );
};

export default SelectForms;
