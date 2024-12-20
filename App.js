import express from "express"
import session from "express-session"
import cors from "cors"
import { Hello } from "./Hello.js"
import { Lab5 } from "./lab5/index.js"
import { ModuleRoutes } from "./kanbas/modules/routes.js"
import { AssignmentRoutes } from "./kanbas/assignments/routes.js"
import UserRoutes from "./kanbas/users/routes.js"
import CourseRoutes from "./kanbas/courses/routes.js"
import "dotenv/config"
import { EnrollmentRoutes } from "./kanbas/enrollments/routes.js"

const app = express()
app.use(cors(
    {
        credentials: true,
        origin: process.env.NETLIFY_URL,
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type",
    }
))

const sessionOptions = {
    secret: "waffles",
    resave: false,
    saveUninitialized: false,
}

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    }
}

app.use(
    session(sessionOptions)
)
app.use(express.json())
UserRoutes(app)
CourseRoutes(app)
AssignmentRoutes(app)
ModuleRoutes(app)
EnrollmentRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)
