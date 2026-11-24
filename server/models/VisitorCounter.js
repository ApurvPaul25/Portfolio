import mongoose from "mongoose";

const visitorCounterSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: "global-visitors"
    },
    count: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("VisitorCounter", visitorCounterSchema)