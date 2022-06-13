// requiring mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// statement schema (blueprint)
const statementSchema = new Schema(
  {
    username: {
      //referencing Users schema to grab the ObjectID of each user
      type: Schema.Types.ObjectID,
      ref: "Users",
    },
    expenses: { type: String, required: true },
    location: { type: String, required: true },
    spent: { type: Number, required: true },
    date: { type: Date, required: true },
    dateEntry: { type: Date, default: () => Date.now(), immutable: true },
  },
  { toJSON: { virtuals: true } }
);

// Virtuals:
// statementSchema.virtual("users", {
//   ref: "Users",
//   localField: "_id",
//   foreignField: "username",
// });

// creating model Statement and export
const Statement = mongoose.model("Statement", statementSchema);
module.exports = Statement;
