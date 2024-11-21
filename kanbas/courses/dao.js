import Database from "../Database/index.js";

export const findAllCourses = () => {
    return Database.courses;
}

export const findCoursesForEnrolledUser = (userId) => {
    const { courses, enrollments } = Database
    const enrolledCourses = courses.filter((course) =>
        enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id)
    )
    return enrolledCourses
}

export const createCourse = (course) => {
    const newCourse = { ...course, _id: Date.now().toString() }
    Database.courses = [...Database.courses, newCourse]
    return newCourse
}

export const deleteCourse = (courseId) => {
    const { courses, enrollments } = Database
    Database.courses = courses.filter((course) => course._id !== courseId)
    Database.enrollments = enrollments.filter((enrollment) => enrollment.course !== courseId)
}

export const updateCourse = (courseId, courseUpdates) => {
    const { courses } = Database
    const course = courses.find((course) => course._id === courseId)
    Object.assign(course, courseUpdates)
    return course
}
