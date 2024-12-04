import * as dao from "./dao.js"

export const AttemptRoutes = (app) => {
    // app.get("/api/courses/:cid/quizzes/:qid/attempts/:uid", async (req, res) => {
    //     const { cid, qid, uid } = req.params
    //     if (qid === "new") return res.send(400).json({ message: "new quiz no attempts" })
    //     const attempt = await dao.getAttemptByUserId(cid, qid, uid)
    //     if (!attempt) return res.sendStatus(404)
    //     return res.json(attempt)
    // })
    app.get("/api/courses/:cid/quizzes/:qid/attempts/:uid", async (req, res) => {
        const { cid, qid, uid } = req.params;

        if (qid === "new") {
            return res.status(400).json({ message: "new quiz no attempts" });
        }

        try {
            const attempt = await dao.getAttemptByUserId(cid, qid, uid);

            if (!attempt) {
                return res.sendStatus(404);
            }

            return res.json(attempt);
        } catch (error) {
            console.error("Error fetching attempt:", error);
            return res.status(500).json({ message: "Server error" });
        }
    })

    app.post("/api/courses/:cid/quizzes/:qid/attempts", async (req, res) => {
        console.log("Request received with params:", req.params, "and body:", req.body);
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
