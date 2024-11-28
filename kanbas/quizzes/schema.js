import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true, trim: true },
    questionType: {
        type: String,
        enum: ["multiple-choice", "true-false", "short-answer"],
        required: true
    },
    options: {
        type: [String],
        required: function() { return this.questionType === "multiple-choice"; },
        validate: [arrayLimit, 'Options should be at least 2 for multiple-choice']
    },
    correctAnswer: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
}, { _id: false });

function arrayLimit(val) {
    return val.length >= 2;
}

const quizSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
        description: { type: String, required: true, trim: true },
        totalPoints: {
            type: Number,
            required: true,
            default: 0,
        },
        questions: { type: [questionSchema], required: true },
        quizType: {
            type: String,
            enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
            default: "Graded Quiz"
        },
        assignmentGroup: {
            type: String,
            enum: ["Quizzes", "Exams", "Assignments", "Project"],
            default: "Quizzes"
        },
        shuffleAnswers: { type: Boolean, default: true },
        timeLimit: { type: Number, default: 20 },
        multipleAttempts: { type: Boolean, default: false },
        showCorrectAnswers: { type: Boolean, default: false },
        accessCode: { type: String, default: "" },
        oneQuestionAtATime: { type: Boolean, default: true },
        webcamRequired: { type: Boolean, default: false },
        lockQuestionsAfterAnswering: { type: Boolean, default: false },
        dueDate: { type: Date, required: true },
        availableFrom: { type: Date, required: true },
        availableUntil: { type: Date, required: true },
        published: { type: Boolean, required: true, default: false }
    },
    { collection: "quizzes", timestamps: true }
);

export default quizSchema;

