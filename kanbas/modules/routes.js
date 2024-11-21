import * as modulesDao from "./dao.js"

export const ModuleRoutes = (app) => {
    app.put("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params
        const moduleUpdates = req.body
        const moduleIndex = modulesDao.updateModule(moduleId, moduleUpdates)
        if (!moduleIndex) return res.sendStatus(400)
        res.sendStatus(204)
    })

    app.delete("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params
        const isDeleted = modulesDao.deleteModule(moduleId)
        if (isDeleted) {
            return res.sendStatus(204)
        } else {
            return res.sendStatus(404)
        }
    })

    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules.filter((m) => m.course === cid);
        res.json(modules);
    });
}
