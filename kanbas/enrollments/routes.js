import * as enrollmentsDao from "./dao.js"

export const EnrollmentRoutes = (app) => {
    app.post("/api/enrollments/enroll", (req, res) => {
        const { userId, courseId } = req.body
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId)
        if (!enrollment) return res.send(404).json({ message: "failed to enroll" })
        res.json(enrollment)
    });

    app.delete("/api/enrollments/unenroll", (req, res) => {
        const { userId, courseId } = req.body
        const isUnenrolled = enrollmentsDao.unenrollUser(userId, courseId)
        if (isUnenrolled) {
            return res.sendStatus(204)
        } else {
            return res.send(404).json({ message: "failed to unenroll" })
        }
    })

    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params
        const enrollments = enrollmentsDao.getEnrollmentsForUser(userId)
        res.json(enrollments)
    })
}
