import * as modulesDao from "./dao.js"
import * as dao from "./dao.js"

export const ModuleRoutes = (app) => {
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params
        const moduleUpdates = req.body
        const moduleIndex = await modulesDao.updateModule(moduleId, moduleUpdates)
        if (!moduleIndex) return res.sendStatus(400)
        res.sendStatus(204)
    })

    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params
        const isDeleted = await modulesDao.deleteModule(moduleId)
        if (isDeleted) {
            return res.sendStatus(204)
        } else {
            return res.sendStatus(404)
        }
    })

    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const modules = await modulesDao.findModulesForCourse(cid)
        res.json(modules);
    });
}
