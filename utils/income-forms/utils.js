const { generateForm1099 } = require("./form1099");
const { generateFormW2 } = require("./formW2");
const { generateForm1040 } = require("./form1040.js");

exports.incomeFormGenerator = {
  form1099: generateForm1099,
  formw2: generateFormW2,
  form1040: generateForm1040,
};

// exports.getAdjustedTaxableIncomeByTaxSlab = (Result, discountRate) => {
//   if (Result >= 0 && Result <= 10000) {
//     return Result;
//   } else if (Result > 10000 && Result <= 50000) {
//     return Result - 1000.0;
//   } else if (Result > 50000) {
//     return Result * (1.0 - discountRate);
//   } else {
//     return Result;
//   }
// };
