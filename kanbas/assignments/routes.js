import db from "../database/index.js";
import model from "./model.js"
import * as assignmentDao from "./dao.js"

export const AssignmentRoutes = (app) => {
    // update
    app.put("/api/courses/:cid/assignments/:aid", async (req, res) => {
        const { aid } = req.params
        const assignmentUpdates = req.body
        const assignmentIndex = await assignmentDao.updateAssignment(aid, assignmentUpdates)
        if (!assignmentIndex) return res.sendStatus(400)
        res.sendStatus(204)
    })

    // delete
    app.delete("/api/courses/:cid/assignments/:aid", async (req, res) => {
        const { aid } = req.params
        const isDeleted = await assignmentDao.deleteAssignment(aid)
        if (isDeleted) {
            return res.sendStatus(204)
        } else {
            return res.sendStatus(404)
        }

    })

    // create
    app.post("/api/courses/:cid/assignments", async (req, res) => {
        const newAssignment = req.body
        const assignmentCreated = await assignmentDao.createAssignment(newAssignment)
        if (assignmentCreated) {
            return res.sendStatus(201)
        } else {
            return res.sendStatus(404)
        }
    })

    // get all
    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const assignments = await assignmentDao.findAssignmentsForCourse(cid)
        res.json(assignments)
    });

    // get one
    app.get("/api/courses/:cid/assignments/:aid", async (req, res) => {
        const { cid, aid } = req.params;
        const assignments = await assignmentDao.findAssignmentById(cid, aid)
        res.json(assignments)
    });

}

