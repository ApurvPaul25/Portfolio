import mongoose from "mongoose"

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://Jay:tldhrlkOqhbyLYAW@portfolio-complete-back.pkqfpcj.mongodb.net/peda")
        console.log("Connected to DB")
    } catch (error) {
        console.error("MongoDB connection failed:", error.message)
        process.exit(1)
    }
}

export default connectDB