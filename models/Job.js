const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
    store: { type: Number, required: true },
    customername: { type: String, required: true },
    contact: { type: String, required: true },
    deviceDesc: { type: String, required: true },
    receivedDate: { type: Date, default: Date.now },
    receivedStaff: { type: String, required: true },
    quoteStaff: { type: String },
    fullfilledDate: { type: Date },
    fullfilledStaff: { type: String },
    issueDesc: { type: String, required: true },
    quotePrice: { type: Number },
    instore: { type: Boolean, required: true },
    accessories: { type: String, default: "N/A" },
    confirmed: { type: Boolean, default:false},
    fixed: { type: Boolean, default:false}
});

jobSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Job", jobSchema);
