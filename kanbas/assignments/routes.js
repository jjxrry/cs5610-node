import db from "../database/index.js";

export const AssignmentRoutes = (app) => {

    // update
    app.put("/api/courses/:cid/assignments/:aid", (req, res) => {
        const { cid, aid } = req.params
        const assignmentIndex = db.assignments.findIndex((a) => a._id === aid && a.course === cid);

        if (assignmentIndex !== -1) {
            db.assignments[assignmentIndex] = { ...db.assignments[assignmentIndex], ...req.body }
            res.json(db.assignments[assignmentIndex])
        } else {
            res.status(404).send({ message: "Assignment not found" })
        }
    })

    // delete
    app.delete("/api/courses/:cid/assignments/:aid", (req, res) => {
        const { cid, aid } = req.params
        db.assignments = db.assignments.filter((a) => a._id !== aid || a.course !== cid)
        res.sendStatus(200)
    })

    // create
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        }
        db.assignments.push(newAssignment)
        res.send(newAssignment)
    })

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter((a) => a.course === cid);
        res.json(assignments);
    });
}
