import mongoose from "mongoose";

const mediaOptionsSchema = new mongoose.Schema({
    textEntry: { type: Boolean, default: false },
    websiteUrl: { type: Boolean, default: false },
    mediaRecordings: { type: Boolean, default: false },
    studentAnnotation: { type: Boolean, default: false },
    fileUpload: { type: Boolean, default: false },
}, { _id: false });

const assignmentSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
        description: { type: String, required: true },
        points: { type: Number, required: true },
        assignTo: {
            type: String,
            enum: ['Everyone', 'Specific Students'],
            default: 'Everyone'
        },
        dueDate: { type: Date, required: true },
        availableFrom: { type: Date, required: true },
        availableUntil: { type: Date, required: true },
        assignmentGroup: {
            type: String,
            enum: ['ASSIGNMENTS', 'QUIZZES', 'EXAMS'],
            default: 'ASSIGNMENTS'
        },
        displayGradeAs: {
            type: String,
            enum: ['Percentage', 'Points'],
            default: 'Percentage'
        },
        submissionType: {
            type: String,
            enum: ['Online', 'Offline'],
            default: 'Online'
        },
        mediaOptions: { type: mediaOptionsSchema, default: () => ({}) },
    },
    { collection: "assignments" }
)

export default assignmentSchema
