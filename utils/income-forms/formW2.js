const { getAdjustedTaxableIncomeByTaxSlab, roundUp2dp } = require("../utils");

const calculateTotalTaxableIncomeFormW2 = (totalIncome) => {
  const Result = totalIncome;
  const discountRate = 0.02;
  return getAdjustedTaxableIncomeByTaxSlab(Result, discountRate);
};

const generateFormW2 = (userId, form) => {
  let { type, totalIncome, totalTaxesPaid } = form;
  totalIncome = roundUp2dp(totalIncome);
  totalTaxesPaid = roundUp2dp(totalTaxesPaid);
  const totalTaxableIncome = calculateTotalTaxableIncomeFormW2(totalIncome);

  const formW2 = {
    userId,
    type: type.toLowerCase(),
    totalIncome,
    totalTaxesPaid,
    totalTaxableIncome,
  };

  return formW2;
};

module.exports = { generateFormW2 };
