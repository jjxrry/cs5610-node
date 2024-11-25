import model from "./model.js"

export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz)
}

export const getPublishedQuizzesByCourse = (courseId) => {
    return model.find({ course: courseId, published: true })
}

export const getQuizzesByCourse = (courseId) => {
    return model.find({ course: courseId })
}

export const getQuizById = (quizId) => {
    return model.findById(quizId)
}

export const updateQuiz = (quizId, updatedQuiz) => {
    return model.updateOne({ _id: quizId }, updatedQuiz)
}

export const deleteQuiz = (quizId) => {
    return model.findByIdAndDelete(quizId)
}

export const publishQuiz = (quizId) => {
    return model.findByIdAndUpdate({ _id: quizId }, { published: true })
}

