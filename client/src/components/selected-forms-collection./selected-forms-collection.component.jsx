import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import SelectedFormItem from "../selected-form-item/selected-form-item.component";

const SelectedFormsCollection = () => {
  const { selectedForms } = useContext(GlobalContext);
  return (
    <ol>
      {selectedForms.map((form, index) => (
        <SelectedFormItem key={index} form={form} />
      ))}
    </ol>
  );
};

export default SelectedFormsCollection;
