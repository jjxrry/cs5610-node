import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true, trim: true },
    options: { type: [String], required: true }, // Array of answer choices
    correctAnswer: { type: String, required: true }, // The correct answer
}, { _id: false });

const quizSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
        description: { type: String, required: true, trim: true },
        totalPoints: { type: Number, required: true },
        questions: { type: [questionSchema], required: true },
        timeLimit: { type: Number, default: null },
        dueDate: { type: Date, required: true },
        availableFrom: { type: Date, required: true },
        availableUntil: { type: Date, required: true },
    },
    { collection: "quizzes", timestamps: true }
);

export default quizSchema
