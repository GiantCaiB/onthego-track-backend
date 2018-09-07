const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
    jobID: { type: Number, unique: true, required: true },
    store: { type: Number, required: true },
    customername: { type: String, required: true },
    contact: { type: Number, required: true },
    deviceDesc: { type: String, required: true },
    receivedDate: { type: Date, default: Date.now },
    receivedStaff: { type: String, required: true },
    quoteDate: { type: Date },
    quoteStaff: { type: String },
    fullfilledDate: { type: Date },
    fullfilledStaff: { type: String },
    issueDesc: { type: String, required: true },
    quotePrice: { type: Number },
    instore: { type: Boolean, required: true },
    accessories: { type: String, default: "N/A" },
    confirmed: { type: Boolean },
    fixed: { type: Boolean }
});

jobSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Job", jobSchema);
