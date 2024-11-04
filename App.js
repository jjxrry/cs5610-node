import express from "express"
import cors from "cors"
import { Hello } from "./Hello.js"
import { Lab5 } from "./lab5/index.js"
import { CourseRoutes } from "./kanbas/courses/routes.js"
import { ModuleRoutes } from "./kanbas/modules/routes.js"
import { AssignmentRoutes } from "./kanbas/assignments/routes.js"

const app = express()
app.use(cors())
app.use(express.json())
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)
