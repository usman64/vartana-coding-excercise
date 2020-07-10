exports.roundUp2dp = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

exports.normalizeGeneratedForms = (generatedForms) => {
  let normalizedGeneratedForms = {};
  generatedForms.forEach((form) => {
    if (!normalizedGeneratedForms[form.type]) {
      normalizedGeneratedForms[form.type] = [{ ...form }];
    } else {
      normalizedGeneratedForms[form.type] = [
        ...normalizedGeneratedForms[form.type],
        { ...form },
      ];
    }
  });
  return normalizedGeneratedForms;
};

exports.getAdjustedTaxableIncomeByTaxSlab = (Result, discountRate) => {
  if (Result >= 0 && Result <= 10000) {
    return Result;
  } else if (Result > 10000 && Result <= 50000) {
    return Result - 1000.0;
  } else if (Result > 50000) {
    return Result * (1.0 - discountRate);
  } else {
    return Result;
  }
};
