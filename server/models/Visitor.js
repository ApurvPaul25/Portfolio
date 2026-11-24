import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema(
    {
        visitorId:{
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        visitorNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        firstVisitedAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Visitor", VisitorSchema)