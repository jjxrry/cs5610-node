import * as dao from "./dao.js"

export const AttemptRoutes = (app) => {
    app.get("/api/courses/:cid/quizzes/:qid/:attemptId", async (req, res) => {
        const attemptId = req.params
        const attempt = await dao.getAttemptById(attemptId)
        if (!attempt) return res.sendStatus(404)
        return res.json(attempt)
    })

    app.post("/api/courses/:cid/quizzes/:qid/attempts", async (req, res) => {
        const attempt = req.body
        const posted = await dao.createAttempt(attempt)
        if (!posted) return res.sendStatus(400)
        return res.status(201).json({ message: "created attempt" })
    })

    app.put("/api/courses/:cid/quizzes/:qid/:attemptId", async (req, res) => {
        const { attemptId } = req.params
        const updatedAttempt = req.body
        const updated = await dao.updateAttempt(attemptId, updatedAttempt)
        if (!updated) return res.sendStatus(400)
        return res.status(200).json({ message: "updated attempt" })
    })
}

