const { getAdjustedTaxableIncomeByTaxSlab, roundUp2dp } = require("../utils");

const calculateTotalTaxableIncomeForm1099 = (
  totalIncome,
  totalBusinessExpense,
  totalMilesDriven
) => {
  const dollarRate = 2.1;
  const Result =
    totalIncome - totalBusinessExpense - dollarRate * totalMilesDriven;
  const discountRate = 0.02;
  const adjustedTaxableIncome = getAdjustedTaxableIncomeByTaxSlab(
    Result,
    discountRate
  );
  return adjustedTaxableIncome;
};

const generateForm1099 = (userId, form) => {
  let { type, totalIncome, totalBusinessExpense, totalMilesDriven } = form;
  totalIncome = roundUp2dp(totalIncome);
  totalBusinessExpense = roundUp2dp(totalBusinessExpense);
  totalMilesDriven = Math.round(totalMilesDriven);

  const totalTaxableIncome = calculateTotalTaxableIncomeForm1099(
    totalIncome,
    totalBusinessExpense,
    totalMilesDriven
  );

  const form1099 = {
    userId,
    type,
    totalIncome,
    totalBusinessExpense,
    totalMilesDriven,
    totalTaxableIncome: roundUp2dp(totalTaxableIncome),
  };

  return form1099;
};

module.exports = { generateForm1099 };
