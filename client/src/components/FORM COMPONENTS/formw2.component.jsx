import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const FormW2 = () => {
  const { addFilledForm, toggleEditFormModel } = useContext(GlobalContext);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalTaxesPaid, setTotalTaxesPaid] = useState(0);
  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const formDetails = {
            type: "formw2",
            totalIncome,
            totalTaxesPaid,
          };
          addFilledForm(formDetails);
          toggleEditFormModel();
        }}
      >
        <label htmlFor="Total Income">Total Income</label>
        <input
          type="number"
          name="Total Income"
          value={totalIncome}
          onChange={(ev) => setTotalIncome(+ev.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="Total Taxes Paid">Total Taxes Paid</label>
        <input
          type="number"
          name="Total Taxes Paid"
          value={totalTaxesPaid}
          onChange={(ev) => setTotalTaxesPaid(+ev.target.value)}
          required
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

export default FormW2;
