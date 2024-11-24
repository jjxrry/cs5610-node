import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        title: String,
    },
    { collection: "assignments" }
)

export default assignmentSchema
