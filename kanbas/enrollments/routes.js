import * as enrollmentsDao from "./dao.js"

export const EnrollmentRoutes = (app) => {
    app.post("/api/enrollments/enroll", (req, res) => {
        const { userId, courseId } = req.body
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId)
        // console.log("ENROLL ROUTES")
        res.json(enrollment)
    });

    app.delete("/api/enrollments/unenroll", (req, res) => {
        const { userId, courseId } = req.body
        // console.log("UNENROLL ROUTES")
        enrollmentsDao.unenrollUser(userId, courseId)
        res.json(enrollmentsDao.findCoursesForUser(userId))
    })

    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params
        const enrollments = enrollmentsDao.findCoursesForUser(userId)
        res.json(enrollments)
    })
}
