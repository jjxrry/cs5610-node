import * as dao from "./dao.js"
import * as modulesDao from "../modules/dao.js"

export default function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = dao.findAllCourses();
        res.send(courses);
    });

    app.delete("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params
        const status = dao.deleteCourse(courseId)
        res.send(status)
    })

    app.put("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params
        const courseUpdates = req.body
        const status = dao.updateCourse(courseId, courseUpdates)
        res.send(status)
    })

    app.get("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params
        const modules = modulesDao.findModulesForCourse(courseId)
        res.json(modules)
    })

    app.post("/api/courses/:courseId/modules", async (req, res) => {
        const { courseId } = req.params
        const module = {
            ...req.body,
            course: courseId,
        }
        const newModule = await modulesDao.createModule(module)
        res.send(newModule)
    })
}


