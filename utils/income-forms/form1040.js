const { roundUp2dp } = require("../utils");

const calculateTotalTaxableIncomeAndTotalTaxLiabilty = (generatedforms) => {
  let totalTaxableIncome = 0;
  let totalTaxPaid = 0;
  generatedforms.map((form) => {
    if (form.type === "form1099" || form.type === "formw2") {
      totalTaxableIncome = totalTaxableIncome + form.totalIncome;
      if (form.type === "formw2") {
        totalTaxPaid = totalTaxPaid + form.totalTaxesPaid;
      }
    }
  });
  return { totalTaxableIncome, totalTaxPaid };
};

const calculateTotalTaxLiabilty = (totalTaxableIncome) => {
  return new Promise((resolve, reject) => {
    let Result = totalTaxableIncome;
    if (totalTaxableIncome >= 0 && totalTaxableIncome <= 100000) {
      const multiplier = 0.2;
      Result = totalTaxableIncome * multiplier;
    } else if (totalTaxableIncome >= 100000) {
      const multiplier = 0.28;
      Result = totalTaxableIncome * multiplier;
    } else {
      reject(totalTaxableIncome);
    }
    resolve(roundUp2dp(Result));
  });
};

const generateForm1040 = async (userId, generatedforms, callback) => {
  try {
    const {
      totalTaxableIncome,
      totalTaxPaid,
    } = calculateTotalTaxableIncomeAndTotalTaxLiabilty(generatedforms);

    const totalTaxLiability = await calculateTotalTaxLiabilty(
      totalTaxableIncome
    );

    const taxDifference = roundUp2dp(totalTaxPaid - totalTaxLiability);

    const form1040 = {
      userId,
      type: "form1040",
      totalTaxableIncome: totalTaxableIncome || null,
      totalTaxPaid: totalTaxPaid || null,
      totalTaxLiability: totalTaxLiability || null,
      taxDifference,
    };

    callback(form1040);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { generateForm1040 };
