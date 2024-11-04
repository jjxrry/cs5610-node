import database from "../database/index.js";

export const CourseRoutes = (app) => {
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params
        const course = req.body
        database.courses = database.courses.map((c) => c._id === id ? { ...c, ...course } : c)
        res.sendStatus(204)
    })

    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params
        database.courses = database.courses.filter((c) => c._id !== id)
        res.sendStatus(204)
    })

    app.post("/api/courses", (req, res) => {
        const course = { ...req.body, _id: new Date().getTime().toString() }
        database.courses.push(course)
        res.send(course)
    })

    app.get("/api/courses", (req, res) => {
        const courses = database.courses
        res.send(courses)
    })
}
