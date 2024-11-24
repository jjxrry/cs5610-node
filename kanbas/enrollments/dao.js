import Database from "../database/index.js" //fix casing
import model from "./model.js"

// export const enrollUserInCourse = (userId, courseId) => {
//     const { enrollments } = Database;
//     const existingEnrollment = enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === courseId)
//
//     if (existingEnrollment) return false
//
//     const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId };
//     Database.enrollments = [...enrollments, newEnrollment]
//     return newEnrollment
// }

// export const unenrollUser = (userId, courseId) => {
//     const { enrollments } = Database;
//     Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId))
// }

export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}


export const getEnrollmentsForUser = (userId) => {
    const { enrollments } = Database
    return enrollments.filter((enrollment) => enrollment.user === userId)
}
