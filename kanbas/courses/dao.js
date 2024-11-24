import Database from "../database/index.js" //fix casing
import model from "./model.js"

export const findAllCourses = () => {
    return model.find()
}

export const findCoursesForEnrolledUser = (userId) => {
    const { courses, enrollments } = Database
    const enrolledCourses = courses.filter((course) =>
        enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id)
    )
    return enrolledCourses
}

export const createCourse = (course) => {
    // this could be an issue because im deleting the json id field anyway
    delete course._id
    return model.create(course)
}

export const deleteCourse = (courseId) => {
    return model.deleteOne({ _id: courseId })
}

export const updateCourse = (courseId, courseUpdates) => {
    return model.updateOne({ _id: courseId }, courseUpdates)
}
