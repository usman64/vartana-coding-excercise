import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const SelectedFormItem = ({ form }) => {
  const {
    deleteSelectedForm,
    toggleEditFormModel,
    setCurrentFormEditing,
  } = useContext(GlobalContext);
  const { id, formType } = form;
  return (
    <li>
      <div>{formType}</div>
      <button
        onClick={() => {
          toggleEditFormModel();
          setCurrentFormEditing(formType);
        }}
      >
        Edit
      </button>
      <button onClick={() => deleteSelectedForm(id)}>Delete</button>
    </li>
  );
};

export default SelectedFormItem;
