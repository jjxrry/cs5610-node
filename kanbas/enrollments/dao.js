import Database from "../database/index.js" //fix casing

export const enrollUserInCourse = (userId, courseId) => {
    const { enrollments } = Database;
    const existingEnrollment = enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === courseId)
    if (existingEnrollment) return false
    const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId };
    Database.enrollments.push(newEnrollment);
    return newEnrollment
}

export const unenrollUser = (userId, courseId) => {
    const { enrollments } = Database
    const initialLength = enrollments.length;
    Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
    return Database.enrollments.length < initialLength;
}

export const getEnrollmentsForUser = (userId) => {
    const { enrollments } = Database
    return enrollments.filter((enrollment) => enrollment.user === userId)
}
