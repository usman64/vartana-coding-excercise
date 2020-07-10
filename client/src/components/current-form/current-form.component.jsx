import React from "react";
import { IncomeFormComponents } from "../FORM COMPONENTS/utils";

const CurrentIncomeForm = ({ currentFormEditing }) => {
  let CurrentForm =
    currentFormEditing === "" ? null : IncomeFormComponents[currentFormEditing];
  return <CurrentForm />;
};

export default CurrentIncomeForm;
