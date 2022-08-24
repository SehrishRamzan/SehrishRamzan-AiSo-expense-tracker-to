let mongoose = require("mongoose");

let ExpenseSchema = mongoose.Schema({
  description: String,
  amount: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  }, 
},
{
  timestamps: true
}
);
let Expenses = mongoose.model("Expense", ExpenseSchema);
module.exports = Expenses;
