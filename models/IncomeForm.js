const mongoose = require("mongoose");

const IncomeFormSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  forms: {
    type: Object,
    required: [true],
  },
});

module.exports = mongoose.model("IncomeForm", IncomeFormSchema);
