import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    selectedAnswer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    points: { type: Number, required: true }
});

const scoreSchema = new mongoose.Schema({
    score: { type: Number, required: true },
    endTime: { type: Date, required: true },
})

const attemptSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
        quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel", required: true },
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
        attemptNumber: { type: Number, required: true },
        answers: [answerSchema],
        totalPoints: { type: Number, required: true },
        scores: { type: [scoreSchema], required: true },
        completed: { type: Boolean, default: false },
        startTime: { type: Date, required: true },
        endTime: { type: Date },
        timeSpent: { type: Number }
    },
    { collection: "attempts", timestamps: true }
);

export default attemptSchema;

