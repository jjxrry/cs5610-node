import model from "./model.js"
import mongoose from "mongoose";


export const createAttempt = (attempt) => {
    delete attempt._id
    attempt.user = new mongoose.Types.ObjectId(attempt.user)
    attempt.courseId = new mongoose.Types.ObjectId(attempt.courseId)
    attempt.quizId = new mongoose.Types.ObjectId(attempt.quizId)
    return model.create(attempt)
}

export const getLastAttempt = (attemptId) => {
    return model.findById(attemptId)
}



// export const createQuiz = (quiz, courseId, createdId) => {
//     delete quiz._id
//     quiz.createdBy = new mongoose.Types.ObjectId(quiz.createdBy);
//     quiz.course = new mongoose.Types.ObjectId(quiz.course);
//     return model.create(quiz)
// }
//
// export const getPublishedQuizzesByCourse = (courseId) => {
//     return model.find({ course: courseId, published: true })
// }
//
// export const getQuizzesByCourse = (courseId) => {
//     return model.find({ course: courseId })
// }
//
// export const getQuizById = (quizId) => {
//     return model.findById(quizId)
// }
//
// export const updateQuiz = (quizId, updatedQuiz) => {
//     return model.updateOne({ _id: quizId }, updatedQuiz)
// }
//
// export const deleteQuiz = (quizId) => {
//     return model.findByIdAndDelete(quizId)
// }
//
// export const publishQuiz = (quizId) => {
//     return model.findByIdAndUpdate({ _id: quizId }, { published: true })
// }
//
// export const unpublishQuiz = (quizId) => {
//     return model.findByIdAndUpdate({ _id: quizId }, { published: false })
// }
