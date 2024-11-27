import * as dao from "./dao.js"

export const QuizRoutes = (app) => {
    //update
    app.put("/api/courses/:cid/quizzes/:qid", async (req, res) => {
        const { cid, qid } = req.params
        const quizUpdates = req.body
        const quizIndex = await dao.updateQuiz(qid, quizUpdates)
        if (!quizIndex) return res.sendStatus(400)
        res.sendStatus(204)

    })

    //delete
    app.delete("/api/courses/:cid/quizzes/:qid", async (req, res) => {
        const { qid } = req.params
        const isDeleted = await dao.deleteQuiz(qid)
        if (isDeleted) {
            return res.sendStatus(204)
        } else {
            return res.sendStatus(404)
        }
    })

    //get all
    app.get("/api/courses/:cid/quizzes/", async (req, res) => {
        const { cid } = req.params
        const quizzes = await dao.getQuizzesByCourse(cid)
        res.json(quizzes)
    });

    //get by Id
    app.get("/api/courses/:cid/quizzes/:qid", async (req, res) => {
        const { qid } = req.params
        const quiz = await dao.getQuizById(qid)
        res.json(quiz)
    });

    //get published quizzes
    app.get("/api/courses/:cid/quizzes/published", async (req, res) => {
        const { cid } = req.params
        const publishedQuizzes = await dao.getPublishedQuizzesByCourse(cid)
        if (!publishedQuizzes) {
            return res.sendStatus(404)
        } else {
            return res.json(publishedQuizzes)
        }
    })


    //publish quiz
    app.put("/api/courses/:cid/quizzes/:qid/publish", async (req, res) => {
        const { qid } = req.params
        const publishedQuiz = await dao.publishQuiz(qid)
        if (!publishedQuiz) {
            return res.sendStatus(404)
        } else {
            return res.json(publishedQuiz)
        }
    })

}

