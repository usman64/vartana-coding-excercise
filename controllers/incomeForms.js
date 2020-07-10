const IncomeForm = require("../models/IncomeForm");
const { incomeFormGenerator } = require("../utils/income-forms/utils");
const { normalizeGeneratedForms } = require("../utils/utils");

exports.generateIncomeForms = async (req, res, next) => {
  try {
    const { forms } = req.body;
    const userId = req.user.id;
    const generatedForms = forms.map((form) =>
      incomeFormGenerator[form.type](userId, form)
    );

    let normalizedGeneratedForms = normalizeGeneratedForms(generatedForms);

    incomeFormGenerator["form1040"](
      userId,
      generatedForms,
      async (generatedform1040) => {
        normalizedGeneratedForms["form1040"] = generatedform1040;

        const incomeFormRecord = await IncomeForm.create({
          userId,
          forms: normalizedGeneratedForms,
        });

        return res.status(200).json({
          success: true,
          data: incomeFormRecord,
        });
      }
    );
  } catch (err) {
    if (err.name === "ValidatorError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
