import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import { GlobalContext } from "../../context/globalState";

const Form1099 = () => {
  const { addFilledForm, toggleEditFormModel } = useContext(GlobalContext);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalBusinessExpense, setTotalBusinessExpense] = useState(0);
  const [totalMilesDriven, setTotalMilesDriven] = useState(0);
  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const formDetails = {
            type: "form1099",
            totalIncome,
            totalBusinessExpense,
            totalMilesDriven,
          };
          addFilledForm(formDetails);
          toggleEditFormModel();
        }}
      >
        <label htmlFor="Total Income">Total Income</label>
        <input
          required
          type="number"
          name="Total Income"
          value={totalIncome}
          onChange={(ev) => setTotalIncome(+ev.target.value)}
        />
        <br />
        <br />
        <label htmlFor="Total Business Expense">Total Business Expense</label>
        <input
          required
          type="number"
          name="Total Business Expense"
          value={totalBusinessExpense}
          onChange={(ev) => setTotalBusinessExpense(+ev.target.value)}
        />
        <br />
        <br />
        <label htmlFor="Total Miles Driven">Total Miles Driven</label>
        <input
          required
          type="number"
          name="Total Miles Driven"
          value={totalMilesDriven}
          onChange={(ev) => setTotalMilesDriven(+ev.target.value)}
        />
        <br />
        <br />
        <button type="submit" color="secondary" variant="contained">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form1099;
